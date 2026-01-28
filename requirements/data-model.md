# Marketplace Platform - Data Model Specification

## Executive Summary

This document specifies a complete data model for a two-sided marketplace platform using Convex as the backend database with real-time synchronization capabilities. The model provides **generic, reusable patterns** that can be adapted to various marketplace domains.

### Generic Marketplace Patterns (Reusable)

The following patterns are domain-agnostic and can be used in any two-sided marketplace:

- **Authentication System**: User accounts, sessions, and OAuth provider integration (BetterAuth)
- **Entity-Based Identity**: Prevents reputation reset - organizations persist separately from users
- **Order State Machine**: Flexible workflow states with full audit trail
- **Escrow Payment System**: Secure funds handling with auto-approval timelines
- **Messaging System**: Real-time conversations between parties
- **Notifications System**: Multi-channel notification delivery
- **Trust & Reputation System**: Two-way reviews and scoring
- **Dispute Resolution**: Structured conflict handling
- **Audit Logging**: Complete action history for compliance

### Domain Configuration Required

When implementing for a specific domain, you will need to customize:

- Service provider profile fields (skills, equipment, availability)
- Job/Brief specifications (deliverables, requirements)
- Domain-specific badge definitions
- Content submission requirements
- Usage tracking rules (if applicable)

See "Domain-Specific Extensions (Example)" section for a UGC creator marketplace implementation example.

---

## 1. Authentication Tables (BetterAuth Integration)

BetterAuth with Convex creates and manages these tables automatically. We extend the user table with custom fields.

### 1.1 `users` (BetterAuth managed, extended)

This table is managed by BetterAuth but extended with custom fields for our application.

```typescript
// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// BetterAuth user table with extensions
users: defineTable({
  // BetterAuth core fields (auto-managed)
  email: v.string(),
  emailVerified: v.boolean(),
  name: v.optional(v.string()),
  image: v.optional(v.string()),

  // Custom extensions
  role: v.union(v.literal("brand"), v.literal("creator"), v.literal("admin")),
  onboardingCompleted: v.boolean(),
  createdAt: v.number(), // timestamp
  updatedAt: v.number(),
})
  .index("by_email", ["email"])
  .index("by_role", ["role"]);
```

### 1.2 `sessions` (BetterAuth managed)

```typescript
sessions: defineTable({
  userId: v.id("users"),
  token: v.string(),
  expiresAt: v.number(),
  ipAddress: v.optional(v.string()),
  userAgent: v.optional(v.string()),
  createdAt: v.number(),
  updatedAt: v.number(),
})
  .index("by_token", ["token"])
  .index("by_userId", ["userId"]);
```

### 1.3 `accounts` (BetterAuth managed - OAuth providers)

```typescript
accounts: defineTable({
  userId: v.id("users"),
  providerId: v.string(), // "google", "apple", etc.
  providerAccountId: v.string(),
  accessToken: v.optional(v.string()),
  refreshToken: v.optional(v.string()),
  expiresAt: v.optional(v.number()),
  createdAt: v.number(),
  updatedAt: v.number(),
})
  .index("by_userId", ["userId"])
  .index("by_provider", ["providerId", "providerAccountId"]);
```

---

## 2. Brand Entity System

### 2.1 `brandEntities`

The core entity that persists brand identity across users and time. This is separate from users to enable:

- Multiple users per brand
- Brand reputation that cannot be reset
- Agency management of multiple brands

```typescript
brandEntities: defineTable({
  // Identity
  name: v.string(),
  slug: v.string(), // URL-friendly unique identifier

  // Verification
  website: v.optional(v.string()),
  websiteVerified: v.boolean(),
  logoStorageId: v.optional(v.id("_storage")),

  // Social verification (OAuth-linked)
  verifiedSocials: v.array(
    v.object({
      platform: v.union(
        v.literal("instagram"),
        v.literal("tiktok"),
        v.literal("facebook"),
        v.literal("youtube"),
        v.literal("twitter"),
      ),
      handle: v.string(),
      verifiedAt: v.number(),
    }),
  ),

  // Ad account connections (for usage compliance)
  connectedAdAccounts: v.array(
    v.object({
      platform: v.union(
        v.literal("meta"),
        v.literal("tiktok"),
        v.literal("google"),
      ),
      accountId: v.string(),
      connectedAt: v.number(),
      isActive: v.boolean(),
    }),
  ),

  // Subscription (Polar)
  subscriptionTier: v.union(
    v.literal("starter"),
    v.literal("growth"),
    v.literal("scale"),
    v.literal("enterprise"),
  ),
  subscriptionStatus: v.union(
    v.literal("active"),
    v.literal("past_due"),
    v.literal("canceled"),
    v.literal("trialing"),
  ),
  polarCustomerId: v.optional(v.string()),
  polarSubscriptionId: v.optional(v.string()),
  briefsAllowedPerMonth: v.number(),
  briefsUsedThisMonth: v.number(),
  billingCycleStart: v.number(),

  // Trust & Integrity (aggregated scores)
  trustLevel: v.number(), // 1-5
  integrityScore: v.number(), // 0-100
  totalOrdersCompleted: v.number(),
  totalOrdersDisputed: v.number(),
  averageApprovalTimeHours: v.number(),

  // Auto-accept configuration
  autoAcceptEnabled: v.boolean(),
  autoAcceptCriteria: v.optional(
    v.object({
      minCreatorLevel: v.number(),
      minReliabilityScore: v.number(),
      requiredBadges: v.array(v.string()),
      requirePreviousWork: v.boolean(),
      requireNoActiveDisputes: v.boolean(),
    }),
  ),

  // Admin flags
  isVerified: v.boolean(), // Platform verified brand
  isSuspended: v.boolean(),
  suspensionReason: v.optional(v.string()),

  // Linked entities (for fraud detection)
  linkedEntityIds: v.array(v.id("brandEntities")), // Admin-merged duplicates

  createdAt: v.number(),
  updatedAt: v.number(),
})
  .index("by_slug", ["slug"])
  .index("by_polarCustomerId", ["polarCustomerId"])
  .index("by_trustLevel", ["trustLevel"])
  .index("by_subscriptionStatus", ["subscriptionStatus"])
  .searchIndex("search_name", {
    searchField: "name",
    filterFields: ["isVerified", "trustLevel"],
  });
```

