# CUC to UGC Markdown Documentation Audit Report

**Generated:** 2026-01-28
**Completed:** 2026-01-28
**Status:** COMPLETED
**Total Files Analyzed:** 38 markdown files
**Purpose:** Determine which documentation is applicable to a generic UGC platform vs. content specific to the original CUC (City University Club) project.

---

## Completion Summary

All 30 tasks have been executed successfully:

| Task Type             | Count | Status    |
| --------------------- | ----- | --------- |
| Files Removed         | 8     | Completed |
| Files Modified        | 17    | Completed |
| Files Verified        | 2     | Completed |
| Documentation Created | 2     | Completed |
| Final Verification    | 1     | Completed |

### Files Removed (8)

- `/requirements/features.md`
- `/requirements/raw_requirements.md`
- `/requirements/README.md`
- `/requirements/user-flows.md`
- `/requirements/user-personas.md`
- `/app/bob.md`
- `/app/CV-PROJECT-SUMMARY.md`
- `/app/docs/ANIMATED_MEMBERSHIP_CARD.md`

### Files Modified (17)

- `/requirements/data-model.md` - Extracted generic marketplace patterns
- `/requirements/open-questions.md` - Kept generic marketplace questions
- `/requirements/subscription-tiers.md` - Generalized tier structure
- `/requirements/trust-system.md` - Abstracted factors/badges to placeholders
- `/requirements/technical-architecture.md` - Removed old project reference
- `/app/README.md` - Updated project name
- `/app/design.md` - Replaced CUC branding with placeholders
- `/app/HEROUI_COMPLIANCE_ANALYSIS.md` - Replaced UGC_COLORS with BRAND_COLORS
- `/app/HEROUI_THEMING_MIGRATION_PLAN.md` - Replaced brand colors
- `/app/MIGRATION-PLAN.md` - Removed club-specific references
- `/app/.ruler/bts.md` - Updated project name
- `/app/LAST_LOGIN_METHOD_IMPLEMENTATION_PLAN.md` - Updated package name
- `/app/AUTHENTICATION-INVESTIGATION.md` - Parameterized Convex URLs
- `/app/docs/BETTER_AUTH_FIX_ANALYSIS.md` - Replaced old project references
- `/app/docs/SOCIAL_AUTHENTICATION.md` - Replaced Convex deployment URLs
- `/app/docs/IOS_PASSWORD_AUTOFILL_SETUP.md` - Parameterized domain
- `/app/docs/STORYBOOK_IMPLEMENTATION_PHASES.md` - Generalized component lists
- `/app/docs/storybook-implementation-plan.md` - Removed codebase analysis

### Files Verified Generic (2)

- `/requirements/technical-architecture.md` - Confirmed generic
- `/requirements/user-flow-diagram-key.md` - Confirmed generic

### Documentation Created (2)

- `/MARKDOWN_AUDIT_REPORT.md` - This report
- `/PRESERVED_ARCHITECTURE_PATTERNS.md` - Summary of reusable patterns

### Final Verification Results

Grep searches confirmed all CUC-specific references have been removed from documentation files (only references remaining are in this audit report for historical context).

---

## Executive Summary

| Classification                     | Count | Percentage |
| ---------------------------------- | ----- | ---------- |
| **Applicable to UGC (Keep as-is)** | 13    | 34%        |
| **Mixed (Modify required)**        | 14    | 37%        |
| **CUC-Specific (Remove)**          | 11    | 29%        |

### Key Findings

1. **Technical Architecture Documentation** is largely reusable - authentication patterns, Storybook setup, Expo development guides, and Convex backend documentation are technology-specific, not business-specific.

2. **Business Requirements & User Research** are CUC-specific - features, user personas, user flows, and raw requirements describe the UGC creator marketplace business model.

3. **Branding & Design** files contain CUC-specific colors, fonts, and aesthetic references that need replacement.

4. **Infrastructure References** (Convex deployment URLs, app schemes) appear throughout documentation and need to be parameterized.

---

## Detailed File-by-File Analysis

### Section 1: Requirements Folder (`/requirements/`)

