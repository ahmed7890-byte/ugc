# UGC Creator Platform - Data Model Specification

## Executive Summary

This document specifies the complete data model for the UGC Creator Platform using Convex as the backend database with real-time synchronization capabilities. The model is designed to support:

- Entity-based brand identity (reputation cannot be reset with new emails)
- Script-first workflow with locked deliverables
- Escrow payment system with auto-approval
- Order state machine with fair timelines
- Trust scoring for both brands and creators
- BetterAuth integration for authentication
- Polar integration for payments and subscriptions

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

## 3. Creator System

### 3.1 `creatorProfiles`

Extended profile information for creators.

```typescript
creatorProfiles: defineTable({
  userId: v.id("users"),

  // Display info
  displayName: v.string(),
  bio: v.optional(v.string()),
  avatarStorageId: v.optional(v.id("_storage")),

  // Professional details
  niches: v.array(v.string()), // ["beauty", "tech", "fitness"]
  contentStyles: v.array(
    v.union(
      v.literal("talking_head"),
      v.literal("voiceover"),
      v.literal("product_demo"),
      v.literal("lifestyle"),
      v.literal("tutorial"),
      v.literal("unboxing"),
      v.literal("testimonial"),
    ),
  ),
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

  // Availability
  typicalTurnaroundDays: v.number(),
  isAvailable: v.boolean(),
  availabilityNote: v.optional(v.string()),

  // Rates
  baseRatePerVideo: v.number(), // in cents
  rushFeePercentage: v.optional(v.number()),

  // Location (for product shipping)
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

  // Equipment
  equipment: v.optional(
    v.object({
      camera: v.optional(v.string()),
      lighting: v.optional(v.string()),
      audio: v.optional(v.string()),
      editing: v.optional(v.string()),
    }),
  ),

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

  // Badges (earned through behavior)
  badges: v.array(
    v.object({
      type: v.string(), // "on_time_pro", "ad_ready", "fast_turnaround", "low_revision"
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

  createdAt: v.number(),
  updatedAt: v.number(),
})
  .index("by_userId", ["userId"])
  .index("by_profileStatus", ["profileStatus"])
  .index("by_trustLevel", ["trustLevel"])
  .index("by_reliabilityScore", ["reliabilityScore"])
  .index("by_isAvailable", ["isAvailable"])
  .searchIndex("search_creator", {
    searchField: "displayName",
    filterFields: ["profileStatus", "trustLevel", "isAvailable"],
  });
```

### 3.2 `creatorPortfolio`

Portfolio items/samples for creators.

```typescript
creatorPortfolio: defineTable({
  creatorProfileId: v.id("creatorProfiles"),

  type: v.union(v.literal("video"), v.literal("image"), v.literal("link")),

  // For uploaded content
  storageId: v.optional(v.id("_storage")),

  // For external links
  externalUrl: v.optional(v.string()),

  // Metadata
  title: v.optional(v.string()),
  description: v.optional(v.string()),
  niche: v.optional(v.string()),
  contentStyle: v.optional(v.string()),

  // Ordering
  sortOrder: v.number(),

  // Visibility
  isPublic: v.boolean(),

  createdAt: v.number(),
  updatedAt: v.number(),
})
  .index("by_creatorProfileId", ["creatorProfileId"])
  .index("by_creatorProfileId_sortOrder", ["creatorProfileId", "sortOrder"]);
```

---

## 4. Brief System

### 4.1 `briefs`

The core brief entity containing all job specifications.