### 2.2 `brandMembers`

Links users to brand entities with role-based permissions.

```typescript
brandMembers: defineTable({
  userId: v.id("users"),
  brandEntityId: v.id("brandEntities"),
  role: v.union(v.literal("owner"), v.literal("admin"), v.literal("member")),
  invitedBy: v.optional(v.id("users")),
  invitedAt: v.number(),
  acceptedAt: v.optional(v.number()),
  status: v.union(
    v.literal("pending"),
    v.literal("active"),
    v.literal("removed"),
  ),
  createdAt: v.number(),
  updatedAt: v.number(),
})
  .index("by_userId", ["userId"])
  .index("by_brandEntityId", ["brandEntityId"])
  .index("by_userId_brandEntityId", ["userId", "brandEntityId"])
  .index("by_status", ["status"]);
```

---

## 3. Service Provider Profiles (Generic Pattern)

### 3.1 `serviceProviderProfiles`

Generic profile for service providers in the marketplace. This table contains common fields that apply to any service provider, regardless of domain.

```typescript
serviceProviderProfiles: defineTable({
  userId: v.id("users"),

  // Display info
  displayName: v.string(),
  bio: v.optional(v.string()),
  avatarStorageId: v.optional(v.id("_storage")),

  // Languages (common across domains)
  languages: v.array(
    v.object({
      language: v.string(),
      accent: v.optional(v.string()),
      fluency: v.union(
        v.literal("native"),
        v.literal("fluent"),
        v.literal("conversational"),
      ),
    }),
  ),

  // Availability (generic)
  typicalTurnaroundDays: v.number(),
  isAvailable: v.boolean(),
  availabilityNote: v.optional(v.string()),

  // Rates (generic - customize unit for your domain)
  baseRate: v.number(), // in cents - per unit varies by domain
  rushFeePercentage: v.optional(v.number()),

  // Location (for physical goods/services)
  shippingAddress: v.optional(
    v.object({
      country: v.string(),
      state: v.optional(v.string()),
      city: v.optional(v.string()),
      postalCode: v.optional(v.string()),
      addressLine1: v.optional(v.string()),
      addressLine2: v.optional(v.string()),
    }),
  ),
  locationVerified: v.boolean(),

  // Verification
  identityVerified: v.boolean(),
  identityVerifiedAt: v.optional(v.number()),

  // Trust & Reliability (aggregated scores)
  trustLevel: v.number(), // 1-5
  reliabilityScore: v.number(), // 0-100
  totalOrdersCompleted: v.number(),
  totalOrdersDisputed: v.number(),
  averageDeliveryDaysEarly: v.number(), // negative = late
  revisionRate: v.number(), // percentage of orders requiring revisions

  // Badges (earned through behavior - badge types are domain-specific)
  badges: v.array(
    v.object({
      type: v.string(), // Domain-specific badge types
      earnedAt: v.number(),
      expiresAt: v.optional(v.number()),
    }),
  ),

  // Payout (Polar)
  polarAccountId: v.optional(v.string()),
  payoutEnabled: v.boolean(),

  // Status
  profileStatus: v.union(
    v.literal("incomplete"),
    v.literal("pending_review"),
    v.literal("active"),
    v.literal("suspended"),
  ),
  suspensionReason: v.optional(v.string()),

  // Domain-specific extensions stored as JSON
  // Each domain should define their own extension schema
  domainExtensions: v.optional(v.any()),

  createdAt: v.number(),
  updatedAt: v.number(),
})
  .index("by_userId", ["userId"])
  .index("by_profileStatus", ["profileStatus"])
  .index("by_trustLevel", ["trustLevel"])
  .index("by_reliabilityScore", ["reliabilityScore"])
  .index("by_isAvailable", ["isAvailable"])
  .searchIndex("search_provider", {
    searchField: "displayName",
    filterFields: ["profileStatus", "trustLevel", "isAvailable"],
  });
```

### 3.2 `providerPortfolio`

Portfolio items/samples for service providers.

```typescript
providerPortfolio: defineTable({
  providerProfileId: v.id("serviceProviderProfiles"),

  type: v.union(
    v.literal("video"),
    v.literal("image"),
    v.literal("link"),
    v.literal("document"),
  ),

  // For uploaded content
  storageId: v.optional(v.id("_storage")),

  // For external links
  externalUrl: v.optional(v.string()),

  // Metadata
  title: v.optional(v.string()),
  description: v.optional(v.string()),
  category: v.optional(v.string()), // Domain-specific categorization

  // Ordering
  sortOrder: v.number(),

  // Visibility
  isPublic: v.boolean(),

  createdAt: v.number(),
  updatedAt: v.number(),
})
  .index("by_providerProfileId", ["providerProfileId"])
  .index("by_providerProfileId_sortOrder", ["providerProfileId", "sortOrder"]);
```

---

## 4. Job/Brief System (Generic Pattern)

### 4.1 `jobs`

Generic job/brief entity for service requests. Customize the `requirements` and `deliverables` fields for your domain.