| File                        | Classification   | Recommendation | Summary                                                                                                                      |
| --------------------------- | ---------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `data-model.md`             | **Mixed**        | Modify         | Database schema with generic patterns (auth, orders, escrow) mixed with CUC-specific entities (briefs, scripts, submissions) |
| `features.md`               | **CUC-Specific** | Remove         | Entirely CUC business logic (guided brief creation, AI script generation, content delivery workflow)                         |
| `open-questions.md`         | **Mixed**        | Modify         | Contains generic marketplace questions mixed with CUC-specific questions about scripts and usage monitoring                  |
| `raw_requirements.md`       | **CUC-Specific** | Remove         | Core CUC business specification (script-first workflow, product shipping, usage rights enforcement)                          |
| `README.md`                 | **CUC-Specific** | Remove         | CUC project overview and differentiators                                                                                     |
| `subscription-tiers.md`     | **Mixed**        | Modify         | Generic tier structure with CUC-specific features (briefs/month, AI scripts, revision rounds)                                |
| `technical-architecture.md` | **Applicable**   | Keep           | Excellent reference architecture (monorepo, Expo+Next.js, Convex, BetterAuth) - minor route name updates needed              |
| `trust-system.md`           | **Mixed**        | Modify         | Valuable two-sided trust system architecture with CUC-specific factors and badges                                            |
| `user-flow-diagram-key.md`  | **Applicable**   | Keep           | Generic Mermaid diagramming style guide with no domain-specific content                                                      |
| `user-flows.md`             | **CUC-Specific** | Remove         | CUC-specific user journeys (brief creation, script approval, product shipping)                                               |
| `user-personas.md`          | **CUC-Specific** | Remove         | CUC-specific user research (Sarah, Marcus, Priya personas for UGC marketplace)                                               |

#### Detailed Breakdown - Mixed Files

**data-model.md - Elements to Keep vs Remove:**
| Keep (Generic) | Remove (CUC-Specific) |
|----------------|----------------------|
| Authentication tables (users, sessions, accounts) | `briefs` table with USP, AIDA scripts, shot lists |
| Entity-based identity system | `scripts` table with AI-generated content |
| Order state machine | `submissions` and `revisionRequests` tables |
| Escrow payment system | `usageTracking` for ad compliance |
| Messaging system | Creator niches, content styles, equipment |
| Notifications infrastructure | UGC-specific badges (On-Time Pro, Ad-Ready) |
| Audit logging | Subscription limits (briefsAllowedPerMonth) |

**trust-system.md - Elements to Keep vs Remove:**
| Keep (Generic) | Remove (CUC-Specific) |
|----------------|----------------------|
| Two-sided score calculation methodology | Creator factors: "Script adherence", "Revision success" |
| Rolling window with recency weighting | Brand factors: "Brief quality", "Product delivery" |
| Experience level progression (1-6) | Creator badges: "First-Take Ace", "Ad-Ready" |
| Badge system architecture | Brand badges: "Clear Briefs", "Product Reliable" |
| Score decay and maintenance rules | Level names ("Verified Creator", etc.) |
| Fraud detection patterns | |
| New user bootstrapping | |

---

### Section 2: Authentication & Navigation Docs (`/app/docs/`)

| File                                       | Classification | Recommendation | Summary                                                                                       |
| ------------------------------------------ | -------------- | -------------- | --------------------------------------------------------------------------------------------- |
| `AUTHENTICATION-INVESTIGATION.md`          | **Mixed**      | Modify         | Better Auth trustedOrigins patterns, Expo config - contains Convex deployment URLs to replace |
| `AUTH_NAVIGATION_FIX.md`                   | **Applicable** | Keep           | Generic OAuth flow explanation and centralized navigation patterns                            |
| `AUTH_NAVIGATION_PATTERNS.md`              | **Applicable** | Keep           | Comprehensive "Selective Auth" vs "Auth-First" navigation patterns for Expo Router            |
| `BETTER_AUTH_FIX_ANALYSIS.md`              | **Mixed**      | Modify         | Critical auth debugging patterns - contains old project name references                       |
| `SOCIAL_AUTHENTICATION.md`                 | **Mixed**      | Modify         | Complete OAuth setup guide (GitHub/Google/Apple) - has Convex URLs to replace                 |
| `IOS_PASSWORD_AUTOFILL_SETUP.md`           | **Mixed**      | Modify         | iOS AutoFill guide - contains domain references to parameterize                               |
| `LAST_LOGIN_METHOD_IMPLEMENTATION_PLAN.md` | **Applicable** | Modify         | Platform-specific plugin patterns - has old package name reference                            |

#### Key Observation

