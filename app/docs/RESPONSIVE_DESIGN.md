# Responsive Design with Uniwind + HeroUI Native

This document outlines the idiomatic approach for implementing responsive, mobile-first designs in our Expo web app using Uniwind and HeroUI Native.

## Stack Overview

| Library                                                            | Purpose                                   |
| ------------------------------------------------------------------ | ----------------------------------------- |
| [Uniwind](https://uniwind.dev/)                                    | Tailwind CSS v4 bindings for React Native |
| [HeroUI Native](https://v3.heroui.com/docs/native/getting-started) | Component library built on Uniwind        |
| Tailwind CSS v4                                                    | Utility-first CSS framework               |

## Core Principle: CSS-First, Not JavaScript

**Use CSS breakpoint classes, not JavaScript breakpoint detection.**

```tsx
// ✅ CORRECT - CSS breakpoints via className
<View className="hidden sm:flex">
  <Text className="text-sm md:text-base lg:text-lg">Responsive text</Text>
</View>;

// ❌ AVOID - JavaScript breakpoint detection
const { isMobile } = useResponsive();
{
  !isMobile && <View>...</View>;
}
```

The `useResponsive()` hook should only be used when CSS cannot solve the problem (see exceptions below).

## Default Breakpoints

Uniwind uses Tailwind's mobile-first breakpoint system:

| Prefix | Min Width | Use Case                     |
| ------ | --------- | ---------------------------- |
| (none) | 0px       | Mobile base styles           |
| `sm:`  | 640px     | Large phones / small tablets |
| `md:`  | 768px     | Tablets                      |
| `lg:`  | 1024px    | Desktops                     |
| `xl:`  | 1280px    | Large desktops               |
| `2xl:` | 1536px    | Extra large screens          |

### Mobile-First Methodology

Styles without prefixes apply to **all screen sizes**. Prefixed styles apply at that breakpoint **and above**.

```tsx
// This means:
// - All screens: p-4, text-sm
// - 640px+: p-6
// - 1024px+: p-8, text-base
<View className="p-4 sm:p-6 lg:p-8">
  <Text className="text-sm lg:text-base">Content</Text>
</View>
```

## Custom Breakpoints

Add custom breakpoints in `apps/native/global.css`:

```css
@theme {
  /* Extra small - very narrow phones */
  --breakpoint-xs: 480px;

  /* Between xs and sm if needed */
  --breakpoint-2xs: 320px;
}
```

Then use them in className:

```tsx
<Text className="text-xs xs:text-sm sm:text-base">
  Scales up as screen grows
</Text>
```

## Common Responsive Patterns

### Show/Hide Elements

```tsx
// Hidden on mobile, visible on tablet+
<View className="hidden md:flex">
  <SideNav />
</View>

// Visible on mobile only
<View className="flex md:hidden">
  <MobileMenu />
</View>
```

### Responsive Layout

```tsx
// Stack on mobile, row on desktop
<View className="flex-col md:flex-row gap-4">
  <Card />
  <Card />
</View>

// Grid: 1 col → 2 col → 3 col
<View className="w-full sm:w-1/2 lg:w-1/3 p-2">
  <GridItem />
</View>
```

### Responsive Typography

```tsx
<Text className="text-2xl sm:text-3xl lg:text-4xl font-bold">
  Headline
</Text>

<Text className="text-sm md:text-base text-muted">
  Body text that's readable on all devices
</Text>
```

### Responsive Spacing

```tsx
<View className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
  <HeroContent />
</View>
```

### Icon-Only on Mobile

```tsx
// Show icon always, label only on larger screens
<Pressable className="flex-row items-center gap-2">
  <Icon name="grid" />
  <Text className="hidden sm:inline">All Categories</Text>
  <Icon name="chevron-down" />
</Pressable>
```

## When JavaScript IS Required

Some scenarios cannot be solved with CSS alone:

### 1. Dynamic Placeholder Text

CSS cannot change the `placeholder` attribute content. Use JavaScript:

```tsx
const { width } = useResponsive();

const placeholder =
  width < 480
    ? "Search..."
    : width < 768
      ? "Search creators..."
      : "Search for creators or briefs...";

<TextInput placeholder={placeholder} />;
```

### 2. Conditional Data Fetching

When you need to fetch different data based on screen size:

```tsx
const { isMobile } = useResponsive();
const limit = isMobile ? 10 : 50;

useQuery({ limit });
```

### 3. Complex Layout Logic

When layout decisions require calculations CSS can't express:

```tsx
const { width } = useResponsive();
const columns = Math.floor(width / 300);
```

## Anti-Patterns to Avoid

### Don't: Duplicate Components

```tsx
// ❌ BAD - Renders both, hides one
{
  isMobile ? <MobileNav /> : <DesktopNav />;
}

// ✅ GOOD - Single component with responsive classes
<Nav className="flex-col md:flex-row" />;
```

### Don't: Inline Style Conditionals

```tsx
// ❌ BAD - JavaScript-driven responsive styles
<View style={{ padding: isMobile ? 16 : 32 }}>

// ✅ GOOD - CSS responsive classes
<View className="p-4 md:p-8">
```

### Don't: Over-Use Breakpoints

Stick to 3-5 breakpoints maximum. Too many creates maintenance burden and inconsistent designs.

## Testing Responsive Designs

1. **Chrome DevTools**: Use device toolbar (Cmd+Shift+M) to test breakpoints
2. **Expo Web**: Resize browser window to trigger breakpoints
3. **Real Devices**: Test on actual phones/tablets for touch interactions

## Quick Reference

| Task                    | Solution                                      |
| ----------------------- | --------------------------------------------- |
| Hide on mobile          | `className="hidden sm:flex"`                  |
| Show on mobile only     | `className="flex sm:hidden"`                  |
| Responsive text size    | `className="text-sm md:text-base lg:text-lg"` |
| Responsive padding      | `className="p-4 md:p-6 lg:p-8"`               |
| Stack → Row             | `className="flex-col md:flex-row"`            |
| Change placeholder text | Use `useResponsive()` hook                    |

## Styling Principles

### Use `className` Prop, Not Inline Styles

All styling should use Tailwind utility classes via the `className` prop.

```tsx
// ✅ CORRECT - className with Tailwind utilities
<Text className="text-base font-semibold text-foreground">
  Hello World
</Text>

// ❌ INCORRECT - Inline styles
<Text style={{ fontSize: 16, fontWeight: '600', color: '#222325' }}>
  Hello World
</Text>
```

### Use Semantic Size Classes, Not Arbitrary Values

Tailwind provides a semantic type scale. Never use hardcoded pixel values.

```tsx
// ✅ CORRECT - Semantic classes
<Text className="text-sm">Small text</Text>
<Text className="text-base">Base text</Text>
<Text className="text-lg">Large text</Text>

// ❌ INCORRECT - Arbitrary values
<Text className="text-[15px]">Hardcoded size</Text>
<Text style={{ fontSize: 15 }}>Inline hardcoded size</Text>
```

#### Tailwind Text Size Scale

| Class       | Size | Use Case                     |
| ----------- | ---- | ---------------------------- |
| `text-xs`   | 12px | Fine print, badges           |
| `text-sm`   | 14px | Secondary text, captions     |
| `text-base` | 16px | Body text (default)          |
| `text-lg`   | 18px | Emphasized body, subheadings |
| `text-xl`   | 20px | Section headings             |
| `text-2xl`  | 24px | Page headings                |
| `text-3xl`  | 30px | Hero subheadings             |
| `text-4xl`  | 36px | Hero headings                |

### Use Theme Colors, Not Hardcoded Values

Our theme defines semantic color tokens in `global.css`. Reference them via Tailwind classes.

```tsx
// ✅ CORRECT - Theme tokens
<Text className="text-foreground">Primary text</Text>
<Text className="text-muted">Secondary text</Text>
<View className="bg-surface border-border">Card</View>

// ❌ INCORRECT - Hardcoded colors
<Text style={{ color: '#222325' }}>Hardcoded color</Text>
const THEME_COLORS = { foreground: '#222325' };
<Text style={{ color: THEME_COLORS.foreground }}>JS constant</Text>
```

#### Available Theme Tokens

| Token                | Light Mode | Use Case             |
| -------------------- | ---------- | -------------------- |
| `foreground`         | #222325    | Primary text         |
| `muted`              | #62646a    | Secondary text       |
| `background`         | #FFFFFF    | Page background      |
| `surface`            | #FFFFFF    | Card backgrounds     |
| `border`             | #e4e5e7    | Borders, dividers    |
| `primary`            | #1DBF73    | Brand green, CTAs    |
| `primary-foreground` | #FFFFFF    | Text on primary      |
| `accent`             | #ffbe5b    | Pro gold, highlights |

### Use HeroUI Native Components

Prefer HeroUI Native components over raw React Native primitives.

```tsx
// ✅ CORRECT - HeroUI Native components
import { Card, Button, Surface } from "heroui-native";

<Card className="p-6 rounded-xl">
  <Card.Body>
    <Card.Title className="text-lg font-semibold">Title</Card.Title>
    <Card.Description className="text-sm text-muted">
      Description text
    </Card.Description>
  </Card.Body>
  <Card.Footer>
    <Button variant="primary">Action</Button>
  </Card.Footer>
</Card>;

// ❌ INCORRECT - Raw React Native with inline styles
import { View, Text } from "react-native";

<View style={{ padding: 24, borderRadius: 12, backgroundColor: "#fff" }}>
  <Text style={{ fontSize: 18, fontWeight: "600" }}>Title</Text>
  <Text style={{ fontSize: 14, color: "#62646a" }}>Description</Text>
</View>;
```

## Text Truncation

Uniwind doesn't support CSS-based truncation utilities (`truncate`, `line-clamp`) because React Native uses the Yoga layout engine, not browser CSS.

**Use React Native's `numberOfLines` prop:**

```tsx
<Card.Title numberOfLines={1} className="text-base font-semibold">
  This is a very long title that will be truncated with ellipsis
</Card.Title>

<Card.Description numberOfLines={2} className="text-sm text-muted">
  This description spans multiple lines but will be truncated after two lines
</Card.Description>
```

**Important:** The parent container must have `flex-1` and `min-w-0` to allow text truncation in flex layouts.

```tsx
<View className="flex-row items-center gap-3">
  <Avatar />
  <View className="flex-1 min-w-0">
    <Text numberOfLines={1} className="text-base font-semibold">
      Long name that truncates properly
    </Text>
    <Text numberOfLines={1} className="text-sm text-muted">
      Long subtitle that also truncates
    </Text>
  </View>
</View>
```

## Flexbox Input Sizing Gotcha

When using `TextInput` (or HTML `<input>`) inside a flex container, the input may refuse to shrink below a certain width (typically ~150-200px), even with `flex: 1` and `minWidth: 0`.

### The Problem

HTML input elements have an intrinsic minimum width determined by the `size` attribute (defaults to 20 characters). Flexbox respects this intrinsic size even when you set `minWidth: 0`.

```tsx
// ❌ WON'T SHRINK PROPERLY - input has intrinsic width
<View style={{ flex: 1, minWidth: 0 }}>
  <TextInput style={{ flex: 1, minWidth: 0 }} />
</View>
```

### The Solution

Add `width: 0` to the input to override its intrinsic size. Combined with `flex: 1`, this forces the input to only use flex-allocated space:

```tsx
// ✅ SHRINKS PROPERLY - width: 0 overrides intrinsic size
<View style={{ flex: 1, minWidth: 0 }}>
  <TextInput
    style={{
      flex: 1,
      minWidth: 0,
      width: 0, // Critical: overrides input's intrinsic size
    }}
  />
</View>
```

### Why This Happens

1. `<input>` elements have a default `size="20"` attribute (20 characters)
2. Browsers calculate a minimum width based on this size and the font
3. `minWidth: 0` tells flexbox "don't use `auto`" but doesn't affect the input's intrinsic size
4. `width: 0` tells the input "ignore your intrinsic size, only use what flex gives you"

### Complete Pattern for Flexible Inputs

```tsx
<View style={{ flexDirection: "row", alignItems: "center" }}>
  {/* Fixed-width element */}
  <Icon name="search" size={20} />

  {/* Flexible input that shrinks properly */}
  <View style={{ flex: 1, minWidth: 0 }}>
    <TextInput
      style={{
        flex: 1,
        minWidth: 0,
        width: 0,
      }}
      placeholder="Search..."
    />
  </View>

  {/* Fixed-width element */}
  <Button>Go</Button>
</View>
```

## Spacing Scale

Use Tailwind's spacing scale for consistent spacing.

| Class          | Size | Use Case            |
| -------------- | ---- | ------------------- |
| `gap-1`, `p-1` | 4px  | Micro spacing       |
| `gap-2`, `p-2` | 8px  | Tight spacing       |
| `gap-3`, `p-3` | 12px | Standard spacing    |
| `gap-4`, `p-4` | 16px | Comfortable spacing |
| `gap-6`, `p-6` | 24px | Generous spacing    |
| `gap-8`, `p-8` | 32px | Section spacing     |

## Migration Checklist

When refactoring components from inline styles to Tailwind:

- [ ] Replace `style={{ }}` with `className=""`
- [ ] Convert hardcoded colors to theme tokens (`text-foreground`, `bg-surface`)
- [ ] Convert pixel font sizes to semantic classes (`text-sm`, `text-base`)
- [ ] Convert pixel spacing to Tailwind scale (`p-4`, `gap-3`)
- [ ] Replace React Native `View`/`Text` with HeroUI components where applicable
- [ ] Add `numberOfLines` for text that should truncate
- [ ] Ensure truncating text containers have `flex-1 min-w-0`
- [ ] Remove JS `THEME_COLORS` constants in favor of CSS tokens

## References

- [Uniwind Breakpoints Documentation](https://docs.uniwind.dev/breakpoints)
- [HeroUI Native Styling Guide](https://v3.heroui.com/docs/native/getting-started/styling)
- [HeroUI Native Card Component](https://v3.heroui.com/docs/native/components/card)
- [Tailwind CSS Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Tailwind CSS Font Size](https://tailwindcss.com/docs/font-size)