```typescript
jobs: defineTable({
  clientEntityId: v.id("brandEntities"), // The requesting organization
  createdByUserId: v.id("users"),

  // Basic info
  title: v.string(),
  internalReference: v.optional(v.string()), // Client's internal ID
  description: v.string(),

  // Requirements (domain-specific - store as structured JSON)
  requirements: v.any(), // Define schema per domain

  // Deliverables (domain-specific - store as structured JSON)
  deliverables: v.any(), // Define schema per domain

  // Physical goods (if applicable)
  requiresPhysicalItems: v.boolean(),
  physicalItemNotes: v.optional(v.string()),

  // Budget
  budgetPerUnit: v.number(), // in cents
  totalBudget: v.number(), // in cents
  providersNeeded: v.number(),

  // Timeline
  applicationDeadline: v.optional(v.number()),
  deliveryDeadlineDays: v.number(), // Days after work starts

  // Revision policy
  revisionsIncluded: v.number(),

  // Sourcing
  sourcingType: v.union(
    v.literal("open"), // Open to marketplace
    v.literal("invite_only"), // Only invited providers
    v.literal("matched"), // Platform-matched providers
  ),

  // Status
  status: v.union(
    v.literal("draft"),
    v.literal("pending_approval"),
    v.literal("active"), // Open for applications
    v.literal("in_progress"), // Has active orders
    v.literal("completed"),
    v.literal("canceled"),
  ),

  createdAt: v.number(),
  updatedAt: v.number(),
  publishedAt: v.optional(v.number()),
})
  .index("by_clientEntityId", ["clientEntityId"])
  .index("by_status", ["status"])
  .index("by_clientEntityId_status", ["clientEntityId", "status"])
  .index("by_createdAt", ["createdAt"])
  .index("by_sourcingType_status", ["sourcingType", "status"])
  .searchIndex("search_jobs", {
    searchField: "title",
    filterFields: ["status", "sourcingType"],
  });
```

### 4.2 `jobInvitations`

Invitations sent to specific service providers.

```typescript
jobInvitations: defineTable({
  jobId: v.id("jobs"),
  providerProfileId: v.id("serviceProviderProfiles"),
  invitedByUserId: v.id("users"),

  status: v.union(
    v.literal("pending"),
    v.literal("viewed"),
    v.literal("accepted"),
    v.literal("declined"),
    v.literal("expired"),
  ),

  message: v.optional(v.string()),

  viewedAt: v.optional(v.number()),
  respondedAt: v.optional(v.number()),
  expiresAt: v.number(),

  createdAt: v.number(),
})
  .index("by_jobId", ["jobId"])
  .index("by_providerProfileId", ["providerProfileId"])
  .index("by_jobId_providerProfileId", ["jobId", "providerProfileId"])
  .index("by_status", ["status"]);
```

---

## 5. Order System (State Machine)

### 5.1 `orders`

The core order entity with state machine. This is a generic pattern that works across marketplace domains.

```typescript
orders: defineTable({
  // References
  jobId: v.id("jobs"),
  clientEntityId: v.id("brandEntities"),
  providerProfileId: v.id("serviceProviderProfiles"),

  // Booking
  bookedByUserId: v.id("users"), // Client user who accepted
  bookedAt: v.number(),
  wasAutoAccepted: v.boolean(),

  // Locked terms (snapshot from job at booking time)
  // Store as JSON - schema varies by domain
  lockedTerms: v.any(),

  // Order state machine (generic states)
  status: v.union(
    v.literal("pending_payment"), // Awaiting escrow
    v.literal("awaiting_materials"), // Materials/products need shipping (optional)
    v.literal("materials_shipped"), // In transit (optional)
    v.literal("in_progress"), // Provider working
    v.literal("submitted"), // Awaiting client review
    v.literal("revision_requested"), // Client requested changes
    v.literal("approved"), // Client approved
    v.literal("auto_approved"), // System auto-approved
    v.literal("completed"), // Payout complete
    v.literal("disputed"), // In dispute
    v.literal("canceled"), // Canceled
  ),

  // Timeline tracking
  materialsShippedAt: v.optional(v.number()),
  materialsDeliveredAt: v.optional(v.number()),
  materialsDeliveryConfirmedBy: v.optional(
    v.union(v.literal("provider"), v.literal("tracking"), v.literal("timeout")),
  ),
  workStartedAt: v.optional(v.number()),
  deliveryDeadline: v.optional(v.number()), // Calculated after work starts
  submittedAt: v.optional(v.number()),
  approvedAt: v.optional(v.number()),
  completedAt: v.optional(v.number()),

  // Revisions
  revisionsUsed: v.number(),

  // Auto-approval
  autoApprovalDeadline: v.optional(v.number()),

  // Dispute
  disputeId: v.optional(v.id("disputes")),

  // Cancellation
  canceledAt: v.optional(v.number()),
  canceledByUserId: v.optional(v.id("users")),
  cancellationReason: v.optional(v.string()),

  createdAt: v.number(),
  updatedAt: v.number(),
})
  .index("by_jobId", ["jobId"])
  .index("by_clientEntityId", ["clientEntityId"])
  .index("by_providerProfileId", ["providerProfileId"])
  .index("by_status", ["status"])
  .index("by_clientEntityId_status", ["clientEntityId", "status"])
  .index("by_providerProfileId_status", ["providerProfileId", "status"])
  .index("by_deliveryDeadline", ["deliveryDeadline"])
  .index("by_autoApprovalDeadline", ["autoApprovalDeadline"]);
```

### 5.2 `orderStatusHistory`

Audit trail for order state changes.