All authentication documentation contains **valuable technical patterns** that are technology-specific (Better Auth + Convex + Expo) rather than business-specific. The "CUC-specific" elements are almost entirely infrastructure references (Convex deployment names, URLs) that can be parameterized.

---

### Section 3: Storybook & Development Docs (`/app/docs/`)

| File                                   | Classification   | Recommendation | Summary                                                                         |
| -------------------------------------- | ---------------- | -------------- | ------------------------------------------------------------------------------- |
| `STORYBOOK_IMPLEMENTATION_PHASES.md`   | **Mixed**        | Modify         | 17-phase Storybook setup - references `UGC_COLORS` and specific component lists |
| `storybook-expo-research.md`           | **Applicable**   | Keep           | Pure technical research on Storybook 9-10 for Expo                              |
| `storybook-implementation-plan.md`     | **Mixed**        | Modify         | Implementation plan with CUC component examples to generalize                   |
| `storybook-nextjs-research.md`         | **Applicable**   | Keep           | Pure technical research on Storybook with Next.js                               |
| `storybook-unified-verified-report.md` | **Applicable**   | Keep           | Verification report cross-referencing official sources                          |
| `EXPO_NATIVE_DEVELOPMENT.md`           | **Applicable**   | Keep           | Complete Expo native development workflow guide                                 |
| `android-emulator-setup.md`            | **Applicable**   | Keep           | Android emulator setup for Apple Silicon                                        |
| `ANIMATED_MEMBERSHIP_CARD.md`          | **CUC-Specific** | Remove         | Gyroscope tilt animation for CUC membership cards                               |

---

### Section 4: Root Level & Miscellaneous Docs

| File                                | Classification   | Recommendation | Summary                                                     |
| ----------------------------------- | ---------------- | -------------- | ----------------------------------------------------------- |
| `README.md`                         | **Applicable**   | Modify         | Tech stack overview - update project name                   |
| `CLAUDE.md`                         | **Applicable**   | Keep           | Claude Code assistant guidance, fully generic               |
| `bob.md`                            | **CUC-Specific** | Remove         | Generated 933KB codebase snapshot, contains CUC code        |
| `CV-PROJECT-SUMMARY.md`             | **CUC-Specific** | Remove         | Personal portfolio document, not project documentation      |
| `design.md`                         | **CUC-Specific** | Modify         | CUC brand colors (Navy/Sage/Cream), fonts, aesthetic        |
| `HEROUI_COMPLIANCE_ANALYSIS.md`     | **Mixed**        | Modify         | HeroUI analysis with `UGC_COLORS` references                |
| `HEROUI_THEMING_MIGRATION_PLAN.md`  | **Mixed**        | Modify         | Migration plan with CUC brand colors                        |
| `KEYBOARD_FORM_IMPROVEMENTS.md`     | **Applicable**   | Keep           | Generic React Native keyboard handling patterns             |
| `MIGRATION-PLAN.md`                 | **Mixed**        | Modify         | NativeWind to UniWind migration, has "Yale Club" references |
| `.ruler/bts.md`                     | **Applicable**   | Modify         | Better-T-Stack rules, update project name                   |
| `packages/backend/convex/README.md` | **Applicable**   | Keep           | Standard Convex documentation                               |
| `apps/native/.expo/README.md`       | **Applicable**   | Keep           | Auto-generated Expo documentation                           |

---

## Action Plan

### Files to REMOVE (11 files)

These files contain CUC-specific business logic and should be deleted:

```
/requirements/features.md
/requirements/raw_requirements.md
/requirements/README.md
/requirements/user-flows.md
/requirements/user-personas.md
/app/bob.md
/app/CV-PROJECT-SUMMARY.md
/app/docs/ANIMATED_MEMBERSHIP_CARD.md
```

**Rationale:** These files describe CUC-specific:

- Business workflows (script-first, brief creation, usage tracking)
- User personas (UGC marketplace users: Sarah, Marcus, Priya)
- User journeys (brand/creator flows for UGC content)
- Personal portfolio content (CV summary)
- Generated snapshots (bob.md)

### Files to KEEP AS-IS (13 files)

These files are fully applicable to any UGC platform:

```
/requirements/technical-architecture.md
/requirements/user-flow-diagram-key.md
/app/CLAUDE.md
/app/KEYBOARD_FORM_IMPROVEMENTS.md
/app/docs/AUTH_NAVIGATION_FIX.md
/app/docs/AUTH_NAVIGATION_PATTERNS.md
/app/docs/storybook-expo-research.md
/app/docs/storybook-nextjs-research.md
/app/docs/storybook-unified-verified-report.md
/app/docs/EXPO_NATIVE_DEVELOPMENT.md
/app/docs/android-emulator-setup.md
/app/packages/backend/convex/README.md
/app/apps/native/.expo/README.md
```

**Rationale:** These files contain:

- Technology-specific patterns (not business-specific)
- Tooling documentation (Storybook, Expo, Android emulators)
- Authentication patterns (Better Auth + Convex + Expo)
- Diagramming standards

### Files to MODIFY (14 files)

These files contain valuable patterns with CUC-specific references that need updating:

| File                                            | Changes Required                                                         |
| ----------------------------------------------- | ------------------------------------------------------------------------ |
| `/requirements/data-model.md`                   | Extract generic marketplace patterns, flag domain-specific tables        |
| `/requirements/open-questions.md`               | Keep generic marketplace questions, remove script/usage questions        |
| `/requirements/subscription-tiers.md`           | Keep tier structure, remove briefs/scripts limits, competitor comparison |
| `/requirements/trust-system.md`                 | Keep architecture, abstract factors/badges to placeholders               |
| `/app/README.md`                                | Update project name from old references                                  |
| `/app/design.md`                                | Replace CUC colors (Navy/Sage/Cream) with generic brand placeholders     |
| `/app/HEROUI_COMPLIANCE_ANALYSIS.md`            | Replace `UGC_COLORS` with generic `BRAND_COLORS`                         |
| `/app/HEROUI_THEMING_MIGRATION_PLAN.md`         | Replace CUC brand colors with placeholders                               |
| `/app/MIGRATION-PLAN.md`                        | Remove "Yale Club" references, club-specific branding                    |
| `/app/.ruler/bts.md`                            | Update project name reference                                            |
| `/app/docs/AUTHENTICATION-INVESTIGATION.md`     | Replace Convex URLs with `<YOUR_CONVEX_DEPLOYMENT>`                      |
| `/app/docs/BETTER_AUTH_FIX_ANALYSIS.md`         | Replace old project name, Convex URLs                                    |
| `/app/docs/SOCIAL_AUTHENTICATION.md`            | Replace Convex deployment URLs                                           |
| `/app/docs/IOS_PASSWORD_AUTOFILL_SETUP.md`      | Replace domain with `<YOUR_DOMAIN>`                                      |
| `/app/docs/STORYBOOK_IMPLEMENTATION_PHASES.md`  | Generalize component lists, remove `UGC_COLORS`                          |
| `/app/docs/storybook-implementation-plan.md`    | Remove codebase analysis section, generic examples                       |
| `/app/LAST_LOGIN_METHOD_IMPLEMENTATION_PLAN.md` | Update package name reference                                            |

---

## Recommended Generic Replacements

### Infrastructure Placeholders

| CUC-Specific                               | Replace With                           |
| ------------------------------------------ | -------------------------------------- |
| `artful-cod-78.convex.site`                | `<YOUR_CONVEX_DEPLOYMENT>.convex.site` |
| `ugc://`                                   | `<YOUR_APP_SCHEME>://`                 |
| `com.ugc.app`                              | `<YOUR_BUNDLE_ID>`                     |
| `ugc.com`                                  | `<YOUR_DOMAIN>`                        |
| `convoexpo-and-nextjs-web-bun-better-auth` | `ugc` or `<YOUR_PROJECT_NAME>`         |

### Branding Placeholders

| CUC-Specific                     | Replace With                     |
| -------------------------------- | -------------------------------- |
| `UGC_COLORS`                     | `BRAND_COLORS`                   |
| `--ugc-navy: #06273a`            | `--brand-primary: <color>`       |
| `--ugc-sage: #85b09a`            | `--brand-secondary: <color>`     |
| `--ugc-cream: #fffef8`           | `--brand-background: <color>`    |
| `Cormorant Garamond` / `Raleway` | `<heading-font>` / `<body-font>` |

### Domain Model Placeholders

| CUC-Specific | Replace With              |
| ------------ | ------------------------- |
| briefs       | `<work-item>`             |
| scripts      | `<deliverable>`           |
| submissions  | `submissions` (generic)   |
| creators     | `providers` or `creators` |
| brands       | `clients` or `buyers`     |