```typescript
briefs: defineTable({
  brandEntityId: v.id("brandEntities"),
  createdByUserId: v.id("users"),

  // Basic info
  title: v.string(),
  internalReference: v.optional(v.string()), // Brand's internal ID

  // Product details
  product: v.object({
    name: v.string(),
    description: v.string(),
    usp: v.string(), // Unique selling proposition
    websiteUrl: v.optional(v.string()),
    category: v.string(),
  }),

  // Target audience
  targetAudience: v.object({
    demographics: v.string(),
    painPoints: v.optional(v.string()),
    desiredOutcome: v.string(),
  }),

  // Deliverables
  deliverables: v.array(
    v.object({
      format: v.union(
        v.literal("vertical_9_16"),
        v.literal("horizontal_16_9"),
        v.literal("square_1_1"),
      ),
      duration: v.object({
        min: v.number(), // seconds
        max: v.number(),
      }),
      platform: v.union(
        v.literal("tiktok"),
        v.literal("instagram_reels"),
        v.literal("instagram_stories"),
        v.literal("youtube_shorts"),
        v.literal("facebook"),
        v.literal("other"),
      ),
      quantity: v.number(),
    }),
  ),

  // Content requirements
  contentStyle: v.union(
    v.literal("talking_head"),
    v.literal("voiceover"),
    v.literal("product_demo"),
    v.literal("lifestyle"),
    v.literal("tutorial"),
    v.literal("unboxing"),
    v.literal("testimonial"),
  ),

  // Usage rights
  usageRights: v.object({
    type: v.union(v.literal("organic"), v.literal("paid"), v.literal("both")),
    platforms: v.array(v.string()),
    duration: v.union(
      v.literal("30_days"),
      v.literal("90_days"),
      v.literal("1_year"),
      v.literal("perpetual"),
    ),
    exclusivity: v.boolean(),
    whitelisting: v.boolean(), // Can brand run as ads from creator's account
  }),

  // Physical product
  requiresPhysicalProduct: v.boolean(),
  productShippingNotes: v.optional(v.string()),

  // Budget
  budgetPerVideo: v.number(), // in cents
  totalBudget: v.number(), // in cents
  creatorsNeeded: v.number(),

  // Timeline
  applicationDeadline: v.optional(v.number()),
  deliveryDeadlineDays: v.number(), // Days after production starts

  // Revision policy
  revisionsIncluded: v.number(),

  // Script (locked after approval)
  scriptId: v.optional(v.id("scripts")),
  scriptApprovedAt: v.optional(v.number()),
  scriptApprovedByUserId: v.optional(v.id("users")),

  // Sourcing
  sourcingType: v.union(
    v.literal("open"), // Open to marketplace
    v.literal("invite_only"), // Only invited creators
    v.literal("matched"), // Platform-matched creators
  ),

  // Status
  status: v.union(
    v.literal("draft"),
    v.literal("pending_script"),
    v.literal("script_review"),
    v.literal("active"), // Open for applications
    v.literal("in_progress"), // Has active orders
    v.literal("completed"),
    v.literal("canceled"),
  ),

  createdAt: v.number(),
  updatedAt: v.number(),
  publishedAt: v.optional(v.number()),
})
  .index("by_brandEntityId", ["brandEntityId"])
  .index("by_status", ["status"])
  .index("by_brandEntityId_status", ["brandEntityId", "status"])
  .index("by_createdAt", ["createdAt"])
  .index("by_sourcingType_status", ["sourcingType", "status"])
  .searchIndex("search_briefs", {
    searchField: "title",
    filterFields: ["status", "sourcingType"],
  });
```

### 4.2 `scripts`

AI-generated and approved scripts.

```typescript
scripts: defineTable({
  briefId: v.id("briefs"),

  // Version tracking
  version: v.number(),
  isApproved: v.boolean(),

  // Script content
  hook: v.string(),
  body: v.string(), // AIDA format
  cta: v.string(),

  // Optional enhancements
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

  // Generation metadata
  generatedByAI: v.boolean(),
  aiModel: v.optional(v.string()),
  aiPrompt: v.optional(v.string()),

  // Editing history
  editedByUserId: v.optional(v.id("users")),
  editedAt: v.optional(v.number()),

  createdAt: v.number(),
})
  .index("by_briefId", ["briefId"])
  .index("by_briefId_version", ["briefId", "version"])
  .index("by_briefId_isApproved", ["briefId", "isApproved"]);
```

### 4.3 `briefInvitations`

Invitations sent to specific creators.

```typescript
briefInvitations: defineTable({
  briefId: v.id("briefs"),
  creatorProfileId: v.id("creatorProfiles"),
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
  .index("by_briefId", ["briefId"])
  .index("by_creatorProfileId", ["creatorProfileId"])
  .index("by_briefId_creatorProfileId", ["briefId", "creatorProfileId"])
  .index("by_status", ["status"]);
```