```typescript
orderStatusHistory: defineTable({
  orderId: v.id("orders"),

  fromStatus: v.optional(v.string()),
  toStatus: v.string(),

  changedByUserId: v.optional(v.id("users")),
  changedBySystem: v.boolean(), // Auto-approval, etc.
  systemReason: v.optional(v.string()),

  note: v.optional(v.string()),

  createdAt: v.number(),
})
  .index("by_orderId", ["orderId"])
  .index("by_orderId_createdAt", ["orderId", "createdAt"]);
```

### 5.3 `orderShipping`

Shipping details for physical goods (when applicable).

```typescript
orderShipping: defineTable({
  orderId: v.id("orders"),

  // Shipping details (entered by client)
  courier: v.string(),
  trackingNumber: v.string(),
  trackingUrl: v.optional(v.string()),

  // Destination (from provider profile)
  destinationCountry: v.string(),
  destinationCity: v.optional(v.string()),

  // Tracking status
  lastTrackingStatus: v.optional(v.string()),
  lastTrackingUpdate: v.optional(v.number()),

  // Delivery confirmation
  deliveryConfirmed: v.boolean(),
  deliveryConfirmedAt: v.optional(v.number()),
  deliveryConfirmedBy: v.optional(
    v.union(v.literal("provider"), v.literal("tracking"), v.literal("timeout")),
  ),

  createdAt: v.number(),
  updatedAt: v.number(),
})
  .index("by_orderId", ["orderId"])
  .index("by_trackingNumber", ["trackingNumber"]);
```

---

## 6. Submissions and Revisions

### 6.1 `submissions`

Provider deliverable submissions.

```typescript
submissions: defineTable({
  orderId: v.id("orders"),
  providerProfileId: v.id("serviceProviderProfiles"),

  // Submission number (1 = initial, 2+ = revisions)
  submissionNumber: v.number(),

  // Files
  files: v.array(
    v.object({
      storageId: v.id("_storage"),
      filename: v.string(),
      mimeType: v.string(),
      sizeBytes: v.number(),
      deliverableIndex: v.number(), // Which deliverable this fulfills
    }),
  ),

  // Provider notes
  providerNotes: v.optional(v.string()),

  // Review status
  reviewStatus: v.union(
    v.literal("pending"),
    v.literal("approved"),
    v.literal("revision_requested"),
  ),
  reviewedAt: v.optional(v.number()),
  reviewedByUserId: v.optional(v.id("users")),

  createdAt: v.number(),
})
  .index("by_orderId", ["orderId"])
  .index("by_orderId_submissionNumber", ["orderId", "submissionNumber"])
  .index("by_reviewStatus", ["reviewStatus"]);
```

### 6.2 `revisionRequests`

Revision requests from clients.

```typescript
revisionRequests: defineTable({
  orderId: v.id("orders"),
  submissionId: v.id("submissions"),
  requestedByUserId: v.id("users"),

  // Revision details
  revisionNumber: v.number(), // 1, 2, 3...

  // Categorization
  isInScope: v.boolean(), // Determined by system/admin

  // Request content - categories are domain-specific
  requestedChanges: v.array(
    v.object({
      category: v.string(), // Domain-specific categories
      description: v.string(),
      referencePoint: v.optional(v.string()), // Could be timestamp, page number, etc.
    }),
  ),

  clientNotes: v.optional(v.string()),

  // Resolution
  status: v.union(
    v.literal("pending"),
    v.literal("accepted"),
    v.literal("disputed"),
    v.literal("completed"),
  ),

  createdAt: v.number(),
  completedAt: v.optional(v.number()),
})
  .index("by_orderId", ["orderId"])
  .index("by_submissionId", ["submissionId"])
  .index("by_status", ["status"]);
```

---

## 7. Payment and Escrow System (Polar)

### 7.1 `escrowTransactions`

Tracks funds held in escrow via Polar. This is a generic pattern for secure marketplace payments.

```typescript
escrowTransactions: defineTable({
  orderId: v.id("orders"),
  clientEntityId: v.id("brandEntities"),
  providerProfileId: v.id("serviceProviderProfiles"),

  // Amounts (all in cents)
  grossAmount: v.number(), // Total paid by brand
  platformFee: v.number(), // Platform commission
  netCreatorPayout: v.number(), // Amount creator receives

  // Polar references
  polarCheckoutId: v.optional(v.string()),
  polarTransactionId: v.optional(v.string()),
  polarTransferId: v.optional(v.string()), // Set when payout occurs

  // Status
  status: v.union(
    v.literal("pending"), // Payment initiated
    v.literal("captured"), // Funds held in escrow
    v.literal("released"), // Paid to creator
    v.literal("refunded"), // Returned to brand
    v.literal("partially_refunded"),
    v.literal("disputed"),
  ),

  // Timestamps
  capturedAt: v.optional(v.number()),
  releasedAt: v.optional(v.number()),
  refundedAt: v.optional(v.number()),

  // Refund details
  refundAmount: v.optional(v.number()),
  refundReason: v.optional(v.string()),

  createdAt: v.number(),
  updatedAt: v.number(),
})
  .index("by_orderId", ["orderId"])
  .index("by_clientEntityId", ["clientEntityId"])
  .index("by_providerProfileId", ["providerProfileId"])
  .index("by_status", ["status"])
  .index("by_polarCheckoutId", ["polarCheckoutId"]);
```

### 7.2 `providerWallet`

Provider earnings and balance.

