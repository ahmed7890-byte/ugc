# Design System

**Source:** Design system template.

---

## Logo

<!-- Replace with your logo URL and dimensions -->

- **URL:** `<your-logo-url>`
- **Dimensions:** 102×102px (recommended)

### Favicons

<!-- Replace with your favicon URLs -->

| Type             | URL                  |
| ---------------- | -------------------- |
| icon (192x192)   | `<your-favicon-url>` |
| shortcut icon    | `<your-favicon-url>` |
| apple-touch-icon | `<your-favicon-url>` |
| favicon.ico      | `<your-favicon-url>` |

---

## Colors

### Primary Brand Colors

<!-- Replace placeholder values with your brand colors -->

| Token      | Placeholder          | Usage                                                |
| ---------- | -------------------- | ---------------------------------------------------- |
| Primary    | `<primary-color>`    | Hero backgrounds, buttons, text on light backgrounds |
| Secondary  | `<secondary-color>`  | Header/nav background, subtle accents                |
| Background | `<background-color>` | Page backgrounds, text on dark backgrounds           |
| White      | `#ffffff`            | Input backgrounds, cards on light theme              |

### UI Color Applications

| Context                         | Background           | Text                 | Border                     |
| ------------------------------- | -------------------- | -------------------- | -------------------------- |
| Dark sections (hero, footer)    | `<primary-color>`    | `<background-color>` | `<background-color>` (1px) |
| Light sections (forms, content) | `<background-color>` | `<primary-color>`    | `<primary-color>` (1px)    |
| Header/Navigation               | `<secondary-color>`  | `<primary-color>`    | —                          |
| Primary buttons                 | `<primary-color>`    | `<background-color>` | —                          |
| Secondary buttons               | `<background-color>` | `<primary-color>`    | `<primary-color>`          |

---

## Typography

### Font Families

<!-- Replace placeholder fonts with your brand fonts -->

#### Primary: `<heading-font>`

- **Variant:** Light (recommended)
- **Usage:** Headings, display text

#### Secondary: `<body-font>`

- **Usage:** Body text, navigation, captions

#### System Fonts (Fallbacks)

- **Times New Roman** (fallbacks: times)
- **Helvetica** (fallbacks: Arial)
- **Arial**

### Type Scale

| Element            | Font             | Size              | Line Height    | Weight |
| ------------------ | ---------------- | ----------------- | -------------- | ------ |
| Heading 1 (Large)  | `<heading-font>` | 40px (2.50rem)    | 0.80 (tight)   | —      |
| Heading 1 (Bold)   | `<heading-font>` | 40px (2.50rem)    | 1.35           | 700    |
| Heading 1 (Medium) | Times New Roman  | 35px (2.19rem)    | 0.91 (tight)   | —      |
| Heading 2          | `<heading-font>` | 22px (1.38rem)    | 1.41           | —      |
| Body/Nav           | `<body-font>`    | 15px (0.94rem)    | 1.67 (relaxed) | —      |
| Subheading         | Helvetica        | 15px (0.94rem)    | 1.40           | 700    |
| Link               | `<body-font>`    | 14px (0.88rem)    | 1.79 (relaxed) | —      |
| Button             | Helvetica        | 14px (0.88rem)    | —              | —      |
| Button (Alt)       | Arial            | 13.33px (0.83rem) | —              | —      |
| Caption            | `<body-font>`    | 14px (0.88rem)    | 3.57 (relaxed) | —      |
| Small Text         | Arial            | 10px (0.63rem)    | —              | —      |

---

## Spacing System

**Base Unit:** 8px

| Value | Rem     | Use Case          |
| ----- | ------- | ----------------- |
| 3px   | 0.19rem | Micro spacing     |
| 7px   | 0.44rem | Tight spacing     |
| 8px   | 0.50rem | Base unit         |
| 9px   | 0.56rem | Small             |
| 10px  | 0.63rem | Small             |
| 18px  | 1.13rem | Component padding |
| 22px  | 1.38rem | Medium gap        |
| 26px  | 1.63rem | Section padding   |
| 27px  | 1.69rem | Section padding   |
| 34px  | 2.13rem | Large gap         |
| 43px  | 2.69rem | Section spacing   |
| 55px  | 3.44rem | Large sections    |
| 59px  | 3.69rem | Large sections    |
| 60px  | 3.75rem | Section breaks    |
| 61px  | 3.81rem | Section breaks    |

---

## Borders

| Style     | Color                | Use           |
| --------- | -------------------- | ------------- |
| 1px solid | `<background-color>` | Input borders |

---

## Components

### Buttons

#### Primary Button

| State   | Background           | Text      | Border                |
| ------- | -------------------- | --------- | --------------------- |
| Default | `<background-color>` | `#000000` | 2px solid transparent |
| Hover   | `var(--hover-bg)`    | —         | —                     |
| Active  | `var(--hover-bg)`    | —         | —                     |

### Text Inputs

| State   | Background                     | Text                 | Border                       | Padding         |
| ------- | ------------------------------ | -------------------- | ---------------------------- | --------------- |
| Default | `<primary-color>` (1% opacity) | `<background-color>` | 1px solid <background-color> | 3px 3px 3px 5px |
| Focus   | `rgba(255,255,255,1)`          | —                    | rgba(163,217,246,1)          | —               |

**Focus Ring:** `var(--focus-ring-box-shadow)`
**Focus Outline:** rgb(17, 109, 255) solid 2px

---

## Links

| State             | Color | Token                |
| ----------------- | ----- | -------------------- |
| Default (Visited) | Blue  | `#0000ee`            |
| Light Theme       | Light | `<background-color>` |
| Dark Theme        | Dark  | `<primary-color>`    |

---

## Recommended UI Libraries

| Framework    | Details               |
| ------------ | --------------------- |
| Radix UI     | Accessible primitives |
| Tailwind CSS | Utility-first styling |

---

## CSS Custom Properties Reference

```css
:root {
  /* Primary Brand Colors - Replace with your values */
  --brand-primary: <primary-color>;
  --brand-secondary: <secondary-color>;
  --brand-background: <background-color>;
  --brand-white: #ffffff;

  /* Typography - Replace with your fonts */
  --font-heading: <heading-font>;
  --font-body: <body-font>;
}
```

---

## Design Notes

- **Visual Style:** Define your brand aesthetic here
- **Color Mood:** Choose complementary colors that reflect your brand identity
- **Typography:** Pair a display/heading font with a readable body font
- **Accessibility:** Ensure sufficient contrast ratios between text and backgrounds
