# UGC - Project Summary for CV

## What This Project Demonstrates

This is a **production-grade, full-stack application** for the UGC, a private members' club in central London. It demonstrates end-to-end product engineering across **web (React/Next.js)** and **mobile (React Native/Expo)** from a single codebase.

**Built in 2 days** using an agentic development harness - demonstrating how AI-native workflows compress delivery cycles without sacrificing quality.

---

## The Product

A digital platform enabling club members to:

- **Browse and RSVP to events** - Real-time event listings with guest count selection, dietary requirements capture, and confirmation flow
- **Add events to native calendar** - Deep iOS/Android calendar integration with timezone handling and reminders
- **View digital membership card** - Animated membership card with device motion effects
- **Browse dining menus** - Category-filtered menu browsing
- **Access club information** - About, reciprocal clubs, The Bugle newsletter, Fabric Fund charitable initiative

---

## Technical Implementation

### Architecture

```
Turborepo Monorepo
├── apps/web          → Next.js 16 web application
├── apps/native       → Expo/React Native mobile app
├── packages/backend  → Convex real-time backend
├── packages/env      → Typed environment variables (t3-env)
└── packages/infra    → Cloudflare deployment (Alchemy)
```

### Web Stack (apps/web)

- **Next.js 16** - App Router, React Server Components
- **Tailwind CSS v4** + shadcn/ui components
- **Storybook** - Component documentation
- **Cloudflare deployment** via Alchemy

### Mobile Stack (apps/native)

- **Expo/React Native** - Cross-platform iOS/Android
- **HeroUI Native** - Component library with theming
- **NativeWind** - Tailwind for React Native
- **Reanimated** - Smooth 60fps animations (parallax, spring physics)
- **Expo Calendar** - Native calendar integration
- **Storybook React Native** - Component documentation

### Backend Stack (packages/backend)

- **Convex** - Real-time reactive backend
- **Better-Auth** - Multi-provider authentication
- **AI Agent** - Convex Agent SDK with Google Gemini

### Authentication System

Multi-platform authentication supporting:

- Email/password with secure session management
- OAuth providers: Google, Apple, GitHub
- Password reset flow with OTP email verification
- Expo SecureStore for mobile token persistence
- SSR-compatible auth for web

---

## Key Features Built

### 1. Event RSVP System

- Real-time RSVP creation/cancellation via Convex mutations
- Guest count selection (1-5+)
- Special requirements capture (dietary, accessibility)
- Price calculation based on guest count
- Optimistic UI updates with Convex's reactive queries

### 2. Native Calendar Integration

- Custom `useAddToCalendar` hook using expo-calendar
- Date/time parsing for various event formats
- Permission handling with graceful degradation
- Native OS calendar UI for user choice of calendar
- Automatic timezone detection

### 3. Password Reset Flow (Mobile)

Three-screen flow:

1. Request reset - email input
2. Verify OTP - 6-digit code input with resend
3. Reset password - new password with confirmation

### 4. Digital Membership Card

- Device motion-reactive parallax effect
- Spring physics animations
- Secure storage of member details

### 5. Design System Implementation

Brand-accurate implementation from Wix site extraction:

- Navy (#06273a) + Sage (#8fa89d) + Cream (#fffef8) palette
- Cormorant Garamond (display) + Raleway (body) typography
- 8px spacing system
- Consistent light/dark theme support

---

## What This Proves for CV Purposes

### 1. Full-Stack Product Engineering

Not just frontend or backend - complete ownership from database schema to mobile animations to deployment infrastructure.

### 2. React AND React Native Expertise

Same codebase, two platforms. Shared business logic, platform-specific UI where needed.

### 3. Production Quality

- Type-safe throughout (TypeScript strict mode)
- Real-time reactive architecture (Convex)
- Proper error handling and loading states
- Accessibility considerations
- Component documentation (Storybook)

### 4. Modern Stack Choices

- 2025/2026 technologies (Next.js 16, Expo SDK 52, Convex, Better-Auth)
- Monorepo architecture (Turborepo)
- AI-assisted development workflow

### 5. Real Customer Problem

Not a toy project - a real private members' club with real requirements:

- Event management for 450+ reciprocal clubs
- Membership verification
- Dining reservations
- Club communications

---

## Suggested CV Bullet Points

Instead of the current data-heavy Gruckion section, this project supports bullets like:

> **Delivered a production mobile and web application** for a London private members' club in 2 days using an agentic development harness, implementing event RSVPs, native calendar integration, and multi-provider authentication across React Native (Expo) and Next.js.

> **Built cross-platform features** including real-time event RSVP with Convex, OAuth authentication (Google/Apple/GitHub), password reset flows, and device motion-responsive animations using Reanimated.

> **Architected a Turborepo monorepo** sharing Convex backend, TypeScript types, and environment configuration between Next.js web and React Native mobile applications deployed to Cloudflare and app stores respectively.

---

## File References

| Feature           | Location                                 |
| ----------------- | ---------------------------------------- |
| Event RSVP UI     | `apps/native/app/(tabs)/events/[id].tsx` |
| Calendar Hook     | `apps/native/lib/useAddToCalendar.ts`    |
| RSVP Backend      | `packages/backend/convex/rsvps.ts`       |
| Auth Config       | `packages/backend/convex/auth.ts`        |
| Schema            | `packages/backend/convex/schema.ts`      |
| Password Reset    | `apps/native/app/(auth)/email/(reset)/`  |
| Design System     | `design.md`                              |
| Web Components    | `apps/web/src/components/`               |
| Native Components | `apps/native/components/`                |

---

## The Bottom Line

This project directly counters any perception that Gruckion work is "data-only." It demonstrates:

1. **Shipping user-facing products** - not pipelines
2. **Web and mobile delivery** - React and React Native
3. **End-to-end ownership** - from problem to production
4. **AI-native workflow as multiplier** - 2 days, production quality

The data platform work is real and valuable, but it should be **one bullet**, not the identity. This project proves product engineering capability.