```typescript
providerWallet: defineTable({
  providerProfileId: v.id("serviceProviderProfiles"),

  // Balance (in cents)
  availableBalance: v.number(),
  pendingBalance: v.number(), // Awaiting clearance

  // Lifetime totals
  totalEarnings: v.number(),
  totalWithdrawn: v.number(),
  totalPlatformFees: v.number(),

  // Last payout
  lastPayoutAt: v.optional(v.number()),
  lastPayoutAmount: v.optional(v.number()),

  createdAt: v.number(),
  updatedAt: v.number(),
}).index("by_providerProfileId", ["providerProfileId"]);
```

### 7.3 `walletTransactions`

Transaction history for provider wallet.

```typescript
walletTransactions: defineTable({
  providerProfileId: v.id("serviceProviderProfiles"),

  type: v.union(
    v.literal("earning"), // Order payout
    v.literal("withdrawal"), // Payout to bank
    v.literal("adjustment"), // Admin adjustment
    v.literal("refund_deduction"), // Refund clawback
  ),

  // Reference
  orderId: v.optional(v.id("orders")),
  escrowTransactionId: v.optional(v.id("escrowTransactions")),

  // Amount
  amount: v.number(), // Positive for credit, negative for debit

  // Balance after transaction
  balanceAfter: v.number(),

  // Description
  description: v.string(),

  // Polar references (for withdrawals)
  polarPayoutId: v.optional(v.string()),

  createdAt: v.number(),
})
  .index("by_providerProfileId", ["providerProfileId"])
  .index("by_providerProfileId_createdAt", ["providerProfileId", "createdAt"])
  .index("by_orderId", ["orderId"])
  .index("by_type", ["type"]);
```

### 7.4 `subscriptions`

Client/organization subscription tracking (Polar).

```typescript
subscriptions: defineTable({
  brandEntityId: v.id("brandEntities"),

  tier: v.union(
    v.literal("starter"),
    v.literal("growth"),
    v.literal("scale"),
    v.literal("enterprise"),
  ),

  // Polar references
  polarSubscriptionId: v.string(),
  polarProductId: v.string(),
  polarPriceId: v.string(),

  status: v.union(
    v.literal("active"),
    v.literal("past_due"),
    v.literal("canceled"),
    v.literal("trialing"),
    v.literal("incomplete"),
  ),

  currentPeriodStart: v.number(),
  currentPeriodEnd: v.number(),
  cancelAtPeriodEnd: v.boolean(),
  trialEnd: v.optional(v.number()),

  createdAt: v.number(),
  updatedAt: v.number(),
})
  .index("by_brandEntityId", ["brandEntityId"])
  .index("by_polarSubscriptionId", ["polarSubscriptionId"])
  .index("by_status", ["status"]);
```

---

## 8. Trust and Reputation System

### 8.1 `trustScoreHistory`

Historical tracking of trust score changes. Generic pattern for two-sided marketplace reputation.

```typescript
trustScoreHistory: defineTable({
  // Either client organization or service provider
  entityType: v.union(v.literal("client"), v.literal("provider")),
  entityId: v.string(), // clientEntityId or providerProfileId

  // Score snapshot
  previousScore: v.number(),
  newScore: v.number(),
  previousLevel: v.number(),
  newLevel: v.number(),

  // Change reason
  changeReason: v.union(
    v.literal("order_completed"),
    v.literal("order_disputed"),
    v.literal("review_received"),
    v.literal("on_time_delivery"),
    v.literal("late_delivery"),
    v.literal("fast_approval"),
    v.literal("slow_approval"),
    v.literal("revision_behavior"),
    v.literal("admin_adjustment"),
    v.literal("decay"), // Time-based decay
  ),

  // Reference
  orderId: v.optional(v.id("orders")),
  reviewId: v.optional(v.id("reviews")),

  // Admin notes
  adminNote: v.optional(v.string()),

  createdAt: v.number(),
})
  .index("by_entityType_entityId", ["entityType", "entityId"])
  .index("by_entityId_createdAt", ["entityId", "createdAt"])
  .index("by_changeReason", ["changeReason"]);
```

### 8.2 `reviews`

Two-way review system. Generic pattern - rating categories should be customized per domain.

```typescript
reviews: defineTable({
  orderId: v.id("orders"),

  // Reviewer
  reviewerType: v.union(v.literal("client"), v.literal("provider")),
  reviewerUserId: v.id("users"),

  // Reviewee
  revieweeType: v.union(v.literal("client"), v.literal("provider")),
  revieweeId: v.string(), // clientEntityId or providerProfileId

  // Ratings (1-5)
  overallRating: v.number(),

  // Domain-specific ratings - structure varies by marketplace type
  // Client reviewing provider (quality, timeliness, communication, etc.)
  providerRatings: v.optional(v.any()),

  // Provider reviewing client (clarity, communication, payment, fairness, etc.)
  clientRatings: v.optional(v.any()),

  // Written review
  comment: v.optional(v.string()),

  // Visibility
  isPublic: v.boolean(),

  // Response
  response: v.optional(v.string()),
  respondedAt: v.optional(v.number()),

  createdAt: v.number(),
  updatedAt: v.number(),
})
  .index("by_orderId", ["orderId"])
  .index("by_revieweeId", ["revieweeId"])
  .index("by_reviewerUserId", ["reviewerUserId"])
  .index("by_revieweeType_revieweeId", ["revieweeType", "revieweeId"]);
```

### 8.3 `badges`

Badge tracking for users. Badge types should be defined per domain.