---

## 5. Order System (State Machine)

### 5.1 `orders`

The core order entity with state machine.

```typescript
orders: defineTable({
  // References
  briefId: v.id("briefs"),
  brandEntityId: v.id("brandEntities"),
  creatorProfileId: v.id("creatorProfiles"),

  // Booking
  bookedByUserId: v.id("users"), // Brand user who accepted
  bookedAt: v.number(),
  wasAutoAccepted: v.boolean(),

  // Locked terms (snapshot from brief at booking time)
  lockedTerms: v.object({
    budgetPerVideo: v.number(),
    deliverables: v.array(
      v.object({
        format: v.string(),
        duration: v.object({ min: v.number(), max: v.number() }),
        platform: v.string(),
        quantity: v.number(),
      }),
    ),
    usageRights: v.object({
      type: v.string(),
      platforms: v.array(v.string()),
      duration: v.string(),
      exclusivity: v.boolean(),
      whitelisting: v.boolean(),
    }),
    revisionsIncluded: v.number(),
    deliveryDeadlineDays: v.number(),
    scriptVersion: v.number(),
  }),

  // Order state machine
  status: v.union(
    v.literal("pending_payment"), // Awaiting escrow
    v.literal("awaiting_product"), // Product needs shipping
    v.literal("product_shipped"), // In transit
    v.literal("in_production"), // Creator working
    v.literal("submitted"), // Awaiting brand review
    v.literal("revision_requested"), // Brand requested changes
    v.literal("approved"), // Brand approved
    v.literal("auto_approved"), // System auto-approved
    v.literal("completed"), // Payout complete
    v.literal("disputed"), // In dispute
    v.literal("canceled"), // Canceled
  ),

  // Timeline tracking
  productShippedAt: v.optional(v.number()),
  productDeliveredAt: v.optional(v.number()),
  productDeliveryConfirmedBy: v.optional(
    v.union(v.literal("creator"), v.literal("tracking"), v.literal("timeout")),
  ),
  productionStartedAt: v.optional(v.number()),
  deliveryDeadline: v.optional(v.number()), // Calculated after production starts
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
  .index("by_briefId", ["briefId"])
  .index("by_brandEntityId", ["brandEntityId"])
  .index("by_creatorProfileId", ["creatorProfileId"])
  .index("by_status", ["status"])
  .index("by_brandEntityId_status", ["brandEntityId", "status"])
  .index("by_creatorProfileId_status", ["creatorProfileId", "status"])
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

Product shipping details.

```typescript
orderShipping: defineTable({
  orderId: v.id("orders"),

  // Shipping details (entered by brand)
  courier: v.string(),
  trackingNumber: v.string(),
  trackingUrl: v.optional(v.string()),

  // Destination (from creator profile)
  destinationCountry: v.string(),
  destinationCity: v.optional(v.string()),

  // Tracking status
  lastTrackingStatus: v.optional(v.string()),
  lastTrackingUpdate: v.optional(v.number()),

  // Delivery confirmation
  deliveryConfirmed: v.boolean(),
  deliveryConfirmedAt: v.optional(v.number()),
  deliveryConfirmedBy: v.optional(
    v.union(v.literal("creator"), v.literal("tracking"), v.literal("timeout")),
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

Creator deliverable submissions.

```typescript
submissions: defineTable({
  orderId: v.id("orders"),
  creatorProfileId: v.id("creatorProfiles"),

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

  // Creator notes
  creatorNotes: v.optional(v.string()),

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

Revision requests from brands.

```typescript
revisionRequests: defineTable({
  orderId: v.id("orders"),
  submissionId: v.id("submissions"),
  requestedByUserId: v.id("users"),

  // Revision details
  revisionNumber: v.number(), // 1, 2, 3...

  // Categorization
  isInScope: v.boolean(), // Determined by system/admin

  // Request content
  requestedChanges: v.array(
    v.object({
      category: v.union(
        v.literal("script_adherence"),
        v.literal("audio_quality"),
        v.literal("video_quality"),
        v.literal("delivery_style"),
        v.literal("timing"),
        v.literal("other"),
      ),
      description: v.string(),
      timestampStart: v.optional(v.number()), // seconds
      timestampEnd: v.optional(v.number()),
    }),
  ),

  brandNotes: v.optional(v.string()),

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

Tracks funds held in escrow via Polar.

```typescript
escrowTransactions: defineTable({
  orderId: v.id("orders"),
  brandEntityId: v.id("brandEntities"),
  creatorProfileId: v.id("creatorProfiles"),

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
  .index("by_brandEntityId", ["brandEntityId"])
  .index("by_creatorProfileId", ["creatorProfileId"])
  .index("by_status", ["status"])
  .index("by_polarCheckoutId", ["polarCheckoutId"]);
```

### 7.2 `creatorWallet`

Creator earnings and balance.

```typescript
creatorWallet: defineTable({
  creatorProfileId: v.id("creatorProfiles"),

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
}).index("by_creatorProfileId", ["creatorProfileId"]);
```

### 7.3 `walletTransactions`

Transaction history for creator wallet.

```typescript
walletTransactions: defineTable({
  creatorProfileId: v.id("creatorProfiles"),

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
  .index("by_creatorProfileId", ["creatorProfileId"])
  .index("by_creatorProfileId_createdAt", ["creatorProfileId", "createdAt"])
  .index("by_orderId", ["orderId"])
  .index("by_type", ["type"]);
```

### 7.4 `subscriptions`

Brand subscription tracking (Polar).

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

Historical tracking of trust score changes.

```typescript
trustScoreHistory: defineTable({
  // Either brand or creator
  entityType: v.union(v.literal("brand"), v.literal("creator")),
  entityId: v.string(), // brandEntityId or creatorProfileId

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

Two-way review system.

```typescript
reviews: defineTable({
  orderId: v.id("orders"),

  // Reviewer
  reviewerType: v.union(v.literal("brand"), v.literal("creator")),
  reviewerUserId: v.id("users"),

  // Reviewee
  revieweeType: v.union(v.literal("brand"), v.literal("creator")),
  revieweeId: v.string(), // brandEntityId or creatorProfileId

  // Ratings (1-5)
  overallRating: v.number(),

  // Brand reviewing creator
  creatorRatings: v.optional(
    v.object({
      contentQuality: v.number(),
      communication: v.number(),
      professionalism: v.number(),
      timeliness: v.number(),
      scriptAdherence: v.number(),
    }),
  ),

  // Creator reviewing brand
  brandRatings: v.optional(
    v.object({
      briefClarity: v.number(),
      communication: v.number(),
      paymentSpeed: v.number(),
      fairness: v.number(),
    }),
  ),

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

Badge tracking for users.

```typescript
badges: defineTable({
  // Owner
  entityType: v.union(v.literal("brand"), v.literal("creator")),
  entityId: v.string(), // brandEntityId or creatorProfileId

  // Badge details
  badgeType: v.string(), // "on_time_pro", "ad_ready", "high_integrity", etc.

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

## 9. Usage Compliance

### 9.1 `usageTracking`

Tracks ad usage against agreed terms.

```typescript
usageTracking: defineTable({
  orderId: v.id("orders"),
  brandEntityId: v.id("brandEntities"),

  // Usage terms from order
  allowedUsageType: v.string(),
  allowedPlatforms: v.array(v.string()),
  usageStartDate: v.number(),
  usageEndDate: v.number(),

  // Detected usage
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

  // Extension
  extensionOfferedAt: v.optional(v.number()),
  extensionPurchasedAt: v.optional(v.number()),
  newUsageEndDate: v.optional(v.number()),

  createdAt: v.number(),
  updatedAt: v.number(),
})
  .index("by_orderId", ["orderId"])
  .index("by_brandEntityId", ["brandEntityId"])
  .index("by_complianceStatus", ["complianceStatus"])
  .index("by_usageEndDate", ["usageEndDate"]);
```

---

## 10. Disputes

### 10.1 `disputes`

Dispute tracking and resolution.

```typescript
disputes: defineTable({
  orderId: v.id("orders"),

  // Parties
  initiatedByType: v.union(v.literal("brand"), v.literal("creator")),
  initiatedByUserId: v.id("users"),
  brandEntityId: v.id("brandEntities"),
  creatorProfileId: v.id("creatorProfiles"),

  // Dispute details
  category: v.union(
    v.literal("quality"),
    v.literal("delivery"),
    v.literal("scope"),
    v.literal("payment"),
    v.literal("communication"),
    v.literal("usage_rights"),
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
  .index("by_brandEntityId", ["brandEntityId"])
  .index("by_creatorProfileId", ["creatorProfileId"])
  .index("by_status", ["status"])
  .index("by_assignedAdminId", ["assignedAdminId"])
  .index("by_category", ["category"]);
```

---

## 11. Messaging System

### 11.1 `conversations`

Conversation threads between parties.

```typescript
conversations: defineTable({
  orderId: v.id("orders"),
  brandEntityId: v.id("brandEntities"),
  creatorProfileId: v.id("creatorProfiles"),

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
  .index("by_brandEntityId", ["brandEntityId"])
  .index("by_creatorProfileId", ["creatorProfileId"])
  .index("by_lastMessageAt", ["lastMessageAt"]);
```

### 11.2 `messages`

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

## 12. Notifications

### 12.1 `notifications`

User notifications.

```typescript
notifications: defineTable({
  userId: v.id("users"),

  type: v.union(
    v.literal("order_booked"),
    v.literal("product_shipped"),
    v.literal("production_started"),
    v.literal("submission_received"),
    v.literal("revision_requested"),
    v.literal("order_approved"),
    v.literal("payment_released"),
    v.literal("new_message"),
    v.literal("brief_invitation"),
    v.literal("dispute_update"),
    v.literal("trust_level_change"),
    v.literal("badge_earned"),
    v.literal("usage_warning"),
    v.literal("auto_approval_pending"),
  ),

  // Reference
  orderId: v.optional(v.id("orders")),
  briefId: v.optional(v.id("briefs")),
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

### 12.2 `pushTokens`

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

## 13. Admin and Audit

### 13.1 `auditLog`

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

### 13.2 `adminActions`

Admin-specific actions for trust/safety.

```typescript
adminActions: defineTable({
  adminUserId: v.id("users"),

  actionType: v.union(
    v.literal("brand_suspension"),
    v.literal("creator_suspension"),
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
   - Creators need instant notification when orders move through states
   - Brands need real-time updates on submission status
   - Query: `orders` by `creatorProfileId_status` or `brandEntityId_status`

2. **Messaging**
   - Real-time chat between brands and creators
   - Query: `messages` by `conversationId_createdAt`
   - Optimized with `conversations.lastMessageAt` for list views

3. **Notifications**
   - Instant notification delivery
   - Query: `notifications` by `userId_isRead`

4. **Brief Applications**
   - Brands see applications as they arrive
   - Query: `briefInvitations` by `briefId_status`

5. **Escrow Status**
   - Both parties need real-time payment status
   - Query: `escrowTransactions` by `orderId`

---

## Key Design Decisions

### 1. Entity-Based Brand Identity

- `brandEntities` is separate from `users` to ensure reputation persists
- `brandMembers` enables multi-user access with role-based permissions
- `linkedEntityIds` supports admin entity merging for fraud prevention

### 2. Order State Machine

The `orders.status` field enforces the workflow:

```text
pending_payment -> awaiting_product -> product_shipped ->
in_production -> submitted -> revision_requested (loop) ->
approved/auto_approved -> completed
```

### 3. Escrow Flow (Polar)

```text
Brand pays -> escrowTransactions.status = "captured" ->
Work completed -> Order approved ->
escrowTransactions.status = "released" ->
walletTransactions created -> creatorWallet.availableBalance updated
```

### 4. Trust Score Components

- **Brand Integrity**: approval time, dispute rate, payment reliability
- **Creator Reliability**: delivery time, revision rate, script adherence
- Scores are 0-100, levels are 1-5
- Historical tracking enables decay and trend analysis

### 5. Real-Time Optimization

- Compound indexes on frequently queried combinations
- Status-based indexes for dashboard filtering
- Timestamp indexes for ordered pagination
- Search indexes for discovery features
