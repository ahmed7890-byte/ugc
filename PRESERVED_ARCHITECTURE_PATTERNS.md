# Preserved Architecture Patterns

**Generated:** 2026-01-28
**Purpose:** Reference document listing valuable architectural patterns preserved from the CUC-to-UGC migration that are reusable for any two-sided marketplace platform.

---

## 1. Technical Architecture Patterns

_Source: `/requirements/technical-architecture.md`_

### Monorepo Structure

- **Turborepo** for build orchestration and caching
- **Bun** as package manager with workspace catalog
- Structure:
  - `apps/native` - Expo React Native app
  - `apps/web` - Next.js admin/web app
  - `packages/backend` - Convex backend
  - `packages/env` - Shared environment configuration
  - `packages/ui` - Shared UI components
  - `packages/types` - Shared TypeScript types

### Frontend Architecture

- **Expo Router** for native navigation with file-based routing
- **Next.js App Router** for web with React Server Components
- **HeroUI Native** for cross-platform component library
- **Tailwind CSS v4** / **UniWind** for styling

### Backend Architecture

- **Convex** real-time database with:
  - Domain-organized function folders
  - Optimistic updates
  - Real-time subscriptions
  - Built-in file storage
- **Polar** for payment processing (subscriptions + escrow)

### Authentication Patterns

- **BetterAuth** with Convex adapter
- Multi-platform support (iOS, Android, Web)
- OAuth providers (GitHub, Google, Apple)
- Platform-conditional plugins (expoClient vs crossDomainClient)
- trustedOrigins configuration for Expo development URLs

### CI/CD Pipeline

- **GitHub Actions** for CI
- **EAS (Expo Application Services)** for native builds
- Cloudflare deployment via Alchemy

---

## 2. Trust & Reputation System

_Source: `/requirements/trust-system.md`_

### Two-Sided Score Calculation

- Separate reliability/integrity scores for providers and clients
- Rolling 90-day window with recency weighting (50%/30%/20%)
- Configurable factor weights

### Experience Level Progression

- 6-level system with clear thresholds
- Requirements: completed orders, time on platform, score minimums
- Benefits: visibility boosts, faster payouts, reduced commissions

### Badge Architecture

- **Behavioral badges**: Earned through actions (e.g., on-time delivery)
- **Verification badges**: Earned through verification (e.g., ID verified)
- Maintenance rules with warning periods before revocation

### Trust Indicators

- Display patterns for both providers and clients
- Color-coded score ranges
- Tooltips with factor breakdowns

### Score Decay & Maintenance

- 60-day inactivity triggers decay (1 point/week, max 20 points)
- Weekly badge evaluation
- 30-day warning before badge revocation

### Fraud Detection

- Provider signals: fake portfolio, review manipulation
- Client signals: payment fraud, entity cycling
- Platform-level signals: coordinated behavior

### Cold Start Bootstrapping

- Starting score of 70 (neutral)
- Early order protection
- Initial visibility boost

---

## 3. Data Model Patterns

_Source: `/requirements/data-model.md`_

### Entity-Based Identity

- Organizations (clients) are entities, not individual users
- Members belong to entities with roles
- Reputation persists across account changes

### Order State Machine

```
draft → pending_acceptance → accepted → in_progress →
submitted → revision_requested → approved → completed
```

- Clear state transitions
- Locked terms at acceptance
- Dispute states

### Escrow Payment Workflow

- Funds held at order acceptance
- Release on approval
- Partial releases for milestones
- Refund paths for disputes

### Messaging System

- Conversations linked to orders
- Real-time message delivery
- Read receipts
- System messages for order events

### Notification Infrastructure

- Push notifications (Expo)
- In-app notifications
- Email notifications
- Notification preferences per user

### Audit Logging

- Admin action tracking
- Searchable audit trail
- User suspension/restoration logs

---

## 4. Authentication Patterns

_Source: Auth documentation files_

### Navigation Patterns

- **Selective Auth**: Users can browse without logging in
- **Auth-First**: All content requires authentication
- `Stack.Protected` guards for route protection
- Centralized auth state in layout wrappers

### OAuth Flow

1. User taps social button
2. Open system browser
3. Redirect to provider
4. Provider authenticates
5. Redirect to Convex callback
6. Convex validates and creates session
7. Deep link back to app
8. App detects auth state
9. Navigate to authenticated routes

### Platform-Specific Configuration

- `expo-secure-store` for native token storage
- `expo-web-browser` for OAuth flows
- Cookie-based storage for web
- Platform detection with `Platform.OS`

### iOS Password AutoFill

- Associated Domains configuration
- AASA file deployment options
- EAS build configuration

---

## 5. Subscription Tier Patterns

_Source: `/requirements/subscription-tiers.md`_

### Tier Structure

- 4 tiers: Starter, Growth, Scale, Enterprise
- Monthly/Annual billing with 20% annual savings
- Progressive feature access

### Commission Model

- Higher tiers = lower commission rates
- Volume-based adjustments for Enterprise

### Upgrade/Downgrade Policies

- Immediate upgrades with prorated billing
- End-of-period downgrades
- Grace periods for usage overages

### Trial Strategy

- 14-day trial on Growth tier
- Credit card required
- Clear upgrade prompts before expiration

---

## 6. Development Tooling Patterns

_Source: Storybook documentation files_

### Storybook Configuration

- Separate configs per app (native vs web)
- Shared stories where possible
- Theme switching support
- Accessibility testing integration

### Turborepo Integration

- Storybook as Turbo task
- Cached builds
- Parallel story compilation

### Testing Strategy

- Visual regression testing
- Interaction testing with play functions
- Accessibility audits

---

## 7. Expo Development Patterns

_Source: Expo documentation files_

### Development Builds vs Expo Go

- Dev builds for native module testing
- Expo Go for quick iteration
- EAS Build for CI/CD

### Android Emulator Setup

- AVD configuration for Apple Silicon
- Maestro integration for UI testing

### Native Development

- Expo prebuild for native directories
- EAS Submit for app store deployment
- Splash screen configuration

---

## Quick Reference: File Locations

| Pattern Category       | Primary Source File                          |
| ---------------------- | -------------------------------------------- |
| Technical Architecture | `/requirements/technical-architecture.md`    |
| Trust System           | `/requirements/trust-system.md`              |
| Data Model             | `/requirements/data-model.md`                |
| Subscription Tiers     | `/requirements/subscription-tiers.md`        |
| Auth Navigation        | `/app/docs/AUTH_NAVIGATION_PATTERNS.md`      |
| OAuth Setup            | `/app/docs/SOCIAL_AUTHENTICATION.md`         |
| iOS AutoFill           | `/app/docs/IOS_PASSWORD_AUTOFILL_SETUP.md`   |
| Storybook Setup        | `/app/docs/storybook-implementation-plan.md` |
| Expo Development       | `/app/docs/EXPO_NATIVE_DEVELOPMENT.md`       |

---

_This document serves as an index to the preserved architectural patterns. Refer to the source files for complete implementation details._