```typescript
badges: defineTable({
  // Owner
  entityType: v.union(v.literal("client"), v.literal("provider")),
  entityId: v.string(), // clientEntityId or providerProfileId

  // Badge details - types are domain-specific
  badgeType: v.string(), // e.g., "on_time_pro", "fast_payer", "top_rated", etc.

  // Status
  status: v.union(
    v.literal("active"),
    v.literal("warning"), // At risk of revocation
    v.literal("revoked"),
  ),

  // Timestamps
  earnedAt: v.number(),
  expiresAt: v.optional(v.number()),
  warningAt: v.optional(v.number()),
  revokedAt: v.optional(v.number()),

  createdAt: v.number(),
  updatedAt: v.number(),
})
  .index("by_entityType_entityId", ["entityType", "entityId"])
  .index("by_badgeType", ["badgeType"])
  .index("by_status", ["status"]);
```

---

## 9. Disputes

### 9.1 `disputes`

Dispute tracking and resolution. Generic pattern for marketplace conflict handling.

```typescript
disputes: defineTable({
  orderId: v.id("orders"),

  // Parties
  initiatedByType: v.union(v.literal("client"), v.literal("provider")),
  initiatedByUserId: v.id("users"),
  clientEntityId: v.id("brandEntities"),
  providerProfileId: v.id("serviceProviderProfiles"),

  // Dispute details - categories can be extended per domain
  category: v.union(
    v.literal("quality"),
    v.literal("delivery"),
    v.literal("scope"),
    v.literal("payment"),
    v.literal("communication"),
    v.literal("other"),
  ),

  description: v.string(),

  // Evidence
  evidence: v.array(
    v.object({
      submittedByUserId: v.id("users"),
      type: v.union(v.literal("file"), v.literal("text"), v.literal("link")),
      storageId: v.optional(v.id("_storage")),
      content: v.optional(v.string()),
      submittedAt: v.number(),
    }),
  ),

  // Resolution
  status: v.union(
    v.literal("open"),
    v.literal("under_review"),
    v.literal("resolved_brand_favor"),
    v.literal("resolved_creator_favor"),
    v.literal("resolved_split"),
    v.literal("resolved_mutual"),
    v.literal("escalated"),
  ),

  // Admin handling
  assignedAdminId: v.optional(v.id("users")),
  adminNotes: v.optional(v.string()),

  // Resolution details
  resolution: v.optional(
    v.object({
      decision: v.string(),
      refundAmount: v.optional(v.number()),
      creatorPayout: v.optional(v.number()),
      trustImpactBrand: v.optional(v.number()),
      trustImpactCreator: v.optional(v.number()),
    }),
  ),

  resolvedAt: v.optional(v.number()),
  resolvedByUserId: v.optional(v.id("users")),

  createdAt: v.number(),
  updatedAt: v.number(),
})
  .index("by_orderId", ["orderId"])
  .index("by_clientEntityId", ["clientEntityId"])
  .index("by_providerProfileId", ["providerProfileId"])
  .index("by_status", ["status"])
  .index("by_assignedAdminId", ["assignedAdminId"])
  .index("by_category", ["category"]);
```

---

## 10. Messaging System

### 10.1 `conversations`

Conversation threads between parties. Generic pattern for marketplace communication.

```typescript
conversations: defineTable({
  orderId: v.id("orders"),
  clientEntityId: v.id("brandEntities"),
  providerProfileId: v.id("serviceProviderProfiles"),

  // Participants (user IDs who can access)
  participantUserIds: v.array(v.id("users")),

  // Last activity
  lastMessageAt: v.number(),
  lastMessagePreview: v.optional(v.string()),

  // Unread tracking per user
  unreadCounts: v.array(
    v.object({
      userId: v.id("users"),
      count: v.number(),
    }),
  ),

  createdAt: v.number(),
  updatedAt: v.number(),
})
  .index("by_orderId", ["orderId"])
  .index("by_clientEntityId", ["clientEntityId"])
  .index("by_providerProfileId", ["providerProfileId"])
  .index("by_lastMessageAt", ["lastMessageAt"]);
```

### 10.2 `messages`

Individual messages in conversations.

```typescript
messages: defineTable({
  conversationId: v.id("conversations"),
  senderUserId: v.id("users"),

  // Content
  content: v.string(),

  // Attachments
  attachments: v.optional(
    v.array(
      v.object({
        storageId: v.id("_storage"),
        filename: v.string(),
        mimeType: v.string(),
        sizeBytes: v.number(),
      }),
    ),
  ),

  // System messages
  isSystemMessage: v.boolean(),
  systemMessageType: v.optional(
    v.union(
      v.literal("order_status_change"),
      v.literal("revision_requested"),
      v.literal("submission_received"),
      v.literal("payment_released"),
    ),
  ),

  // Read tracking
  readBy: v.array(
    v.object({
      userId: v.id("users"),
      readAt: v.number(),
    }),
  ),

  createdAt: v.number(),
})
  .index("by_conversationId", ["conversationId"])
  .index("by_conversationId_createdAt", ["conversationId", "createdAt"])
  .index("by_senderUserId", ["senderUserId"]);
```

---

## 11. Notifications

### 11.1 `notifications`

User notifications. Generic notification types - extend with domain-specific types as needed.

```typescript
notifications: defineTable({
  userId: v.id("users"),

  // Generic notification types - extend per domain
  type: v.union(
    v.literal("order_booked"),
    v.literal("materials_shipped"),
    v.literal("work_started"),
    v.literal("submission_received"),
    v.literal("revision_requested"),
    v.literal("order_approved"),
    v.literal("payment_released"),
    v.literal("new_message"),
    v.literal("job_invitation"),
    v.literal("dispute_update"),
    v.literal("trust_level_change"),
    v.literal("badge_earned"),
    v.literal("auto_approval_pending"),
  ),

  // Reference
  orderId: v.optional(v.id("orders")),
  jobId: v.optional(v.id("jobs")),
  conversationId: v.optional(v.id("conversations")),

  // Content
  title: v.string(),
  body: v.string(),
  actionUrl: v.optional(v.string()),

  // Status
  isRead: v.boolean(),
  readAt: v.optional(v.number()),

  // Delivery
  emailSent: v.boolean(),
  pushSent: v.boolean(),

  createdAt: v.number(),
})
  .index("by_userId", ["userId"])
  .index("by_userId_isRead", ["userId", "isRead"])
  .index("by_userId_createdAt", ["userId", "createdAt"])
  .index("by_type", ["type"]);
```

