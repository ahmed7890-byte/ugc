# NativeWind → UniWind Migration Plan

The purpose of this migration plan is to take the ~/gruckion-workdir/convexpo/ And update this repo with the changes that we want.

## Todo List

- [x] Research UniWind migration patterns from NativeWind
- [x] Document NativeWind→UniWind porting issues
- [ ] Port monorepo metro.config from convexpo (missing in ours)
- [ ] Convert NativeWind className patterns to UniWind
- [ ] Add tailwind-merge for className deduplication
- [ ] Port OAuth hooks (Google/Apple) from convexpo
- [ ] Port auth UI screens (landing/signin/signup/reset)
- [ ] Create custom HeroUI theme
- [ ] Build app screens

---

## Tech Stack Comparison

### Current Project (ugc)

| Category        | Technology                                                 |
| --------------- | ---------------------------------------------------------- |
| Package Manager | **bun 1.2.20**                                             |
| Frontend        | Next.js 16 (web) + Expo 54 (native)                        |
| Styling         | **UniWind** + Tailwind v4                                  |
| UI Components   | heroui-native (beta.9)                                     |
| Auth            | Better-Auth **1.4.9** + @convex-dev/better-auth **0.10.9** |
| Backend         | Convex **1.31.2**                                          |
| AI              | @convex-dev/agent + Gemini                                 |
| Deploy          | Cloudflare (Alchemy)                                       |
| Extras          | biome, lefthook, turborepo, fumadocs, ruler, ultracite     |

### convexpo Project (Reference)

| Category        | Technology                                                 |
| --------------- | ---------------------------------------------------------- |
| Package Manager | **pnpm 10.15.0**                                           |
| Frontend        | **Native only** (Expo 54) - no web app                     |
| Styling         | **NativeWind 4.1.23** + Tailwind v3                        |
| UI Components   | heroui-native (alpha.14)                                   |
| Auth            | Better-Auth **1.3.11** + @convex-dev/better-auth **0.8.6** |
| Backend         | Convex **1.27.3**                                          |
| Extras          | biome, turborepo, @convex-dev/resend (email)               |

### Key Differences

| Aspect             | Your Project              | convexpo                                           |
| ------------------ | ------------------------- | -------------------------------------------------- |
| **Web App**        | Next.js 16                | None                                               |
| **Auth Version**   | Newer (1.4.9)             | Older (1.3.11)                                     |
| **Convex Version** | Newer (1.31.2)            | Older (1.27.3)                                     |
| **Styling**        | UniWind (minimal, v4)     | NativeWind (mature, v3)                            |
| **Auth Features**  | Basic email signin/signup | Full OAuth (Google/Apple) + Email + Password Reset |
| **UI Polish**      | Basic demo screens        | Polished landing + auth flows                      |
| **bts.jsonc**      | Missing                   | Present                                            |

---

## NativeWind → UniWind Porting Analysis

### Key Differences

| Aspect                      | NativeWind (convexpo)                 | UniWind (your project)                        |
| --------------------------- | ------------------------------------- | --------------------------------------------- |
| **Tailwind Version**        | v3                                    | v4                                            |
| **Metro Config**            | `withNativeWind()`                    | `withUniwindConfig()`                         |
| **Babel**                   | Requires `nativewind/babel` preset    | No babel preset needed                        |
| **CSS Import**              | `@tailwind base/components/utilities` | `@import "tailwindcss"` + `@import "uniwind"` |
| **Theme Config**            | `tailwind.config.js` with presets     | CSS-based theming in `global.css`             |
| **className Deduplication** | Automatic                             | Manual (needs `tailwind-merge`)               |
| **Third-party Components**  | `cssInterop()`                        | `withUniwind()` HOC                           |

---

## Issues to Address When Porting

### 1. Metro Config is Missing Monorepo Support

Your metro.config.js is minimal. convexpo has:

- `withMonorepoPaths()` - watches all monorepo files
- `withTurborepoManagedCache()` - caches in `.cache/metro`
- `unstable_enablePackageExports` - for proper module resolution

### 2. className Deduplication

UniWind does NOT auto-dedupe classNames. Example:

```tsx
// NativeWind: last class wins
<View className="bg-red-500 bg-blue-500" />; // → blue

// UniWind: CSS specificity rules apply (unpredictable)
// Need tailwind-merge:
import { twMerge } from "tailwind-merge";
<View className={twMerge("bg-red-500", "bg-blue-500")} />; // → blue
```

### 3. SafeAreaView Styling

convexpo uses NativeWind's built-in `SafeAreaView` className support.
UniWind requires wrapping with `withUniwind()`:

```tsx
import { withUniwind } from "uniwind";
import { SafeAreaView } from "react-native-safe-area-context";

const StyledSafeAreaView = withUniwind(SafeAreaView);
```

### 4. GestureHandlerRootView

convexpo uses `className="flex-1"` directly.
Your project uses `style={{ flex: 1 }}` - this works but should be consistent.

### 5. Theme System

convexpo's theme is in `tailwind.config.js` with CSS variables in `global.css`.
UniWind uses pure CSS theming. You'll need to migrate the design.md colors directly into your CSS.

---

## Files to Port from convexpo

| File                                    | Purpose                | Conversion Needed                             |
| --------------------------------------- | ---------------------- | --------------------------------------------- |
| `lib/betterAuth/client.ts`              | Auth client setup      | Already similar                               |
| `lib/betterAuth/oauth/useGoogleAuth.ts` | Google OAuth hook      | Direct copy                                   |
| `lib/betterAuth/oauth/useAppleAuth.ts`  | Apple OAuth hook       | Direct copy + add `expo-apple-authentication` |
| `app/(root)/(auth)/landing.tsx`         | Landing page UI        | Convert SafeAreaView usage                    |
| `app/(root)/(auth)/email/signin.tsx`    | Email signin           | Convert patterns                              |
| `app/(root)/(auth)/email/signup.tsx`    | Email signup           | Convert patterns                              |
| `app/(root)/(auth)/email/(reset)/*`     | Password reset flow    | Convert patterns                              |
| `themes/pastel-themes.ts`               | HeroUI theme config    | Adapt for app branding                        |
| `contexts/app-theme-context.tsx`        | Theme switching        | Already have similar                          |
| `providers/SplashScreenProvider.tsx`    | Splash screen handling | Optional port                                 |

---

## Dependencies to Add

```bash
# OAuth support
bun add expo-apple-authentication
```

**Note:** `tailwind-merge` is already present in your project.

---

## Recommended Order of Work

1. **Fix metro.config.js** - Add monorepo support
2. **Add OAuth hooks** - Copy from convexpo, test Google/Apple sign in
3. **Port auth UI** - Convert NativeWind patterns, wrap SafeAreaView
4. **Create custom theme** - Configure HeroUI theme
5. **Build app features** - Implement app screens