---

## Architecture Elements Preserved

The following architectural patterns from the CUC project are valuable and applicable to any two-sided marketplace:

### From `technical-architecture.md`:

- Turborepo monorepo structure
- Expo Native + Next.js Admin architecture
- Convex real-time backend patterns
- BetterAuth integration for multi-platform auth
- Polar payment integration (subscriptions + escrow)
- Push notification architecture
- CI/CD with GitHub Actions and EAS

### From `trust-system.md`:

- Two-sided trust score calculation methodology
- Rolling window calculations with recency weighting
- Experience level progression system
- Badge architecture (behavioral + verification)
- Score decay and maintenance rules
- Fraud detection signal patterns
- New user bootstrapping (cold start)

### From `data-model.md`:

- Entity-based identity (reputation persists across accounts)
- Order state machine patterns
- Escrow payment workflow
- Real-time messaging system
- Notification infrastructure
- Audit logging patterns

---

## Appendix: Full File Inventory

### Requirements Folder (11 files)

| #   | File                      | Size | Classification |
| --- | ------------------------- | ---- | -------------- |
| 1   | data-model.md             | -    | Mixed          |
| 2   | features.md               | -    | CUC-Specific   |
| 3   | open-questions.md         | -    | Mixed          |
| 4   | raw_requirements.md       | -    | CUC-Specific   |
| 5   | README.md                 | -    | CUC-Specific   |
| 6   | subscription-tiers.md     | -    | Mixed          |
| 7   | technical-architecture.md | -    | Applicable     |
| 8   | trust-system.md           | -    | Mixed          |
| 9   | user-flow-diagram-key.md  | -    | Applicable     |
| 10  | user-flows.md             | -    | CUC-Specific   |
| 11  | user-personas.md          | -    | CUC-Specific   |

### App Documentation (19 files)

| #   | File                                     | Classification        |
| --- | ---------------------------------------- | --------------------- |
| 1   | README.md                                | Applicable (modify)   |
| 2   | CLAUDE.md                                | Applicable            |
| 3   | bob.md                                   | CUC-Specific          |
| 4   | CV-PROJECT-SUMMARY.md                    | CUC-Specific          |
| 5   | design.md                                | CUC-Specific (modify) |
| 6   | HEROUI_COMPLIANCE_ANALYSIS.md            | Mixed                 |
| 7   | HEROUI_THEMING_MIGRATION_PLAN.md         | Mixed                 |
| 8   | KEYBOARD_FORM_IMPROVEMENTS.md            | Applicable            |
| 9   | MIGRATION-PLAN.md                        | Mixed                 |
| 10  | AUTHENTICATION-INVESTIGATION.md          | Mixed                 |
| 11  | LAST_LOGIN_METHOD_IMPLEMENTATION_PLAN.md | Applicable (modify)   |

### Docs Subdirectory (8 files)

| #   | File                                 | Classification |
| --- | ------------------------------------ | -------------- |
| 1   | AUTH_NAVIGATION_FIX.md               | Applicable     |
| 2   | AUTH_NAVIGATION_PATTERNS.md          | Applicable     |
| 3   | BETTER_AUTH_FIX_ANALYSIS.md          | Mixed          |
| 4   | SOCIAL_AUTHENTICATION.md             | Mixed          |
| 5   | IOS_PASSWORD_AUTOFILL_SETUP.md       | Mixed          |
| 6   | STORYBOOK_IMPLEMENTATION_PHASES.md   | Mixed          |
| 7   | storybook-expo-research.md           | Applicable     |
| 8   | storybook-implementation-plan.md     | Mixed          |
| 9   | storybook-nextjs-research.md         | Applicable     |
| 10  | storybook-unified-verified-report.md | Applicable     |
| 11  | EXPO_NATIVE_DEVELOPMENT.md           | Applicable     |
| 12  | android-emulator-setup.md            | Applicable     |
| 13  | ANIMATED_MEMBERSHIP_CARD.md          | CUC-Specific   |

### Other Locations (3 files)

| #   | File                              | Classification      |
| --- | --------------------------------- | ------------------- |
| 1   | .ruler/bts.md                     | Applicable (modify) |
| 2   | packages/backend/convex/README.md | Applicable          |
| 3   | apps/native/.expo/README.md       | Applicable          |

---

_End of Report_