### 11.2 `pushTokens`

Push notification tokens.

```typescript
pushTokens: defineTable({
  userId: v.id("users"),
  token: v.string(),
  platform: v.union(v.literal("ios"), v.literal("android"), v.literal("web")),

  createdAt: v.number(),
  lastUsedAt: v.number(),
})
  .index("by_userId", ["userId"])
  .index("by_token", ["token"]);
```

---

## 12. Admin and Audit

### 12.1 `auditLog`

Platform-wide audit trail.

```typescript
auditLog: defineTable({
  // Actor
  actorUserId: v.optional(v.id("users")),
  actorType: v.union(
    v.literal("user"),
    v.literal("system"),
    v.literal("admin"),
    v.literal("cron"),
  ),

  // Action
  action: v.string(), // "order.status_changed", "brand.suspended", etc.

  // Target
  targetType: v.string(), // "order", "brand", "creator", etc.
  targetId: v.string(),

  // Details
  details: v.optional(v.string()), // JSON string of changes

  // Context
  ipAddress: v.optional(v.string()),
  userAgent: v.optional(v.string()),

  createdAt: v.number(),
})
  .index("by_actorUserId", ["actorUserId"])
  .index("by_targetType_targetId", ["targetType", "targetId"])
  .index("by_action", ["action"])
  .index("by_createdAt", ["createdAt"]);
```

### 12.2 `adminActions`

Admin-specific actions for trust/safety.

```typescript
adminActions: defineTable({
  adminUserId: v.id("users"),

  actionType: v.union(
    v.literal("client_suspension"),
    v.literal("provider_suspension"),
    v.literal("entity_link"),
    v.literal("entity_merge"),
    v.literal("dispute_resolution"),
    v.literal("trust_adjustment"),
    v.literal("manual_payout"),
    v.literal("content_removal"),
  ),

  // Target
  targetType: v.string(),
  targetId: v.string(),

  // Details
  reason: v.string(),
  details: v.optional(v.string()),

  // Reversible
  isReversible: v.boolean(),
  reversedAt: v.optional(v.number()),
  reversedByUserId: v.optional(v.id("users")),

  createdAt: v.number(),
})
  .index("by_adminUserId", ["adminUserId"])
  .index("by_targetType_targetId", ["targetType", "targetId"])
  .index("by_actionType", ["actionType"])
  .index("by_createdAt", ["createdAt"]);
```

---

## Real-Time Subscription Considerations

### High-Priority Real-Time Subscriptions

These queries should leverage Convex's real-time capabilities:

1. **Order Status Updates**
   - Providers need instant notification when orders move through states
   - Clients need real-time updates on submission status
   - Query: `orders` by `providerProfileId_status` or `clientEntityId_status`

2. **Messaging**
   - Real-time chat between clients and providers
   - Query: `messages` by `conversationId_createdAt`
   - Optimized with `conversations.lastMessageAt` for list views

3. **Notifications**
   - Instant notification delivery
   - Query: `notifications` by `userId_isRead`

4. **Job Applications**
   - Clients see applications as they arrive
   - Query: `jobInvitations` by `jobId_status`

5. **Escrow Status**
   - Both parties need real-time payment status
   - Query: `escrowTransactions` by `orderId`

---

## Key Design Decisions

### 1. Entity-Based Organization Identity

- `brandEntities` (client organizations) is separate from `users` to ensure reputation persists
- `brandMembers` enables multi-user access with role-based permissions
- `linkedEntityIds` supports admin entity merging for fraud prevention

### 2. Order State Machine

The `orders.status` field enforces the workflow:

```text
pending_payment -> awaiting_materials -> materials_shipped ->
in_progress -> submitted -> revision_requested (loop) ->
approved/auto_approved -> completed
```

### 3. Escrow Flow (Polar)

```text
Client pays -> escrowTransactions.status = "captured" ->
Work completed -> Order approved ->
escrowTransactions.status = "released" ->
walletTransactions created -> providerWallet.availableBalance updated
```

### 4. Trust Score Components

- **Client Integrity**: approval time, dispute rate, payment reliability
- **Provider Reliability**: delivery time, revision rate, requirements adherence
- Scores are 0-100, levels are 1-5
- Historical tracking enables decay and trend analysis

### 5. Real-Time Optimization

- Compound indexes on frequently queried combinations
- Status-based indexes for dashboard filtering
- Timestamp indexes for ordered pagination
- Search indexes for discovery features

---

## Domain-Specific Extensions (Example)

> **Note:** The tables in this section are examples from a UGC (User-Generated Content) creator marketplace implementation. When implementing for your domain, replace these with tables that match your specific business requirements.

The following demonstrates how to extend the generic patterns above for a UGC creator marketplace where brands hire content creators to produce video advertisements.

### UGC-Specific: `creatorProfiles` Extension

For a UGC marketplace, the `serviceProviderProfiles.domainExtensions` field would store:

```typescript
// Example domain extensions for UGC creators
domainExtensions: {
  // Professional details specific to content creation
  niches: string[], // ["beauty", "tech", "fitness"]
  contentStyles: ("talking_head" | "voiceover" | "product_demo" | "lifestyle" | "tutorial" | "unboxing" | "testimonial")[],

  // Equipment (important for video quality)
  equipment: {
    camera: string,
    lighting: string,
    audio: string,
    editing: string,
  },

  // Rate is per video for UGC
  baseRatePerVideo: number, // in cents
}
```

### UGC-Specific: `briefs` Table

Replaces the generic `jobs` table with UGC-specific fields:

```typescript
// Example: UGC Brief structure
briefs: defineTable({
  brandEntityId: v.id("brandEntities"),
  createdByUserId: v.id("users"),

  title: v.string(),
  internalReference: v.optional(v.string()),

  // Product details (UGC-specific)
  product: v.object({
    name: v.string(),
    description: v.string(),
    usp: v.string(), // Unique selling proposition
    websiteUrl: v.optional(v.string()),
    category: v.string(),
  }),

  // Target audience (UGC-specific)
  targetAudience: v.object({
    demographics: v.string(),
    painPoints: v.optional(v.string()),
    desiredOutcome: v.string(),
  }),

  // Video deliverables (UGC-specific)
  deliverables: v.array(
    v.object({
      format: v.union(
        v.literal("vertical_9_16"),
        v.literal("horizontal_16_9"),
        v.literal("square_1_1"),
      ),
      duration: v.object({ min: v.number(), max: v.number() }),
      platform: v.string(),
      quantity: v.number(),
    }),
  ),

  // Content style (UGC-specific)
  contentStyle: v.string(),

  // Usage rights (UGC-specific - critical for ad content)
  usageRights: v.object({
    type: v.union(v.literal("organic"), v.literal("paid"), v.literal("both")),
    platforms: v.array(v.string()),
    duration: v.string(),
    exclusivity: v.boolean(),
    whitelisting: v.boolean(), // Can brand run ads from creator's account
  }),

  // Script workflow (UGC-specific)
  scriptId: v.optional(v.id("scripts")),
  scriptApprovedAt: v.optional(v.number()),

  // ... standard job fields ...
});
```

### UGC-Specific: `scripts` Table

AI-generated and approved scripts for video content:

```typescript
// Example: UGC Script structure
scripts: defineTable({
  briefId: v.id("briefs"),
  version: v.number(),
  isApproved: v.boolean(),

  // Script content (AIDA format)
  hook: v.string(),
  body: v.string(),
  cta: v.string(),

  // Production guidance
  shotList: v.optional(
    v.array(
      v.object({
        shotNumber: v.number(),
        description: v.string(),
        duration: v.optional(v.string()),
        notes: v.optional(v.string()),
      }),
    ),
  ),
  bRollSuggestions: v.optional(v.array(v.string())),
  onScreenText: v.optional(v.array(v.string())),
  complianceNotes: v.optional(v.array(v.string())),

  // AI generation metadata
  generatedByAI: v.boolean(),
  aiModel: v.optional(v.string()),

  createdAt: v.number(),
});
```

### UGC-Specific: `usageTracking` Table

Tracks ad usage against agreed terms (specific to advertising content):

```typescript
// Example: UGC Usage Tracking
usageTracking: defineTable({
  orderId: v.id("orders"),
  brandEntityId: v.id("brandEntities"),

  // Usage terms from order
  allowedUsageType: v.string(),
  allowedPlatforms: v.array(v.string()),
  usageStartDate: v.number(),
  usageEndDate: v.number(),

  // Detected ad usage
  detectedUsages: v.array(
    v.object({
      platform: v.string(),
      adAccountId: v.string(),
      adId: v.string(),
      firstDetectedAt: v.number(),
      lastDetectedAt: v.number(),
      isActive: v.boolean(),
    }),
  ),

  // Compliance status
  complianceStatus: v.union(
    v.literal("compliant"),
    v.literal("approaching_limit"),
    v.literal("exceeded"),
    v.literal("extension_offered"),
    v.literal("extension_purchased"),
  ),

  createdAt: v.number(),
  updatedAt: v.number(),
});
```

### UGC-Specific: Badge Types

Example badge definitions for UGC creators:

- `on_time_pro` - Consistently delivers before deadline
- `ad_ready` - Content meets ad platform requirements
- `fast_turnaround` - Completes work significantly faster than average
- `low_revision` - Rarely requires revisions
- `script_adherent` - Closely follows approved scripts

### UGC-Specific: Review Categories

When a brand reviews a creator:

- `contentQuality` - Video/audio production quality
- `communication` - Responsiveness and clarity
- `professionalism` - Professional conduct
- `timeliness` - Delivery against deadlines
- `scriptAdherence` - How well they followed the script

When a creator reviews a brand:

- `briefClarity` - How clear the requirements were
- `communication` - Responsiveness and feedback quality
- `paymentSpeed` - How quickly payments were released
- `fairness` - Fair treatment regarding revisions

### UGC-Specific: Revision Categories

Categories for revision requests in video content:

- `script_adherence` - Didn't follow the approved script
- `audio_quality` - Audio issues
- `video_quality` - Video quality issues
- `delivery_style` - Performance/delivery concerns
- `timing` - Duration or pacing issues

---

## Configuration Notes

When deploying this data model:

1. **Convex Deployment**: Replace `<YOUR_CONVEX_DEPLOYMENT>` in any configuration files with your actual Convex deployment name

2. **Payment Provider**: The model assumes Polar for payments. Update `polar*` field references if using a different provider

3. **Domain Extensions**: For non-UGC marketplaces, modify or replace the domain-specific tables with your own requirements

4. **Badge Definitions**: Define badge types that make sense for your marketplace's quality signals

5. **Review Categories**: Customize rating categories based on what matters most in your domain
