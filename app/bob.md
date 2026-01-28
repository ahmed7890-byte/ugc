the agentic development harness enabled building this in 2 days.

<>
This file is a merged representation of the entire codebase, combined into a single document by Repomix.
The content has been processed where security check has been disabled.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:

1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:

- File path as an attribute
- Full contents of the file
</file_format>

<usage_guidelines>

- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Security check has been disabled - content may contain sensitive information
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>

<directory_structure>
.expo/
  prebuild/
    cached-packages.json
.ruler/
  bts.md
  ruler.toml
apps/
  native/
    .rnstorybook/
      stories/
        Button.stories.tsx
        Button.tsx
        Header.stories.tsx
        Header.tsx
        Page.stories.tsx
        Page.tsx
      index.ts
      main.ts
      preview.tsx
    .storybook-web/
      main.ts
      preview.tsx
    app/
      (auth)/
        email/
          (reset)/
            request-password-reset.tsx
            reset-password.tsx
            verify-reset-code.tsx
          _layout.tsx
          signin.tsx
          signup.tsx
        _layout.tsx
        landing.tsx
      (tabs)/
        events/
          _layout.tsx
          [id].tsx
          index.tsx
        menu/
          _layout.tsx
          [category].tsx
          index.tsx
        more/
          _layout.tsx
          about.tsx
          bugle.tsx
          contact.tsx
          dining-room.tsx
          fabric-fund.tsx
          index.tsx
          membership.tsx
          reciprocal-clubs.tsx
        _layout.tsx
        index.tsx
      _layout.tsx
      +not-found.tsx
      modal.tsx
    assets/
      fonts/
        DancingScript-Bold.ttf
        DancingScript-Regular.ttf
      images/
        icons/
          adaptive-icon.png
          android-chrome-192x192.png
          android-chrome-512x512.png
          apple-touch-icon.png
          favicon-16x16.png
          favicon-32x32.png
          favicon.ico
          ios-dark.png
          ios-light.png
          ios-tinted.png
          splash-icon-dark.png
          splash-icon-light.png
        city_uni_club_gold.png
        city_uni_club_white.png
        cuc-logo.png
        hero-background.jpg
        membership-card.png
    components/
      keyboard/
        index.ts
        KeyboardAwareForm.native.tsx
        KeyboardAwareForm.tsx
      CategoryFilter.tsx
      container.tsx
      ExternalLinkButton.tsx
      form.stories.tsx
      form.tsx
      LastUsedIndicator.tsx
      MembershipCard.tsx
      screens.stories.tsx
      sign-in.tsx
      sign-up.tsx
      theme-toggle.tsx
      ui.stories.tsx
    contexts/
      app-theme-context.tsx
    hooks/
      useNavigationOptions.ts
    lib/
      oauth/
        index.ts
        useAppleAuth.ts
        useGitHubAuth.ts
        useGoogleAuth.ts
      auth-client.ts
      useAddToCalendar.ts
    .gitignore
    app.config.ts
    App.tsx
    eas.json
    global.css
    metro.config.cjs
    package.json
    polyfills.js
    tsconfig.json
  web/
    .storybook/
      main.ts
      preview.ts
    src/
      app/
        ai/
          page.tsx
        api/
          auth/
            [...all]/
              route.ts
        dashboard/
          page.tsx
        todos/
          page.tsx
        favicon.ico
        layout.tsx
        page.tsx
      components/
        ui/
          button.stories.tsx
          button.tsx
          card.stories.tsx
          card.tsx
          checkbox.stories.tsx
          checkbox.tsx
          dropdown-menu.stories.tsx
          dropdown-menu.tsx
          input.stories.tsx
          input.tsx
          label.stories.tsx
          label.tsx
          skeleton.stories.tsx
          skeleton.tsx
          sonner.stories.tsx
          sonner.tsx
        header.stories.tsx
        header.tsx
        loader.stories.tsx
        loader.tsx
        mode-toggle.stories.tsx
        mode-toggle.tsx
        providers.tsx
        sign-in-form.stories.tsx
        sign-in-form.tsx
        sign-up-form.stories.tsx
        sign-up-form.tsx
        theme-provider.tsx
        user-menu.tsx
      docs/
        Colors.mdx
        GettingStarted.mdx
        Introduction.mdx
        Typography.mdx
      lib/
        auth-client.ts
        auth-server.ts
        utils.ts
      index.css
    .gitignore
    components.json
    next.config.ts
    open-next.config.ts
    package.json
    postcss.config.mjs
    tsconfig.json
city-university-club-sdlc-docs/
  1-Project-Charter.docx
  2-PRD-MoSCoW.docx
  3-User-Personas.docx
  4-User-Stories-Acceptance-Criteria.docx
  5-Acceptance-Criteria.docx
  6-Wireframes.docx
docs/
  android-emulator-setup.md
  ANIMATED_MEMBERSHIP_CARD.md
  AUTH_NAVIGATION_FIX.md
  AUTH_NAVIGATION_PATTERNS.md
  BETTER_AUTH_FIX_ANALYSIS.md
  EXPO_NATIVE_DEVELOPMENT.md
  IOS_PASSWORD_AUTOFILL_SETUP.md
  SOCIAL_AUTHENTICATION.md
  STORYBOOK_IMPLEMENTATION_PHASES.md
  storybook-expo-research.md
  storybook-implementation-plan.md
  storybook-nextjs-research.md
  storybook-unified-verified-report.md
packages/
  backend/
    convex/
      _generated/
        api.d.ts
        api.js
        dataModel.d.ts
        server.d.ts
        server.js
      agent.ts
      auth.config.ts
      auth.ts
      chat.ts
      convex.config.ts
      healthCheck.ts
      http.ts
      privateData.ts
      README.md
      rsvps.ts
      schema.ts
      todos.ts
      tsconfig.json
    .gitignore
    package.json
  config/
    package.json
    tsconfig.base.json
  env/
    src/
      native.ts
      server.ts
      web.ts
    package.json
    tsconfig.json
  infra/
    alchemy.run.ts
    package.json
.gitignore
AUTHENTICATION-INVESTIGATION.md
biome.jsonc
CLAUDE.md
design.md
HEROUI_COMPLIANCE_ANALYSIS.md
HEROUI_THEMING_MIGRATION_PLAN.md
KEYBOARD_FORM_IMPROVEMENTS.md
LAST_LOGIN_METHOD_IMPLEMENTATION_PLAN.md
lefthook.yml
MIGRATION-PLAN.md
package.json
README.md
tsconfig.json
turbo.json
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path=".expo/prebuild/cached-packages.json">
{
  "dependencies": "a7eec3d5ccf7fc5e825cfeb9a0a74a1937dd9d66",
  "devDependencies": "eb17f12e8bac28cc3d7ee3a0f8150cd630e26218"
}
</file>

<file path=".ruler/bts.md">
# Better-T-Stack Project Rules

This is a convoexpo-and-nextjs-web-bun-better-auth project created with Better-T-Stack CLI.

## Project Structure

This is a monorepo with the following structure:

- **`apps/web/`** - Frontend application (Next.js)

- **`packages/backend/`** - Convex backend functions

- **`apps/native/`** - React Native mobile app (with NativeWind)

## Available Scripts

- `bun run dev` - Start all apps in development mode
- `bun run dev:web` - Start only the web app
- `bun run dev:native` - Start only the native app
- `bun run build` - Build all apps
- `bun run lint` - Lint all packages
- `bun run typecheck` - Type check all packages

## Authentication

Authentication is powered by Better Auth:

- Auth configuration is in `packages/auth/src/`
- Web app auth client is in `apps/web/src/lib/auth-client.ts`
- Native app auth client is in `apps/native/src/lib/auth-client.ts`

## Project Configuration

This project includes a `bts.jsonc` configuration file that stores your Better-T-Stack settings:

- Contains your selected stack configuration (database, ORM, backend, frontend, etc.)
- Used by the CLI to understand your project structure
- Safe to delete if not needed

## Key Points

- This is a Turborepo monorepo using bun workspaces
- Each app has its own `package.json` and dependencies
- Run commands from the root to execute across all workspaces
- Run workspace-specific commands with `bun run command-name`
- Turborepo handles build caching and parallel execution
- Git hooks are configured with Lefthook for pre-commit checks
</file>

<file path=".ruler/ruler.toml">
# Ruler Configuration File
# See https://okigu.com/ruler for documentation.

# Default agents to run when --agents is not specified

default_agents = []

# --- Global MCP Server Configuration ---

[mcp]

# Enable/disable MCP propagation globally (default: true)

enabled = true

# Global merge strategy: 'merge' or 'overwrite' (default: 'merge')

merge_strategy = "merge"

# --- MCP Server Definitions ---

[mcp_servers.context7]
command = "npx"
args = ["-y", "@upstash/context7-mcp"]

[mcp_servers.convex]
command = "npx"
args = ["-y", "convex@latest", "mcp", "start"]

[mcp_servers.shadcn]
command = "npx"
args = ["shadcn@latest", "mcp"]

[mcp_servers.better-auth]
url = "<https://mcp.chonkie.ai/better-auth/better-auth-builder/mcp>"

[mcp_servers.next-devtools]
command = "npx"
args = ["-y", "next-devtools-mcp@latest"]

# --- Global .gitignore Configuration ---

[gitignore]

# Enable/disable automatic .gitignore updates (default: true)

enabled = true
</file>

<file path="apps/native/.rnstorybook/stories/Button.stories.tsx">
import type { Meta, StoryObj } from "@storybook/react-native";

import { View } from "react-native";
import { fn } from "storybook/test";

import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <Story />
      </View>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: <https://storybook.js.org/docs/writing-docs/autodocs>
  tags: ["autodocs"],
  // Use `fn` to spy on the onPress arg, which will appear in the actions panel once invoked: <https://storybook.js.org/docs/essentials/actions#story-args>
  args: { onPress: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
</file>

<file path="apps/native/.rnstorybook/stories/Button.tsx">
import type { StyleProp, ViewStyle } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /**What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /**Button contents */
  label: string;
  /** Optional click handler */
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  style,
  onPress,
}: ButtonProps) => {
  const modeStyle = primary ? styles.primary : styles.secondary;
  const textModeStyle = primary ? styles.primaryText : styles.secondaryText;

  const sizeStyle = styles[size];
  const textSizeStyle = textSizeStyles[size];

  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.6}
      onPress={onPress}
    >
      <View
        style={[
          styles.button,
          modeStyle,
          sizeStyle,
          style,
          !!backgroundColor && { backgroundColor },
          { borderColor: "black" },
        ]}
      >
        <Text style={[textModeStyle, textSizeStyle]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 0,
    borderRadius: 48,
  },
  buttonText: {
    fontWeight: "700",
    lineHeight: 1,
  },
  primary: {
    backgroundColor: "#1ea7fd",
  },
  primaryText: {
    color: "white",
  },
  secondary: {
    backgroundColor: "transparent",
    borderColor: "rgba(0, 0, 0, 0.15)",
    borderWidth: 1,
  },
  secondaryText: {
    color: "#333",
  },
  small: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  smallText: {
    fontSize: 12,
  },
  medium: {
    paddingVertical: 11,
    paddingHorizontal: 20,
  },
  mediumText: {
    fontSize: 14,
  },
  large: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  largeText: {
    fontSize: 16,
  },
});

const textSizeStyles = {
  small: styles.smallText,
  medium: styles.mediumText,
  large: styles.largeText,
};
</file>

<file path="apps/native/.rnstorybook/stories/Header.stories.tsx">
import type { Meta, StoryObj } from "@storybook/react-native";
import { fn } from "storybook/test";

import { Header } from "./Header";

const meta = {
  title: "Example/Header",
  component: Header,
  tags: ["autodocs"],
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut: Story = {};
</file>

<file path="apps/native/.rnstorybook/stories/Header.tsx">
import { StyleSheet, Text, View } from "react-native";

import { Button } from "./Button";

export interface HeaderProps {
  user?: { name: string };
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <View>
    <View style={styles.wrapper}>
      <View style={styles.logoContainer}>
        <Text style={styles.h1}>Acme</Text>
      </View>
      <View style={styles.buttonContainer}>
        {user ? (
          <>
            <Text>Welcome, </Text>
            <Text style={styles.userName}>{user.name}!</Text>

            <Button
              label="Log out"
              onPress={onLogout}
              size="small"
              style={styles.button}
            />
          </>
        ) : (
          <>
            <Button
              label="Log in"
              onPress={onLogin}
              size="small"
              style={styles.button}
            />

            <Button
              label="Sign up"
              onPress={onCreateAccount}
              primary
              size="small"
              style={styles.button}
            />
          </>
        )}
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  h1: {
    fontWeight: "900",
    fontSize: 20,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 10,
    color: "black",
    alignSelf: "flex-start",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    fontWeight: "700",
  },
});
</file>

<file path="apps/native/.rnstorybook/stories/Page.stories.tsx">
import type { Meta } from "@storybook/react";

import { Page } from "./Page";

export default {
  title: "Example/Page",
  component: Page,
} as Meta<typeof Page>;

export const Default = {};
</file>

<file path="apps/native/.rnstorybook/stories/Page.tsx">
import { useState } from "react";

import { Linking, StyleSheet, Text, View } from "react-native";

import { Header } from "./Header";

export const Page = () => {
  const [user, setUser] = useState<{ name: string } | undefined>();

  return (
    <View>
      <Header
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
        onLogin={() => setUser({ name: "Jane Doe" })}
        onLogout={() => setUser(undefined)}
        user={user}
      />

      <View style={styles.section}>
        <Text role="heading" style={styles.h2}>
          Pages in Storybook
        </Text>
        <Text style={styles.p}>
          We recommend building UIs with a{" "}
          <Text
            onPress={() => {
              Linking.openURL("https://componentdriven.org");
            }}
            role="link"
            style={[styles.a, { fontWeight: "bold" }]}
          >
            <Text>component-driven</Text>
          </Text>{" "}
          process starting with atomic components and ending with pages.
        </Text>
        <Text style={styles.p}>
          Render pages with mock data. This makes it easy to build and review
          page states without needing to navigate to them in your app. Here are
          some handy patterns for managing page data in Storybook:
        </Text>
        <View>
          <Text>
            Use a higher-level connected component. Storybook helps you compose
            such data from the "args" of child component stories
          </Text>
          <Text>
            Assemble data in the page component from your services. You can mock
            these services out using Storybook.
          </Text>
        </View>
        <Text style={styles.p}>
          Get a guided tutorial on component-driven development at{" "}
          <Text
            onPress={() => {
              Linking.openURL("https://storybook.js.org/tutorials/");
            }}
            role="link"
            style={styles.a}
          >
            Storybook tutorials
          </Text>
          . Read more in the{" "}
          <Text
            onPress={() => {
              Linking.openURL("https://storybook.js.org/docs");
            }}
            role="link"
            style={styles.a}
          >
            docs
          </Text>
          .
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize: 14,
    lineHeight: 24,
    paddingVertical: 48,
    paddingHorizontal: 20,
    marginHorizontal: "auto",
    maxWidth: 600,
    color: "#333",
  },

  h2: {
    fontWeight: "900",
    fontSize: 32,
    lineHeight: 1,
    marginBottom: 4,
  },

  p: {
    marginVertical: 16,
    marginHorizontal: 0,
  },

  a: {
    color: "#1ea7fd",
  },

  ul: {
    paddingLeft: 30,
    marginVertical: 16,
  },

  li: {
    marginBottom: 8,
  },

  tip: {
    alignSelf: "flex-start",
    borderRadius: 16,
    backgroundColor: "#e7fdd8",
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginRight: 10,
    marginBottom: 4,
  },
  tipText: {
    fontSize: 11,
    lineHeight: 12,
    fontWeight: "700",
    color: "#66bf3c",
  },

  tipWrapper: {
    fontSize: 13,
    lineHeight: 20,
    marginTop: 40,
    marginBottom: 40,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  tipWrapperSvg: {
    height: 12,
    width: 12,
    marginRight: 4,
    marginTop: 3,
  },
});
</file>

<file path="apps/native/.rnstorybook/index.ts">
import AsyncStorage from "@react-native-async-storage/async-storage";
import { view } from "./storybook.requires";

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
});

export default StorybookUIRoot;
</file>

<file path="apps/native/.rnstorybook/main.ts">
import type { StorybookConfig } from "@storybook/react-native";

const main: StorybookConfig = {
  stories: [
    "./stories/**/*.stories.?(ts|tsx|js|jsx)",
    "../components/**/*.stories.?(ts|tsx|js|jsx)",
  ],
  addons: [
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
  ],
};

export default main;
</file>

<file path="apps/native/.rnstorybook/preview.tsx">
import type { Preview } from "@storybook/react-native";
import { HeroUINativeProvider } from "heroui-native";
import type { ReactNode } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppThemeProvider } from "../contexts/app-theme-context";

// Import global styles for UniWind/Tailwind
import "../global.css";

// CUC Brand Colors (hex values for Storybook background)
const CUC_COLORS = {
  light: {
    background: "#fffef8", // cream
    foreground: "#06273a", // navy
    accent: "#85b09a", // sage
  },
  dark: {
    background: "#030d14", // very dark navy
    foreground: "#fffef8", // cream
    accent: "#85b09a", // sage
  },
};

/**

- Storybook decorator that wraps stories with necessary providers
 */
const withProviders = (Story: () => ReactNode) => (
  <SafeAreaProvider>
    <HeroUINativeProvider
      config={{
        textProps: {
          allowFontScaling: false,
        },
      }}
    >
      <AppThemeProvider>
        <View className="flex-1 bg-background p-4">
          <Story />
        </View>
      </AppThemeProvider>
    </HeroUINativeProvider>

  </SafeAreaProvider>
);

const preview: Preview = {
  decorators: [withProviders],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "CUC Light",
      values: [
        {
          name: "CUC Light",
          value: CUC_COLORS.light.background,
        },
        {
          name: "CUC Dark",
          value: CUC_COLORS.dark.background,
        },
      ],
    },
  },
};

export default preview;
</file>

<file path="apps/native/.storybook-web/main.ts">
import type { StorybookConfig } from "@storybook/react-native-web-vite";

const config: StorybookConfig = {
  stories: [
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../.rnstorybook/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-native-web-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};

export default config;
</file>

<file path="apps/native/.storybook-web/preview.tsx">
import type { Preview } from "@storybook/react";
import type { ReactNode } from "react";
import { View } from "react-native";

// Import global styles for UniWind/Tailwind
import "../global.css";

// CUC Brand Colors (hex values for Storybook background)
const CUC_COLORS = {
  light: {
    background: "#fffef8", // cream
    foreground: "#06273a", // navy
    accent: "#85b09a", // sage
  },
  dark: {
    background: "#030d14", // very dark navy
    foreground: "#fffef8", // cream
    accent: "#85b09a", // sage
  },
};

/**

- Storybook decorator that wraps stories with necessary providers
 */
const withProviders = (Story: () => ReactNode) => (
  <View
    style={{
      flex: 1,
      padding: 16,
      backgroundColor: CUC_COLORS.light.background,
    }}
  >
    <Story />
  </View>
);

const preview: Preview = {
  decorators: [withProviders],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "CUC Light",
      values: [
        {
          name: "CUC Light",
          value: CUC_COLORS.light.background,
        },
        {
          name: "CUC Dark",
          value: CUC_COLORS.dark.background,
        },
      ],
    },
  },
};

export default preview;
</file>

<file path="apps/native/app/(auth)/email/(reset)/request-password-reset.tsx">
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { SystemBars } from "react-native-edge-to-edge";
import FormHeader, { StyledButton, StyledTextInput } from "@/components/form";
import { KeyboardAwareForm } from "@/components/keyboard";
import { authClient } from "@/lib/auth-client";

export default function RequestPasswordResetRoute() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Set dark status bar style for light background (stack-based approach)
  useEffect(() => {
    const entry = SystemBars.pushStackEntry({ style: "dark" });
    return () => SystemBars.popStackEntry(entry);
  }, []);

  const handleRequestReset = async () => {
    if (!email.trim()) {
      Alert.alert("Error", "Please enter your email");
      return;
    }

    setIsLoading(true);

    try {
      // Use OTP-based password reset flow
      // This sends a 6-digit code to the user's email
      await authClient.emailOtp.sendVerificationOtp({
        email: email.trim(),
        type: "forget-password",
      });

      setIsLoading(false);

      // SECURITY: Always navigate to verify screen to prevent email enumeration
      // We don't reveal whether the email exists in our system
      // The verify screen will show the same message regardless
      router.push({
        pathname: "/(auth)/email/(reset)/verify-reset-code",
        params: { email: email.trim() },
      });

      // Show info message after navigation
      setTimeout(() => {
        Alert.alert(
          "Check Your Email",
          "If an account exists with this email, you'll receive a 6-digit verification code shortly."
        );
      }, 100);
    } catch (_err) {
      setIsLoading(false);
      // SECURITY: Still navigate even on error to prevent email enumeration
      router.push({
        pathname: "/(auth)/email/(reset)/verify-reset-code",
        params: { email: email.trim() },
      });

      setTimeout(() => {
        Alert.alert(
          "Check Your Email",
          "If an account exists with this email, you'll receive a 6-digit verification code shortly."
        );
      }, 100);
    }
  };

  return (
    <KeyboardAwareForm>
      <FormHeader
        description="Enter your email address and we'll send you a verification code to reset your password"
        title="Reset Password"
      />

      <StyledTextInput
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        keyboardType="email-address"
        label="Email Address"
        onChangeText={setEmail}
        onSubmitEditing={handleRequestReset}
        placeholder="Enter your email"
        returnKeyType="go"
        textContentType="emailAddress"
        value={email}
      />

      <View style={{ marginTop: 8 }}>
        <StyledButton
          isLoading={isLoading}
          label="Send Verification Code"
          onPress={handleRequestReset}
        />
      </View>
    </KeyboardAwareForm>
  );
}
</file>

<file path="apps/native/app/(auth)/email/(reset)/reset-password.tsx">
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Alert, Pressable, Text, type TextInput, View } from "react-native";
import { SystemBars } from "react-native-edge-to-edge";
import FormHeader, { StyledButton, StyledTextInput } from "@/components/form";
import { KeyboardAwareForm } from "@/components/keyboard";
import { authClient } from "@/lib/auth-client";

/**

- Sanitize error messages for password reset
 */
function getSafeErrorMessage(errorMessage: string | undefined): string {
  const lowerMessage = (errorMessage || "").toLowerCase();

  if (
    lowerMessage.includes("token") ||
    lowerMessage.includes("expired") ||
    lowerMessage.includes("invalid") ||
    lowerMessage.includes("otp")
  ) {
    return "This reset code has expired or is invalid. Please request a new one.";
  }

  if (
    lowerMessage.includes("password") &&
    (lowerMessage.includes("weak") || lowerMessage.includes("short"))
  ) {
    return "Password does not meet requirements. Please use at least 6 characters.";
  }

  return "Unable to reset password. Please try again or request a new code.";
}

export default function ResetPasswordRoute() {
  const router = useRouter();
  // Support both token-based (deep link) and OTP-based (verification code) flows
  const { token, email, otp, error } = useLocalSearchParams<{
    token?: string;
    email?: string;
    otp?: string;
    error?: string;
  }>();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Ref for keyboard navigation: password → confirmPassword → submit
  const confirmPasswordRef = useRef<TextInput>(null);

  // Set dark status bar style for light background (stack-based approach)
  useEffect(() => {
    const entry = SystemBars.pushStackEntry({ style: "dark" });
    return () => SystemBars.popStackEntry(entry);
  }, []);

  // Determine which flow we're using
  const isOtpFlow = email && otp;
  const isTokenFlow = token;
  const hasValidParams = isOtpFlow || isTokenFlow;

  const handleResetPassword = async () => {
    if (!password) {
      Alert.alert("Error", "Please enter your new password");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords don't match");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);

    try {
      if (isOtpFlow) {
        // OTP-based password reset
        const { error: resetError } = await authClient.emailOtp.resetPassword({
          email: email!,
          otp: otp!,
          password,
        });

        setIsLoading(false);

        if (resetError) {
          Alert.alert("Error", getSafeErrorMessage(resetError.message));
          return;
        }

        Alert.alert(
          "Success",
          "Password reset successfully. Please sign in with your new password.",
          [
            {
              text: "OK",
              onPress: () => router.replace("/(auth)/email/signin"),
            },
          ]
        );
      } else if (isTokenFlow) {
        // Token-based password reset (from deep link)
        await authClient.resetPassword(
          {
            newPassword: password,
            token: token!,
          },
          {
            onError: (ctx) => {
              setIsLoading(false);
              Alert.alert("Error", getSafeErrorMessage(ctx.error.message));
            },
            onSuccess: () => {
              setIsLoading(false);
              Alert.alert(
                "Success",
                "Password reset successfully. Please sign in with your new password.",
                [
                  {
                    text: "OK",
                    onPress: () => router.replace("/(auth)/email/signin"),
                  },
                ]
              );
            },
          }
        );
      }
    } catch (_err) {
      setIsLoading(false);
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

  // Invalid state - no token or email+otp
  if (error === "INVALID_TOKEN" || !hasValidParams) {
    return (
      <View
        className="bg-background"
        style={{
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 24,
        }}
      >
        <View style={{ alignItems: "center", marginBottom: 32 }}>
          <Text
            className="text-center text-foreground"
            style={{
              fontSize: 28,
              fontWeight: "300",
              fontFamily: "serif",
              marginBottom: 12,
            }}
          >
            Invalid Link
          </Text>
          <Text
            className="text-center text-muted"
            style={{
              fontSize: 15,
              lineHeight: 22,
            }}
          >
            This reset link has expired or is invalid. Please request a new one.
          </Text>
        </View>
        <Link asChild href="/(auth)/email/signin">
          <Pressable
            className="bg-primary"
            style={{
              borderRadius: 12,
              paddingVertical: 16,
              alignItems: "center",
            }}
          >
            <Text
              className="text-primary-foreground"
              style={{
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              Back to Sign In
            </Text>
          </Pressable>
        </Link>
      </View>
    );
  }

  return (
    <KeyboardAwareForm>
      <FormHeader
        description="Enter your new password to complete the reset"
        title="New Password"
      />

      <StyledTextInput
        autoComplete="new-password"
        blurOnSubmit={false}
        label="New Password"
        onChangeText={setPassword}
        onSubmitEditing={() => confirmPasswordRef.current?.focus()}
        placeholder="Enter your new password"
        returnKeyType="next"
        secureTextEntry
        textContentType="newPassword"
        value={password}
      />

      <StyledTextInput
        autoComplete="new-password"
        label="Confirm Password"
        onChangeText={setConfirmPassword}
        onSubmitEditing={handleResetPassword}
        placeholder="Confirm your new password"
        ref={confirmPasswordRef}
        returnKeyType="go"
        secureTextEntry
        textContentType="newPassword"
        value={confirmPassword}
      />

      <View style={{ marginTop: 8 }}>
        <StyledButton
          isLoading={isLoading}
          label="Reset Password"
          onPress={handleResetPassword}
        />
      </View>
    </KeyboardAwareForm>
  );
}
</file>

<file path="apps/native/app/(auth)/email/(reset)/verify-reset-code.tsx">
import { useLocalSearchParams, useRouter } from "expo-router";
import { InputOTP, useThemeColor } from "heroui-native";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Alert, Pressable, Text, View, type ViewStyle } from "react-native";
import { SystemBars } from "react-native-edge-to-edge";
import FormHeader, { StyledButton } from "@/components/form";
import { KeyboardAwareForm } from "@/components/keyboard";
import { authClient } from "@/lib/auth-client";

export default function VerifyResetCodeRoute() {
  const router = useRouter();
  const { email, otp: prefilledOtp } = useLocalSearchParams<{
    email: string;
    otp?: string;
  }>();

  const [otp, setOtp] = useState(prefilledOtp || "");
  const [isResending, setIsResending] = useState(false);

  // Theme colors
  const foreground = useThemeColor("foreground");
  const surface = useThemeColor("surface");

  // OTP slot style using theme colors
  const otpSlotStyle: ViewStyle = useMemo(
    () => ({
      width: 48,
      height: 56,
      borderWidth: 2,
      borderColor: foreground,
      borderRadius: 12,
      backgroundColor: surface,
      alignItems: "center",
      justifyContent: "center",
    }),
    [foreground, surface]
  );

  // Auto-navigate if OTP was pre-filled from deep link
  const hasAutoNavigated = useRef(false);

  // Set dark status bar style for light background (stack-based approach)
  useEffect(() => {
    const entry = SystemBars.pushStackEntry({ style: "dark" });
    return () => SystemBars.popStackEntry(entry);
  }, []);

  const handleVerifyCode = useCallback(
    (codeToVerify?: string) => {
      const code = codeToVerify || otp;

      if (!code || code.length !== 6) {
        Alert.alert("Error", "Please enter the 6-digit code from your email");
        return;
      }

      if (!email) {
        Alert.alert("Error", "Email is required. Please try again.");
        router.back();
        return;
      }

      // Navigate to reset password screen with email and OTP
      // The OTP validation happens when the user submits the new password
      // This is the correct flow per Better Auth documentation
      router.replace({
        pathname: "/(auth)/email/(reset)/reset-password",
        params: { email, otp: code },
      });
    },
    [otp, email, router]
  );

  useEffect(() => {
    if (prefilledOtp && !hasAutoNavigated.current) {
      hasAutoNavigated.current = true;
      handleVerifyCode(prefilledOtp);
    }
  }, [prefilledOtp, handleVerifyCode]);

  const handleResendCode = async () => {
    if (!email) {
      Alert.alert("Error", "Email is required");
      return;
    }

    setIsResending(true);

    try {
      const { error } = await authClient.emailOtp.sendVerificationOtp({
        email,
        type: "forget-password",
      });

      setIsResending(false);

      if (error) {
        // SECURITY: Don't reveal if email exists
        Alert.alert(
          "Code Sent",
          "If an account exists with this email, you'll receive a new code shortly."
        );
      } else {
        Alert.alert(
          "Code Sent",
          "A new verification code has been sent to your email."
        );
      }
    } catch (_err) {
      setIsResending(false);
      Alert.alert(
        "Code Sent",
        "If an account exists with this email, you'll receive a new code shortly."
      );
    }
  };

  // No email provided - show error state
  if (!email) {
    return (
      <View
        className="bg-background"
        style={{
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 24,
        }}
      >
        <View style={{ alignItems: "center", marginBottom: 32 }}>
          <Text
            className="text-center text-foreground"
            style={{
              fontSize: 28,
              fontWeight: "300",
              fontFamily: "serif",
              marginBottom: 12,
            }}
          >
            Something Went Wrong
          </Text>
          <Text
            className="text-center text-muted"
            style={{
              fontSize: 15,
              lineHeight: 22,
            }}
          >
            We couldn't find your email address. Please try requesting a new
            password reset.
          </Text>
        </View>
        <Pressable
          className="bg-primary"
          onPress={() =>
            router.replace("/(auth)/email/(reset)/request-password-reset")
          }
          style={{
            borderRadius: 12,
            paddingVertical: 16,
            alignItems: "center",
          }}
        >
          <Text
            className="text-primary-foreground"
            style={{
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Request New Code
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <KeyboardAwareForm>
      <FormHeader
        description={`Enter the 6-digit code we sent to ${email}`}
        title="Verify Code"
      />

      <View style={{ alignItems: "center", marginBottom: 8 }}>
        <Text
          className="text-foreground"
          style={{
            fontSize: 14,
            fontWeight: "500",
            marginBottom: 12,
          }}
        >
          Verification Code
        </Text>
        <InputOTP
          inputMode="numeric"
          maxLength={6}
          onChange={setOtp}
          onComplete={handleVerifyCode}
          textInputProps={{
            autoComplete: "one-time-code",
            textContentType: "oneTimeCode",
          }}
          value={otp}
        >
          <InputOTP.Group style={{ flexDirection: "row", gap: 8 }}>
            {[0, 1, 2].map((index) => (
              <InputOTP.Slot index={index} key={index} style={otpSlotStyle} />
            ))}
          </InputOTP.Group>
          <InputOTP.Separator>
            <Text
              className="text-foreground"
              style={{
                fontSize: 24,
                paddingHorizontal: 8,
              }}
            >
              -
            </Text>
          </InputOTP.Separator>
          <InputOTP.Group style={{ flexDirection: "row", gap: 8 }}>
            {[3, 4, 5].map((index) => (
              <InputOTP.Slot index={index} key={index} style={otpSlotStyle} />
            ))}
          </InputOTP.Group>
        </InputOTP>
      </View>

      <View style={{ marginTop: 8, gap: 12 }}>
        <StyledButton label="Continue" onPress={() => handleVerifyCode()} />

        <StyledButton
          isLoading={isResending}
          label="Resend Code"
          onPress={handleResendCode}
          variant="secondary"
        />
      </View>

      <View style={{ marginTop: 16, alignItems: "center" }}>
        <Text className="text-muted" style={{ fontSize: 14 }}>
          Code expires in 5 minutes
        </Text>
      </View>
    </KeyboardAwareForm>
  );
}
</file>

<file path="apps/native/app/(auth)/email/_layout.tsx">
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { Link, Stack } from "expo-router";
import { useThemeColor } from "heroui-native";
import { Pressable } from "react-native";

export default function EmailLayout() {
  const background = useThemeColor("background");
  const foreground = useThemeColor("foreground");

  return (
    <Stack
      screenOptions={{
        gestureEnabled: false,
        headerTransparent: true,
        headerStyle: {
          backgroundColor: background,
        },
        headerTintColor: foreground,
        contentStyle: {
          backgroundColor: background,
        },
      }}
    >
      <Stack.Screen
        name="signin"
        options={{
          headerLeft: () => <CloseButton />,
          title: "",
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerLeft: () => <CloseButton />,
          title: "",
          headerBackTitle: "Sign In",
        }}
      />
      <Stack.Screen
        name="(reset)/request-password-reset"
        options={{
          title: "",
          headerBackTitle: "Sign In",
        }}
      />
      <Stack.Screen
        name="(reset)/verify-reset-code"
        options={{
          title: "",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="(reset)/reset-password"
        options={{
          title: "",
        }}
      />
    </Stack>
  );
}

const CloseButton = () => {
  const foreground = useThemeColor("foreground");

  return (
    <Link asChild href="..">
      <Pressable
        className="bg-foreground/10"
        style={{
          width: 36,
          height: 36,
          borderRadius: 18,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons color={foreground} name="close" size={20} />
      </Pressable>
    </Link>
  );
};
</file>

<file path="apps/native/app/(auth)/email/signin.tsx">
import { Link } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Alert, Pressable, Text, type TextInput, View } from "react-native";
import { SystemBars } from "react-native-edge-to-edge";
import FormHeader, { StyledButton, StyledTextInput } from "@/components/form";
import { KeyboardAwareForm } from "@/components/keyboard";
import { authClient } from "@/lib/auth-client";

/**

- Sanitize error messages to prevent information disclosure
- This prevents email enumeration attacks by using generic messages
 */
function getSafeErrorMessage(errorMessage: string | undefined): string {
  const lowerMessage = (errorMessage || "").toLowerCase();

  // Map specific revealing errors to generic messages
  // Don't reveal whether email exists or password is wrong
  if (
    lowerMessage.includes("user not found") ||
    lowerMessage.includes("no user") ||
    lowerMessage.includes("invalid email") ||
    lowerMessage.includes("invalid password") ||
    lowerMessage.includes("incorrect password") ||
    lowerMessage.includes("wrong password") ||
    lowerMessage.includes("invalid credentials")
  ) {
    return "Invalid email or password. Please try again.";
  }

  if (
    lowerMessage.includes("too many") ||
    lowerMessage.includes("rate limit")
  ) {
    return "Too many attempts. Please try again later.";
  }

  if (
    lowerMessage.includes("account locked") ||
    lowerMessage.includes("account disabled")
  ) {
    return "Unable to sign in. Please contact support.";
  }

  // Generic fallback for any other errors
  return "Unable to sign in. Please check your credentials and try again.";
}

export default function SignInRoute() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Ref for focusing password field on Enter
  const passwordRef = useRef<TextInput>(null);

  // Set dark status bar style for light background (stack-based approach)
  useEffect(() => {
    const entry = SystemBars.pushStackEntry({ style: "dark" });
    return () => SystemBars.popStackEntry(entry);
  }, []);

  const handleSignIn = async () => {
    if (!email.trim()) {
      Alert.alert("Error", "Please enter your email");
      return;
    }
    if (!password) {
      Alert.alert("Error", "Please enter your password");
      return;
    }

    await authClient.signIn.email(
      {
        email: email.trim(),
        password,
        rememberMe: true,
      },
      {
        onRequest: () => {
          setIsLoading(true);
        },
        onError: (ctx) => {
          setIsLoading(false);
          // Use sanitized error message to prevent email enumeration
          Alert.alert("Error", getSafeErrorMessage(ctx.error.message));
        },
        onSuccess: () => {
          setIsLoading(false);
          // Navigation handled by (auth)/_layout.tsx auth state listener
        },
      }
    );
  };

  return (
    <KeyboardAwareForm>
      <FormHeader
        description="Sign in to access your membership and exclusive club features"
        title="Welcome Back"
      />

      <StyledTextInput
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        blurOnSubmit={false}
        keyboardType="email-address"
        label="Email Address"
        onChangeText={setEmail}
        onSubmitEditing={() => passwordRef.current?.focus()}
        placeholder="Enter your email"
        returnKeyType="next"
        textContentType="emailAddress"
        value={email}
      />

      <StyledTextInput
        autoComplete="password"
        label="Password"
        onChangeText={setPassword}
        onSubmitEditing={handleSignIn}
        placeholder="Enter your password"
        ref={passwordRef}
        returnKeyType="go"
        secureTextEntry
        textContentType="password"
        value={password}
      />

      <View style={{ marginTop: 8 }}>
        <StyledButton
          isLoading={isLoading}
          label="Sign In"
          onPress={handleSignIn}
        />
      </View>

      <Link asChild href="/(auth)/email/(reset)/request-password-reset">
        <Pressable style={{ alignSelf: "center", paddingVertical: 8 }}>
          <Text
            className="text-accent"
            style={{
              fontSize: 14,
              fontWeight: "500",
            }}
          >
            Forgot Password?
          </Text>
        </Pressable>
      </Link>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 24,
          gap: 4,
        }}
      >
        <Text className="text-muted" style={{ fontSize: 14 }}>
          Don't have an account?
        </Text>
        <Link asChild href="/(auth)/email/signup" replace>
          <Pressable>
            <Text
              className="text-accent"
              style={{
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              Sign Up
            </Text>
          </Pressable>
        </Link>
      </View>
    </KeyboardAwareForm>
  );
}
</file>

<file path="apps/native/app/(auth)/email/signup.tsx">
import { Link } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Alert, Pressable, Text, type TextInput, View } from "react-native";
import { SystemBars } from "react-native-edge-to-edge";
import FormHeader, { StyledButton, StyledTextInput } from "@/components/form";
import { KeyboardAwareForm } from "@/components/keyboard";
import { authClient } from "@/lib/auth-client";

/**

- Sanitize error messages to prevent information disclosure
- This prevents email enumeration attacks by using generic messages
 */
function getSafeErrorMessage(errorMessage: string | undefined): string {
  const lowerMessage = (errorMessage || "").toLowerCase();

  // Map specific revealing errors to generic messages
  if (
    lowerMessage.includes("user already exists") ||
    lowerMessage.includes("email already") ||
    lowerMessage.includes("already registered")
  ) {
    return "Unable to create account. Please check your details or try signing in.";
  }

  if (
    lowerMessage.includes("invalid email") ||
    lowerMessage.includes("email format")
  ) {
    return "Please enter a valid email address.";
  }

  if (
    lowerMessage.includes("password") &&
    (lowerMessage.includes("weak") || lowerMessage.includes("short"))
  ) {
    return "Password does not meet requirements. Please use at least 6 characters.";
  }

  // Generic fallback for any other errors
  return "Unable to create account. Please try again.";
}

export default function SignUpRoute() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Refs for keyboard navigation: name → email → password → confirmPassword → submit
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  // Set dark status bar style for light background (stack-based approach)
  useEffect(() => {
    const entry = SystemBars.pushStackEntry({ style: "dark" });
    return () => SystemBars.popStackEntry(entry);
  }, []);

  const handleSignUp = async () => {
    if (!name.trim()) {
      Alert.alert("Error", "Please enter your name");
      return;
    }

    if (!email.trim()) {
      Alert.alert("Error", "Please enter your email");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords don't match");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return;
    }

    await authClient.signUp.email(
      {
        name: name.trim(),
        email: email.trim(),
        password,
      },
      {
        onRequest: () => {
          setIsLoading(true);
        },
        onError: (ctx) => {
          setIsLoading(false);
          // Use sanitized error message to prevent email enumeration
          Alert.alert("Error", getSafeErrorMessage(ctx.error.message));
        },
        onSuccess: () => {
          setIsLoading(false);
          // Navigation handled by (auth)/_layout.tsx auth state listener
        },
      }
    );
  };

  return (
    <KeyboardAwareForm>
      <FormHeader
        description="Join City University Club and enjoy exclusive member benefits"
        title="Create Account"
      />

      <StyledTextInput
        autoCapitalize="words"
        autoComplete="name"
        blurOnSubmit={false}
        label="Full Name"
        onChangeText={setName}
        onSubmitEditing={() => emailRef.current?.focus()}
        placeholder="Enter your full name"
        returnKeyType="next"
        textContentType="name"
        value={name}
      />

      <StyledTextInput
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        blurOnSubmit={false}
        keyboardType="email-address"
        label="Email Address"
        onChangeText={setEmail}
        onSubmitEditing={() => passwordRef.current?.focus()}
        placeholder="Enter your email"
        ref={emailRef}
        returnKeyType="next"
        textContentType="emailAddress"
        value={email}
      />

      <StyledTextInput
        autoComplete="new-password"
        blurOnSubmit={false}
        label="Password"
        onChangeText={setPassword}
        onSubmitEditing={() => confirmPasswordRef.current?.focus()}
        placeholder="Create a password"
        ref={passwordRef}
        returnKeyType="next"
        secureTextEntry
        textContentType="newPassword"
        value={password}
      />

      <StyledTextInput
        autoComplete="new-password"
        label="Confirm Password"
        onChangeText={setConfirmPassword}
        onSubmitEditing={handleSignUp}
        placeholder="Confirm your password"
        ref={confirmPasswordRef}
        returnKeyType="go"
        secureTextEntry
        textContentType="newPassword"
        value={confirmPassword}
      />

      <View style={{ marginTop: 8 }}>
        <StyledButton
          isLoading={isLoading}
          label="Create Account"
          onPress={handleSignUp}
        />
      </View>

      <Text
        className="text-center text-muted"
        style={{
          fontSize: 13,
          lineHeight: 20,
          paddingHorizontal: 20,
        }}
      >
        By signing up, you agree to our{" "}
        <Link asChild href="https://cityuniversityclub.co.uk/terms">
          <Text
            className="text-foreground"
            style={{ textDecorationLine: "underline" }}
          >
            Terms of Service
          </Text>
        </Link>{" "}
        and{" "}
        <Link asChild href="https://cityuniversityclub.co.uk/privacy">
          <Text
            className="text-foreground"
            style={{ textDecorationLine: "underline" }}
          >
            Privacy Policy
          </Text>
        </Link>
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 8,
          gap: 4,
        }}
      >
        <Text className="text-muted" style={{ fontSize: 14 }}>
          Already have an account?
        </Text>
        <Link asChild href="/(auth)/email/signin" replace>
          <Pressable>
            <Text
              className="text-accent"
              style={{
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              Sign In
            </Text>
          </Pressable>
        </Link>
      </View>
    </KeyboardAwareForm>
  );
}
</file>

<file path="apps/native/app/(auth)/_layout.tsx">
import { useConvexAuth } from "convex/react";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { useNavigationOptions } from "@/hooks/useNavigationOptions";

export default function AuthLayout() {
  const { root } = useNavigationOptions();
  const router = useRouter();
  const { isAuthenticated } = useConvexAuth();

  // Single source of truth: Navigate to tabs when user becomes authenticated
  // This handles all auth methods: email signin/signup, and social OAuth
  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/(tabs)");
    }
  }, [isAuthenticated, router]);

  return (
    <Stack>
      <Stack.Screen
        name="landing"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="email"
        options={{
          headerShown: false,
          presentation: "modal",
          ...root,
        }}
      />
    </Stack>
  );
}
</file>

<file path="apps/native/app/(auth)/landing.tsx">
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useThemeColor } from "heroui-native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Pressable,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LastUsedIndicator } from "@/components/LastUsedIndicator";
import { authClient } from "@/lib/auth-client";
import { useAppleAuth, useGitHubAuth, useGoogleAuth } from "@/lib/oauth";

// Local assets for instant loading
const HERO_IMAGE = require("@/assets/images/hero-background.jpg");
const CUC_LOGO = require("@/assets/images/city_uni_club_gold.png");

export default function Landing() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { signIn: signInWithGoogle, isLoading: isGoogleLoading } =
    useGoogleAuth();
  const { signIn: signInWithApple, isLoading: isAppleLoading } = useAppleAuth();
  const { signIn: signInWithGitHub, isLoading: isGitHubLoading } =
    useGitHubAuth();
  const isLoading = isGoogleLoading || isAppleLoading || isGitHubLoading;

  // Theme colors for Ionicons (which don't support className)
  const foreground = useThemeColor("foreground");
  const primaryForeground = "#fffef8";

  // Read last login method after mount to ensure SecureStore/cookies are available
  const [lastMethod, setLastMethod] = useState<string | null>(null);
  useEffect(() => {
    const method = authClient.getLastUsedLoginMethod();
    setLastMethod(method);
  }, []);

  return (
    <ImageBackground resizeMode="cover" source={HERO_IMAGE} style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(6, 39, 58, 0.75)",
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        }}
      >
        {/*Close Button - dismisses auth modal and returns to tabs*/}
        <Pressable
          onPress={() => router.dismiss()}
          style={{
            position: "absolute",
            top: insets.top + 16,
            left: 16,
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <Ionicons color={primaryForeground} name="close" size={24} />
        </Pressable>

        {/* Header with Logo */}
        <View className="items-center pt-8">
          <View className="mb-4 h-24 w-24 justify-center overflow-hidden rounded-full bg-transparentitems-center">
            <Image
              resizeMode="contain"
              source={CUC_LOGO}
              style={{ width: 80, height: 80 }}
            />
          </View>
          <Text
            className="text-primary-foreground"
            style={{
              fontSize: 32,
              fontWeight: "300",
              fontFamily: "serif",
            }}
          >
            City University Club
          </Text>
          <Text
            className="text-accent"
            style={{
              fontSize: 16,
              marginTop: 8,
            }}
          >
            Your exclusive members club
          </Text>
        </View>

        {/* Spacer */}
        <View className="flex-1" />

        {/* Sign In Options */}
        <View className="gap-4 px-6 pb-8">
          <Text
            className="text-center text-primary-foreground"
            style={{
              fontSize: 18,
              marginBottom: 8,
            }}
          >
            Sign in to continue
          </Text>

          {/* Social Login Buttons */}
          <View className="flex-row gap-3">
            {/* GitHub */}
            <View style={{ flex: 1, position: "relative" }}>
              <Pressable
                className="bg-surface"
                disabled={isLoading}
                onPress={signInWithGitHub}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  paddingVertical: 14,
                  borderRadius: 12,
                  opacity: isLoading ? 0.7 : 1,
                }}
              >
                {isGitHubLoading ? (
                  <ActivityIndicator color={foreground} size="small" />
                ) : (
                  <>
                    <Ionicons color={foreground} name="logo-github" size={20} />
                    <Text
                      className="text-foreground"
                      style={{
                        fontSize: 16,
                        fontWeight: "500",
                      }}
                    >
                      GitHub
                    </Text>
                  </>
                )}
              </Pressable>
              {lastMethod === "github" && (
                <View style={{ position: "absolute", top: -10, right: -4 }}>
                  <LastUsedIndicator />
                </View>
              )}
            </View>

            {/* Google */}
            <View style={{ flex: 1, position: "relative" }}>
              <Pressable
                className="bg-surface"
                disabled={isLoading}
                onPress={signInWithGoogle}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  paddingVertical: 14,
                  borderRadius: 12,
                  opacity: isLoading ? 0.7 : 1,
                }}
              >
                {isGoogleLoading ? (
                  <ActivityIndicator color={foreground} size="small" />
                ) : (
                  <>
                    <Ionicons color={foreground} name="logo-google" size={20} />
                    <Text
                      className="text-foreground"
                      style={{
                        fontSize: 16,
                        fontWeight: "500",
                      }}
                    >
                      Google
                    </Text>
                  </>
                )}
              </Pressable>
              {lastMethod === "google" && (
                <View style={{ position: "absolute", top: -10, right: -4 }}>
                  <LastUsedIndicator />
                </View>
              )}
            </View>

            {/* Apple */}
            <View style={{ flex: 1, position: "relative" }}>
              <Pressable
                className="bg-surface"
                disabled={isLoading}
                onPress={signInWithApple}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  paddingVertical: 14,
                  borderRadius: 12,
                  opacity: isLoading ? 0.7 : 1,
                }}
              >
                {isAppleLoading ? (
                  <ActivityIndicator color={foreground} size="small" />
                ) : (
                  <>
                    <Ionicons color={foreground} name="logo-apple" size={20} />
                    <Text
                      className="text-foreground"
                      style={{
                        fontSize: 16,
                        fontWeight: "500",
                      }}
                    >
                      Apple
                    </Text>
                  </>
                )}
              </Pressable>
              {lastMethod === "apple" && (
                <View style={{ position: "absolute", top: -10, right: -4 }}>
                  <LastUsedIndicator />
                </View>
              )}
            </View>
          </View>

          {/* Email Button */}
          <View style={{ position: "relative" }}>
            <Link asChild href="/(auth)/email/signin">
              <Pressable
                className="border-accent bg-primary"
                style={{
                  paddingVertical: 16,
                  borderRadius: 12,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                }}
              >
                <Text
                  className="text-primary-foreground"
                  style={{
                    fontSize: 16,
                    fontWeight: "500",
                  }}
                >
                  Continue with Email
                </Text>
              </Pressable>
            </Link>
            {lastMethod === "email" && (
              <View
                style={{
                  position: "absolute",
                  top: -10,
                  right: -4,
                }}
              >
                <LastUsedIndicator />
              </View>
            )}
          </View>

          {/* Sign Up Link */}
          <View className="mt-2 flex-row items-center justify-center gap-1">
            <Text className="text-accent" style={{ fontSize: 14 }}>
              Don't have an account?
            </Text>
            <Link asChild href="/(auth)/email/signup">
              <Pressable>
                <Text
                  className="text-primary-foreground"
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                    textDecorationLine: "underline",
                  }}
                >
                  Sign Up
                </Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
</file>

<file path="apps/native/app/(tabs)/events/_layout.tsx">
import { Stack } from "expo-router";

export default function EventsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "fade",
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="[id]"
        options={{
          animation: "slide_from_right",
        }}
      />
    </Stack>
  );
}
</file>

<file path="apps/native/app/(tabs)/events/[id].tsx">
import { api } from "@convoexpo-and-nextjs-web-bun-better-auth/backend/convex/_generated/api";
import { Ionicons } from "@expo/vector-icons";
import { useConvexAuth, useMutation, useQuery } from "convex/react";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useThemeColor } from "heroui-native";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import Animated, {
  Extrapolation,
  FadeIn,
  FadeInDown,
  FadeInUp,
  interpolate,
  SlideInRight,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  parseEventDateTime,
  useAddToCalendar,
} from "../../../lib/useAddToCalendar";
import { EVENTS } from "./index";

// Blurhash for event images
const EVENT_BLURHASH = "LKJRyV~qIU-;_3M{ofRj9Fxut7WB";

export default function EventDetail() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const primaryForeground = "#fffef8";

  // Auth state
  const { isAuthenticated } = useConvexAuth();
  const user = useQuery(api.auth.getCurrentUser, isAuthenticated ? {} : "skip");

  const event = EVENTS.find((e) => e.id === id);

  // RSVP state - reactive query (no useEffect!)
  const existingRsvp = useQuery(
    api.rsvps.getUserRsvpForEvent,
    isAuthenticated && event ? { eventId: event.id } : "skip"
  );
  const hasRsvp = existingRsvp != null;

  // Mutations
  const createRsvp = useMutation(api.rsvps.createRsvp);
  const cancelRsvpMutation = useMutation(api.rsvps.cancelRsvp);

  // Calendar hook
  const { addToCalendar, isLoading: isCalendarLoading } = useAddToCalendar();

  // RSVP form state
  const [formData, setFormData] = useState({
    guests: "1",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);

  // Animation values
  const scrollY = useSharedValue(0);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollY.value,
      [-100, 0],
      [1.5, 1],
      Extrapolation.CLAMP
    );
    return {
      transform: [{ scale }],
    };
  });

  const handleSubmit = async () => {
    if (!(isAuthenticated && user && event)) {
      return;
    }

    setIsSubmitting(true);
    try {
      const guestCount =
        formData.guests === "5+" ? 5 : Number.parseInt(formData.guests, 10);

      await createRsvp({
        eventId: event.id,
        guests: guestCount,
        notes: formData.notes || undefined,
      });

      Alert.alert(
        "RSVP Confirmed!",
        `Thank you ${user.name}! We've received your RSVP for ${event.title}. A confirmation email has been sent to ${user.email}.`,
        [{ text: "OK" }]
      );
    } catch (error) {
      Alert.alert(
        "Error",
        error instanceof Error
          ? error.message
          : "Failed to create RSVP. Please try again.",
        [{ text: "OK" }]
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancelRsvp = () => {
    if (!event) {
      return;
    }

    Alert.alert(
      "Cancel RSVP",
      `Are you sure you want to cancel your RSVP for ${event.title}?`,
      [
        { text: "Keep RSVP", style: "cancel" },
        {
          text: "Cancel RSVP",
          style: "destructive",
          onPress: async () => {
            setIsCancelling(true);
            try {
              await cancelRsvpMutation({ eventId: event.id });
              Alert.alert(
                "RSVP Cancelled",
                "Your RSVP has been cancelled successfully.",
                [{ text: "OK" }]
              );
            } catch (error) {
              Alert.alert(
                "Error",
                error instanceof Error
                  ? error.message
                  : "Failed to cancel RSVP. Please try again.",
                [{ text: "OK" }]
              );
            } finally {
              setIsCancelling(false);
            }
          },
        },
      ]
    );
  };

  const handleAddToCalendar = async () => {
    if (!event) {
      return;
    }

    try {
      const { startDate, endDate } = parseEventDateTime(
        event.dateRange,
        event.time
      );

      const success = await addToCalendar({
        title: `${event.title} - City University Club`,
        startDate,
        endDate,
        location: `${event.location}, City University Club`,
        notes: event.fullDescription,
        alarmMinutesBefore: 60, // 1 hour reminder
      });

      if (success) {
        Alert.alert(
          "Added to Calendar",
          "The event has been added to your calendar.",
          [{ text: "OK" }]
        );
      }
    } catch (error) {
      console.error("Error adding to calendar:", error);
    }
  };

  const handleSignIn = () => {
    router.push("/(auth)/landing");
  };

  if (!event) {
    return (
      <View
        className="flex-1 bg-background"
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text className="text-foreground" style={{ fontSize: 18 }}>
          Event not found
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-background">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          onScroll={(e) => {
            scrollY.value = e.nativeEvent.contentOffset.y;
          }}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
        >
          {/*Hero Image*/}
          <Animated.View style={headerAnimatedStyle}>
            <Animated.View entering={FadeIn.duration(400)}>
              <Image
                contentFit="cover"
                placeholder={{ blurhash: EVENT_BLURHASH }}
                source={event.image}
                style={{ width: "100%", height: 280 }}
                transition={300}
              />
            </Animated.View>
          </Animated.View>

          {/* Back Button - Fixed Position */}
          <Pressable
            onPress={() => router.back()}
            style={{
              position: "absolute",
              top: insets.top + 12,
              left: 16,
              width: 44,
              height: 44,
              borderRadius: 22,
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
            }}
          >
            <Ionicons color={primaryForeground} name="arrow-back" size={24} />
          </Pressable>

          {/* Content Container */}
          <Animated.View
            className="bg-background"
            entering={FadeInUp.delay(200).springify()}
            style={{
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              marginTop: -24,
              paddingTop: 24,
              paddingHorizontal: 20,
              paddingBottom: 32,
            }}
          >
            {/* Event Title & Badge */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginBottom: 16,
              }}
            >
              <View style={{ flex: 1 }}>
                <Text
                  className="text-foreground"
                  style={{
                    fontSize: 28,
                    fontWeight: "300",
                    fontFamily: "serif",
                    lineHeight: 34,
                  }}
                >
                  {event.title}
                </Text>
              </View>
              {event.type === "special" && (
                <Animated.View
                  className="bg-accent"
                  entering={SlideInRight.delay(400)}
                  style={{
                    paddingHorizontal: 12,
                    paddingVertical: 6,
                    borderRadius: 16,
                    marginLeft: 12,
                  }}
                >
                  <Text
                    className="text-foreground"
                    style={{
                      fontSize: 12,
                      fontWeight: "600",
                    }}
                  >
                    Special
                  </Text>
                </Animated.View>
              )}
            </View>

            {/* Event Info Grid */}
            <Animated.View
              className="bg-surface"
              entering={FadeInDown.delay(300).springify()}
              style={{
                borderRadius: 16,
                padding: 16,
                marginBottom: 20,
              }}
            >
              <InfoRow
                icon="calendar-outline"
                label="Date"
                value={event.dateRange}
              />
              <InfoRow icon="time-outline" label="Time" value={event.time} />
              <InfoRow
                icon="location-outline"
                label="Location"
                value={event.location}
              />
              <InfoRow
                icon="pricetag-outline"
                isLast
                label="Price"
                value={`£${event.price} per person`}
              />
            </Animated.View>

            {/* Description */}
            <Animated.View entering={FadeInDown.delay(400).springify()}>
              <Text
                className="text-foreground"
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  marginBottom: 12,
                }}
              >
                About This Event
              </Text>
              <Text
                className="text-muted"
                style={{
                  fontSize: 15,
                  lineHeight: 24,
                  marginBottom: 24,
                }}
              >
                {event.fullDescription}
              </Text>
            </Animated.View>

            {/* RSVP Section */}
            <Animated.View
              className="bg-primary"
              entering={FadeInDown.delay(500).springify()}
              style={{
                borderRadius: 20,
                padding: 20,
              }}
            >
              {isAuthenticated ? (
                hasRsvp ? (
                  // User has RSVP'd - show confirmation + actions
                  <RsvpConfirmation
                    event={event}
                    existingRsvp={existingRsvp}
                    isCalendarLoading={isCalendarLoading}
                    isCancelling={isCancelling}
                    onAddToCalendar={handleAddToCalendar}
                    onCancelRsvp={handleCancelRsvp}
                  />
                ) : (
                  // User hasn't RSVP'd - show form
                  <RsvpForm
                    event={event}
                    formData={formData}
                    isSubmitting={isSubmitting}
                    onSubmit={handleSubmit}
                    setFormData={setFormData}
                    user={user}
                  />
                )
              ) : (
                // Not authenticated - show sign in prompt
                <SignInPrompt onSignIn={handleSignIn} />
              )}
            </Animated.View>
          </Animated.View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

// RSVP Confirmation component - shown when user has RSVP'd
function RsvpConfirmation({
  event,
  existingRsvp,
  isCancelling,
  isCalendarLoading,
  onCancelRsvp,
  onAddToCalendar,
}: {
  event: [typeof EVENTS](0);
  existingRsvp: { guests: number; notes?: string; createdAt: number };
  isCancelling: boolean;
  isCalendarLoading: boolean;
  onCancelRsvp: () => void;
  onAddToCalendar: () => void;
}) {
  const foreground = useThemeColor("foreground");
  const totalPrice = Number.parseInt(event.price, 10) * existingRsvp.guests;

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <View
          className="bg-accent"
          style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 12,
          }}
        >
          <Ionicons color={foreground} name="checkmark-circle" size={28} />
        </View>
        <View style={{ flex: 1 }}>
          <Text
            className="text-primary-foreground"
            style={{
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            You're Going!
          </Text>
          <Text
            className="text-accent"
            style={{
              fontSize: 14,
            }}
          >
            RSVP confirmed
          </Text>
        </View>
      </View>

      {/* RSVP Details */}
      <View
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          borderRadius: 12,
          padding: 16,
          marginBottom: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        >
          <Text style={{ color: "rgba(255, 255, 255, 0.7)" }}>Guests</Text>
          <Text
            className="text-primary-foreground"
            style={{ fontWeight: "500" }}
          >
            {existingRsvp.guests}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "rgba(255, 255, 255, 0.7)" }}>Total</Text>
          <Text
            className="text-primary-foreground"
            style={{ fontWeight: "500" }}
          >
            £{totalPrice}
          </Text>
        </View>
        {existingRsvp.notes && (
          <View style={{ marginTop: 12 }}>
            <Text
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                marginBottom: 4,
              }}
            >
              Notes
            </Text>
            <Text className="text-primary-foreground">
              {existingRsvp.notes}
            </Text>
          </View>
        )}
      </View>

      {/* Add to Calendar Button */}
      <ActionButton
        disabled={isCalendarLoading}
        icon="calendar"
        isLoading={isCalendarLoading}
        label="Add to Calendar"
        onPress={onAddToCalendar}
        variant="primary"
      />

      {/* Cancel RSVP Button */}
      <ActionButton
        disabled={isCancelling}
        icon="close-circle-outline"
        isLoading={isCancelling}
        label="Cancel RSVP"
        onPress={onCancelRsvp}
        style={{ marginTop: 12 }}
        variant="destructive"
      />
    </>
  );
}

// RSVP Form component
function RsvpForm({
  user,
  event,
  formData,
  setFormData,
  isSubmitting,
  onSubmit,
}: {
  user: { name: string; email: string } | null | undefined;
  event: [typeof EVENTS](0);
  formData: { guests: string; notes: string };
  setFormData: React.Dispatch<
    React.SetStateAction<{ guests: string; notes: string }>
  >;
  isSubmitting: boolean;
  onSubmit: () => void;
}) {
  const accent = useThemeColor("accent");
  const primaryForeground = "#fffef8";

  return (
    <>
      <Text
        className="text-primary-foreground"
        style={{
          fontSize: 22,
          fontWeight: "300",
          fontFamily: "serif",
          marginBottom: 4,
        }}
      >
        Reserve Your Spot
      </Text>
      <Text
        className="text-accent"
        style={{
          fontSize: 14,
          marginBottom: 20,
        }}
      >
        Complete the form below to RSVP
      </Text>

      {/* User Info Display */}
      <View
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          borderRadius: 12,
          padding: 16,
          marginBottom: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Ionicons
            color={accent}
            name="person-circle-outline"
            size={20}
            style={{ marginRight: 10 }}
          />
          <Text
            className="text-primary-foreground"
            style={{
              fontSize: 16,
              fontWeight: "500",
            }}
          >
            {user?.name || "Loading..."}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            color={accent}
            name="mail-outline"
            size={18}
            style={{ marginRight: 10 }}
          />
          <Text
            style={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: 14,
            }}
          >
            {user?.email || "Loading..."}
          </Text>
        </View>
      </View>

      {/* Number of Guests */}
      <View style={{ marginBottom: 16 }}>
        <Text
          className="text-accent"
          style={{
            fontSize: 13,
            marginBottom: 8,
            fontWeight: "500",
          }}
        >
          Number of Guests
        </Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          {["1", "2", "3", "4", "5+"].map((num) => (
            <GuestButton
              key={num}
              onPress={() => setFormData((prev) => ({ ...prev, guests: num }))}
              selected={formData.guests === num}
              value={num}
            />
          ))}
        </View>
      </View>

      {/* Special Requirements */}
      <View style={{ marginBottom: 20 }}>
        <Text
          className="text-accent"
          style={{
            fontSize: 13,
            marginBottom: 8,
            fontWeight: "500",
          }}
        >
          Special Requirements (Optional)
        </Text>
        <TextInput
          multiline
          onChangeText={(text) =>
            setFormData((prev) => ({ ...prev, notes: text }))
          }
          placeholder="Dietary requirements, accessibility needs, etc."
          placeholderTextColor="rgba(255, 255, 255, 0.4)"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: 12,
            paddingHorizontal: 16,
            paddingVertical: 14,
            color: primaryForeground,
            fontSize: 16,
            minHeight: 80,
            textAlignVertical: "top",
          }}
          value={formData.notes}
        />
      </View>

      {/* Submit Button */}
      <SubmitButton
        guests={formData.guests}
        isSubmitting={isSubmitting}
        onPress={onSubmit}
        price={event.price}
      />
    </>
  );
}

// Sign In Prompt component
function SignInPrompt({ onSignIn }: { onSignIn: () => void }) {
  return (
    <>
      <Text
        className="text-primary-foreground"
        style={{
          fontSize: 22,
          fontWeight: "300",
          fontFamily: "serif",
          marginBottom: 4,
        }}
      >
        Reserve Your Spot
      </Text>
      <Text
        className="text-accent"
        style={{
          fontSize: 14,
          marginBottom: 20,
        }}
      >
        Sign in to reserve your spot at this event
      </Text>
      <Pressable
        className="bg-primary-foreground"
        onPress={onSignIn}
        style={{
          borderRadius: 14,
          paddingVertical: 16,
          alignItems: "center",
        }}
      >
        <Text
          className="text-foreground"
          style={{
            fontSize: 17,
            fontWeight: "600",
          }}
        >
          Sign In to RSVP
        </Text>
      </Pressable>
    </>
  );
}

function InfoRow({
  icon,
  label,
  value,
  isLast,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
  isLast?: boolean;
}) {
  const accent = useThemeColor("accent");

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        borderBottomWidth: isLast ? 0 : 1,
        borderBottomColor: "rgba(0, 0, 0, 0.06)",
      }}
    >
      <View
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          backgroundColor: `${accent}20`,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 12,
        }}
      >
        <Ionicons color={accent} name={icon} size={18} />
      </View>
      <View style={{ flex: 1 }}>
        <Text className="text-muted" style={{ fontSize: 12, marginBottom: 2 }}>
          {label}
        </Text>
        <Text
          className="text-foreground"
          style={{
            fontSize: 15,
            fontWeight: "500",
          }}
        >
          {value}
        </Text>
      </View>
    </View>
  );
}

function GuestButton({
  value,
  selected,
  onPress,
}: {
  value: string;
  selected: boolean;
  onPress: () => void;
}) {
  const scale = useSharedValue(1);
  // Add fallbacks to handle timing issue where useThemeColor may return "invalid" before theme loads
  const accent = useThemeColor("accent") || "#85b09a";
  const foreground = useThemeColor("foreground") || "#06273a";
  const primaryForeground = "#fffef8";

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => {
        scale.value = withSpring(0.9, { damping: 15, stiffness: 400 });
      }}
      onPressOut={() => {
        scale.value = withSpring(1, { damping: 15, stiffness: 400 });
      }}
    >
      <Animated.View
        style={[
          animatedStyle,
          {
            width: 48,
            height: 48,
            borderRadius: 12,
            backgroundColor: selected ? accent : "rgba(255, 255, 255, 0.1)",
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <Text
          style={{
            color: selected ? foreground : primaryForeground,
            fontSize: 16,
            fontWeight: selected ? "600" : "400",
          }}
        >
          {value}
        </Text>
      </Animated.View>
    </Pressable>
  );
}

function SubmitButton({
  onPress,
  isSubmitting,
  price,
  guests,
}: {
  onPress: () => void;
  isSubmitting: boolean;
  price: string;
  guests: string;
}) {
  const scale = useSharedValue(1);
  // Add fallbacks to handle timing issue where useThemeColor may return "invalid" before theme loads
  const foreground = useThemeColor("foreground") || "#06273a";
  const accent = useThemeColor("accent") || "#85b09a";

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const guestCount = guests === "5+" ? 5 : Number.parseInt(guests, 10);
  const totalPrice = Number.parseInt(price, 10) * guestCount;

  return (
    <Pressable
      disabled={isSubmitting}
      onPress={onPress}
      onPressIn={() => {
        scale.value = withSpring(0.98, { damping: 15, stiffness: 400 });
      }}
      onPressOut={() => {
        scale.value = withSpring(1, { damping: 15, stiffness: 400 });
      }}
    >
      <Animated.View
        className="bg-primary-foreground"
        style={[
          animatedStyle,
          {
            borderRadius: 14,
            paddingVertical: 16,
            alignItems: "center",
            opacity: isSubmitting ? 0.7 : 1,
          },
        ]}
      >
        <Text
          style={{
            color: foreground,
            fontSize: 17,
            fontWeight: "600",
          }}
        >
          {isSubmitting ? "Submitting..." : "Confirm RSVP"}
        </Text>
        <Text
          style={{
            color: accent,
            fontSize: 13,
            marginTop: 2,
          }}
        >
          {guestCount} {guestCount === 1 ? "guest" : "guests"} - Total: £
          {totalPrice}
        </Text>
      </Animated.View>
    </Pressable>
  );
}

function ActionButton({
  label,
  icon,
  onPress,
  variant = "primary",
  disabled,
  isLoading,
  style,
}: {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  variant?: "primary" | "destructive";
  disabled?: boolean;
  isLoading?: boolean;
  style?: object;
}) {
  const scale = useSharedValue(1);
  // Add fallbacks to handle timing issue where useThemeColor may return "invalid" before theme loads
  const accent = useThemeColor("accent") || "#85b09a";
  const foreground = useThemeColor("foreground") || "#06273a";
  const primaryForeground = "#fffef8";

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const isPrimary = variant === "primary";

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      onPressIn={() => {
        scale.value = withSpring(0.98, { damping: 15, stiffness: 400 });
      }}
      onPressOut={() => {
        scale.value = withSpring(1, { damping: 15, stiffness: 400 });
      }}
      style={style}
    >
      <Animated.View
        style={[
          animatedStyle,
          {
            backgroundColor: isPrimary ? accent : "transparent",
            borderRadius: 14,
            paddingVertical: 14,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            borderWidth: isPrimary ? 0 : 1,
            borderColor: "rgba(255, 255, 255, 0.3)",
            opacity: disabled ? 0.6 : 1,
          },
        ]}
      >
        {isLoading ? (
          <ActivityIndicator
            color={isPrimary ? foreground : primaryForeground}
            size="small"
          />
        ) : (
          <>
            <Ionicons
              color={isPrimary ? foreground : primaryForeground}
              name={icon}
              size={20}
            />
            <Text
              style={{
                color: isPrimary ? foreground : primaryForeground,
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              {label}
            </Text>
          </>
        )}
      </Animated.View>
    </Pressable>
  );
}
</file>

<file path="apps/native/app/(tabs)/events/index.tsx">
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useThemeColor } from "heroui-native";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Animated, {
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CategoryFilter, EVENT_CATEGORIES } from "@/components/CategoryFilter";
import { ExternalLinkButton } from "@/components/ExternalLinkButton";

// Sample events data based on the website sitemap
export const EVENTS = [
  {
    id: "christmas-lunch-2025",
    title: "Christmas Lunch",
    description: "Enjoy our special festive menu in the Main Dining Room",
    fullDescription:
      "Join us for a memorable Christmas Lunch experience at City University Club. Our award-winning chefs have prepared a special festive menu featuring traditional favorites with a modern twist. The elegant Main Dining Room will be beautifully decorated for the season, creating the perfect atmosphere for celebrating with friends, family, or colleagues.\n\nThe lunch includes a three-course meal with wine pairings, followed by coffee and mince pies. Vegetarian and dietary options are available upon request.",
    dateRange: "1st - 23rd December",
    time: "12:00 PM - 3:00 PM",
    location: "Main Dining Room",
    price: "45",
    capacity: 60,
    type: "seasonal",
    image:
      "https://static.wixstatic.com/media/11062b_7daf34b38d874071a1001caa9dde798f~mv2_d_5616_3744_s_4_2.jpg/v1/fill/w_400,h_300,al_c,q_80/11062b_7daf34b38d874071a1001caa9dde798f~mv2_d_5616_3744_s_4_2.webp",
  },
  {
    id: "christmas-dinner-2025",
    title: "Christmas Dinners",
    description: "An evening of festive celebration with special menu",
    fullDescription:
      "Experience the magic of Christmas with our exclusive Christmas Dinner event. This intimate evening celebration features a five-course tasting menu showcasing the finest seasonal ingredients, expertly paired with champagne and premium wines.\n\nThe evening includes live classical music, festive entertainment, and a special visit from Father Christmas. Perfect for couples or groups looking for an unforgettable holiday experience.",
    dateRange: "December 18th",
    time: "7:00 PM - 11:00 PM",
    location: "Private Dining Room",
    price: "85",
    capacity: 40,
    type: "special",
    image:
      "https://static.wixstatic.com/media/da00a6_3329029cfbc048ab9d8b8fdd4e5e3563~mv2.jpg/v1/fill/w_400,h_300,al_c,q_80/da00a6_3329029cfbc048ab9d8b8fdd4e5e3563~mv2.webp",
  },
  {
    id: "wine-tasting",
    title: "Wine Tasting Evening",
    description: "Sample fine wines from our cellar with expert guidance",
    fullDescription:
      "Our monthly Wine Tasting Evenings are a journey through the world's finest wine regions. Led by our expert sommelier, each session explores a different theme - from Old World classics to emerging New World producers.\n\nThe evening includes tasting of 6-8 wines, paired with artisanal cheeses and charcuterie. You'll learn about wine appreciation, food pairing principles, and discover new favorites for your personal collection.",
    dateRange: "Monthly",
    time: "6:30 PM - 9:00 PM",
    location: "Wine Cellar Room",
    price: "55",
    capacity: 24,
    type: "recurring",
    image:
      "https://static.wixstatic.com/media/da00a6_52bcb81f629b40c383a2f1a09aa1d97e~mv2.jpg/v1/fill/w_400,h_300,al_c,q_80/da00a6_52bcb81f629b40c383a2f1a09aa1d97e~mv2.webp",
  },
  {
    id: "business-lunch",
    title: "Business Networking Lunch",
    description: "Connect with fellow members over a delightful lunch",
    fullDescription:
      "Our Business Networking Lunches provide the perfect opportunity to expand your professional network while enjoying a delicious meal. Each month, we welcome guest speakers from various industries who share insights and expertise.\n\nThe format includes a welcome reception, two-course lunch with wine, a keynote presentation, and structured networking time. It's an ideal setting to make valuable connections and discuss business opportunities in a relaxed, members-only environment.",
    dateRange: "Last Friday of month",
    time: "12:30 PM - 2:30 PM",
    location: "Members Lounge",
    price: "35",
    capacity: 50,
    type: "recurring",
    image:
      "https://static.wixstatic.com/media/5e0aaa_89c287ebeaca49b398ec7c86b8397a0f~mv2.jpg/v1/fill/w_400,h_300,al_c,q_80/5e0aaa_89c287ebeaca49b398ec7c86b8397a0f~mv2.webp",
  },
];

export type Event = [typeof EVENTS](0);

// Blurhash for event images
const EVENT_BLURHASH = "LKJRyV~qIU-;_3M{ofRj9Fxut7WB";

export default function Events() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const accent = useThemeColor("accent");

  // Category filter state
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Derived filtered events - no useEffect needed!
  const filteredEvents = selectedCategory
    ? EVENTS.filter((event) => event.type === selectedCategory)
    : EVENTS;

  return (
    <View className="flex-1 bg-background">
      {/*Header*/}
      <View
        className="bg-primary"
        style={{
          paddingTop: insets.top + 16,
          paddingBottom: 20,
          paddingHorizontal: 20,
        }}
      >
        <Text
          className="text-primary-foreground"
          style={{
            fontSize: 28,
            fontWeight: "300",
            fontFamily: "serif",
          }}
        >
          Events
        </Text>
        <Text
          className="text-accent"
          style={{
            fontSize: 14,
            marginTop: 4,
          }}
        >
          Upcoming events at City University Club
        </Text>
      </View>

      {/* Category Filter */}
      <CategoryFilter
        categories={EVENT_CATEGORIES}
        onSelectCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      <ScrollView
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
        style={{ flex: 1 }}
      >
        {filteredEvents.length === 0 ? (
          <View
            style={{
              padding: 32,
              alignItems: "center",
            }}
          >
            <Ionicons color={accent} name="calendar-outline" size={48} />
            <Text
              className="text-foreground"
              style={{
                fontSize: 16,
                marginTop: 16,
                textAlign: "center",
              }}
            >
              No events found in this category
            </Text>
            <Pressable
              className="bg-accent"
              onPress={() => setSelectedCategory(null)}
              style={{
                marginTop: 12,
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 8,
              }}
            >
              <Text
                className="text-foreground"
                style={{
                  fontWeight: "500",
                }}
              >
                View All Events
              </Text>
            </Pressable>
          </View>
        ) : (
          filteredEvents.map((event, index) => (
            <Animated.View
              entering={FadeInDown.delay(index * 100).springify()}
              key={event.id}
            >
              <EventCard
                event={event}
                featured={index === 0 && selectedCategory === null}
                onPress={() => router.push(`/events/${event.id}`)}
              />
            </Animated.View>
          ))
        )}

        {/* View Website Link */}
        <ExternalLinkButton
          label="View All Events"
          url="https://www.cityuniversityclub.co.uk/events"
          variant="subtle"
        />
      </ScrollView>
    </View>
  );
}

function EventCard({
  event,
  featured,
  onPress,
}: {
  event: Event;
  featured?: boolean;
  onPress: () => void;
}) {
  const scale = useSharedValue(1);

  // useThemeColor only for Ionicons (which don't support className)
  const accent = useThemeColor("accent") || "#85b09a";
  const muted = useThemeColor("muted") || "#666666";

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.98, { damping: 15, stiffness: 400 });
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 15, stiffness: 400 });
  };

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        className={featured ? "bg-primary" : "bg-surface"}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={{
          borderRadius: 12,
          marginBottom: 16,
          overflow: "hidden",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        }}
      >
        {/*Event Image*/}
        <Image
          contentFit="cover"
          placeholder={{ blurhash: EVENT_BLURHASH }}
          source={event.image}
          style={{ width: "100%", height: 160 }}
          transition={200}
        />

        {/* Event Details */}
        <View style={{ padding: 16 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                className={
                  featured ? "text-primary-foreground" : "text-foreground"
                }
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  marginBottom: 4,
                }}
              >
                {event.title}
              </Text>
              <Text
                className={featured ? "text-accent" : "text-muted"}
                style={{
                  fontSize: 14,
                  lineHeight: 20,
                }}
              >
                {event.description}
              </Text>
            </View>
            {featured && (
              <View
                className="bg-accent"
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  borderRadius: 12,
                  marginLeft: 8,
                }}
              >
                <Text
                  className="text-foreground"
                  style={{
                    fontSize: 11,
                    fontWeight: "600",
                  }}
                >
                  Featured
                </Text>
              </View>
            )}
          </View>

          {/* Date and RSVP */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 16,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              <Ionicons
                color={featured ? accent : muted}
                name="calendar-outline"
                size={16}
              />
              <Text
                className={featured ? "text-accent" : "text-muted"}
                style={{
                  fontSize: 13,
                }}
              >
                {event.dateRange}
              </Text>
            </View>

            <View
              className={featured ? "bg-primary-foreground" : "bg-primary"}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 6,
              }}
            >
              <Text
                className={
                  featured ? "text-primary" : "text-primary-foreground"
                }
                style={{
                  fontSize: 13,
                  fontWeight: "500",
                }}
              >
                RSVP
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
}
</file>

<file path="apps/native/app/(tabs)/menu/_layout.tsx">
import { Stack } from "expo-router";

export default function MenuLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
</file>

<file path="apps/native/app/(tabs)/menu/[category].tsx">
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MENU_DATA } from "./index";

// Generic food blurhash placeholder (warm brown/beige tones)
const FOOD_BLURHASH = "LKJRyV~qIU-;_3M{ofRj9Fxut7WB";

const CATEGORY_TITLES: Record<string, string> = {
  starters: "Starters",
  mains: "Main Courses",
  desserts: "Desserts & Savouries",
  canape: "Canapé Menu",
};

export default function MenuCategory() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { category } = useLocalSearchParams<{ category: string }>();

  // Theme colors for Ionicons
  const primaryForeground = "#fffef8";

  const categoryTitle = CATEGORY_TITLES[category || ""] || "Menu";
  const items = MENU_DATA[category as keyof typeof MENU_DATA] || [];

  return (
    <View className="flex-1 bg-background">
      {/*Header*/}
      <View
        className="bg-primary px-4 pb-5"
        style={{ paddingTop: insets.top + 8 }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <Pressable
            onPress={() => router.back()}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons color={primaryForeground} name="arrow-back" size={24} />
          </Pressable>
          <View>
            <Text
              className="font-light text-2xl text-primary-foreground"
              style={{ fontFamily: "serif" }}
            >
              {categoryTitle}
            </Text>
            <Text className="mt-0.5 text-accent text-sm">
              {items.length} items
            </Text>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
        style={{ flex: 1 }}
      >
        {items.map((item) => (
          <MenuItem item={item} key={item.name} />
        ))}
      </ScrollView>
    </View>
  );
}

function MenuItem({
  item,
}: {
  item: { name: string; description: string | null; image: string | null };
}) {
  return (
    <View
      className="mb-4 overflow-hidden bg-surface"
      style={{
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
      }}
    >
      {item.image && (
        <Image
          cachePolicy="memory-disk"
          contentFit="cover"
          placeholder={{ blurhash: FOOD_BLURHASH }}
          source={item.image}
          style={{ width: "100%", height: 180 }}
          transition={200}
        />
      )}
      <View style={{ padding: 16 }}>
        <Text
          className="font-semibold text-foreground"
          style={{ fontSize: 17, lineHeight: 22 }}
        >
          {item.name}
        </Text>
        {item.description && (
          <Text
            className="mt-1.5 text-muted text-sm"
            style={{ lineHeight: 20 }}
          >
            {item.description}
          </Text>
        )}
      </View>
    </View>
  );
}
</file>

<file path="apps/native/app/(tabs)/menu/index.tsx">
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useThemeColor } from "heroui-native";
import { useEffect } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Generic food blurhash placeholder (warm brown/beige tones)
const FOOD_BLURHASH = "LKJRyV~qIU-;_3M{ofRj9Fxut7WB";

// Menu categories based on the sitemap
const MENU_CATEGORIES = [
  {
    id: "starters",
    name: "Starters",
    description: "Begin your dining experience",
    image:
      "https://static.wixstatic.com/media/11062b_7daf34b38d874071a1001caa9dde798f~mv2_d_5616_3744_s_4_2.jpg/v1/fill/w_600,h_400,al_c,q_80/11062b_7daf34b38d874071a1001caa9dde798f~mv2_d_5616_3744_s_4_2.webp",
    itemCount: 6,
  },
  {
    id: "mains",
    name: "Main Courses",
    description: "Exquisite dishes from our kitchen",
    image:
      "https://static.wixstatic.com/media/11062b_ce333d3fd0a941deb7a0ddf8f1ed837b~mv2_d_3046_3782_s_4_2.jpg/v1/fill/w_600,h_400,al_c,q_80/11062b_ce333d3fd0a941deb7a0ddf8f1ed837b~mv2_d_3046_3782_s_4_2.webp",
    itemCount: 6,
  },
  {
    id: "desserts",
    name: "Desserts & Savouries",
    description: "A sweet ending to your meal",
    image:
      "https://static.wixstatic.com/media/da00a6_3329029cfbc048ab9d8b8fdd4e5e3563~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80/da00a6_3329029cfbc048ab9d8b8fdd4e5e3563~mv2.webp",
    itemCount: 4,
  },
  {
    id: "canape",
    name: "Canapé Menu",
    description: "Perfect for events and gatherings",
    image:
      "https://static.wixstatic.com/media/5e0aaa_ae64aef587014ac0a2f4f27c190da7f4~mv2.png/v1/fill/w_600,h_400,al_c,q_80/5e0aaa_ae64aef587014ac0a2f4f27c190da7f4~mv2.webp",
    itemCount: 14,
  },
];

// Full menu data
export const MENU_DATA = {
  starters: [
    {
      name: "Homemade Soup of the Day",
      description: "Ask your server for today's selection",
      image:
        "https://static.wixstatic.com/media/da00a6_471faa57e03f4661a0aa2a15817ee0fb~mv2.webp",
    },
    {
      name: "Chilli Garlic Pan Fried Tiger Prawns",
      description: "and Chorizo served with Warm Ciabatta Bread",
      image:
        "https://static.wixstatic.com/media/da00a6_9d9456b46aba453e980ce799a6e008e5~mv2.jpg",
    },
    {
      name: "Aged Cheddar Cheese and Caramelised Red Onion Tart",
      description: "Dressed Salad",
      image:
        "https://static.wixstatic.com/media/da00a6_ad86317d721f4132b9d8f3704dcce1f8~mv2.jpg",
    },
    {
      name: "Devilled Kidneys",
      description: "With Toasted Sourdough",
      image:
        "https://static.wixstatic.com/media/da00a6_23187ff8e23a42d4a6069845853df00c~mv2.jpg",
    },
    {
      name: "Crispy Ham Hock Croquettes",
      description: "Red Onion Chutney, Dressed Salad and Reduced Balsamic",
      image:
        "https://static.wixstatic.com/media/da00a6_1d046e4a01c7433c91febe13af1b0164~mv2.jpg",
    },
    {
      name: "Smoked Salmon Plate",
      description: "With Bread and Butter, Capers and Olive Oil",
      image:
        "https://static.wixstatic.com/media/da00a6_99abb134e90e49d1b2fa6d8a6dd81779~mv2.jpg",
    },
  ],
  mains: [
    {
      name: "Roast Rump of Lamb",
      description:
        "Confit Shallots, Braised Cabbage, Crispy Celeriac, Herb Parmentier Potatoes, Field Mushrooms, Red Currant Jus",
      image:
        "https://static.wixstatic.com/media/da00a6_c20e4e59e1ac4bce9da6a0ff88e5c0be~mv2.jpg",
    },
    {
      name: "Pan Fried Delice of Salmon",
      description:
        "Wilted Spinach, Herb Crushed New Potatoes, Seasonal Green Vegetables, Chive Veloute",
      image:
        "https://static.wixstatic.com/media/da00a6_5800e90f173c45e9ab8a0df782a28955~mv2.jpg",
    },
    {
      name: "Confit Belly of English Pork",
      description:
        "Pan Fried Black Pudding, Parsley Potato Rosti, Poached Baby Apples, Buttered Herb Carrots, Crackling and Cider Jus",
      image:
        "https://static.wixstatic.com/media/da00a6_fbb48bcf366545f0a4213689c449d8ea~mv2.jpg",
    },
    {
      name: "Oven Roasted Breast of Free Range Chicken",
      description:
        "Braised Little Gem Lettuce, Pea a La Francaise, Crispy Lardons, Cafe au Lait Sauce",
      image:
        "https://static.wixstatic.com/media/da00a6_e3f699ce1cfb4468a8a52353438863c4~mv2.jpg",
    },
    {
      name: "Homemade Tortellinis",
      description:
        "Filled with Truffle Mushrooms, Wilted Spinach, Confit Cherry Tomatoes, Parmesan Cream Sauce",
      image:
        "https://static.wixstatic.com/media/da00a6_857f9768dc9c48a4856074644ee491a6~mv2.jpg",
    },
    {
      name: "Whole Dover Sole",
      description:
        "Boiled New Potatoes, Wilted Spinach, Capers, Parsley Butter",
      image:
        "https://static.wixstatic.com/media/da00a6_04a2f1a96f4d4dcda9b550b6cb9e4ba2~mv2.jpg",
    },
  ],
  desserts: [
    {
      name: "Apricot and Pistachio Tart",
      description: "Vanilla Custard and Caramel Sauce",
      image:
        "https://static.wixstatic.com/media/da00a6_3329029cfbc048ab9d8b8fdd4e5e3563~mv2.jpg",
    },
    {
      name: "Selection of Cheeses",
      description: "Stilton, Cheddar and Brie Plate",
      image:
        "https://static.wixstatic.com/media/da00a6_52bcb81f629b40c383a2f1a09aa1d97e~mv2.jpg",
    },
    {
      name: "Ice Creams",
      description: "Choose from a selection of ice cream and sorbets",
      image:
        "https://static.wixstatic.com/media/da00a6_43177fedaab74f5ab2d476165fb039f8~mv2.png",
    },
    {
      name: "Sticky Toffee Pudding",
      description: "Vanilla Custard and Caramel Sauce",
      image:
        "https://static.wixstatic.com/media/da00a6_d3e73306bcad41baa7552a956bae7e37~mv2.jpg",
    },
  ],
  canape: [
    {
      name: "Rare Roast Beef mini-Yorkshire puddings",
      description: "with horseradish cream",
      image: null,
    },
    {
      name: "Truffled mushroom and brie de Meaux",
      description: null,
      image: null,
    },
    {
      name: "Soy glazed belly of pork",
      description: "served on Chinese spoons",
      image: null,
    },
    {
      name: "Spinach and goats cheese frittata",
      description: null,
      image: null,
    },
    { name: "Honey glazed cocktail sausages", description: null, image: null },
    { name: "Smoked Salmon Blinis", description: null, image: null },
    {
      name: "Bloody Mary Prawn cocktail croustades",
      description: null,
      image: null,
    },
    {
      name: "Goats cheese and spinach tartlets",
      description: null,
      image: null,
    },
    { name: "Chicken yakatori skewers", description: null, image: null },
    { name: "Mini cod's of fish and chips", description: null, image: null },
    {
      name: "Rosary ash goats cheese tartlets",
      description: null,
      image: null,
    },
    {
      name: "Mini vegetable and meat spring rolls and samosas",
      description: null,
      image: null,
    },
    {
      name: "Chicken liver parfait",
      description: "on toasted rye bread",
      image: null,
    },
    {
      name: "Cones of Cornish crab",
      description: "tomato & lemon salad, lobster mayonnaise",
      image: null,
    },
  ],
};

// Collect all menu images for prefetching
const ALL_MENU_IMAGES = [
  ...MENU_CATEGORIES.map((c) => c.image),
  ...Object.values(MENU_DATA)
    .flat()
    .map((item) => item.image)
    .filter(Boolean),
] as string[];

export default function MenuIndex() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // Theme colors for Ionicons
  const accent = useThemeColor("accent");

  // Prefetch all menu images on mount
  useEffect(() => {
    Image.prefetch(ALL_MENU_IMAGES, "memory-disk");
  }, []);

  return (
    <View className="flex-1 bg-background">
      {/*Header*/}
      <View
        className="bg-primary px-5 pb-5"
        style={{ paddingTop: insets.top + 16 }}
      >
        <Text
          className="font-light text-3xl text-primary-foreground"
          style={{ fontFamily: "serif" }}
        >
          A La Carte Menu
        </Text>
        <Text className="mt-1 text-accent text-sm">
          Exquisite dining at City University Club
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
        style={{ flex: 1 }}
      >
        {/* Menu Categories */}
        {MENU_CATEGORIES.map((category) => (
          <Pressable
            className="mb-4 overflow-hidden bg-surface"
            key={category.id}
            onPress={() => router.push(`/(tabs)/menu/${category.id}`)}
            style={{
              borderRadius: 12,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <Image
              cachePolicy="memory-disk"
              contentFit="cover"
              placeholder={{ blurhash: FOOD_BLURHASH }}
              source={category.image}
              style={{ width: "100%", height: 140 }}
              transition={200}
            />
            <View style={{ padding: 16 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text className="font-semibold text-foreground text-lg">
                    {category.name}
                  </Text>
                  <Text className="mt-0.5 text-muted text-sm">
                    {category.description}
                  </Text>
                </View>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
                >
                  <Text className="text-accent text-sm">
                    {category.itemCount} items
                  </Text>
                  <Ionicons color={accent} name="chevron-forward" size={20} />
                </View>
              </View>
            </View>
          </Pressable>
        ))}

        {/* Opening Hours */}
        <View className="mt-2 bg-primary p-5" style={{ borderRadius: 12 }}>
          <Text className="mb-3 font-semibold text-base text-primary-foreground">
            Dining Hours
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Ionicons color={accent} name="time-outline" size={18} />
            <Text className="text-primary-foreground text-sm">
              Monday to Friday, 9:00 AM - 5:00 PM
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              marginTop: 8,
            }}
          >
            <Ionicons color={accent} name="restaurant-outline" size={18} />
            <Text className="text-primary-foreground text-sm">
              Lunch: 12:00 PM - Last orders 2:30 PM
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
</file>

<file path="apps/native/app/(tabs)/more/_layout.tsx">
import { Stack } from "expo-router";

export default function MoreLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="membership" />
      <Stack.Screen name="dining-room" />
      <Stack.Screen name="reciprocal-clubs" />
      <Stack.Screen name="fabric-fund" />
      <Stack.Screen name="bugle" />
      <Stack.Screen name="about" />
      <Stack.Screen name="contact" />
    </Stack>
  );
}
</file>

<file path="apps/native/app/(tabs)/more/about.tsx">
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useThemeColor } from "heroui-native";
import { Linking, Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ExternalLinkButton } from "@/components/ExternalLinkButton";

// Local assets for instant loading
const HERO_IMAGE = require("@/assets/images/hero-background.jpg");
const CUC_LOGO = require("@/assets/images/city_uni_club_gold.png");

export default function About() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // Theme colors for Ionicons
  const foreground = useThemeColor("foreground");
  const primaryForeground = "#fffef8";

  return (
    <View className="flex-1 bg-background">
      {/*Header*/}
      <View
        className="bg-primary px-4 pb-4"
        style={{
          paddingTop: insets.top,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <Pressable
            onPress={() => router.back()}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons color={primaryForeground} name="arrow-back" size={22} />
          </Pressable>
          <Text
            className="flex-1 text-primary-foreground"
            style={{
              fontSize: 20,
              fontWeight: "300",
              fontFamily: "serif",
            }}
          >
            About the Club
          </Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        {/* Hero Image */}
        <View style={{ height: 220 }}>
          <Image
            contentFit="cover"
            source={HERO_IMAGE}
            style={{ width: "100%", height: "100%" }}
          />
          {/* Overlay with logo */}
          <View
            style={{
              position: "absolute",
              bottom: -40,
              left: 0,
              right: 0,
              alignItems: "center",
            }}
          >
            <View
              className="bg-surface"
              style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                alignItems: "center",
                justifyContent: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.15,
                shadowRadius: 8,
                elevation: 4,
              }}
            >
              <Image
                contentFit="contain"
                source={CUC_LOGO}
                style={{ width: 70, height: 70 }}
              />
            </View>
          </View>
        </View>

        {/* Spacer for overlapping logo */}
        <View style={{ height: 50 }} />

        {/* Club Title */}
        <View
          style={{
            alignItems: "center",
            paddingHorizontal: 20,
            marginBottom: 24,
          }}
        >
          <Text
            className="text-center text-foreground"
            style={{
              fontSize: 26,
              fontWeight: "300",
              fontFamily: "serif",
            }}
          >
            City University Club
          </Text>
          <Text
            className="text-center text-accent"
            style={{
              fontSize: 16,
              marginTop: 4,
            }}
          >
            Established 1895
          </Text>
        </View>

        {/* History Section */}
        <View
          className="mx-4 mb-4 bg-surface"
          style={{
            borderRadius: 12,
            padding: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <View
              className="bg-primary/10"
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <Ionicons color={foreground} name="book-outline" size={18} />
            </View>
            <Text
              className="text-foreground"
              style={{
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              Our History
            </Text>
          </View>
          <Text
            className="text-muted"
            style={{
              fontSize: 15,
              lineHeight: 24,
            }}
          >
            Originally established in 1895 by Oxbridge graduates who wanted a
            lunch club in the City, the link with the universities remains,
            although membership is now much wider, embracing both sexes and many
            professions.
          </Text>
          <Text
            className="text-muted"
            style={{
              fontSize: 15,
              lineHeight: 24,
              marginTop: 12,
            }}
          >
            Our current premises at 42 Crutched Friars, which we moved to in
            January 2018, have a rich history of their own - they were once the
            residence of the Spanish Ambassador during the late 18th century.
          </Text>
        </View>

        {/* About Section */}
        <View
          className="mx-4 mb-4 bg-surface"
          style={{
            borderRadius: 12,
            padding: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <View
              className="bg-primary/10"
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <Ionicons
                color={foreground}
                name="restaurant-outline"
                size={18}
              />
            </View>
            <Text
              className="text-foreground"
              style={{
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              The Club Today
            </Text>
          </View>
          <Text
            className="text-muted"
            style={{
              fontSize: 15,
              lineHeight: 24,
            }}
          >
            The City University Club is a lunch club in the heart of London's
            financial district. It is the ideal place for lunch or simply a
            drink at the bar. The Club offers a first-class meal in discreet
            circumstances for a modest price.
          </Text>
          <Text
            className="text-muted"
            style={{
              fontSize: 15,
              lineHeight: 24,
              marginTop: 12,
            }}
          >
            Members joining the Club find the atmosphere equally conducive to
            lunching with friends or on their own at the club tables. The food
            is first-class, the wine list comprehensive, and the service
            excellent.
          </Text>
        </View>

        {/* Key Features */}
        <View
          className="mx-4 mb-4 bg-surface"
          style={{
            borderRadius: 12,
            padding: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <View
              className="bg-primary/10"
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <Ionicons color={foreground} name="star-outline" size={18} />
            </View>
            <Text
              className="text-foreground"
              style={{
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              What We Offer
            </Text>
          </View>

          {/* Feature Items */}
          {[
            {
              icon: "globe-outline" as const,
              title: "Reciprocal Clubs",
              description: "Access to over 450 of the finest clubs worldwide",
            },
            {
              icon: "restaurant-outline" as const,
              title: "Fine Dining",
              description: "First-class cuisine with an excellent wine list",
            },
            {
              icon: "briefcase-outline" as const,
              title: "Business Space",
              description:
                "Comfortable space for business use from early morning",
            },
            {
              icon: "people-outline" as const,
              title: "Networking",
              description:
                "Meet professionals from many fields and backgrounds",
            },
          ].map((feature, index) => (
            <View
              key={feature.title}
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginBottom: index < 3 ? 16 : 0,
              }}
            >
              <View
                className="bg-accent"
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 12,
                }}
              >
                <Ionicons color={foreground} name={feature.icon} size={16} />
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  className="text-foreground"
                  style={{
                    fontSize: 15,
                    fontWeight: "600",
                  }}
                >
                  {feature.title}
                </Text>
                <Text
                  className="text-muted"
                  style={{
                    fontSize: 14,
                    marginTop: 2,
                  }}
                >
                  {feature.description}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Location Section */}
        <View
          className="mx-4 mb-4 bg-primary"
          style={{
            borderRadius: 12,
            padding: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <View
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <Ionicons
                color={primaryForeground}
                name="location-outline"
                size={18}
              />
            </View>
            <Text
              className="text-primary-foreground"
              style={{
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              Visit Us
            </Text>
          </View>

          <Text
            className="text-primary-foreground"
            style={{
              fontSize: 16,
              fontWeight: "500",
            }}
          >
            42 Crutched Friars
          </Text>
          <Text
            className="text-accent"
            style={{
              fontSize: 15,
              marginTop: 4,
            }}
          >
            London EC3N 2AP2
          </Text>

          <View
            style={{
              height: 1,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              marginVertical: 16,
            }}
          />

          <View style={{ flexDirection: "row", gap: 12 }}>
            <Pressable
              className="flex-1 bg-accent"
              onPress={() => Linking.openURL("tel:02071676682")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 12,
                borderRadius: 8,
                gap: 8,
              }}
            >
              <Ionicons color={foreground} name="call" size={18} />
              <Text
                className="text-foreground"
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Call Us
              </Text>
            </Pressable>

            <Pressable
              onPress={() =>
                Linking.openURL("mailto:secretary@cityuniversityclub.co.uk")
              }
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                paddingVertical: 12,
                borderRadius: 8,
                gap: 8,
              }}
            >
              <Ionicons color={primaryForeground} name="mail" size={18} />
              <Text
                className="text-primary-foreground"
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Email
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Dress Code */}
        <View
          className="mx-4 mb-4 bg-surface"
          style={{
            borderRadius: 12,
            padding: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <View
              className="bg-primary/10"
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <Ionicons color={foreground} name="shirt-outline" size={18} />
            </View>
            <Text
              className="text-foreground"
              style={{
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              Dress Code
            </Text>
          </View>
          <Text
            className="text-muted"
            style={{
              fontSize: 15,
              lineHeight: 24,
            }}
          >
            In keeping with other private members clubs, the dress code is
            jacket and tie for men and smart dress for ladies. Jeans and
            trainers are not permitted.
          </Text>
        </View>

        {/* Opening Hours */}
        <View
          className="mx-4 mb-4 bg-surface"
          style={{
            borderRadius: 12,
            padding: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <View
              className="bg-primary/10"
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <Ionicons color={foreground} name="time-outline" size={18} />
            </View>
            <Text
              className="text-foreground"
              style={{
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              Opening Hours
            </Text>
          </View>
          <View style={{ gap: 8 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text className="text-muted" style={{ fontSize: 15 }}>
                Monday - Friday
              </Text>
              <Text
                className="text-foreground"
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                9:00 AM - 5:00 PM
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text className="text-muted" style={{ fontSize: 15 }}>
                Lunch Service
              </Text>
              <Text
                className="text-foreground"
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                12:00 PM - 2:30 PM
              </Text>
            </View>
          </View>
          <Text
            className="text-muted"
            style={{
              fontSize: 13,
              marginTop: 12,
              fontStyle: "italic",
            }}
          >
            Closed between Christmas and New Year
          </Text>
        </View>

        {/* Website Link */}
        <View style={{ marginHorizontal: 16 }}>
          <ExternalLinkButton
            label="Visit Our Website"
            url="https://www.cityuniversityclub.co.uk/"
            variant="primary"
          />
        </View>
      </ScrollView>
    </View>
  );
}
</file>

<file path="apps/native/app/(tabs)/more/bugle.tsx">
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { useThemeColor } from "heroui-native";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ExternalLinkButton } from "@/components/ExternalLinkButton";

// The Bugle PDF URL
const BUGLE_PDF_URL =
  "<https://www.cityuniversityclub.co.uk/_files/ugd/da00a6_ff60a29890864b51be0e5aa177ba1d6a.pdf>";

// Past issues (for display purposes)
const PAST_ISSUES = [
  { issue: "Autumn 2025", current: true },
  { issue: "Summer 2025", current: false },
  { issue: "Spring 2025", current: false },
  { issue: "Winter 2024", current: false },
];

export default function Bugle() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // Theme colors for Ionicons
  const foreground = useThemeColor("foreground");
  const accent = useThemeColor("accent");
  const muted = useThemeColor("muted");
  const primaryForeground = "#fffef8";

  const handleOpenPDF = async () => {
    await WebBrowser.openBrowserAsync(BUGLE_PDF_URL);
  };

  return (
    <View className="flex-1 bg-background">
      {/*Header*/}
      <View
        className="bg-primary px-4 pb-5"
        style={{
          paddingTop: insets.top + 8,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <Pressable
            onPress={() => router.back()}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons color={primaryForeground} name="arrow-back" size={24} />
          </Pressable>
          <Text
            className="text-primary-foreground"
            style={{
              fontSize: 24,
              fontWeight: "300",
              fontFamily: "serif",
            }}
          >
            The Bugle
          </Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
        style={{ flex: 1 }}
      >
        {/* Hero Section with Icon */}
        <View
          className="bg-surface"
          style={{
            borderRadius: 16,
            padding: 24,
            alignItems: "center",
            marginBottom: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          {/* Newsletter Icon */}
          <View
            className="bg-primary/10"
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            <View
              className="bg-primary/15"
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons color={foreground} name="newspaper" size={36} />
            </View>
          </View>

          <Text
            className="text-center text-foreground"
            style={{
              fontSize: 22,
              fontWeight: "300",
              fontFamily: "serif",
              marginBottom: 8,
            }}
          >
            Club Newsletter
          </Text>

          <Text
            className="text-center text-muted"
            style={{
              fontSize: 15,
              lineHeight: 22,
              marginBottom: 20,
              paddingHorizontal: 8,
            }}
          >
            Stay informed with the latest news, events, and updates from the
            City University Club. Published quarterly for our members.
          </Text>

          {/* Current Issue Badge */}
          <View
            className="bg-accent/20"
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 20,
              marginBottom: 20,
            }}
          >
            <Text
              className="text-foreground"
              style={{
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              Autumn 2025 Issue Now Available
            </Text>
          </View>

          {/* Read Latest Issue Button */}
          <Pressable
            className="w-full bg-primary"
            onPress={handleOpenPDF}
            style={({ pressed }) => ({
              opacity: pressed ? 0.9 : 1,
              borderRadius: 12,
              paddingVertical: 16,
              paddingHorizontal: 32,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              justifyContent: "center",
            })}
          >
            <Ionicons
              color={primaryForeground}
              name="document-text"
              size={22}
            />
            <Text
              className="text-primary-foreground"
              style={{
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              Read Latest Issue
            </Text>
          </Pressable>
        </View>

        {/* What's Inside Section */}
        <View
          className="bg-surface"
          style={{
            borderRadius: 12,
            padding: 20,
            marginBottom: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.05,
            shadowRadius: 2,
            elevation: 1,
          }}
        >
          <Text
            className="text-foreground"
            style={{
              fontSize: 16,
              fontWeight: "600",
              marginBottom: 16,
            }}
          >
            What's Inside The Bugle
          </Text>

          <ContentItem
            accent={accent}
            description="Details on club gatherings and special occasions"
            icon="calendar-outline"
            title="Upcoming Events"
          />
          <ContentItem
            accent={accent}
            description="Updates and achievements from our community"
            icon="people-outline"
            title="Member News"
          />
          <ContentItem
            accent={accent}
            description="New menus and seasonal offerings"
            icon="restaurant-outline"
            title="Dining Updates"
          />
          <ContentItem
            accent={accent}
            description="Fabric Fund progress and renovations"
            icon="construct-outline"
            isLast
            title="Club Improvements"
          />
        </View>

        {/* Past Issues */}
        <View
          className="bg-surface"
          style={{
            borderRadius: 12,
            padding: 20,
            marginBottom: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.05,
            shadowRadius: 2,
            elevation: 1,
          }}
        >
          <Text
            className="text-foreground"
            style={{
              fontSize: 16,
              fontWeight: "600",
              marginBottom: 16,
            }}
          >
            Recent Issues
          </Text>

          {PAST_ISSUES.map((item, index) => (
            <View
              className="border-border"
              key={item.issue}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 12,
                borderBottomWidth: index === PAST_ISSUES.length - 1 ? 0 : 1,
              }}
            >
              <View
                className={item.current ? "bg-accent/20" : "bg-primary/10"}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 12,
                }}
              >
                <Ionicons
                  color={item.current ? accent : muted}
                  name="document-text-outline"
                  size={18}
                />
              </View>
              <Text
                className="flex-1 text-foreground"
                style={{
                  fontSize: 15,
                  fontWeight: item.current ? "500" : "400",
                }}
              >
                {item.issue}
              </Text>
              {item.current && (
                <View
                  className="bg-accent"
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    borderRadius: 12,
                  }}
                >
                  <Text
                    className="text-surface"
                    style={{
                      fontSize: 12,
                      fontWeight: "600",
                    }}
                  >
                    Current
                  </Text>
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Publication Info */}
        <View
          className="bg-primary"
          style={{
            borderRadius: 12,
            padding: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 16,
            }}
          >
            <Ionicons color={primaryForeground} name="time-outline" size={24} />
          </View>
          <View style={{ flex: 1 }}>
            <Text
              className="text-primary-foreground"
              style={{
                fontSize: 15,
                fontWeight: "600",
                marginBottom: 4,
              }}
            >
              Published Quarterly
            </Text>
            <Text
              className="text-accent"
              style={{
                fontSize: 13,
              }}
            >
              New issues released in Spring, Summer, Autumn, and Winter
            </Text>
          </View>
        </View>

        {/* Website Link */}
        <View style={{ marginTop: 20 }}>
          <ExternalLinkButton
            label="View on Website"
            url="https://www.cityuniversityclub.co.uk/about-3"
            variant="subtle"
          />
        </View>
      </ScrollView>
    </View>
  );
}

function ContentItem({
  icon,
  title,
  description,
  isLast = false,
  accent,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  isLast?: boolean;
  accent: string;
}) {
  return (
    <View
      className="border-border"
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        paddingVertical: 12,
        borderBottomWidth: isLast ? 0 : 1,
      }}
    >
      <View
        className="bg-accent/20"
        style={{
          width: 36,
          height: 36,
          borderRadius: 18,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 12,
        }}
      >
        <Ionicons color={accent} name={icon} size={18} />
      </View>
      <View style={{ flex: 1 }}>
        <Text
          className="text-foreground"
          style={{
            fontSize: 15,
            fontWeight: "500",
            marginBottom: 2,
          }}
        >
          {title}
        </Text>
        <Text className="text-muted" style={{ fontSize: 13 }}>
          {description}
        </Text>
      </View>
    </View>
  );
}
</file>

<file path="apps/native/app/(tabs)/more/contact.tsx">
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useThemeColor } from "heroui-native";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { authClient } from "@/lib/auth-client";

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // Theme colors for Ionicons
  const accent = useThemeColor("accent");
  const primaryForeground = "#fffef8";

  // Get session - authenticated users don't need to enter name/email/phone
  const { data: session } = authClient.useSession();
  const isAuthenticated = !!session?.user;

  // Form state - guest fields only used when NOT authenticated
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateEmail = (email: string): boolean => {
    return EMAIL_REGEX.test(email);
  };

  // Derive final values - session takes precedence for authenticated users
  const getName = () =>
    isAuthenticated ? session.user.name || "" : formData.name;
  const getEmail = () =>
    isAuthenticated ? session.user.email || "" : formData.email;
  const getPhone = () => (isAuthenticated ? "" : formData.phone);

  const handleSubmit = () => {
    const name = getName();
    const email = getEmail();

    // Only validate guest fields if not authenticated
    if (!isAuthenticated) {
      if (!name.trim()) {
        Alert.alert("Required Field", "Please enter your name.");
        return;
      }

      if (!email.trim()) {
        Alert.alert("Required Field", "Please enter your email address.");
        return;
      }

      if (!validateEmail(email.trim())) {
        Alert.alert("Invalid Email", "Please enter a valid email address.");
        return;
      }
    }

    setIsSubmitting(true);

    // Prepare submission data
    const submissionData = {
      name: name.trim(),
      email: email.trim(),
      phone: getPhone().trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };

    console.log("Submitting contact form:", submissionData);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      Alert.alert(
        "Message Sent",
        "Thank you for your message. We'll get back to you soon.",
        [
          {
            text: "OK",
            onPress: () => {
              // Reset form (only reset fields that are in state)
              setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
              });
            },
          },
        ]
      );
    }, 500);
  };

  return (
    <View className="flex-1 bg-background">
      {/*Header*/}
      <View
        className="bg-primary px-4 pb-4"
        style={{
          paddingTop: insets.top + 8,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable
            onPress={() => router.back()}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 12,
            }}
          >
            <Ionicons color={primaryForeground} name="arrow-back" size={22} />
          </Pressable>
          <Text
            className="text-primary-foreground"
            style={{
              fontSize: 20,
              fontWeight: "300",
              fontFamily: "serif",
            }}
          >
            Contact Us
          </Text>
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={0}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
          keyboardShouldPersistTaps="handled"
          style={{ flex: 1 }}
        >
          {/* Contact Info Card */}
          <View
            className="bg-surface"
            style={{
              borderRadius: 12,
              padding: 16,
              marginBottom: 20,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Text
              className="text-foreground"
              style={{
                fontSize: 16,
                fontWeight: "600",
                marginBottom: 12,
              }}
            >
              Get in Touch
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Ionicons color={accent} name="location-outline" size={18} />
              <Text
                className="text-muted"
                style={{ fontSize: 14, marginLeft: 10 }}
              >
                42 Crutched Friars, London EC3N 2AP
              </Text>
            </View>

            <Pressable
              onPress={() => Linking.openURL("tel:02071676682")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Ionicons color={accent} name="call-outline" size={18} />
              <Text
                className="text-foreground"
                style={{ fontSize: 14, marginLeft: 10 }}
              >
                020 7167 6682
              </Text>
            </Pressable>

            <Pressable
              onPress={() =>
                Linking.openURL("mailto:info@cityuniversityclub.co.uk")
              }
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Ionicons color={accent} name="mail-outline" size={18} />
              <Text
                className="text-foreground"
                style={{ fontSize: 14, marginLeft: 10 }}
              >
                info@cityuniversityclub.co.uk
              </Text>
            </Pressable>
          </View>

          {/* Contact Form */}
          <View
            className="bg-surface"
            style={{
              borderRadius: 12,
              padding: 16,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Text
              className="text-foreground"
              style={{
                fontSize: 16,
                fontWeight: "600",
                marginBottom: 16,
              }}
            >
              Send us a Message
            </Text>

            {/* Authenticated User Info */}
            {isAuthenticated && (
              <View
                className="bg-accent/15"
                style={{
                  borderRadius: 8,
                  padding: 12,
                  marginBottom: 16,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  color={accent}
                  name="person-circle-outline"
                  size={20}
                />
                <View style={{ marginLeft: 10, flex: 1 }}>
                  <Text
                    className="text-foreground"
                    style={{
                      fontSize: 14,
                      fontWeight: "500",
                    }}
                  >
                    {session.user.name || "Member"}
                  </Text>
                  <Text className="text-muted" style={{ fontSize: 13 }}>
                    {session.user.email}
                  </Text>
                </View>
              </View>
            )}

            {/* Guest Fields - Only shown when NOT authenticated */}
            {!isAuthenticated && (
              <>
                {/* Name Field */}
                <View style={{ marginBottom: 16 }}>
                  <Text
                    className="text-foreground"
                    style={{
                      fontSize: 14,
                      fontWeight: "500",
                      marginBottom: 6,
                    }}
                  >
                    Name <Text style={{ color: "#dc2626" }}>*</Text>
                  </Text>
                  <TextInput
                    className="border-border bg-surface text-foreground"
                    onChangeText={(value) => updateField("name", value)}
                    placeholder="Your full name"
                    placeholderTextColor="#999"
                    style={{
                      borderWidth: 1,
                      borderRadius: 8,
                      padding: 14,
                      fontSize: 15,
                    }}
                    value={formData.name}
                  />
                </View>

                {/* Email and Phone Row */}
                <View
                  style={{ flexDirection: "row", gap: 12, marginBottom: 16 }}
                >
                  {/* Email Field */}
                  <View style={{ flex: 1 }}>
                    <Text
                      className="text-foreground"
                      style={{
                        fontSize: 14,
                        fontWeight: "500",
                        marginBottom: 6,
                      }}
                    >
                      Email <Text style={{ color: "#dc2626" }}>*</Text>
                    </Text>
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      className="border-border bg-surface text-foreground"
                      keyboardType="email-address"
                      onChangeText={(value) => updateField("email", value)}
                      placeholder="Email address"
                      placeholderTextColor="#999"
                      style={{
                        borderWidth: 1,
                        borderRadius: 8,
                        padding: 14,
                        fontSize: 15,
                      }}
                      value={formData.email}
                    />
                  </View>

                  {/* Phone Field */}
                  <View style={{ flex: 1 }}>
                    <Text
                      className="text-foreground"
                      style={{
                        fontSize: 14,
                        fontWeight: "500",
                        marginBottom: 6,
                      }}
                    >
                      Phone
                    </Text>
                    <TextInput
                      className="border-border bg-surface text-foreground"
                      keyboardType="phone-pad"
                      onChangeText={(value) => updateField("phone", value)}
                      placeholder="Phone number"
                      placeholderTextColor="#999"
                      style={{
                        borderWidth: 1,
                        borderRadius: 8,
                        padding: 14,
                        fontSize: 15,
                      }}
                      value={formData.phone}
                    />
                  </View>
                </View>
              </>
            )}

            {/* Subject Field */}
            <View style={{ marginBottom: 16 }}>
              <Text
                className="text-foreground"
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  marginBottom: 6,
                }}
              >
                Subject
              </Text>
              <TextInput
                className="border-border bg-surface text-foreground"
                onChangeText={(value) => updateField("subject", value)}
                placeholder="What is this regarding?"
                placeholderTextColor="#999"
                style={{
                  borderWidth: 1,
                  borderRadius: 8,
                  padding: 14,
                  fontSize: 15,
                }}
                value={formData.subject}
              />
            </View>

            {/* Message Field */}
            <View style={{ marginBottom: 20 }}>
              <Text
                className="text-foreground"
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  marginBottom: 6,
                }}
              >
                Message
              </Text>
              <TextInput
                className="border-border bg-surface text-foreground"
                multiline
                numberOfLines={5}
                onChangeText={(value) => updateField("message", value)}
                placeholder="Your message..."
                placeholderTextColor="#999"
                style={{
                  borderWidth: 1,
                  borderRadius: 8,
                  padding: 14,
                  fontSize: 15,
                  height: 120,
                }}
                textAlignVertical="top"
                value={formData.message}
              />
            </View>

            {/* Submit Button */}
            <Pressable
              className="bg-primary"
              disabled={isSubmitting}
              onPress={handleSubmit}
              style={({ pressed }) => ({
                opacity: pressed || isSubmitting ? 0.8 : 1,
                borderRadius: 8,
                padding: 16,
                alignItems: "center",
                justifyContent: "center",
              })}
            >
              <Text
                className="text-primary-foreground"
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Text>
            </Pressable>
          </View>

          {/* Opening Hours */}
          <View
            className="bg-primary"
            style={{
              borderRadius: 12,
              padding: 20,
              marginTop: 20,
            }}
          >
            <Text
              className="text-primary-foreground"
              style={{
                fontSize: 16,
                fontWeight: "600",
                marginBottom: 12,
              }}
            >
              Opening Hours
            </Text>
            <Text
              className="text-primary-foreground"
              style={{ fontSize: 14, lineHeight: 22 }}
            >
              Monday to Friday{"\n"}
              9:00 AM - 5:00 PM
            </Text>
            <Text
              className="text-accent"
              style={{ fontSize: 13, marginTop: 8 }}
            >
              Lunch: 12:00 PM - Last orders 2:30 PM
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
</file>

<file path="apps/native/app/(tabs)/more/dining-room.tsx">
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useThemeColor } from "heroui-native";
import { Linking, Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Dining room image from the CUC website
const DINING_ROOM_IMAGE =
  "<https://static.wixstatic.com/media/5e0aaa_89c287ebeaca49b398ec7c86b8397a0f~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85/5e0aaa_89c287ebeaca49b398ec7c86b8397a0f~mv2.webp>";

export default function DiningRoom() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // Theme colors for Ionicons
  const foreground = useThemeColor("foreground");
  const accent = useThemeColor("accent");
  const primaryForeground = "#fffef8";

  const handleCall = () => {
    Linking.openURL("tel:02071676682");
  };

  const handleEmail = () => {
    Linking.openURL("mailto:secretary@cityuniversityclub.co.uk");
  };

  return (
    <View className="flex-1 bg-background">
      {/*Header*/}
      <View
        className="bg-primary px-5 pb-5"
        style={{
          paddingTop: insets.top + 8,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <Pressable
            onPress={() => router.back()}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons color={primaryForeground} name="arrow-back" size={22} />
          </Pressable>
          <View style={{ flex: 1 }}>
            <Text
              className="text-primary-foreground"
              style={{
                fontSize: 24,
                fontWeight: "300",
                fontFamily: "serif",
              }}
            >
              Dining Room
            </Text>
            <Text
              className="text-accent"
              style={{
                fontSize: 13,
                marginTop: 2,
              }}
            >
              A quiet haven in the heart of the City
            </Text>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 32 }}
        style={{ flex: 1 }}
      >
        {/* Hero Image */}
        <Image
          cachePolicy="memory-disk"
          contentFit="cover"
          source={{ uri: DINING_ROOM_IMAGE }}
          style={{ width: "100%", height: 220 }}
        />

        {/* Description Section */}
        <View style={{ padding: 16 }}>
          <View
            className="bg-surface"
            style={{
              borderRadius: 12,
              padding: 20,
              marginBottom: 16,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Text
              className="text-foreground"
              style={{
                fontSize: 18,
                fontWeight: "600",
                marginBottom: 12,
              }}
            >
              About Our Dining Rooms
            </Text>
            <Text
              className="text-muted"
              style={{
                fontSize: 15,
                lineHeight: 24,
              }}
            >
              The dining rooms are a quiet haven in the heart of the City of
              London for members and their guests, offering excellent food and
              superb service.
            </Text>
            <Text
              className="text-muted"
              style={{
                fontSize: 15,
                lineHeight: 24,
                marginTop: 12,
              }}
            >
              The welfare and happiness of our members and their guests is of
              paramount importance, so we will always try to cater for
              individual needs wherever possible.
            </Text>
          </View>

          {/* Opening Hours */}
          <View
            className="bg-primary"
            style={{
              borderRadius: 12,
              padding: 20,
              marginBottom: 16,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <Ionicons color={accent} name="time-outline" size={22} />
              <Text
                className="text-primary-foreground"
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                }}
              >
                Opening Hours
              </Text>
            </View>

            <View style={{ gap: 12 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  className="text-primary-foreground"
                  style={{ fontSize: 15 }}
                >
                  Lunch Service
                </Text>
                <Text className="text-accent" style={{ fontSize: 15 }}>
                  12:00 noon onwards
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  className="text-primary-foreground"
                  style={{ fontSize: 15 }}
                >
                  Last Orders
                </Text>
                <Text className="text-accent" style={{ fontSize: 15 }}>
                  2:30 PM
                </Text>
              </View>
              <View
                style={{
                  height: 1,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  marginVertical: 4,
                }}
              />
              <Text
                className="text-primary-foreground"
                style={{
                  fontSize: 13,
                  opacity: 0.8,
                  fontStyle: "italic",
                }}
              >
                Later orders available by prior arrangement with the Secretary
              </Text>
            </View>
          </View>

          {/* Services */}
          <View
            className="bg-surface"
            style={{
              borderRadius: 12,
              padding: 20,
              marginBottom: 16,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Text
              className="text-foreground"
              style={{
                fontSize: 18,
                fontWeight: "600",
                marginBottom: 16,
              }}
            >
              Our Services
            </Text>

            <View style={{ gap: 16 }}>
              <ServiceItem
                description="Start your day at the Club"
                foreground={foreground}
                icon="cafe-outline"
                title="Breakfast"
              />
              <ServiceItem
                description="Daily lunch service with seasonal menus"
                foreground={foreground}
                icon="restaurant-outline"
                title="Lunch"
              />
              <ServiceItem
                description="Pre-lunch and post-lunch drinks available"
                foreground={foreground}
                icon="wine-outline"
                title="Bar"
              />
              <ServiceItem
                description="Evening dining for special occasions"
                foreground={foreground}
                icon="moon-outline"
                title="Private Dinners"
              />
              <ServiceItem
                description="Available 7 days a week for breakfast, lunch and dinner"
                foreground={foreground}
                icon="business-outline"
                title="Private Rooms"
              />
              <ServiceItem
                description="Professional spaces for private hire"
                foreground={foreground}
                icon="people-outline"
                title="Meeting Rooms"
              />
            </View>
          </View>

          {/* Booking Information */}
          <View
            className="bg-surface"
            style={{
              borderRadius: 12,
              padding: 20,
              marginBottom: 16,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Text
              className="text-foreground"
              style={{
                fontSize: 18,
                fontWeight: "600",
                marginBottom: 12,
              }}
            >
              Make a Reservation
            </Text>
            <Text
              className="text-muted"
              style={{
                fontSize: 15,
                lineHeight: 24,
                marginBottom: 16,
              }}
            >
              Contact the Secretary to make a reservation or enquire about
              private dining and meeting room hire.
            </Text>

            <View style={{ flexDirection: "row", gap: 12 }}>
              <Pressable
                className="flex-1 bg-accent"
                onPress={handleCall}
                style={{
                  borderRadius: 8,
                  padding: 14,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <Ionicons color={foreground} name="call" size={18} />
                <Text
                  className="text-foreground"
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                  }}
                >
                  Call
                </Text>
              </Pressable>
              <Pressable
                className="flex-1 bg-primary"
                onPress={handleEmail}
                style={{
                  borderRadius: 8,
                  padding: 14,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <Ionicons color={primaryForeground} name="mail" size={18} />
                <Text
                  className="text-primary-foreground"
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                  }}
                >
                  Email
                </Text>
              </Pressable>
            </View>
          </View>

          {/* Location Note */}
          <View
            className="bg-accent/15"
            style={{
              borderRadius: 12,
              padding: 16,
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
          >
            <Ionicons color={accent} name="location" size={22} />
            <View style={{ flex: 1 }}>
              <Text
                className="text-foreground"
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                }}
              >
                42 Crutched Friars
              </Text>
              <Text
                className="text-muted"
                style={{
                  fontSize: 13,
                  marginTop: 2,
                }}
              >
                London EC3N 2AP
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function ServiceItem({
  icon,
  title,
  description,
  foreground,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  foreground: string;
}) {
  return (
    <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 12 }}>
      <View
        className="bg-primary/10"
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons color={foreground} name={icon} size={20} />
      </View>
      <View style={{ flex: 1 }}>
        <Text
          className="text-foreground"
          style={{
            fontSize: 15,
            fontWeight: "500",
          }}
        >
          {title}
        </Text>
        <Text
          className="text-muted"
          style={{
            fontSize: 13,
            marginTop: 2,
          }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
}
</file>

<file path="apps/native/app/(tabs)/more/fabric-fund.tsx">
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useThemeColor } from "heroui-native";
import { Linking, Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ExternalLinkButton } from "@/components/ExternalLinkButton";

// Image from the Fabric Fund page
const FABRIC_FUND_IMAGE =
  "<https://static.wixstatic.com/media/5e0aaa_a4f22f2a2cc743e5bb27e7cce56a0327~mv2.jpg/v1/fill/w_600,h_800,al_c,q_85,enc_avif,quality_auto/5e0aaa_a4f22f2a2cc743e5bb27e7cce56a0327~mv2.jpg>";

export default function FabricFund() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // Theme colors for Ionicons
  const foreground = useThemeColor("foreground");
  const accent = useThemeColor("accent");
  const primaryForeground = "#fffef8";

  const handleDonate = () => {
    Linking.openURL(
      "mailto:secretary@cityuniversityclub.co.uk?subject=Fabric%20Fund%20Donation"
    );
  };

  const handleCall = () => {
    Linking.openURL("tel:02078636681");
  };

  return (
    <View className="flex-1 bg-background">
      {/*Header*/}
      <View
        className="bg-primary px-4 pb-4"
        style={{
          paddingTop: insets.top + 8,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable
            onPress={() => router.back()}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 12,
            }}
          >
            <Ionicons color={primaryForeground} name="arrow-back" size={22} />
          </Pressable>
          <Text
            className="text-primary-foreground"
            style={{
              fontSize: 20,
              fontWeight: "300",
              fontFamily: "serif",
            }}
          >
            Fabric Fund
          </Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: insets.bottom + 32 }}
        style={{ flex: 1 }}
      >
        {/* Hero Image */}
        <Image
          cachePolicy="memory-disk"
          contentFit="cover"
          source={{ uri: FABRIC_FUND_IMAGE }}
          style={{
            width: "100%",
            height: 240,
          }}
        />

        {/* Main Content */}
        <View style={{ padding: 16 }}>
          {/* Title Card */}
          <View
            className="bg-surface"
            style={{
              borderRadius: 12,
              padding: 20,
              marginBottom: 16,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Text
              className="text-foreground"
              style={{
                fontSize: 24,
                fontWeight: "300",
                fontFamily: "serif",
                marginBottom: 8,
              }}
            >
              The City University Club Fabric Fund
            </Text>
            <Text
              className="text-accent"
              style={{
                fontSize: 16,
                fontStyle: "italic",
              }}
            >
              Looking forward to the next 125 years
            </Text>
          </View>

          {/* About Section */}
          <View
            className="bg-surface"
            style={{
              borderRadius: 12,
              padding: 20,
              marginBottom: 16,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Text
              className="text-foreground"
              style={{
                fontSize: 16,
                fontWeight: "600",
                marginBottom: 12,
              }}
            >
              About the Fund
            </Text>
            <Text
              className="text-muted"
              style={{
                fontSize: 15,
                lineHeight: 24,
                marginBottom: 12,
              }}
            >
              In January 2018, the City University Club moved into our new home
              at 42 Crutched Friars, leaving behind our base of over 120 years
              at 50 Cornhill.
            </Text>
            <Text
              className="text-muted"
              style={{
                fontSize: 15,
                lineHeight: 24,
                marginBottom: 12,
              }}
            >
              Since we moved in, the Club has established itself in the local
              area and the Committee has resolved to refurbish and completely
              overhaul the interior of the facilities.
            </Text>
            <Text
              className="text-muted"
              style={{
                fontSize: 15,
                lineHeight: 24,
              }}
            >
              The Committee has established the 'Fabric Fund Committee' to lead
              on fundraising and provide the Club with the resources necessary
              to complete the project and ensure we have a club ready for the
              next 125 years.
            </Text>
          </View>

          {/* Honours Board Section */}
          <View
            className="bg-primary"
            style={{
              borderRadius: 12,
              padding: 20,
              marginBottom: 16,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Ionicons color={accent} name="ribbon-outline" size={24} />
              <Text
                className="text-primary-foreground"
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  marginLeft: 10,
                }}
              >
                Members Honour Board
              </Text>
            </View>
            <Text
              className="text-primary-foreground"
              style={{
                fontSize: 15,
                lineHeight: 24,
                marginBottom: 16,
              }}
            >
              Join the Fabric Fund today and make your name known! We are
              inviting members to donate to the Club and, in return, have their
              name featured on a new 'Members Honour Board'.
            </Text>
            <View
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderRadius: 8,
                padding: 16,
                alignItems: "center",
              }}
            >
              <Text
                className="text-accent"
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  marginBottom: 4,
                }}
              >
                Contribution Amount
              </Text>
              <Text
                className="text-primary-foreground"
                style={{
                  fontSize: 32,
                  fontWeight: "300",
                  fontFamily: "serif",
                }}
              >
                £125.00
              </Text>
              <Text
                className="text-primary-foreground"
                style={{
                  fontSize: 13,
                  marginTop: 4,
                  opacity: 0.8,
                }}
              >
                Your name and year of membership displayed
              </Text>
            </View>
          </View>

          {/* How to Contribute */}
          <View
            className="bg-surface"
            style={{
              borderRadius: 12,
              padding: 20,
              marginBottom: 16,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Text
              className="text-foreground"
              style={{
                fontSize: 16,
                fontWeight: "600",
                marginBottom: 16,
              }}
            >
              How to Support Your Club
            </Text>

            <ContributionItem
              accent={accent}
              description="Donate £125 to have your name displayed"
              icon="heart-outline"
              title="Join the Honour Board"
            />
            <ContributionItem
              accent={accent}
              description="Support fundraising celebrations"
              icon="calendar-outline"
              title="Attend Club Events"
            />
            <ContributionItem
              accent={accent}
              description="Encourage fellow members to contribute"
              icon="megaphone-outline"
              isLast
              title="Spread the Word"
            />
          </View>

          {/* Contact Card */}
          <View
            className="bg-surface"
            style={{
              borderRadius: 12,
              padding: 20,
              marginBottom: 20,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Text
              className="text-foreground"
              style={{
                fontSize: 16,
                fontWeight: "600",
                marginBottom: 12,
              }}
            >
              Get in Touch
            </Text>
            <Text
              className="text-muted"
              style={{
                fontSize: 14,
                lineHeight: 22,
                marginBottom: 16,
              }}
            >
              To make a donation or learn more about the Fabric Fund, please
              contact the Club Secretary.
            </Text>

            <Pressable
              onPress={handleCall}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Ionicons color={accent} name="call-outline" size={18} />
              <Text
                className="text-foreground"
                style={{ fontSize: 14, marginLeft: 10 }}
              >
                020 7863 6681
              </Text>
            </Pressable>

            <Pressable
              onPress={handleDonate}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Ionicons color={accent} name="mail-outline" size={18} />
              <Text
                className="text-foreground"
                style={{ fontSize: 14, marginLeft: 10 }}
              >
                secretary@cityuniversityclub.co.uk
              </Text>
            </Pressable>
          </View>

          {/* Action Buttons */}
          <View style={{ gap: 12 }}>
            <Pressable
              className="bg-accent"
              onPress={handleDonate}
              style={({ pressed }) => ({
                opacity: pressed ? 0.9 : 1,
                borderRadius: 12,
                padding: 18,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
              })}
            >
              <Ionicons color={foreground} name="heart" size={22} />
              <Text
                className="text-foreground"
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  marginLeft: 10,
                }}
              >
                Enquire About Donating
              </Text>
            </Pressable>

            <ExternalLinkButton
              label="Learn More"
              url="https://www.cityuniversityclub.co.uk/about-2"
              variant="primary"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function ContributionItem({
  icon,
  title,
  description,
  isLast = false,
  accent,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  isLast?: boolean;
  accent: string;
}) {
  return (
    <View
      className="border-border"
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        borderBottomWidth: isLast ? 0 : 1,
      }}
    >
      <View
        className="bg-accent/20"
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 14,
        }}
      >
        <Ionicons color={accent} name={icon} size={20} />
      </View>
      <View style={{ flex: 1 }}>
        <Text
          className="text-foreground"
          style={{
            fontSize: 15,
            fontWeight: "500",
          }}
        >
          {title}
        </Text>
        <Text
          className="text-muted"
          style={{
            fontSize: 13,
            marginTop: 2,
          }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
}
</file>

<file path="apps/native/app/(tabs)/more/index.tsx">
import { api } from "@convoexpo-and-nextjs-web-bun-better-auth/backend/convex/_generated/api";
import { Ionicons } from "@expo/vector-icons";
import { useConvexAuth, useQuery } from "convex/react";
import { useRouter } from "expo-router";
import { useThemeColor } from "heroui-native";
import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ExternalLinkButton } from "@/components/ExternalLinkButton";
import { authClient } from "@/lib/auth-client";

// Local asset for logo
const CUC_LOGO = require("@/assets/images/city_uni_club_white.png");

// Type-safe menu routing
const MENU_ROUTES = {
  membership: "/(tabs)/more/membership",
  "dining-room": "/(tabs)/more/dining-room",
  "reciprocal-clubs": "/(tabs)/more/reciprocal-clubs",
  "fabric-fund": "/(tabs)/more/fabric-fund",
  contact: "/(tabs)/more/contact",
  about: "/(tabs)/more/about",
  newsletter: "/(tabs)/more/bugle",
} as const satisfies Record<string, `/(tabs)/more/${string}`>;

type MenuId = keyof typeof MENU_ROUTES;

const MENU_ITEMS: Array<{
  id: MenuId;
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
}> = [
  {
    id: "membership",
    icon: "card-outline",
    title: "Membership Card",
    subtitle: "View your membership details",
  },
  {
    id: "dining-room",
    icon: "restaurant-outline",
    title: "Dining Room",
    subtitle: "Information about our facilities",
  },
  {
    id: "reciprocal-clubs",
    icon: "globe-outline",
    title: "Reciprocal Clubs",
    subtitle: "450+ partner clubs worldwide",
  },
  {
    id: "fabric-fund",
    icon: "heart-outline",
    title: "Fabric Fund",
    subtitle: "Support club renovations",
  },
  {
    id: "newsletter",
    icon: "newspaper-outline",
    title: "The Bugle",
    subtitle: "Read our newsletter",
  },
  {
    id: "about",
    icon: "information-circle-outline",
    title: "About the Club",
    subtitle: "Our history since 1895",
  },
  {
    id: "contact",
    icon: "call-outline",
    title: "Contact",
    subtitle: "Get in touch",
  },
];

export default function More() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { isAuthenticated } = useConvexAuth();
  const user = useQuery(api.auth.getCurrentUser, isAuthenticated ? {} : "skip");

  // Theme colors for icons (with fallbacks)
  const foreground = useThemeColor("foreground") || "#06273a";
  const border = useThemeColor("border") || "#e5e5e5";

  const handleMenuPress = (id: MenuId) => {
    const route = MENU_ROUTES[id];
    router.push(route);
  };

  return (
    <View className="flex-1 bg-background">
      {/*Header */}
      <View
        className="bg-primary"
        style={{
          paddingTop: insets.top + 16,
          paddingBottom: 24,
          paddingHorizontal: 20,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
          {/* Logo*/}
          <View
            className="bg-accent"
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <Image
              resizeMode="contain"
              source={CUC_LOGO}
              style={{ width: 52, height: 52 }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text
              className="text-primary-foreground"
              style={{
                fontSize: 22,
                fontWeight: "300",
                fontFamily: "serif",
              }}
            >
              City University Club
            </Text>
            {isAuthenticated && user?.name && (
              <Text
                className="text-accent"
                style={{
                  fontSize: 14,
                  marginTop: 2,
                }}
              >
                {user.name}
              </Text>
            )}
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
        style={{ flex: 1 }}
      >
        {/* Quick Contact */}
        <View
          className="bg-surface"
          style={{
            borderRadius: 12,
            padding: 16,
            marginBottom: 20,
            flexDirection: "row",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              className="text-foreground"
              style={{
                fontSize: 15,
                fontWeight: "600",
              }}
            >
              42 Crutched Friars
            </Text>
            <Text className="text-muted" style={{ fontSize: 14, marginTop: 2 }}>
              London EC3N 2AP
            </Text>
            <Text
              className="text-accent"
              style={{ fontSize: 14, marginTop: 4 }}
            >
              020 7167 6682
            </Text>
          </View>
          <Pressable
            className="bg-accent"
            onPress={() => Linking.openURL("tel:02071676682")}
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons color={foreground} name="call" size={22} />
          </Pressable>
        </View>

        {/* Menu Items */}
        {MENU_ITEMS.map((item) => (
          <Pressable
            className="bg-surface"
            key={item.id}
            onPress={() => handleMenuPress(item.id)}
            style={{
              borderRadius: 12,
              padding: 16,
              marginBottom: 12,
              flexDirection: "row",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.05,
              shadowRadius: 2,
              elevation: 1,
            }}
          >
            <View
              className="bg-primary/10"
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 14,
              }}
            >
              <Ionicons color={foreground} name={item.icon} size={22} />
            </View>
            <View style={{ flex: 1 }}>
              <Text
                className="text-foreground"
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                {item.title}
              </Text>
              <Text
                className="text-muted"
                style={{ fontSize: 13, marginTop: 2 }}
              >
                {item.subtitle}
              </Text>
            </View>
            <Ionicons color={border} name="chevron-forward" size={20} />
          </Pressable>
        ))}

        {/* Opening Hours */}
        <View
          className="bg-primary"
          style={{
            borderRadius: 12,
            padding: 20,
            marginTop: 8,
            marginBottom: 16,
          }}
        >
          <Text
            className="text-primary-foreground"
            style={{
              fontSize: 16,
              fontWeight: "600",
              marginBottom: 12,
            }}
          >
            Opening Hours
          </Text>
          <Text
            className="text-primary-foreground"
            style={{ fontSize: 14, lineHeight: 22 }}
          >
            Monday to Friday{"\n"}
            9:00 AM - 5:00 PM
          </Text>
          <Text className="text-accent" style={{ fontSize: 13, marginTop: 8 }}>
            Lunch: 12:00 PM - Last orders 2:30 PM
          </Text>
        </View>

        {/* Sign Out Button */}
        {isAuthenticated && (
          <Pressable
            className="border-border bg-surface"
            onPress={() => authClient.signOut()}
            style={{
              borderRadius: 12,
              padding: 16,
              alignItems: "center",
              borderWidth: 1,
            }}
          >
            <Text style={{ color: "#dc2626", fontSize: 15, fontWeight: "500" }}>
              Sign Out
            </Text>
          </Pressable>
        )}

        {/* Website Link */}
        <View style={{ marginTop: 16 }}>
          <ExternalLinkButton
            label="Visit Our Website"
            url="https://www.cityuniversityclub.co.uk/"
            variant="subtle"
          />
        </View>
      </ScrollView>
    </View>
  );
}
</file>

<file path="apps/native/app/(tabs)/more/membership.tsx">
import { api } from "@convoexpo-and-nextjs-web-bun-better-auth/backend/convex/_generated/api";
import { Ionicons } from "@expo/vector-icons";
import { useConvexAuth, useQuery } from "convex/react";
import { useRouter } from "expo-router";
import { useThemeColor } from "heroui-native";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MembershipCard } from "@/components/MembershipCard";

export default function MembershipScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { isAuthenticated } = useConvexAuth();
  const user = useQuery(api.auth.getCurrentUser, isAuthenticated ? {} : "skip");

  // Theme colors for icons
  const foreground = useThemeColor("foreground");
  const accent = useThemeColor("accent");
  const primaryForeground = "#fffef8";

  const handleSignIn = () => {
    router.push("/(auth)/landing");
  };

  return (
    <View className="flex-1 bg-background">
      {/*Header*/}
      <View
        className="bg-primary"
        style={{
          paddingTop: insets.top + 8,
          paddingBottom: 20,
          paddingHorizontal: 16,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <Pressable
            onPress={() => router.back()}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons color={primaryForeground} name="arrow-back" size={24} />
          </Pressable>
          <Text
            className="text-primary-foreground"
            style={{
              fontSize: 24,
              fontWeight: "300",
              fontFamily: "serif",
            }}
          >
            Membership Card
          </Text>
        </View>
      </View>

      {/* Content */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 24,
        }}
      >
        {isAuthenticated ? (
          // Logged in - show membership card
          <View style={{ alignItems: "center", width: "100%" }}>
            {/* Membership Card */}
            <MembershipCard
              memberName={user?.name || "Member"}
              memberSince={
                user?._creationTime
                  ? new Date(user._creationTime).toISOString()
                  : undefined
              }
            />

            {/* Card info */}
            <View
              className="bg-surface"
              style={{
                marginTop: 32,
                borderRadius: 12,
                padding: 16,
                width: "100%",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.08,
                shadowRadius: 4,
                elevation: 2,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <View
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 22,
                    backgroundColor: `${accent}20`,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons
                    color={accent}
                    name="information-circle"
                    size={24}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    className="text-foreground"
                    style={{
                      fontSize: 15,
                      fontWeight: "500",
                      marginBottom: 2,
                    }}
                  >
                    Show at entry
                  </Text>
                  <Text className="text-muted" style={{ fontSize: 13 }}>
                    Present this card when visiting the club or reciprocal clubs
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ) : (
          // Not logged in state
          <View style={{ alignItems: "center", paddingHorizontal: 16 }}>
            <View
              className="bg-primary/10"
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
              }}
            >
              <Ionicons color={foreground} name="card" size={48} />
            </View>

            <Text
              className="text-foreground"
              style={{
                fontSize: 24,
                fontWeight: "300",
                fontFamily: "serif",
                textAlign: "center",
                marginBottom: 12,
              }}
            >
              Members Only
            </Text>

            <Text
              className="text-muted"
              style={{
                fontSize: 16,
                textAlign: "center",
                lineHeight: 24,
                marginBottom: 32,
              }}
            >
              Sign in to access your digital membership card. Show it when
              visiting the club or any of our 450+ reciprocal clubs worldwide.
            </Text>

            <Pressable
              className="bg-primary"
              onPress={handleSignIn}
              style={{
                paddingVertical: 16,
                paddingHorizontal: 48,
                borderRadius: 8,
              }}
            >
              <Text
                className="text-primary-foreground"
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                }}
              >
                Sign In
              </Text>
            </Pressable>
          </View>
        )}
      </View>

      {/* Bottom padding for safe area */}
      <View style={{ height: insets.bottom + 16 }} />
    </View>
  );
}
</file>

<file path="apps/native/app/(tabs)/more/reciprocal-clubs.tsx">
import { Ionicons } from "@expo/vector-icons";
import { useConvexAuth } from "convex/react";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useThemeColor } from "heroui-native";
import { Linking, Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ExternalLinkButton } from "@/components/ExternalLinkButton";

// Globe image from CUC website (larger size for better display)
const GLOBE_IMAGE_URL =
  "<https://static.wixstatic.com/media/5e0aaa_e35eca3738ef43d99b99e1e26df0bf16~mv2.png/v1/fill/w_640,h_536,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5e0aaa_e35eca3738ef43d99b99e1e26df0bf16~mv2.png>";

// Sample featured reciprocal clubs (for visual appeal)
const FEATURED_CLUBS = [
  {
    name: "The Arts Club",
    location: "London, UK",
    icon: "color-palette-outline" as const,
  },
  {
    name: "University Club",
    location: "New York, USA",
    icon: "school-outline" as const,
  },
  {
    name: "Australian Club",
    location: "Sydney, Australia",
    icon: "leaf-outline" as const,
  },
  {
    name: "Hong Kong Club",
    location: "Hong Kong",
    icon: "business-outline" as const,
  },
];

// Club facilities available at reciprocal clubs
const FACILITIES = [
  { icon: "bed-outline" as const, label: "Accommodation" },
  { icon: "fitness-outline" as const, label: "Gym" },
  { icon: "water-outline" as const, label: "Swimming Pool" },
  { icon: "golf-outline" as const, label: "Golf Course" },
  { icon: "tennisball-outline" as const, label: "Tennis Courts" },
  { icon: "restaurant-outline" as const, label: "Dining" },
];

export default function ReciprocalClubs() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { isAuthenticated } = useConvexAuth();

  // Theme colors for Ionicons
  const foreground = useThemeColor("foreground");
  const accent = useThemeColor("accent");
  const primaryForeground = "#fffef8";

  const handleSignIn = () => {
    router.push("/(auth)/landing");
  };

  return (
    <View className="flex-1 bg-background">
      {/*Header*/}
      <View
        className="bg-primary px-4 pb-5"
        style={{
          paddingTop: insets.top + 8,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable
            onPress={() => router.back()}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 12,
            }}
          >
            <Ionicons color={primaryForeground} name="arrow-back" size={22} />
          </Pressable>
          <Text
            className="flex-1 text-primary-foreground"
            style={{
              fontSize: 20,
              fontWeight: "300",
              fontFamily: "serif",
            }}
          >
            Reciprocal Clubs
          </Text>
          <Ionicons color={accent} name="globe-outline" size={24} />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 32 }}
        style={{ flex: 1 }}
      >
        {/* Hero Image */}
        <Image
          cachePolicy="memory-disk"
          contentFit="cover"
          source={{ uri: GLOBE_IMAGE_URL }}
          style={{ width: "100%", height: 220 }}
        />

        {/* Content Section */}
        <View style={{ padding: 16 }}>
          {/* Stats Card */}
          <View
            className="bg-surface"
            style={{
              borderRadius: 12,
              padding: 20,
              marginBottom: 16,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.08,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Text
              className="text-center text-foreground"
              style={{
                fontSize: 28,
                fontWeight: "700",
                marginBottom: 4,
              }}
            >
              450+
            </Text>
            <Text
              className="text-center text-accent"
              style={{
                fontSize: 16,
                fontWeight: "500",
                marginBottom: 12,
              }}
            >
              Reciprocal Clubs Worldwide
            </Text>
            <Text
              className="text-center text-muted"
              style={{
                fontSize: 15,
                lineHeight: 22,
              }}
            >
              The City University Club has a unique list of over 450 reciprocal
              clubs throughout the world where members will be welcomed.
            </Text>
          </View>

          {/* About Section */}
          <View
            className="bg-surface"
            style={{
              borderRadius: 12,
              padding: 20,
              marginBottom: 16,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.05,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Text
              className="text-foreground"
              style={{
                fontSize: 17,
                fontWeight: "600",
                marginBottom: 12,
              }}
            >
              World-Class Clubs
            </Text>
            <Text
              className="text-muted"
              style={{
                fontSize: 15,
                lineHeight: 24,
              }}
            >
              Many of our reciprocal clubs are renowned as being amongst the
              very finest private members' clubs in the world. As a City
              University Club member, you have access to an exclusive global
              network.
            </Text>
          </View>

          {/* Available Facilities */}
          <View
            className="bg-surface"
            style={{
              borderRadius: 12,
              padding: 20,
              marginBottom: 16,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.05,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Text
              className="text-foreground"
              style={{
                fontSize: 17,
                fontWeight: "600",
                marginBottom: 16,
              }}
            >
              Available Facilities
            </Text>
            <Text
              className="text-muted"
              style={{
                fontSize: 14,
                lineHeight: 22,
                marginBottom: 16,
              }}
            >
              Many reciprocal clubs offer accommodation and a number possess
              excellent facilities including:
            </Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              {FACILITIES.map((facility) => (
                <View
                  className="bg-primary/10"
                  key={facility.label}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 8,
                    paddingHorizontal: 12,
                    borderRadius: 20,
                    gap: 6,
                  }}
                >
                  <Ionicons color={foreground} name={facility.icon} size={16} />
                  <Text
                    className="text-foreground"
                    style={{
                      fontSize: 13,
                      fontWeight: "500",
                    }}
                  >
                    {facility.label}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Authentication-based content */}
          {isAuthenticated ? (
            // Authenticated: Show full access coming soon
            <View
              className="bg-accent"
              style={{
                borderRadius: 12,
                padding: 24,
                marginBottom: 16,
                alignItems: "center",
              }}
            >
              <Ionicons
                color={foreground}
                name="checkmark-circle"
                size={48}
                style={{ marginBottom: 12 }}
              />
              <Text
                className="text-center text-foreground"
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  marginBottom: 8,
                }}
              >
                Member Access
              </Text>
              <Text
                className="text-center text-foreground"
                style={{
                  fontSize: 15,
                  lineHeight: 22,
                  opacity: 0.85,
                }}
              >
                Full reciprocal clubs directory coming soon. In the meantime,
                you can view the complete list on our website.
              </Text>
              <View style={{ marginTop: 16 }}>
                <ExternalLinkButton
                  label="View Members' Area"
                  url="https://www.cityuniversityclub.co.uk/copy-of-reciprocal-clubs"
                  variant="primary"
                />
              </View>
            </View>
          ) : (
            // Not authenticated: Show sign in prompt
            <View
              className="border-accent bg-surface"
              style={{
                borderRadius: 12,
                padding: 24,
                marginBottom: 16,
                borderWidth: 2,
                borderStyle: "dashed",
                alignItems: "center",
              }}
            >
              <Ionicons
                color={foreground}
                name="lock-closed-outline"
                size={40}
                style={{ marginBottom: 12 }}
              />
              <Text
                className="text-center text-foreground"
                style={{
                  fontSize: 17,
                  fontWeight: "600",
                  marginBottom: 8,
                }}
              >
                Members Only
              </Text>
              <Text
                className="text-center text-muted"
                style={{
                  fontSize: 14,
                  lineHeight: 22,
                  marginBottom: 16,
                }}
              >
                Sign in to access the full directory of reciprocal clubs and
                view detailed information about each club's facilities and
                booking process.
              </Text>
              <Pressable
                className="bg-primary"
                onPress={handleSignIn}
                style={{
                  paddingVertical: 14,
                  paddingHorizontal: 32,
                  borderRadius: 8,
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Ionicons
                  color={primaryForeground}
                  name="log-in-outline"
                  size={20}
                />
                <Text
                  className="text-primary-foreground"
                  style={{
                    fontSize: 15,
                    fontWeight: "600",
                  }}
                >
                  Sign In to Access Full Details
                </Text>
              </Pressable>
            </View>
          )}

          {/* Featured Clubs Preview */}
          <View
            className="bg-surface"
            style={{
              borderRadius: 12,
              padding: 20,
              marginBottom: 16,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.05,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Text
              className="text-foreground"
              style={{
                fontSize: 17,
                fontWeight: "600",
                marginBottom: 16,
              }}
            >
              Featured Partner Clubs
            </Text>
            {FEATURED_CLUBS.map((club, index) => (
              <View
                className="border-border"
                key={club.name}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 12,
                  borderBottomWidth: index < FEATURED_CLUBS.length - 1 ? 1 : 0,
                }}
              >
                <View
                  className="bg-accent/30"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 12,
                  }}
                >
                  <Ionicons color={foreground} name={club.icon} size={20} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    className="text-foreground"
                    style={{
                      fontSize: 15,
                      fontWeight: "500",
                    }}
                  >
                    {club.name}
                  </Text>
                  <Text
                    className="text-muted"
                    style={{
                      fontSize: 13,
                      marginTop: 2,
                    }}
                  >
                    {club.location}
                  </Text>
                </View>
              </View>
            ))}
            <Text
              className="text-center text-muted"
              style={{
                fontSize: 12,
                marginTop: 12,
                fontStyle: "italic",
              }}
            >
              ...and 446+ more clubs worldwide
            </Text>
          </View>

          {/* Contact for Assistance */}
          <View
            className="bg-primary"
            style={{
              borderRadius: 12,
              padding: 20,
              alignItems: "center",
            }}
          >
            <Text
              className="text-primary-foreground"
              style={{
                fontSize: 15,
                fontWeight: "600",
                marginBottom: 8,
              }}
            >
              Need Assistance?
            </Text>
            <Text
              className="text-center text-primary-foreground"
              style={{
                fontSize: 14,
                opacity: 0.9,
                marginBottom: 12,
              }}
            >
              Contact the club for help with reciprocal club bookings
            </Text>
            <Pressable
              className="bg-accent"
              onPress={() => Linking.openURL("tel:02071676682")}
              style={{
                paddingVertical: 12,
                paddingHorizontal: 20,
                borderRadius: 8,
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Ionicons color={foreground} name="call" size={18} />
              <Text
                className="text-foreground"
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                }}
              >
                020 7167 6682
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
</file>

<file path="apps/native/app/(tabs)/_layout.tsx">
import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { useThemeColor } from "heroui-native";

export default function TabLayout() {
  const _router = useRouter();
  const accent = useThemeColor("accent");
  const primary = "#06273a";
  const primaryForeground = "#fffef8";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: primaryForeground,
        tabBarInactiveTintColor: accent,
        tabBarStyle: {
          backgroundColor: primary,
          borderTopWidth: 0,
          height: 85,
          paddingTop: 8,
          paddingBottom: 25,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} name="home-outline" size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} name="restaurant-outline" size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: "Events",
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} name="calendar-outline" size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} name="ellipsis-horizontal" size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
</file>

<file path="apps/native/app/(tabs)/index.tsx">
import { api } from "@convoexpo-and-nextjs-web-bun-better-auth/backend/convex/_generated/api";
import { useConvexAuth, useQuery } from "convex/react";
import { useRouter } from "expo-router";
import { Image, ImageBackground, Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MembershipCard } from "@/components/MembershipCard";

// Local assets for instant loading
const HERO_IMAGE = require("@/assets/images/hero-background.jpg");
const CUC_LOGO = require("@/assets/images/city_uni_club_gold.png");

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) {
    return "Good Morning,";
  }
  if (hour < 17) {
    return "Good Afternoon,";
  }
  return "Good Evening,";
}

export default function Home() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { isAuthenticated, isLoading } = useConvexAuth();
  const user = useQuery(api.auth.getCurrentUser, isAuthenticated ? {} : "skip");

  // Defense-in-depth: Don't render anything while auth is loading
  // This should rarely trigger since AuthGate handles splash visibility,
  // but protects against edge cases
  if (isLoading) {
    return null;
  }

  // If not authenticated, show landing prompt
  if (!isAuthenticated) {
    return (
      <ImageBackground
        resizeMode="cover"
        source={HERO_IMAGE}
        style={{ flex: 1 }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(6, 39, 58, 0.7)",
            paddingTop: insets.top,
          }}
        >
          {/*Header*/}
          <View className="flex-row items-center justify-between px-4 py-3">
            <View className="flex-row items-center gap-3">
              <View className="h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-transparent">
                <Image
                  resizeMode="contain"
                  source={CUC_LOGO}
                  style={{ width: 56, height: 56 }}
                />
              </View>
              <View>
                <Text className="text-accent text-base">Welcome to</Text>
                <Text
                  className="font-light text-2xl text-primary-foreground"
                  style={{ fontFamily: "serif" }}
                >
                  City University Club
                </Text>
              </View>
            </View>
          </View>

          {/* Content */}
          <View className="flex-1 items-center justify-center px-6">
            <Text
              className="mb-4 text-center font-light text-3xl text-primary-foreground"
              style={{ fontFamily: "serif" }}
            >
              Your exclusive members club
            </Text>
            <Text className="mb-8 text-center text-accent text-base">
              A lunch club in the heart of the financial area of London
            </Text>
          </View>

          {/* Membership Card Button */}
          <View className="px-6 pb-6">
            <Pressable
              className="items-center bg-primary"
              onPress={() => router.push("/(auth)/landing")}
              style={{
                paddingVertical: 16,
                paddingHorizontal: 24,
                borderRadius: 8,
              }}
            >
              <Text className="font-medium text-base text-primary-foreground">
                Sign In
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    );
  }

  const firstName = user?.name?.split[" "](0) || "Member";

  return (
    <ImageBackground resizeMode="cover" source={HERO_IMAGE} style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(6, 39, 58, 0.6)",
          paddingTop: insets.top,
        }}
      >
        {/*Header with Logo and Greeting */}
        <View className="flex-row items-center justify-between px-4 py-3">
          <View className="flex-row items-center gap-3">
            {/* Logo */}
            <View className="h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-surface">
              <Image
                resizeMode="contain"
                source={CUC_LOGO}
                style={{ width: 56, height: 56 }}
              />
            </View>
            {/* Greeting*/}
            <View>
              <Text className="text-accent text-base">{getGreeting()}</Text>
              <Text
                className="font-light text-3xl text-primary-foreground"
                style={{ fontFamily: "serif" }}
              >
                {firstName}
              </Text>
            </View>
          </View>
        </View>

        {/* Main content area with Membership Card */}
        <View className="flex-1 justify-center">
          <MembershipCard
            memberName={user?.name || "Member"}
            memberSince={
              user?._creationTime
                ? new Date(user._creationTime).toISOString()
                : undefined
            }
          />
        </View>
      </View>
    </ImageBackground>
  );
}
</file>

<file path="apps/native/app/_layout.tsx">
import "@/polyfills";
import "@/global.css";

import { ConvexBetterAuthProvider } from "@convex-dev/better-auth/react";
import { api } from "@convoexpo-and-nextjs-web-bun-better-auth/backend/convex/_generated/api";
import { env } from "@convoexpo-and-nextjs-web-bun-better-auth/env/native";
import { ConvexReactClient, useConvexAuth, useQuery } from "convex/react";
import Constants, { ExecutionEnvironment } from "expo-constants";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { HeroUINativeProvider } from "heroui-native";
import { useEffect, useState } from "react";
import { SystemBars } from "react-native-edge-to-edge";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { AppThemeProvider } from "@/contexts/app-theme-context";
import { authClient } from "@/lib/auth-client";

// Expo Go doesn't support custom splash screens (SDK 52+), so we silence errors there only
const isExpoGo =
  Constants.executionEnvironment === ExecutionEnvironment.StoreClient;

// Prevent splash screen from auto-hiding until fonts are loaded
SplashScreen.preventAutoHideAsync().catch((error) => {
  if (!isExpoGo) {
    throw error;
  }
});

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

const convex = new ConvexReactClient(env.EXPO_PUBLIC_CONVEX_URL, {
  expectAuth: true,
  unsavedChangesWarning: false,
});

/**

- Navigation Layout - Selective Auth Pattern
-
- This pattern allows:
- - Main app (tabs) accessible to everyone, authenticated or not
- - Auth screens presented as modals that can be dismissed
- - Individual screens can check auth state and show appropriate UI
-
- For the "Auth-First" pattern, see: docs/AUTH_NAVIGATION_PATTERNS.md
 */
function StackLayout() {
  return (
    <Stack screenOptions={{ animation: "fade" }}>
      {/* Main tabs - always accessible */}
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />

      {/*Auth screens - presented as fullscreen modal*/}
      <Stack.Screen
        name="(auth)"
        options={{
          headerShown: false,
          presentation: "fullScreenModal",
          animation: "fade",
        }}
      />

      <Stack.Screen
        name="modal"
        options={{ title: "Modal", presentation: "modal" }}
      />
    </Stack>
  );
}

/**

- AuthGate - Controls splash screen visibility based on auth state
-
- This component ensures the splash screen stays visible until:
- 1. Auth state is resolved (isLoading becomes false)
- 1. If authenticated, user data is preloaded
-
- This prevents the "flash" of unauthenticated UI when the app reloads
- while a user is logged in, and prevents the "Member" placeholder
- from appearing before the actual user name loads.
 */
function AuthGate({ children }: { children: React.ReactNode }) {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const [splashHidden, setSplashHidden] = useState(false);

  // Preload user data while splash is visible (only if authenticated)
  // This ensures user name is ready before we show the UI
  const user = useQuery(api.auth.getCurrentUser, isAuthenticated ? {} : "skip");

  useEffect(() => {
    // Auth must be resolved (not loading)
    const authReady = !isLoading;

    // If authenticated, wait for user data; if not authenticated, we're ready
    const userReady = !isAuthenticated || user !== undefined;

    // Only hide splash once, and only when both conditions are met
    if (authReady && userReady && !splashHidden) {
      SplashScreen.hideAsync().catch((error) => {
        if (!isExpoGo) {
          throw error;
        }
      });
      setSplashHidden(true);
    }
  }, [isLoading, isAuthenticated, user, splashHidden]);

  // Keep returning null until splash can be hidden
  // This prevents any flash of incorrect UI
  if (!splashHidden) {
    return null;
  }

  return <>{children}</>;
}

/*------------------------------- root layout ------------------------------*/
export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    "DancingScript-Regular": require("@/assets/fonts/DancingScript-Regular.ttf"),
    "DancingScript-Bold": require("@/assets/fonts/DancingScript-Bold.ttf"),
  });

  // Don't render until fonts are loaded
  // Note: SplashScreen.hideAsync() is now handled by AuthGate after auth resolves
  if (!(fontsLoaded || fontError)) {
    return null;
  }

  return (
    <ConvexBetterAuthProvider authClient={authClient} client={convex}>
      <SystemBars style="light" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <KeyboardProvider>
          <HeroUINativeProvider
            config={{
              textProps: {
                allowFontScaling: false,
              },
            }}
          >
            <AppThemeProvider>
              <AuthGate>
                <StackLayout />
              </AuthGate>
            </AppThemeProvider>
          </HeroUINativeProvider>
        </KeyboardProvider>
      </GestureHandlerRootView>
    </ConvexBetterAuthProvider>
  );
}
</file>

<file path="apps/native/app/+not-found.tsx">
import { Link, Stack } from "expo-router";
import { Button, Surface } from "heroui-native";
import { Text, View } from "react-native";

import { Container } from "@/components/container";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Not Found" }} />
      <Container>
        <View className="flex-1 items-center justify-center p-4">
          <Surface
            className="max-w-sm items-center rounded-lg p-6"
            variant="secondary"
          >
            <Text className="mb-3 text-4xl">🤔</Text>
            <Text className="mb-1 font-medium text-foreground text-lg">
              Page Not Found
            </Text>
            <Text className="mb-4 text-center text-muted text-sm">
              The page you're looking for doesn't exist.
            </Text>
            <Link asChild href="/">
              <Button size="sm">Go Home</Button>
            </Link>
          </Surface>
        </View>
      </Container>
    </>
  );
}
</file>

<file path="apps/native/app/modal.tsx">
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Button, Surface, useThemeColor } from "heroui-native";
import { Text, View } from "react-native";

import { Container } from "@/components/container";

function Modal() {
  const accentForegroundColor = useThemeColor("accent-foreground");

  function handleClose() {
    router.back();
  }

  return (
    <Container>
      <View className="flex-1 items-center justify-center p-4">
        <Surface className="w-full max-w-sm rounded-lg p-5" variant="secondary">
          <View className="items-center">
            <View className="mb-3 h-12 w-12 items-center justify-center rounded-lg bg-accent">
              <Ionicons
                color={accentForegroundColor}
                name="checkmark"
                size={24}
              />
            </View>
            <Text className="mb-1 font-medium text-foreground text-lg">
              Modal Screen
            </Text>
            <Text className="mb-4 text-center text-muted text-sm">
              This is an example modal screen for dialogs and confirmations.
            </Text>
          </View>
          <Button className="w-full" onPress={handleClose} size="sm">
            <Button.Label>Close</Button.Label>
          </Button>
        </Surface>
      </View>
    </Container>
  );
}

export default Modal;
</file>

<file path="apps/native/components/keyboard/index.ts">
export { KeyboardAwareForm } from "./KeyboardAwareForm";
</file>

<file path="apps/native/components/keyboard/KeyboardAwareForm.native.tsx">
import type { ReactNode } from "react";
import { StyleSheet } from "react-native";
import {
  KeyboardAwareScrollView,
  KeyboardToolbar,
  useKeyboardState,
} from "react-native-keyboard-controller";

interface KeyboardAwareFormProps {
  children: ReactNode;
  bottomOffset?: number;
}

export function KeyboardAwareForm({
  children,
  bottomOffset = 62,
}: KeyboardAwareFormProps) {
  // Only show toolbar when keyboard is actually visible
  const isKeyboardVisible = useKeyboardState((state) => state.isVisible);

  return (
    <>
      <KeyboardAwareScrollView
        bottomOffset={bottomOffset}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </KeyboardAwareScrollView>
      {isKeyboardVisible && <KeyboardToolbar />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 100,
    paddingBottom: 40,
    gap: 16,
  },
});
</file>

<file path="apps/native/components/keyboard/KeyboardAwareForm.tsx">
import type { ReactNode } from "react";
import { ScrollView, StyleSheet } from "react-native";

interface KeyboardAwareFormProps {
  children: ReactNode;
  bottomOffset?: number;
}

export function KeyboardAwareForm({
  children,
  bottomOffset: _bottomOffset, // Unused on web
}: KeyboardAwareFormProps) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  );
  // No KeyboardToolbar on web - browsers handle keyboard natively
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 100,
    paddingBottom: 40,
    gap: 16,
  },
});
</file>

<file path="apps/native/components/CategoryFilter.tsx">
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from "heroui-native";
import { Pressable, ScrollView, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export interface Category {
  id: string | null; // null = "All"
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

/**

- Horizontal scrollable category filter chips
-
- Usage:

- ```tsx
- const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
-
- <CategoryFilter
- categories={CATEGORIES}
- selectedCategory={selectedCategory}
- onSelectCategory={setSelectedCategory}
- />

- ```

 */
export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <View
      className="bg-background"
      style={{
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0, 0, 0, 0.06)",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          gap: 8,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((category) => (
          <CategoryChip
            category={category}
            isSelected={selectedCategory === category.id}
            key={category.id ?? "all"}
            onPress={() => onSelectCategory(category.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

function CategoryChip({
  category,
  isSelected,
  onPress,
}: {
  category: Category;
  isSelected: boolean;
  onPress: () => void;
}) {
  const scale = useSharedValue(1);
  // useThemeColor only for Ionicons (which don't support className)
  const accent = useThemeColor("accent") || "#85b09a";
  const foreground = useThemeColor("foreground") || "#06273a";

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => {
        scale.value = withSpring(0.95, { damping: 15, stiffness: 400 });
      }}
      onPressOut={() => {
        scale.value = withSpring(1, { damping: 15, stiffness: 400 });
      }}
    >
      <Animated.View style={animatedStyle}>
        <View
          className={
            isSelected
              ? "border-primary bg-primary"
              : "border-border bg-surface"
          }
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
            paddingHorizontal: 14,
            paddingVertical: 10,
            borderRadius: 20,
            borderWidth: 1,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: isSelected ? 0.1 : 0.05,
            shadowRadius: 2,
            elevation: isSelected ? 2 : 1,
          }}
        >
          <Ionicons
            color={isSelected ? accent : foreground}
            name={category.icon}
            size={16}
          />
          <Text
            className={
              isSelected ? "text-primary-foreground" : "text-foreground"
            }
            style={{
              fontSize: 14,
              fontWeight: isSelected ? "600" : "500",
            }}
          >
            {category.label}
          </Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}

// Default event categories
export const EVENT_CATEGORIES: Category[] = [
  { id: null, label: "All Events", icon: "apps-outline" },
  { id: "seasonal", label: "Seasonal", icon: "leaf-outline" },
  { id: "special", label: "Special", icon: "star-outline" },
  { id: "recurring", label: "Recurring", icon: "repeat-outline" },
];
</file>

<file path="apps/native/components/container.tsx">
import { cn } from "heroui-native";
import type { PropsWithChildren } from "react";
import { ScrollView, View, type ViewProps } from "react-native";
import Animated, { type AnimatedProps } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AnimatedView = Animated.createAnimatedComponent(View);

type Props = AnimatedProps<ViewProps> & {
  className?: string;
};

export function Container({
  children,
  className,
  ...props
}: PropsWithChildren<Props>) {
  const insets = useSafeAreaInsets();

  return (
    <AnimatedView
      className={cn("flex-1 bg-background", className)}
      style={{
        paddingBottom: insets.bottom,
      }}
      {...props}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {children}
      </ScrollView>
    </AnimatedView>
  );
}
</file>

<file path="apps/native/components/ExternalLinkButton.tsx">
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from "heroui-native";
import { Linking, Pressable, Text } from "react-native";

interface ExternalLinkButtonProps {
  label: string;
  url: string;
  variant?: "primary" | "subtle";
}

export function ExternalLinkButton({
  label,
  url,
  variant = "primary",
}: ExternalLinkButtonProps) {
  const foreground = useThemeColor("foreground");
  const primary = "#06273a";
  const primaryForeground = "#fffef8";

  const handlePress = () => {
    Linking.openURL(url);
  };

  if (variant === "subtle") {
    return (
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => ({
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 16,
          gap: 6,
          opacity: pressed ? 0.6 : 1,
        })}
      >
        <Text
          className="text-foreground"
          style={{
            fontSize: 14,
            fontWeight: "500",
          }}
        >
          {label}
        </Text>
        <Ionicons color={foreground} name="open-outline" size={16} />
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => ({
        backgroundColor: primary,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        opacity: pressed ? 0.85 : 1,
      })}
    >
      <Text
        className="text-primary-foreground"
        style={{
          fontSize: 16,
          fontWeight: "500",
        }}
      >
        {label}
      </Text>
      <Ionicons color={primaryForeground} name="open-outline" size={18} />
    </Pressable>
  );
}
</file>

<file path="apps/native/components/form.stories.tsx">
import type { Meta, StoryObj } from "@storybook/react-native";
import { useState } from "react";
import { View } from "react-native";
import { fn } from "storybook/test";
import FormHeader, {
  FormContainer,
  StyledButton,
  StyledTextInput,
} from "./form";

/*--------------------------------- StyledButton Stories ---------------------------------*/

const buttonMeta = {
  title: "Form/StyledButton",
  component: StyledButton,
  tags: ["autodocs"],
  args: {
    onPress: fn(),
    label: "Button",
    isLoading: false,
    variant: "primary",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
      description: "Visual style variant",
    },
    isLoading: {
      control: "boolean",
      description: "Loading state",
    },
  },
} satisfies Meta<typeof StyledButton>;

export default buttonMeta;

type ButtonStory = StoryObj<typeof buttonMeta>;

export const Primary: ButtonStory = {
  args: {
    label: "Sign In",
    variant: "primary",
  },
};

export const Secondary: ButtonStory = {
  args: {
    label: "Cancel",
    variant: "secondary",
  },
};

export const Tertiary: ButtonStory = {
  args: {
    label: "Forgot Password?",
    variant: "tertiary",
  },
};

export const Loading: ButtonStory = {
  args: {
    label: "Signing In...",
    variant: "primary",
    isLoading: true,
  },
};

export const AllButtonVariants: ButtonStory = {
  render: () => (
    <View style={{ gap: 12 }}>
      <StyledButton label="Primary Button" onPress={fn()} variant="primary" />
      <StyledButton
        label="Secondary Button"
        onPress={fn()}
        variant="secondary"
      />
      <StyledButton label="Tertiary Button" onPress={fn()} variant="tertiary" />
      <StyledButton
        isLoading
        label="Loading..."
        onPress={fn()}
        variant="primary"
      />
    </View>
  ),
};

/*--------------------------------- StyledTextInput Stories ---------------------------------*/

export const TextInput: StoryObj = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <StyledTextInput
        label="Email"
        onChangeText={setValue}
        placeholder="Enter your email"
        value={value}
      />
    );
  },
};

export const EmailInput: StoryObj = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <StyledTextInput
        autoCapitalize="none"
        autoComplete="email"
        keyboardType="email-address"
        label="Email Address"
        onChangeText={setValue}
        placeholder="you@example.com"
        textContentType="emailAddress"
        value={value}
      />
    );
  },
};

export const PasswordInput: StoryObj = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <StyledTextInput
        autoCapitalize="none"
        autoComplete="password"
        label="Password"
        onChangeText={setValue}
        placeholder="Enter your password"
        secureTextEntry
        textContentType="password"
        value={value}
      />
    );
  },
};

export const PrefilledInput: StoryObj = {
  render: () => {
    const [value, setValue] = useState("<john@example.com>");
    return (
      <StyledTextInput
        autoCapitalize="none"
        keyboardType="email-address"
        label="Email"
        onChangeText={setValue}
        placeholder="Enter your email"
        value={value}
      />
    );
  },
};

/*--------------------------------- FormHeader Stories ---------------------------------*/

export const Header: StoryObj = {
  render: () => (
    <FormHeader
      description="Welcome back! Please sign in to continue."
      title="Sign In"
    />
  ),
};

export const HeaderWithSubtitle: StoryObj = {
  render: () => (
    <FormHeader
      description="Create an account to access all features of the City University Club app."
      title="Create Account"
    />
  ),
};

/*--------------------------------- FormContainer Stories ---------------------------------*/

export const Container: StoryObj = {
  render: () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
      <FormContainer>
        <FormHeader
          description="Welcome back! Please sign in to continue."
          title="Sign In"
        />
        <StyledTextInput
          autoCapitalize="none"
          keyboardType="email-address"
          label="Email"
          onChangeText={setEmail}
          placeholder="you@example.com"
          value={email}
        />
        <StyledTextInput
          label="Password"
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
        />
        <StyledButton label="Sign In" onPress={fn()} variant="primary" />
        <StyledButton
          label="Forgot Password?"
          onPress={fn()}
          variant="tertiary"
        />
      </FormContainer>
    );
  },
};

/*--------------------------------- Complete Form Example ---------------------------------*/

export const SignInFormExample: StoryObj = {
  render: () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSignIn = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    };

    return (
      <View style={{ gap: 16 }}>
        <FormHeader
          description="Welcome back! Please sign in to continue."
          title="Sign In"
        />
        <StyledTextInput
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          label="Email"
          onChangeText={setEmail}
          placeholder="you@example.com"
          textContentType="emailAddress"
          value={email}
        />
        <StyledTextInput
          autoCapitalize="none"
          autoComplete="password"
          label="Password"
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
          textContentType="password"
          value={password}
        />
        <StyledButton
          isLoading={isLoading}
          label="Sign In"
          onPress={handleSignIn}
          variant="primary"
        />
        <StyledButton
          label="Need an account? Sign Up"
          onPress={fn()}
          variant="tertiary"
        />
      </View>
    );
  },
};

export const SignUpFormExample: StoryObj = {
  render: () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
      <View style={{ gap: 16 }}>
        <FormHeader
          description="Create an account to get started."
          title="Create Account"
        />
        <StyledTextInput
          autoCapitalize="words"
          autoComplete="name"
          label="Full Name"
          onChangeText={setName}
          placeholder="John Doe"
          textContentType="name"
          value={name}
        />
        <StyledTextInput
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          label="Email"
          onChangeText={setEmail}
          placeholder="you@example.com"
          textContentType="emailAddress"
          value={email}
        />
        <StyledTextInput
          autoCapitalize="none"
          autoComplete="new-password"
          label="Password"
          onChangeText={setPassword}
          placeholder="Create a password"
          secureTextEntry
          textContentType="newPassword"
          value={password}
        />
        <StyledButton label="Create Account" onPress={fn()} variant="primary" />
        <StyledButton
          label="Already have an account? Sign In"
          onPress={fn()}
          variant="tertiary"
        />
      </View>
    );
  },
};
</file>

<file path="apps/native/components/form.tsx">
import { useThemeColor } from "heroui-native";
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  type TextInputProps,
  View,
} from "react-native";

/*----------------------------- form container -----------------------------*/
export function FormContainer({ children }: { children: React.ReactNode }) {
  return (
    <View
      className="flex-1 bg-background"
      style={{
        paddingHorizontal: 24,
        paddingTop: 100,
        gap: 16,
      }}
    >
      {children}
    </View>
  );
}

/*------------------------------- form header ------------------------------*/
export default function FormHeader({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <View style={{ gap: 8, marginBottom: 8 }}>
      <Text
        className="text-foreground"
        style={{
          fontSize: 32,
          fontWeight: "300",
          fontFamily: "serif",
        }}
      >
        {title}
      </Text>
      <Text
        className="text-muted"
        style={{
          fontSize: 15,
          lineHeight: 22,
        }}
      >
        {description}
      </Text>
      {children}
    </View>
  );
}

/*----------------------------- styled text input --------------------------*/

export interface StyledTextInputProps {
  // Required props
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;

  // Optional native props
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  autoCorrect?: boolean;
  textContentType?:
    | "emailAddress"
    | "password"
    | "newPassword"
    | "name"
    | "none"
    | "oneTimeCode";
  autoComplete?:
    | "email"
    | "password"
    | "new-password"
    | "name"
    | "off"
    | "one-time-code";

  // Keyboard navigation (React 19 - ref as prop)
  ref?: React.Ref<TextInput>;
  returnKeyType?: TextInputProps["returnKeyType"];
  onSubmitEditing?: TextInputProps["onSubmitEditing"];
  blurOnSubmit?: boolean;
}

export function StyledTextInput({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  autoCorrect,
  textContentType,
  autoComplete,
  ref,
  returnKeyType,
  onSubmitEditing,
  blurOnSubmit,
}: StyledTextInputProps) {
  const muted = useThemeColor("muted");

  return (
    <View style={{ gap: 8 }}>
      <Text
        className="text-foreground"
        style={{
          fontSize: 14,
          fontWeight: "500",
        }}
      >
        {label}
      </Text>
      <TextInput
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        blurOnSubmit={blurOnSubmit}
        className="border-border bg-surface text-foreground"
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        placeholder={placeholder}
        placeholderTextColor={muted}
        ref={ref}
        returnKeyType={returnKeyType}
        secureTextEntry={secureTextEntry}
        style={{
          borderRadius: 12,
          paddingHorizontal: 16,
          paddingVertical: 16,
          fontSize: 16,
          borderWidth: 1,
        }}
        textContentType={textContentType}
        value={value}
      />
    </View>
  );
}

/*----------------------------- styled button ------------------------------*/

export interface StyledButtonProps {
  onPress: () => void;
  label: string;
  isLoading?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
}

export function StyledButton({
  onPress,
  label,
  isLoading,
  variant = "primary",
}: StyledButtonProps) {
  const foreground = useThemeColor("foreground");
  const primaryForeground = "#fffef8";

  const getClassName = () => {
    switch (variant) {
      case "secondary":
        return "bg-surface border-primary";
      case "tertiary":
        return "bg-transparent";
      default:
        return "bg-primary";
    }
  };

  const getTextClassName = () => {
    switch (variant) {
      case "secondary":
      case "tertiary":
        return "text-foreground";
      default:
        return "text-primary-foreground";
    }
  };

  const getActivityIndicatorColor = () => {
    switch (variant) {
      case "secondary":
      case "tertiary":
        return foreground;
      default:
        return primaryForeground;
    }
  };

  return (
    <Pressable
      className={getClassName()}
      disabled={isLoading}
      onPress={onPress}
      style={{
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: "center",
        opacity: isLoading ? 0.7 : 1,
        borderWidth: variant === "secondary" ? 1 : 0,
      }}
    >
      {isLoading ? (
        <ActivityIndicator color={getActivityIndicatorColor()} size="small" />
      ) : (
        <Text
          className={getTextClassName()}
          style={{
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          {label}
        </Text>
      )}
    </Pressable>
  );
}
</file>

<file path="apps/native/components/LastUsedIndicator.tsx">
import { StyleSheet, Text, View } from "react-native";

/**

- A small pill/badge component that indicates the last used login method.
- Styled similar to Vercel's "Last Used" indicator.
 */
export function LastUsedIndicator() {
  return (
    <View style={styles.pill}>
      <Text style={styles.text}>Last Used</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    backgroundColor: "rgba(59, 130, 246, 0.9)", // Blue color similar to Vercel
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    marginLeft: 8,
  },
  text: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
});
</file>

<file path="apps/native/components/MembershipCard.tsx">
import { useThemeColor } from "heroui-native";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  SensorType,
  useAnimatedSensor,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

// Card background image (without name, date, secretary)
const MEMBERSHIP_CARD_BG = require("@/assets/images/membership-card.png");

const { width: screenWidth } = Dimensions.get("window");
const CARD_WIDTH = screenWidth - 48; // 24px padding on each side
// The original card appears to have roughly 1.6:1 aspect ratio (wider than credit card)
const CARD_HEIGHT = CARD_WIDTH * 0.62;

// Animation constants
const MAX_TILT = 10; // Maximum tilt angle in degrees
const SPRING_CONFIG = {
  damping: 15,
  stiffness: 100,
  mass: 0.5,
};

interface MembershipCardProps {
  memberName: string;
  memberSince?: string;
  secretaryName?: string;
  /** Disable gyroscope animation (useful for accessibility) */
  disableAnimation?: boolean;
}

export function MembershipCard({
  memberName,
  memberSince,
  secretaryName = "H. Senanayake",
  disableAnimation = false,
}: MembershipCardProps) {
  // Theme colors with fallbacks to handle timing issue where useThemeColor may return "invalid"
  const foreground = useThemeColor("foreground") || "#06273a";
  const background = useThemeColor("background") || "#fffef8";
  const border = useThemeColor("border") || "#e5e5e5";

  // Format member since date to "Month Year" format
  const formattedDate = memberSince
    ? new Date(memberSince).toLocaleDateString("en-GB", {
        month: "long",
        year: "numeric",
      })
    : new Date().toLocaleDateString("en-GB", {
        month: "long",
        year: "numeric",
      });

  // Use rotation sensor for device orientation
  const rotationSensor = useAnimatedSensor(SensorType.ROTATION, {
    interval: "auto",
  });

  // Create animated style that responds to device tilt
  const animatedCardStyle = useAnimatedStyle(() => {
    if (disableAnimation) {
      return {
        transform: [{ perspective: 1000 }],
      };
    }

    const { pitch, roll } = rotationSensor.sensor.value;

    const pitchDegrees = pitch * (180 / Math.PI);
    const rollDegrees = roll * (180 / Math.PI);

    const rotateX = interpolate(
      pitchDegrees,
      [-45, 45],
      [MAX_TILT, -MAX_TILT],
      Extrapolation.CLAMP
    );

    const rotateY = interpolate(
      rollDegrees,
      [-45, 45],
      [-MAX_TILT, MAX_TILT],
      Extrapolation.CLAMP
    );

    return {
      transform: [
        { perspective: 1000 },
        { rotateX: withSpring(`${rotateX}deg`, SPRING_CONFIG) },
        { rotateY: withSpring(`${rotateY}deg`, SPRING_CONFIG) },
      ],
    };
  });

  // Create a subtle shadow animation that responds to tilt
  const animatedShadowStyle = useAnimatedStyle(() => {
    if (disableAnimation) {
      return {
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
      };
    }

    const { pitch, roll } = rotationSensor.sensor.value;

    const pitchDegrees = pitch * (180 / Math.PI);
    const rollDegrees = roll * (180 / Math.PI);

    const shadowX = interpolate(
      rollDegrees,
      [-45, 45],
      [6, -6],
      Extrapolation.CLAMP
    );

    const shadowY = interpolate(
      pitchDegrees,
      [-45, 45],
      [-2, 10],
      Extrapolation.CLAMP
    );

    const tiltMagnitude = Math.sqrt(
      pitchDegrees * pitchDegrees + rollDegrees * rollDegrees
    );
    const shadowOpacity = interpolate(
      tiltMagnitude,
      [0, 30],
      [0.2, 0.35],
      Extrapolation.CLAMP
    );

    return {
      shadowOffset: {
        width: withSpring(shadowX, SPRING_CONFIG),
        height: withSpring(shadowY, SPRING_CONFIG),
      },
      shadowOpacity: withSpring(shadowOpacity, SPRING_CONFIG),
    };
  });

  return (
    <Animated.View style={[styles.cardContainer, animatedShadowStyle]}>
      <Animated.View style={[styles.cardWrapper, animatedCardStyle]}>
        {/*Double border effect */}
        <View
          style={[
            styles.outerBorder,
            { borderColor: border, backgroundColor: background },
          ]}
        >
          <View style={[styles.innerBorder, { borderColor: border }]}>
            {/* Card background image*/}
            <View style={styles.cardContent}>
              <Image
                resizeMode="cover"
                source={MEMBERSHIP_CARD_BG}
                style={styles.backgroundImage}
              />

              {/* Text overlays */}
              <View style={styles.textOverlay}>
                {/* Member name - positioned below "This is to introduce" */}
                <View style={styles.nameContainer}>
                  <Text style={[styles.memberName, { color: foreground }]}>
                    {memberName.toUpperCase()}
                  </Text>
                </View>

                {/* Bottom row: Date and Secretary signature */}
                <View style={styles.bottomRow}>
                  {/* Date - bottom left, cursive style */}
                  <Text style={[styles.dateText, { color: foreground }]}>
                    {formattedDate}
                  </Text>

                  {/* Secretary signature - bottom right */}
                  <View style={styles.signatureContainer}>
                    {/* Name above the line in cursive */}
                    <Text style={[styles.secretaryName, { color: foreground }]}>
                      {secretaryName}
                    </Text>
                    {/* Line */}
                    <View
                      style={[
                        styles.signatureLine,
                        { backgroundColor: foreground },
                      ]}
                    />
                    {/* "Secretary" below the line */}
                    <Text
                      style={[styles.secretaryTitle, { color: foreground }]}
                    >
                      Secretary
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 12,
  },
  cardWrapper: {
    flex: 1,
    transformOrigin: "center",
  },
  outerBorder: {
    flex: 1,
    borderRadius: 12,
    borderWidth: 3,
    overflow: "hidden",
  },
  innerBorder: {
    flex: 1,
    margin: 3,
    borderRadius: 8,
    borderWidth: 1.5,
    overflow: "hidden",
  },
  cardContent: {
    flex: 1,
    position: "relative",
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
  textOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "space-between",
    padding: 16,
    paddingTop: CARD_HEIGHT * 0.52, // Position below "This is to introduce"
    paddingBottom: 12,
  },
  nameContainer: {
    alignItems: "center",
  },
  memberName: {
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 2,
    fontFamily: "serif",
    textAlign: "center",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  dateText: {
    fontSize: 16,
    fontFamily: "DancingScript-Regular",
  },
  signatureContainer: {
    alignItems: "center",
  },
  secretaryName: {
    fontSize: 14,
    fontFamily: "DancingScript-Regular",
    marginBottom: 2,
  },
  signatureLine: {
    width: 80,
    height: 1,
  },
  secretaryTitle: {
    fontSize: 10,
    fontFamily: "serif",
    marginTop: 2,
  },
});

export default MembershipCard;
</file>

<file path="apps/native/components/screens.stories.tsx">
import { Ionicons } from "@expo/vector-icons";
import type { StoryObj } from "@storybook/react-native";
import { Image } from "expo-image";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { fn } from "storybook/test";
import { CategoryFilter, EVENT_CATEGORIES } from "./CategoryFilter";
import { ExternalLinkButton } from "./ExternalLinkButton";
import FormHeader, {
  FormContainer,
  StyledButton,
  StyledTextInput,
} from "./form";

/*--------------------------------- Sign In Screen ---------------------------------*/

export default {
  title: "Screens",
};

export const SignInScreen: StoryObj = {
  render: () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSignIn = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    };

    return (
      <FormContainer>
        <FormHeader
          description="Sign in to access your membership and exclusive club features"
          title="Welcome Back"
        />

        <StyledTextInput
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          label="Email Address"
          onChangeText={setEmail}
          placeholder="Enter your email"
          textContentType="emailAddress"
          value={email}
        />

        <StyledTextInput
          autoComplete="password"
          label="Password"
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
          textContentType="password"
          value={password}
        />

        <View style={{ marginTop: 8 }}>
          <StyledButton
            isLoading={isLoading}
            label="Sign In"
            onPress={handleSignIn}
          />
        </View>

        <Pressable style={{ alignSelf: "center", paddingVertical: 8 }}>
          <Text
            className="text-accent"
            style={{
              fontSize: 14,
              fontWeight: "500",
            }}
          >
            Forgot Password?
          </Text>
        </Pressable>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 24,
            gap: 4,
          }}
        >
          <Text className="text-muted" style={{ fontSize: 14 }}>
            Don't have an account?
          </Text>
          <Pressable>
            <Text
              className="text-accent"
              style={{
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              Sign Up
            </Text>
          </Pressable>
        </View>
      </FormContainer>
    );
  },
};

/*--------------------------------- Sign Up Screen ---------------------------------*/

export const SignUpScreen: StoryObj = {
  render: () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSignUp = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    };

    return (
      <FormContainer>
        <FormHeader
          description="Join City University Club and enjoy exclusive member benefits"
          title="Create Account"
        />

        <StyledTextInput
          autoCapitalize="words"
          autoComplete="name"
          label="Full Name"
          onChangeText={setName}
          placeholder="Enter your full name"
          textContentType="name"
          value={name}
        />

        <StyledTextInput
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          label="Email Address"
          onChangeText={setEmail}
          placeholder="Enter your email"
          textContentType="emailAddress"
          value={email}
        />

        <StyledTextInput
          autoComplete="new-password"
          label="Password"
          onChangeText={setPassword}
          placeholder="Create a password"
          secureTextEntry
          textContentType="newPassword"
          value={password}
        />

        <StyledTextInput
          autoComplete="new-password"
          label="Confirm Password"
          onChangeText={setConfirmPassword}
          placeholder="Confirm your password"
          secureTextEntry
          textContentType="newPassword"
          value={confirmPassword}
        />

        <View style={{ marginTop: 8 }}>
          <StyledButton
            isLoading={isLoading}
            label="Create Account"
            onPress={handleSignUp}
          />
        </View>

        <Text
          className="text-center text-muted"
          style={{
            fontSize: 13,
            lineHeight: 20,
            paddingHorizontal: 20,
          }}
        >
          By signing up, you agree to our{" "}
          <Text
            className="text-foreground"
            style={{ textDecorationLine: "underline" }}
          >
            Terms of Service
          </Text>{" "}
          and{" "}
          <Text
            className="text-foreground"
            style={{ textDecorationLine: "underline" }}
          >
            Privacy Policy
          </Text>
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 8,
            gap: 4,
          }}
        >
          <Text className="text-muted" style={{ fontSize: 14 }}>
            Already have an account?
          </Text>
          <Pressable>
            <Text
              className="text-accent"
              style={{
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              Sign In
            </Text>
          </Pressable>
        </View>
      </FormContainer>
    );
  },
};

/*--------------------------------- Reset Password Screen ---------------------------------*/

export const ResetPasswordScreen: StoryObj = {
  render: () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleReset = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 2000);
    };

    return (
      <FormContainer>
        <FormHeader
          description="Enter your new password to complete the reset"
          title="New Password"
        />

        <StyledTextInput
          autoComplete="new-password"
          label="New Password"
          onChangeText={setPassword}
          placeholder="Enter your new password"
          secureTextEntry
          textContentType="newPassword"
          value={password}
        />

        <StyledTextInput
          autoComplete="new-password"
          label="Confirm Password"
          onChangeText={setConfirmPassword}
          placeholder="Confirm your new password"
          secureTextEntry
          textContentType="newPassword"
          value={confirmPassword}
        />

        <View style={{ marginTop: 8 }}>
          <StyledButton
            isLoading={isLoading}
            label="Reset Password"
            onPress={handleReset}
          />
        </View>
      </FormContainer>
    );
  },
};

/*--------------------------------- Invalid Link Screen ---------------------------------*/

export const InvalidLinkScreen: StoryObj = {
  render: () => (
    <View
      className="bg-background"
      style={{
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 24,
      }}
    >
      <View style={{ alignItems: "center", marginBottom: 32 }}>
        <Text
          className="text-center text-foreground"
          style={{
            fontSize: 28,
            fontWeight: "300",
            fontFamily: "serif",
            marginBottom: 12,
          }}
        >
          Invalid Link
        </Text>
        <Text
          className="text-center text-muted"
          style={{
            fontSize: 15,
            lineHeight: 22,
          }}
        >
          This reset link has expired or is invalid. Please request a new one.
        </Text>
      </View>
      <Pressable
        className="bg-primary"
        style={{
          borderRadius: 12,
          paddingVertical: 16,
          alignItems: "center",
        }}
      >
        <Text
          className="text-primary-foreground"
          style={{
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Back to Sign In
        </Text>
      </Pressable>
    </View>
  ),
};

/*--------------------------------- Events List Screen ---------------------------------*/

const SAMPLE_EVENTS = [
  {
    id: "christmas-lunch-2025",
    title: "Christmas Lunch",
    description: "Enjoy our special festive menu in the Main Dining Room",
    dateRange: "1st - 23rd December",
    type: "seasonal",
    image:
      "https://static.wixstatic.com/media/11062b_7daf34b38d874071a1001caa9dde798f~mv2_d_5616_3744_s_4_2.jpg/v1/fill/w_400,h_300,al_c,q_80/11062b_7daf34b38d874071a1001caa9dde798f~mv2_d_5616_3744_s_4_2.webp",
  },
  {
    id: "wine-tasting",
    title: "Wine Tasting Evening",
    description: "Sample fine wines from our cellar with expert guidance",
    dateRange: "Monthly",
    type: "recurring",
    image:
      "https://static.wixstatic.com/media/da00a6_52bcb81f629b40c383a2f1a09aa1d97e~mv2.jpg/v1/fill/w_400,h_300,al_c,q_80/da00a6_52bcb81f629b40c383a2f1a09aa1d97e~mv2.webp",
  },
];

export const EventsListScreen: StoryObj = {
  render: () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
      null
    );

    const filteredEvents = selectedCategory
      ? SAMPLE_EVENTS.filter((event) => event.type === selectedCategory)
      : SAMPLE_EVENTS;

    return (
      <View className="flex-1 bg-background">
        {/* Header */}
        <View
          className="bg-primary"
          style={{
            paddingTop: 60,
            paddingBottom: 20,
            paddingHorizontal: 20,
          }}
        >
          <Text
            className="text-primary-foreground"
            style={{
              fontSize: 28,
              fontWeight: "300",
              fontFamily: "serif",
            }}
          >
            Events
          </Text>
          <Text
            className="text-accent"
            style={{
              fontSize: 14,
              marginTop: 4,
            }}
          >
            Upcoming events at City University Club
          </Text>
        </View>

        {/* Category Filter */}
        <CategoryFilter
          categories={EVENT_CATEGORIES}
          onSelectCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />

        <ScrollView
          contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
          style={{ flex: 1 }}
        >
          {filteredEvents.length === 0 ? (
            <View
              style={{
                padding: 32,
                alignItems: "center",
              }}
            >
              <Ionicons color="#85b09a" name="calendar-outline" size={48} />
              <Text
                className="text-foreground"
                style={{
                  fontSize: 16,
                  marginTop: 16,
                  textAlign: "center",
                }}
              >
                No events found in this category
              </Text>
              <Pressable
                className="bg-accent"
                onPress={() => setSelectedCategory(null)}
                style={{
                  marginTop: 12,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderRadius: 8,
                }}
              >
                <Text
                  className="text-foreground"
                  style={{
                    fontWeight: "500",
                  }}
                >
                  View All Events
                </Text>
              </Pressable>
            </View>
          ) : (
            filteredEvents.map((event, index) => (
              <EventCardStory
                event={event}
                featured={index === 0 && selectedCategory === null}
                key={event.id}
              />
            ))
          )}

          {/* View Website Link */}
          <ExternalLinkButton
            label="View All Events"
            url="https://www.cityuniversityclub.co.uk/events"
            variant="subtle"
          />
        </ScrollView>
      </View>
    );
  },
};

/*Helper component for event card in stories*/
function EventCardStory({
  event,
  featured,
}: {
  event: [typeof SAMPLE_EVENTS](0);
  featured?: boolean;
}) {
  return (
    <Pressable
      className={featured ? "bg-primary" : "bg-surface"}
      style={{
        borderRadius: 12,
        marginBottom: 16,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <Image
        contentFit="cover"
        source={event.image}
        style={{ width: "100%", height: 160 }}
        transition={200}
      />

      <View style={{ padding: 16 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              className={
                featured ? "text-primary-foreground" : "text-foreground"
              }
              style={{
                fontSize: 18,
                fontWeight: "600",
                marginBottom: 4,
              }}
            >
              {event.title}
            </Text>
            <Text
              className={featured ? "text-accent" : "text-muted"}
              style={{
                fontSize: 14,
                lineHeight: 20,
              }}
            >
              {event.description}
            </Text>
          </View>
          {featured && (
            <View
              className="bg-accent"
              style={{
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 12,
                marginLeft: 8,
              }}
            >
              <Text
                className="text-foreground"
                style={{
                  fontSize: 11,
                  fontWeight: "600",
                }}
              >
                Featured
              </Text>
            </View>
          )}
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <Ionicons
              color={featured ? "#85b09a" : "#666666"}
              name="calendar-outline"
              size={16}
            />
            <Text
              className={featured ? "text-accent" : "text-muted"}
              style={{
                fontSize: 13,
              }}
            >
              {event.dateRange}
            </Text>
          </View>

          <View
            className={featured ? "bg-primary-foreground" : "bg-primary"}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 6,
            }}
          >
            <Text
              className={featured ? "text-primary" : "text-primary-foreground"}
              style={{
                fontSize: 13,
                fontWeight: "500",
              }}
            >
              RSVP
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

/*--------------------------------- Empty Events State ---------------------------------*/

export const EventsEmptyState: StoryObj = {
  render: () => (
    <View className="flex-1 bg-background">
      {/*Header*/}
      <View
        className="bg-primary"
        style={{
          paddingTop: 60,
          paddingBottom: 20,
          paddingHorizontal: 20,
        }}
      >
        <Text
          className="text-primary-foreground"
          style={{
            fontSize: 28,
            fontWeight: "300",
            fontFamily: "serif",
          }}
        >
          Events
        </Text>
        <Text
          className="text-accent"
          style={{
            fontSize: 14,
            marginTop: 4,
          }}
        >
          Upcoming events at City University Club
        </Text>
      </View>

      {/* Category Filter with selection */}
      <CategoryFilter
        categories={EVENT_CATEGORIES}
        onSelectCategory={fn()}
        selectedCategory="special"
      />

      {/* Empty State */}
      <View
        style={{
          flex: 1,
          padding: 32,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons color="#85b09a" name="calendar-outline" size={48} />
        <Text
          className="text-foreground"
          style={{
            fontSize: 16,
            marginTop: 16,
            textAlign: "center",
          }}
        >
          No events found in this category
        </Text>
        <Pressable
          className="bg-accent"
          style={{
            marginTop: 12,
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 8,
          }}
        >
          <Text
            className="text-foreground"
            style={{
              fontWeight: "500",
            }}
          >
            View All Events
          </Text>
        </Pressable>
      </View>
    </View>
  ),
};
</file>

<file path="apps/native/components/sign-in.tsx">
import { Button, ErrorView, Spinner, Surface, TextField } from "heroui-native";
import { useState } from "react";
import { Text, View } from "react-native";
import { authClient } from "@/lib/auth-client";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setIsLoading(true);
    setError(null);

    await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onError: (error) => {
          setError(error.error?.message || "Failed to sign in");
          setIsLoading(false);
        },
        onSuccess: () => {
          setEmail("");
          setPassword("");
        },
        onFinished: () => {
          setIsLoading(false);
        },
      }
    );
  };

  return (
    <Surface className="rounded-lg p-4" variant="secondary">
      <Text className="mb-4 font-medium text-foreground">Sign In</Text>

      <ErrorView className="mb-3" isInvalid={!!error}>
        {error}
      </ErrorView>

      <View className="gap-3">
        <TextField>
          <TextField.Label>Email</TextField.Label>
          <TextField.Input
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={setEmail}
            placeholder="email@example.com"
            textContentType="emailAddress"
            value={email}
          />
        </TextField>

        <TextField>
          <TextField.Label>Password</TextField.Label>
          <TextField.Input
            onChangeText={setPassword}
            placeholder="••••••••"
            secureTextEntry
            value={password}
          />
        </TextField>

        <Button className="mt-1" isDisabled={isLoading} onPress={handleLogin}>
          {isLoading ? (
            <Spinner color="default" size="sm" />
          ) : (
            <Button.Label>Sign In</Button.Label>
          )}
        </Button>
      </View>
    </Surface>
  );
}
</file>

<file path="apps/native/components/sign-up.tsx">
import { Button, ErrorView, Spinner, Surface, TextField } from "heroui-native";
import { useState } from "react";
import { Text, View } from "react-native";
import { authClient } from "@/lib/auth-client";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async () => {
    setIsLoading(true);
    setError(null);

    await authClient.signUp.email(
      {
        name,
        email,
        password,
      },
      {
        onError: (error) => {
          setError(error.error?.message || "Failed to sign up");
          setIsLoading(false);
        },
        onSuccess: () => {
          setName("");
          setEmail("");
          setPassword("");
        },
        onFinished: () => {
          setIsLoading(false);
        },
      }
    );
  };

  return (
    <Surface className="rounded-lg p-4" variant="secondary">
      <Text className="mb-4 font-medium text-foreground">Create Account</Text>

      <ErrorView className="mb-3" isInvalid={!!error}>
        {error}
      </ErrorView>

      <View className="gap-3">
        <TextField>
          <TextField.Label>Name</TextField.Label>
          <TextField.Input
            onChangeText={setName}
            placeholder="John Doe"
            value={name}
          />
        </TextField>

        <TextField>
          <TextField.Label>Email</TextField.Label>
          <TextField.Input
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={setEmail}
            placeholder="email@example.com"
            textContentType="emailAddress"
            value={email}
          />
        </TextField>

        <TextField>
          <TextField.Label>Password</TextField.Label>
          <TextField.Input
            onChangeText={setPassword}
            placeholder="••••••••"
            secureTextEntry
            value={password}
          />
        </TextField>

        <Button className="mt-1" isDisabled={isLoading} onPress={handleSignUp}>
          {isLoading ? (
            <Spinner color="default" size="sm" />
          ) : (
            <Button.Label>Create Account</Button.Label>
          )}
        </Button>
      </View>
    </Surface>
  );
}
</file>

<file path="apps/native/components/theme-toggle.tsx">
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Platform, Pressable } from "react-native";
import Animated, { FadeOut, ZoomIn } from "react-native-reanimated";
import { withUniwind } from "uniwind";
import { useAppTheme } from "@/contexts/app-theme-context";

const StyledIonicons = withUniwind(Ionicons);

export function ThemeToggle() {
  const { toggleColorScheme, isLight } = useAppTheme();

  return (
    <Pressable
      className="px-2.5"
      onPress={() => {
        if (Platform.OS === "ios") {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        toggleColorScheme();
      }}
    >
      {isLight ? (
        <Animated.View entering={ZoomIn} exiting={FadeOut} key="moon">
          <StyledIonicons className="text-foreground" name="moon" size={20} />
        </Animated.View>
      ) : (
        <Animated.View entering={ZoomIn} exiting={FadeOut} key="sun">
          <StyledIonicons className="text-foreground" name="sunny" size={20} />
        </Animated.View>
      )}
    </Pressable>
  );
}
</file>

<file path="apps/native/components/ui.stories.tsx">
import type { Meta, StoryObj } from "@storybook/react-native";
import { useState } from "react";
import { Text, View } from "react-native";
import { fn } from "storybook/test";
import {
  type Category,
  CategoryFilter,
  EVENT_CATEGORIES,
} from "./CategoryFilter";
import { Container } from "./container";
import { ExternalLinkButton } from "./ExternalLinkButton";
import { LastUsedIndicator } from "./LastUsedIndicator";
import { MembershipCard } from "./MembershipCard";
import { ThemeToggle } from "./theme-toggle";

/*--------------------------------- CategoryFilter Stories ---------------------------------*/

const categoryFilterMeta = {
  title: "UI/CategoryFilter",
  component: CategoryFilter,
  tags: ["autodocs"],
  args: {
    categories: EVENT_CATEGORIES,
    selectedCategory: null,
    onSelectCategory: fn(),
  },
} satisfies Meta<typeof CategoryFilter>;

export default categoryFilterMeta;

type CategoryFilterStory = StoryObj<typeof categoryFilterMeta>;

export const DefaultCategories: CategoryFilterStory = {
  render: () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
      null
    );

    return (
      <CategoryFilter
        categories={EVENT_CATEGORIES}
        onSelectCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
    );
  },
};

export const WithSelection: CategoryFilterStory = {
  render: () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
      "seasonal"
    );

    return (
      <CategoryFilter
        categories={EVENT_CATEGORIES}
        onSelectCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
    );
  },
};

const MENU_CATEGORIES: Category[] = [
  { id: null, label: "All", icon: "restaurant-outline" },
  { id: "starters", label: "Starters", icon: "leaf-outline" },
  { id: "mains", label: "Mains", icon: "fish-outline" },
  { id: "desserts", label: "Desserts", icon: "ice-cream-outline" },
  { id: "drinks", label: "Drinks", icon: "wine-outline" },
];

export const CustomCategories: CategoryFilterStory = {
  render: () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
      null
    );

    return (
      <CategoryFilter
        categories={MENU_CATEGORIES}
        onSelectCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
    );
  },
};

/*--------------------------------- MembershipCard Stories ---------------------------------*/

export const MembershipCardDefault: StoryObj = {
  render: () => (
    <MembershipCard
      disableAnimation
      memberName="John Smith"
      memberSince="2024-01-15"
      secretaryName="H. Senanayake"
    />
  ),
};

export const MembershipCardLongName: StoryObj = {
  render: () => (
    <MembershipCard
      disableAnimation
      memberName="Sir Charles Montgomery Burns"
      memberSince="2020-06-01"
    />
  ),
};

export const MembershipCardRecentMember: StoryObj = {
  render: () => (
    <MembershipCard
      disableAnimation
      memberName="Alice Johnson"
      memberSince={new Date().toISOString()}
    />
  ),
};

/*--------------------------------- ExternalLinkButton Stories ---------------------------------*/

export const ExternalLinkPrimary: StoryObj = {
  render: () => (
    <ExternalLinkButton
      label="Visit Website"
      url="https://example.com"
      variant="primary"
    />
  ),
};

export const ExternalLinkSubtle: StoryObj = {
  render: () => (
    <ExternalLinkButton
      label="View Full Menu"
      url="https://example.com/menu"
      variant="subtle"
    />
  ),
};

export const AllExternalLinkVariants: StoryObj = {
  render: () => (
    <View style={{ gap: 16 }}>
      <ExternalLinkButton
        label="Book a Table"
        url="https://example.com"
        variant="primary"
      />
      <ExternalLinkButton
        label="View Location"
        url="https://maps.google.com"
        variant="subtle"
      />
    </View>
  ),
};

/*--------------------------------- LastUsedIndicator Stories ---------------------------------*/

export const LastUsedIndicatorDefault: StoryObj = {
  render: () => (
    <View style={{ flexDirection: "row", alignItems: "center", padding: 16 }}>
      <Text className="text-foreground" style={{ fontSize: 16 }}>
        Sign in with Google
      </Text>
      <LastUsedIndicator />
    </View>
  ),
};

export const LastUsedIndicatorInContext: StoryObj = {
  render: () => (
    <View style={{ gap: 12 }}>
      <View
        className="border-border bg-surface"
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 16,
          borderRadius: 12,
          borderWidth: 1,
        }}
      >
        <Text className="text-foreground" style={{ fontSize: 16, flex: 1 }}>
          Continue with Apple
        </Text>
        <LastUsedIndicator />
      </View>
      <View
        className="border-border bg-surface"
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 16,
          borderRadius: 12,
          borderWidth: 1,
        }}
      >
        <Text className="text-foreground" style={{ fontSize: 16, flex: 1 }}>
          Continue with Google
        </Text>
      </View>
      <View
        className="border-border bg-surface"
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 16,
          borderRadius: 12,
          borderWidth: 1,
        }}
      >
        <Text className="text-foreground" style={{ fontSize: 16, flex: 1 }}>
          Continue with Email
        </Text>
      </View>
    </View>
  ),
};

/*--------------------------------- Container Stories ---------------------------------*/

export const ContainerDefault: StoryObj = {
  render: () => (
    <Container>
      <View style={{ padding: 16, gap: 16 }}>
        <Text
          className="text-foreground"
          style={{ fontSize: 24, fontWeight: "bold" }}
        >
          Container Component
        </Text>
        <Text className="text-muted" style={{ fontSize: 16, lineHeight: 24 }}>
          The Container component provides consistent padding, safe area insets,
          and a scrollable content area for screens.
        </Text>
        <View
          className="border-border bg-surface"
          style={{ padding: 16, borderRadius: 12, borderWidth: 1 }}
        >
          <Text className="text-foreground">
            This content is wrapped in a Card-like view inside the Container.
          </Text>
        </View>
      </View>
    </Container>
  ),
};

/*--------------------------------- ThemeToggle Stories ---------------------------------*/

export const ThemeToggleDefault: StoryObj = {
  render: () => (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
      <Text className="text-foreground" style={{ fontSize: 16 }}>
        Toggle Theme:
      </Text>
      <ThemeToggle />
    </View>
  ),
};

export const ThemeToggleInHeader: StoryObj = {
  render: () => (
    <View
      className="border-border bg-surface"
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
      }}
    >
      <Text
        className="text-foreground"
        style={{ fontSize: 18, fontWeight: "600" }}
      >
        Settings
      </Text>
      <ThemeToggle />
    </View>
  ),
};

/*--------------------------------- Combined UI Showcase ---------------------------------*/

export const UIShowcase: StoryObj = {
  render: () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
      null
    );

    return (
      <View style={{ gap: 24 }}>
        <View>
          <Text
            className="text-foreground"
            style={{ fontSize: 20, fontWeight: "bold", marginBottom: 12 }}
          >
            Category Filter
          </Text>
          <CategoryFilter
            categories={EVENT_CATEGORIES}
            onSelectCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        </View>

        <View>
          <Text
            className="text-foreground"
            style={{ fontSize: 20, fontWeight: "bold", marginBottom: 12 }}
          >
            Membership Card
          </Text>
          <MembershipCard
            disableAnimation
            memberName="John Smith"
            memberSince="2024-01-15"
          />
        </View>

        <View>
          <Text
            className="text-foreground"
            style={{ fontSize: 20, fontWeight: "bold", marginBottom: 12 }}
          >
            External Links
          </Text>
          <View style={{ gap: 12 }}>
            <ExternalLinkButton
              label="Visit Website"
              url="https://example.com"
              variant="primary"
            />
            <ExternalLinkButton
              label="View Location"
              url="https://maps.google.com"
              variant="subtle"
            />
          </View>
        </View>

        <View>
          <Text
            className="text-foreground"
            style={{ fontSize: 20, fontWeight: "bold", marginBottom: 12 }}
          >
            Last Used Indicator
          </Text>
          <View
            className="border-border bg-surface"
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 16,
              borderRadius: 12,
              borderWidth: 1,
            }}
          >
            <Text className="text-foreground" style={{ fontSize: 16, flex: 1 }}>
              Sign in with Apple
            </Text>
            <LastUsedIndicator />
          </View>
        </View>

        <View>
          <Text
            className="text-foreground"
            style={{ fontSize: 20, fontWeight: "bold", marginBottom: 12 }}
          >
            Theme Toggle
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
            <Text className="text-foreground" style={{ fontSize: 16 }}>
              Toggle Theme:
            </Text>
            <ThemeToggle />
          </View>
        </View>
      </View>
    );
  },
};
</file>

<file path="apps/native/contexts/app-theme-context.tsx">
import type React from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { Uniwind, useUniwind } from "uniwind";

interface AppThemeContextType {
  colorScheme: "light" | "dark";
  isLight: boolean;
  isDark: boolean;
  setColorScheme: (scheme: "light" | "dark" | "system") => void;
  toggleColorScheme: () => void;
}

const AppThemeContext = createContext<AppThemeContextType | undefined>(
  undefined
);

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { theme, hasAdaptiveThemes } = useUniwind();
  const colorScheme = theme as "light" | "dark";
  const isLight = colorScheme === "light";
  const isDark = colorScheme === "dark";

  // Enable system theme on mount (Apple HIG compliance - follow device settings)
  useEffect(() => {
    Uniwind.setTheme("system");
  }, []);

  const setColorScheme = useCallback(
    (newScheme: "light" | "dark" | "system") => {
      Uniwind.setTheme(newScheme);
    },
    []
  );

  const toggleColorScheme = useCallback(() => {
    // If using system theme, switch to the opposite of current
    // Otherwise toggle between light and dark
    if (hasAdaptiveThemes) {
      Uniwind.setTheme(colorScheme === "light" ? "dark" : "light");
    } else {
      Uniwind.setTheme(colorScheme === "light" ? "dark" : "light");
    }
  }, [colorScheme, hasAdaptiveThemes]);

  const value = useMemo(
    () => ({
      colorScheme,
      isLight,
      isDark,
      setColorScheme,
      toggleColorScheme,
    }),
    [colorScheme, isLight, isDark, setColorScheme, toggleColorScheme]
  );

  return (
    <AppThemeContext.Provider value={value}>
      {children}
    </AppThemeContext.Provider>
  );
};

export function useAppTheme() {
  const context = useContext(AppThemeContext);
  if (!context) {
    throw new Error("useAppTheme must be used within AppThemeProvider");
  }
  return context;
}
</file>

<file path="apps/native/hooks/useNavigationOptions.ts">
import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { useThemeColor } from "heroui-native";
import { useMemo } from "react";
import { Platform } from "react-native";

export const useNavigationOptions = () => {
  const background = useThemeColor("background");
  const foreground = useThemeColor("foreground");

  return useMemo(() => {
    const root: NativeStackNavigationOptions = {
      contentStyle: {
        backgroundColor: background,
      },
    };

    const base: NativeStackNavigationOptions = {
      headerTintColor: foreground,
      headerTitleAlign: "center",
      headerLargeTitleShadowVisible: false,
      headerLargeTitleStyle: {
        color: foreground,
      },
      headerShadowVisible: false,
      contentStyle: { backgroundColor: background },
    };

    return {
      root,
      standard: {
        ...base,
        headerStyle: {
          backgroundColor: Platform.OS === "ios" ? "transparent" : background,
        },
        headerTransparent: Platform.OS === "ios",
      },
      modal: {
        ...base,
        headerStyle: {
          backgroundColor: Platform.OS === "ios" ? "transparent" : background,
        },
      },
    };
  }, [background, foreground]);
};
</file>

<file path="apps/native/lib/oauth/index.ts">
export { useAppleAuth } from "./useAppleAuth";
export { useGitHubAuth } from "./useGitHubAuth";
export { useGoogleAuth } from "./useGoogleAuth";
</file>

<file path="apps/native/lib/oauth/useAppleAuth.ts">
import * as AppleAuthentication from "expo-apple-authentication";
import { useState } from "react";
import { authClient } from "../auth-client";

export const useAppleAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async () => {
    setIsLoading(true);
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      if (!credential.identityToken) {
        throw new Error("Failed to get Apple identity token");
      }

      await authClient.signIn.social({
        provider: "apple",
        idToken: {
          token: credential.identityToken,
          nonce: credential.authorizationCode ?? undefined,
          accessToken: credential.identityToken,
        },
      });
      // Navigation handled by (auth)/_layout.tsx when auth state changes
    } catch (error) {
      // Handle Apple Authentication errors (user cancelled, etc.)
      console.error("Apple sign in error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    signIn,
    isLoading,
  };
};
</file>

<file path="apps/native/lib/oauth/useGitHubAuth.ts">
import { useState } from "react";
import { authClient } from "../auth-client";

export const useGitHubAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async () => {
    setIsLoading(true);
    try {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
      });
      // OAuth redirect initiated - browser will open
      // Navigation handled by (auth)/_layout.tsx when auth completes via deep link
    } catch (error) {
      console.error("GitHub sign in error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    signIn,
    isLoading,
  };
};
</file>

<file path="apps/native/lib/oauth/useGoogleAuth.ts">
import { useState } from "react";
import { authClient } from "../auth-client";

export const useGoogleAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async () => {
    setIsLoading(true);
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
      // OAuth redirect initiated - browser will open
      // Navigation handled by (auth)/_layout.tsx when auth completes via deep link
    } catch (error) {
      console.error("Google sign in error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    signIn,
    isLoading,
  };
};
</file>

<file path="apps/native/lib/auth-client.ts">
import { expoClient } from "@better-auth/expo/client";
import { lastLoginMethodClient as lastLoginMethodClientExpo } from "@better-auth/expo/plugins";
import {
  convexClient,
  crossDomainClient,
} from "@convex-dev/better-auth/client/plugins";
import { env } from "@convoexpo-and-nextjs-web-bun-better-auth/env/native";
// Platform-specific lastLoginMethodClient imports:
// - Web version uses document.cookie
// - Expo version uses SecureStore
import {
  emailOTPClient,
  lastLoginMethodClient as lastLoginMethodClientWeb,
} from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

const scheme = Constants.expoConfig?.scheme as string;

export const authClient = createAuthClient({
  baseURL: env.EXPO_PUBLIC_CONVEX_SITE_URL,
  plugins: [
    convexClient(),
    emailOTPClient(), // For OTP-based password reset flow
    // CRITICAL: expoClient and crossDomainClient CANNOT coexist
    // Use crossDomainClient for web, expoClient for native platforms
    // Similarly, lastLoginMethodClient must use the correct storage per platform
    ...(Platform.OS === "web"
      ? [crossDomainClient(), lastLoginMethodClientWeb()]
      : [
          expoClient({
            scheme,
            storagePrefix: scheme,
            storage: SecureStore,
          }),
          lastLoginMethodClientExpo({
            storage: SecureStore,
            storagePrefix: scheme,
          }),
        ]),
  ],
});
</file>

<file path="apps/native/lib/useAddToCalendar.ts">
import * as Calendar from "expo-calendar";
import { useCallback, useState } from "react";
import { Alert } from "react-native";

// Regex patterns for parsing date/time - defined at module level for performance
const TIME_RANGE_PATTERN =
  /(\d{1,2}):(\d{2})\s*(AM|PM)\s*-\s*(\d{1,2}):(\d{2})\s*(AM|PM)/i;
const DATE_PATTERN =
  /(\d{1,2})(?:st|nd|rd|th)?\s*(?:-\s*\d{1,2}(?:st|nd|rd|th)?)?\s*(\w+)|(\w+)\s+(\d{1,2})(?:st|nd|rd|th)?/i;

export interface CalendarEventData {
  title: string;
  startDate: Date;
  endDate: Date;
  location?: string;
  notes?: string;
  /** Minutes before event to trigger alarm. Default: 60 (1 hour before) */
  alarmMinutesBefore?: number;
}

export interface UseAddToCalendarResult {
  /** Add event to calendar using native UI */
  addToCalendar: (eventData: CalendarEventData) => Promise<boolean>;
  /**Whether calendar permission has been granted */
  hasPermission: boolean | null;
  /** Whether an operation is in progress */
  isLoading: boolean;
  /**Request calendar permissions manually*/
  requestPermission: () => Promise<boolean>;
}

/**

- Hook to add events to the device calendar using native UI
-
- Uses `Calendar.createEventInCalendarAsync()` which launches the native
- OS calendar UI, letting users choose which calendar to add to and
- edit details before saving.
 */
export function useAddToCalendar(): UseAddToCalendarResult {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const requestPermission = useCallback(async (): Promise<boolean> => {
    try {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      const granted = status === "granted";
      setHasPermission(granted);
      return granted;
    } catch (error) {
      console.error("Error requesting calendar permission:", error);
      setHasPermission(false);
      return false;
    }
  }, []);

  const addToCalendar = useCallback(
    async (eventData: CalendarEventData): Promise<boolean> => {
      setIsLoading(true);

      try {
        // Check/request permission first
        let permissionGranted = hasPermission;

        if (permissionGranted === null) {
          const { status } = await Calendar.getCalendarPermissionsAsync();
          permissionGranted = status === "granted";
          setHasPermission(permissionGranted);
        }

        if (!permissionGranted) {
          permissionGranted = await requestPermission();
        }

        if (!permissionGranted) {
          Alert.alert(
            "Calendar Permission Required",
            "Please enable calendar access in your device settings to add events.",
            [{ text: "OK" }]
          );
          return false;
        }

        // Use the native calendar UI to create the event
        // This lets users choose which calendar and edit details
        const result = await Calendar.createEventInCalendarAsync({
          title: eventData.title,
          startDate: eventData.startDate,
          endDate: eventData.endDate,
          location: eventData.location,
          notes: eventData.notes,
          alarms: eventData.alarmMinutesBefore
            ? [
                {
                  relativeOffset: -eventData.alarmMinutesBefore,
                },
              ]
            : [{ relativeOffset: -60 }], // Default: 1 hour before
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        });

        // Check if the user saved the event
        if (result.action === "saved") {
          return true;
        }

        // User cancelled - not an error, just return false
        if (result.action === "canceled") {
          return false;
        }

        return false;
      } catch (error) {
        console.error("Error adding event to calendar:", error);
        Alert.alert(
          "Calendar Error",
          "There was a problem adding the event to your calendar. Please try again.",
          [{ text: "OK" }]
        );
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    [hasPermission, requestPermission]
  );

  return {
    addToCalendar,
    hasPermission,
    isLoading,
    requestPermission,
  };
}

/**

- Parse event date strings into Date objects
-
- Handles formats like:
- - "December 18th" -> specific date in current/next year
- - "1st - 23rd December" -> first date of range
- - "Monthly" / "Last Friday of month" -> next occurrence
-
- For complex recurring dates, returns the next reasonable occurrence.
 */
// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: Date parsing inherently requires many branches for different formats
export function parseEventDateTime(
  dateRange: string,
  time: string,
  year?: number
): { startDate: Date; endDate: Date } {
  const currentYear = year ?? new Date().getFullYear();

  // Parse time like "7:00 PM - 11:00 PM" or "12:00 PM - 3:00 PM"
  const timeMatch = time.match(TIME_RANGE_PATTERN);

  let startHour = 12;
  let startMinute = 0;
  let endHour = 14;
  let endMinute = 0;

  if (timeMatch) {
    startHour = Number.parseInt(timeMatch[1], 10);
    startMinute = Number.parseInt(timeMatch[2], 10);
    const startPeriod = timeMatch[3].toUpperCase();

    endHour = Number.parseInt(timeMatch[4], 10);
    endMinute = Number.parseInt(timeMatch[5], 10);
    const endPeriod = timeMatch[6].toUpperCase();

    // Convert to 24-hour format
    if (startPeriod === "PM" && startHour !== 12) {
      startHour += 12;
    }
    if (startPeriod === "AM" && startHour === 12) {
      startHour = 0;
    }
    if (endPeriod === "PM" && endHour !== 12) {
      endHour += 12;
    }
    if (endPeriod === "AM" && endHour === 12) {
      endHour = 0;
    }
  }

  // Month name to number mapping
  const months: Record<string, number> = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
  };

  // Try to extract a date from the dateRange
  // Format: "December 18th" or "18th December" or "1st - 23rd December"
  const dateMatch = dateRange.match(DATE_PATTERN);

  let month = 11; // Default to December
  let day = 1;

  if (dateMatch) {
    if (dateMatch[1] && dateMatch[2]) {
      // Format: "18th December" or "1st - 23rd December"
      day = Number.parseInt(dateMatch[1], 10);
      const monthName = dateMatch[2].toLowerCase();
      if (months[monthName] !== undefined) {
        month = months[monthName];
      }
    } else if (dateMatch[3] && dateMatch[4]) {
      // Format: "December 18th"
      const monthName = dateMatch[3].toLowerCase();
      if (months[monthName] !== undefined) {
        month = months[monthName];
      }
      day = Number.parseInt(dateMatch[4], 10);
    }
  }

  // Handle recurring events - use next month
  if (
    dateRange.toLowerCase().includes("monthly") ||
    dateRange.toLowerCase().includes("last friday")
  ) {
    const now = new Date();
    month = now.getMonth();
    // For "Last Friday of month", calculate it
    if (dateRange.toLowerCase().includes("last friday")) {
      const lastDay = new Date(currentYear, month + 1, 0);
      const dayOfWeek = lastDay.getDay();
      const daysFromFriday = (dayOfWeek + 2) % 7;
      day = lastDay.getDate() - daysFromFriday;
    } else {
      day = 15; // Default to middle of month for generic monthly
    }
  }

  const startDate = new Date(currentYear, month, day, startHour, startMinute);
  const endDate = new Date(currentYear, month, day, endHour, endMinute);

  // If the date is in the past, use next year
  if (startDate < new Date()) {
    startDate.setFullYear(currentYear + 1);
    endDate.setFullYear(currentYear + 1);
  }

  return { startDate, endDate };
}
</file>

<file path="apps/native/.gitignore">
node_modules/
.expo/
dist/

# Native directories (generated via expo prebuild)

/android
/ios

npm-debug.*
*.jks
*.p8
*.p12
*.key
*.mobileprovision
*.orig.*
web-build/

# macOS

.DS_Store

# Temporary files created by Metro to check the health of the file watcher

.metro-health-check*

# Turborepo managed Metro cache

.cache/

# UniWind generated types

uniwind-types.d.ts

# @generated expo-cli sync-2b81b286409207a5da26e14c78851eb30d8ccbdb

# The following patterns were generated by expo-cli

expo-env.d.ts

# @end expo-cli

*storybook.log
storybook-static
</file>

<file path="apps/native/app.config.ts">
import type { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "City University Club",
  slug: "city-university-club",
  version: "1.0.0",
  orientation: "portrait",
  scheme: "cityuniversityclub",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,

  // Universal app icon (fallback)
  icon: "./assets/images/icons/ios-light.png",

  // iOS-specific configuration
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.cityuniversityclub.app",
    config: {
      usesNonExemptEncryption: false,
    },
    // iOS icons with dark mode support (iOS 18+)
    icon: {
      light: "./assets/images/icons/ios-light.png",
      dark: "./assets/images/icons/ios-dark.png",
      tinted: "./assets/images/icons/ios-tinted.png",
    },
    // Allow React Native to control status bar style per-screen
    // Without this, iOS ignores StatusBar.setBarStyle() calls
    infoPlist: {
      UIViewControllerBasedStatusBarAppearance: true,
    },
  },

  // Android-specific configuration
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/icons/adaptive-icon.png",
      monochromeImage: "./assets/images/icons/adaptive-icon.png",
      backgroundColor: "#06273A",
    },
    package: "com.cityuniversityclub.app",
  },

  // Web-specific configuration
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/icons/favicon.ico",
  },

  // Plugins
  plugins: [
    "expo-font",
    "expo-router",
    "expo-secure-store",
    "expo-system-ui",
    "expo-web-browser",
    [
      "expo-calendar",
      {
        calendarPermission:
          "Allow City University Club to add events to your calendar",
      },
    ],
    [
      "react-native-edge-to-edge",
      {
        android: {
          parentTheme: "Material3",
          enforceNavigationBarContrast: false,
        },
      },
    ],
    [
      "expo-sensors",
      {
        motionPermission:
          "Allow City University Club to access device motion for card animations",
      },
    ],
    [
      "expo-splash-screen",
      {
        backgroundColor: "#1a1a2e",
        image: "./assets/images/icons/splash-icon-light.png",
        imageWidth: 200,
        ios: {
          backgroundColor: "#1a1a2e",
          image: "./assets/images/icons/splash-icon-light.png",
          resizeMode: "contain",
        },
        android: {
          backgroundColor: "#1a1a2e",
          image: "./assets/images/icons/splash-icon-light.png",
          imageWidth: 200,
        },
        dark: {
          backgroundColor: "#0d0d1a",
          image: "./assets/images/icons/splash-icon-dark.png",
        },
      },
    ],
  ],

  // Experiments
  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },

  // EAS Build configuration
  extra: {
    storybookEnabled: process.env.STORYBOOK === "true",
    eas: {
      projectId: "d6c04369-dbfe-449a-91e6-41aa260b8178",
    },
  },
});
</file>

<file path="apps/native/App.tsx">
/**
 * App Entry Point - Conditional Storybook/App Toggle
 *
 * This file serves as the entry point that conditionally loads either:
 * - Storybook UI when STORYBOOK=true environment variable is set
 * - Normal expo-router app otherwise
 *
 * Usage:
 * - Normal app: bun run start
 * - Storybook: STORYBOOK=true bun run start (or bun run storybook)
 */
import Constants from "expo-constants";

// Check if Storybook mode is enabled via environment variable
const STORYBOOK_ENABLED =
  Constants.expoConfig?.extra?.storybookEnabled === true ||
  process.env.STORYBOOK === "true";

let App: React.ComponentType;

if (STORYBOOK_ENABLED) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  App = require("./.rnstorybook").default;
} else {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  App = require("expo-router/entry").default;
}

export default App;
</file>

<file path="apps/native/eas.json">
{
  "cli": {
    "version": ">= 16.28.0",
    "appVersionSource": "remote"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "autoIncrement": true
    }
  },
  "submit": {
    "production": {}
  }
}
</file>

<file path="apps/native/global.css">
@import "tailwindcss";
@import "uniwind";
@import "heroui-native/styles";

@source "./node_modules/heroui-native/lib";

/* ============================================
   City University Club Brand Theme

   Override HeroUI Native's default theme with
   CUC brand colors using the correct structure.
   ============================================ */

@layer theme {
  @variant light {
    /*Page backgrounds - cream #fffef8 */
    --background: oklch(99.6141% 0.007875 99.05);
    /* Primary text - navy #06273a */
    --foreground: oklch(25.9985% 0.051504 238.78);
    /* Brand primary - navy #06273a (for buttons, headers) */
    --primary: oklch(25.9985% 0.051504 238.78);
    --primary-foreground: oklch(99.6141% 0.007875 99.05);
    /* Brand accent - sage #85b09a */
    --accent: oklch(71.9703% 0.056261 162.39);
    --accent-foreground: oklch(25.9985% 0.051504 238.78);
    /* Cards, inputs - white #ffffff */
    --surface: oklch(100% 0 0);
    --surface-foreground: oklch(25.9985% 0.051504 238.78);
    /* Secondary text - gray #666666 */
    --muted: oklch(51.0278% 0 0);
    /* Borders - #e5e5e5*/
    --border: oklch(92.1906% 0 0);
    --divider: oklch(92.1906% 0 0);
  }

  @variant dark {
    /*Page backgrounds - very dark navy #030d14 (much darker than primary) */
    --background: oklch(15.1835% 0.023239 235.72);
    /* Primary text - cream #fffef8 */
    --foreground: oklch(99.6141% 0.007875 99.05);
    /* Brand primary - navy #06273a (stands out against dark background) */
    --primary: oklch(25.9985% 0.051504 238.78);
    --primary-foreground: oklch(99.6141% 0.007875 99.05);
    /* Brand accent - sage #85b09a (same) */
    --accent: oklch(71.9703% 0.056261 162.39);
    --accent-foreground: oklch(25.9985% 0.051504 238.78);
    /* Cards - dark navy #0a1822 (between background and primary) */
    --surface: oklch(20.1713% 0.028043 241.13);
    --surface-foreground: oklch(99.6141% 0.007875 99.05);
    /* Secondary text - sage in dark mode */
    --muted: oklch(71.9703% 0.056261 162.39);
    /* Borders - subtle dark #162530*/
    --border: oklch(23.5% 0.035 235);
    --divider: oklch(23.5% 0.035 235);
  }
}

/*Register custom colors with Tailwind*/
@theme inline {
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
}
</file>

<file path="apps/native/metro.config.cjs">
"use strict";
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const { FileStore } = require("metro-cache");
const { withUniwindConfig } = require("uniwind/metro");
const {
  withStorybook,
} = require("@storybook/react-native/metro/withStorybook");
const path = require("node:path");

/** @type {import('expo/metro-config').MetroConfig} */
const defaultConfig = getDefaultConfig(__dirname);

// Apply UniWind config
const uniwindConfig = withUniwindConfig(defaultConfig, {
  cssEntryFile: "./global.css",
  dtsFile: "./uniwind-types.d.ts",
});

// Apply monorepo and turborepo config
let config = withTurborepoManagedCache(withMonorepoPaths(uniwindConfig));

// Enable package exports for proper module resolution
config.resolver.unstable_enablePackageExports = true;

// Disable hierarchical lookup for monorepo compatibility
config.resolver.disableHierarchicalLookup = true;

// Apply Storybook configuration
config = withStorybook(config, {
  enabled: process.env.STORYBOOK === "true",
  configPath: path.resolve(__dirname, ".rnstorybook"),
});

module.exports = config;

/**

- Add the monorepo paths to the Metro config.
- This allows Metro to resolve modules from the monorepo.
-
- @see <https://docs.expo.dev/guides/monorepos/#modify-the-metro-config>
- @param {import('expo/metro-config').MetroConfig} config
- @returns {import('expo/metro-config').MetroConfig}
 */
function withMonorepoPaths(config) {
  const projectRoot = __dirname;
  const workspaceRoot = path.resolve(projectRoot, "../..");

  // #1 - Watch all files in the monorepo
  config.watchFolders = [workspaceRoot];

  // #2 - Resolve modules within the project's `node_modules` first, then all monorepo modules
  config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, "node_modules"),
    path.resolve(workspaceRoot, "node_modules"),
  ];

  return config;
}

/**

- Move the Metro cache to the `.cache/metro` folder.
- If you have any environment variables, you can configure Turborepo to invalidate it when needed.
-
- @see <https://turbo.build/repo/docs/reference/configuration#env>
- @param {import('expo/metro-config').MetroConfig} config
- @returns {import('expo/metro-config').MetroConfig}
 */
function withTurborepoManagedCache(config) {
  config.cacheStores = [
    new FileStore({ root: path.join(__dirname, ".cache/metro") }),
  ];
  return config;
}
</file>

<file path="apps/native/package.json">
{
  "name": "native",
  "version": "1.0.0",
  "private": true,
  "main": "./App.tsx",
  "scripts": {
    "start": "expo start",
    "dev": "expo start --clear",
    "android": "expo run:android",
    "ios": "expo run:ios",
    "prebuild": "expo prebuild",
    "web": "expo start --web",
    "storybook": "STORYBOOK=true expo start",
    "storybook:ios": "STORYBOOK=true expo run:ios",
    "storybook:android": "STORYBOOK=true expo run:android",
    "storybook:web-ui": "storybook dev -p 6007 -c .storybook-web",
    "storybook:build:web": "storybook build -c .storybook-web -o storybook-static",
    "storybook-generate": "sb-rn-get-stories"
  },
  "dependencies": {
    "@better-auth/expo": "catalog:",
    "@convex-dev/agent": "catalog:",
    "@convex-dev/better-auth": "catalog:",
    "@convoexpo-and-nextjs-web-bun-better-auth/backend": "workspace:*",
    "@convoexpo-and-nextjs-web-bun-better-auth/env": "workspace:*",
    "@expo/metro-runtime": "~6.1.2",
    "@expo/vector-icons": "^15.0.3",
    "@gorhom/bottom-sheet": "^5",
    "@react-navigation/drawer": "^7.3.9",
    "@react-navigation/elements": "^2.8.1",
    "@stardazed/streams-text-encoding": "^1.0.2",
    "@ungap/structured-clone": "^1.3.0",
    "better-auth": "catalog:",
    "convex": "catalog:",
    "dotenv": "catalog:",
    "expo": "^54.0.23",
    "expo-apple-authentication": "^8.0.8",
    "expo-calendar": "~15.0.8",
    "expo-constants": "~18.0.10",
    "expo-font": "~14.0.9",
    "expo-haptics": "^15.0.7",
    "expo-image": "~3.0.11",
    "expo-linear-gradient": "^15.0.8",
    "expo-linking": "~8.0.8",
    "expo-network": "~8.0.7",
    "expo-router": "~6.0.14",
    "expo-secure-store": "~15.0.7",
    "expo-sensors": "~15.0.8",
    "expo-splash-screen": "^31.0.13",
    "expo-status-bar": "^3.0.9",
    "expo-system-ui": "^6.0.9",
    "expo-web-browser": "~15.0.4",
    "heroui-native": "^1.0.0-beta.12",
    "react": "19.1.0",
    "react-dom": "^19.2.3",
    "react-native": "0.81.5",
    "react-native-edge-to-edge": "^1.7.0",
    "react-native-gesture-handler": "^2.28.0",
    "react-native-keyboard-controller": "1.18.5",
    "react-native-reanimated": "~4.1.1",
    "react-native-safe-area-context": "~5.6.0",
    "react-native-screens": "~4.16.0",
    "react-native-svg": "15.12.1",
    "react-native-web": "^0.21.2",
    "react-native-worklets": "0.5.1",
    "tailwind-merge": "^3.4.0",
    "tailwind-variants": "^3.2.2",
    "tailwindcss": "^4.1.18",
    "uniwind": "^1.2.2",
    "zod": "catalog:",
    "@babel/core": "^7.28.6",
    "babel-loader": "^8.4.1",
    "@react-native-async-storage/async-storage": "^2.2.0",
    "@react-native-community/datetimepicker": "^8.6.0",
    "@react-native-community/slider": "^5.1.2",
    "@storybook/addon-ondevice-controls": "^10.1.11",
    "@storybook/addon-ondevice-actions": "^10.1.11",
    "@storybook/react-native": "^10.1.11",
    "storybook": "^10.1.11"
  },
  "devDependencies": {
    "@convoexpo-and-nextjs-web-bun-better-auth/config": "workspace:*",
    "@storybook/react-native-web-vite": "^10.1.11",
    "@types/node": "^24.10.0",
    "@types/react": "~19.1.0",
    "typescript": "catalog:"
  }
}
</file>

<file path="apps/native/polyfills.js">
import structuredClone from "@ungap/structured-clone";
import { Platform } from "react-native";

if (Platform.OS !== "web") {
  const setupPolyfills = async () => {
    const { polyfillGlobal } = await import(
      "react-native/Libraries/Utilities/PolyfillFunctions"
    );

    const { TextEncoderStream, TextDecoderStream } = await import(
      "@stardazed/streams-text-encoding"
    );

    if (!("structuredClone" in global)) {
      polyfillGlobal("structuredClone", () => structuredClone);
    }

    polyfillGlobal("TextEncoderStream", () => TextEncoderStream);
    polyfillGlobal("TextDecoderStream", () => TextDecoderStream);
  };

  setupPolyfills();
}
</file>

<file path="apps/native/tsconfig.json">
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["**/*.ts", "**/*.tsx", ".expo/types/**/*.ts", "expo-env.d.ts"]
}
</file>

<file path="apps/web/.storybook/main.ts">
import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-themes",
  ],
  framework: "@storybook/nextjs-vite",
};
export default config;
</file>

<file path="apps/web/.storybook/preview.ts">
import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/nextjs-vite";

// Import Tailwind CSS v4 styles
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
</file>

<file path="apps/web/src/app/ai/page.tsx">
"use client";

import {
  type UIMessage,
  useSmoothText,
  useUIMessages,
} from "@convex-dev/agent/react";
import { api } from "@convoexpo-and-nextjs-web-bun-better-auth/backend/convex/_generated/api";
import { useMutation } from "convex/react";
import { Loader2, Send } from "lucide-react";
import dynamic from "next/dynamic";

const Streamdown = dynamic(
  () => import("streamdown").then((mod) => ({ default: mod.Streamdown })),
  {
    loading: () => (
      <div className="flex h-full items-center justify-center">
        <div className="text-muted-foreground">Loading response...</div>
      </div>
    ),
    ssr: false,
  }
);

import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function MessageContent({
  text,
  isStreaming,
}: {
  text: string;
  isStreaming: boolean;
}) {
  const [visibleText] = useSmoothText(text, {
    startStreaming: isStreaming,
  });
  return <Streamdown>{visibleText}</Streamdown>;
}

export default function AIPage() {
  const [input, setInput] = useState("");
  const [threadId, setThreadId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const createThread = useMutation(api.chat.createNewThread);
  const sendMessage = useMutation(api.chat.sendMessage);

  const { results: messages } = useUIMessages(
    api.chat.listMessages,
    threadId ? { threadId } : "skip",
    { initialNumItems: 50, stream: true }
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const hasStreamingMessage = messages?.some(
    (m: UIMessage) => m.status === "streaming"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isLoading) {
      return;
    }

    setIsLoading(true);
    setInput("");

    try {
      let currentThreadId = threadId;
      if (!currentThreadId) {
        currentThreadId = await createThread();
        setThreadId(currentThreadId);
      }

      await sendMessage({ threadId: currentThreadId, prompt: text });
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto grid w-full grid-rows-[1fr_auto] overflow-hidden p-4">
      <div className="space-y-4 overflow-y-auto pb-4">
        {!messages || messages.length === 0 ? (
          <div className="mt-8 text-center text-muted-foreground">
            Ask me anything to get started!
          </div>
        ) : (
          messages.map((message: UIMessage) => (
            <div
              className={`rounded-lg p-3 ${
                message.role === "user"
                  ? "ml-8 bg-primary/10"
                  : "mr-8 bg-secondary/20"
              }`}
              key={message.key}
            >
              <p className="mb-1 font-semibold text-sm">
                {message.role === "user" ? "You" : "AI Assistant"}
              </p>
              <MessageContent
                isStreaming={message.status === "streaming"}
                text={message.text ?? ""}
              />
            </div>
          ))
        )}
        {isLoading && !hasStreamingMessage && (
          <div className="mr-8 rounded-lg bg-secondary/20 p-3">
            <p className="mb-1 font-semibold text-sm">AI Assistant</p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Thinking...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form
        className="flex w-full items-center space-x-2 border-t pt-2"
        onSubmit={handleSubmit}
      >
        <Input
          autoComplete="off"
          autoFocus
          className="flex-1"
          disabled={isLoading}
          name="prompt"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          value={input}
        />
        <Button disabled={isLoading || !input.trim()} size="icon" type="submit">
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send size={18} />
          )}
        </Button>
      </form>
    </div>
  );
}
</file>

<file path="apps/web/src/app/api/auth/[...all]/route.ts">
import { handler } from "@/lib/auth-server";

export const { GET, POST } = handler;
</file>

<file path="apps/web/src/app/dashboard/page.tsx">
"use client";

import { api } from "@convoexpo-and-nextjs-web-bun-better-auth/backend/convex/_generated/api";
import {
  Authenticated,
  AuthLoading,
  Unauthenticated,
  useQuery,
} from "convex/react";
import { useState } from "react";
import SignInForm from "@/components/sign-in-form";
import SignUpForm from "@/components/sign-up-form";
import UserMenu from "@/components/user-menu";

export default function DashboardPage() {
  const [showSignIn, setShowSignIn] = useState(false);
  const privateData = useQuery(api.privateData.get);

  return (
    <>
      <Authenticated>
        <div>
          <h1>Dashboard</h1>
          <p>privateData: {privateData?.message}</p>
          <UserMenu />
        </div>
      </Authenticated>
      <Unauthenticated>
        {showSignIn ? (
          <SignInForm onSwitchToSignUp={() => setShowSignIn(false)} />
        ) : (
          <SignUpForm onSwitchToSignIn={() => setShowSignIn(true)} />
        )}
      </Unauthenticated>
      <AuthLoading>
        <div>Loading...</div>
      </AuthLoading>
    </>
  );
}
</file>

<file path="apps/web/src/app/todos/page.tsx">
"use client";

import { api } from "@convoexpo-and-nextjs-web-bun-better-auth/backend/convex/_generated/api";
import type { Id } from "@convoexpo-and-nextjs-web-bun-better-auth/backend/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import { Loader2, Trash2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export default function TodosPage() {
  const [newTodoText, setNewTodoText] = useState("");

  const todos = useQuery(api.todos.getAll);
  const createTodoMutation = useMutation(api.todos.create);
  const toggleTodoMutation = useMutation(api.todos.toggle);
  const deleteTodoMutation = useMutation(api.todos.deleteTodo);

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = newTodoText.trim();
    if (!text) {
      return;
    }
    await createTodoMutation({ text });
    setNewTodoText("");
  };

  const handleToggleTodo = (id: Id<"todos">, currentCompleted: boolean) => {
    toggleTodoMutation({ id, completed: !currentCompleted });
  };

  const handleDeleteTodo = (id: Id<"todos">) => {
    deleteTodoMutation({ id });
  };

  return (
    <div className="mx-auto w-full max-w-md py-10">
      <Card>
        <CardHeader>
          <CardTitle>Todo List</CardTitle>
          <CardDescription>Manage your tasks efficiently</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="mb-6 flex items-center space-x-2"
            onSubmit={handleAddTodo}
          >
            <Input
              onChange={(e) => setNewTodoText(e.target.value)}
              placeholder="Add a new task..."
              value={newTodoText}
            />
            <Button disabled={!newTodoText.trim()} type="submit">
              Add
            </Button>
          </form>

          {todos === undefined ? (
            <div className="flex justify-center py-4">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          ) : todos.length === 0 ? (
            <p className="py-4 text-center">No todos yet. Add one above!</p>
          ) : (
            <ul className="space-y-2">
              {todos.map((todo) => (
                <li
                  className="flex items-center justify-between rounded-md border p-2"
                  key={todo._id}
                >
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={todo.completed}
                      id={`todo-${todo._id}`}
                      onCheckedChange={() =>
                        handleToggleTodo(todo._id, todo.completed)
                      }
                    />
                    <label
                      className={`${todo.completed ? "text-muted-foreground line-through" : ""}`}
                      htmlFor={`todo-${todo._id}`}
                    >
                      {todo.text}
                    </label>
                  </div>
                  <Button
                    aria-label="Delete todo"
                    onClick={() => handleDeleteTodo(todo._id)}
                    size="icon"
                    variant="ghost"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
</file>

<file path="apps/web/src/app/layout.tsx">
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../index.css";

import Header from "@/components/header";
import Providers from "@/components/providers";
import { getToken } from "@/lib/auth-server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "convoexpo-and-nextjs-web-bun-better-auth",
  description: "convoexpo-and-nextjs-web-bun-better-auth",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = await getToken();
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers initialToken={token}>
          <div className="grid h-svh grid-rows-[auto_1fr]">
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
</file>

<file path="apps/web/src/app/page.tsx">
"use client";
import { api } from "@convoexpo-and-nextjs-web-bun-better-auth/backend/convex/_generated/api";
import { useQuery } from "convex/react";

const TITLE_TEXT = `
 ██████╗ ███████╗████████╗████████╗███████╗██████╗
 ██╔══██╗██╔════╝╚══██╔══╝╚══██╔══╝██╔════╝██╔══██╗
 ██████╔╝█████╗     ██║      ██║   █████╗  ██████╔╝
 ██╔══██╗██╔══╝     ██║      ██║   ██╔══╝  ██╔══██╗
 ██████╔╝███████╗   ██║      ██║   ███████╗██║  ██║
 ╚═════╝ ╚══════╝   ╚═╝      ╚═╝   ╚══════╝╚═╝  ╚═╝

 ████████╗    ███████╗████████╗ █████╗  ██████╗██╗  ██╗
 ╚══██╔══╝    ██╔════╝╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝
    ██║       ███████╗   ██║   ███████║██║     █████╔╝
    ██║       ╚════██║   ██║   ██╔══██║██║     ██╔═██╗
    ██║       ███████║   ██║   ██║  ██║╚██████╗██║  ██╗
    ╚═╝       ╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
 `;

export default function Home() {
  const healthCheck = useQuery(api.healthCheck.get);

  return (
    <div className="container mx-auto max-w-3xl px-4 py-2">
      <pre className="overflow-x-auto font-mono text-sm">{TITLE_TEXT}</pre>
      <div className="grid gap-6">
        <section className="rounded-lg border p-4">
          <h2 className="mb-2 font-medium">API Status</h2>
          <div className="flex items-center gap-2">
            <div
              className={`h-2 w-2 rounded-full ${healthCheck === "OK" ? "bg-green-500" : healthCheck === undefined ? "bg-orange-400" : "bg-red-500"}`}
            />
            <span className="text-muted-foreground text-sm">
              {healthCheck === undefined
                ? "Checking..."
                : healthCheck === "OK"
                  ? "Connected"
                  : "Error"}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
</file>

<file path="apps/web/src/components/ui/button.stories.tsx">
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn, userEvent, within } from "@storybook/test";
import { Button } from "./button";

const CLICK_ME_REGEX = /click me/i;

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "outline",
        "secondary",
        "ghost",
        "destructive",
        "link",
      ],
      description: "Visual style variant",
    },
    size: {
      control: "select",
      options: [
        "default",
        "xs",
        "sm",
        "lg",
        "icon",
        "icon-xs",
        "icon-sm",
        "icon-lg",
      ],
      description: "Button size",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
  },
  args: {
    onClick: fn(),
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default variant
export const Default: Story = {
  args: {
    variant: "default",
  },
};

// Outline variant
export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

// Secondary variant
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

// Ghost variant
export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

// Destructive variant
export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete",
  },
};

// Link variant
export const Link: Story = {
  args: {
    variant: "link",
    children: "Link Button",
  },
};

// Size variants
export const ExtraSmall: Story = {
  args: {
    size: "xs",
    children: "Extra Small",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

// With icon (inline start)
export const WithIconStart: Story = {
  args: {
    children: (
      <>
        <svg
          aria-hidden="true"
          data-icon="inline-start"
          fill="none"
          height="16"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        Continue
      </>
    ),
  },
};

// With icon (inline end)
export const WithIconEnd: Story = {
  args: {
    children: (
      <>
        Download
        <svg
          aria-hidden="true"
          data-icon="inline-end"
          fill="none"
          height="16"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
        </svg>
      </>
    ),
  },
};

// Icon only buttons
export const IconButton: Story = {
  args: {
    size: "icon",
    children: (
      <svg
        aria-hidden="true"
        fill="none"
        height="16"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 5v14M5 12h14" />
      </svg>
    ),
    "aria-label": "Add item",
  },
};

export const IconButtonSmall: Story = {
  args: {
    size: "icon-sm",
    children: (
      <svg
        aria-hidden="true"
        fill="none"
        height="14"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 6 6 18M6 6l12 12" />
      </svg>
    ),
    "aria-label": "Close",
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

// Interaction test - Click handler
export const ClickInteraction: Story = {
  args: {
    children: "Click Me",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: CLICK_ME_REGEX });

    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

// Interaction test - Disabled button should not fire click
export const DisabledInteraction: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    await expect(button).toBeDisabled();
  },
};
</file>

<file path="apps/web/src/components/ui/button.tsx">
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 select-none items-center justify-center whitespace-nowrap rounded-none border border-transparent bg-clip-padding font-medium text-xs outline-none transition-all focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 dark:hover:bg-destructive/30",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-none px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-none px-2.5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-8",
        "icon-xs": "size-6 rounded-none [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7 rounded-none",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      className={cn(buttonVariants({ variant, size, className }))}
      data-slot="button"
      {...props}
    />
  );
}

export { Button, buttonVariants };
</file>

<file path="apps/web/src/components/ui/card.stories.tsx">
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Image from "next/image";
import { Button } from "./button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Input } from "./input";
import { Label } from "./label";

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm"],
      description: "The size variant of the card",
    },
  },
  args: {
    size: "default",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content can include any elements.</p>
      </CardContent>
    </Card>
  ),
};

export const Small: Story = {
  render: (args) => (
    <Card {...args} className="w-[350px]">
      <CardHeader>
        <CardTitle>Small Card</CardTitle>
        <CardDescription>A compact card variant</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content with reduced padding.</p>
      </CardContent>
    </Card>
  ),
  args: {
    size: "sm",
  },
};

export const WithFooter: Story = {
  render: (args) => (
    <Card {...args} className="w-[350px]">
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
        <CardDescription>This card has a footer section</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Main content area of the card.</p>
      </CardContent>
      <CardFooter>
        <Button size="sm" variant="outline">
          Cancel
        </Button>
        <Button className="ml-auto" size="sm">
          Save
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  render: (args) => (
    <Card {...args} className="w-[350px]">
      <CardHeader>
        <CardTitle>Card with Action</CardTitle>
        <CardDescription>Has an action button in the header</CardDescription>
        <CardAction>
          <Button size="icon-sm" variant="outline">
            <svg
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>The action slot is positioned in the top-right corner.</p>
      </CardContent>
    </Card>
  ),
};

export const LoginForm: Story = {
  render: (args) => (
    <Card {...args} className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your credentials to sign in</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="email@example.com" type="email" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="Enter password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign In</Button>
      </CardFooter>
    </Card>
  ),
};

export const SignupForm: Story = {
  render: (args) => (
    <Card {...args} className="w-[400px]">
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>Enter your information to get started</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="firstName">First name</Label>
            <Input id="firstName" placeholder="John" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="lastName">Last name</Label>
            <Input id="lastName" placeholder="Doe" />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="signup-email">Email</Label>
          <Input
            id="signup-email"
            placeholder="email@example.com"
            type="email"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="signup-password">Password</Label>
          <Input
            id="signup-password"
            placeholder="Create a password"
            type="password"
          />
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-3">
        <Button className="w-full">Create Account</Button>
        <p className="text-center text-muted-foreground text-xs">
          Already have an account?{" "}
          <button className="text-foreground underline" type="button">
            Sign in
          </button>
        </p>
      </CardFooter>
    </Card>
  ),
};

export const NotificationCard: Story = {
  render: (args) => (
    <Card {...args} className="w-[350px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <svg
            aria-hidden="true"
            className="h-4 w-4 text-blue-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          New Notification
        </CardTitle>
        <CardDescription>Just now</CardDescription>
      </CardHeader>
      <CardContent>
        <p>You have a new message from the system administrator.</p>
      </CardContent>
      <CardFooter>
        <Button size="sm" variant="ghost">
          Dismiss
        </Button>
        <Button className="ml-auto" size="sm">
          View
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const StatsCard: Story = {
  render: (args) => (
    <Card {...args} className="w-[200px]">
      <CardHeader>
        <CardDescription>Total Revenue</CardDescription>
        <CardTitle className="font-bold text-2xl">$45,231.89</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-green-600 text-xs">+20.1% from last month</p>
      </CardContent>
    </Card>
  ),
  args: {
    size: "sm",
  },
};

export const ImageCard: Story = {
  render: (args) => (
    <Card {...args} className="w-[350px] overflow-hidden">
      <Image
        alt="Placeholder"
        className="h-48 w-full object-cover"
        height={192}
        src="https://placehold.co/350x192/e2e8f0/64748b?text=Image"
        width={350}
      />
      <CardHeader>
        <CardTitle>Image Card</CardTitle>
        <CardDescription>Card with a header image</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Cards can include images at the top.</p>
      </CardContent>
    </Card>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-4">
      <Card className="w-[300px]" size="default">
        <CardHeader>
          <CardTitle>Default Size</CardTitle>
          <CardDescription>Standard padding and spacing</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Regular card content.</p>
        </CardContent>
        <CardFooter>
          <Button size="sm">Action</Button>
        </CardFooter>
      </Card>

      <Card className="w-[300px]" size="sm">
        <CardHeader>
          <CardTitle>Small Size</CardTitle>
          <CardDescription>Compact padding and spacing</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Smaller card content.</p>
        </CardContent>
        <CardFooter>
          <Button size="sm">Action</Button>
        </CardFooter>
      </Card>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
};
</file>

<file path="apps/web/src/components/ui/card.tsx">
import type * as React from "react";

import { cn } from "@/lib/utils";

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      className={cn(
        "group/card flex flex-col gap-4 overflow-hidden rounded-none bg-card py-4 text-card-foreground text-xs/relaxed ring-1 ring-foreground/10 has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 data-[size=sm]:gap-2 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-none*:[img:last-child]:rounded-none",
        className
      )}
      data-size={size}
      data-slot="card"
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-none px-4 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] group-data-[size=sm]/card:px-3 [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3",
        className
      )}
      data-slot="card-header"
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "font-medium text-sm group-data-[size=sm]/card:text-sm",
        className
      )}
      data-slot="card-title"
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-muted-foreground text-xs/relaxed", className)}
      data-slot="card-description"
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      data-slot="card-action"
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("px-4 group-data-[size=sm]/card:px-3", className)}
      data-slot="card-content"
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center rounded-none border-t p-4 group-data-[size=sm]/card:p-3",
        className
      )}
      data-slot="card-footer"
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
</file>

<file path="apps/web/src/components/ui/checkbox.stories.tsx">
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn, userEvent, within } from "@storybook/test";
import { useState } from "react";
import { Checkbox } from "./checkbox";
import { Label } from "./label";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Whether the checkbox is checked",
    },
    disabled: {
      control: "boolean",
      description: "Whether the checkbox is disabled",
    },
    "aria-invalid": {
      control: "boolean",
      description: "Whether the checkbox is in an invalid state",
    },
  },
  args: {
    onCheckedChange: fn(),
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    "aria-invalid": true,
  },
};

export const InvalidChecked: Story = {
  args: {
    "aria-invalid": true,
    defaultChecked: true,
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox {...args} id="checkbox-label" />
      <Label htmlFor="checkbox-label">Accept terms and conditions</Label>
    </div>
  ),
};

export const WithLabelChecked: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox {...args} defaultChecked id="checkbox-label-checked" />
      <Label htmlFor="checkbox-label-checked">I agree to the policy</Label>
    </div>
  ),
};

export const WithLabelDisabled: Story = {
  render: (args) => (
    <div className="group/field flex items-center gap-2">
      <Checkbox {...args} disabled id="checkbox-disabled" />
      <Label className="opacity-50" htmlFor="checkbox-disabled">
        Disabled option
      </Label>
    </div>
  ),
};

export const WithDescription: Story = {
  render: (args) => (
    <div className="flex items-start gap-2">
      <Checkbox {...args} className="mt-0.5" id="checkbox-description" />
      <div className="flex flex-col gap-1">
        <Label htmlFor="checkbox-description">Marketing emails</Label>
        <span className="text-muted-foreground text-xs">
          Receive emails about new products and features
        </span>
      </div>
    </div>
  ),
};

export const Required: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox {...args} id="checkbox-required" required />
      <Label htmlFor="checkbox-required">
        <span>I accept the terms</span>
        <span className="text-destructive">*</span>
      </Label>
    </div>
  ),
};

export const Controlled: Story = {
  render(args) {
    const [checked, setChecked] = useState(false);
    return (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Checkbox
            {...args}
            checked={checked}
            id="controlled"
            onCheckedChange={setChecked}
          />
          <Label htmlFor="controlled">
            {checked ? "Checked" : "Unchecked"}
          </Label>
        </div>
        <p className="text-muted-foreground text-xs">
          State: {checked ? "true" : "false"}
        </p>
      </div>
    );
  },
};

export const CheckboxGroup: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <p className="font-medium text-sm">Select your interests:</p>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Checkbox id="tech" />
          <Label htmlFor="tech">Technology</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox defaultChecked id="design" />
          <Label htmlFor="design">Design</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="business" />
          <Label htmlFor="business">Business</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox disabled id="science" />
          <Label className="opacity-50" htmlFor="science">
            Science (unavailable)
          </Label>
        </div>
      </div>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="flex w-[300px] flex-col gap-4 rounded border p-4">
      <div className="flex flex-col gap-1">
        <p className="font-medium text-sm">Notification Preferences</p>
        <p className="text-muted-foreground text-xs">
          Choose what notifications you receive
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-2">
          <Checkbox className="mt-0.5" defaultChecked id="email-notif" />
          <div className="flex flex-col gap-0.5">
            <Label htmlFor="email-notif">Email notifications</Label>
            <span className="text-muted-foreground text-xs">
              Get notified via email
            </span>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Checkbox className="mt-0.5" id="push-notif" />
          <div className="flex flex-col gap-0.5">
            <Label htmlFor="push-notif">Push notifications</Label>
            <span className="text-muted-foreground text-xs">
              Get notified on your device
            </span>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Checkbox className="mt-0.5" disabled id="sms-notif" />
          <div className="flex flex-col gap-0.5 opacity-50">
            <Label htmlFor="sms-notif">SMS notifications</Label>
            <span className="text-muted-foreground text-xs">Coming soon</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Checkbox id="default-state" />
          <Label htmlFor="default-state">Default</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox defaultChecked id="checked-state" />
          <Label htmlFor="checked-state">Checked</Label>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Checkbox disabled id="disabled-state" />
          <Label className="opacity-50" htmlFor="disabled-state">
            Disabled
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox defaultChecked disabled id="disabled-checked-state" />
          <Label className="opacity-50" htmlFor="disabled-checked-state">
            Disabled checked
          </Label>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Checkbox aria-invalid={true} id="invalid-state" />
          <Label htmlFor="invalid-state">Invalid</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            aria-invalid={true}
            defaultChecked
            id="invalid-checked-state"
          />
          <Label htmlFor="invalid-checked-state">Invalid checked</Label>
        </div>
      </div>
    </div>
  ),
};

export const InteractionTest: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox {...args} id="interactive-checkbox" />
      <Label htmlFor="interactive-checkbox">Click to toggle</Label>
    </div>
  ),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");

    // Initially unchecked
    await expect(checkbox).not.toBeChecked();

    // Click to check
    await userEvent.click(checkbox);
    await expect(args.onCheckedChange).toHaveBeenCalledWith(true);

    // Click to uncheck
    await userEvent.click(checkbox);
    await expect(args.onCheckedChange).toHaveBeenCalledWith(false);
  },
};
</file>

<file path="apps/web/src/components/ui/checkbox.tsx">
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";

import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        "peer relative flex size-4 shrink-0 items-center justify-center rounded-none border border-input outline-none transition-colors after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 group-has-disabled/field:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:bg-input/30 dark:data-checked:bg-primary dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      )}
      data-slot="checkbox"
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className="grid place-content-center text-current transition-none [&>svg]:size-3.5"
        data-slot="checkbox-indicator"
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
</file>

<file path="apps/web/src/components/ui/dropdown-menu.stories.tsx">
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "@storybook/test";
import { useState } from "react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const meta = {
  title: "UI/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline">Open</Button>} />
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithShortcuts: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline">Menu</Button>} />
      <DropdownMenuContent className="w-48">
        <DropdownMenuItem>
          New Tab
          <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          New Window
          <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Copy
          <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Paste
          <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="outline">Account</Button>}
      />
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <svg
              aria-hidden="true"
              className="mr-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <svg
              aria-hidden="true"
              className="mr-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <svg
            aria-hidden="true"
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithCheckboxItems: Story = {
  render() {
    const [showStatusBar, setShowStatusBar] = useState(true);
    const [showActivityBar, setShowActivityBar] = useState(false);
    const [showPanel, setShowPanel] = useState(false);

    return (
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline">View</Button>} />
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
          >
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

export const WithRadioItems: Story = {
  render() {
    const [position, setPosition] = useState("bottom");

    return (
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="outline">Position</Button>}
        />
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup onValueChange={setPosition} value={position}>
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

export const WithSubmenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline">More</Button>} />
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>New File</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Email link</DropdownMenuItem>
            <DropdownMenuItem>Copy link</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Embed</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Download</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const DisabledItems: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="outline">Actions</Button>}
      />
      <DropdownMenuContent className="w-48">
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Duplicate</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>Archive</DropdownMenuItem>
        <DropdownMenuItem disabled>Move</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const DestructiveItems: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="outline">Danger Zone</Button>}
      />
      <DropdownMenuContent className="w-48">
        <DropdownMenuItem>Save</DropdownMenuItem>
        <DropdownMenuItem>Export</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <svg
            aria-hidden="true"
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Delete
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive">
          <svg
            aria-hidden="true"
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Reset Data
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const UserMenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button size="icon" variant="ghost">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-medium text-primary-foreground text-xs">
              JD
            </span>
          </Button>
        }
      />
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col gap-1">
            <p className="font-medium text-sm">John Doe</p>
            <p className="text-muted-foreground text-xs">john@example.com</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>
            Subscription
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const ContextMenu: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <p className="text-muted-foreground text-xs">
        Right-click the box to open context menu
      </p>
      <div className="flex h-32 w-64 items-center justify-center rounded border border-dashed">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button size="sm" variant="outline">
                Click for Menu
              </Button>
            }
          />
          <DropdownMenuContent>
            <DropdownMenuItem>Cut</DropdownMenuItem>
            <DropdownMenuItem>Copy</DropdownMenuItem>
            <DropdownMenuItem>Paste</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  ),
};
</file>

<file path="apps/web/src/components/ui/dropdown-menu.tsx">
import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import type * as React from "react";
import { cn } from "@/lib/utils";

function DropdownMenu({ ...props }: MenuPrimitive.Root.Props) {
  return <MenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({ ...props }: MenuPrimitive.Portal.Props) {
  return <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}

function DropdownMenuTrigger({ ...props }: MenuPrimitive.Trigger.Props) {
  return <MenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;
}

function DropdownMenuContent({
  align = "start",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  className,
  ...props
}: MenuPrimitive.Popup.Props &
  Pick<
    MenuPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        className="isolate z-50 outline-none"
        side={side}
        sideOffset={sideOffset}
      >
        <MenuPrimitive.Popup
          className={cn(
            "data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--available-height) w-(--anchor-width) min-w-32 origin-(--transform-origin) overflow-y-auto overflow-x-hidden rounded-none bg-popover text-popover-foreground shadow-md outline-none ring-1 ring-foreground/10 duration-100 data-closed:animate-out data-open:animate-in data-closed:overflow-hidden",
            className
          )}
          data-slot="dropdown-menu-content"
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

function DropdownMenuGroup({ ...props }: MenuPrimitive.Group.Props) {
  return <MenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: MenuPrimitive.GroupLabel.Props & {
  inset?: boolean;
}) {
  return (
    <MenuPrimitive.GroupLabel
      className={cn(
        "px-2 py-2 text-muted-foreground text-xs data-[inset]:pl-8",
        className
      )}
      data-inset={inset}
      data-slot="dropdown-menu-label"
      {...props}
    />
  );
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: MenuPrimitive.Item.Props & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  return (
    <MenuPrimitive.Item
      className={cn(
        "group/dropdown-menu-item relative flex cursor-default select-none items-center gap-2 rounded-none px-2 py-2 text-xs outline-hidden focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-disabled:opacity-50 data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 data-[variant=destructive]:*:[svg]:text-destructive",
        className
      )}
      data-inset={inset}
      data-slot="dropdown-menu-item"
      data-variant={variant}
      {...props}
    />
  );
}

function DropdownMenuSub({ ...props }: MenuPrimitive.SubmenuRoot.Props) {
  return <MenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: MenuPrimitive.SubmenuTrigger.Props & {
  inset?: boolean;
}) {
  return (
    <MenuPrimitive.SubmenuTrigger
      className={cn(
        "flex cursor-default select-none items-center gap-2 rounded-none px-2 py-2 text-xs outline-hidden focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-open:bg-accent data-[inset]:pl-8 data-open:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      data-inset={inset}
      data-slot="dropdown-menu-sub-trigger"
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </MenuPrimitive.SubmenuTrigger>
  );
}

function DropdownMenuSubContent({
  align = "start",
  alignOffset = -3,
  side = "right",
  sideOffset = 0,
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuContent>) {
  return (
    <DropdownMenuContent
      align={align}
      alignOffset={alignOffset}
      className={cn(
        "data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-auto min-w-[96px] rounded-none bg-popover text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-closed:animate-out data-open:animate-in",
        className
      )}
      data-slot="dropdown-menu-sub-content"
      side={side}
      sideOffset={sideOffset}
      {...props}
    />
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: MenuPrimitive.CheckboxItem.Props) {
  return (
    <MenuPrimitive.CheckboxItem
      checked={checked}
      className={cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-none py-2 pr-8 pl-2 text-xs outline-hidden focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      data-slot="dropdown-menu-checkbox-item"
      {...props}
    >
      <span
        className="pointer-events-none pointer-events-none absolute right-2 flex items-center justify-center"
        data-slot="dropdown-menu-checkbox-item-indicator"
      >
        <MenuPrimitive.CheckboxItemIndicator>
          <CheckIcon />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuRadioGroup({ ...props }: MenuPrimitive.RadioGroup.Props) {
  return (
    <MenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  );
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: MenuPrimitive.RadioItem.Props) {
  return (
    <MenuPrimitive.RadioItem
      className={cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-none py-2 pr-8 pl-2 text-xs outline-hidden focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      data-slot="dropdown-menu-radio-item"
      {...props}
    >
      <span
        className="pointer-events-none pointer-events-none absolute right-2 flex items-center justify-center"
        data-slot="dropdown-menu-radio-item-indicator"
      >
        <MenuPrimitive.RadioItemIndicator>
          <CheckIcon />
        </MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: MenuPrimitive.Separator.Props) {
  return (
    <MenuPrimitive.Separator
      className={cn("-mx-1 h-px bg-border", className)}
      data-slot="dropdown-menu-separator"
      {...props}
    />
  );
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "ml-auto text-muted-foreground text-xs tracking-widest group-focus/dropdown-menu-item:text-accent-foreground",
        className
      )}
      data-slot="dropdown-menu-shortcut"
      {...props}
    />
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};
</file>

<file path="apps/web/src/components/ui/input.stories.tsx">
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "@storybook/test";
import { Input } from "./input";
import { Label } from "./label";

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url", "search"],
      description: "The type of input",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
    "aria-invalid": {
      control: "boolean",
      description: "Whether the input is in an invalid state",
    },
  },
  args: {
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "<email@example.com>",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
  },
};

export const NumberInput: Story = {
  args: {
    type: "number",
    placeholder: "0",
  },
};

export const Search: Story = {
  args: {
    type: "search",
    placeholder: "Search...",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Cannot edit",
    disabled: true,
  },
};

export const DisabledWithValue: Story = {
  args: {
    defaultValue: "Disabled value",
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    placeholder: "Invalid input",
    "aria-invalid": true,
  },
};

export const InvalidWithValue: Story = {
  args: {
    defaultValue: "bad@email",
    type: "email",
    "aria-invalid": true,
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="input-with-label">Email address</Label>
      <Input {...args} id="input-with-label" />
    </div>
  ),
  args: {
    type: "email",
    placeholder: "<email@example.com>",
  },
};

export const WithLabelDisabled: Story = {
  render: (args) => (
    <div className="group flex flex-col gap-1.5" data-disabled={args.disabled}>
      <Label htmlFor="disabled-input">Disabled field</Label>
      <Input {...args} id="disabled-input" />
    </div>
  ),
  args: {
    placeholder: "Cannot edit",
    disabled: true,
  },
};

export const WithLabelInvalid: Story = {
  render: (args) => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="invalid-input">Email address</Label>
      <Input {...args} id="invalid-input" />
      <span className="text-destructive text-xs">
        Please enter a valid email address
      </span>
    </div>
  ),
  args: {
    type: "email",
    defaultValue: "invalid-email",
    "aria-invalid": true,
  },
};

export const FullWidth: Story = {
  parameters: {
    layout: "padded",
  },
  render: (args) => (
    <div className="w-full max-w-md">
      <Input {...args} className="w-full" />
    </div>
  ),
  args: {
    placeholder: "Full width input",
  },
};

export const CustomWidth: Story = {
  render: (args) => <Input {...args} className="w-64" />,
  args: {
    placeholder: "Custom 256px width",
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <Label>Default</Label>
        <Input placeholder="Default input" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label>With value</Label>
        <Input defaultValue="Input with value" />
      </div>
      <div className="group flex flex-col gap-1.5" data-disabled={true}>
        <Label>Disabled</Label>
        <Input disabled placeholder="Disabled input" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label>Invalid</Label>
        <Input aria-invalid={true} defaultValue="invalid value" />
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
};

export const AllTypes: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-1.5">
        <Label>Text</Label>
        <Input placeholder="Text input" type="text" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label>Email</Label>
        <Input placeholder="email@example.com" type="email" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label>Password</Label>
        <Input placeholder="Password" type="password" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label>Number</Label>
        <Input placeholder="0" type="number" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label>Tel</Label>
        <Input placeholder="+1 (555) 000-0000" type="tel" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label>URL</Label>
        <Input placeholder="https://example.com" type="url" />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label>Search</Label>
        <Input placeholder="Search..." type="search" />
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
};
</file>

<file path="apps/web/src/components/ui/input.tsx">
import { Input as InputPrimitive } from "@base-ui/react/input";
import type * as React from "react";

import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  ref,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      className={cn(
        "h-8 w-full min-w-0 rounded-none border border-input bg-transparent px-2.5 py-1 text-xs outline-none transition-colors file:inline-flex file:h-6 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-xs placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 md:text-xs dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:disabled:bg-input/80",
        className
      )}
      data-slot="input"
      // biome-ignore lint/suspicious/noExplicitAny: React types incompatibility between base-ui and @types/react
      ref={ref as any}
      type={type}
      {...props}
    />
  );
}

export { Input };
</file>

<file path="apps/web/src/components/ui/label.stories.tsx">
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./input";
import { Label } from "./label";

const meta = {
  title: "UI/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Label text content",
    },
    htmlFor: {
      control: "text",
      description: "ID of the form element the label is for",
    },
  },
  args: {
    children: "Label",
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default label",
  },
};

export const WithInput: Story = {
  render: (args) => (
    <div className="flex flex-col gap-1.5">
      <Label {...args} htmlFor="example-input">
        Email address
      </Label>
      <Input id="example-input" placeholder="email@example.com" type="email" />
    </div>
  ),
};

export const Required: Story = {
  render: (args) => (
    <div className="flex flex-col gap-1.5">
      <Label {...args} htmlFor="required-input">
        <span>Email address</span>
        <span className="text-destructive">*</span>
      </Label>
      <Input id="required-input" placeholder="email@example.com" type="email" />
    </div>
  ),
};

export const WithHelpText: Story = {
  render: (args) => (
    <div className="flex flex-col gap-1.5">
      <Label {...args} htmlFor="help-input">
        Username
      </Label>
      <Input id="help-input" placeholder="Enter username" />
      <span className="text-muted-foreground text-xs">
        This will be your public display name
      </span>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <div className="group flex flex-col gap-1.5" data-disabled={true}>
      <Label {...args} htmlFor="disabled-input">
        Disabled field
      </Label>
      <Input disabled id="disabled-input" placeholder="Cannot edit" />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <input
        className="h-4 w-4 rounded border-input"
        id="checkbox-example"
        type="checkbox"
      />
      <Label {...args} htmlFor="checkbox-example">
        Accept terms and conditions
      </Label>
    </div>
  ),
};

export const WithRadio: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <input
          className="h-4 w-4 border-input"
          id="radio-1"
          name="radio-group"
          type="radio"
        />
        <Label htmlFor="radio-1">Option 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <input
          className="h-4 w-4 border-input"
          id="radio-2"
          name="radio-group"
          type="radio"
        />
        <Label htmlFor="radio-2">Option 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <input
          className="h-4 w-4 border-input"
          id="radio-3"
          name="radio-group"
          type="radio"
        />
        <Label htmlFor="radio-3">Option 3</Label>
      </div>
    </div>
  ),
};

export const LongLabel: Story = {
  args: {
    children:
      "This is a very long label text that might wrap to multiple lines depending on the container width",
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <Label {...args}>
      <svg
        aria-hidden="true"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Email address</span>
    </Label>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="default">Default label</Label>
        <Input id="default" placeholder="Default input" />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="required">
          <span>Required field</span>
          <span className="text-destructive">*</span>
        </Label>
        <Input id="required" placeholder="Required input" />
      </div>

      <div className="group flex flex-col gap-1.5" data-disabled={true}>
        <Label htmlFor="disabled-variant">Disabled field</Label>
        <Input disabled id="disabled-variant" placeholder="Disabled" />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="error">
          <span>Error field</span>
        </Label>
        <Input aria-invalid={true} defaultValue="Invalid" id="error" />
        <span className="text-destructive text-xs">
          This field has an error
        </span>
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
};
</file>

<file path="apps/web/src/components/ui/label.tsx">
"use client";

import type * as React from "react";

import { cn } from "@/lib/utils";

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={cn(
        "flex select-none items-center gap-2 text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
        className
      )}
      data-slot="label"
      {...props}
    />
  );
}

export { Label };
</file>

<file path="apps/web/src/components/ui/skeleton.stories.tsx">
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card, CardContent, CardHeader } from "./card";
import { Skeleton } from "./skeleton";

const meta = {
  title: "UI/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes for sizing and shape",
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "h-4 w-48",
  },
};

export const Circle: Story = {
  args: {
    className: "h-12 w-12 rounded-full",
  },
};

export const Square: Story = {
  args: {
    className: "h-24 w-24",
  },
};

export const Text: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-4 w-64" />
      <Skeleton className="h-4 w-56" />
      <Skeleton className="h-4 w-48" />
    </div>
  ),
};

export const Paragraph: Story = {
  render: () => (
    <div className="flex w-[350px] flex-col gap-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  ),
};

export const Avatar: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="flex flex-col gap-1.5">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
  ),
};

export const ProfileCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </CardContent>
    </Card>
  ),
};

export const ListItem: Story = {
  render: () => (
    <div className="flex w-[350px] items-center gap-4 p-4">
      <Skeleton className="h-12 w-12 shrink-0 rounded" />
      <div className="flex flex-1 flex-col gap-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
  ),
};

export const List: Story = {
  render: () => (
    <div className="w-[350px] divide-y">
      <div className="flex items-center gap-4 p-4">
        <Skeleton className="h-12 w-12 shrink-0 rounded" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <div className="flex items-center gap-4 p-4">
        <Skeleton className="h-12 w-12 shrink-0 rounded" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <div className="flex items-center gap-4 p-4">
        <Skeleton className="h-12 w-12 shrink-0 rounded" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <div className="flex items-center gap-4 p-4">
        <Skeleton className="h-12 w-12 shrink-0 rounded" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
    </div>
  ),
};

export const ImageWithText: Story = {
  render: () => (
    <div className="flex w-[350px] flex-col gap-4">
      <Skeleton className="h-48 w-full" />
      <div className="flex flex-col gap-2 px-2">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  ),
};

export const Form: Story = {
  render: () => (
    <div className="flex w-[350px] flex-col gap-4 p-4">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-24 w-full" />
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  ),
};

export const Stats: Story = {
  render: () => (
    <div className="grid w-[600px] grid-cols-3 gap-4">
      <Card>
        <CardContent className="flex flex-col gap-2 p-4">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-3 w-16" />
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col gap-2 p-4">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-3 w-16" />
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col gap-2 p-4">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-3 w-16" />
        </CardContent>
      </Card>
    </div>
  ),
};

export const TableRow: Story = {
  render: () => (
    <div className="w-[600px]">
      <div className="flex items-center gap-4 border-b p-4">
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-48" />
        <Skeleton className="ml-auto h-4 w-20" />
      </div>
      <div className="flex items-center gap-4 border-b p-4">
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-48" />
        <Skeleton className="ml-auto h-4 w-20" />
      </div>
      <div className="flex items-center gap-4 border-b p-4">
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-48" />
        <Skeleton className="ml-auto h-4 w-20" />
      </div>
      <div className="flex items-center gap-4 border-b p-4">
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-48" />
        <Skeleton className="ml-auto h-4 w-20" />
      </div>
      <div className="flex items-center gap-4 border-b p-4">
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-48" />
        <Skeleton className="ml-auto h-4 w-20" />
      </div>
    </div>
  ),
};

export const Dashboard: Story = {
  render: () => (
    <div className="flex w-[800px] flex-col gap-6 p-6">
      {/*Header*/}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-32" />
        </div>
        <Skeleton className="h-10 w-32" />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex flex-col gap-2 p-4">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-7 w-24" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col gap-2 p-4">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-7 w-24" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col gap-2 p-4">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-7 w-24" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col gap-2 p-4">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-7 w-24" />
          </CardContent>
        </Card>
      </div>

      {/* Chart placeholder */}
      <Card>
        <CardHeader>
          <Skeleton className="h-5 w-32" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-64 w-full" />
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
};
</file>

<file path="apps/web/src/components/ui/skeleton.tsx">
import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-none bg-muted", className)}
      data-slot="skeleton"
      {...props}
    />
  );
}

export { Skeleton };
</file>

<file path="apps/web/src/components/ui/sonner.stories.tsx">
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ThemeProvider } from "next-themes";
import { toast } from "sonner";
import { Button } from "./button";
import { Toaster } from "./sonner";

// Decorator to provide theme context
const ThemeDecorator = (Story: React.ComponentType) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="light"
    disableTransitionOnChange
  >
    <Story />
    <Toaster />
  </ThemeProvider>
);

const meta = {
  title: "UI/Toaster",
  component: Toaster,
  decorators: [ThemeDecorator],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Button onClick={() => toast("Default toast message")}>Show Toast</Button>
  ),
};

export const Success: Story = {
  render: () => (
    <Button onClick={() => toast.success("Action completed successfully!")}>
      Show Success Toast
    </Button>
  ),
};

export const ErrorToast: Story = {
  render: () => (
    <Button
      onClick={() => toast.error("Something went wrong!")}
      variant="destructive"
    >
      Show Error Toast
    </Button>
  ),
};

export const Warning: Story = {
  render: () => (
    <Button
      onClick={() => toast.warning("Please check your input")}
      variant="outline"
    >
      Show Warning Toast
    </Button>
  ),
};

export const Info: Story = {
  render: () => (
    <Button
      onClick={() => toast.info("Here is some information")}
      variant="secondary"
    >
      Show Info Toast
    </Button>
  ),
};

export const Loading: Story = {
  render: () => (
    <Button
      onClick={() => {
        const toastId = toast.loading("Loading data...");
        setTimeout(() => {
          toast.success("Data loaded!", { id: toastId });
        }, 2000);
      }}
    >
      Show Loading Toast
    </Button>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast("File uploaded", {
          description: "Your file has been uploaded successfully.",
        })
      }
    >
      Toast with Description
    </Button>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast("Message sent", {
          action: {
            label: "Undo",
            onClick: () => toast.info("Action undone"),
          },
        })
      }
    >
      Toast with Action
    </Button>
  ),
};

export const WithCancel: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast("Delete item?", {
          action: {
            label: "Delete",
            onClick: () => toast.success("Item deleted"),
          },
          cancel: {
            label: "Cancel",
            onClick: () => toast.info("Cancelled"),
          },
        })
      }
    >
      Toast with Cancel
    </Button>
  ),
};

export const PromiseToast: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast.promise(
          new window.Promise<void>((resolve) => setTimeout(resolve, 2000)),
          {
            loading: "Saving changes...",
            success: "Changes saved!",
            error: "Failed to save changes",
          }
        )
      }
    >
      Promise Toast
    </Button>
  ),
};

export const CustomDuration: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button
        onClick={() => toast("Quick toast", { duration: 1000 })}
        variant="outline"
      >
        1 second
      </Button>
      <Button
        onClick={() => toast("Normal toast", { duration: 3000 })}
        variant="outline"
      >
        3 seconds
      </Button>
      <Button
        onClick={() => toast("Long toast", { duration: 10_000 })}
        variant="outline"
      >
        10 seconds
      </Button>
    </div>
  ),
};

export const Dismissible: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast("This can be dismissed by clicking", {
          duration: Number.POSITIVE_INFINITY,
        })
      }
    >
      Persistent Toast
    </Button>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Button onClick={() => toast("Default message")} variant="outline">
        Default
      </Button>
      <Button
        onClick={() => toast.success("Success message")}
        variant="outline"
      >
        Success
      </Button>
      <Button onClick={() => toast.error("Error message")} variant="outline">
        Error
      </Button>
      <Button
        onClick={() => toast.warning("Warning message")}
        variant="outline"
      >
        Warning
      </Button>
      <Button onClick={() => toast.info("Info message")} variant="outline">
        Info
      </Button>
      <Button
        onClick={() => {
          const id = toast.loading("Loading...");
          setTimeout(() => toast.dismiss(id), 2000);
        }}
        variant="outline"
      >
        Loading
      </Button>
    </div>
  ),
};

export const RichContent: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast(
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
              JD
            </span>
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-muted-foreground text-xs">
                Sent you a message
              </p>
            </div>
          </div>
        )
      }
    >
      Rich Content Toast
    </Button>
  ),
};

export const DismissAll: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button
        onClick={() => {
          toast("Toast 1");
          toast("Toast 2");
          toast("Toast 3");
        }}
        variant="outline"
      >
        Show Multiple
      </Button>
      <Button onClick={() => toast.dismiss()} variant="destructive">
        Dismiss All
      </Button>
    </div>
  ),
};
</file>

<file path="apps/web/src/components/ui/sonner.tsx">
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import type { ToasterProps } from "sonner";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      theme={theme as ToasterProps["theme"]}
      toastOptions={{
        classNames: {
          toast: "cn-toast",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
</file>

<file path="apps/web/src/components/header.stories.tsx">
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ThemeProvider } from "next-themes";
import Header from "./header";

const ThemeDecorator = (Story: React.ComponentType) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="light"
    disableTransitionOnChange
  >
    <Story />
  </ThemeProvider>
);

const meta = {
  title: "Components/Header",
  component: Header,
  decorators: [ThemeDecorator],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OnDashboard: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/dashboard",
      },
    },
  },
};

export const OnTodos: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/todos",
      },
    },
  },
};

export const WithContainer: Story = {
  render: () => (
    <div className="mx-auto max-w-4xl">
      <Header />
      <div className="p-4">
        <p className="text-muted-foreground">Page content goes here...</p>
      </div>
    </div>
  ),
};
</file>

<file path="apps/web/src/components/header.tsx">
"use client";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/todos", label: "Todos" },
    { to: "/ai", label: "AI Chat" },
  ] as const;

  return (
    <div>
      <div className="flex flex-row items-center justify-between px-2 py-1">
        <nav className="flex gap-4 text-lg">
          {links.map(({ to, label }) => {
            return (
              <Link href={to} key={to}>
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
      <hr />
    </div>
  );
}
</file>

<file path="apps/web/src/components/loader.stories.tsx">
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Loader from "./loader";

const meta = {
  title: "Components/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InContainer: Story = {
  render: () => (
    <div className="h-64 w-64 rounded border">
      <Loader />
    </div>
  ),
};

export const FullPage: Story = {
  render: () => (
    <div className="h-screen w-screen">
      <Loader />
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
</file>

<file path="apps/web/src/components/loader.tsx">
import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <div className="flex h-full items-center justify-center pt-8">
      <Loader2 className="animate-spin" />
    </div>
  );
}
</file>

<file path="apps/web/src/components/mode-toggle.stories.tsx">
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ThemeProvider } from "next-themes";
import { ModeToggle } from "./mode-toggle";

const ThemeDecorator = (Story: React.ComponentType) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="light"
    disableTransitionOnChange
  >
    <Story />
  </ThemeProvider>
);

const meta = {
  title: "Components/ModeToggle",
  component: ModeToggle,
  decorators: [ThemeDecorator],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ModeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InHeader: Story = {
  render: () => (
    <div className="flex w-96 items-center justify-between border-b p-4">
      <span className="font-medium">Settings</span>
      <ModeToggle />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <span className="text-muted-foreground text-sm">Theme</span>
      <ModeToggle />
    </div>
  ),
};
</file>

<file path="apps/web/src/components/mode-toggle.tsx">
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button size="icon" variant="outline" />}>
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
</file>

<file path="apps/web/src/components/providers.tsx">
"use client";

import { ConvexBetterAuthProvider } from "@convex-dev/better-auth/react";
import { env } from "@convoexpo-and-nextjs-web-bun-better-auth/env/web";
import { ConvexReactClient } from "convex/react";
import { authClient } from "@/lib/auth-client";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "./ui/sonner";

const convex = new ConvexReactClient(env.NEXT_PUBLIC_CONVEX_URL);

export default function Providers({
  children,
  initialToken,
}: {
  children: React.ReactNode;
  initialToken?: string | null;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
    >
      <ConvexBetterAuthProvider
        authClient={authClient}
        client={convex}
        initialToken={initialToken}
      >
        {children}
      </ConvexBetterAuthProvider>
      <Toaster richColors />
    </ThemeProvider>
  );
}
</file>

<file path="apps/web/src/components/sign-in-form.stories.tsx">
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn, userEvent, within } from "@storybook/test";
import { ThemeProvider } from "next-themes";
import SignInForm from "./sign-in-form";
import { Toaster } from "./ui/sonner";

const EMAIL_REGEX = /email/i;
const PASSWORD_REGEX = /password/i;
const NEED_ACCOUNT_REGEX = /need an account/i;

const ThemeDecorator = (Story: React.ComponentType) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="light"
    disableTransitionOnChange
  >
    <Story />
    <Toaster />
  </ThemeProvider>
);

const meta = {
  title: "Components/SignInForm",
  component: SignInForm,
  decorators: [ThemeDecorator],
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/auth",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    onSwitchToSignUp: fn(),
  },
} satisfies Meta<typeof SignInForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithContainer: Story = {
  render: (args) => (
    <div className="w-[400px] rounded-lg border shadow-sm">
      <SignInForm {...args} />
    </div>
  ),
};

export const InCard: Story = {
  render: (args) => (
    <div className="flex min-h-screen items-center justify-center bg-muted/50 p-4">
      <div className="w-full max-w-md rounded-xl bg-card shadow-lg">
        <SignInForm {...args} />
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};

export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByLabelText(EMAIL_REGEX);
    const passwordInput = canvas.getByLabelText(PASSWORD_REGEX);

    await userEvent.type(emailInput, "test@example.com");
    await userEvent.type(passwordInput, "password123");

    await expect(emailInput).toHaveValue("test@example.com");
    await expect(passwordInput).toHaveValue("password123");
  },
};

export const SwitchToSignUp: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const switchButton = canvas.getByRole("button", {
      name: NEED_ACCOUNT_REGEX,
    });
    await userEvent.click(switchButton);

    await expect(args.onSwitchToSignUp).toHaveBeenCalled();
  },
};
</file>

<file path="apps/web/src/components/sign-in-form.tsx">
import { useForm } from "@tanstack/react-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import z from "zod";
import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function SignInForm({
  onSwitchToSignUp,
}: {
  onSwitchToSignUp: () => void;
}) {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      await authClient.signIn.email(
        {
          email: value.email,
          password: value.password,
        },
        {
          onSuccess: () => {
            router.push("/dashboard");
            toast.success("Sign in successful");
          },
          onError: (error) => {
            toast.error(error.error.message || error.error.statusText);
          },
        }
      );
    },
    validators: {
      onSubmit: z.object({
        email: z.email("Invalid email address"),
        password: z.string().min(8, "Password must be at least 8 characters"),
      }),
    },
  });

  return (
    <div className="mx-auto mt-10 w-full max-w-md p-6">
      <h1 className="mb-6 text-center font-bold text-3xl">Welcome Back</h1>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div>
          <form.Field name="email">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Email</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  type="email"
                  value={field.state.value}
                />
                {field.state.meta.errors.map((error) => (
                  <p className="text-red-500" key={error?.message}>
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <div>
          <form.Field name="password">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Password</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  type="password"
                  value={field.state.value}
                />
                {field.state.meta.errors.map((error) => (
                  <p className="text-red-500" key={error?.message}>
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <form.Subscribe>
          {(state) => (
            <Button
              className="w-full"
              disabled={!state.canSubmit || state.isSubmitting}
              type="submit"
            >
              {state.isSubmitting ? "Submitting..." : "Sign In"}
            </Button>
          )}
        </form.Subscribe>
      </form>

      <div className="mt-4 text-center">
        <Button
          className="text-indigo-600 hover:text-indigo-800"
          onClick={onSwitchToSignUp}
          variant="link"
        >
          Need an account? Sign Up
        </Button>
      </div>
    </div>
  );
}
</file>

<file path="apps/web/src/components/sign-up-form.stories.tsx">
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "@storybook/test";
import { ThemeProvider } from "next-themes";
import SignUpForm from "./sign-up-form";
import { Toaster } from "./ui/sonner";

const ThemeDecorator = (Story: React.ComponentType) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="light"
    disableTransitionOnChange
  >
    <Story />
    <Toaster />
  </ThemeProvider>
);

const meta = {
  title: "Components/SignUpForm",
  component: SignUpForm,
  decorators: [ThemeDecorator],
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/auth",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    onSwitchToSignIn: fn(),
  },
} satisfies Meta<typeof SignUpForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithContainer: Story = {
  render: (args) => (
    <div className="w-[400px] rounded-lg border shadow-sm">
      <SignUpForm {...args} />
    </div>
  ),
};

export const InCard: Story = {
  render: (args) => (
    <div className="flex min-h-screen items-center justify-center bg-muted/50 p-4">
      <div className="w-full max-w-md rounded-xl bg-card shadow-lg">
        <SignUpForm {...args} />
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};

export const SideBySide: Story = {
  render: (args) => (
    <div className="flex gap-8 p-4">
      <div className="w-[400px] rounded-lg border shadow-sm">
        <SignUpForm {...args} />
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
};
</file>

<file path="apps/web/src/components/sign-up-form.tsx">
import { useForm } from "@tanstack/react-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import z from "zod";
import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function SignUpForm({
  onSwitchToSignIn,
}: {
  onSwitchToSignIn: () => void;
}) {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    onSubmit: async ({ value }) => {
      await authClient.signUp.email(
        {
          email: value.email,
          password: value.password,
          name: value.name,
        },
        {
          onSuccess: () => {
            router.push("/dashboard");
            toast.success("Sign up successful");
          },
          onError: (error) => {
            toast.error(error.error.message || error.error.statusText);
          },
        }
      );
    },
    validators: {
      onSubmit: z.object({
        name: z.string().min(2, "Name must be at least 2 characters"),
        email: z.email("Invalid email address"),
        password: z.string().min(8, "Password must be at least 8 characters"),
      }),
    },
  });

  return (
    <div className="mx-auto mt-10 w-full max-w-md p-6">
      <h1 className="mb-6 text-center font-bold text-3xl">Create Account</h1>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div>
          <form.Field name="name">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Name</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  value={field.state.value}
                />
                {field.state.meta.errors.map((error) => (
                  <p className="text-red-500" key={error?.message}>
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <div>
          <form.Field name="email">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Email</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  type="email"
                  value={field.state.value}
                />
                {field.state.meta.errors.map((error) => (
                  <p className="text-red-500" key={error?.message}>
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <div>
          <form.Field name="password">
            {(field) => (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Password</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  type="password"
                  value={field.state.value}
                />
                {field.state.meta.errors.map((error) => (
                  <p className="text-red-500" key={error?.message}>
                    {error?.message}
                  </p>
                ))}
              </div>
            )}
          </form.Field>
        </div>

        <form.Subscribe>
          {(state) => (
            <Button
              className="w-full"
              disabled={!state.canSubmit || state.isSubmitting}
              type="submit"
            >
              {state.isSubmitting ? "Submitting..." : "Sign Up"}
            </Button>
          )}
        </form.Subscribe>
      </form>

      <div className="mt-4 text-center">
        <Button
          className="text-indigo-600 hover:text-indigo-800"
          onClick={onSwitchToSignIn}
          variant="link"
        >
          Already have an account? Sign In
        </Button>
      </div>
    </div>
  );
}
</file>

<file path="apps/web/src/components/theme-provider.tsx">
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type * as React from "react";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
</file>

<file path="apps/web/src/components/user-menu.tsx">
import { api } from "@convoexpo-and-nextjs-web-bun-better-auth/backend/convex/_generated/api";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";

export default function UserMenu() {
  const router = useRouter();
  const user = useQuery(api.auth.getCurrentUser);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        {user?.name}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-card">
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>{user?.email}</DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              authClient.signOut({
                fetchOptions: {
                  onSuccess: () => {
                    router.push("/dashboard");
                  },
                },
              });
            }}
            variant="destructive"
          >
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
</file>

<file path="apps/web/src/docs/Colors.mdx">
import { Meta } from "@storybook/addon-docs";

<Meta title="Documentation/Colors" />

# Color System

The application uses CSS custom properties for theming, supporting both light and dark modes.

## Semantic Colors

These colors are semantic and change based on the current theme:

### Background Colors

| Token | Usage |
|-------|-------|
| `--background` | Page background |
| `--card` | Card backgrounds |
| `--popover` | Dropdown/popover backgrounds |

### Foreground Colors

| Token | Usage |
|-------|-------|
| `--foreground` | Default text color |
| `--card-foreground` | Text on cards |
| `--muted-foreground` | Secondary/helper text |

### Interactive Colors

| Token | Usage |
|-------|-------|
| `--primary` | Primary actions (buttons, links) |
| `--secondary` | Secondary actions |
| `--accent` | Highlighted elements |
| `--destructive` | Dangerous actions (delete, errors) |

### State Colors

| Token | Usage |
|-------|-------|
| `--muted` | Disabled/inactive states |
| `--border` | Borders and dividers |
| `--ring` | Focus rings |

## Usage in Components

### With Tailwind Classes

```tsx
// Background
<div className="bg-background" />
<div className="bg-card" />
<div className="bg-muted" />

// Text
<p className="text-foreground" />
<p className="text-muted-foreground" />
<p className="text-destructive" />

// Borders
<div className="border-border" />
<div className="ring-ring" />
```

### In CSS

```css
.custom-element {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  border-color: hsl(var(--border));
}
```

## Dark Mode

The color system automatically adapts to dark mode. Toggle between light and dark using the toolbar in Storybook.

All semantic color tokens have both light and dark values defined, ensuring consistent contrast and readability across themes.

## Color Swatches

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '2rem' }}>
  <div style={{ padding: '1rem', backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: '0.5rem' }}>
    <div style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>background</div>
  </div>
  <div style={{ padding: '1rem', backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '0.5rem' }}>
    <div style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>card</div>
  </div>
  <div style={{ padding: '1rem', backgroundColor: 'hsl(var(--primary))', borderRadius: '0.5rem' }}>
    <div style={{ fontSize: '0.75rem', color: 'hsl(var(--primary-foreground))' }}>primary</div>
  </div>
  <div style={{ padding: '1rem', backgroundColor: 'hsl(var(--destructive))', borderRadius: '0.5rem' }}>
    <div style={{ fontSize: '0.75rem', color: 'hsl(var(--destructive-foreground))' }}>destructive</div>
  </div>
</div>
</file>

<file path="apps/web/src/docs/GettingStarted.mdx">
import { Meta } from "@storybook/addon-docs";

<Meta title="Documentation/Getting Started" />

# Getting Started

This guide will help you get up and running with the component library.

## Prerequisites

- Node.js 18+
- Bun package manager
- Git

## Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd convoexpo-and-nextjs-web-bun-better-auth
bun install
```

## Running the Development Environment

### Start All Apps

```bash
bun run dev
```

This starts:

- Web app at `http://localhost:3001`
- Native app via Expo
- Convex backend

### Start Storybook Only

```bash
cd apps/web
bun run storybook
```

Storybook runs at `http://localhost:6006`.

## Project Structure

```
├── apps/
│   ├── web/              # Next.js web application
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── ui/   # Primitive components
│   │   │   │   └── ...   # Feature components
│   │   │   └── docs/     # MDX documentation
│   │   └── .storybook/   # Storybook configuration
│   └── native/           # Expo React Native app
├── packages/
│   ├── backend/          # Convex backend
│   └── env/              # Environment variables
└── package.json
```

## Creating a New Component

### 1. Create the Component

```tsx
// apps/web/src/components/ui/my-component.tsx
import { cn } from "@/lib/utils";

interface MyComponentProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
  className?: string;
}

export function MyComponent({
  children,
  variant = "default",
  className,
}: MyComponentProps) {
  return (
    <div
      className={cn(
        "rounded-md p-4",
        variant === "outline" && "border",
        className
      )}
    >
      {children}
    </div>
  );
}
```

### 2. Create the Story

```tsx
// apps/web/src/components/ui/my-component.stories.tsx
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MyComponent } from "./my-component";

const meta = {
  title: "UI/MyComponent",
  component: MyComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default content",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline variant",
  },
};
```

### 3. Validate

```bash
# Type check
bun run check-types

# Lint and format
bun biome check --write .

# Visual verification
bun run storybook
```

## Code Style

The project uses Biome for linting and formatting:

- Tab indentation
- Double quotes for strings
- Sorted Tailwind classes

Run formatting:

```bash
bun biome check --write .
```

## Testing

### Interaction Tests

Add play functions to stories for interaction testing:

```tsx
export const WithInteraction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button"));
    await expect(canvas.getByText("Clicked")).toBeVisible();
  },
};
```

### Accessibility

The `@storybook/addon-a11y` addon is configured. Check the "Accessibility" panel in Storybook for each component.

## Need Help?

- Check existing component stories for examples
- Review the documentation pages in Storybook
- Ask in the team chat
</file>

<file path="apps/web/src/docs/Introduction.mdx">
import { Meta } from "@storybook/addon-docs";

<Meta title="Documentation/Introduction" />

# City University Club - Component Library

Welcome to the component library documentation for the City University Club web application.

## Overview

This Storybook documents the UI components used across the web admin portal. The components are built with:

- **React 19** - Latest React with hooks and server components
- **Tailwind CSS v4** - Utility-first CSS framework
- **base-ui** - Unstyled accessible React primitives
- **TypeScript** - Full type safety throughout

## Getting Started

### Running Storybook

```bash
cd apps/web
bun run storybook
```

Storybook will be available at `http://localhost:6006`.

### Using Components

Import components from the UI directory:

```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
```

## Design Principles

### Accessibility First

All components are built with accessibility in mind:

- Proper ARIA attributes
- Keyboard navigation support
- Screen reader friendly
- Focus management

### Dark Mode Support

Every component supports both light and dark themes automatically via Tailwind's dark mode classes.

### Composition

Components are designed to be composable. Combine primitive components to build complex UI:

```tsx
<Card>
  <CardHeader>
    <CardTitle>Sign In</CardTitle>
  </CardHeader>
  <CardContent>
    <Input type="email" placeholder="Email" />
    <Input type="password" placeholder="Password" />
  </CardContent>
  <CardFooter>
    <Button>Sign In</Button>
  </CardFooter>
</Card>
```

## Project Structure

```
apps/web/src/
├── components/
│   ├── ui/           # Primitive UI components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   └── ...
│   └── ...           # Feature components
├── docs/             # Documentation (MDX)
└── ...
```

## Contributing

When adding new components:

1. Create the component in `components/ui/`
2. Add a story file with `.stories.tsx` extension
3. Include all variants and states
4. Add interaction tests where appropriate
5. Ensure accessibility compliance
</file>

<file path="apps/web/src/docs/Typography.mdx">
import { Meta } from "@storybook/addon-docs";

<Meta title="Documentation/Typography" />

# Typography

The application uses a consistent typography scale built on Tailwind CSS.

## Font Family

The default font stack uses system fonts for optimal performance:

```css
font-family: ui-sans-serif, system-ui, sans-serif;
```

## Type Scale

### Headings

| Class | Size | Usage |
|-------|------|-------|
| `text-4xl` | 2.25rem | Page titles |
| `text-3xl` | 1.875rem | Section headers |
| `text-2xl` | 1.5rem | Card titles |
| `text-xl` | 1.25rem | Subsections |
| `text-lg` | 1.125rem | Important text |

### Body Text

| Class | Size | Usage |
|-------|------|-------|
| `text-base` | 1rem | Default body text |
| `text-sm` | 0.875rem | Secondary text, labels |
| `text-xs` | 0.75rem | Helper text, captions |

## Font Weights

| Class | Weight | Usage |
|-------|--------|-------|
| `font-bold` | 700 | Headings, emphasis |
| `font-semibold` | 600 | Subheadings |
| `font-medium` | 500 | Labels, buttons |
| `font-normal` | 400 | Body text |

## Examples

### Headings

<div style={{ marginTop: '1rem', marginBottom: '2rem' }}>
  <h1 className="font-bold text-4xl">Heading 1</h1>
  <h2 className="font-bold text-3xl">Heading 2</h2>
  <h3 className="font-semibold text-2xl">Heading 3</h3>
  <h4 className="font-semibold text-xl">Heading 4</h4>
  <h5 className="font-medium text-lg">Heading 5</h5>
</div>

### Body Text

<div style={{ marginBottom: '2rem' }}>
  <p className="text-base">
    This is standard body text using `text-base`. It should be easy to read
    and provide good contrast against the background.
  </p>
  <p className="text-sm text-muted-foreground" style={{ marginTop: '0.5rem' }}>
    This is secondary text using `text-sm` with muted foreground color.
  </p>
  <p className="text-xs text-muted-foreground" style={{ marginTop: '0.5rem' }}>
    This is helper text using `text-xs` for captions and metadata.
  </p>
</div>

## Usage Guidelines

### Do

- Use semantic heading levels (h1-h6) for document structure
- Maintain consistent hierarchy within pages
- Use muted colors for secondary information
- Ensure sufficient contrast for readability

### Don't

- Skip heading levels (e.g., h1 to h3)
- Use more than 2-3 font weights per page
- Make text too small (minimum `text-xs`)
- Use pure black text on white (prefer foreground color)

## Code Examples

```tsx
// Page title
<h1 className="font-bold text-3xl">Dashboard</h1>

// Card title
<h2 className="font-semibold text-xl">Recent Activity</h2>

// Body text with helper
<p className="text-base">Main content here</p>
<p className="text-sm text-muted-foreground">
  Last updated 2 hours ago
</p>

// Label
<label className="font-medium text-sm">Email address</label>
```

</file>

<file path="apps/web/src/lib/auth-client.ts">
import { convexClient } from "@convex-dev/better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  plugins: [convexClient()],
});
</file>

<file path="apps/web/src/lib/auth-server.ts">
import { convexBetterAuthNextJs } from "@convex-dev/better-auth/nextjs";
import { env } from "@convoexpo-and-nextjs-web-bun-better-auth/env/web";

export const {
  handler,
  preloadAuthQuery,
  isAuthenticated,
  getToken,
  fetchAuthQuery,
  fetchAuthMutation,
  fetchAuthAction,
} = convexBetterAuthNextJs({
  convexUrl: env.NEXT_PUBLIC_CONVEX_URL,
  convexSiteUrl: env.NEXT_PUBLIC_CONVEX_SITE_URL,
});
</file>

<file path="apps/web/src/lib/utils.ts">
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
</file>

<file path="apps/web/src/index.css">
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";
@source "../node_modules/streamdown/dist/*.js";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.58 0.22 27);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.809 0.105 251.813);
  --chart-2: oklch(0.623 0.214 259.815);
  --chart-3: oklch(0.546 0.245 262.881);
  --chart-4: oklch(0.488 0.243 264.376);
  --chart-5: oklch(0.424 0.199 265.638);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.87 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.371 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.809 0.105 251.813);
  --chart-2: oklch(0.623 0.214 259.815);
  --chart-3: oklch(0.546 0.245 262.881);
  --chart-4: oklch(0.488 0.243 264.376);
  --chart-5: oklch(0.424 0.199 265.638);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}

@theme inline {
  --font-sans: "Inter Variable", sans-serif;
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --color-foreground: var(--foreground);
  --color-background: var(--background);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --radius-4xl: calc(var(--radius) + 16px);
}

@layer base {

- {
    @apply border-border outline-ring/50;
  }
  body {
    @apply font-sans bg-background text-foreground;
  }
  html {
    @apply font-sans;
  }
}
</file>

<file path="apps/web/.gitignore">
# Dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# Testing

/coverage

# Build outputs

/.next/
/out/
/build/
/dist/
.vinxi
.output
.react-router/
.tanstack/
.nitro/

# Deployment

.vercel
.netlify
.wrangler
.alchemy

# Environment & local files

.env*
!.env.example
.DS_Store
*.pem
*.local

# Logs

npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*
*.log*

# TypeScript

*.tsbuildinfo
next-env.d.ts

# IDE

.vscode/*
!.vscode/extensions.json
.idea

# Other

dev-dist

.wrangler
.dev.vars*

.open-next

wrangler.jsonc

*storybook.log
storybook-static
</file>

<file path="apps/web/components.json">
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "base-lyra",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "menuColor": "default",
  "menuAccent": "subtle",
  "registries": {}
}
</file>

<file path="apps/web/next.config.ts">
import "@convoexpo-and-nextjs-web-bun-better-auth/env/web";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  reactCompiler: true,
  transpilePackages: ["shiki"],
};

export default nextConfig;

initOpenNextCloudflareForDev();
</file>

<file path="apps/web/open-next.config.ts">
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({});
</file>

<file path="apps/web/package.json">
{
  "name": "web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --port 3001",
    "build": "next build",
    "start": "next start",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  },
  "dependencies": {
    "@base-ui/react": "^1.0.0",
    "shadcn": "^3.6.2",
    "@tanstack/react-form": "^1.27.3",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.546.0",
    "next": "^16.1.1",
    "next-themes": "^0.4.6",
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "sonner": "^2.0.5",
    "tailwind-merge": "^3.3.1",
    "tw-animate-css": "^1.3.4",
    "babel-plugin-react-compiler": "^1.0.0",
    "dotenv": "catalog:",
    "zod": "catalog:",
    "@convoexpo-and-nextjs-web-bun-better-auth/env": "workspace:*",
    "@convoexpo-and-nextjs-web-bun-better-auth/backend": "workspace:*",
    "convex": "catalog:",
    "better-auth": "catalog:",
    "@convex-dev/better-auth": "catalog:",
    "@opennextjs/cloudflare": "^1.14.6",
    "@convex-dev/agent": "catalog:",
    "streamdown": "^1.6.10"
  },
  "devDependencies": {
    "@chromatic-com/storybook": "^5.0.0",
    "@cloudflare/workers-types": "catalog:",
    "@convoexpo-and-nextjs-web-bun-better-auth/config": "workspace:*",
    "@storybook/addon-a11y": "^10.1.11",
    "@storybook/addon-docs": "^10.1.11",
    "@storybook/addon-onboarding": "^10.1.11",
    "@storybook/addon-themes": "^10.1.11",
    "@storybook/addon-vitest": "^10.1.11",
    "@storybook/nextjs-vite": "^10.1.11",
    "@storybook/test": "^8.6.15",
    "@tailwindcss/postcss": "^4.1.10",
    "@types/node": "^20",
    "@types/react": "^19.2.7",
    "@types/react-dom": "^19.2.3",
    "@vitest/browser-playwright": "^4.0.17",
    "@vitest/coverage-v8": "^4.0.17",
    "alchemy": "catalog:",
    "playwright": "^1.57.0",
    "storybook": "^10.1.11",
    "tailwindcss": "^4.1.10",
    "typescript": "catalog:",
    "vite": "^7.3.1",
    "vitest": "^4.0.17",
    "wrangler": "^4.54.0"
  }
}
</file>

<file path="apps/web/postcss.config.mjs">
const config = {
  plugins: { "@tailwindcss/postcss": {} },
};

export default config;
</file>

<file path="apps/web/tsconfig.json">
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "verbatimModuleSyntax": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    },
    "types": ["@cloudflare/workers-types"]
  },
  "include": [
    "./next-env.d.ts",
    "./**/*.ts",
    "./**/*.tsx",
    "./.next/types/**/*.ts",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts"
  ],
  "exclude": ["./node_modules"]
}
</file>

<file path="docs/android-emulator-setup.md">
# Android Emulator Setup for Expo React Native

This document covers setting up an Android emulator on Apple Silicon Mac for testing the Expo React Native application, along with Maestro UI testing integration.

## Current Environment Status (After Setup)

| Component | Status | Notes |
|-----------|--------|-------|
| Maestro | Installed (v2.1.0) | UI testing framework, connects to emulator |
| Java | JDK 21 (via Android Studio) | Android Studio's bundled JBR |
| Android Studio | Installed (2025.2.2.8) | Installed via Homebrew |
| Android SDK | Configured | `$HOME/Library/Android/sdk` |
| AVD | Pixel_8_API_35 | Android 15, ARM64, Google APIs |

## Key Understanding: Maestro vs Emulators

**Maestro is a UI testing framework, not an emulator provider.**

- Maestro downloaded OpenJDK because it requires Java 17+ for its test automation engine
- Maestro connects to existing emulators/simulators to run tests
- You must install Android Studio separately to get the Android emulator
- Maestro will automatically detect running emulators when executing tests

## Setup Steps

### Step 1: Install Android Studio

Download Android Studio from: <https://developer.android.com/studio>

For Apple Silicon Macs (M1/M2/M3/M4), Android Studio includes native ARM64 support with excellent performance.

### Step 2: Configure Android SDK

After installing Android Studio:

1. Open Android Studio
2. Go to **Settings > Languages & Frameworks > Android SDK**
3. From the **SDK Platforms** tab, select **Android 15 (VanillaIceCream)**:
   - Android SDK Platform 35
   - Sources for Android 35
   - **Google APIs ARM 64 v8a System Image** (critical for Apple Silicon - do NOT use x86 images)
4. From the **SDK Tools** tab:
   - Ensure Android SDK Build-Tools 35.0.0 is selected
   - Android Emulator
   - Android SDK Platform-Tools
5. Click **Apply** to download and install

### Step 3: Configure Environment Variables

Add to `~/.zshrc` or `~/.zprofile`:

```bash
# Android SDK
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Then reload the shell configuration:

```bash
source ~/.zshrc
```

Verify the setup:

```bash
echo $ANDROID_HOME
# Should output: /Users/sigex/Library/Android/sdk

adb --version
# Should show Android Debug Bridge version
```

### Step 4: Create Android Virtual Device (AVD)

1. In Android Studio: **Tools > Device Manager**
2. Click **Create Virtual Device**
3. Choose a device profile:
   - **Recommended**: Pixel 8 or Medium Phone (idiomatic for Android development)
   - These profiles accurately represent how apps run on most Android devices
4. Select system image:
   - Choose **API 35** (Android 15)
   - **Must be ARM64-v8a** for Apple Silicon
5. Configure AVD settings and finish

### Step 5: Run the Expo App on Android Emulator

1. Start the emulator from Android Studio Device Manager
2. In terminal, run the Expo development server:

   ```bash
   bun run dev:native
   ```

3. Press `a` in the Expo CLI to open on Android
4. The app will build and install on the emulator

## Samsung Galaxy Device Considerations

### Most Popular Samsung Phones (2024-2025)

By sales volume:

- **Galaxy A15/A16** (budget line) - Actually the best-selling Samsung phones
- **Galaxy S24/S25 Ultra** - Flagship devices, popular but lower volume

### Emulator Options for Samsung

Samsung provides [official emulator skins](https://developer.samsung.com/galaxy-emulator-skin) that give the visual appearance of Galaxy devices.

**Important limitation**: Samsung skins are cosmetic only - they run stock Android, not Samsung's One UI. They don't include Samsung-specific features.

### Recommendation

**Use Pixel or generic device profiles** for Expo/React Native development:

- Pixel 8
- Medium Phone
- These are the standard choices and accurately test Android behavior
- Samsung skins add visual chrome but don't change functionality

## Maestro Integration

Once the emulator is running, Maestro will automatically detect it:

```bash
# Verify Maestro can see the emulator
maestro test your-flow.yaml
```

Maestro supports:

- Android emulators and physical devices
- iOS simulators (not physical iOS devices)
- React Native and Expo apps
- YAML-based test flows

## System Requirements

For optimal Android emulator performance on Apple Silicon:

| Requirement | Recommended |
|-------------|-------------|
| Mac | Any Apple Silicon (M1, M2, M3, M4) |
| RAM | 16 GB or more |
| Storage | 512 GB+ (Android Studio + SDK ~10-15 GB) |
| macOS | 11 Big Sur or later |

## Troubleshooting

### Emulator won't start

- Ensure you selected ARM64-v8a system image, not x86
- Check that virtualization is enabled (usually default on Mac)

### Expo can't find emulator

- Make sure emulator is fully booted before running `npx expo run:android`
- Verify `ANDROID_HOME` is set correctly
- Run `adb devices` to check if emulator is detected

### Slow performance

- Close other heavy applications
- Allocate more RAM to the emulator in AVD settings
- Use a simpler device profile (e.g., Medium Phone vs Pixel 8 Pro)

## Quick Start (After Setup)

### Start the Emulator

```bash
# Option 1: Using emulator command
$ANDROID_HOME/emulator/emulator -avd Pixel_8_API_35 &

# Option 2: Using Android Studio
# Open Android Studio > Tools > Device Manager > Click Play on Pixel_8_API_35
```

### Verify Emulator is Running

```bash
adb devices
# Should show: emulator-5554    device
```

### Run Expo App on Android

```bash
# Start the development server
bun run dev:native

# Press 'a' in the Expo CLI to open on Android
# Or run directly:
npx expo run:android
```

### Run Maestro Tests

```bash
# Maestro will auto-detect the running emulator
maestro test your-flow.yaml
```

## References

- [Expo Android Studio Emulator Documentation](https://docs.expo.dev/workflow/android-studio-emulator/)
- [React Native Environment Setup](https://reactnative.dev/docs/set-up-your-environment)
- [Android Studio AVD Manager](https://developer.android.com/studio/run/managing-avds)
- [Samsung Galaxy Emulator Skin](https://developer.samsung.com/galaxy-emulator-skin)
- [Maestro Documentation](https://maestro.mobile.dev/)
- [Maestro GitHub](https://github.com/mobile-dev-inc/Maestro)
</file>

<file path="docs/ANIMATED_MEMBERSHIP_CARD.md">
# Animated Membership Card - Gyroscope Tilt Effect

This document describes three idiomatic approaches to implementing a gyroscope-based tilt animation for the membership card in React Native. When the user moves their phone left/right or tilts it, the card appears to float above the screen with a subtle 3D perspective effect.

## Overview

All three approaches use device motion sensors to detect phone orientation changes and apply 3D transforms (rotateX, rotateY with perspective) to create the illusion of depth.

---

## Solution 1: React Native Reanimated `useAnimatedSensor` (Recommended)

**Best for:** Expo projects already using Reanimated. Most idiomatic and performant.

### How It Works

Reanimated provides a built-in `useAnimatedSensor` hook that directly exposes device sensor data as a shared value, which can be used in `useAnimatedStyle` for 60 FPS animations on the UI thread.

### Key Features

- Runs entirely on the UI thread (no JS bridge overhead)
- Built-in support for rotation, gravity, gyroscope sensors
- Automatic cleanup on component unmount
- Works seamlessly with `useAnimatedStyle`

### Code Example

```tsx
import Animated, {
  useAnimatedSensor,
  useAnimatedStyle,
  SensorType,
  withSpring,
} from "react-native-reanimated";

const MAX_TILT = 15; // Maximum tilt angle in degrees

export function AnimatedCard({ children }) {
  // Use rotation sensor for orientation data
  const rotation = useAnimatedSensor(SensorType.ROTATION, {
    interval: "auto", // Matches screen refresh rate
  });

  const animatedStyle = useAnimatedStyle(() => {
    const { pitch, roll } = rotation.sensor.value;

    // Convert radians to degrees and clamp
    const rotateX = Math.max(-MAX_TILT, Math.min(MAX_TILT, pitch * (180 / Math.PI) * 0.5));
    const rotateY = Math.max(-MAX_TILT, Math.min(MAX_TILT, roll * (180 / Math.PI) * 0.5));

    return {
      transform: [
        { perspective: 1000 },
        { rotateX: withSpring(`${-rotateX}deg`, { damping: 15, stiffness: 100 }) },
        { rotateY: withSpring(`${rotateY}deg`, { damping: 15, stiffness: 100 }) },
      ],
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      {children}
    </Animated.View>
  );
}
```

### Sensor Types Available

- `SensorType.ROTATION` - Device orientation (pitch, roll, yaw + quaternion)
- `SensorType.GRAVITY` - Gravity vector (x, y, z)
- `SensorType.GYROSCOPE` - Raw rotation rate
- `SensorType.ACCELEROMETER` - Device acceleration

### Pros

- Most performant (UI thread)
- Cleanest API
- Built into Reanimated (no extra dependencies)
- Handles sensor cleanup automatically

### Cons

- Requires Reanimated 3.0+
- Less control over raw sensor data

---

## Solution 2: Expo DeviceMotion with Reanimated

**Best for:** When you need more control over sensor data or want to combine multiple sensor readings.

### How It Works

Uses `expo-sensors` DeviceMotion API to get rotation data, then manually updates Reanimated shared values which drive the animation.

### Key Features

- Direct access to all DeviceMotion properties
- Can combine accelerometer, gyroscope, and rotation data
- More control over data processing
- Works with or without Reanimated

### Code Example

```tsx
import { useEffect } from "react";
import { DeviceMotion } from "expo-sensors";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const MAX_TILT = 15;

export function AnimatedCard({ children }) {
  const rotateX = useSharedValue(0);
  const rotateY = useSharedValue(0);

  useEffect(() => {
    let subscription: ReturnType<typeof DeviceMotion.addListener>;

    const startListening = async () => {
      const isAvailable = await DeviceMotion.isAvailableAsync();
      if (!isAvailable) {
        console.warn("DeviceMotion not available");
        return;
      }

      DeviceMotion.setUpdateInterval(16); // ~60fps

      subscription = DeviceMotion.addListener(({ rotation }) => {
        if (rotation) {
          // beta = front/back tilt, gamma = left/right tilt
          const { beta, gamma } = rotation;

          // Convert radians to degrees and apply sensitivity
          const newRotateX = Math.max(-MAX_TILT, Math.min(MAX_TILT, beta * (180 / Math.PI) * 0.3));
          const newRotateY = Math.max(-MAX_TILT, Math.min(MAX_TILT, gamma * (180 / Math.PI) * 0.3));

          rotateX.value = newRotateX;
          rotateY.value = newRotateY;
        }
      });
    };

    startListening();

    return () => {
      subscription?.remove();
    };
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 },
      { rotateX: withSpring(`${-rotateX.value}deg`, { damping: 15 }) },
      { rotateY: withSpring(`${rotateY.value}deg`, { damping: 15 }) },
    ],
  }));

  return (
    <Animated.View style={animatedStyle}>
      {children}
    </Animated.View>
  );
}
```

### DeviceMotion Data Structure

```typescript
{
  rotation: {
    alpha: number,  // Z-axis rotation (yaw)
    beta: number,   // X-axis rotation (pitch/tilt front-back)
    gamma: number,  // Y-axis rotation (roll/tilt left-right)
  },
  accelerationIncludingGravity: { x, y, z },
  acceleration: { x, y, z },
  rotationRate: { alpha, beta, gamma },
  orientation: 0 | 90 | 180 | -90,
}
```

### Pros

- Full control over sensor data
- Can process/filter data before animating
- Works with any animation library
- Explicit permission handling

### Cons

- More boilerplate code
- Manual subscription management
- Slightly less performant (JS → UI thread updates)

---

## Solution 3: Gravity Sensor with Parallax Effect

**Best for:** Simpler tilt effect based on gravity vector. Good for subtle, ambient motion.

### How It Works

Uses the gravity sensor (or accelerometer with gravity) to detect how the device is tilted relative to Earth's gravity. This provides smooth, predictable tilt values.

### Key Features

- Simple gravity-based calculations
- Natural feeling tilt response
- Good for parallax/depth effects
- Easy to understand the math

### Code Example

```tsx
import Animated, {
  useAnimatedSensor,
  useAnimatedStyle,
  SensorType,
  interpolate,
  Extrapolation,
  withSpring,
} from "react-native-reanimated";

const TILT_SENSITIVITY = 25; // How much tilt in degrees

export function AnimatedCard({ children }) {
  const gravity = useAnimatedSensor(SensorType.GRAVITY, {
    interval: "auto",
  });

  const animatedStyle = useAnimatedStyle(() => {
    const { x, y } = gravity.sensor.value;

    // Gravity values range roughly from -9.8 to 9.8
    // When phone is flat: x≈0, y≈0, z≈-9.8
    // When tilted left: x increases (positive)
    // When tilted forward: y increases (positive)

    const rotateY = interpolate(
      x,
      [-9.8, 9.8],
      [-TILT_SENSITIVITY, TILT_SENSITIVITY],
      Extrapolation.CLAMP
    );

    const rotateX = interpolate(
      y,
      [-9.8, 9.8],
      [TILT_SENSITIVITY, -TILT_SENSITIVITY],
      Extrapolation.CLAMP
    );

    return {
      transform: [
        { perspective: 800 },
        { rotateX: withSpring(`${rotateX}deg`, { damping: 20, stiffness: 90 }) },
        { rotateY: withSpring(`${rotateY}deg`, { damping: 20, stiffness: 90 }) },
      ],
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      {children}
    </Animated.View>
  );
}
```

### Understanding Gravity Values

```
Phone flat (face up):    x: 0,    y: 0,    z: -9.8
Phone tilted left:       x: +ve,  y: 0,    z: varies
Phone tilted right:      x: -ve,  y: 0,    z: varies
Phone tilted forward:    x: 0,    y: +ve,  z: varies
Phone tilted back:       x: 0,    y: -ve,  z: varies
```

### Pros

- Simple and intuitive
- Stable values (no drift)
- Good for subtle effects
- Works well for parallax layers

### Cons

- Less responsive to quick movements
- Can't detect rotation around vertical axis (yaw)
- Limited to tilt detection only

---

## Comparison Table

| Feature | Solution 1 (useAnimatedSensor) | Solution 2 (DeviceMotion) | Solution 3 (Gravity) |
|---------|-------------------------------|---------------------------|----------------------|
| Performance | Excellent (UI thread) | Good | Excellent (UI thread) |
| Code Complexity | Low | Medium | Low |
| Control over data | Medium | High | Low |
| Sensor drift | Handled internally | Manual handling | None |
| Best use case | General purpose | Custom processing | Subtle parallax |
| Dependencies | Reanimated only | expo-sensors + Reanimated | Reanimated only |

---

## Implementation Notes

### iOS Permissions

On iOS, device motion requires the `NSMotionUsageDescription` permission in `app.json`:

```json
{
  "expo": {
    "plugins": [
      [
        "expo-sensors",
        {
          "motionPermission": "Allow $(PRODUCT_NAME) to access device motion for card animations"
        }
      ]
    ]
  }
}
```

### Performance Tips

1. Use `withSpring` for natural feeling motion
2. Clamp rotation values to prevent extreme angles
3. Use `interval: "auto"` to match screen refresh rate
4. Apply `damping` and `stiffness` for smooth spring animations

### Accessibility

Consider providing a way to disable motion effects for users with vestibular disorders:

```tsx
import { AccessibilityInfo } from "react-native";

const [reduceMotion, setReduceMotion] = useState(false);

useEffect(() => {
  AccessibilityInfo.isReduceMotionEnabled().then(setReduceMotion);
}, []);
```

---

## Chosen Implementation

**Solution 1 (useAnimatedSensor with ROTATION)** was chosen for implementation because:

1. Already using Reanimated in the project
2. Best performance (UI thread animations)
3. Cleanest API with automatic cleanup
4. Rotation sensor provides exact pitch/roll values we need
</file>

<file path="docs/AUTH_NAVIGATION_FIX.md">
# Auth Navigation Fix Documentation

## Problem

When clicking social OAuth buttons (GitHub/Google/Apple), the app would immediately navigate to the tabs screen before authentication completed. This occurred because the `onSuccess` callback was firing when the OAuth redirect was initiated, not when authentication completed.

### Root Cause

The `onSuccess` callback in Better Auth's `signIn.social()` has different semantics for email vs. social OAuth:

| Auth Type | When `onSuccess` Fires | Auth Complete? |
|-----------|------------------------|----------------|
| `signIn.email()` | Server confirms credentials | ✅ Yes |
| `signIn.social()` | OAuth authorization URL obtained | ❌ No (redirect initiated) |

For social OAuth on Expo:

1. `signIn.social()` returns authorization URL
2. expoClient plugin opens browser
3. User authenticates with provider
4. Provider redirects via deep link
5. expoClient exchanges code for tokens
6. **Now** authentication is complete

The old code called `router.replace("/(tabs)")` in `onSuccess`, which fired at step 1-2, not step 6.

## Solution

Centralize navigation in the `(auth)/_layout.tsx` using a `useConvexAuth()` state listener.

### Architecture

```
(auth)/_layout.tsx  ←── Single auth state listener
  │
  ├── landing.tsx       (no navigation logic)
  │
  └── email/
      ├── signin.tsx    (no navigation logic)
      ├── signup.tsx    (no navigation logic)
      └── (reset)/...   (navigates to signin, not tabs)
```

### Files Changed

1. **`apps/native/app/(auth)/_layout.tsx`**
   - Added `useConvexAuth()` hook
   - Added `useEffect` that navigates to `/(tabs)` when `isAuthenticated` becomes true

2. **`apps/native/app/(auth)/email/signin.tsx`**
   - Removed `router.replace("/(tabs)")` from `onSuccess`
   - Removed unused `router` import

3. **`apps/native/app/(auth)/email/signup.tsx`**
   - Removed `router.replace("/(tabs)")` from `onSuccess`
   - Removed unused `router` import

4. **`apps/native/lib/oauth/useGitHubAuth.ts`**
   - Removed callback object (`onRequest`, `onSuccess`, `onError`)
   - Simplified to try/catch pattern

5. **`apps/native/lib/oauth/useGoogleAuth.ts`**
   - Same changes as GitHub

6. **`apps/native/lib/oauth/useAppleAuth.ts`**
   - Same changes as GitHub

## Expected Behavior

### Email Sign-In

| Step | Action | Route |
|------|--------|-------|
| 1 | User on landing | `/(auth)/landing` |
| 2 | Click "Continue with Email" | `/(auth)/email/signin` (drawer) |
| 3 | Enter credentials, click Sign In | Stay on drawer |
| 4 | Auth succeeds | Navigate to `/(tabs)` |

**Unhappy paths:**

- Invalid credentials → Alert, stay on drawer
- Network error → Alert, stay on drawer
- User closes drawer → Back to landing

### Social OAuth (GitHub/Google/Apple)

| Step | Action | Route |
|------|--------|-------|
| 1 | User on landing | `/(auth)/landing` |
| 2 | Click "GitHub" button | **Stay on landing** |
| 3 | OAuth modal appears | `/(auth)/landing` |
| 4 | Click "Continue" | Browser opens |
| 5 | Complete OAuth | Browser |
| 6 | Deep link callback | `/(auth)/landing` |
| 7 | Auth state changes | Navigate to `/(tabs)` |

**Unhappy paths:**

- Cancel OAuth modal → Stay on landing
- Cancel in browser → Stay on landing
- OAuth error → Stay on landing

## Why This Works

The `(auth)/_layout.tsx` wraps all auth screens. When any auth method succeeds:

1. Better Auth updates the session
2. Convex syncs the token
3. `useConvexAuth()` reflects `isAuthenticated: true`
4. `useEffect` in layout triggers
5. `router.replace("/(tabs)")` executes

This provides:

- **Single source of truth** for auth navigation
- **Consistent behavior** across all auth methods
- **No premature navigation** for social OAuth
- **Clean separation** of auth logic from navigation

## Code Reference

### Auth Layout (`apps/native/app/(auth)/_layout.tsx:6-17`)

```typescript
export default function AuthLayout() {
  const router = useRouter();
  const { isAuthenticated } = useConvexAuth();

  // Single source of truth: Navigate to tabs when user becomes authenticated
  // This handles all auth methods: email signin/signup, and social OAuth
  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/(tabs)");
    }
  }, [isAuthenticated, router]);
  // ...
}
```

### Social OAuth Hook (`apps/native/lib/oauth/useGitHubAuth.ts`)

```typescript
const signIn = async () => {
  setIsLoading(true);
  try {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });
    // OAuth redirect initiated - browser will open
    // Navigation handled by (auth)/_layout.tsx when auth completes via deep link
  } catch (error) {
    console.error("GitHub sign in error:", error);
  } finally {
    setIsLoading(false);
  }
};
```

</file>

<file path="docs/AUTH_NAVIGATION_PATTERNS.md">
# Auth Navigation Patterns for Expo Router

This document describes two common authentication navigation patterns for React Native apps using Expo Router with Better Auth / Convex.

---

## Overview

| Pattern | Use Case | Initial Screen | Auth Required |
|---------|----------|----------------|---------------|
| **Selective Auth** | Social apps, e-commerce, content apps | Main app (tabs) | Only for specific features |
| **Auth-First** | Banking, healthcare, enterprise apps | Login screen | Yes, for entire app |

---

## Pattern A: Selective Auth (Current Implementation)

**Best for:** Apps where users can browse content without logging in, but need to authenticate for specific actions (e.g., purchasing, saving, commenting).

### Navigation Structure

```
app/
├── _layout.tsx          # Root - no auth guards
├── (tabs)/              # Always accessible
│   ├── _layout.tsx
│   ├── index.tsx        # Home - shows different UI based on auth
│   ├── menu/
│   ├── events/
│   └── more/
└── (auth)/              # Modal overlay
    ├── _layout.tsx
    ├── landing.tsx      # Has X button to dismiss
    └── email/
        ├── signin.tsx
        └── signup.tsx
```

### Root Layout Implementation

```typescript
// app/_layout.tsx
import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",  // Start at tabs, not auth
};

function StackLayout() {
  return (
    <Stack screenOptions={{ animation: "fade" }}>
      {/* Main tabs - always accessible */}
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />

      {/* Auth screens - presented as fullscreen modal */}
      <Stack.Screen
        name="(auth)"
        options={{
          headerShown: false,
          presentation: "fullScreenModal",
          animation: "slide_from_bottom",
        }}
      />
    </Stack>
  );
}
```

### Auth Modal Close Button

```typescript
// app/(auth)/landing.tsx
import { useRouter } from "expo-router";

export default function Landing() {
  const router = useRouter();

  return (
    <View>
      {/* X button dismisses the modal */}
      <Pressable onPress={() => router.dismiss()}>
        <Ionicons name="close" size={24} />
      </Pressable>
      {/* ... rest of auth UI */}
    </View>
  );
}
```

### Triggering Auth From Screens

```typescript
// In any screen that needs auth
import { useConvexAuth } from "convex/react";
import { useRouter } from "expo-router";

export default function SomeFeature() {
  const { isAuthenticated } = useConvexAuth();
  const router = useRouter();

  const handleAuthRequired = () => {
    if (!isAuthenticated) {
      router.push("/(auth)/landing");
      return;
    }
    // Proceed with authenticated action
  };

  return (
    <View>
      {isAuthenticated ? (
        <AuthenticatedContent />
      ) : (
        <UnauthenticatedContent onSignIn={() => router.push("/(auth)/landing")} />
      )}
    </View>
  );
}
```

### Pros & Cons

**Pros:**

- Lower friction for new users
- Users can explore before committing
- Better for discovery and engagement
- X button provides clear escape route

**Cons:**

- More complex state management
- Need to handle unauthenticated states in many screens
- Potential for confusing UX if not designed well

---

## Pattern B: Auth-First (Gated Access)

**Best for:** Apps where all content requires authentication (banking, healthcare, enterprise, private communities).

### Navigation Structure

```
app/
├── _layout.tsx          # Root - with Stack.Protected guards
├── (tabs)/              # Only accessible when authenticated
│   ├── _layout.tsx
│   ├── index.tsx
│   └── ...
└── (auth)/              # Only accessible when NOT authenticated
    ├── _layout.tsx
    ├── landing.tsx      # No X button needed
    └── email/
        ├── signin.tsx
        └── signup.tsx
```

### Root Layout Implementation

```typescript
// app/_layout.tsx
import { Stack } from "expo-router";
import { useConvexAuth } from "convex/react";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

function StackLayout() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  // Show nothing while auth state is loading
  if (isLoading) {
    return <SplashScreen />;  // Or null
  }

  return (
    <Stack screenOptions={{ animation: "fade" }}>
      {/* Auth screens - only when NOT authenticated */}
      <Stack.Protected guard={!isAuthenticated}>
        <Stack.Screen
          name="(auth)"
          options={{
            headerShown: false,
            gestureEnabled: false,  // Prevent swipe back
          }}
        />
      </Stack.Protected>

      {/* Main tabs - only when authenticated */}
      <Stack.Protected guard={isAuthenticated}>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            gestureEnabled: false,  // Prevent swipe to auth
          }}
        />
      </Stack.Protected>
    </Stack>
  );
}
```

### Auth Screen (No Close Button)

```typescript
// app/(auth)/landing.tsx
export default function Landing() {
  // No X button - user MUST authenticate
  return (
    <View>
      <Text>Sign in to continue</Text>
      {/* Auth options only, no dismiss */}
    </View>
  );
}
```

### Automatic Navigation

With `Stack.Protected`, navigation happens automatically:

- When user signs in → `isAuthenticated` becomes `true` → tabs become visible
- When user signs out → `isAuthenticated` becomes `false` → auth screens become visible

```typescript
// No manual navigation needed after auth actions
await authClient.signIn.email({ email, password }, {
  onSuccess: () => {
    // Navigation happens automatically via Stack.Protected
    // No router.push() needed
  },
});
```

### Pros & Cons

**Pros:**

- Simpler screen implementations
- No need to handle unauthenticated states
- Clear user flow
- Automatic navigation on auth state change

**Cons:**

- Higher friction for new users
- Users can't preview content
- May reduce conversion rates

---

## Comparison Table

| Feature | Selective Auth | Auth-First |
|---------|---------------|------------|
| Initial screen | Tabs | Auth |
| Uses `Stack.Protected` | No | Yes |
| X button on auth | Yes | No |
| Navigation after auth | Manual or automatic | Automatic |
| `gestureEnabled` | Default (true) | false |
| Auth check location | Individual screens | Root layout |
| `presentation` for auth | `fullScreenModal` | Default (card) |

---

## Switching Between Patterns

### From Selective → Auth-First

1. Update `_layout.tsx` to use `Stack.Protected` guards
2. Remove X button from auth screens
3. Remove manual navigation calls after auth
4. Add `gestureEnabled: false` to prevent back navigation

### From Auth-First → Selective

1. Remove `Stack.Protected` guards from `_layout.tsx`
2. Add X button to auth screens with `router.dismiss()`
3. Set `presentation: "fullScreenModal"` for auth route
4. Add auth checks to individual screens as needed

---

## Common Patterns for Both

### Showing Login Prompt in Screens

```typescript
// components/AuthRequired.tsx
import { useConvexAuth } from "convex/react";
import { useRouter } from "expo-router";

interface AuthRequiredProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function AuthRequired({ children, fallback }: AuthRequiredProps) {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const router = useRouter();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (!isAuthenticated) {
    return fallback || (
      <View>
        <Text>Please sign in to access this feature</Text>
        <Button onPress={() => router.push("/(auth)/landing")} title="Sign In" />
      </View>
    );
  }

  return <>{children}</>;
}
```

### Sign Out with Navigation

```typescript
// For Selective Auth
const handleSignOut = async () => {
  await authClient.signOut();
  // User stays on current screen or is redirected based on screen logic
};

// For Auth-First
const handleSignOut = async () => {
  await authClient.signOut();
  // Automatic navigation to auth via Stack.Protected
};
```

---

## Files Reference

### Selective Auth Pattern

- `app/_layout.tsx` - No guards, both routes always available
- `app/(auth)/landing.tsx` - Has X button with `router.dismiss()`
- `app/(auth)/_layout.tsx` - Standard stack
- Individual screens - Check `isAuthenticated` as needed

### Auth-First Pattern

- `app/_layout.tsx` - Uses `Stack.Protected` with `isAuthenticated` guard
- `app/(auth)/landing.tsx` - No X button
- `app/(auth)/_layout.tsx` - Standard stack
- Individual screens - Can assume user is authenticated

---

## Related Documentation

- [Expo Router Authentication](https://docs.expo.dev/router/reference/authentication/)
- [Better Auth Expo Guide](https://github.com/get-convex/better-auth/blob/main/docs/content/docs/framework-guides/expo.mdx)
- [Stack.Protected API](https://docs.expo.dev/router/advanced/stack/#protected-routes)
</file>

<file path="docs/BETTER_AUTH_FIX_ANALYSIS.md">
# Better-Auth Integration Fix Analysis

**Date:** January 13, 2026
**Issue:** Better-Auth authentication not working in React Native/Expo app
**Working Reference:** `~/gruckion-workdir/convexpo` repository

---

## Executive Summary

This document analyzes why Better-Auth works in the `convexpo` repository but fails in `convoexpo-and-nextjs-web-bun-better-auth`. After a comprehensive comparison of both codebases, **7 critical issues** were identified that prevent authentication from functioning correctly.

---

## Root Causes Identified

### 1. Environment Variables Not Configured (CRITICAL)

**Severity:** 🔴 Critical - Auth will fail immediately

**Location:** `apps/native/.env`

**Broken Configuration:**

```env
EXPO_PUBLIC_CONVEX_URL=https://<YOUR_CONVEX_URL>
EXPO_PUBLIC_CONVEX_SITE_URL=https://<YOUR_CONVEX_URL>
```

**Problem:** The `.env` file contains placeholder values `<YOUR_CONVEX_URL>` instead of actual Convex deployment URLs. The auth client's `baseURL` becomes invalid, causing all authentication requests to fail.

**Backend `.env.local` also has issues:**

```env
EXPO_PUBLIC_CONVEX_SITE_URL=  # EMPTY!
NEXT_PUBLIC_CONVEX_SITE_URL=  # EMPTY!
```

**Working Configuration (from convexpo):**

- Uses actual Convex URLs like `https://brilliant-antelope-830.convex.cloud`
- The `.site` URL variant is required for HTTP actions

**Fix Required:**

```env
# apps/native/.env
EXPO_PUBLIC_CONVEX_URL=https://artful-cod-78.convex.cloud
EXPO_PUBLIC_CONVEX_SITE_URL=https://artful-cod-78.convex.site

# packages/backend/.env.local
EXPO_PUBLIC_CONVEX_SITE_URL=https://artful-cod-78.convex.site
NEXT_PUBLIC_CONVEX_SITE_URL=https://artful-cod-78.convex.site
```

---

### 2. Missing Expo Plugins in app.json (CRITICAL)

**Severity:** 🔴 Critical - Token storage will fail

**Location:** `apps/native/app.json`

**Broken Configuration:**

```json
{
  "expo": {
    "plugins": ["expo-font"]
  }
}
```

**Working Configuration (from convexpo):**

```json
{
  "expo": {
    "plugins": [
      ["expo-splash-screen", {...}],
      "expo-router",
      "expo-secure-store",
      "expo-web-browser"
    ]
  }
}
```

**Missing Plugins:**

| Plugin | Purpose | Impact if Missing |
|--------|---------|-------------------|
| `expo-secure-store` | Secure token storage | Tokens cannot be persisted, user logged out on app restart |
| `expo-web-browser` | OAuth flows | Social login (Google, Apple) won't work |
| `expo-router` | Deep linking | May affect auth redirects |

**Why This Matters:**

The auth client uses SecureStore for token persistence:

```typescript
expoClient({
  scheme: Constants.expoConfig?.scheme as string,
  storagePrefix: Constants.expoConfig?.scheme as string,
  storage: SecureStore,  // Requires expo-secure-store plugin!
})
```

---

### 3. Missing Auth Trigger Exports (CRITICAL)

**Severity:** 🔴 Critical - Auth hooks won't fire

**Location:** `packages/backend/convex/auth.ts`

**Broken Configuration:**

```typescript
export const authComponent = createClient<DataModel>(components.betterAuth);

function createAuth(ctx: GenericCtx<DataModel>) {
  return betterAuth({...});
}

export { createAuth };

export const getCurrentUser = query({...});

// MISSING: Trigger exports!
```

**Working Configuration (from convexpo):**

```typescript
// convex/auth.ts
import { authComponent } from "./lib/betterAuth";

export const { onCreate, onUpdate, onDelete } = authComponent.triggersApi();
```

**Why This Matters:**

The `triggersApi()` exports are required by the `@convex-dev/better-auth` component. Without them, the internal Convex functions that handle user creation/updates/deletion won't be properly registered.

---

### 4. Missing authFunctions in createClient (CRITICAL)

**Severity:** 🔴 Critical - Internal auth functions not wired

**Location:** `packages/backend/convex/auth.ts`

**Broken Configuration:**

```typescript
export const authComponent = createClient<DataModel>(components.betterAuth);
// No options passed!
```

**Working Configuration (from convexpo):**

```typescript
import { type AuthFunctions, createClient } from "@convex-dev/better-auth";
import { components, internal } from "./_generated/api";

const authFunctions: AuthFunctions = internal.auth;

export const authComponent = createClient<DataModel>(components.betterAuth, {
  authFunctions,
  verbose: isDevelopment(),
  triggers: {
    user: {
      onCreate: async (ctx, authUser) => {
        // Handle user creation
      },
      onUpdate: async (ctx, oldUser, newUser) => {
        // Handle user updates
      },
      onDelete: async (ctx, authUser) => {
        // Handle user deletion
      },
    },
  },
});
```

**Why This Matters:**

The `authFunctions` parameter connects the Better Auth component to Convex's internal mutation/query system. Without it, auth operations cannot properly interact with the Convex database.

---

### 5. Missing expectAuth in ConvexReactClient (HIGH)

**Severity:** 🟠 High - Race conditions possible

**Location:** `apps/native/app/_layout.tsx`

**Broken Configuration:**

```typescript
const convex = new ConvexReactClient(env.EXPO_PUBLIC_CONVEX_URL, {
  unsavedChangesWarning: false,
});
```

**Working Configuration (from convexpo):**

```typescript
const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL, {
  expectAuth: true,  // IMPORTANT!
  unsavedChangesWarning: false,
  verbose: false,
});
```

**Why This Matters:**

The `expectAuth: true` option tells Convex to pause all queries until the user is authenticated. Without it:

- Queries may fire before auth state is ready
- Protected queries may fail with "unauthenticated" errors
- Race conditions between auth and data fetching

---

### 6. Missing CORS Configuration in http.ts (MEDIUM)

**Severity:** 🟡 Medium - May cause cross-origin issues

**Location:** `packages/backend/convex/http.ts`

**Broken Configuration:**

```typescript
authComponent.registerRoutes(http, createAuth);
// No CORS option!
```

**Working Configuration (from convexpo):**

```typescript
authComponent.registerRoutes(http, createAuth, { cors: false });
```

**Why This Matters:**

For mobile apps (React Native/Expo), CORS settings can impact whether HTTP requests succeed. The working project explicitly disables CORS which may be necessary for the mobile client.

---

### 7. Different auth.config.ts Approach (MEDIUM)

**Severity:** 🟡 Medium - May cause provider mismatch

**Location:** `packages/backend/convex/auth.config.ts`

**Broken Configuration:**

```typescript
import { getAuthConfigProvider } from "@convex-dev/better-auth/auth-config";
import type { AuthConfig } from "convex/server";

export default {
  providers: [getAuthConfigProvider()],
} satisfies AuthConfig;
```

**Working Configuration (from convexpo):**

```typescript
export default {
  providers: [
    {
      domain: process.env.CONVEX_SITE_URL,
      applicationID: "convex",
    },
  ],
};
```

**Why This Matters:**

The working project explicitly sets the `domain` and `applicationID` for the auth provider, while the broken project uses an abstraction (`getAuthConfigProvider()`). The explicit approach ensures the correct domain is used.

---

## Package Version Comparison

| Package | Working (convexpo) | Broken (yours) | Notes |
|---------|-------------------|----------------|-------|
| `better-auth` | 1.3.11 | 1.4.9 | Major version jump |
| `@convex-dev/better-auth` | ^0.8.6 | ^0.10.9 | Breaking changes possible |
| `@better-auth/expo` | 1.3.11 | 1.4.9 | Should match better-auth |
| `convex` | ^1.27.3 | ^1.31.2 | Minor update |

**Recommendation:** If issues persist after fixes, consider downgrading to the working versions.

---

## File-by-File Comparison

### Backend Auth Setup

| File | Working | Broken | Issue |
|------|---------|--------|-------|
| `convex/auth.ts` | Exports triggers via `triggersApi()` | Only exports `createAuth` and `getCurrentUser` | Missing trigger exports |
| `convex/auth.ts` | Uses `authFunctions` parameter | No options in `createClient` | Missing authFunctions |
| `convex/auth.config.ts` | Explicit domain/applicationID | Uses `getAuthConfigProvider()` | Abstraction may fail |
| `convex/http.ts` | `{ cors: false }` option | No CORS option | May cause issues |

### Native App Setup

| File | Working | Broken | Issue |
|------|---------|--------|-------|
| `app.json` | Has expo-secure-store plugin | Missing plugin | Token storage fails |
| `app/_layout.tsx` | `expectAuth: true` | Missing option | Race conditions |
| `.env` | Actual URLs | Placeholder values | Auth requests fail |
| `lib/auth-client.ts` | Proper baseURL | Invalid baseURL | All requests fail |

---

## Fix Implementation Plan

### Step 1: Fix Environment Variables

1. Update `apps/native/.env` with actual Convex URLs
2. Update `packages/backend/.env.local` with site URLs

### Step 2: Update app.json

1. Add `expo-secure-store` plugin
2. Add `expo-web-browser` plugin

### Step 3: Update Backend Auth

1. Restructure `auth.ts` to include authFunctions
2. Add trigger exports
3. Update `auth.config.ts` with explicit provider config
4. Add CORS option to `http.ts`

### Step 4: Update Native App

1. Add `expectAuth: true` to ConvexReactClient

---

## Testing Checklist

After implementing fixes:

- [ ] Environment variables load correctly
- [ ] App builds without errors
- [ ] User can sign up with email/password
- [ ] User can sign in with email/password
- [ ] User session persists after app restart
- [ ] User can sign out
- [ ] Protected queries work when authenticated
- [ ] Protected queries correctly deny unauthenticated users

---

## Fixes Applied

All issues have been fixed. Here's a summary of the changes made:

### 1. Environment Variables Fixed

**File:** `apps/native/.env`

```env
EXPO_PUBLIC_CONVEX_URL=https://artful-cod-78.convex.cloud
EXPO_PUBLIC_CONVEX_SITE_URL=https://artful-cod-78.convex.site
```

**File:** `packages/backend/.env.local`

- Added `EXPO_PUBLIC_CONVEX_SITE_URL=https://artful-cod-78.convex.site`
- Added `NEXT_PUBLIC_CONVEX_SITE_URL=https://artful-cod-78.convex.site`
- Added `NATIVE_APP_URL=convoexpo-and-nextjs-web-bun-better-auth://`

### 2. Expo Plugins Added

**File:** `apps/native/app.json`

```json
"plugins": [
  "expo-font",
  "expo-router",
  "expo-secure-store",
  "expo-web-browser"
]
```

### 3. Auth Triggers and authFunctions Added

**File:** `packages/backend/convex/auth.ts`

- Added `authFunctions` parameter to `createClient`
- Added `triggers` configuration for user lifecycle events
- Added trigger exports: `export const { onCreate, onUpdate, onDelete } = authComponent.triggersApi();`
- Fixed trustedOrigins to use string patterns instead of RegExp

### 4. expectAuth Added

**File:** `apps/native/app/_layout.tsx`

```typescript
const convex = new ConvexReactClient(env.EXPO_PUBLIC_CONVEX_URL, {
  expectAuth: true,
  unsavedChangesWarning: false,
});
```

### 5. CORS Configuration Added

**File:** `packages/backend/convex/http.ts`

```typescript
authComponent.registerRoutes(http, createAuth, { cors: false });
```

### 6. Auth Config Updated

**File:** `packages/backend/convex/auth.config.ts`

```typescript
export default {
  providers: [
    {
      domain: process.env.CONVEX_SITE_URL || process.env.SITE_URL,
      applicationID: "convex",
    },
  ],
} satisfies AuthConfig;
```

---

## Verification

After applying fixes:

1. **Convex functions compiled successfully:** ✅

   ```
   ✔ Convex functions ready!
   ```

2. **Files modified:**
   - `apps/native/.env`
   - `apps/native/app.json`
   - `apps/native/app/_layout.tsx`
   - `packages/backend/.env.local`
   - `packages/backend/convex/auth.ts`
   - `packages/backend/convex/auth.config.ts`
   - `packages/backend/convex/http.ts`

---

## Next Steps

1. Run `npx expo prebuild --clean` to rebuild native modules with new plugins
2. Run `bun run dev` to start development servers
3. Test authentication flows:
   - Sign up with email/password
   - Sign in with email/password
   - Session persistence (close and reopen app)
   - Sign out

---

## Additional Fixes (January 13, 2026 - Session 2)

### 7. Navigation After Auth - Stack.Protected Guards

**Issue:** After signing up or signing in, the user stayed on the auth screen instead of navigating to the home screen.

**Root Cause:** The root `_layout.tsx` didn't use `Stack.Protected` guards to automatically show/hide screens based on auth state.

**File:** `apps/native/app/_layout.tsx`

```typescript
function StackLayout() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return null;
  }

  return (
    <Stack screenOptions={{ animation: "fade" }}>
      {/* Only show auth screens when NOT authenticated */}
      <Stack.Protected guard={!isAuthenticated}>
        <Stack.Screen
          name="(auth)"
          options={{
            headerShown: false,
            gestureEnabled: false, // Prevent back navigation
          }}
        />
      </Stack.Protected>

      {/* Only show main tabs when authenticated */}
      <Stack.Protected guard={isAuthenticated}>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </Stack.Protected>
    </Stack>
  );
}
```

### 8. Security Fix - Email Enumeration Prevention

**Issue:** Error messages like "user already exists" revealed whether an email was registered, enabling email enumeration attacks.

**Fix:** Sanitized all auth error messages to use generic responses:

**Files Modified:**

- `apps/native/app/(auth)/email/signup.tsx`
- `apps/native/app/(auth)/email/signin.tsx`
- `apps/native/app/(auth)/email/(reset)/request-password-reset.tsx`
- `apps/native/app/(auth)/email/(reset)/reset-password.tsx`

**Error Message Mapping:**

| Original (Revealing)               | Fixed (Generic)                                                  |
|-----------------------------------|------------------------------------------------------------------|
| "User already exists"             | "Unable to create account. Please check your details or try signing in." |
| "User not found"                  | "Invalid email or password. Please try again."                   |
| "Invalid password"                | "Invalid email or password. Please try again."                   |
| "No user with this email"         | "If an account exists, you'll receive a reset link."            |

**Security Best Practices Applied:**

1. **Signup/Signin:** Same generic error for both "user exists" and "user not found"
2. **Password Reset:** Always show success message regardless of email existence
3. **Rate Limiting Messages:** Preserved (not a security risk to reveal)

---

## All Files Modified

### Session 1 (Better Auth Integration)

- `apps/native/.env` - Set actual Convex URLs
- `apps/native/app.json` - Added expo plugins
- `apps/native/app/_layout.tsx` - Added expectAuth
- `packages/backend/.env.local` - Added missing env vars
- `packages/backend/convex/auth.ts` - Added authFunctions and triggers
- `packages/backend/convex/auth.config.ts` - Explicit config
- `packages/backend/convex/http.ts` - Added CORS config

### Session 2 (Navigation & Security)

- `apps/native/app/_layout.tsx` - Added Stack.Protected guards (later changed)
- `apps/native/app/(auth)/email/signup.tsx` - Sanitized error messages
- `apps/native/app/(auth)/email/signin.tsx` - Sanitized error messages
- `apps/native/app/(auth)/email/(reset)/request-password-reset.tsx` - Always show success
- `apps/native/app/(auth)/email/(reset)/reset-password.tsx` - Sanitized error messages

### Session 3 (Selective Auth Pattern)

- `apps/native/app/_layout.tsx` - Changed to Selective Auth pattern (no guards)
- `apps/native/app/(auth)/landing.tsx` - Changed X button to use `router.dismiss()`
- `docs/AUTH_NAVIGATION_PATTERNS.md` - Created comprehensive documentation

---

## References

- [Convex Better Auth Expo Guide](https://github.com/get-convex/better-auth/blob/main/docs/content/docs/framework-guides/expo.mdx)
- [Better Auth Triggers Documentation](https://github.com/get-convex/better-auth/blob/main/docs/content/docs/features/triggers.mdx)
- [OWASP Email Enumeration Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html#authentication-and-error-messages)
- Working Reference: `~/gruckion-workdir/convexpo`
</file>

<file path="docs/EXPO_NATIVE_DEVELOPMENT.md">
# Expo Native Development & Deployment Guide

A comprehensive guide to understanding Expo's native development workflow, from local development to app store deployment.

## Table of Contents

- [Native Directories (android/ios)](#native-directories-androidios)
  - [What Are They?](#what-are-they)
  - [Why Are They Generated?](#why-are-they-generated)
  - [Should They Be Gitignored?](#should-they-be-gitignored)
- [Expo Prebuild](#expo-prebuild)
  - [What Is Prebuild?](#what-is-prebuild)
  - [Common Commands](#common-commands)
  - [When to Use --clean](#when-to-use---clean)
- [Expo Go vs Development Builds](#expo-go-vs-development-builds)
  - [Expo Go](#expo-go)
  - [Development Builds](#development-builds)
  - [Comparison Table](#comparison-table)
- [Splash Screens](#splash-screens)
  - [Configuration](#configuration)
  - [Common Issues](#common-issues)
- [Deploying to App Stores](#deploying-to-app-stores)
  - [Prerequisites](#prerequisites)
  - [EAS Build & Submit Overview](#eas-build--submit-overview)
- [iOS Deployment](#ios-deployment)
  - [TestFlight (Beta Testing)](#testflight-beta-testing)
  - [App Store (Production)](#app-store-production)
- [Android Deployment](#android-deployment)
  - [Internal Testing (TestFlight Equivalent)](#internal-testing-testflight-equivalent)
  - [Google Play Store (Production)](#google-play-store-production)
- [Quick Reference Commands](#quick-reference-commands)
- [Resources](#resources)

---

## Native Directories (android/ios)

### What Are They?

The `android/` and `ios/` directories contain the complete native code required to build your app for each platform:

| Directory | Contents |
|-----------|----------|
| `android/` | Gradle build files, Java/Kotlin source, AndroidManifest.xml, resources |
| `ios/` | Xcode project, Swift/Objective-C source, Info.plist, CocoaPods dependencies |

### Why Are They Generated?

These directories are generated when you need capabilities beyond Expo Go:

1. **Run on physical devices/simulators** - Build standalone apps, not sandboxed in Expo Go
2. **Use native modules** - Access device features like Keychain, secure storage, sensors
3. **Custom configuration** - Bundle IDs, app icons, splash screens, permissions
4. **Production builds** - Required for App Store and Play Store submissions

### Should They Be Gitignored?

**Yes.** According to [official Expo documentation](https://docs.expo.dev/workflow/continuous-native-generation/):

> "The android and ios directories are automatically added to .gitignore when you create a new project, ensuring they are not committed between prebuilds."

**Recommended `.gitignore` entries:**

```gitignore
# Native directories (generated via expo prebuild)
/android
/ios
```

**Why gitignore them?**

- They're regenerated from `app.config.ts` and `package.json`
- Keeps repository clean and small
- Avoids merge conflicts in generated code
- EAS Build regenerates them automatically in the cloud

---

## Expo Prebuild

### What Is Prebuild?

Prebuild is Expo's **Continuous Native Generation (CNG)** system. It generates native `android/` and `ios/` directories from your configuration files, similar to how `node_modules/` is generated from `package.json`.

### Common Commands

```bash
# Generate both platforms
npx expo prebuild

# Generate specific platform
npx expo prebuild --platform android
npx expo prebuild --platform ios

# Clean regeneration (delete and recreate)
npx expo prebuild --clean

# Run and build (implicitly runs prebuild if needed)
npx expo run:android
npx expo run:ios
```

### When to Use --clean

Use `--clean` when:

| Scenario | Command |
|----------|---------|
| Added/removed native dependencies | `npx expo prebuild --clean` |
| Changed `app.config.ts` native settings | `npx expo prebuild --clean` |
| Upgraded Expo SDK version | `npx expo prebuild --clean` |
| Build errors after dependency changes | `npx expo prebuild --clean` |
| Corrupted native directories | `npx expo prebuild --clean` |

**Example scenario:**

```bash
# 1. Add a native dependency
bun add expo-splash-screen

# 2. Regenerate native code to include it
npx expo prebuild --clean

# 3. Build and run
npx expo run:android
```

---

## Expo Go vs Development Builds

### Expo Go

A pre-built sandbox app from the App Store/Play Store with common native modules pre-installed.

**Included packages:**

- expo-camera, expo-location, expo-notifications
- expo-file-system, expo-media-library
- expo-sensors, expo-haptics
- And many more ([full list](https://docs.expo.dev/versions/latest/))

**Limitations:**

- Cannot add custom native modules
- Limited to modules included in Expo Go
- Cannot customize native configuration
- Cannot use for production releases

### Development Builds

Custom-built versions of your app with your specific native modules and configuration.

**Benefits:**

- Include any native module
- Custom bundle ID, icons, splash screens
- Debug on physical devices
- Test production-like builds locally

### Comparison Table

| Feature | Expo Go | Development Build |
|---------|---------|-------------------|
| Setup time | Instant | Requires build (~5-15 min) |
| Custom native modules | No | Yes |
| Custom app config | No | Yes |
| Hot reload | Yes | Yes |
| Production testing | No | Yes |
| App Store submission | No | Yes |
| File size | ~80MB (shared) | Your app size |

---

## Splash Screens

### Configuration

Splash screens are configured in `app.config.ts` using the `expo-splash-screen` plugin:

```typescript
export default {
  plugins: [
    [
      "expo-splash-screen",
      {
        backgroundColor: "#ffffff",
        image: "./assets/splash.png",
        imageWidth: 200,
        // iOS 18+ dark mode support
        dark: {
          backgroundColor: "#000000",
          image: "./assets/splash-dark.png",
        },
      },
    ],
  ],
};
```

### Common Issues

**Error: `resource style/Theme.SplashScreen not found`**

This means `expo-splash-screen` is not installed but is referenced in your config.

**Fix:**

```bash
# 1. Install the package
bun add expo-splash-screen

# 2. Regenerate native code
npx expo prebuild --clean

# 3. Rebuild
npx expo run:android
```

---

## Deploying to App Stores

### Prerequisites

| Platform | Requirement | Cost |
|----------|-------------|------|
| Both | Expo account | Free |
| Both | EAS CLI | Free |
| iOS | Apple Developer Account | $99/year |
| Android | Google Play Developer Account | $25 one-time |

**Install EAS CLI:**

```bash
npm install -g eas-cli
eas login
```

### EAS Build & Submit Overview

EAS (Expo Application Services) provides cloud-based building and submission:

```
app.config.ts  →  EAS Build  →  .ipa/.aab  →  EAS Submit  →  App Stores
```

---

## iOS Deployment

### TestFlight (Beta Testing)

TestFlight is Apple's beta testing platform for iOS apps.

#### Quickest Method: npx testflight

```bash
npx testflight
```

This single command handles everything:

1. Creates production iOS build
2. Manages certificates and provisioning
3. Uploads to App Store Connect
4. Enables TestFlight distribution

#### Manual Method: EAS Build + Submit

```bash
# 1. Build for iOS
eas build --platform ios --profile production

# 2. Submit to App Store Connect (appears in TestFlight)
eas submit --platform ios
```

#### With Auto-Submit

```bash
eas build --platform ios --profile production --auto-submit
```

#### TestFlight Testing Limits

| Type | Limit | Review Required |
|------|-------|-----------------|
| Internal testers | 100 | No |
| External testers | 10,000 | Yes (usually hours) |

### App Store (Production)

After TestFlight testing:

1. Log into [App Store Connect](https://appstoreconnect.apple.com)
2. Select your app → TestFlight → select build
3. Click "Submit for Review"
4. Wait for Apple review (typically 24-48 hours)

---

## Android Deployment

### Internal Testing (TestFlight Equivalent)

Google Play Console's **Internal Testing Track** is the Android equivalent of TestFlight.

#### Features

| Feature | Details |
|---------|---------|
| Tester limit | 100 internal testers |
| Availability | Minutes after upload |
| Cost | Free (paid apps are free for testers) |
| Review required | No |
| Distribution | Via Play Store (internal link) |

#### Testing Tracks Comparison

| Track | Purpose | Testers | Review |
|-------|---------|---------|--------|
| Internal | QA/dev team | 100 | No |
| Closed (Alpha) | Selected external | Unlimited | No |
| Open (Beta) | Public beta | Unlimited | No |
| Production | Public release | Everyone | Yes |

### Google Play Store (Production)

#### First-Time Setup

1. Create app in [Google Play Console](https://play.google.com/console)
2. Create a Google Service Account Key ([guide](https://docs.expo.dev/submit/android/))
3. **Manually upload first build** (Google API requirement)

#### Subsequent Submissions

```bash
# Build for Android
eas build --platform android --profile production

# Submit to Play Store
eas submit --platform android
```

#### With Auto-Submit

```bash
eas build --platform android --profile production --auto-submit
```

---

## Quick Reference Commands

### Local Development

```bash
# Start Metro bundler
npx expo start

# Run on Android emulator/device
npx expo run:android

# Run on iOS simulator/device
npx expo run:ios

# Regenerate native directories
npx expo prebuild --clean
```

### Building & Submitting

```bash
# iOS to TestFlight (easiest)
npx testflight

# Build for both platforms
eas build --platform all

# Build specific platform
eas build --platform ios
eas build --platform android

# Submit to stores
eas submit --platform ios
eas submit --platform android

# Build and auto-submit
eas build --platform all --auto-submit
```

### CI/CD Workflow Example

Create `.eas/workflows/build-and-submit.yml`:

```yaml
on:
  push:
    branches: ['main']

jobs:
  build_ios:
    type: build
    params:
      platform: ios
      profile: production

  build_android:
    type: build
    params:
      platform: android
      profile: production

  submit_ios:
    needs: [build_ios]
    type: testflight
    params:
      build_id: ${{ needs.build_ios.outputs.build_id }}

  submit_android:
    needs: [build_android]
    type: submit
    params:
      build_id: ${{ needs.build_android.outputs.build_id }}
```

---

## Resources

### Official Documentation

- [Continuous Native Generation (CNG)](https://docs.expo.dev/workflow/continuous-native-generation/)
- [Adopt Prebuild](https://docs.expo.dev/guides/adopting-prebuild/)
- [EAS Build](https://docs.expo.dev/build/introduction/)
- [EAS Submit](https://docs.expo.dev/submit/introduction/)
- [Submit to Apple App Store](https://docs.expo.dev/submit/ios/)
- [Submit to Google Play Store](https://docs.expo.dev/submit/android/)
- [npx testflight Command](https://docs.expo.dev/build-reference/npx-testflight/)

### Platform Documentation

- [App Store Connect](https://appstoreconnect.apple.com)
- [Google Play Console](https://play.google.com/console)
- [TestFlight Documentation](https://developer.apple.com/testflight/)
- [Google Play Internal Testing](https://support.google.com/googleplay/android-developer/answer/9845334)

### Cost Summary

| Service | Cost |
|---------|------|
| Expo Account | Free |
| EAS Build (free tier) | 30 builds/month |
| Apple Developer Program | $99/year |
| Google Play Developer | $25 one-time |

</file>

<file path="docs/IOS_PASSWORD_AUTOFILL_SETUP.md">
# iOS Password AutoFill Setup Guide

> **Status**: Planned - awaiting Apple Developer account setup
> **Created**: 2025-01-14
> **Website**: cityuniversityclub.co.uk (hosted on Wix)

## Problem Summary

iOS Password AutoFill is not showing automatic credential suggestions (QuickType bar) when returning to the login screen. Users see the "Passwords" key icon but no automatic suggestions.

### Root Cause Analysis

Three compounding issues:

1. **Expo Go Limitation**: Running in Expo Go means passwords are saved under "Expo" bundle ID (`host.exp.Exponent`), not the app's bundle ID. Expo Go cannot use custom Associated Domains entitlements.

2. **Missing Associated Domains Configuration**: The app lacks `associatedDomains` configuration needed for iOS to match saved credentials to the app.

3. **iOS Simulator Bugs**: Even with correct configuration, iOS Simulator has known inconsistent behavior with password autofill.

### How iOS Password AutoFill Works

| Feature | Requirement | Current Status |
|---------|-------------|----------------|
| Save password prompt | `textContentType="newPassword"` | ✅ Working |
| "Passwords" key icon | `textContentType="password"` | ✅ Working |
| **QuickType bar suggestions** | Associated Domains + AASA file + Native build | ❌ Not configured |

From Apple's documentation:
> "The QuickType bar only appears if the user has at least one password saved on the iOS device and the Keychain AutoFill setting is enabled. The QuickType bar includes any credentials for your associated domains."

---

## Solution: Development Build with Associated Domains

### Requirements

| Requirement | Status | Cost | Notes |
|-------------|--------|------|-------|
| Expo Account | ❌ Needed | Free | <https://expo.dev/signup> |
| EAS CLI | ❌ Needed | Free | `npm install -g eas-cli` |
| EAS Build (cloud) | ❌ Needed | Free tier: 30 builds/month | |
| Apple Developer Account | ❌ Needed | $99/year | Required for device builds |
| Apple Team ID | ❌ Needed | Included with dev account | 10-char code like `ABCD123456` |

### Build Options

- **iOS Simulator builds**: Free (no Apple Developer account needed)
- **iOS Device builds**: Requires paid Apple Developer account ($99/year)

---

## Planned Code Changes

### 1. Update `apps/native/app.config.ts`

Add `associatedDomains` to the iOS configuration:

```typescript
ios: {
  supportsTablet: true,
  bundleIdentifier: "com.cityuniversityclub.app",
  associatedDomains: ["webcredentials:cityuniversityclub.co.uk"],  // ADD THIS
  config: {
    usesNonExemptEncryption: false,
  },
  // ... rest of existing config
}
```

### 2. Create `apps/native/eas.json` (NEW FILE)

EAS Build configuration:

```json
{
  "cli": {
    "version": ">= 15.0.0",
    "appVersionSource": "remote"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "ios": {
        "simulator": true
      }
    },
    "development-device": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {
      "autoIncrement": true
    }
  },
  "submit": {
    "production": {}
  }
}
```

### 3. Create Apple App Site Association (AASA) File

**Option A: Next.js Route Handler** (if using Next.js for the domain)

Create `apps/web/src/app/.well-known/apple-app-site-association/route.ts`:

```typescript
import { NextResponse } from "next/server";

const AASA = {
  webcredentials: {
    apps: ["YOUR_TEAM_ID.com.cityuniversityclub.app"],  // Replace YOUR_TEAM_ID
  },
};

export async function GET() {
  return NextResponse.json(AASA, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
```

**Option B: Wix Hosting** (current hosting)

Since the website is hosted on Wix, you'll need to:

1. Create a file named `apple-app-site-association` (no extension) with content:

```json
{
  "webcredentials": {
    "apps": ["YOUR_TEAM_ID.com.cityuniversityclub.app"]
  }
}
```

1. Upload it to Wix so it's accessible at:
   `https://cityuniversityclub.co.uk/.well-known/apple-app-site-association`

2. Ensure the response has `Content-Type: application/json`

**Wix Limitations**: Wix may not support serving files from `/.well-known/` paths. You may need to:

- Use Wix Velo (custom code) to create an HTTP function
- Point a subdomain to your Next.js app for the AASA file
- Use a reverse proxy or CDN like Cloudflare

### 4. Install Dependencies

```bash
cd apps/native
npx expo install expo-dev-client
```

This adds `expo-dev-client` to `package.json`.

---

## Setup Steps (After Apple Developer Account)

### Step 1: Get Your Apple Team ID

1. Go to <https://developer.apple.com/account>
2. Look in "Membership details" section
3. Copy the "Team ID" (10-character alphanumeric code)

### Step 2: Update AASA File

Replace `YOUR_TEAM_ID` with your actual Team ID in the AASA configuration.

### Step 3: Deploy AASA File

Make the AASA file accessible at:

```
https://cityuniversityclub.co.uk/.well-known/apple-app-site-association
```

Verify with:

```bash
curl -I https://cityuniversityclub.co.uk/.well-known/apple-app-site-association
```

Should return `Content-Type: application/json` and HTTP 200.

### Step 4: Install EAS CLI

```bash
npm install -g eas-cli
```

### Step 5: Login to Expo

```bash
eas login
```

### Step 6: Configure EAS

```bash
cd apps/native
eas build:configure
```

### Step 7: Build Development Client

**For iOS Simulator (free):**

```bash
eas build --platform ios --profile development
```

**For iOS Device (requires Apple Developer account):**

```bash
eas build --platform ios --profile development-device
```

### Step 8: Install and Test

1. Download the build from Expo dashboard or use `eas build:run`
2. Install on simulator/device
3. Start the bundler: `npx expo start`
4. Test password autofill functionality

---

## Important Notes

### Expo Go No Longer Works

After adding `expo-dev-client`, the app will no longer open in Expo Go. You must use the development build instead. The development workflow is:

1. Build once with EAS (`eas build`)
2. Install the development build
3. Start bundler with `npx expo start`
4. App connects to your local bundler

### AASA Caching

iOS caches the AASA file aggressively. After deploying changes:

- Wait 24-48 hours for cache to refresh
- Or reinstall the app to force re-fetch
- Use Apple's AASA validator: <https://app-site-association.cdn-apple.com/a/v1/cityuniversityclub.co.uk>

### Wix AASA Hosting Challenge

Wix may not support the `/.well-known/` path natively. Options:

1. **Cloudflare Workers**: Proxy the AASA request
2. **Subdomain**: Point `api.cityuniversityclub.co.uk` to your Next.js app
3. **Wix Velo HTTP Function**: Create a custom endpoint (if supported)

### Testing on Simulator vs Device

| Environment | Password Save | QuickType Suggestions |
|-------------|---------------|----------------------|
| Expo Go | Works (under "Expo") | Never works |
| Dev Build + Simulator | Works (under your app) | Inconsistent (known Apple bug) |
| Dev Build + Device | Works | Should work properly |

---

## Validation Tools

- **AASA Validator**: <https://branch.io/resources/aasa-validator/>
- **Apple CDN Check**: `https://app-site-association.cdn-apple.com/a/v1/cityuniversityclub.co.uk`
- **Manual Check**: `curl https://cityuniversityclub.co.uk/.well-known/apple-app-site-association`

---

## References

- [Expo: iOS Universal Links](https://docs.expo.dev/linking/ios-universal-links/)
- [Expo: Development Builds](https://docs.expo.dev/develop/development-builds/create-a-build/)
- [Apple: Password AutoFill](https://developer.apple.com/documentation/security/password-autofill)
- [Gist: Password AutoFill for Expo](https://gist.github.com/amcvitty/42cbe072184fe72485ad17cd7120bb89)
- [Apple: Supporting Associated Domains](https://developer.apple.com/documentation/xcode/supporting-associated-domains)

---

## TODO Checklist

- [ ] Create Apple Developer account ($99/year)
- [ ] Get Apple Team ID from developer portal
- [ ] Create Expo account (free)
- [ ] Update `app.config.ts` with `associatedDomains`
- [ ] Create `eas.json` configuration
- [ ] Install `expo-dev-client`
- [ ] Deploy AASA file to `cityuniversityclub.co.uk/.well-known/`
- [ ] Verify AASA file is accessible with correct content-type
- [ ] Run `eas build:configure`
- [ ] Build development client for iOS
- [ ] Test password autofill on simulator
- [ ] Test password autofill on real device
</file>

<file path="docs/SOCIAL_AUTHENTICATION.md">
# Social Authentication Implementation Guide

**Last Updated:** January 14, 2026
**Stack:** Better Auth + Convex + Expo (React Native)
**App Scheme:** `cityuniversityclub://`
**Bundle ID:** `com.cityuniversityclub.app`
**Convex Deployment:** `artful-cod-78`
**Convex Site URL:** `https://artful-cod-78.convex.site`

---

## Table of Contents

1. [Overview](#overview)
2. [Architecture & OAuth Flow](#architecture--oauth-flow)
3. [Multi-Environment Support](#multi-environment-support)
4. [Current Configuration Status](#current-configuration-status)
5. [GitHub OAuth Setup](#github-oauth-setup)
6. [Google OAuth Setup](#google-oauth-setup)
7. [Apple Sign-In Setup](#apple-sign-in-setup)
8. [Code Implementation](#code-implementation)
9. [Testing Guide](#testing-guide)
10. [Troubleshooting](#troubleshooting)
11. [Security Considerations](#security-considerations)

---

## Overview

This document provides a complete, fact-based guide for implementing social authentication (GitHub, Google, Apple) in the City University Club app. The guide is grounded in 2025/2026 documentation for Better Auth and Convex Better Auth.

### Provider Complexity Matrix

| Provider | Setup Time | Requirements | Best For | Notes |
|----------|-----------|--------------|----------|-------|
| **GitHub** | ~10 min | GitHub account | Quick demos, developer apps | Simplest to configure |
| **Google** | ~30 min | Google Cloud account | General consumer apps | Requires OAuth consent screen |
| **Apple** | 1-2 hours | Apple Developer ($99/year) | iOS apps | **Required** if offering other social logins in App Store |

### Key Insight: Single Callback URL Architecture

With Convex + Better Auth, OAuth callbacks **always** go to the Convex site URL, not directly to the mobile app. This means:

- **One callback URL per provider works for ALL environments**
- No need for separate development/staging/production OAuth apps
- The app scheme handles the final redirect back to the app

---

## Architecture & OAuth Flow

### Understanding the Convex + Better Auth OAuth Flow

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   Mobile App    │     │   Convex Site    │     │  OAuth Provider │
│  (Expo/Native)  │     │ (artful-cod-78)  │     │ (GitHub/Google) │
└────────┬────────┘     └────────┬─────────┘     └────────┬────────┘
         │                       │                        │
         │ 1. User taps          │                        │
         │    "Sign in with X"   │                        │
         │                       │                        │
         │ 2. Opens WebBrowser   │                        │
         │    to Convex site     │                        │
         │────────────────────>  │                        │
         │                       │ 3. Redirects to        │
         │                       │    OAuth provider      │
         │                       │ ─────────────────────> │
         │                       │                        │
         │                       │ 4. User authenticates  │
         │                       │    & authorizes        │
         │                       │                        │
         │                       │ 5. Provider redirects  │
         │                       │    to Convex callback  │
         │                       │ <───────────────────── │
         │                       │    /api/auth/callback/ │
         │                       │                        │
         │                       │ 6. Convex exchanges    │
         │                       │    code for tokens,    │
         │                       │    creates session     │
         │                       │                        │
         │ 7. Convex returns     │                        │
         │    HTML with deep     │                        │
         │    link redirect      │                        │
         │ <──────────────────── │                        │
         │ cityuniversityclub:// │                        │
         │                       │                        │
         │ 8. WebBrowser detects │                        │
         │    custom scheme,     │                        │
         │    returns to app     │                        │
         │                       │                        │
         │ 9. expoClient plugin  │                        │
         │    handles session    │                        │
         └───────────────────────┴────────────────────────┘
```

### Key URLs

| URL Type | Value |
|----------|-------|
| **Convex Site URL** | `https://artful-cod-78.convex.site` |
| **OAuth Callback Base** | `https://artful-cod-78.convex.site/api/auth/callback/` |
| **GitHub Callback** | `https://artful-cod-78.convex.site/api/auth/callback/github` |
| **Google Callback** | `https://artful-cod-78.convex.site/api/auth/callback/google` |
| **Apple Callback** | `https://artful-cod-78.convex.site/api/auth/callback/apple` |
| **App Deep Link** | `cityuniversityclub://` |

---

## Multi-Environment Support

### How It Works Across All Environments

The OAuth callback URL is **always** the Convex site URL, regardless of where the app runs:

| Environment | App Running At | Origin Sent | OAuth Callback | Final Redirect |
|------------|----------------|-------------|----------------|----------------|
| iOS Simulator | `exp://127.0.0.1:8081` | `exp://127.0.0.1:8081` | Convex site URL | `cityuniversityclub://` |
| Expo Go (Device) | `exp://192.168.x.x:8081` | `exp://192.168.x.x:8081` | Convex site URL | `cityuniversityclub://` |
| Dev Build | `cityuniversityclub://` | `cityuniversityclub://` | Convex site URL | `cityuniversityclub://` |
| TestFlight | `cityuniversityclub://` | `cityuniversityclub://` | Convex site URL | `cityuniversityclub://` |
| Production | `cityuniversityclub://` | `cityuniversityclub://` | Convex site URL | `cityuniversityclub://` |

### Required trustedOrigins Configuration

To support all development environments, the `trustedOrigins` array in `auth.ts` must include:

```typescript
trustedOrigins: [
    siteUrl,                          // Convex site URL
    nativeAppUrl,                     // cityuniversityclub://
    "https://appleid.apple.com",      // Required for Apple Sign-In
    // Expo development URLs
    "exp://127.0.0.1:*/**",           // iOS Simulator
    "exp://192.168.*.*:*/**",         // Local network devices (192.168.x.x)
    "exp://10.*.*.*:*/**",            // Alternative local network (10.x.x.x)
    "exp://localhost:*/**",           // Localhost variant
    "http://localhost:8081",          // Expo web development
],
```

### Pattern Syntax (from Better Auth docs)

| Pattern | Description |
|---------|-------------|
| `?` | Matches exactly one character (except `/`) |
| `*` | Matches zero or more characters that don't cross `/` |
| `**` | Matches zero or more characters including `/` |
| `myapp://` | Prefix matching - matches all URLs starting with `myapp://` |

---

## Current Configuration Status

### Environment Variables (Current)

```bash
# Via: npx convex env list
BETTER_AUTH_SECRET=wdh0RLepFOAuSkdlRpWDwnT3dLOINPgTJC8xV9N1+d0
NATIVE_APP_URL=cityuniversityclub://
SITE_URL=http://localhost:3001  # ⚠️ NEEDS UPDATE for OAuth to work
```

### Issues Identified

| Issue | Current State | Required State | Priority |
|-------|---------------|----------------|----------|
| SITE_URL | `http://localhost:3001` | `https://artful-cod-78.convex.site` | **CRITICAL** |
| socialProviders | Not configured | GitHub/Google/Apple config | **CRITICAL** |
| useGitHubAuth hook | Does not exist | Create hook | HIGH |
| useGoogleAuth callbackURL | Uses `Linking.createURL("")` | Should use `"/"` | MEDIUM |

### Required Environment Variable Update

```bash
# Fix SITE_URL for OAuth callbacks
npx convex env set SITE_URL="https://artful-cod-78.convex.site"
```

---

## GitHub OAuth Setup

### Step 1: Create GitHub OAuth App

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click **"OAuth Apps"** → **"New OAuth App"**
3. Fill in the form:
   - **Application name:** `City University Club`
   - **Homepage URL:** `https://artful-cod-78.convex.site`
   - **Authorization callback URL:** `https://artful-cod-78.convex.site/api/auth/callback/github`
4. Click **"Register application"**
5. Copy the **Client ID**
6. Click **"Generate a new client secret"** and copy it immediately (shown only once)

### Step 2: Set Environment Variables

```bash
cd packages/backend
npx convex env set GITHUB_CLIENT_ID="your_client_id_here"
npx convex env set GITHUB_CLIENT_SECRET="your_client_secret_here"
npx convex env set SITE_URL="https://artful-cod-78.convex.site"
```

### Step 3: Update Backend Auth Configuration

Add GitHub to `socialProviders` in `packages/backend/convex/auth.ts`:

```typescript
function createAuth(ctx: GenericCtx<DataModel>) {
  return betterAuth({
    baseURL: siteUrl,
    trustedOrigins: [
      siteUrl,
      nativeAppUrl,
      "https://appleid.apple.com",
      "exp://127.0.0.1:*/**",
      "exp://192.168.*.*:*/**",
      "exp://10.*.*.*:*/**",
      "exp://localhost:*/**",
      "http://localhost:8081",
    ],
    database: authComponent.adapter(ctx),
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: false,
    },
    socialProviders: {
      github: {
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      },
    },
    plugins: [
      expo(),
      convex({ authConfig, jwksRotateOnTokenGenerationError: true }),
      lastLoginMethod(),
      crossDomain({ siteUrl }),
    ],
  });
}
```

### Step 4: Create Client Hook

Create `apps/native/lib/oauth/useGitHubAuth.ts`:

```typescript
import { useState } from "react";
import { authClient } from "../auth-client";

export const useGitHubAuth = () => {
    const [isLoading, setIsLoading] = useState(false);

    const signIn = async () => {
        setIsLoading(true);
        try {
            await authClient.signIn.social({
                provider: "github",
                callbackURL: "/", // Converts to deep link automatically
            });
        } catch (error) {
            console.error("GitHub sign in error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        signIn,
        isLoading,
    };
};
```

### Step 5: Export from Index

Update `apps/native/lib/oauth/index.ts`:

```typescript
export { useGoogleAuth } from "./useGoogleAuth";
export { useAppleAuth } from "./useAppleAuth";
export { useGitHubAuth } from "./useGitHubAuth";
```

### Step 6: Add Button to UI

In `apps/native/app/(auth)/landing.tsx`, add the GitHub button and hook usage.

---

## Google OAuth Setup

### Step 1: Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Navigate to **APIs & Services** → **Credentials**
4. If prompted, configure OAuth consent screen:
   - User Type: External (or Internal for Google Workspace)
   - App name: City University Club
   - User support email: your email
   - Developer contact: your email
   - Add scopes: `email`, `profile`, `openid`
   - Add test users if in "Testing" mode

### Step 2: Create OAuth Client ID

1. Click **"Create Credentials"** → **"OAuth client ID"**
2. Application type: **Web application**
3. Name: `City University Club - Convex`
4. Authorized JavaScript origins: `https://artful-cod-78.convex.site`
5. Authorized redirect URIs: `https://artful-cod-78.convex.site/api/auth/callback/google`
6. Copy **Client ID** and **Client Secret**

### Step 3: Set Environment Variables

```bash
cd packages/backend
npx convex env set GOOGLE_CLIENT_ID="your_client_id_here"
npx convex env set GOOGLE_CLIENT_SECRET="your_client_secret_here"
```

### Step 4: Add to Backend Configuration

```typescript
socialProviders: {
    github: {
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
    google: {
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
},
```

### Step 5: Fix useGoogleAuth Hook

The current hook has an issue. Update `apps/native/lib/oauth/useGoogleAuth.ts`:

```typescript
import { useState } from "react";
import { authClient } from "../auth-client";

export const useGoogleAuth = () => {
    const [isLoading, setIsLoading] = useState(false);

    const signIn = async () => {
        setIsLoading(true);
        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/", // ✅ Correct - converts to deep link
            });
        } catch (error) {
            console.error("Google sign in error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        signIn,
        isLoading,
    };
};
```

**Note:** The previous implementation used `Linking.createURL("")` which is incorrect. Better Auth's expoClient plugin automatically converts `"/"` to the app's deep link scheme (`cityuniversityclub://`).

---

## Apple Sign-In Setup

### Prerequisites

- Active Apple Developer Program membership ($99/year)
- App ID with "Sign in with Apple" capability

### Step 1: Configure App ID

1. Go to [Apple Developer Portal - Identifiers](https://developer.apple.com/account/resources/identifiers/list)
2. Find `com.cityuniversityclub.app` or create it
3. Enable **"Sign in with Apple"** capability
4. Save

### Step 2: Create Service ID (for web/backend OAuth flow)

1. Go to **Identifiers** → Click **+**
2. Select **"Services IDs"** → Continue
3. Fill in:
   - Description: `City University Club Web`
   - Identifier: `com.cityuniversityclub.web`
4. Enable **"Sign in with Apple"**
5. Click **Configure**:
   - Primary App ID: `com.cityuniversityclub.app`
   - Domains: `artful-cod-78.convex.site`
   - Return URLs: `https://artful-cod-78.convex.site/api/auth/callback/apple`
6. Save

### Step 3: Create Private Key

1. Go to **Keys** → Click **+**
2. Name: `City University Club Sign In`
3. Enable **"Sign in with Apple"**
4. Configure → Select your Primary App ID
5. Register and **download the `.p8` key file**
   - ⚠️ **You can only download once!** Store securely.
6. Note the **Key ID**

### Step 4: Generate Client Secret JWT

Apple requires a JWT as the client secret. This JWT must be:

- Signed with ES256 algorithm
- Max expiration: 6 months
- Contains: Team ID, Key ID, Service ID

**Script to generate (save as `scripts/generate-apple-secret.js`):**

```javascript
const jwt = require("jsonwebtoken");
const fs = require("fs");

const privateKey = fs.readFileSync("path/to/AuthKey_XXXXXXXXXX.p8");
const teamId = "YOUR_TEAM_ID"; // Found in Apple Developer account membership
const clientId = "com.cityuniversityclub.web"; // Your Service ID
const keyId = "XXXXXXXXXX"; // Your Key ID from step 3

const token = jwt.sign({}, privateKey, {
    algorithm: "ES256",
    expiresIn: "180d", // Max 6 months
    audience: "https://appleid.apple.com",
    issuer: teamId,
    subject: clientId,
    keyid: keyId,
});

console.log("Apple Client Secret:", token);
console.log("\nExpires in 180 days. Set a reminder to regenerate!");
```

### Step 5: Set Environment Variables

```bash
cd packages/backend
npx convex env set APPLE_CLIENT_ID="com.cityuniversityclub.web"
npx convex env set APPLE_CLIENT_SECRET="eyJhbGciOiJFUzI1NiIs..."
npx convex env set APPLE_APP_BUNDLE_IDENTIFIER="com.cityuniversityclub.app"
```

### Step 6: Add to Backend Configuration

```typescript
socialProviders: {
    github: { /* ... */ },
    google: { /* ... */ },
    apple: {
        clientId: process.env.APPLE_CLIENT_ID!,
        clientSecret: process.env.APPLE_CLIENT_SECRET!,
        appBundleIdentifier: process.env.APPLE_APP_BUNDLE_IDENTIFIER,
    },
},
trustedOrigins: [
    // ... existing origins
    "https://appleid.apple.com", // REQUIRED for Apple Sign-In
],
```

### Step 7: Native iOS Implementation

The existing `useAppleAuth.ts` uses `expo-apple-authentication` with ID token flow:

```typescript
import * as AppleAuthentication from "expo-apple-authentication";
import { useState } from "react";
import { authClient } from "../auth-client";

export const useAppleAuth = () => {
    const [isLoading, setIsLoading] = useState(false);

    const signIn = async () => {
        setIsLoading(true);
        try {
            const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                    AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                    AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ],
            });

            if (!credential.identityToken) {
                throw new Error("Failed to get Apple identity token");
            }

            await authClient.signIn.social({
                provider: "apple",
                idToken: {
                    token: credential.identityToken,
                },
            });
        } catch (error) {
            console.error("Apple sign in error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        signIn,
        isLoading,
    };
};
```

### Important Notes for Apple Sign-In

1. **HTTPS Required**: Apple Sign-In only works with HTTPS. Convex provides this.

2. **Bundle ID vs Service ID**:
   - Native iOS apps validate against **Bundle ID** (`com.cityuniversityclub.app`)
   - Web/backend OAuth uses **Service ID** (`com.cityuniversityclub.web`)
   - Set `appBundleIdentifier` in config for native support

3. **Client Secret Expiration**: Apple JWTs expire after 6 months max. **Set a calendar reminder to regenerate!**

4. **App Store Requirement**: If your iOS app offers any social login (Google, GitHub, etc.), Apple **requires** you to also offer Apple Sign-In.

---

## Code Implementation

### Complete Backend Auth Configuration

`packages/backend/convex/auth.ts`:

```typescript
import {
  createClient,
  type GenericCtx,
  type AuthFunctions,
} from "@convex-dev/better-auth";
import { convex, crossDomain } from "@convex-dev/better-auth/plugins";
import { expo } from "@better-auth/expo";
import { components, internal } from "./_generated/api";
import type { DataModel } from "./_generated/dataModel";
import { query } from "./_generated/server";
import { betterAuth } from "better-auth";
import { lastLoginMethod } from "better-auth/plugins";
import authConfig from "./auth.config";

const siteUrl = process.env.SITE_URL!;
const nativeAppUrl = process.env.NATIVE_APP_URL || "cityuniversityclub://";

const authFunctions: AuthFunctions = internal.auth;

export const authComponent = createClient<DataModel>(components.betterAuth, {
  authFunctions,
  verbose: process.env.NODE_ENV === "development",
  triggers: {
    user: {
      onCreate: async (ctx, authUser) => {
        console.log("User created:", authUser.email);
      },
      onUpdate: async (ctx, newUser, oldUser) => {},
      onDelete: async (ctx, authUser) => {
        console.log("User deleted:", authUser.email);
      },
    },
  },
});

export const { onCreate, onUpdate, onDelete } = authComponent.triggersApi();

function createAuth(ctx: GenericCtx<DataModel>) {
  return betterAuth({
    baseURL: siteUrl,
    trustedOrigins: [
      siteUrl,
      nativeAppUrl,
      "https://appleid.apple.com",
      "exp://127.0.0.1:*/**",
      "exp://192.168.*.*:*/**",
      "exp://10.*.*.*:*/**",
      "exp://localhost:*/**",
      "http://localhost:8081",
    ],
    database: authComponent.adapter(ctx),
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: false,
      sendResetPassword: async ({ user, url }) => {
        console.log(`[Password Reset] User: ${user.email}`);
        console.log(`[Password Reset] URL: ${url}`);
      },
    },
    socialProviders: {
      github: {
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      },
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      },
      apple: {
        clientId: process.env.APPLE_CLIENT_ID!,
        clientSecret: process.env.APPLE_CLIENT_SECRET!,
        appBundleIdentifier: process.env.APPLE_APP_BUNDLE_IDENTIFIER,
      },
    },
    plugins: [
      expo(),
      convex({ authConfig, jwksRotateOnTokenGenerationError: true }),
      lastLoginMethod(),
      crossDomain({ siteUrl }),
    ],
  });
}

export { createAuth };

export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    return await authComponent.safeGetAuthUser(ctx);
  },
});
```

---

## Testing Guide

### Testing GitHub OAuth

1. Start the development servers:

   ```bash
   bun run dev
   ```

2. Open iOS Simulator or physical device with Expo Go

3. Navigate to the login screen

4. Tap "Sign in with GitHub"

5. Expected flow:
   - WebBrowser opens to GitHub authorization page
   - User logs in and authorizes
   - Browser briefly shows Convex site
   - Browser closes automatically
   - App shows authenticated state

### Testing Google OAuth

Same flow as GitHub. Additional notes:

- If OAuth consent screen is in "Testing" mode, add your test email to test users
- First-time consent will show Google's permission dialog

### Testing Apple Sign-In

**On iOS Simulator:**

- Works with your Apple ID signed into the simulator
- Settings → Sign in with your Apple ID first

**On Physical Device:**

- Uses device's logged-in Apple ID
- Full native experience with Face ID/Touch ID

### Common Test Scenarios

| Scenario | Expected Behavior |
|----------|------------------|
| First-time sign-in | New user created, redirected to app |
| Returning user | Existing user signed in |
| Cancel during OAuth | Returns to app, no error shown |
| Network error | Error message displayed |
| Session persistence | User stays signed in after app restart |

---

## Troubleshooting

### "Invalid origin" Error

**Symptom:** `ERROR [Better Auth]: Invalid origin: exp://...`

**Cause:** The origin sent by the Expo app is not in `trustedOrigins`.

**Solution:** Ensure `trustedOrigins` includes all Expo development patterns:

```typescript
trustedOrigins: [
    "exp://127.0.0.1:*/**",
    "exp://192.168.*.*:*/**",
    "exp://10.*.*.*:*/**",
    "exp://localhost:*/**",
]
```

### "redirect_uri_mismatch" Error

**Symptom:** OAuth provider shows redirect URI mismatch error.

**Cause:** The callback URL configured in the provider doesn't match what Better Auth sends.

**Solution:**

1. Verify callback URL matches exactly: `https://artful-cod-78.convex.site/api/auth/callback/{provider}`
2. Check for trailing slashes - must match exactly
3. Verify `SITE_URL` env var is set to `https://artful-cod-78.convex.site`

### Apple Sign-In "aud claim" Error

**Symptom:** `JWTClaimValidationFailed: unexpected "aud" claim value`

**Cause:** Native iOS sends the Bundle ID as audience, but config only has Service ID.

**Solution:** Set `appBundleIdentifier` in Apple provider config:

```typescript
apple: {
    clientId: process.env.APPLE_CLIENT_ID!,
    clientSecret: process.env.APPLE_CLIENT_SECRET!,
    appBundleIdentifier: "com.cityuniversityclub.app",
}
```

### WebBrowser Doesn't Return to App

**Symptom:** After OAuth completes, browser stays open.

**Causes & Solutions:**

1. Verify `expo-web-browser` plugin is in `app.config.ts` plugins array
2. Check app scheme: `scheme: "cityuniversityclub"`
3. Verify `NATIVE_APP_URL` matches: `cityuniversityclub://`
4. Rebuild the app: `npx expo prebuild --clean`

### Session Not Persisting

**Symptom:** User logged out after app restart.

**Solution:**

1. Verify `expo-secure-store` plugin is in app.config.ts
2. Check expoClient configuration:

   ```typescript
   expoClient({
       scheme: Constants.expoConfig?.scheme,
       storage: SecureStore,
   })
   ```

3. Rebuild after adding plugins

### CORS Errors (Web)

**Symptom:** CORS errors in browser console when using Expo Web.

**Cause:** CORS not enabled or `crossDomain` plugin missing.

**Solution:**

1. Verify `http.ts` has `cors: true`:

   ```typescript
   authComponent.registerRoutes(http, createAuth, { cors: true });
   ```

2. Add `crossDomain` plugin to auth config:

   ```typescript
   plugins: [
       // ... other plugins
       crossDomain({ siteUrl }),
   ]
   ```

3. Use `crossDomainClient()` on web, `expoClient()` on native

---

## Security Considerations

1. **Environment Variables**: Never commit OAuth secrets to version control. Use Convex env vars.

2. **Apple Secret Rotation**: Apple client secrets expire in max 6 months. Set calendar reminders.

3. **OAuth Scope Minimization**: Only request necessary scopes (email, profile).

4. **HTTPS Only**: All OAuth callbacks use HTTPS via Convex site URL.

5. **Token Storage**: Expo SecureStore encrypts tokens on device.

6. **Monitor OAuth Apps**: Regularly review authorized apps in provider dashboards.

---

## References

- [Better Auth Documentation](https://www.better-auth.com/docs)
- [Better Auth Expo Integration](https://www.better-auth.com/docs/integrations/expo)
- [Better Auth GitHub Provider](https://www.better-auth.com/docs/authentication/github)
- [Better Auth Google Provider](https://www.better-auth.com/docs/authentication/google)
- [Better Auth Apple Provider](https://www.better-auth.com/docs/authentication/apple)
- [Convex Better Auth](https://labs.convex.dev/better-auth)
- [Convex Better Auth Expo Guide](https://labs.convex.dev/better-auth/framework-guides/expo)
- [Expo Web Browser](https://docs.expo.dev/versions/latest/sdk/webbrowser/)
- [Expo Apple Authentication](https://docs.expo.dev/versions/latest/sdk/apple-authentication/)
</file>

<file path="docs/STORYBOOK_IMPLEMENTATION_PHASES.md">
# Storybook Implementation Phases

This document outlines the phased implementation of Storybook across the monorepo, using CLI tools for generation and validating at each step with `type-check` and `lint:fix`.

---

## Overview

### Applications to Configure

| App | Location | Storybook Framework | Port |
|-----|----------|---------------------|------|
| Next.js Web Admin | `apps/web` | `@storybook/nextjs` | 6006 |
| Expo Native Mobile | `apps/native` | `@storybook/react-native` | Device |
| Expo Native Web | `apps/native` | `@storybook/react-native-web-vite` | 6007 |

### Validation Commands (Run After Each Phase)

```bash
# From monorepo root
bun run check-types          # TypeScript validation
bun biome check --write .    # Lint and format fix
```

---

## Phase 1: Next.js Web App - Basic Setup

**Goal:** Get Storybook running with auto-generated config using CLI.

### 1.1 Initialize Storybook via CLI

```bash
cd apps/web
npx storybook@latest init --builder vite --skip-install
bun install
```

The CLI will:

- Detect Next.js framework automatically
- Create `.storybook/main.ts` and `.storybook/preview.ts`
- Add required dependencies to `package.json`
- Create example stories (we'll replace these)

### 1.2 Validate Initial Setup

```bash
# Test Storybook runs
bun run storybook

# Validate types and lint
cd ../..
bun run check-types
bun biome check --write .
```

### 1.3 Configure Tailwind CSS v4

Update `.storybook/preview.ts` to import global styles:

```typescript
import "../src/index.css";
```

### 1.4 Create First Story (Button)

Create `apps/web/src/components/ui/button.stories.tsx` with basic variants.

### 1.5 Validate Phase 1

```bash
bun run check-types
bun biome check --write .
bun run storybook  # Visual verification
```

---

## Phase 2: Next.js Web App - Theme & Dark Mode

**Goal:** Add theme switching for light/dark mode testing.

### 2.1 Install Theme Addon

```bash
cd apps/web
bun add -d @storybook/addon-themes
```

### 2.2 Configure Theme Switching

Update `.storybook/main.ts` to include addon.
Update `.storybook/preview.ts` with `withThemeByClassName` decorator.

### 2.3 Validate Phase 2

```bash
bun run check-types
bun biome check --write .
```

---

## Phase 3: Next.js Web App - All UI Component Stories

**Goal:** Create stories for every UI component with full variant coverage.

### Components to Document

| Component | Variants/States | Priority |
|-----------|-----------------|----------|
| `button.tsx` | 6 variants, 8 sizes, disabled, loading, with icon | High |
| `input.tsx` | text, email, password, disabled, with label | High |
| `label.tsx` | default, required indicator | Medium |
| `card.tsx` | with header, footer, simple | High |
| `checkbox.tsx` | checked, unchecked, disabled, indeterminate | Medium |
| `dropdown-menu.tsx` | open, closed, with items, nested | Medium |
| `skeleton.tsx` | line, circle, card shapes | Low |
| `sonner.tsx` | success, error, warning, info toasts | Medium |

### 3.1 Create Stories for Each Component

Each story file should include:

- Default state
- All variants
- All sizes (if applicable)
- Disabled state
- Loading state (if applicable)
- Error state (if applicable)
- Composition examples
- Dark mode appearance

### 3.2 Validate Phase 3

```bash
bun run check-types
bun biome check --write .
```

---

## Phase 4: Next.js Web App - Feature Component Stories

**Goal:** Document composed/feature components.

### Components to Document

| Component | Description | Dependencies |
|-----------|-------------|--------------|
| `sign-in-form.tsx` | Auth sign-in form | Input, Button, Card |
| `sign-up-form.tsx` | Auth sign-up form | Input, Button, Card |
| `user-menu.tsx` | User dropdown menu | DropdownMenu, Button |
| `header.tsx` | Page header | Multiple |
| `mode-toggle.tsx` | Theme toggle button | Button, DropdownMenu |
| `loader.tsx` | Loading indicator | Skeleton |

### 4.1 Create Feature Component Stories

Include interaction states and realistic data.

### 4.2 Validate Phase 4

```bash
bun run check-types
bun biome check --write .
```

---

## Phase 5: Next.js Web App - Interaction Testing

**Goal:** Add play functions for automated component testing.

### 5.1 Install Testing Addons

```bash
cd apps/web
bun add -d @storybook/test @storybook/addon-interactions
```

### 5.2 Add Play Functions to Stories

Example for sign-in form:

```typescript
export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(
      canvas.getByLabelText(/email/i),
      "test@example.com"
    );
    await userEvent.type(
      canvas.getByLabelText(/password/i),
      "password123"
    );
    await userEvent.click(canvas.getByRole("button", { name: /sign in/i }));

    await expect(canvas.getByRole("button")).toBeDisabled();
  },
};
```

### 5.3 Validate Phase 5

```bash
bun run check-types
bun biome check --write .
bun run storybook  # Run interaction tests visually
```

---

## Phase 6: Next.js Web App - Accessibility Testing

**Goal:** Add automated accessibility auditing.

### 6.1 Install A11y Addon

```bash
cd apps/web
bun add -d @storybook/addon-a11y
```

### 6.2 Configure A11y Addon

Add to `.storybook/main.ts` addons array.

### 6.3 Review and Fix A11y Issues

Run Storybook, check A11y panel for each component, fix violations.

### 6.4 Validate Phase 6

```bash
bun run check-types
bun biome check --write .
```

---

## Phase 7: Next.js Web App - Documentation (MDX)

**Goal:** Add rich documentation with MDX files.

### 7.1 Create Documentation Structure

```
apps/web/src/
├── docs/
│   ├── Introduction.mdx
│   ├── Colors.mdx
│   ├── Typography.mdx
│   └── GettingStarted.mdx
```

### 7.2 Configure Autodocs

Update stories to use `tags: ["autodocs"]` for auto-generated docs.

### 7.3 Create Component Documentation Pages

Add detailed usage guidelines, do's and don'ts, accessibility notes.

### 7.4 Validate Phase 7

```bash
bun run check-types
bun biome check --write .
```

---

## Phase 8: Expo Native App - Basic Setup

**Goal:** Initialize Storybook for React Native with on-device UI.

### 8.1 Initialize Storybook via CLI

```bash
cd apps/native
npx storybook@latest init --type react_native
bun install
```

### 8.2 Update Metro Configuration

The CLI should update `metro.config.cjs`, but verify `withStorybook` is properly integrated with existing UniWind config.

### 8.3 Generate Storybook Requirements File

```bash
npx sb-rn-get-stories
```

### 8.4 Add Environment Toggle

Create mechanism to switch between app mode and Storybook mode.

### 8.5 Validate Phase 8

```bash
bun run check-types
bun biome check --write .
STORYBOOK=true expo start  # Test on device/simulator
```

---

## Phase 9: Expo Native App - Theme Integration

**Goal:** Configure Storybook to use CUC brand colors and UniWind styles.

### 9.1 Configure Preview with Brand Theme

Update `.storybook/preview.tsx`:

- Import CUC_COLORS
- Set background values
- Configure decorators for consistent styling

### 9.2 Test UniWind Style Rendering

Verify Tailwind classes render correctly in stories.

### 9.3 Validate Phase 9

```bash
bun run check-types
bun biome check --write .
```

---

## Phase 10: Expo Native App - Form Component Stories

**Goal:** Document all form-related components.

### Components to Document

| Component | Location | Features |
|-----------|----------|----------|
| `StyledButton` | `form.tsx` | primary, secondary, tertiary, loading |
| `StyledTextInput` | `form.tsx` | text, email, password, with label |
| `FormContainer` | `form.tsx` | layout wrapper |
| `FormHeader` | `form.tsx` | title, subtitle |
| `KeyboardAwareForm` | `keyboard/` | platform-specific behavior |

### 10.1 Create Form Stories

With interactive state management for controlled inputs.

### 10.2 Validate Phase 10

```bash
bun run check-types
bun biome check --write .
```

---

## Phase 11: Expo Native App - UI Component Stories

**Goal:** Document remaining UI components.

### Components to Document

| Component | Features |
|-----------|----------|
| `CategoryFilter.tsx` | Animated chips, selection state, Reanimated |
| `MembershipCard.tsx` | Card layout, user data display |
| `ExternalLinkButton.tsx` | Link handling |
| `LastUsedIndicator.tsx` | Status indicator |
| `container.tsx` | Layout wrapper |
| `theme-toggle.tsx` | Theme switching |

### 11.1 Create UI Stories

Include animation states where applicable.

### 11.2 Validate Phase 11

```bash
bun run check-types
bun biome check --write .
```

---

## Phase 12: Expo Native App - Screen/Feature Stories

**Goal:** Document composed screen components.

### Components to Document

| Component | Description |
|-----------|-------------|
| `sign-in.tsx` | Complete sign-in screen |
| `sign-up.tsx` | Complete sign-up screen |

### 12.1 Create Screen Stories

With mocked navigation and auth contexts.

### 12.2 Validate Phase 12

```bash
bun run check-types
bun biome check --write .
```

---

## Phase 13: Expo Native Web Storybook

**Goal:** Set up web-based Storybook for native components (for documentation sharing).

### 13.1 Install React Native Web Vite Framework

```bash
cd apps/native
bun add -d @storybook/react-native-web-vite react-native-web react-dom
```

### 13.2 Create Separate Web Config

Create `.storybook-web/` directory with web-specific config.

### 13.3 Configure Vite for React Native Web

Handle module aliases and polyfills.

### 13.4 Validate Phase 13

```bash
bun run check-types
bun biome check --write .
bun run storybook:web-ui  # Test in browser
```

---

## Phase 14: Turborepo Integration

**Goal:** Add Storybook tasks to Turborepo for orchestrated builds.

### 14.1 Update turbo.json

Add `storybook` (dev), `storybook:build` (production) tasks.

### 14.2 Update Root package.json

Add convenience scripts for running Storybook across apps.

### 14.3 Update .gitignore

Add `storybook-static/`, `storybook.requires.ts`.

### 14.4 Update biome.jsonc

Ignore generated Storybook files from linting.

### 14.5 Validate Phase 14

```bash
bun run check-types
bun biome check --write .
bun run storybook:web      # Test turbo task
bun run storybook:native   # Test turbo task
```

---

## Phase 15: Static Build & Deployment

**Goal:** Configure production builds for Storybook.

### 15.1 Test Static Builds

```bash
bun run storybook:build:web
bun run storybook:build:native-web
```

### 15.2 Configure Deployment (Optional)

Options:

- Vercel (auto-deploy on PR)
- Netlify
- GitHub Pages
- Chromatic (visual testing + hosting)

### 15.3 Validate Phase 15

```bash
# Verify static builds work
npx serve apps/web/storybook-static
npx serve apps/native/storybook-static
```

---

## Phase 16: Visual Regression Testing (Optional)

**Goal:** Add Chromatic or similar for visual diff testing.

### 16.1 Set Up Chromatic

```bash
npx chromatic --project-token=<token>
```

### 16.2 Configure CI Integration

Add to GitHub Actions or similar.

### 16.3 Validate Phase 16

Run visual tests, review baselines.

---

## Phase 17: Final Polish & Documentation

**Goal:** Complete documentation and clean up.

### 17.1 Update README

Add Storybook section with commands.

### 17.2 Create Contributing Guide

Document how to add new stories.

### 17.3 Review All Stories

Ensure consistency across all stories.

### 17.4 Final Validation

```bash
bun run check-types
bun biome check --write .
bun run build  # Ensure no conflicts with main build
```

---

## Command Reference

### Development

```bash
# Next.js Web App
bun run storybook:web           # Dev server on :6006

# Expo Native (on-device)
bun run storybook:native        # Expo Go
bun run storybook:native:ios    # iOS Simulator
bun run storybook:native:android # Android Emulator

# Expo Native (web UI)
bun run storybook:native:web-ui # Browser on :6007
```

### Production Builds

```bash
bun run storybook:build         # All apps
bun run storybook:build:web     # Web only
bun run storybook:build:native  # Native web UI only
```

### Validation

```bash
bun run check-types             # TypeScript
bun biome check --write .       # Lint + format
```

---

## Estimated Timeline

| Phase | Description | Complexity |
|-------|-------------|------------|
| 1-2 | Web basic + themes | Low |
| 3-4 | Web components | Medium |
| 5-7 | Web testing + docs | Medium |
| 8-9 | Native basic + themes | Medium |
| 10-12 | Native components | Medium |
| 13 | Native web UI | Medium |
| 14-15 | Integration + builds | Low |
| 16-17 | Visual testing + polish | Low |

---

## Validation Checklist (Run After Every Phase)

- [ ] `bun run check-types` passes
- [ ] `bun biome check --write .` passes
- [ ] Storybook dev server runs without errors
- [ ] All stories render correctly
- [ ] No console errors in browser/device
- [ ] Dark mode works (where applicable)
- [ ] Interactive controls work
</file>

<file path="docs/storybook-expo-research.md">
# Storybook for Expo React Native: Comprehensive Research Report (2025-2026)

**Research Date:** January 15, 2026
**Report Version:** 1.0

---

## Executive Summary

Storybook for React Native has undergone significant evolution in 2025-2026, with major releases including Storybook 9 and 10 introducing performance improvements, ESM-only support, and better Expo integration. The ecosystem now offers three distinct approaches for developing and testing React Native components:

1. **Native-only** - Full Storybook UI running on mobile devices/simulators
2. **Web-only** - React Native Web rendering in browsers via Vite
3. **Hybrid/Both** - Combined approach with web documentation and native rendering

Key highlights:

- **Storybook 10** (November 2025) is ESM-only, reducing install size by 29% on top of Storybook 9's 50% reduction
- **Metro configuration simplified** with the new `withStorybook` wrapper
- **React Native Web Vite framework** (`@storybook/react-native-web-vite`) replaces the deprecated Webpack addon
- **Expo template available** for quick starts: `npx create-expo-app --template expo-template-storybook`

---

## Table of Contents

1. [Latest Storybook Versions](#latest-storybook-versions)
2. [ESM Support and Performance](#esm-support-and-performance)
3. [Installation Guide for Expo](#installation-guide-for-expo)
4. [Metro Bundler Configuration](#metro-bundler-configuration)
5. [Web and Mobile Targets](#web-and-mobile-targets)
6. [Monorepo Setup](#monorepo-setup)
7. [NativeWind/Tailwind Integration](#nativewindtailwind-integration)
8. [Addons and Extensions](#addons-and-extensions)
9. [Performance Optimization](#performance-optimization)
10. [Known Issues and Workarounds](#known-issues-and-workarounds)
11. [Migration Guide](#migration-guide)
12. [References](#references)

---

## Latest Storybook Versions

### Storybook Core

| Version | Release Date | Key Features |
|---------|-------------|--------------|
| 10.1.x | January 2026 | ESM-only, 29% smaller, module automocking, CSF Factories |
| 10.0 | November 2025 | Breaking: ESM-only distribution |
| 9.0 | 2025 | 48% leaner, tag-based organization, modular installs |
| 8.5 | Late 2024 | React Native Web Vite framework introduction |

### Storybook React Native

| Package | Latest Version | Notes |
|---------|---------------|-------|
| `@storybook/react-native` | 10.1.11 | Core React Native support |
| `@storybook/react-native-web-vite` | 10.1.11 | Vite-based web rendering |
| `@storybook/addon-ondevice-controls` | 10.x | On-device prop editing |
| `@storybook/addon-ondevice-actions` | 10.x | Action logging on device |

### Node.js Requirements

Storybook 10 requires modern Node.js with ESM support:

- Node 20.16+
- Node 22.19+
- Node 24+

---

## ESM Support and Performance

### ESM-Only Architecture (Storybook 10)

Storybook 10 made the breaking decision to go ESM-only, removing CommonJS from published code. This architectural change delivers:

- **29% smaller install size** compared to Storybook 9
- **79% cumulative reduction** since Storybook 8
- **Un-minified distribution** for easier debugging
- **Simplified codebase** with removed legacy compatibility layers
- **Faster compilation and publishing**

### Performance Benefits

The transition to ESM provides:

- Alignment with modern bundlers and libraries
- Elimination of dual ESM/CJS output overhead
- Reduced testing complexity
- Better tree-shaking support

---

## Installation Guide for Expo

### Quick Start (New Projects)

```bash
# Create a new Expo project with Storybook pre-configured
npx create-expo-app --template expo-template-storybook AwesomeStorybook
```

### Adding to Existing Expo Projects

```bash
# Initialize Storybook in your project
npx storybook@latest init

# Or for specific version
npm create storybook@10
```

### Required Dependencies

```bash
# Core dependencies
npx expo install @storybook/react-native

# Required peer dependencies
npx expo install react-native-reanimated react-native-gesture-handler @gorhom/bottom-sheet react-native-svg

# On-device addons (optional but recommended)
npx expo install @storybook/addon-ondevice-controls @storybook/addon-ondevice-actions
npx expo install @react-native-community/datetimepicker @react-native-community/slider

# Cross-platform environment variables
npm install --save-dev cross-env
```

### Project Structure

After setup, your project should have:

```
your-expo-app/
├── .rnstorybook/           # Storybook configuration (v9+)
│   ├── main.ts             # Story discovery and addons
│   ├── preview.tsx         # Global decorators and parameters
│   └── storybook.requires.ts  # Auto-generated imports
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.stories.tsx
├── metro.config.js         # Metro bundler with Storybook wrapper
├── app.config.js           # Expo configuration
└── App.tsx                 # Entry point with Storybook toggle
```

### Configuration Files

**`.rnstorybook/main.ts`**

```typescript
import type { StorybookConfig } from '@storybook/react-native';

const main: StorybookConfig = {
  stories: [
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
    '../app/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
    '@storybook/addon-ondevice-backgrounds',
  ],
};

export default main;
```

**`.rnstorybook/preview.tsx`**

```typescript
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
```

---

## Metro Bundler Configuration

### Storybook 10 Configuration (Current)

The Metro wrapper has been simplified in v10 with breaking changes:

**`metro.config.js`**

```javascript
const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
// BREAKING: withStorybook is now a named export
const { withStorybook } = require('@storybook/react-native/metro/withStorybook');

const config = getDefaultConfig(__dirname);

module.exports = withStorybook(config, {
  // Enable Storybook based on environment variable
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true',
  // Configuration directory (default: .rnstorybook)
  configPath: path.resolve(__dirname, './.rnstorybook'),
});
```

### Key Changes from v9 to v10

| v9 | v10 |
|----|-----|
| Default export | Named export: `{ withStorybook }` |
| `withStorybookConfig` from separate path | Standard `withStorybook` from `metro/withStorybook` |
| `onDisabledRemoveStorybook` option | Automatic when `enabled: false` |

### Automatic Bundle Optimization

When `enabled: false`, Metro automatically:

- Stubs out the `.rnstorybook` import
- Removes all Storybook code from production bundle
- No conditional imports needed in your app code

---

## Web and Mobile Targets

### Three Setup Approaches

#### 1. Native-Only (On-Device)

Best for: Testing on actual devices, native-specific components

```typescript
// App.tsx - Simple export for native-only
export { default } from './.rnstorybook';
```

#### 2. Web-Only (React Native Web + Vite)

Best for: Documentation, sharing with team, testing in browser

**Install the Vite framework:**

```bash
npm install --save-dev @storybook/react-native-web-vite
```

**`.storybook/main.ts`** (for web):

```typescript
import type { StorybookConfig } from '@storybook/react-native-web-vite';

const config: StorybookConfig = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
  framework: '@storybook/react-native-web-vite',
  addons: ['@storybook/addon-essentials'],
};

export default config;
```

#### 3. Both (Recommended for Teams)

When initializing Storybook, select "Both" to get configurations for both environments:

- `.rnstorybook/` - React Native configuration
- `.storybook/` - React Native Web configuration

This allows you to:

- Develop on real devices or simulators
- Document and test in the browser
- Share interactive documentation with stakeholders
- Access 500+ Storybook addons on web

### Running Both Targets

**`package.json` scripts:**

```json
{
  "scripts": {
    "storybook": "cross-env EXPO_PUBLIC_STORYBOOK_ENABLED='true' expo start",
    "storybook:ios": "cross-env EXPO_PUBLIC_STORYBOOK_ENABLED='true' expo ios",
    "storybook:android": "cross-env EXPO_PUBLIC_STORYBOOK_ENABLED='true' expo android",
    "storybook:web": "storybook dev -p 6006",
    "storybook:build": "storybook build"
  }
}
```

### App Entry Point with Toggle

**`App.tsx`**

```typescript
import Constants from 'expo-constants';

function App() {
  // Your normal app component
  return <MainApp />;
}

let AppEntryPoint = App;

// Toggle based on environment variable
if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
  AppEntryPoint = require('./.rnstorybook').default;
}

export default AppEntryPoint;
```

**`app.config.js`**

```javascript
export default ({ config }) => ({
  ...config,
  name: 'MyApp',
  extra: {
    storybookEnabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED,
  },
});
```

---

## Monorepo Setup

### Recommended Structure

For Turborepo/monorepo setups, create Storybook as a separate app:

```
monorepo/
├── apps/
│   ├── native/              # Expo app
│   ├── web/                 # Next.js app
│   └── storybook/           # Dedicated Storybook app
├── packages/
│   ├── ui/                  # Shared UI components
│   │   └── src/
│   │       ├── Button/
│   │       │   ├── Button.tsx
│   │       │   └── Button.stories.tsx
│   └── config/              # Shared configurations
```

### Benefits of Separate Storybook App

- Clean separation of dependencies
- No special case directories in monorepo root
- Standard dev/build scripts (not storybook-specific)
- Stories import components using fully scoped packages
- Easier CI/CD configuration

### Turborepo Configuration

**`apps/storybook/package.json`**

```json
{
  "name": "storybook",
  "private": true,
  "scripts": {
    "dev": "storybook dev -p 6006",
    "build": "storybook build"
  },
  "dependencies": {
    "@myorg/ui": "workspace:*"
  }
}
```

### Workspace Configuration Notes

- Yarn Workspaces is recommended for React Native monorepos
- Bun has some known issues with React Native workspaces
- Expo Router works seamlessly with monorepo setups
- Consider running two Metro bundlers (app on 8081, Storybook on 8082)

---

## NativeWind/Tailwind Integration

### Current Status (January 2026)

NativeWind integration with Storybook React Native Web Vite has known issues. Styles may not render correctly in web builds while working fine in native.

### Configuration for React Native Web Vite

**`.storybook/main.ts`**

```typescript
import type { StorybookConfig } from '@storybook/react-native-web-vite';

const config: StorybookConfig = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
  framework: {
    name: '@storybook/react-native-web-vite',
    options: {
      pluginReactOptions: {
        jsxImportSource: 'nativewind',
      },
    },
  },
};

export default config;
```

### Alternative: Vite Config Workaround

**`vite.config.ts`**

```typescript
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['nativewind/babel', { mode: 'transformOnly' }]],
      },
    }),
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
});
```

### Import Tailwind CSS

**`.storybook/preview.ts`**

```typescript
import '../global.css'; // Your Tailwind CSS file

const preview = {
  // ... preview config
};

export default preview;
```

### Known Issues

- NativeWind styles may appear in `storybook dev` but not in `storybook build`
- The styles are compiled but classes may not be applied to elements
- Native Storybook rendering works correctly
- Issue tracked on GitHub (#32018)

---

## Addons and Extensions

### On-Device Addons

| Addon | Purpose |
|-------|---------|
| `@storybook/addon-ondevice-controls` | Edit component props in real-time |
| `@storybook/addon-ondevice-actions` | Log component actions/events |
| `@storybook/addon-ondevice-backgrounds` | Switch background colors |
| `@storybook/addon-ondevice-notes` | Display markdown notes |

### Installation

```bash
# Install on-device addons
npm install --save-dev \
  @storybook/addon-ondevice-controls \
  @storybook/addon-ondevice-actions \
  @storybook/addon-ondevice-backgrounds \
  @storybook/addon-ondevice-notes

# Required peer dependencies for controls
npx expo install \
  @react-native-community/datetimepicker \
  @react-native-community/slider
```

### Web Addons

When using React Native Web, you have access to 500+ Storybook addons:

```bash
npm install --save-dev \
  @storybook/addon-essentials \
  @storybook/addon-a11y \
  @storybook/addon-interactions
```

---

## Performance Optimization

### Lite Mode for Reduced Bundle Size

Use `@storybook/react-native-ui-lite` instead of the full UI:

```typescript
// Reduces dependencies (no react-native-reanimated required)
import StorybookUIRoot from '@storybook/react-native-ui-lite';
```

### Production Bundle Optimization

Metro automatically excludes Storybook when `enabled: false`:

```javascript
// metro.config.js
module.exports = withStorybook(config, {
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true',
});
```

### Story Code Splitting

Configure story discovery to limit scope:

```typescript
// .rnstorybook/main.ts
const main: StorybookConfig = {
  stories: [
    // Only include specific directories
    '../components/ui/**/*.stories.tsx',
    // Exclude test files
    '!**/*.test.stories.tsx',
  ],
};
```

### Tips for Better Performance

1. **Use environment variables** - Toggle Storybook at build time, not runtime
2. **Limit story scope** - Only include necessary story files
3. **Use lite mode** - When full UI features aren't needed
4. **Separate design system** - Put UI components in a dedicated package
5. **Cache metro bundler** - Use `--reset-cache` only when necessary

---

## Known Issues and Workarounds

### Issue 1: NX/Monorepo Configuration

**Problem:** NX generators create Vite/React config instead of Metro/React Native

**Workaround:** Manually configure Metro and add `vite-plugin-react-native-web` for web stories

### Issue 2: Blank Canvas/Theme Issues

**Problem:** Stories render but content is invisible

**Solution:** Switch between dark/light theme in Storybook UI to make text visible

### Issue 3: NativeWind v4 Build Issues

**Problem:** Styles work in dev but not in production builds

**Status:** Known issue (#32018), under investigation

**Workaround:** Use Webpack-based setup or await patch

### Issue 4: Dependency Version Mismatch

**Problem:** Mixed major versions cause undefined behavior

**Solution:** Align all `@storybook/*` packages to the same major version:

```bash
npm ls | grep storybook
# Verify all packages are on the same major version
```

### Issue 5: Metro Port Conflicts

**Problem:** Running app and Storybook simultaneously causes port conflicts

**Solution:** Expo detects port 8081 in use and auto-assigns 8082

---

## Migration Guide

### From v9 to v10

1. **Update all dependencies** to v10:

```bash
npm install @storybook/react-native@10 \
  @storybook/addon-ondevice-controls@10 \
  @storybook/addon-ondevice-actions@10
```

1. **Update Metro configuration:**

```javascript
// Before (v9)
const withStorybook = require('@storybook/react-native/metro/withStorybook');
module.exports = withStorybook(config);

// After (v10)
const { withStorybook } = require('@storybook/react-native/metro/withStorybook');
module.exports = withStorybook(config, {
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true',
});
```

1. **Remove deprecated options:**
   - Remove `onDisabledRemoveStorybook` (now automatic)
   - Replace `withStorybookConfig` with `withStorybook`

2. **Verify Node.js version:**
   - Requires Node 20.16+, 22.19+, or 24+

### From Webpack Addon to Vite Framework

1. **Replace packages:**

```bash
npm uninstall @storybook/addon-react-native-web @storybook/react-webpack5
npm install @storybook/react-native-web-vite
```

1. **Update `.storybook/main.ts`:**

```typescript
// Before
import type { StorybookConfig } from '@storybook/react-webpack5';
const config: StorybookConfig = {
  addons: ['@storybook/addon-react-native-web'],
  framework: '@storybook/react-webpack5',
};

// After
import type { StorybookConfig } from '@storybook/react-native-web-vite';
const config: StorybookConfig = {
  framework: '@storybook/react-native-web-vite',
};
```

---

## References

### Official Documentation

- [Storybook for React Native GitHub](https://github.com/storybookjs/react-native)
- [Storybook React Native Docs](https://storybookjs.github.io/react-native/docs/intro/)
- [Storybook for React Native Web (Vite)](https://storybook.js.org/docs/get-started/frameworks/react-native-web-vite)
- [Storybook 10 Release Blog](https://storybook.js.org/blog/storybook-10/)
- [Storybook 10 Migration Guide](https://storybook.js.org/docs/releases/migration-guide)
- [Storybook React Native Releases](https://github.com/storybookjs/react-native/releases)

### Expo Resources

- [Building beautiful components faster with Storybook 9 and Expo](https://expo.dev/blog/storybook-and-expo)
- [Storybook for React Native Tutorial](https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/)

### Community Resources

- [Adding Storybook to your Expo project - Mauro Garcia](https://maurogarcia.dev/posts/Setup-storybook-with-expo/)
- [A cleaner approach of Storybook for React Native with Expo - Medium](https://medium.com/ekino-france/a-cleaner-approach-for-storybook-with-react-native-f9f5a59fdfa8)
- [Setting Up Universal Storybook with NativeWind - GeekyAnts](https://techblog.geekyants.com/setting-up-universal-storybook-with-nativewind-a-step-by-step-guide)
- [How to Cleanly Swap Between React Native Storybook 10 and Your App - Callstack](https://www.callstack.com/blog/how-to-cleanly-swap-between-react-native-storybook-10-and-your-app)
- [Run Storybook with NX Expo and React Native Paper - DEV Community](https://dev.to/typescriptteatime/run-storybook-with-nx-expo-and-react-native-paper-4l8l)

### Monorepo Templates

- [expo-storybook-monorepo-example](https://github.com/dannyhw/expo-storybook-monorepo-example)
- [storybook-rnw-monorepo](https://github.com/axeldelafosse/storybook-rnw-monorepo)
- [create-turbo-with-expo](https://github.com/Marknjo/create-turbo-with-expo)

### npm Packages

- [@storybook/react-native](https://www.npmjs.com/package/@storybook/react-native)
- [@storybook/react-native-web-vite](https://www.npmjs.com/package/@storybook/react-native-web-vite)
- [@storybook/addon-ondevice-controls](https://www.npmjs.com/package/@storybook/addon-ondevice-controls)

### Migration Resources

- [Storybook React Native Migration Guide](https://github.com/storybookjs/react-native/blob/next/MIGRATION.md)
- [Storybook 10.0 Release Notes](https://storybook.js.org/releases/10.0)

### Known Issues

- [NativeWind Styles Not Displaying in Storybook React Native Web Vite (#32018)](https://github.com/storybookjs/storybook/issues/32018)
- [Storybook 10 ESM-only Tracking (#31787)](https://github.com/storybookjs/storybook/issues/31787)
- [Tailwind/NativeWind Discussion (#28399)](https://github.com/storybookjs/storybook/discussions/28399)

---

## Summary

Storybook for React Native with Expo in 2025-2026 offers a mature, performant solution for component development. Key recommendations:

1. **Use Storybook 10** for the latest ESM-only performance benefits
2. **Configure Metro properly** with the new named `withStorybook` export
3. **Consider the "Both" approach** for combined native and web development
4. **Use the official Expo template** for new projects
5. **Watch NativeWind integration** for ongoing bug fixes
6. **Align all Storybook package versions** to avoid compatibility issues

The ecosystem continues to evolve rapidly, with the Storybook team actively maintaining React Native support and improving the developer experience.
</file>

<file path="docs/storybook-implementation-plan.md">
# Storybook Implementation Plan

This document provides a comprehensive plan for implementing Storybook in the `convoexpo-and-nextjs-web-bun-better-auth` monorepo, covering both the Expo React Native app (`apps/native`) and the Next.js web app (`apps/web`).

---

## Table of Contents

1. [Current Codebase Analysis](#current-codebase-analysis)
2. [Recommended Architecture](#recommended-architecture)
3. [Phase 1: Next.js Web App Storybook](#phase-1-nextjs-web-app-storybook)
4. [Phase 2: Expo Native App Storybook](#phase-2-expo-native-app-storybook)
5. [Phase 3: Optional Web Stories for Native](#phase-3-optional-web-stories-for-native)
6. [Turborepo Integration](#turborepo-integration)
7. [Testing Strategy](#testing-strategy)
8. [File Structure Summary](#file-structure-summary)

---

## Current Codebase Analysis

### Project Overview

| Aspect | Details |
|--------|---------|
| **Monorepo Tool** | Turborepo with Bun workspaces |
| **Package Manager** | Bun v1.2.20 |
| **Linting/Formatting** | Biome |
| **Git Hooks** | Lefthook |

### Apps Structure

#### `apps/web` - Next.js Admin Portal

- **Framework**: Next.js 16 with App Router
- **React Version**: 19.2.3
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss`
- **Component Library**: shadcn/ui built on `@base-ui/react`
- **CSS Entry**: `src/index.css`
- **Variant System**: `class-variance-authority` (cva)

**Existing Components:**

```
apps/web/src/components/
├── ui/
│   ├── button.tsx      # CVA variants: default, outline, secondary, ghost, destructive, link
│   ├── input.tsx
│   ├── label.tsx
│   ├── card.tsx
│   ├── checkbox.tsx
│   ├── dropdown-menu.tsx
│   ├── skeleton.tsx
│   └── sonner.tsx      # Toast notifications
├── header.tsx
├── loader.tsx
├── mode-toggle.tsx
├── providers.tsx
├── sign-in-form.tsx
├── sign-up-form.tsx
├── theme-provider.tsx
└── user-menu.tsx
```

#### `apps/native` - Expo Customer App

- **Framework**: Expo SDK 54 with expo-router
- **React Native**: 0.81.5
- **React Version**: 19.1.0
- **Styling**: UniWind (Tailwind v4 for React Native)
- **Component Library**: heroui-native v1.0.0-beta.12
- **CSS Entry**: `global.css`
- **Metro Config**: Custom with monorepo support

**Existing Components:**

```
apps/native/components/
├── CategoryFilter.tsx      # Animated filter chips with Reanimated
├── ExternalLinkButton.tsx
├── LastUsedIndicator.tsx
├── MembershipCard.tsx
├── container.tsx
├── form.tsx               # FormContainer, FormHeader, StyledTextInput, StyledButton
├── keyboard/
│   ├── KeyboardAwareForm.tsx
│   └── KeyboardAwareForm.native.tsx
├── sign-in.tsx
├── sign-up.tsx
└── theme-toggle.tsx
```

**Theme System:**

```typescript
// apps/native/theme/colors.ts
export const CUC_COLORS = {
  navy: "#06273a",
  sage: "#85b09a",
  cream: "#fffef8",
  white: "#ffffff",
} as const;
```

### Current State

- **No existing Storybook configuration**
- **No `.stories.tsx` files**
- **No `.storybook/` directories**

---

## Recommended Architecture

### Decision: Separate Storybook Configurations Per App

Given the fundamental differences between React Native and Next.js components, we recommend **separate Storybook configurations** for each app rather than a shared root configuration.

**Rationale:**

1. **Different Frameworks**: Native uses `@storybook/react-native`, Web uses `@storybook/nextjs`
2. **Different Component APIs**: RN primitives vs HTML elements
3. **Different Styling**: UniWind style objects vs Tailwind classNames
4. **Simplified Maintenance**: Each team can evolve independently

### High-Level Structure

```
convoexpo-and-nextjs-web-bun-better-auth/
├── turbo.json                    # Storybook tasks
├── package.json                  # Root storybook scripts
├── biome.jsonc                   # Ignore storybook outputs
│
├── apps/
│   ├── native/
│   │   ├── .storybook/           # React Native Storybook
│   │   │   ├── index.tsx
│   │   │   ├── main.ts
│   │   │   └── preview.tsx
│   │   ├── metro.config.cjs      # + withStorybook
│   │   └── components/
│   │       └── *.stories.tsx     # Co-located stories
│   │
│   └── web/
│       ├── .storybook/           # Next.js Storybook
│       │   ├── main.ts
│       │   └── preview.tsx
│       └── src/components/
│           └── ui/*.stories.tsx  # Co-located stories
```

---

## Phase 1: Next.js Web App Storybook

This phase has lower complexity and establishes patterns for the native app.

### Step 1.1: Install Dependencies

```bash
cd apps/web
bun add -d @storybook/nextjs @storybook/addon-essentials @storybook/addon-interactions @storybook/addon-themes @storybook/test @storybook/blocks storybook
```

**Dependencies Explained:**

| Package | Purpose |
|---------|---------|
| `@storybook/nextjs` | Next.js framework integration |
| `@storybook/addon-essentials` | Controls, actions, docs, viewport, backgrounds |
| `@storybook/addon-interactions` | Play function testing |
| `@storybook/addon-themes` | Theme switching (light/dark) |
| `@storybook/test` | Testing utilities |
| `@storybook/blocks` | MDX documentation blocks |
| `storybook` | CLI and core |

### Step 1.2: Create `.storybook/main.ts`

```typescript
// apps/web/.storybook/main.ts
import type { StorybookConfig } from "@storybook/nextjs";
import path from "node:path";

const config: StorybookConfig = {
  stories: [
    "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/**/*.mdx",
  ],

  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {
      nextConfigPath: path.resolve(__dirname, "../next.config.ts"),
    },
  },

  staticDirs: ["../public"],

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },

  docs: {
    autodocs: "tag",
  },
};

export default config;
```

### Step 1.3: Create `.storybook/preview.tsx`

```typescript
// apps/web/.storybook/preview.tsx
import type { Preview, Renderer } from "@storybook/nextjs";
import { withThemeByClassName } from "@storybook/addon-themes";

// Import global styles
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    layout: "centered",
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#0a0a0a" },
      ],
    },
  },

  decorators: [
    // Theme switching decorator for dark mode
    withThemeByClassName<Renderer>({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],

  tags: ["autodocs"],
};

export default preview;
```

### Step 1.4: Add Scripts to `apps/web/package.json`

```json
{
  "scripts": {
    "storybook": "storybook dev -p 6006",
    "storybook:build": "storybook build -o storybook-static"
  }
}
```

### Step 1.5: Create Component Stories

#### Button Stories

```typescript
// apps/web/src/components/ui/button.stories.tsx
import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "@storybook/test";
import { Button } from "./button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "secondary", "ghost", "destructive", "link"],
      description: "Visual style variant",
    },
    size: {
      control: "select",
      options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
      description: "Button size",
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    onClick: fn(),
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <svg
          data-icon="inline-start"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        Continue
      </>
    ),
  },
};
```

#### Input Stories

```typescript
// apps/web/src/components/ui/input.stories.tsx
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Input } from "./input";
import { Label } from "./label";

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url"],
    },
    disabled: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "email@example.com",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="space-y-2">
      <Label htmlFor="input-example">Email</Label>
      <Input {...args} id="input-example" />
    </div>
  ),
  args: {
    type: "email",
    placeholder: "email@example.com",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled input",
    value: "Cannot edit this",
  },
};
```

#### Card Stories

```typescript
// apps/web/src/components/ui/card.stories.tsx
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { Button } from "./button";

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content area.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const SimpleCard: Story = {
  render: () => (
    <Card className="w-[350px] p-6">
      <p>Simple card with just content.</p>
    </Card>
  ),
};
```

### Step 1.6: Update Biome Configuration

Add to `biome.jsonc` at root:

```jsonc
{
  "files": {
    "includes": [
      "!**/storybook-static",
      "!**/*.stories.tsx"  // Optional: if you want different lint rules for stories
    ]
  }
}
```

---

## Phase 2: Expo Native App Storybook

This phase is more complex due to React Native's Metro bundler integration.

### Step 2.1: Install Dependencies

```bash
cd apps/native
bun add -d @storybook/react-native @storybook/addon-ondevice-controls @storybook/addon-ondevice-actions @storybook/addon-ondevice-backgrounds @react-native-async-storage/async-storage
```

**Dependencies Explained:**

| Package | Purpose |
|---------|---------|
| `@storybook/react-native` | Core RN Storybook |
| `@storybook/addon-ondevice-controls` | Controls panel on device |
| `@storybook/addon-ondevice-actions` | Action logging on device |
| `@storybook/addon-ondevice-backgrounds` | Background switching |
| `@react-native-async-storage/async-storage` | Persist story selection |

### Step 2.2: Create `.storybook/main.ts`

```typescript
// apps/native/.storybook/main.ts
import type { StorybookConfig } from "@storybook/react-native";

const config: StorybookConfig = {
  stories: [
    "../components/**/*.stories.?(ts|tsx|js|jsx)",
    "../app/**/*.stories.?(ts|tsx|js|jsx)",
  ],
  addons: [
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
    "@storybook/addon-ondevice-backgrounds",
  ],
};

export default config;
```

### Step 2.3: Create `.storybook/preview.tsx`

```typescript
// apps/native/.storybook/preview.tsx
import type { Preview } from "@storybook/react-native";
import { View, Appearance } from "react-native";
import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import { CUC_COLORS } from "../theme/colors";

const preview: Preview = {
  decorators: [
    // Wrap all stories in a container with proper styling
    (Story) => (
      <View
        style={{
          flex: 1,
          padding: 16,
          backgroundColor: CUC_COLORS.cream,
        }}
      >
        <Story />
      </View>
    ),
    withBackgrounds,
  ],

  parameters: {
    actions: {
      argTypesRegex: "^on[A-Z].*",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: Appearance.getColorScheme() === "dark" ? "dark" : "light",
      values: [
        { name: "light", value: CUC_COLORS.cream },
        { name: "dark", value: CUC_COLORS.navy },
        { name: "white", value: CUC_COLORS.white },
      ],
    },
  },
};

export default preview;
```

### Step 2.4: Create `.storybook/index.tsx`

```typescript
// apps/native/.storybook/index.tsx
import { view } from "./storybook.requires";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StorybookUIRoot = view.getStorybookUI({
  // Show on-device UI navigation
  onDeviceUI: true,

  // Remember last selected story
  shouldPersistSelection: true,

  // Storage for persistence
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },

  // Optional: Enable WebSocket for remote control
  enableWebsockets: false,
  host: "localhost",
  port: 7007,

  // Initial story to show
  initialSelection: {
    kind: "Components/Form",
    name: "StyledButton",
  },

  // Theme customization
  theme: {
    backgroundColor: "#fffef8",
    headerTextColor: "#06273a",
    labelColor: "#06273a",
    borderColor: "#85b09a",
    previewBorderColor: "#85b09a",
    buttonTextColor: "#06273a",
    buttonActiveTextColor: "#fffef8",
  },
});

export default StorybookUIRoot;
```

### Step 2.5: Update Metro Configuration

Modify `apps/native/metro.config.cjs`:

```javascript
"use strict";
const { getDefaultConfig } = require("expo/metro-config");
const { FileStore } = require("metro-cache");
const { withUniwindConfig } = require("uniwind/metro");
const withStorybook = require("@storybook/react-native/metro/withStorybook");
const path = require("node:path");

/** @type {import('expo/metro-config').MetroConfig} */
const defaultConfig = getDefaultConfig(__dirname);

// Apply UniWind config
const uniwindConfig = withUniwindConfig(defaultConfig, {
  cssEntryFile: "./global.css",
  dtsFile: "./uniwind-types.d.ts",
});

// Apply monorepo and turborepo config
let config = withTurborepoManagedCache(withMonorepoPaths(uniwindConfig));

// Apply Storybook config (controlled by environment variable)
config = withStorybook(config, {
  enabled: process.env.STORYBOOK === "true",
  configPath: path.resolve(__dirname, "./.storybook"),
  // Optional: WebSocket for remote control
  // websockets: {
  //   port: 7007,
  //   host: "localhost",
  // },
});

// Enable package exports for proper module resolution
config.resolver.unstable_enablePackageExports = true;

// Disable hierarchical lookup for monorepo compatibility
config.resolver.disableHierarchicalLookup = true;

module.exports = config;

// ... existing helper functions remain unchanged ...
function withMonorepoPaths(config) {
  const projectRoot = __dirname;
  const workspaceRoot = path.resolve(projectRoot, "../..");

  config.watchFolders = [workspaceRoot];
  config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, "node_modules"),
    path.resolve(workspaceRoot, "node_modules"),
  ];

  return config;
}

function withTurborepoManagedCache(config) {
  config.cacheStores = [
    new FileStore({ root: path.join(__dirname, ".cache/metro") }),
  ];
  return config;
}
```

### Step 2.6: Create App Entry Point Toggle

Create `apps/native/app/_storybook.tsx`:

```typescript
// apps/native/app/_storybook.tsx
// This file is only used when STORYBOOK=true
export { default } from "../.storybook";
```

Update `apps/native/app/_layout.tsx` to conditionally load Storybook:

```typescript
// At the top of _layout.tsx, add:
import Constants from "expo-constants";

// Check if Storybook mode is enabled
const STORYBOOK_ENABLED = Constants.expoConfig?.extra?.storybook === true;

// In your component, conditionally render:
if (STORYBOOK_ENABLED) {
  const Storybook = require("./_storybook").default;
  return <Storybook />;
}

// ... rest of your existing layout code
```

Alternatively, create a dedicated entry point for Storybook mode.

### Step 2.7: Add Scripts to `apps/native/package.json`

```json
{
  "scripts": {
    "storybook": "STORYBOOK=true expo start",
    "storybook:ios": "STORYBOOK=true expo run:ios",
    "storybook:android": "STORYBOOK=true expo run:android",
    "storybook:web": "STORYBOOK=true expo start --web"
  }
}
```

### Step 2.8: Create Component Stories

#### Form Component Stories

```typescript
// apps/native/components/form.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";
import { fn } from "@storybook/test";
import {
  FormContainer,
  FormHeader,
  StyledTextInput,
  StyledButton,
} from "./form";

// StyledButton Stories
const buttonMeta = {
  title: "Components/Form/StyledButton",
  component: StyledButton,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    isLoading: {
      control: "boolean",
    },
    label: {
      control: "text",
    },
  },
  args: {
    onPress: fn(),
    label: "Button",
  },
  decorators: [
    (Story) => (
      <View style={{ width: 300 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof StyledButton>;

export default buttonMeta;
type ButtonStory = StoryObj<typeof buttonMeta>;

export const Primary: ButtonStory = {
  args: {
    variant: "primary",
    label: "Primary Button",
  },
};

export const Secondary: ButtonStory = {
  args: {
    variant: "secondary",
    label: "Secondary Button",
  },
};

export const Tertiary: ButtonStory = {
  args: {
    variant: "tertiary",
    label: "Tertiary Button",
  },
};

export const Loading: ButtonStory = {
  args: {
    isLoading: true,
    label: "Loading...",
  },
};
```

#### StyledTextInput Stories

```typescript
// apps/native/components/styled-text-input.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";
import { useState } from "react";
import { fn } from "@storybook/test";
import { StyledTextInput } from "./form";

const meta = {
  title: "Components/Form/StyledTextInput",
  component: StyledTextInput,
  argTypes: {
    keyboardType: {
      control: "select",
      options: ["default", "email-address", "numeric", "phone-pad"],
    },
    autoCapitalize: {
      control: "select",
      options: ["none", "sentences", "words", "characters"],
    },
    secureTextEntry: {
      control: "boolean",
    },
  },
  decorators: [
    (Story) => (
      <View style={{ width: 300 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof StyledTextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component to handle state
const TextInputWithState = (props: React.ComponentProps<typeof StyledTextInput>) => {
  const [value, setValue] = useState(props.value || "");
  return <StyledTextInput {...props} value={value} onChangeText={setValue} />;
};

export const Default: Story = {
  render: (args) => <TextInputWithState {...args} />,
  args: {
    label: "Email",
    placeholder: "Enter your email",
    value: "",
    onChangeText: fn(),
  },
};

export const Password: Story = {
  render: (args) => <TextInputWithState {...args} />,
  args: {
    label: "Password",
    placeholder: "Enter your password",
    secureTextEntry: true,
    textContentType: "password",
    autoComplete: "password",
    value: "",
    onChangeText: fn(),
  },
};

export const Email: Story = {
  render: (args) => <TextInputWithState {...args} />,
  args: {
    label: "Email Address",
    placeholder: "you@example.com",
    keyboardType: "email-address",
    autoCapitalize: "none",
    textContentType: "emailAddress",
    autoComplete: "email",
    value: "",
    onChangeText: fn(),
  },
};
```

#### CategoryFilter Stories

```typescript
// apps/native/components/CategoryFilter.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-native";
import { useState } from "react";
import { View } from "react-native";
import { CategoryFilter, EVENT_CATEGORIES, type Category } from "./CategoryFilter";

const meta = {
  title: "Components/CategoryFilter",
  component: CategoryFilter,
  decorators: [
    (Story) => (
      <View style={{ width: "100%" }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof CategoryFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive wrapper
const CategoryFilterWithState = ({
  categories,
  initialCategory = null,
}: {
  categories: Category[];
  initialCategory?: string | null;
}) => {
  const [selected, setSelected] = useState<string | null>(initialCategory);
  return (
    <CategoryFilter
      categories={categories}
      selectedCategory={selected}
      onSelectCategory={setSelected}
    />
  );
};

export const Default: Story = {
  render: () => <CategoryFilterWithState categories={EVENT_CATEGORIES} />,
};

export const WithSelection: Story = {
  render: () => (
    <CategoryFilterWithState
      categories={EVENT_CATEGORIES}
      initialCategory="seasonal"
    />
  ),
};

export const CustomCategories: Story = {
  render: () => (
    <CategoryFilterWithState
      categories={[
        { id: null, label: "All", icon: "apps-outline" },
        { id: "music", label: "Music", icon: "musical-notes-outline" },
        { id: "sports", label: "Sports", icon: "football-outline" },
        { id: "food", label: "Food", icon: "restaurant-outline" },
      ]}
    />
  ),
};
```

---

## Phase 3: Optional Web Stories for Native

For documentation and sharing purposes, you can set up a web-based Storybook for the native components using `@storybook/react-native-web-vite`.

### Step 3.1: Install Additional Dependencies

```bash
cd apps/native
bun add -d @storybook/react-native-web-vite @storybook/addon-essentials react-native-web
```

### Step 3.2: Create `.storybook-web/main.ts`

```typescript
// apps/native/.storybook-web/main.ts
import type { StorybookConfig } from "@storybook/react-native-web-vite";

const config: StorybookConfig = {
  stories: [
    "../components/**/*.stories.?(ts|tsx|js|jsx)",
  ],

  addons: [
    "@storybook/addon-essentials",
  ],

  framework: "@storybook/react-native-web-vite",

  docs: {
    autodocs: "tag",
  },
};

export default config;
```

### Step 3.3: Create `.storybook-web/preview.tsx`

```typescript
// apps/native/.storybook-web/preview.tsx
import type { Preview } from "@storybook/react-native-web-vite";
import { CUC_COLORS } from "../theme/colors";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "cream",
      values: [
        { name: "cream", value: CUC_COLORS.cream },
        { name: "navy", value: CUC_COLORS.navy },
        { name: "white", value: CUC_COLORS.white },
      ],
    },
  },
};

export default preview;
```

### Step 3.4: Add Web Storybook Scripts

```json
{
  "scripts": {
    "storybook:web-ui": "storybook dev -p 6007 -c .storybook-web",
    "storybook:web-build": "storybook build -c .storybook-web -o storybook-static"
  }
}
```

---

## Turborepo Integration

### Step 4.1: Update `turbo.json`

```json
{
  "$schema": "https://turbo.build/schema.json",
  "ui": "tui",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "inputs": ["$TURBO_DEFAULT$", ".env*"],
      "outputs": ["dist/**", ".next/**"]
    },
    "lint": {
      "dependsOn": ["^lint"]
    },
    "check-types": {
      "dependsOn": ["^check-types"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "storybook": {
      "cache": false,
      "persistent": true
    },
    "storybook:build": {
      "dependsOn": ["^build"],
      "outputs": ["storybook-static/**"]
    },
    "dev:setup": {
      "cache": false,
      "persistent": true
    },
    "deploy": {
      "cache": false
    },
    "destroy": {
      "cache": false
    }
  }
}
```

### Step 4.2: Update Root `package.json`

```json
{
  "scripts": {
    "storybook:web": "turbo -F web storybook",
    "storybook:native": "turbo -F native storybook",
    "storybook:build": "turbo storybook:build",
    "storybook:build:web": "turbo -F web storybook:build",
    "storybook:build:native": "turbo -F native storybook:web-build"
  }
}
```

### Step 4.3: Update `.gitignore`

Add to root `.gitignore`:

```
# Storybook
storybook-static/
.storybook/storybook.requires.ts
```

---

## Testing Strategy

### Visual Testing

1. **Local Development**: Use Storybook's built-in visual comparison
2. **CI Integration**: Consider Chromatic for automated visual regression testing

### Interaction Testing

Use `@storybook/test` for component interaction tests:

```typescript
// Example interaction test
import { expect, userEvent, within } from "@storybook/test";

export const ClickInteraction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");

    await userEvent.click(button);

    await expect(button).toHaveBeenCalled();
  },
};
```

### Accessibility Testing

Add `@storybook/addon-a11y` for accessibility audits:

```bash
bun add -d @storybook/addon-a11y
```

Add to addons in `main.ts`:

```typescript
addons: [
  "@storybook/addon-essentials",
  "@storybook/addon-a11y",
],
```

### Story Coverage Checklist

For each component, create stories covering:

- [ ] Default state
- [ ] All variants/sizes
- [ ] Loading states
- [ ] Error states
- [ ] Disabled states
- [ ] Interactive states (hover, focus, active)
- [ ] Edge cases (empty content, long content, etc.)
- [ ] Responsive behavior (if applicable)
- [ ] Dark mode appearance

---

## File Structure Summary

After implementation, your project will have this structure:

```
convoexpo-and-nextjs-web-bun-better-auth/
├── .gitignore                           # + storybook-static/
├── turbo.json                           # + storybook tasks
├── package.json                         # + storybook scripts
├── biome.jsonc                          # + ignore storybook outputs
│
├── apps/
│   ├── native/
│   │   ├── .storybook/
│   │   │   ├── index.tsx                # Storybook entry point
│   │   │   ├── main.ts                  # RN Storybook config
│   │   │   ├── preview.tsx              # Global decorators
│   │   │   └── storybook.requires.ts    # Auto-generated (gitignored)
│   │   ├── .storybook-web/              # Optional: Web UI for native
│   │   │   ├── main.ts
│   │   │   └── preview.tsx
│   │   ├── metro.config.cjs             # + withStorybook
│   │   ├── package.json                 # + storybook deps & scripts
│   │   └── components/
│   │       ├── form.tsx
│   │       ├── form.stories.tsx
│   │       ├── CategoryFilter.tsx
│   │       ├── CategoryFilter.stories.tsx
│   │       └── ...
│   │
│   └── web/
│       ├── .storybook/
│       │   ├── main.ts                  # Next.js Storybook config
│       │   └── preview.tsx              # Global decorators + CSS
│       ├── package.json                 # + storybook deps & scripts
│       └── src/components/
│           ├── ui/
│           │   ├── button.tsx
│           │   ├── button.stories.tsx
│           │   ├── input.tsx
│           │   ├── input.stories.tsx
│           │   ├── card.tsx
│           │   ├── card.stories.tsx
│           │   └── ...
│           ├── sign-in-form.tsx
│           ├── sign-in-form.stories.tsx
│           └── ...
│
└── docs/
    └── storybook-implementation-plan.md  # This file
```

---

## Quick Start Commands

After implementation, use these commands:

```bash
# Web app Storybook (Next.js)
bun run storybook:web           # Dev server on port 6006
bun run storybook:build:web     # Build static site

# Native app Storybook (Expo)
bun run storybook:native        # Expo dev with Storybook UI
cd apps/native && bun run storybook:ios      # iOS simulator
cd apps/native && bun run storybook:android  # Android emulator
cd apps/native && bun run storybook:web      # Web browser

# Build all Storybooks
bun run storybook:build
```

---

## Implementation Checklist

### Phase 1: Web App (Estimated: 2-3 hours)

- [ ] Install dependencies in `apps/web`
- [ ] Create `.storybook/main.ts`
- [ ] Create `.storybook/preview.tsx`
- [ ] Add scripts to `package.json`
- [ ] Create `button.stories.tsx`
- [ ] Create `input.stories.tsx`
- [ ] Create `card.stories.tsx`
- [ ] Create remaining UI component stories
- [ ] Test with `bun run storybook:web`

### Phase 2: Native App (Estimated: 3-4 hours)

- [ ] Install dependencies in `apps/native`
- [ ] Create `.storybook/main.ts`
- [ ] Create `.storybook/preview.tsx`
- [ ] Create `.storybook/index.tsx`
- [ ] Update `metro.config.cjs` with `withStorybook`
- [ ] Add scripts to `package.json`
- [ ] Create form component stories
- [ ] Create CategoryFilter stories
- [ ] Test on iOS/Android/Web

### Phase 3: Turborepo & Polish (Estimated: 1 hour)

- [ ] Update `turbo.json` with storybook tasks
- [ ] Update root `package.json` with scripts
- [ ] Update `biome.jsonc` to ignore outputs
- [ ] Update `.gitignore`
- [ ] Test full workflow

### Phase 4: Optional Web UI for Native (Estimated: 1-2 hours)

- [ ] Install `@storybook/react-native-web-vite`
- [ ] Create `.storybook-web/` configuration
- [ ] Test web build

---

## Notes and Considerations

1. **Storybook Version**: This plan uses Storybook 9.x which is the current latest. Verify compatibility before installation.

2. **UniWind Compatibility**: The native Storybook may require additional configuration to properly render Tailwind styles. Test thoroughly and adjust decorators as needed.

3. **heroui-native Components**: If documenting heroui-native components, they should work out of the box since they're React Native components.

4. **CI/CD**: Consider adding Storybook build to your CI pipeline for visual regression testing.

5. **Deployment**: Static Storybook builds can be deployed to Vercel, Netlify, or GitHub Pages for team access.
</file>

<file path="docs/storybook-nextjs-research.md">
# Storybook with Next.js: Comprehensive Research Report (2025-2026)

> **Research Date:** January 2025
> **Latest Storybook Version:** 10.1.x (ESM-only)
> **Target Next.js Versions:** 14.x, 15.x, 16.x

---

## Executive Summary

Storybook has undergone significant evolution in 2025, with version 10 marking a major milestone by going **ESM-only**. This transition reduces package size by approximately 29% (on top of the 50% reduction in Storybook 9) and simplifies the codebase. For Next.js applications, the **`@storybook/nextjs-vite`** framework is now the recommended approach, offering faster builds, modern tooling, and better test support compared to the legacy Webpack-based framework.

### Key Takeaways

1. **Use `@storybook/nextjs-vite`** for most Next.js projects (Vite-powered, faster, better testing support)
2. **Node.js 20.19+ or 22.12+** is required for Storybook 10
3. **ESM-only** configuration is mandatory - all config files must be valid ESM
4. **React Server Components (RSC)** are supported via the `experimentalRSC` feature flag
5. **Tailwind CSS v4** requires the `@tailwindcss/vite` plugin configured in Storybook's `viteFinal`
6. **Turborepo integration** is straightforward with proper cache configuration

---

## Table of Contents

1. [Latest Storybook Versions and ESM Support](#1-latest-storybook-versions-and-esm-support)
2. [Framework Choice: Vite vs Webpack](#2-framework-choice-vite-vs-webpack)
3. [Step-by-Step Setup Guide](#3-step-by-step-setup-guide)
4. [App Router and RSC Considerations](#4-app-router-and-rsc-considerations)
5. [Tailwind CSS v4 Integration](#5-tailwind-css-v4-integration)
6. [Turborepo/Monorepo Setup](#6-turborepomonorepo-setup)
7. [Testing with Vitest Addon](#7-testing-with-vitest-addon)
8. [Performance Optimization](#8-performance-optimization)
9. [Known Issues and Workarounds](#9-known-issues-and-workarounds)
10. [References](#10-references)

---

## 1. Latest Storybook Versions and ESM Support

### Version Timeline

| Version | Release | Key Features |
|---------|---------|--------------|
| **10.x** | Nov 2025 | ESM-only, 29% smaller, Module Automocking, CSF Factories |
| **9.x** | Jul 2025 | 48% leaner, Vite-powered Next.js integration, Vitest addon |
| **8.x** | 2024 | RSC experimental support, @storybook/nextjs framework |

### ESM-Only in Storybook 10

Starting with Storybook 10, **all published code is ESM-only**. This is the main breaking change and delivers:

- **29% smaller install size** compared to v9
- **Readable, unminified code** for better debugging
- **Simplified maintenance** without dual CJS/ESM builds

#### Node.js Requirements

```
Node.js 20.19+ or 22.12+ or 24+
```

These versions support `require(esm)` without flags, enabling backward compatibility.

#### Required Changes for ESM

1. **Configuration files must be valid ESM:**

   ```typescript
   // .storybook/main.ts - MUST use ESM syntax
   import type { StorybookConfig } from '@storybook/nextjs-vite';

   const config: StorybookConfig = {
     // ...
   };

   export default config;
   ```

2. **Relative imports require file extensions:**

   ```typescript
   // Before (may not work)
   import { myHelper } from './helpers';

   // After (ESM compliant)
   import { myHelper } from './helpers.js';
   ```

3. **TypeScript moduleResolution update:**

   ```json
   // tsconfig.json
   {
     "compilerOptions": {
       "moduleResolution": "bundler" // or "node16", "nodenext"
     }
   }
   ```

---

## 2. Framework Choice: Vite vs Webpack

### Recommended: `@storybook/nextjs-vite`

The Vite-based framework is **recommended for most Next.js projects** as of 2025.

| Feature | `@storybook/nextjs-vite` | `@storybook/nextjs` (Webpack) |
|---------|--------------------------|-------------------------------|
| Build Speed | Faster (Vite) | Slower (Webpack) |
| HMR | Instant | Slower |
| Vitest Support | Full | Limited |
| Configuration | Simpler | More complex |
| Bundle Size | Smaller | Larger |

### When to Use Webpack-based Framework

Use `@storybook/nextjs` (Webpack) only if:

- Your project has custom Webpack configurations incompatible with Vite
- You require custom Babel configurations
- You need specific Webpack features not available in Vite

---

## 3. Step-by-Step Setup Guide

### New Project Setup

```bash
# Initialize Storybook in an existing Next.js project
npm create storybook@latest

# Or for a new monorepo project
npx storybook init
```

Storybook will auto-detect your Next.js setup and configure appropriately.

### Manual Configuration for `@storybook/nextjs-vite`

#### 1. Install Dependencies

```bash
npm install -D @storybook/nextjs-vite @storybook/addon-docs @storybook/addon-vitest
```

#### 2. Configure `.storybook/main.ts`

```typescript
import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  framework: '@storybook/nextjs-vite',
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../app/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-vitest',
  ],
  staticDirs: ['../public'],
  features: {
    experimentalRSC: true, // Enable for React Server Components
  },
};

export default config;
```

#### 3. Configure `.storybook/preview.ts`

```typescript
import type { Preview } from '@storybook/react';
import '../src/app/globals.css'; // Your global styles

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true, // Enable App Router support
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
```

#### 4. Add Scripts to `package.json`

```json
{
  "scripts": {
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "test-storybook": "vitest --project=storybook"
  }
}
```

### Upgrading from Storybook 8/9 to 10

```bash
npx storybook@latest upgrade
```

The upgrade command will:

1. Locate all Storybook projects
2. Verify no blocking changes affect your setup
3. Update dependencies
4. Execute automigrations

---

## 4. App Router and RSC Considerations

### Enabling App Router Support

For components using `next/navigation`, set the `nextjs.appDirectory` parameter:

```typescript
// .storybook/preview.ts
const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
```

Or per-story:

```typescript
// MyComponent.stories.tsx
export const Default: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
```

### React Server Components (RSC)

Enable the `experimentalRSC` feature flag to render async components:

```typescript
// .storybook/main.ts
const config: StorybookConfig = {
  features: {
    experimentalRSC: true,
  },
};
```

This automatically wraps stories in a `Suspense` wrapper.

### Mocking Server-Side Resources

For RSC components that access server-side resources:

#### Option 1: Mock Service Worker (MSW) - For Network Requests

```bash
npm install msw msw-storybook-addon --save-dev
npx msw init public
```

```typescript
// .storybook/preview.ts
import { initialize, mswLoader } from 'msw-storybook-addon';

initialize({ onUnhandledRequest: 'bypass' });

const preview: Preview = {
  loaders: [mswLoader],
};
```

#### Option 2: Module Mocking - For Database/File System Access

```typescript
// MyComponent.stories.tsx
import { fn } from '@storybook/test';
import * as dbModule from '../lib/db';

export default {
  title: 'Components/MyComponent',
  component: MyComponent,
  beforeEach: () => {
    // Mock database calls
    fn(dbModule.getData).mockResolvedValue({ items: [] });
  },
};
```

### Limitations

- RSC implementation in Storybook is **client-side only** (differs from server streaming)
- `unstable_after` experimental feature may not work
- `ssr: false` option with `next/dynamic` in Server Components may break

---

## 5. Tailwind CSS v4 Integration

### The Challenge

Storybook uses its own Vite instance, which doesn't include the Tailwind CSS v4 plugin by default.

### Solution: Configure `viteFinal`

```typescript
// .storybook/main.ts
import type { StorybookConfig } from '@storybook/nextjs-vite';
import tailwindcss from '@tailwindcss/vite';

const config: StorybookConfig = {
  framework: '@storybook/nextjs-vite',
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  async viteFinal(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(tailwindcss());
    return config;
  },
};

export default config;
```

### Import Tailwind CSS in Preview

```typescript
// .storybook/preview.ts
import '../src/tailwind.css'; // or your main CSS file with @import 'tailwindcss'

const preview: Preview = {
  // ...
};

export default preview;
```

### Tailwind CSS v4 File (No config.js needed)

```css
/* src/tailwind.css */
@import 'tailwindcss';

@theme {
  --color-primary: oklch(0.7 0.15 200);
  /* Your custom theme tokens */
}
```

### Known Issues with Monorepos (Nx)

Some users report issues with Tailwind 4 in Nx monorepos. Workaround: use `@tailwindcss/cli` instead of the Vite plugin.

---

## 6. Turborepo/Monorepo Setup

### Recommended Approaches

1. **Dedicated Storybook App** (Recommended for large teams)
2. **Storybook in UI Library Package**
3. **Storybook per Application**

### Setup Steps for Dedicated Storybook App

```bash
# Create Storybook app directory
mkdir apps/storybook
cd apps/storybook

# Initialize Storybook
npx create storybook@latest
```

### Configure `turbo.json`

```json
{
  "tasks": {
    "storybook": {
      "cache": false,
      "persistent": true,
      "interactive": true
    },
    "build-storybook": {
      "dependsOn": ["^build"],
      "outputs": ["storybook-static/**"]
    }
  }
}
```

### Co-locating Stories with Source Code

```typescript
// apps/storybook/.storybook/main.ts
const config: StorybookConfig = {
  stories: [
    '../../../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../apps/web/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
};
```

### Excluding Stories from Build Cache

```json
// turbo.json
{
  "tasks": {
    "build": {
      "inputs": ["$TURBO_DEFAULT$", "!**/*.stories.{tsx,jsx,mdx}"]
    },
    "build-storybook": {
      "inputs": ["$TURBO_DEFAULT$"]
    }
  }
}
```

This prevents story changes from invalidating production build caches.

---

## 7. Testing with Vitest Addon

### Installation

```bash
npx storybook add @storybook/addon-vitest
```

### Requirements

- Next.js 14.1+
- `@storybook/nextjs-vite` framework
- Playwright browser binaries

```bash
npx playwright install
```

### Configuration

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import { storybookNextJsPlugin } from '@storybook/nextjs-vite/vite-plugin';

export default defineConfig({
  plugins: [storybookNextJsPlugin()],
  test: {
    browser: {
      enabled: true,
      provider: 'playwright',
      name: 'chromium',
    },
  },
});
```

### Running Tests

```bash
# Run all tests
npm run test

# Run only Storybook tests
npm run test -- --project=storybook
```

### Test Types Supported

- **Interaction tests** - Test component behavior
- **Accessibility tests** - a11y compliance
- **Visual tests** - Snapshot comparisons
- **Coverage reports** - Code coverage metrics

---

## 8. Performance Optimization

### Build Performance

1. **Use `@storybook/nextjs-vite`** - Significantly faster than Webpack
2. **Enable caching in Turborepo** - Cache `storybook-static/**`
3. **Lazy load addons** - Only include necessary addons

### Development Performance

1. **Filter stories** - Use `--grep` to test specific stories
2. **Disable unnecessary addons** during development
3. **Use the Vite builder** - Faster HMR

### Bundle Size Optimization

```typescript
// .storybook/main.ts
const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  addons: [
    // Only essential addons
    '@storybook/addon-docs',
  ],
};
```

### Storybook 10 Size Improvements

| Version | Install Size Reduction |
|---------|----------------------|
| 9.x | 48% smaller than 8.x |
| 10.x | 29% smaller than 9.x |
| **Total** | **~62% smaller than 8.x** |

---

## 9. Known Issues and Workarounds

### Next.js 15 Compatibility Issues

#### Issue: React Version Inconsistency

Next.js 15 bundles React 19.0.0-rc, while Storybook may use a different version.

**Workaround:** Pin React versions in your package.json:

```json
{
  "resolutions": {
    "react": "19.0.0",
    "react-dom": "19.0.0"
  }
}
```

#### Issue: Vitest Addon Module Resolution

The Vitest addon fails due to React module resolution conflicts.

**Status:** Known issue, being addressed in upcoming releases.

**Workaround:** Use interaction tests in the browser instead of Vitest for now.

### Next.js 16 Compatibility Issues

#### Issue: SWC Loader Patch Error

```
bindings not loaded yet. Either call `loadBindings` to wait...
```

**Workaround:** Use `@storybook/nextjs-vite` instead of the Webpack-based framework.

#### Issue: nextjs-vite Support

**Status:** Support for Next.js 16 was added in Storybook 9.x and improved in 10.x.

### Tailwind CSS v4 in Monorepos

#### Issue: "Can't resolve 'tailwindcss'" in Nx

**Workaround:** Use `@tailwindcss/cli` instead of the Vite plugin:

```json
{
  "scripts": {
    "build:css": "tailwindcss -i ./src/input.css -o ./dist/output.css"
  }
}
```

### next/font Limitations

- **Font loaders configuration** in `next.config.js` not supported
- **display option** is ignored; all fonts load with `display: "block"`

### ESM Migration Issues

#### Issue: "exports is not defined"

**Solution:** Ensure all config files use ESM syntax and Node.js 20.19+.

#### Issue: Relative imports failing

**Solution:** Add `.js` extensions to all relative imports in config files.

---

## 10. References

### Official Documentation

1. [Storybook for Next.js with Vite](https://storybook.js.org/docs/get-started/frameworks/nextjs-vite) - Official setup guide
2. [Storybook for Next.js with Webpack](https://storybook.js.org/docs/get-started/frameworks/nextjs) - Legacy Webpack framework
3. [Migration Guide for Storybook 10](https://storybook.js.org/docs/releases/migration-guide) - ESM migration steps
4. [Install Storybook](https://storybook.js.org/docs/get-started/install) - Installation instructions

### Blog Posts and Announcements

1. [Storybook 10 Announcement](https://storybook.js.org/blog/storybook-10/) - Key features and changes
2. [Storybook is Going ESM-only](https://storybook.js.org/blog/storybook-is-going-esm-only/) - ESM transition details
3. [Introducing Storybook 9](https://storybook.js.org/announce/sb9) - Storybook 9 features
4. [Build a Next.js App with RSC and MSW](https://storybook.js.org/blog/build-a-nextjs-app-with-rsc-msw-storybook/) - RSC integration guide
5. [Storybook for React Server Components](https://storybook.js.org/blog/storybook-react-server-components/) - RSC support details

### Testing and Addons

1. [Vitest Addon Documentation](https://storybook.js.org/docs/writing-tests/integrations/vitest-addon/index) - Testing with Vitest
2. [Mocking Modules](https://storybook.js.org/docs/writing-stories/mocking-data-and-modules/mocking-modules) - Module mocking guide
3. [Tailwind CSS Recipe](https://storybook.js.org/recipes/tailwindcss) - Tailwind integration

### Monorepo and Turborepo

1. [Turborepo Storybook Guide](https://turborepo.dev/docs/guides/tools/storybook) - Official Turborepo documentation
2. [Storybook in a Turborepo Monorepo](https://www.pronextjs.dev/workshops/pro-next-js-workshop-hl06z/storybook-in-a-turborepo-monorepo-nnwqb) - Workshop guide

### GitHub Resources

1. [vite-plugin-storybook-nextjs](https://github.com/storybookjs/vite-plugin-storybook-nextjs) - Vite plugin repository
2. [Storybook RSC Demo](https://github.com/storybookjs/storybook-rsc-demo) - React Server Components demo
3. [Storybook Releases](https://github.com/storybookjs/storybook/releases) - Release notes

### Third-Party Resources

1. [Integrating Storybook with Tailwind CSS v4.1](https://medium.com/@ayomitunde.isijola/integrating-storybook-with-tailwind-css-v4-1-f520ae018c10) - Tailwind v4 guide
2. [Storybook v9 Released - InfoQ](https://www.infoq.com/news/2025/07/storybook-v9-released/) - Industry coverage
3. [@storybook/nextjs on npm](https://www.npmjs.com/package/@storybook/nextjs) - Package details
4. [@storybook/nextjs-vite on npm](https://www.npmjs.com/package/@storybook/nextjs-vite) - Package details

### Known Issues Tracking

1. [Next.js 15 Compatibility Issue #29554](https://github.com/storybookjs/storybook/issues/29554)
2. [Next.js 16 Support Issue #32710](https://github.com/storybookjs/storybook/issues/32710)
3. [Vitest Addon Next.js 15 Issue #31760](https://github.com/storybookjs/storybook/issues/31760)
4. [React Version Inconsistency Issue #30646](https://github.com/storybookjs/storybook/issues/30646)

---

## Quick Start Checklist

- [ ] Ensure Node.js 20.19+ or 22.12+
- [ ] Use `@storybook/nextjs-vite` framework
- [ ] Configure ESM-compliant `.storybook/main.ts`
- [ ] Enable `experimentalRSC` for Server Components
- [ ] Set `nextjs.appDirectory: true` for App Router
- [ ] Configure `viteFinal` for Tailwind CSS v4
- [ ] Add `storybook-static/**` to `.gitignore`
- [ ] Configure Turborepo caching for `storybook-static`
- [ ] Install Vitest addon for component testing

---

*This report was compiled from official Storybook documentation, blog posts, npm package information, and community discussions. Last updated: January 2025.*
</file>

<file path="docs/storybook-unified-verified-report.md">
# Storybook Unified Verified Report: Expo React Native & Next.js

**Report Date:** January 15, 2026
**Verification Status:** Independently verified against multiple authoritative sources
**Source Reports:** `storybook-expo-research.md`, `storybook-nextjs-research.md`

---

## Executive Summary

This report consolidates and verifies claims from two separate Storybook research reports covering Expo/React Native and Next.js integration. All major claims have been cross-referenced against official Storybook documentation, npm packages, GitHub releases, and the official Storybook blog.

### Key Verified Findings

1. **Storybook 10** is the current major version (released October 28, 2025), featuring ESM-only distribution
2. **ESM-only architecture** reduces install size by 29% compared to v9, with a cumulative ~62% reduction since v8
3. **Node.js requirements** have conflicting documentation - see Corrections section
4. **`@storybook/react-native-web-vite`** is the recommended framework for React Native Web, replacing the deprecated Webpack addon
5. **`@storybook/nextjs-vite`** is recommended for most Next.js projects
6. **NativeWind integration issues** are confirmed and ongoing

---

## Table of Contents

1. [Verified Version Information](#verified-version-information)
2. [Unified ESM Architecture Overview](#unified-esm-architecture-overview)
3. [Expo/React Native Setup (Verified)](#exporeact-native-setup-verified)
4. [Next.js Setup (Verified)](#nextjs-setup-verified)
5. [Monorepo Considerations](#monorepo-considerations)
6. [Common Pitfalls and Solutions](#common-pitfalls-and-solutions)
7. [Corrections](#corrections)
8. [References](#references)

---

## Verified Version Information

### Storybook Core Versions

| Version | Release Date | Verification Status | Source |
|---------|-------------|---------------------|--------|
| 10.1.11 | January 6, 2026 | **VERIFIED** | GitHub Releases, npm |
| 10.0.0 | October 28, 2025 | **VERIFIED** | Storybook Blog, GitHub |
| 9.0.0 | June 3, 2025 | **VERIFIED** | Storybook Blog |
| 8.5.0 | January 21, 2025 | **VERIFIED** | Storybook Blog |

### React Native Packages

| Package | Latest Version | Last Published | Status |
|---------|---------------|----------------|--------|
| `@storybook/react-native` | 10.1.11 | January 6, 2026 | **VERIFIED** |
| `@storybook/react-native-web-vite` | 10.1.11 | ~January 1, 2026 | **VERIFIED** |
| `@storybook/addon-ondevice-controls` | 10.x | Active | **VERIFIED** |
| `@storybook/addon-ondevice-actions` | 10.x | Active | **VERIFIED** |

### Next.js Packages

| Package | Latest Version | Status |
|---------|---------------|--------|
| `@storybook/nextjs-vite` | 10.1.11 | **VERIFIED** - Recommended |
| `@storybook/nextjs` (Webpack) | 10.0.1 | **VERIFIED** - Legacy |
| `@storybook/experimental-nextjs-vite` | 8.6.14 | **VERIFIED** - Deprecated |

### Node.js Requirements

| Claim Source | Stated Requirement | Verification |
|--------------|-------------------|--------------|
| Migration Guide | 20.19+ or 22.12+ | **VERIFIED** (Official Docs) |
| Storybook Blog | 20.16+, 22.19+, or 24+ | **VERIFIED** (Blog Post) |
| Storybook 10 Announcement | 20.16+, 22.19+, or 24+ | **VERIFIED** |

**Note:** There is a discrepancy in Node.js version requirements between sources. See [Corrections](#corrections) section.

---

## Unified ESM Architecture Overview

### ESM-Only in Storybook 10 - VERIFIED

The transition to ESM-only is the **single breaking change** in Storybook 10. This has been verified across multiple sources:

**Verified Benefits:**

- **29% install size reduction** compared to Storybook 9 (VERIFIED - multiple sources)
- **~62% cumulative reduction** since Storybook 8 (48% in v9 + 29% in v10) (VERIFIED)
- **Unminified distribution** for easier debugging (VERIFIED)
- **Simplified maintenance** - no dual CJS/ESM builds (VERIFIED)

**Verified Requirements:**

- All configuration files (`.storybook/main.ts`, presets) must be valid ESM
- Relative imports may require `.js` extensions for strict ESM compliance
- TypeScript `moduleResolution` should be set to `bundler`, `node16`, or `nodenext`

### ESM Configuration Example (Verified)

```typescript
// .storybook/main.ts - MUST use ESM syntax
import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  framework: '@storybook/nextjs-vite',
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
};

export default config; // ESM default export required
```

---

## Expo/React Native Setup (Verified)

### Quick Start Template - VERIFIED

The Expo template command is verified and working:

```bash
npx create-expo-app --template expo-template-storybook AwesomeStorybook
```

**Source:** [GitHub - dannyhw/expo-template-storybook](https://github.com/dannyhw/expo-template-storybook), [Storybook React Native Docs](https://github.com/storybookjs/react-native)

### Three Setup Approaches - VERIFIED

1. **Native-only** - Full Storybook UI on mobile devices/simulators
2. **Web-only** - React Native Web rendering via Vite (`@storybook/react-native-web-vite`)
3. **Both** - Combined approach (recommended for teams)

### Metro Configuration - VERIFIED with Corrections

**Storybook 10 Configuration (Current):**

```javascript
const { getDefaultConfig } = require('expo/metro-config');
// VERIFIED: withStorybook is now a named export in v10
const { withStorybook } = require('@storybook/react-native/metro/withStorybook');

const config = getDefaultConfig(__dirname);

module.exports = withStorybook(config, {
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true',
  configPath: './.rnstorybook',
});
```

**Verified Breaking Changes from v9 to v10:**

- `withStorybook` changed from default export to **named export** (VERIFIED)
- `onDisabledRemoveStorybook` option **removed** - automatic when `enabled: false` (VERIFIED)
- Simpler defaults - works out of box (VERIFIED)

### Required Dependencies - VERIFIED

```bash
# Core dependencies
npx expo install @storybook/react-native

# Required peer dependencies
npx expo install react-native-reanimated react-native-gesture-handler \
  @gorhom/bottom-sheet react-native-svg react-native-safe-area-context

# On-device addons
npx expo install @storybook/addon-ondevice-controls \
  @storybook/addon-ondevice-actions \
  @react-native-community/datetimepicker \
  @react-native-community/slider
```

**Note:** `react-native-safe-area-context` is a **new requirement in v10** for the lite-ui.

### React Native Web Vite Framework - VERIFIED

The `@storybook/react-native-web-vite` framework was introduced in Storybook 8.5 (January 2025) and is the recommended replacement for the deprecated Webpack-based addon.

```typescript
// .storybook/main.ts (for web)
import type { StorybookConfig } from '@storybook/react-native-web-vite';

const config: StorybookConfig = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
  framework: '@storybook/react-native-web-vite',
  addons: ['@storybook/addon-essentials'],
};

export default config;
```

---

## Next.js Setup (Verified)

### Framework Recommendation - VERIFIED

**Use `@storybook/nextjs-vite`** for most Next.js projects. This is verified as the recommended approach.

| Feature | `@storybook/nextjs-vite` | `@storybook/nextjs` (Webpack) |
|---------|--------------------------|-------------------------------|
| Build Speed | Faster (Vite) | Slower (Webpack) |
| Testing Support | Full Vitest support | Limited |
| Maintenance | Actively recommended | Legacy/maintained |

### App Router & RSC Support - VERIFIED

**Enable App Router:**

```typescript
// .storybook/preview.ts
const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true, // VERIFIED: Required for next/navigation
    },
  },
};
```

**Enable React Server Components:**

```typescript
// .storybook/main.ts
const config: StorybookConfig = {
  features: {
    experimentalRSC: true, // VERIFIED: Wraps stories in Suspense
  },
};
```

**Verified RSC Limitations:**

- Client-side only implementation (differs from server streaming)
- Server actions not yet supported
- Requires mocking for server-side resources (file system, Node libraries)
- Works with MSW for network request mocking

### Tailwind CSS v4 Integration - VERIFIED

Storybook uses its own Vite instance and requires explicit Tailwind configuration:

```typescript
// .storybook/main.ts
import type { StorybookConfig } from '@storybook/nextjs-vite';
import tailwindcss from '@tailwindcss/vite';

const config: StorybookConfig = {
  framework: '@storybook/nextjs-vite',
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  async viteFinal(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(tailwindcss());
    return config;
  },
};

export default config;
```

**Verified Issue:** Some users report `"No 'exports' main defined"` error when importing `@tailwindcss/vite`. Workaround: use `@tailwindcss/cli` instead.

### Vitest Addon - VERIFIED with Caveats

**Requirements (VERIFIED):**

- Next.js 14.1+
- `@storybook/nextjs-vite` framework (or `@storybook/experimental-nextjs-vite`)
- Playwright browser binaries

**Known Issue (VERIFIED):** The Vitest addon fails with Next.js 15 due to React module resolution conflicts. Next.js 15 compiles React into internal modules (`next/dist/compiled/react/*`) which conflicts with Vitest's expectations.

**Workaround:** Use browser-based testing in Storybook until the issue is resolved.

---

## Monorepo Considerations

### Recommended Approaches - VERIFIED

Based on official Turborepo documentation and community best practices:

1. **Dedicated Storybook App** (Recommended for large teams)
2. **Storybook in UI Library Package**
3. **Storybook per Application**

**Discouraged:** Creating Storybook directly in a UI package breaks clean package boundaries.

### Turborepo Configuration - VERIFIED

```json
{
  "tasks": {
    "build": {
      "inputs": ["$TURBO_DEFAULT$", "!**/*.stories.{tsx,jsx,mdx}"]
    },
    "storybook": {
      "cache": false,
      "persistent": true,
      "interactive": true
    },
    "build-storybook": {
      "dependsOn": ["^build"],
      "outputs": ["storybook-static/**"]
    }
  }
}
```

**Key Insight (VERIFIED):** Excluding stories from build inputs prevents cache misses when only story files change.

### Story Co-location - VERIFIED

```typescript
// apps/storybook/.storybook/main.ts
const config: StorybookConfig = {
  stories: [
    '../../../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../apps/web/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
};
```

---

## Common Pitfalls and Solutions

### 1. NativeWind Integration Issues - VERIFIED

**Status:** Confirmed ongoing issues (GitHub #32018, #31165)

**Problem:** NativeWind styles work in `storybook dev` but not in `storybook build`. Styles compile but classes don't apply.

**Verified Workarounds:**

- Use Webpack-based setup instead of Vite
- Configure `jsxImportSource: 'nativewind'` in framework options
- Add `nativewind` and `react-native-css-interop` to `modulesToTranspile`

### 2. Dependency Version Mismatch - VERIFIED

**Problem:** Mixed major versions cause undefined behavior.

**Solution:** Align all `@storybook/*` packages to the same major version.

### 3. Next.js 15 React Version Conflicts - VERIFIED

**Problem:** Next.js 15 bundles React 19 RC, causing conflicts with Storybook.

**Workaround:**

```json
{
  "resolutions": {
    "react": "19.0.0",
    "react-dom": "19.0.0"
  }
}
```

### 4. Next.js 16 SWC Loader Error - VERIFIED

**Problem:** `"bindings not loaded yet"` error with Webpack-based framework.

**Solution:** Use `@storybook/nextjs-vite` instead.

### 5. ESM Migration Errors - VERIFIED

**Problem:** `"exports is not defined"` or relative import failures.

**Solutions:**

- Ensure all config files use ESM syntax
- Use Node.js 20.19+ or 22.12+
- Add `.js` extensions to relative imports in config files

---

## Corrections

This section documents claims from the original reports that required correction based on verification.

### 1. Node.js Version Requirements - DISCREPANCY FOUND

**Original Claims:**

- Expo report: "Node 20.16+, 22.19+, or 24+"
- Next.js report: "Node 20.19+ or 22.12+"

**Verification Finding:**
Both version sets appear in official Storybook documentation:

- The **Migration Guide** states: 20.19+ or 22.12+
- The **ESM-only blog post** states: 20.16+, 22.19+, or 24+
- The **Storybook 10 announcement** states: 20.16+, 22.19+, or 24+

**Conclusion:** The Migration Guide uses the more restrictive requirements (20.19+ or 22.12+). The blog posts use older requirements (20.16+, 22.19+). **Recommend using 20.19+ or 22.12+** as the authoritative requirement per the official migration documentation.

### 2. Storybook 10 Release Date - MINOR CORRECTION

**Original Claim (Expo report):** "November 2025"
**Verified Date:** October 28, 2025

**Correction:** Storybook 10.0 was released on **October 28, 2025**, not November 2025.

### 3. Install Size Reduction Claims - VERIFIED ACCURATE

**Original Claims:**

- 29% reduction in v10 compared to v9 - **VERIFIED**
- 48% reduction in v9 compared to v8 - **VERIFIED** (officially stated as "48% leaner")
- Cumulative ~62% reduction since v8 - **VERIFIED** (calculated correctly)

### 4. Storybook 9 Release Date - VERIFIED

**Original Claim (Next.js report):** "Jul 2025"
**Verified Date:** June 3, 2025

**Correction:** Storybook 9 was released on **June 3, 2025**, not July 2025.

### 5. Metro withStorybook Export Change - VERIFIED ACCURATE

The claim that `withStorybook` changed from a default export to a named export in v10 is **VERIFIED** and accurate.

### 6. Storybook 8.5 Introduction of react-native-web-vite - VERIFIED

**Original Claim:** "Late 2024"
**Verified Date:** January 21, 2025

**Correction:** Storybook 8.5 (which introduced `@storybook/react-native-web-vite`) was released on **January 21, 2025**, not late 2024.

---

## References

### Official Storybook Documentation

1. [Storybook 10 Announcement](https://storybook.js.org/blog/storybook-10/) - Official release blog
2. [Storybook 10 Migration Guide](https://storybook.js.org/docs/releases/migration-guide) - ESM migration steps
3. [Storybook is Going ESM-only](https://storybook.js.org/blog/storybook-is-going-esm-only/) - ESM transition details
4. [Storybook 9 Announcement](https://storybook.js.org/blog/storybook-9/) - Version 9 features
5. [Storybook 8.5 Announcement](https://storybook.js.org/blog/storybook-8-5/) - RNW-Vite introduction
6. [Storybook for Next.js with Vite](https://storybook.js.org/docs/get-started/frameworks/nextjs-vite) - Official setup guide
7. [Storybook for React Native Web](https://storybook.js.org/docs/get-started/frameworks/react-native-web-vite) - Framework documentation
8. [Storybook React Server Components](https://storybook.js.org/blog/storybook-react-server-components/) - RSC support
9. [Storybook 10.0 Release Notes](https://storybook.js.org/releases/10.0) - Version 10.0 details
10. [Storybook 10.1 Release Notes](https://storybook.js.org/releases/10.1) - Latest version details

### GitHub Resources

1. [Storybook React Native Repository](https://github.com/storybookjs/react-native) - Official React Native support
2. [Storybook React Native Releases](https://github.com/storybookjs/react-native/releases) - Version history
3. [Storybook Core Releases](https://github.com/storybookjs/storybook/releases) - Core version history
4. [expo-template-storybook](https://github.com/dannyhw/expo-template-storybook) - Expo template
5. [React Native Storybook Migration Guide](https://github.com/storybookjs/react-native/blob/next/MIGRATION.md) - v9 to v10 migration
6. [Metro Configuration Docs](https://storybookjs.github.io/react-native/docs/intro/configuration/metro-configuration/) - Metro setup

### npm Packages

1. [@storybook/react-native](https://www.npmjs.com/package/@storybook/react-native) - Core RN package
2. [@storybook/react-native-web-vite](https://www.npmjs.com/package/@storybook/react-native-web-vite) - RNW Vite framework
3. [@storybook/nextjs-vite](https://www.npmjs.com/package/@storybook/nextjs-vite) - Next.js Vite framework
4. [@storybook/addon-ondevice-controls](https://www.npmjs.com/package/@storybook/addon-ondevice-controls) - On-device controls

### Known Issues

1. [NativeWind Styles Not Displaying (#32018)](https://github.com/storybookjs/storybook/issues/32018) - Web Vite issue
2. [NativeWind Build Mode Issue (#31165)](https://github.com/storybookjs/storybook/issues/31165) - Build vs dev
3. [Next.js 15 Vitest Addon Issue (#31760)](https://github.com/storybookjs/storybook/issues/31760) - React resolution
4. [ESM-only Tracking (#31787)](https://github.com/storybookjs/storybook/issues/31787) - ESM migration tracking
5. [Tailwind CSS Storybook Discussion (#16451)](https://github.com/tailwindlabs/tailwindcss/discussions/16451) - Tailwind v4 + Vite

### Monorepo Resources

1. [Turborepo Storybook Guide](https://turborepo.dev/docs/guides/tools/storybook) - Official Turborepo docs
2. [Turborepo Design System Template](https://vercel.com/templates/react/turborepo-design-system) - Vercel template

### Community Resources

1. [Expo Blog: Storybook and Expo](https://expo.dev/blog/storybook-and-expo) - Expo integration guide
2. [Callstack: Swap Between Storybook 10 and Your App](https://www.callstack.com/blog/how-to-cleanly-swap-between-react-native-storybook-10-and-your-app) - Toggle implementation
3. [GeekyAnts: Universal Storybook with NativeWind](https://techblog.geekyants.com/setting-up-universal-storybook-with-nativewind-a-step-by-step-guide) - NativeWind setup

---

## Verification Methodology

This report was verified using the following approach:

1. **Primary Sources:** Official Storybook documentation at storybook.js.org
2. **Release Verification:** GitHub releases for exact version numbers and dates
3. **Package Verification:** npm package pages for current versions
4. **Cross-Reference:** Multiple independent sources for each major claim
5. **Discrepancy Documentation:** All conflicting information documented with sources

**Verification Date:** January 15, 2026

---

## Quick Reference Checklist

### For Expo/React Native Projects

- [ ] Node.js 20.19+ or 22.12+ installed
- [ ] Use `@storybook/react-native@10.x` with matching addon versions
- [ ] Update Metro config to use named `{ withStorybook }` export
- [ ] Add `react-native-safe-area-context` as dependency (new in v10)
- [ ] For web: use `@storybook/react-native-web-vite` (not Webpack addon)
- [ ] Be aware of NativeWind integration issues

### For Next.js Projects

- [ ] Node.js 20.19+ or 22.12+ installed
- [ ] Use `@storybook/nextjs-vite` framework (recommended)
- [ ] Set `nextjs.appDirectory: true` for App Router
- [ ] Enable `experimentalRSC: true` for Server Components
- [ ] Configure `viteFinal` for Tailwind CSS v4
- [ ] Check Vitest addon compatibility if using Next.js 15

### For Monorepo Projects

- [ ] Create dedicated Storybook app (recommended)
- [ ] Configure Turborepo caching for `storybook-static/**`
- [ ] Exclude stories from production build inputs
- [ ] Ensure all Storybook packages use same major version

---

*This unified report was compiled from verified sources and cross-referenced against official Storybook documentation, GitHub releases, and npm package information. Last verified: January 15, 2026.*
</file>

<file path="packages/backend/convex/_generated/api.d.ts">
/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type *as agent from "../agent.js";
import type* as auth from "../auth.js";
import type *as chat from "../chat.js";
import type* as healthCheck from "../healthCheck.js";
import type *as http from "../http.js";
import type* as privateData from "../privateData.js";
import type *as rsvps from "../rsvps.js";
import type* as todos from "../todos.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  agent: typeof agent;
  auth: typeof auth;
  chat: typeof chat;
  healthCheck: typeof healthCheck;
  http: typeof http;
  privateData: typeof privateData;
  rsvps: typeof rsvps;
  todos: typeof todos;
}>;

/**

- A utility for referencing Convex functions in your app's public API.
-
- Usage:

- ```js
- const myFunctionReference = api.myModule.myFunction;

- ```

 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**

- A utility for referencing Convex functions in your app's internal API.
-
- Usage:

- ```js
- const myFunctionReference = internal.myModule.myFunction;

- ```

 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {
  betterAuth: {
    adapter: {
      create: FunctionReference<
        "mutation",
        "internal",
        {
          input:
            | {
                data: {
                  createdAt: number;
                  displayUsername?: null | string;
                  email: string;
                  emailVerified: boolean;
                  image?: null | string;
                  isAnonymous?: null | boolean;
                  name: string;
                  phoneNumber?: null | string;
                  phoneNumberVerified?: null | boolean;
                  twoFactorEnabled?: null | boolean;
                  updatedAt: number;
                  userId?: null | string;
                  username?: null | string;
                };
                model: "user";
              }
            | {
                data: {
                  createdAt: number;
                  expiresAt: number;
                  ipAddress?: null | string;
                  token: string;
                  updatedAt: number;
                  userAgent?: null | string;
                  userId: string;
                };
                model: "session";
              }
            | {
                data: {
                  accessToken?: null | string;
                  accessTokenExpiresAt?: null | number;
                  accountId: string;
                  createdAt: number;
                  idToken?: null | string;
                  password?: null | string;
                  providerId: string;
                  refreshToken?: null | string;
                  refreshTokenExpiresAt?: null | number;
                  scope?: null | string;
                  updatedAt: number;
                  userId: string;
                };
                model: "account";
              }
            | {
                data: {
                  createdAt: number;
                  expiresAt: number;
                  identifier: string;
                  updatedAt: number;
                  value: string;
                };
                model: "verification";
              }
            | {
                data: { backupCodes: string; secret: string; userId: string };
                model: "twoFactor";
              }
            | {
                data: {
                  aaguid?: null | string;
                  backedUp: boolean;
                  counter: number;
                  createdAt?: null | number;
                  credentialID: string;
                  deviceType: string;
                  name?: null | string;
                  publicKey: string;
                  transports?: null | string;
                  userId: string;
                };
                model: "passkey";
              }
            | {
                data: {
                  clientId?: null | string;
                  clientSecret?: null | string;
                  createdAt?: null | number;
                  disabled?: null | boolean;
                  icon?: null | string;
                  metadata?: null | string;
                  name?: null | string;
                  redirectURLs?: null | string;
                  type?: null | string;
                  updatedAt?: null | number;
                  userId?: null | string;
                };
                model: "oauthApplication";
              }
            | {
                data: {
                  accessToken?: null | string;
                  accessTokenExpiresAt?: null | number;
                  clientId?: null | string;
                  createdAt?: null | number;
                  refreshToken?: null | string;
                  refreshTokenExpiresAt?: null | number;
                  scopes?: null | string;
                  updatedAt?: null | number;
                  userId?: null | string;
                };
                model: "oauthAccessToken";
              }
            | {
                data: {
                  clientId?: null | string;
                  consentGiven?: null | boolean;
                  createdAt?: null | number;
                  scopes?: null | string;
                  updatedAt?: null | number;
                  userId?: null | string;
                };
                model: "oauthConsent";
              }
            | {
                data: {
                  createdAt: number;
                  privateKey: string;
                  publicKey: string;
                };
                model: "jwks";
              }
            | {
                data: {
                  count?: null | number;
                  key?: null | string;
                  lastRequest?: null | number;
                };
                model: "rateLimit";
              };
          onCreateHandle?: string;
          select?: Array<string>;
        },
        any
      >;
      deleteMany: FunctionReference<
        "mutation",
        "internal",
        {
          input:
            | {
                model: "user";
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "name"
                    | "email"
                    | "emailVerified"
                    | "image"
                    | "createdAt"
                    | "updatedAt"
                    | "twoFactorEnabled"
                    | "isAnonymous"
                    | "username"
                    | "displayUsername"
                    | "phoneNumber"
                    | "phoneNumberVerified"
                    | "userId"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "session";
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "expiresAt"
                    | "token"
                    | "createdAt"
                    | "updatedAt"
                    | "ipAddress"
                    | "userAgent"
                    | "userId"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "account";
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "accountId"
                    | "providerId"
                    | "userId"
                    | "accessToken"
                    | "refreshToken"
                    | "idToken"
                    | "accessTokenExpiresAt"
                    | "refreshTokenExpiresAt"
                    | "scope"
                    | "password"
                    | "createdAt"
                    | "updatedAt"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "verification";
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "identifier"
                    | "value"
                    | "expiresAt"
                    | "createdAt"
                    | "updatedAt"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "twoFactor";
                where?: Array<{
                  connector?: "AND" | "OR";
                  field: "secret" | "backupCodes" | "userId" | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "passkey";
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "name"
                    | "publicKey"
                    | "userId"
                    | "credentialID"
                    | "counter"
                    | "deviceType"
                    | "backedUp"
                    | "transports"
                    | "createdAt"
                    | "aaguid"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "oauthApplication";
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "name"
                    | "icon"
                    | "metadata"
                    | "clientId"
                    | "clientSecret"
                    | "redirectURLs"
                    | "type"
                    | "disabled"
                    | "userId"
                    | "createdAt"
                    | "updatedAt"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "oauthAccessToken";
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "accessToken"
                    | "refreshToken"
                    | "accessTokenExpiresAt"
                    | "refreshTokenExpiresAt"
                    | "clientId"
                    | "userId"
                    | "scopes"
                    | "createdAt"
                    | "updatedAt"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "oauthConsent";
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "clientId"
                    | "userId"
                    | "scopes"
                    | "createdAt"
                    | "updatedAt"
                    | "consentGiven"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "jwks";
                where?: Array<{
                  connector?: "AND" | "OR";
                  field: "publicKey" | "privateKey" | "createdAt" | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "rateLimit";
                where?: Array<{
                  connector?: "AND" | "OR";
                  field: "key" | "count" | "lastRequest" | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              };
          onDeleteHandle?: string;
          paginationOpts: {
            cursor: string | null;
            endCursor?: string | null;
            id?: number;
            maximumBytesRead?: number;
            maximumRowsRead?: number;
            numItems: number;
          };
        },
        any
      >;
      deleteOne: FunctionReference<
        "mutation",
        "internal",
        {
          input:
            | {
                model: "user";
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "name"
                    | "email"
                    | "emailVerified"
                    | "image"
                    | "createdAt"
                    | "updatedAt"
                    | "twoFactorEnabled"
                    | "isAnonymous"
                    | "username"
                    | "displayUsername"
                    | "phoneNumber"
                    | "phoneNumberVerified"
                    | "userId"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "session";
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "expiresAt"
                    | "token"
                    | "createdAt"
                    | "updatedAt"
                    | "ipAddress"
                    | "userAgent"
                    | "userId"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "account";
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "accountId"
                    | "providerId"
                    | "userId"
                    | "accessToken"
                    | "refreshToken"
                    | "idToken"
                    | "accessTokenExpiresAt"
                    | "refreshTokenExpiresAt"
                    | "scope"
                    | "password"
                    | "createdAt"
                    | "updatedAt"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "verification";
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "identifier"
                    | "value"
                    | "expiresAt"
                    | "createdAt"
                    | "updatedAt"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "twoFactor";
                where?: Array<{
                  connector?: "AND" | "OR";
                  field: "secret" | "backupCodes" | "userId" | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "passkey";
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "name"
                    | "publicKey"
                    | "userId"
                    | "credentialID"
                    | "counter"
                    | "deviceType"
                    | "backedUp"
                    | "transports"
                    | "createdAt"
                    | "aaguid"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "oauthApplication";
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "name"
                    | "icon"
                    | "metadata"
                    | "clientId"
                    | "clientSecret"
                    | "redirectURLs"
                    | "type"
                    | "disabled"
                    | "userId"
                    | "createdAt"
                    | "updatedAt"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "oauthAccessToken";
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "accessToken"
                    | "refreshToken"
                    | "accessTokenExpiresAt"
                    | "refreshTokenExpiresAt"
                    | "clientId"
                    | "userId"
                    | "scopes"
                    | "createdAt"
                    | "updatedAt"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "oauthConsent";
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "clientId"
                    | "userId"
                    | "scopes"
                    | "createdAt"
                    | "updatedAt"
                    | "consentGiven"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "jwks";
                where?: Array<{
                  connector?: "AND" | "OR";
                  field: "publicKey" | "privateKey" | "createdAt" | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "rateLimit";
                where?: Array<{
                  connector?: "AND" | "OR";
                  field: "key" | "count" | "lastRequest" | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              };
          onDeleteHandle?: string;
        },
        any
      >;
      findMany: FunctionReference<
        "query",
        "internal",
        {
          join?: any;
          limit?: number;
          model:
            | "user"
            | "session"
            | "account"
            | "verification"
            | "twoFactor"
            | "passkey"
            | "oauthApplication"
            | "oauthAccessToken"
            | "oauthConsent"
            | "jwks"
            | "rateLimit";
          offset?: number;
          paginationOpts: {
            cursor: string | null;
            endCursor?: string | null;
            id?: number;
            maximumBytesRead?: number;
            maximumRowsRead?: number;
            numItems: number;
          };
          sortBy?: { direction: "asc" | "desc"; field: string };
          where?: Array<{
            connector?: "AND" | "OR";
            field: string;
            operator?:
              | "lt"
              | "lte"
              | "gt"
              | "gte"
              | "eq"
              | "in"
              | "not_in"
              | "ne"
              | "contains"
              | "starts_with"
              | "ends_with";
            value:
              | string
              | number
              | boolean
              | Array<string>
              | Array<number>
              | null;
          }>;
        },
        any
      >;
      findOne: FunctionReference<
        "query",
        "internal",
        {
          join?: any;
          model:
            | "user"
            | "session"
            | "account"
            | "verification"
            | "twoFactor"
            | "passkey"
            | "oauthApplication"
            | "oauthAccessToken"
            | "oauthConsent"
            | "jwks"
            | "rateLimit";
          select?: Array<string>;
          where?: Array<{
            connector?: "AND" | "OR";
            field: string;
            operator?:
              | "lt"
              | "lte"
              | "gt"
              | "gte"
              | "eq"
              | "in"
              | "not_in"
              | "ne"
              | "contains"
              | "starts_with"
              | "ends_with";
            value:
              | string
              | number
              | boolean
              | Array<string>
              | Array<number>
              | null;
          }>;
        },
        any
      >;
      updateMany: FunctionReference<
        "mutation",
        "internal",
        {
          input:
            | {
                model: "user";
                update: {
                  createdAt?: number;
                  displayUsername?: null | string;
                  email?: string;
                  emailVerified?: boolean;
                  image?: null | string;
                  isAnonymous?: null | boolean;
                  name?: string;
                  phoneNumber?: null | string;
                  phoneNumberVerified?: null | boolean;
                  twoFactorEnabled?: null | boolean;
                  updatedAt?: number;
                  userId?: null | string;
                  username?: null | string;
                };
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "name"
                    | "email"
                    | "emailVerified"
                    | "image"
                    | "createdAt"
                    | "updatedAt"
                    | "twoFactorEnabled"
                    | "isAnonymous"
                    | "username"
                    | "displayUsername"
                    | "phoneNumber"
                    | "phoneNumberVerified"
                    | "userId"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "session";
                update: {
                  createdAt?: number;
                  expiresAt?: number;
                  ipAddress?: null | string;
                  token?: string;
                  updatedAt?: number;
                  userAgent?: null | string;
                  userId?: string;
                };
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "expiresAt"
                    | "token"
                    | "createdAt"
                    | "updatedAt"
                    | "ipAddress"
                    | "userAgent"
                    | "userId"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "account";
                update: {
                  accessToken?: null | string;
                  accessTokenExpiresAt?: null | number;
                  accountId?: string;
                  createdAt?: number;
                  idToken?: null | string;
                  password?: null | string;
                  providerId?: string;
                  refreshToken?: null | string;
                  refreshTokenExpiresAt?: null | number;
                  scope?: null | string;
                  updatedAt?: number;
                  userId?: string;
                };
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "accountId"
                    | "providerId"
                    | "userId"
                    | "accessToken"
                    | "refreshToken"
                    | "idToken"
                    | "accessTokenExpiresAt"
                    | "refreshTokenExpiresAt"
                    | "scope"
                    | "password"
                    | "createdAt"
                    | "updatedAt"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "verification";
                update: {
                  createdAt?: number;
                  expiresAt?: number;
                  identifier?: string;
                  updatedAt?: number;
                  value?: string;
                };
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "identifier"
                    | "value"
                    | "expiresAt"
                    | "createdAt"
                    | "updatedAt"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "twoFactor";
                update: {
                  backupCodes?: string;
                  secret?: string;
                  userId?: string;
                };
                where?: Array<{
                  connector?: "AND" | "OR";
                  field: "secret" | "backupCodes" | "userId" | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "passkey";
                update: {
                  aaguid?: null | string;
                  backedUp?: boolean;
                  counter?: number;
                  createdAt?: null | number;
                  credentialID?: string;
                  deviceType?: string;
                  name?: null | string;
                  publicKey?: string;
                  transports?: null | string;
                  userId?: string;
                };
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "name"
                    | "publicKey"
                    | "userId"
                    | "credentialID"
                    | "counter"
                    | "deviceType"
                    | "backedUp"
                    | "transports"
                    | "createdAt"
                    | "aaguid"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "oauthApplication";
                update: {
                  clientId?: null | string;
                  clientSecret?: null | string;
                  createdAt?: null | number;
                  disabled?: null | boolean;
                  icon?: null | string;
                  metadata?: null | string;
                  name?: null | string;
                  redirectURLs?: null | string;
                  type?: null | string;
                  updatedAt?: null | number;
                  userId?: null | string;
                };
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "name"
                    | "icon"
                    | "metadata"
                    | "clientId"
                    | "clientSecret"
                    | "redirectURLs"
                    | "type"
                    | "disabled"
                    | "userId"
                    | "createdAt"
                    | "updatedAt"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "oauthAccessToken";
                update: {
                  accessToken?: null | string;
                  accessTokenExpiresAt?: null | number;
                  clientId?: null | string;
                  createdAt?: null | number;
                  refreshToken?: null | string;
                  refreshTokenExpiresAt?: null | number;
                  scopes?: null | string;
                  updatedAt?: null | number;
                  userId?: null | string;
                };
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "accessToken"
                    | "refreshToken"
                    | "accessTokenExpiresAt"
                    | "refreshTokenExpiresAt"
                    | "clientId"
                    | "userId"
                    | "scopes"
                    | "createdAt"
                    | "updatedAt"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "oauthConsent";
                update: {
                  clientId?: null | string;
                  consentGiven?: null | boolean;
                  createdAt?: null | number;
                  scopes?: null | string;
                  updatedAt?: null | number;
                  userId?: null | string;
                };
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "clientId"
                    | "userId"
                    | "scopes"
                    | "createdAt"
                    | "updatedAt"
                    | "consentGiven"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "jwks";
                update: {
                  createdAt?: number;
                  privateKey?: string;
                  publicKey?: string;
                };
                where?: Array<{
                  connector?: "AND" | "OR";
                  field: "publicKey" | "privateKey" | "createdAt" | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "rateLimit";
                update: {
                  count?: null | number;
                  key?: null | string;
                  lastRequest?: null | number;
                };
                where?: Array<{
                  connector?: "AND" | "OR";
                  field: "key" | "count" | "lastRequest" | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              };
          onUpdateHandle?: string;
          paginationOpts: {
            cursor: string | null;
            endCursor?: string | null;
            id?: number;
            maximumBytesRead?: number;
            maximumRowsRead?: number;
            numItems: number;
          };
        },
        any
      >;
      updateOne: FunctionReference<
        "mutation",
        "internal",
        {
          input:
            | {
                model: "user";
                update: {
                  createdAt?: number;
                  displayUsername?: null | string;
                  email?: string;
                  emailVerified?: boolean;
                  image?: null | string;
                  isAnonymous?: null | boolean;
                  name?: string;
                  phoneNumber?: null | string;
                  phoneNumberVerified?: null | boolean;
                  twoFactorEnabled?: null | boolean;
                  updatedAt?: number;
                  userId?: null | string;
                  username?: null | string;
                };
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "name"
                    | "email"
                    | "emailVerified"
                    | "image"
                    | "createdAt"
                    | "updatedAt"
                    | "twoFactorEnabled"
                    | "isAnonymous"
                    | "username"
                    | "displayUsername"
                    | "phoneNumber"
                    | "phoneNumberVerified"
                    | "userId"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "session";
                update: {
                  createdAt?: number;
                  expiresAt?: number;
                  ipAddress?: null | string;
                  token?: string;
                  updatedAt?: number;
                  userAgent?: null | string;
                  userId?: string;
                };
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "expiresAt"
                    | "token"
                    | "createdAt"
                    | "updatedAt"
                    | "ipAddress"
                    | "userAgent"
                    | "userId"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "account";
                update: {
                  accessToken?: null | string;
                  accessTokenExpiresAt?: null | number;
                  accountId?: string;
                  createdAt?: number;
                  idToken?: null | string;
                  password?: null | string;
                  providerId?: string;
                  refreshToken?: null | string;
                  refreshTokenExpiresAt?: null | number;
                  scope?: null | string;
                  updatedAt?: number;
                  userId?: string;
                };
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "accountId"
                    | "providerId"
                    | "userId"
                    | "accessToken"
                    | "refreshToken"
                    | "idToken"
                    | "accessTokenExpiresAt"
                    | "refreshTokenExpiresAt"
                    | "scope"
                    | "password"
                    | "createdAt"
                    | "updatedAt"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "verification";
                update: {
                  createdAt?: number;
                  expiresAt?: number;
                  identifier?: string;
                  updatedAt?: number;
                  value?: string;
                };
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "identifier"
                    | "value"
                    | "expiresAt"
                    | "createdAt"
                    | "updatedAt"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "twoFactor";
                update: {
                  backupCodes?: string;
                  secret?: string;
                  userId?: string;
                };
                where?: Array<{
                  connector?: "AND" | "OR";
                  field: "secret" | "backupCodes" | "userId" | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "passkey";
                update: {
                  aaguid?: null | string;
                  backedUp?: boolean;
                  counter?: number;
                  createdAt?: null | number;
                  credentialID?: string;
                  deviceType?: string;
                  name?: null | string;
                  publicKey?: string;
                  transports?: null | string;
                  userId?: string;
                };
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "name"
                    | "publicKey"
                    | "userId"
                    | "credentialID"
                    | "counter"
                    | "deviceType"
                    | "backedUp"
                    | "transports"
                    | "createdAt"
                    | "aaguid"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "oauthApplication";
                update: {
                  clientId?: null | string;
                  clientSecret?: null | string;
                  createdAt?: null | number;
                  disabled?: null | boolean;
                  icon?: null | string;
                  metadata?: null | string;
                  name?: null | string;
                  redirectURLs?: null | string;
                  type?: null | string;
                  updatedAt?: null | number;
                  userId?: null | string;
                };
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "name"
                    | "icon"
                    | "metadata"
                    | "clientId"
                    | "clientSecret"
                    | "redirectURLs"
                    | "type"
                    | "disabled"
                    | "userId"
                    | "createdAt"
                    | "updatedAt"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "oauthAccessToken";
                update: {
                  accessToken?: null | string;
                  accessTokenExpiresAt?: null | number;
                  clientId?: null | string;
                  createdAt?: null | number;
                  refreshToken?: null | string;
                  refreshTokenExpiresAt?: null | number;
                  scopes?: null | string;
                  updatedAt?: null | number;
                  userId?: null | string;
                };
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "accessToken"
                    | "refreshToken"
                    | "accessTokenExpiresAt"
                    | "refreshTokenExpiresAt"
                    | "clientId"
                    | "userId"
                    | "scopes"
                    | "createdAt"
                    | "updatedAt"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "oauthConsent";
                update: {
                  clientId?: null | string;
                  consentGiven?: null | boolean;
                  createdAt?: null | number;
                  scopes?: null | string;
                  updatedAt?: null | number;
                  userId?: null | string;
                };
                where?: Array<{
                  connector?: "AND" | "OR";
                  field:
                    | "clientId"
                    | "userId"
                    | "scopes"
                    | "createdAt"
                    | "updatedAt"
                    | "consentGiven"
                    | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "jwks";
                update: {
                  createdAt?: number;
                  privateKey?: string;
                  publicKey?: string;
                };
                where?: Array<{
                  connector?: "AND" | "OR";
                  field: "publicKey" | "privateKey" | "createdAt" | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              }
            | {
                model: "rateLimit";
                update: {
                  count?: null | number;
                  key?: null | string;
                  lastRequest?: null | number;
                };
                where?: Array<{
                  connector?: "AND" | "OR";
                  field: "key" | "count" | "lastRequest" | "_id";
                  operator?:
                    | "lt"
                    | "lte"
                    | "gt"
                    | "gte"
                    | "eq"
                    | "in"
                    | "not_in"
                    | "ne"
                    | "contains"
                    | "starts_with"
                    | "ends_with";
                  value:
                    | string
                    | number
                    | boolean
                    | Array<string>
                    | Array<number>
                    | null;
                }>;
              };
          onUpdateHandle?: string;
        },
        any
      >;
    };
    adapterTest: {
      runCustomTests: FunctionReference<"action", "internal", any, any>;
      runTests: FunctionReference<"action", "internal", any, any>;
    };
  };
  agent: {
    apiKeys: {
      destroy: FunctionReference<
        "mutation",
        "internal",
        { apiKey?: string; name?: string },
        | "missing"
        | "deleted"
        | "name mismatch"
        | "must provide either apiKey or name"
      >;
      issue: FunctionReference<
        "mutation",
        "internal",
        { name?: string },
        string
      >;
      validate: FunctionReference<
        "query",
        "internal",
        { apiKey: string },
        boolean
      >;
    };
    files: {
      addFile: FunctionReference<
        "mutation",
        "internal",
        {
          filename?: string;
          hash: string;
          mimeType: string;
          storageId: string;
        },
        { fileId: string; storageId: string }
      >;
      copyFile: FunctionReference<
        "mutation",
        "internal",
        { fileId: string },
        null
      >;
      deleteFiles: FunctionReference<
        "mutation",
        "internal",
        { fileIds: Array<string>; force?: boolean },
        Array<string>
      >;
      get: FunctionReference<
        "query",
        "internal",
        { fileId: string },
        null | {
          _creationTime: number;
          _id: string;
          filename?: string;
          hash: string;
          lastTouchedAt: number;
          mimeType: string;
          refcount: number;
          storageId: string;
        }
      >;
      getFilesToDelete: FunctionReference<
        "query",
        "internal",
        {
          paginationOpts: {
            cursor: string | null;
            endCursor?: string | null;
            id?: number;
            maximumBytesRead?: number;
            maximumRowsRead?: number;
            numItems: number;
          };
        },
        {
          continueCursor: string;
          isDone: boolean;
          page: Array<{
            _creationTime: number;
            _id: string;
            filename?: string;
            hash: string;
            lastTouchedAt: number;
            mimeType: string;
            refcount: number;
            storageId: string;
          }>;
        }
      >;
      useExistingFile: FunctionReference<
        "mutation",
        "internal",
        { filename?: string; hash: string },
        null | { fileId: string; storageId: string }
      >;
    };
    messages: {
      addMessages: FunctionReference<
        "mutation",
        "internal",
        {
          agentName?: string;
          embeddings?: {
            dimension:
              | 128
              | 256
              | 512
              | 768
              | 1024
              | 1408
              | 1536
              | 2048
              | 3072
              | 4096;
            model: string;
            vectors: Array<Array<number> | null>;
          };
          failPendingSteps?: boolean;
          hideFromUserIdSearch?: boolean;
          messages: Array<{
            error?: string;
            fileIds?: Array<string>;
            finishReason?:
              | "stop"
              | "length"
              | "content-filter"
              | "tool-calls"
              | "error"
              | "other"
              | "unknown";
            message:
              | {
                  content:
                    | string
                    | Array<
                        | {
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            text: string;
                            type: "text";
                          }
                        | {
                            image: string | ArrayBuffer;
                            mimeType?: string;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            type: "image";
                          }
                        | {
                            data: string | ArrayBuffer;
                            filename?: string;
                            mimeType: string;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            type: "file";
                          }
                      >;
                  providerOptions?: Record<string, Record<string, any>>;
                  role: "user";
                }
              | {
                  content:
                    | string
                    | Array<
                        | {
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            text: string;
                            type: "text";
                          }
                        | {
                            data: string | ArrayBuffer;
                            filename?: string;
                            mimeType: string;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            type: "file";
                          }
                        | {
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            signature?: string;
                            text: string;
                            type: "reasoning";
                          }
                        | {
                            data: string;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            type: "redacted-reasoning";
                          }
                        | {
                            args: any;
                            providerExecuted?: boolean;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            toolCallId: string;
                            toolName: string;
                            type: "tool-call";
                          }
                        | {
                            args?: any;
                            experimental_content?: Array<
                              | { text: string; type: "text" }
                              | {
                                  data: string;
                                  mimeType?: string;
                                  type: "image";
                                }
                            >;
                            isError?: boolean;
                            output?:
                              | { type: "text"; value: string }
                              | { type: "json"; value: any }
                              | { type: "error-text"; value: string }
                              | { type: "error-json"; value: any }
                              | {
                                  type: "content";
                                  value: Array<
                                    | { text: string; type: "text" }
                                    | {
                                        data: string;
                                        mediaType: string;
                                        type: "media";
                                      }
                                  >;
                                };
                            providerExecuted?: boolean;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            result?: any;
                            toolCallId: string;
                            toolName: string;
                            type: "tool-result";
                          }
                        | {
                            id: string;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            sourceType: "url";
                            title?: string;
                            type: "source";
                            url: string;
                          }
                        | {
                            filename?: string;
                            id: string;
                            mediaType: string;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            sourceType: "document";
                            title: string;
                            type: "source";
                          }
                      >;
                  providerOptions?: Record<string, Record<string, any>>;
                  role: "assistant";
                }
              | {
                  content: Array<{
                    args?: any;
                    experimental_content?: Array<
                      | { text: string; type: "text" }
                      | { data: string; mimeType?: string; type: "image" }
                    >;
                    isError?: boolean;
                    output?:
                      | { type: "text"; value: string }
                      | { type: "json"; value: any }
                      | { type: "error-text"; value: string }
                      | { type: "error-json"; value: any }
                      | {
                          type: "content";
                          value: Array<
                            | { text: string; type: "text" }
                            | { data: string; mediaType: string; type: "media" }
                          >;
                        };
                    providerExecuted?: boolean;
                    providerMetadata?: Record<string, Record<string, any>>;
                    providerOptions?: Record<string, Record<string, any>>;
                    result?: any;
                    toolCallId: string;
                    toolName: string;
                    type: "tool-result";
                  }>;
                  providerOptions?: Record<string, Record<string, any>>;
                  role: "tool";
                }
              | {
                  content: string;
                  providerOptions?: Record<string, Record<string, any>>;
                  role: "system";
                };
            model?: string;
            provider?: string;
            providerMetadata?: Record<string, Record<string, any>>;
            reasoning?: string;
            reasoningDetails?: Array<
              | {
                  providerMetadata?: Record<string, Record<string, any>>;
                  providerOptions?: Record<string, Record<string, any>>;
                  signature?: string;
                  text: string;
                  type: "reasoning";
                }
              | { signature?: string; text: string; type: "text" }
              | { data: string; type: "redacted" }
            >;
            sources?: Array<
              | {
                  id: string;
                  providerMetadata?: Record<string, Record<string, any>>;
                  providerOptions?: Record<string, Record<string, any>>;
                  sourceType: "url";
                  title?: string;
                  type?: "source";
                  url: string;
                }
              | {
                  filename?: string;
                  id: string;
                  mediaType: string;
                  providerMetadata?: Record<string, Record<string, any>>;
                  providerOptions?: Record<string, Record<string, any>>;
                  sourceType: "document";
                  title: string;
                  type: "source";
                }
            >;
            status?: "pending" | "success" | "failed";
            text?: string;
            usage?: {
              cachedInputTokens?: number;
              completionTokens: number;
              promptTokens: number;
              reasoningTokens?: number;
              totalTokens: number;
            };
            warnings?: Array<
              | {
                  details?: string;
                  setting: string;
                  type: "unsupported-setting";
                }
              | { details?: string; tool: any; type: "unsupported-tool" }
              | { message: string; type: "other" }
            >;
          }>;
          pendingMessageId?: string;
          promptMessageId?: string;
          threadId: string;
          userId?: string;
        },
        {
          messages: Array<{
            _creationTime: number;
            _id: string;
            agentName?: string;
            embeddingId?: string;
            error?: string;
            fileIds?: Array<string>;
            finishReason?:
              | "stop"
              | "length"
              | "content-filter"
              | "tool-calls"
              | "error"
              | "other"
              | "unknown";
            id?: string;
            message?:
              | {
                  content:
                    | string
                    | Array<
                        | {
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            text: string;
                            type: "text";
                          }
                        | {
                            image: string | ArrayBuffer;
                            mimeType?: string;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            type: "image";
                          }
                        | {
                            data: string | ArrayBuffer;
                            filename?: string;
                            mimeType: string;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            type: "file";
                          }
                      >;
                  providerOptions?: Record<string, Record<string, any>>;
                  role: "user";
                }
              | {
                  content:
                    | string
                    | Array<
                        | {
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            text: string;
                            type: "text";
                          }
                        | {
                            data: string | ArrayBuffer;
                            filename?: string;
                            mimeType: string;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            type: "file";
                          }
                        | {
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            signature?: string;
                            text: string;
                            type: "reasoning";
                          }
                        | {
                            data: string;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            type: "redacted-reasoning";
                          }
                        | {
                            args: any;
                            providerExecuted?: boolean;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            toolCallId: string;
                            toolName: string;
                            type: "tool-call";
                          }
                        | {
                            args?: any;
                            experimental_content?: Array<
                              | { text: string; type: "text" }
                              | {
                                  data: string;
                                  mimeType?: string;
                                  type: "image";
                                }
                            >;
                            isError?: boolean;
                            output?:
                              | { type: "text"; value: string }
                              | { type: "json"; value: any }
                              | { type: "error-text"; value: string }
                              | { type: "error-json"; value: any }
                              | {
                                  type: "content";
                                  value: Array<
                                    | { text: string; type: "text" }
                                    | {
                                        data: string;
                                        mediaType: string;
                                        type: "media";
                                      }
                                  >;
                                };
                            providerExecuted?: boolean;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            result?: any;
                            toolCallId: string;
                            toolName: string;
                            type: "tool-result";
                          }
                        | {
                            id: string;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            sourceType: "url";
                            title?: string;
                            type: "source";
                            url: string;
                          }
                        | {
                            filename?: string;
                            id: string;
                            mediaType: string;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            sourceType: "document";
                            title: string;
                            type: "source";
                          }
                      >;
                  providerOptions?: Record<string, Record<string, any>>;
                  role: "assistant";
                }
              | {
                  content: Array<{
                    args?: any;
                    experimental_content?: Array<
                      | { text: string; type: "text" }
                      | { data: string; mimeType?: string; type: "image" }
                    >;
                    isError?: boolean;
                    output?:
                      | { type: "text"; value: string }
                      | { type: "json"; value: any }
                      | { type: "error-text"; value: string }
                      | { type: "error-json"; value: any }
                      | {
                          type: "content";
                          value: Array<
                            | { text: string; type: "text" }
                            | { data: string; mediaType: string; type: "media" }
                          >;
                        };
                    providerExecuted?: boolean;
                    providerMetadata?: Record<string, Record<string, any>>;
                    providerOptions?: Record<string, Record<string, any>>;
                    result?: any;
                    toolCallId: string;
                    toolName: string;
                    type: "tool-result";
                  }>;
                  providerOptions?: Record<string, Record<string, any>>;
                  role: "tool";
                }
              | {
                  content: string;
                  providerOptions?: Record<string, Record<string, any>>;
                  role: "system";
                };
            model?: string;
            order: number;
            provider?: string;
            providerMetadata?: Record<string, Record<string, any>>;
            providerOptions?: Record<string, Record<string, any>>;
            reasoning?: string;
            reasoningDetails?: Array<
              | {
                  providerMetadata?: Record<string, Record<string, any>>;
                  providerOptions?: Record<string, Record<string, any>>;
                  signature?: string;
                  text: string;
                  type: "reasoning";
                }
              | { signature?: string; text: string; type: "text" }
              | { data: string; type: "redacted" }
            >;
            sources?: Array<
              | {
                  id: string;
                  providerMetadata?: Record<string, Record<string, any>>;
                  providerOptions?: Record<string, Record<string, any>>;
                  sourceType: "url";
                  title?: string;
                  type?: "source";
                  url: string;
                }
              | {
                  filename?: string;
                  id: string;
                  mediaType: string;
                  providerMetadata?: Record<string, Record<string, any>>;
                  providerOptions?: Record<string, Record<string, any>>;
                  sourceType: "document";
                  title: string;
                  type: "source";
                }
            >;
            status: "pending" | "success" | "failed";
            stepOrder: number;
            text?: string;
            threadId: string;
            tool: boolean;
            usage?: {
              cachedInputTokens?: number;
              completionTokens: number;
              promptTokens: number;
              reasoningTokens?: number;
              totalTokens: number;
            };
            userId?: string;
            warnings?: Array<
              | {
                  details?: string;
                  setting: string;
                  type: "unsupported-setting";
                }
              | { details?: string; tool: any; type: "unsupported-tool" }
              | { message: string; type: "other" }
            >;
          }>;
        }
      >;
      cloneThread: FunctionReference<
        "action",
        "internal",
        {
          batchSize?: number;
          copyUserIdForVectorSearch?: boolean;
          excludeToolMessages?: boolean;
          insertAtOrder?: number;
          limit?: number;
          sourceThreadId: string;
          statuses?: Array<"pending" | "success" | "failed">;
          targetThreadId: string;
          upToAndIncludingMessageId?: string;
        },
        number
      >;
      deleteByIds: FunctionReference<
        "mutation",
        "internal",
        { messageIds: Array<string> },
        Array<string>
      >;
      deleteByOrder: FunctionReference<
        "mutation",
        "internal",
        {
          endOrder: number;
          endStepOrder?: number;
          startOrder: number;
          startStepOrder?: number;
          threadId: string;
        },
        { isDone: boolean; lastOrder?: number; lastStepOrder?: number }
      >;
      finalizeMessage: FunctionReference<
        "mutation",
        "internal",
        {
          messageId: string;
          result: { status: "success" } | { error: string; status: "failed" };
        },
        null
      >;
      getMessagesByIds: FunctionReference<
        "query",
        "internal",
        { messageIds: Array<string> },
        Array<null | {
          _creationTime: number;
          _id: string;
          agentName?: string;
          embeddingId?: string;
          error?: string;
          fileIds?: Array<string>;
          finishReason?:
            | "stop"
            | "length"
            | "content-filter"
            | "tool-calls"
            | "error"
            | "other"
            | "unknown";
          id?: string;
          message?:
            | {
                content:
                  | string
                  | Array<
                      | {
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          text: string;
                          type: "text";
                        }
                      | {
                          image: string | ArrayBuffer;
                          mimeType?: string;
                          providerOptions?: Record<string, Record<string, any>>;
                          type: "image";
                        }
                      | {
                          data: string | ArrayBuffer;
                          filename?: string;
                          mimeType: string;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          type: "file";
                        }
                    >;
                providerOptions?: Record<string, Record<string, any>>;
                role: "user";
              }
            | {
                content:
                  | string
                  | Array<
                      | {
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          text: string;
                          type: "text";
                        }
                      | {
                          data: string | ArrayBuffer;
                          filename?: string;
                          mimeType: string;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          type: "file";
                        }
                      | {
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          signature?: string;
                          text: string;
                          type: "reasoning";
                        }
                      | {
                          data: string;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          type: "redacted-reasoning";
                        }
                      | {
                          args: any;
                          providerExecuted?: boolean;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          toolCallId: string;
                          toolName: string;
                          type: "tool-call";
                        }
                      | {
                          args?: any;
                          experimental_content?: Array<
                            | { text: string; type: "text" }
                            | { data: string; mimeType?: string; type: "image" }
                          >;
                          isError?: boolean;
                          output?:
                            | { type: "text"; value: string }
                            | { type: "json"; value: any }
                            | { type: "error-text"; value: string }
                            | { type: "error-json"; value: any }
                            | {
                                type: "content";
                                value: Array<
                                  | { text: string; type: "text" }
                                  | {
                                      data: string;
                                      mediaType: string;
                                      type: "media";
                                    }
                                >;
                              };
                          providerExecuted?: boolean;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          result?: any;
                          toolCallId: string;
                          toolName: string;
                          type: "tool-result";
                        }
                      | {
                          id: string;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          sourceType: "url";
                          title?: string;
                          type: "source";
                          url: string;
                        }
                      | {
                          filename?: string;
                          id: string;
                          mediaType: string;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          sourceType: "document";
                          title: string;
                          type: "source";
                        }
                    >;
                providerOptions?: Record<string, Record<string, any>>;
                role: "assistant";
              }
            | {
                content: Array<{
                  args?: any;
                  experimental_content?: Array<
                    | { text: string; type: "text" }
                    | { data: string; mimeType?: string; type: "image" }
                  >;
                  isError?: boolean;
                  output?:
                    | { type: "text"; value: string }
                    | { type: "json"; value: any }
                    | { type: "error-text"; value: string }
                    | { type: "error-json"; value: any }
                    | {
                        type: "content";
                        value: Array<
                          | { text: string; type: "text" }
                          | { data: string; mediaType: string; type: "media" }
                        >;
                      };
                  providerExecuted?: boolean;
                  providerMetadata?: Record<string, Record<string, any>>;
                  providerOptions?: Record<string, Record<string, any>>;
                  result?: any;
                  toolCallId: string;
                  toolName: string;
                  type: "tool-result";
                }>;
                providerOptions?: Record<string, Record<string, any>>;
                role: "tool";
              }
            | {
                content: string;
                providerOptions?: Record<string, Record<string, any>>;
                role: "system";
              };
          model?: string;
          order: number;
          provider?: string;
          providerMetadata?: Record<string, Record<string, any>>;
          providerOptions?: Record<string, Record<string, any>>;
          reasoning?: string;
          reasoningDetails?: Array<
            | {
                providerMetadata?: Record<string, Record<string, any>>;
                providerOptions?: Record<string, Record<string, any>>;
                signature?: string;
                text: string;
                type: "reasoning";
              }
            | { signature?: string; text: string; type: "text" }
            | { data: string; type: "redacted" }
          >;
          sources?: Array<
            | {
                id: string;
                providerMetadata?: Record<string, Record<string, any>>;
                providerOptions?: Record<string, Record<string, any>>;
                sourceType: "url";
                title?: string;
                type?: "source";
                url: string;
              }
            | {
                filename?: string;
                id: string;
                mediaType: string;
                providerMetadata?: Record<string, Record<string, any>>;
                providerOptions?: Record<string, Record<string, any>>;
                sourceType: "document";
                title: string;
                type: "source";
              }
          >;
          status: "pending" | "success" | "failed";
          stepOrder: number;
          text?: string;
          threadId: string;
          tool: boolean;
          usage?: {
            cachedInputTokens?: number;
            completionTokens: number;
            promptTokens: number;
            reasoningTokens?: number;
            totalTokens: number;
          };
          userId?: string;
          warnings?: Array<
            | { details?: string; setting: string; type: "unsupported-setting" }
            | { details?: string; tool: any; type: "unsupported-tool" }
            | { message: string; type: "other" }
          >;
        }>
      >;
      getMessageSearchFields: FunctionReference<
        "query",
        "internal",
        { messageId: string },
        { embedding?: Array<number>; embeddingModel?: string; text?: string }
      >;
      listMessagesByThreadId: FunctionReference<
        "query",
        "internal",
        {
          excludeToolMessages?: boolean;
          order: "asc" | "desc";
          paginationOpts?: {
            cursor: string | null;
            endCursor?: string | null;
            id?: number;
            maximumBytesRead?: number;
            maximumRowsRead?: number;
            numItems: number;
          };
          statuses?: Array<"pending" | "success" | "failed">;
          threadId: string;
          upToAndIncludingMessageId?: string;
        },
        {
          continueCursor: string;
          isDone: boolean;
          page: Array<{
            _creationTime: number;
            _id: string;
            agentName?: string;
            embeddingId?: string;
            error?: string;
            fileIds?: Array<string>;
            finishReason?:
              | "stop"
              | "length"
              | "content-filter"
              | "tool-calls"
              | "error"
              | "other"
              | "unknown";
            id?: string;
            message?:
              | {
                  content:
                    | string
                    | Array<
                        | {
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            text: string;
                            type: "text";
                          }
                        | {
                            image: string | ArrayBuffer;
                            mimeType?: string;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            type: "image";
                          }
                        | {
                            data: string | ArrayBuffer;
                            filename?: string;
                            mimeType: string;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            type: "file";
                          }
                      >;
                  providerOptions?: Record<string, Record<string, any>>;
                  role: "user";
                }
              | {
                  content:
                    | string
                    | Array<
                        | {
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            text: string;
                            type: "text";
                          }
                        | {
                            data: string | ArrayBuffer;
                            filename?: string;
                            mimeType: string;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            type: "file";
                          }
                        | {
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            signature?: string;
                            text: string;
                            type: "reasoning";
                          }
                        | {
                            data: string;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            type: "redacted-reasoning";
                          }
                        | {
                            args: any;
                            providerExecuted?: boolean;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            toolCallId: string;
                            toolName: string;
                            type: "tool-call";
                          }
                        | {
                            args?: any;
                            experimental_content?: Array<
                              | { text: string; type: "text" }
                              | {
                                  data: string;
                                  mimeType?: string;
                                  type: "image";
                                }
                            >;
                            isError?: boolean;
                            output?:
                              | { type: "text"; value: string }
                              | { type: "json"; value: any }
                              | { type: "error-text"; value: string }
                              | { type: "error-json"; value: any }
                              | {
                                  type: "content";
                                  value: Array<
                                    | { text: string; type: "text" }
                                    | {
                                        data: string;
                                        mediaType: string;
                                        type: "media";
                                      }
                                  >;
                                };
                            providerExecuted?: boolean;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            result?: any;
                            toolCallId: string;
                            toolName: string;
                            type: "tool-result";
                          }
                        | {
                            id: string;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            sourceType: "url";
                            title?: string;
                            type: "source";
                            url: string;
                          }
                        | {
                            filename?: string;
                            id: string;
                            mediaType: string;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            sourceType: "document";
                            title: string;
                            type: "source";
                          }
                      >;
                  providerOptions?: Record<string, Record<string, any>>;
                  role: "assistant";
                }
              | {
                  content: Array<{
                    args?: any;
                    experimental_content?: Array<
                      | { text: string; type: "text" }
                      | { data: string; mimeType?: string; type: "image" }
                    >;
                    isError?: boolean;
                    output?:
                      | { type: "text"; value: string }
                      | { type: "json"; value: any }
                      | { type: "error-text"; value: string }
                      | { type: "error-json"; value: any }
                      | {
                          type: "content";
                          value: Array<
                            | { text: string; type: "text" }
                            | { data: string; mediaType: string; type: "media" }
                          >;
                        };
                    providerExecuted?: boolean;
                    providerMetadata?: Record<string, Record<string, any>>;
                    providerOptions?: Record<string, Record<string, any>>;
                    result?: any;
                    toolCallId: string;
                    toolName: string;
                    type: "tool-result";
                  }>;
                  providerOptions?: Record<string, Record<string, any>>;
                  role: "tool";
                }
              | {
                  content: string;
                  providerOptions?: Record<string, Record<string, any>>;
                  role: "system";
                };
            model?: string;
            order: number;
            provider?: string;
            providerMetadata?: Record<string, Record<string, any>>;
            providerOptions?: Record<string, Record<string, any>>;
            reasoning?: string;
            reasoningDetails?: Array<
              | {
                  providerMetadata?: Record<string, Record<string, any>>;
                  providerOptions?: Record<string, Record<string, any>>;
                  signature?: string;
                  text: string;
                  type: "reasoning";
                }
              | { signature?: string; text: string; type: "text" }
              | { data: string; type: "redacted" }
            >;
            sources?: Array<
              | {
                  id: string;
                  providerMetadata?: Record<string, Record<string, any>>;
                  providerOptions?: Record<string, Record<string, any>>;
                  sourceType: "url";
                  title?: string;
                  type?: "source";
                  url: string;
                }
              | {
                  filename?: string;
                  id: string;
                  mediaType: string;
                  providerMetadata?: Record<string, Record<string, any>>;
                  providerOptions?: Record<string, Record<string, any>>;
                  sourceType: "document";
                  title: string;
                  type: "source";
                }
            >;
            status: "pending" | "success" | "failed";
            stepOrder: number;
            text?: string;
            threadId: string;
            tool: boolean;
            usage?: {
              cachedInputTokens?: number;
              completionTokens: number;
              promptTokens: number;
              reasoningTokens?: number;
              totalTokens: number;
            };
            userId?: string;
            warnings?: Array<
              | {
                  details?: string;
                  setting: string;
                  type: "unsupported-setting";
                }
              | { details?: string; tool: any; type: "unsupported-tool" }
              | { message: string; type: "other" }
            >;
          }>;
          pageStatus?: "SplitRecommended" | "SplitRequired" | null;
          splitCursor?: string | null;
        }
      >;
      searchMessages: FunctionReference<
        "action",
        "internal",
        {
          embedding?: Array<number>;
          embeddingModel?: string;
          limit: number;
          messageRange?: { after: number; before: number };
          searchAllMessagesForUserId?: string;
          targetMessageId?: string;
          text?: string;
          textSearch?: boolean;
          threadId?: string;
          vectorScoreThreshold?: number;
          vectorSearch?: boolean;
        },
        Array<{
          _creationTime: number;
          _id: string;
          agentName?: string;
          embeddingId?: string;
          error?: string;
          fileIds?: Array<string>;
          finishReason?:
            | "stop"
            | "length"
            | "content-filter"
            | "tool-calls"
            | "error"
            | "other"
            | "unknown";
          id?: string;
          message?:
            | {
                content:
                  | string
                  | Array<
                      | {
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          text: string;
                          type: "text";
                        }
                      | {
                          image: string | ArrayBuffer;
                          mimeType?: string;
                          providerOptions?: Record<string, Record<string, any>>;
                          type: "image";
                        }
                      | {
                          data: string | ArrayBuffer;
                          filename?: string;
                          mimeType: string;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          type: "file";
                        }
                    >;
                providerOptions?: Record<string, Record<string, any>>;
                role: "user";
              }
            | {
                content:
                  | string
                  | Array<
                      | {
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          text: string;
                          type: "text";
                        }
                      | {
                          data: string | ArrayBuffer;
                          filename?: string;
                          mimeType: string;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          type: "file";
                        }
                      | {
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          signature?: string;
                          text: string;
                          type: "reasoning";
                        }
                      | {
                          data: string;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          type: "redacted-reasoning";
                        }
                      | {
                          args: any;
                          providerExecuted?: boolean;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          toolCallId: string;
                          toolName: string;
                          type: "tool-call";
                        }
                      | {
                          args?: any;
                          experimental_content?: Array<
                            | { text: string; type: "text" }
                            | { data: string; mimeType?: string; type: "image" }
                          >;
                          isError?: boolean;
                          output?:
                            | { type: "text"; value: string }
                            | { type: "json"; value: any }
                            | { type: "error-text"; value: string }
                            | { type: "error-json"; value: any }
                            | {
                                type: "content";
                                value: Array<
                                  | { text: string; type: "text" }
                                  | {
                                      data: string;
                                      mediaType: string;
                                      type: "media";
                                    }
                                >;
                              };
                          providerExecuted?: boolean;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          result?: any;
                          toolCallId: string;
                          toolName: string;
                          type: "tool-result";
                        }
                      | {
                          id: string;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          sourceType: "url";
                          title?: string;
                          type: "source";
                          url: string;
                        }
                      | {
                          filename?: string;
                          id: string;
                          mediaType: string;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          sourceType: "document";
                          title: string;
                          type: "source";
                        }
                    >;
                providerOptions?: Record<string, Record<string, any>>;
                role: "assistant";
              }
            | {
                content: Array<{
                  args?: any;
                  experimental_content?: Array<
                    | { text: string; type: "text" }
                    | { data: string; mimeType?: string; type: "image" }
                  >;
                  isError?: boolean;
                  output?:
                    | { type: "text"; value: string }
                    | { type: "json"; value: any }
                    | { type: "error-text"; value: string }
                    | { type: "error-json"; value: any }
                    | {
                        type: "content";
                        value: Array<
                          | { text: string; type: "text" }
                          | { data: string; mediaType: string; type: "media" }
                        >;
                      };
                  providerExecuted?: boolean;
                  providerMetadata?: Record<string, Record<string, any>>;
                  providerOptions?: Record<string, Record<string, any>>;
                  result?: any;
                  toolCallId: string;
                  toolName: string;
                  type: "tool-result";
                }>;
                providerOptions?: Record<string, Record<string, any>>;
                role: "tool";
              }
            | {
                content: string;
                providerOptions?: Record<string, Record<string, any>>;
                role: "system";
              };
          model?: string;
          order: number;
          provider?: string;
          providerMetadata?: Record<string, Record<string, any>>;
          providerOptions?: Record<string, Record<string, any>>;
          reasoning?: string;
          reasoningDetails?: Array<
            | {
                providerMetadata?: Record<string, Record<string, any>>;
                providerOptions?: Record<string, Record<string, any>>;
                signature?: string;
                text: string;
                type: "reasoning";
              }
            | { signature?: string; text: string; type: "text" }
            | { data: string; type: "redacted" }
          >;
          sources?: Array<
            | {
                id: string;
                providerMetadata?: Record<string, Record<string, any>>;
                providerOptions?: Record<string, Record<string, any>>;
                sourceType: "url";
                title?: string;
                type?: "source";
                url: string;
              }
            | {
                filename?: string;
                id: string;
                mediaType: string;
                providerMetadata?: Record<string, Record<string, any>>;
                providerOptions?: Record<string, Record<string, any>>;
                sourceType: "document";
                title: string;
                type: "source";
              }
          >;
          status: "pending" | "success" | "failed";
          stepOrder: number;
          text?: string;
          threadId: string;
          tool: boolean;
          usage?: {
            cachedInputTokens?: number;
            completionTokens: number;
            promptTokens: number;
            reasoningTokens?: number;
            totalTokens: number;
          };
          userId?: string;
          warnings?: Array<
            | { details?: string; setting: string; type: "unsupported-setting" }
            | { details?: string; tool: any; type: "unsupported-tool" }
            | { message: string; type: "other" }
          >;
        }>
      >;
      textSearch: FunctionReference<
        "query",
        "internal",
        {
          limit: number;
          searchAllMessagesForUserId?: string;
          targetMessageId?: string;
          text?: string;
          threadId?: string;
        },
        Array<{
          _creationTime: number;
          _id: string;
          agentName?: string;
          embeddingId?: string;
          error?: string;
          fileIds?: Array<string>;
          finishReason?:
            | "stop"
            | "length"
            | "content-filter"
            | "tool-calls"
            | "error"
            | "other"
            | "unknown";
          id?: string;
          message?:
            | {
                content:
                  | string
                  | Array<
                      | {
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          text: string;
                          type: "text";
                        }
                      | {
                          image: string | ArrayBuffer;
                          mimeType?: string;
                          providerOptions?: Record<string, Record<string, any>>;
                          type: "image";
                        }
                      | {
                          data: string | ArrayBuffer;
                          filename?: string;
                          mimeType: string;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          type: "file";
                        }
                    >;
                providerOptions?: Record<string, Record<string, any>>;
                role: "user";
              }
            | {
                content:
                  | string
                  | Array<
                      | {
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          text: string;
                          type: "text";
                        }
                      | {
                          data: string | ArrayBuffer;
                          filename?: string;
                          mimeType: string;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          type: "file";
                        }
                      | {
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          signature?: string;
                          text: string;
                          type: "reasoning";
                        }
                      | {
                          data: string;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          type: "redacted-reasoning";
                        }
                      | {
                          args: any;
                          providerExecuted?: boolean;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          toolCallId: string;
                          toolName: string;
                          type: "tool-call";
                        }
                      | {
                          args?: any;
                          experimental_content?: Array<
                            | { text: string; type: "text" }
                            | { data: string; mimeType?: string; type: "image" }
                          >;
                          isError?: boolean;
                          output?:
                            | { type: "text"; value: string }
                            | { type: "json"; value: any }
                            | { type: "error-text"; value: string }
                            | { type: "error-json"; value: any }
                            | {
                                type: "content";
                                value: Array<
                                  | { text: string; type: "text" }
                                  | {
                                      data: string;
                                      mediaType: string;
                                      type: "media";
                                    }
                                >;
                              };
                          providerExecuted?: boolean;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          result?: any;
                          toolCallId: string;
                          toolName: string;
                          type: "tool-result";
                        }
                      | {
                          id: string;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          sourceType: "url";
                          title?: string;
                          type: "source";
                          url: string;
                        }
                      | {
                          filename?: string;
                          id: string;
                          mediaType: string;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          sourceType: "document";
                          title: string;
                          type: "source";
                        }
                    >;
                providerOptions?: Record<string, Record<string, any>>;
                role: "assistant";
              }
            | {
                content: Array<{
                  args?: any;
                  experimental_content?: Array<
                    | { text: string; type: "text" }
                    | { data: string; mimeType?: string; type: "image" }
                  >;
                  isError?: boolean;
                  output?:
                    | { type: "text"; value: string }
                    | { type: "json"; value: any }
                    | { type: "error-text"; value: string }
                    | { type: "error-json"; value: any }
                    | {
                        type: "content";
                        value: Array<
                          | { text: string; type: "text" }
                          | { data: string; mediaType: string; type: "media" }
                        >;
                      };
                  providerExecuted?: boolean;
                  providerMetadata?: Record<string, Record<string, any>>;
                  providerOptions?: Record<string, Record<string, any>>;
                  result?: any;
                  toolCallId: string;
                  toolName: string;
                  type: "tool-result";
                }>;
                providerOptions?: Record<string, Record<string, any>>;
                role: "tool";
              }
            | {
                content: string;
                providerOptions?: Record<string, Record<string, any>>;
                role: "system";
              };
          model?: string;
          order: number;
          provider?: string;
          providerMetadata?: Record<string, Record<string, any>>;
          providerOptions?: Record<string, Record<string, any>>;
          reasoning?: string;
          reasoningDetails?: Array<
            | {
                providerMetadata?: Record<string, Record<string, any>>;
                providerOptions?: Record<string, Record<string, any>>;
                signature?: string;
                text: string;
                type: "reasoning";
              }
            | { signature?: string; text: string; type: "text" }
            | { data: string; type: "redacted" }
          >;
          sources?: Array<
            | {
                id: string;
                providerMetadata?: Record<string, Record<string, any>>;
                providerOptions?: Record<string, Record<string, any>>;
                sourceType: "url";
                title?: string;
                type?: "source";
                url: string;
              }
            | {
                filename?: string;
                id: string;
                mediaType: string;
                providerMetadata?: Record<string, Record<string, any>>;
                providerOptions?: Record<string, Record<string, any>>;
                sourceType: "document";
                title: string;
                type: "source";
              }
          >;
          status: "pending" | "success" | "failed";
          stepOrder: number;
          text?: string;
          threadId: string;
          tool: boolean;
          usage?: {
            cachedInputTokens?: number;
            completionTokens: number;
            promptTokens: number;
            reasoningTokens?: number;
            totalTokens: number;
          };
          userId?: string;
          warnings?: Array<
            | { details?: string; setting: string; type: "unsupported-setting" }
            | { details?: string; tool: any; type: "unsupported-tool" }
            | { message: string; type: "other" }
          >;
        }>
      >;
      updateMessage: FunctionReference<
        "mutation",
        "internal",
        {
          messageId: string;
          patch: {
            error?: string;
            fileIds?: Array<string>;
            finishReason?:
              | "stop"
              | "length"
              | "content-filter"
              | "tool-calls"
              | "error"
              | "other"
              | "unknown";
            message?:
              | {
                  content:
                    | string
                    | Array<
                        | {
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            text: string;
                            type: "text";
                          }
                        | {
                            image: string | ArrayBuffer;
                            mimeType?: string;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            type: "image";
                          }
                        | {
                            data: string | ArrayBuffer;
                            filename?: string;
                            mimeType: string;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            type: "file";
                          }
                      >;
                  providerOptions?: Record<string, Record<string, any>>;
                  role: "user";
                }
              | {
                  content:
                    | string
                    | Array<
                        | {
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            text: string;
                            type: "text";
                          }
                        | {
                            data: string | ArrayBuffer;
                            filename?: string;
                            mimeType: string;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            type: "file";
                          }
                        | {
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            signature?: string;
                            text: string;
                            type: "reasoning";
                          }
                        | {
                            data: string;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            type: "redacted-reasoning";
                          }
                        | {
                            args: any;
                            providerExecuted?: boolean;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            toolCallId: string;
                            toolName: string;
                            type: "tool-call";
                          }
                        | {
                            args?: any;
                            experimental_content?: Array<
                              | { text: string; type: "text" }
                              | {
                                  data: string;
                                  mimeType?: string;
                                  type: "image";
                                }
                            >;
                            isError?: boolean;
                            output?:
                              | { type: "text"; value: string }
                              | { type: "json"; value: any }
                              | { type: "error-text"; value: string }
                              | { type: "error-json"; value: any }
                              | {
                                  type: "content";
                                  value: Array<
                                    | { text: string; type: "text" }
                                    | {
                                        data: string;
                                        mediaType: string;
                                        type: "media";
                                      }
                                  >;
                                };
                            providerExecuted?: boolean;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            result?: any;
                            toolCallId: string;
                            toolName: string;
                            type: "tool-result";
                          }
                        | {
                            id: string;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            sourceType: "url";
                            title?: string;
                            type: "source";
                            url: string;
                          }
                        | {
                            filename?: string;
                            id: string;
                            mediaType: string;
                            providerMetadata?: Record<
                              string,
                              Record<string, any>
                            >;
                            providerOptions?: Record<
                              string,
                              Record<string, any>
                            >;
                            sourceType: "document";
                            title: string;
                            type: "source";
                          }
                      >;
                  providerOptions?: Record<string, Record<string, any>>;
                  role: "assistant";
                }
              | {
                  content: Array<{
                    args?: any;
                    experimental_content?: Array<
                      | { text: string; type: "text" }
                      | { data: string; mimeType?: string; type: "image" }
                    >;
                    isError?: boolean;
                    output?:
                      | { type: "text"; value: string }
                      | { type: "json"; value: any }
                      | { type: "error-text"; value: string }
                      | { type: "error-json"; value: any }
                      | {
                          type: "content";
                          value: Array<
                            | { text: string; type: "text" }
                            | { data: string; mediaType: string; type: "media" }
                          >;
                        };
                    providerExecuted?: boolean;
                    providerMetadata?: Record<string, Record<string, any>>;
                    providerOptions?: Record<string, Record<string, any>>;
                    result?: any;
                    toolCallId: string;
                    toolName: string;
                    type: "tool-result";
                  }>;
                  providerOptions?: Record<string, Record<string, any>>;
                  role: "tool";
                }
              | {
                  content: string;
                  providerOptions?: Record<string, Record<string, any>>;
                  role: "system";
                };
            model?: string;
            provider?: string;
            providerOptions?: Record<string, Record<string, any>>;
            status?: "pending" | "success" | "failed";
          };
        },
        {
          _creationTime: number;
          _id: string;
          agentName?: string;
          embeddingId?: string;
          error?: string;
          fileIds?: Array<string>;
          finishReason?:
            | "stop"
            | "length"
            | "content-filter"
            | "tool-calls"
            | "error"
            | "other"
            | "unknown";
          id?: string;
          message?:
            | {
                content:
                  | string
                  | Array<
                      | {
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          text: string;
                          type: "text";
                        }
                      | {
                          image: string | ArrayBuffer;
                          mimeType?: string;
                          providerOptions?: Record<string, Record<string, any>>;
                          type: "image";
                        }
                      | {
                          data: string | ArrayBuffer;
                          filename?: string;
                          mimeType: string;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          type: "file";
                        }
                    >;
                providerOptions?: Record<string, Record<string, any>>;
                role: "user";
              }
            | {
                content:
                  | string
                  | Array<
                      | {
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          text: string;
                          type: "text";
                        }
                      | {
                          data: string | ArrayBuffer;
                          filename?: string;
                          mimeType: string;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          type: "file";
                        }
                      | {
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          signature?: string;
                          text: string;
                          type: "reasoning";
                        }
                      | {
                          data: string;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          type: "redacted-reasoning";
                        }
                      | {
                          args: any;
                          providerExecuted?: boolean;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          toolCallId: string;
                          toolName: string;
                          type: "tool-call";
                        }
                      | {
                          args?: any;
                          experimental_content?: Array<
                            | { text: string; type: "text" }
                            | { data: string; mimeType?: string; type: "image" }
                          >;
                          isError?: boolean;
                          output?:
                            | { type: "text"; value: string }
                            | { type: "json"; value: any }
                            | { type: "error-text"; value: string }
                            | { type: "error-json"; value: any }
                            | {
                                type: "content";
                                value: Array<
                                  | { text: string; type: "text" }
                                  | {
                                      data: string;
                                      mediaType: string;
                                      type: "media";
                                    }
                                >;
                              };
                          providerExecuted?: boolean;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          result?: any;
                          toolCallId: string;
                          toolName: string;
                          type: "tool-result";
                        }
                      | {
                          id: string;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          sourceType: "url";
                          title?: string;
                          type: "source";
                          url: string;
                        }
                      | {
                          filename?: string;
                          id: string;
                          mediaType: string;
                          providerMetadata?: Record<
                            string,
                            Record<string, any>
                          >;
                          providerOptions?: Record<string, Record<string, any>>;
                          sourceType: "document";
                          title: string;
                          type: "source";
                        }
                    >;
                providerOptions?: Record<string, Record<string, any>>;
                role: "assistant";
              }
            | {
                content: Array<{
                  args?: any;
                  experimental_content?: Array<
                    | { text: string; type: "text" }
                    | { data: string; mimeType?: string; type: "image" }
                  >;
                  isError?: boolean;
                  output?:
                    | { type: "text"; value: string }
                    | { type: "json"; value: any }
                    | { type: "error-text"; value: string }
                    | { type: "error-json"; value: any }
                    | {
                        type: "content";
                        value: Array<
                          | { text: string; type: "text" }
                          | { data: string; mediaType: string; type: "media" }
                        >;
                      };
                  providerExecuted?: boolean;
                  providerMetadata?: Record<string, Record<string, any>>;
                  providerOptions?: Record<string, Record<string, any>>;
                  result?: any;
                  toolCallId: string;
                  toolName: string;
                  type: "tool-result";
                }>;
                providerOptions?: Record<string, Record<string, any>>;
                role: "tool";
              }
            | {
                content: string;
                providerOptions?: Record<string, Record<string, any>>;
                role: "system";
              };
          model?: string;
          order: number;
          provider?: string;
          providerMetadata?: Record<string, Record<string, any>>;
          providerOptions?: Record<string, Record<string, any>>;
          reasoning?: string;
          reasoningDetails?: Array<
            | {
                providerMetadata?: Record<string, Record<string, any>>;
                providerOptions?: Record<string, Record<string, any>>;
                signature?: string;
                text: string;
                type: "reasoning";
              }
            | { signature?: string; text: string; type: "text" }
            | { data: string; type: "redacted" }
          >;
          sources?: Array<
            | {
                id: string;
                providerMetadata?: Record<string, Record<string, any>>;
                providerOptions?: Record<string, Record<string, any>>;
                sourceType: "url";
                title?: string;
                type?: "source";
                url: string;
              }
            | {
                filename?: string;
                id: string;
                mediaType: string;
                providerMetadata?: Record<string, Record<string, any>>;
                providerOptions?: Record<string, Record<string, any>>;
                sourceType: "document";
                title: string;
                type: "source";
              }
          >;
          status: "pending" | "success" | "failed";
          stepOrder: number;
          text?: string;
          threadId: string;
          tool: boolean;
          usage?: {
            cachedInputTokens?: number;
            completionTokens: number;
            promptTokens: number;
            reasoningTokens?: number;
            totalTokens: number;
          };
          userId?: string;
          warnings?: Array<
            | { details?: string; setting: string; type: "unsupported-setting" }
            | { details?: string; tool: any; type: "unsupported-tool" }
            | { message: string; type: "other" }
          >;
        }
      >;
    };
    streams: {
      abort: FunctionReference<
        "mutation",
        "internal",
        {
          finalDelta?: {
            end: number;
            parts: Array<any>;
            start: number;
            streamId: string;
          };
          reason: string;
          streamId: string;
        },
        boolean
      >;
      abortByOrder: FunctionReference<
        "mutation",
        "internal",
        { order: number; reason: string; threadId: string },
        boolean
      >;
      addDelta: FunctionReference<
        "mutation",
        "internal",
        { end: number; parts: Array<any>; start: number; streamId: string },
        boolean
      >;
      create: FunctionReference<
        "mutation",
        "internal",
        {
          agentName?: string;
          format?: "UIMessageChunk" | "TextStreamPart";
          model?: string;
          order: number;
          provider?: string;
          providerOptions?: Record<string, Record<string, any>>;
          stepOrder: number;
          threadId: string;
          userId?: string;
        },
        string
      >;
      deleteAllStreamsForThreadIdAsync: FunctionReference<
        "mutation",
        "internal",
        { deltaCursor?: string; streamOrder?: number; threadId: string },
        { deltaCursor?: string; isDone: boolean; streamOrder?: number }
      >;
      deleteAllStreamsForThreadIdSync: FunctionReference<
        "action",
        "internal",
        { threadId: string },
        null
      >;
      deleteStreamAsync: FunctionReference<
        "mutation",
        "internal",
        { cursor?: string; streamId: string },
        null
      >;
      deleteStreamSync: FunctionReference<
        "mutation",
        "internal",
        { streamId: string },
        null
      >;
      finish: FunctionReference<
        "mutation",
        "internal",
        {
          finalDelta?: {
            end: number;
            parts: Array<any>;
            start: number;
            streamId: string;
          };
          streamId: string;
        },
        null
      >;
      heartbeat: FunctionReference<
        "mutation",
        "internal",
        { streamId: string },
        null
      >;
      list: FunctionReference<
        "query",
        "internal",
        {
          startOrder?: number;
          statuses?: Array<"streaming" | "finished" | "aborted">;
          threadId: string;
        },
        Array<{
          agentName?: string;
          format?: "UIMessageChunk" | "TextStreamPart";
          model?: string;
          order: number;
          provider?: string;
          providerOptions?: Record<string, Record<string, any>>;
          status: "streaming" | "finished" | "aborted";
          stepOrder: number;
          streamId: string;
          userId?: string;
        }>
      >;
      listDeltas: FunctionReference<
        "query",
        "internal",
        {
          cursors: Array<{ cursor: number; streamId: string }>;
          threadId: string;
        },
        Array<{
          end: number;
          parts: Array<any>;
          start: number;
          streamId: string;
        }>
      >;
    };
    threads: {
      createThread: FunctionReference<
        "mutation",
        "internal",
        {
          defaultSystemPrompt?: string;
          parentThreadIds?: Array<string>;
          summary?: string;
          title?: string;
          userId?: string;
        },
        {
          _creationTime: number;
          _id: string;
          status: "active" | "archived";
          summary?: string;
          title?: string;
          userId?: string;
        }
      >;
      deleteAllForThreadIdAsync: FunctionReference<
        "mutation",
        "internal",
        {
          cursor?: string;
          deltaCursor?: string;
          limit?: number;
          messagesDone?: boolean;
          streamOrder?: number;
          streamsDone?: boolean;
          threadId: string;
        },
        { isDone: boolean }
      >;
      deleteAllForThreadIdSync: FunctionReference<
        "action",
        "internal",
        { limit?: number; threadId: string },
        null
      >;
      getThread: FunctionReference<
        "query",
        "internal",
        { threadId: string },
        {
          _creationTime: number;
          _id: string;
          status: "active" | "archived";
          summary?: string;
          title?: string;
          userId?: string;
        } | null
      >;
      listThreadsByUserId: FunctionReference<
        "query",
        "internal",
        {
          order?: "asc" | "desc";
          paginationOpts?: {
            cursor: string | null;
            endCursor?: string | null;
            id?: number;
            maximumBytesRead?: number;
            maximumRowsRead?: number;
            numItems: number;
          };
          userId?: string;
        },
        {
          continueCursor: string;
          isDone: boolean;
          page: Array<{
            _creationTime: number;
            _id: string;
            status: "active" | "archived";
            summary?: string;
            title?: string;
            userId?: string;
          }>;
          pageStatus?: "SplitRecommended" | "SplitRequired" | null;
          splitCursor?: string | null;
        }
      >;
      searchThreadTitles: FunctionReference<
        "query",
        "internal",
        { limit: number; query: string; userId?: string | null },
        Array<{
          _creationTime: number;
          _id: string;
          status: "active" | "archived";
          summary?: string;
          title?: string;
          userId?: string;
        }>
      >;
      updateThread: FunctionReference<
        "mutation",
        "internal",
        {
          patch: {
            status?: "active" | "archived";
            summary?: string;
            title?: string;
            userId?: string;
          };
          threadId: string;
        },
        {
          _creationTime: number;
          _id: string;
          status: "active" | "archived";
          summary?: string;
          title?: string;
          userId?: string;
        }
      >;
    };
    users: {
      deleteAllForUserId: FunctionReference<
        "action",
        "internal",
        { userId: string },
        null
      >;
      deleteAllForUserIdAsync: FunctionReference<
        "mutation",
        "internal",
        { userId: string },
        boolean
      >;
      listUsersWithThreads: FunctionReference<
        "query",
        "internal",
        {
          paginationOpts: {
            cursor: string | null;
            endCursor?: string | null;
            id?: number;
            maximumBytesRead?: number;
            maximumRowsRead?: number;
            numItems: number;
          };
        },
        {
          continueCursor: string;
          isDone: boolean;
          page: Array<string>;
          pageStatus?: "SplitRecommended" | "SplitRequired" | null;
          splitCursor?: string | null;
        }
      >;
    };
    vector: {
      index: {
        deleteBatch: FunctionReference<
          "mutation",
          "internal",
          {
            ids: Array<
              | string
              | string
              | string
              | string
              | string
              | string
              | string
              | string
              | string
              | string
            >;
          },
          null
        >;
        deleteBatchForThread: FunctionReference<
          "mutation",
          "internal",
          {
            cursor?: string;
            limit: number;
            model: string;
            threadId: string;
            vectorDimension:
              | 128
              | 256
              | 512
              | 768
              | 1024
              | 1408
              | 1536
              | 2048
              | 3072
              | 4096;
          },
          { continueCursor: string; isDone: boolean }
        >;
        insertBatch: FunctionReference<
          "mutation",
          "internal",
          {
            vectorDimension:
              | 128
              | 256
              | 512
              | 768
              | 1024
              | 1408
              | 1536
              | 2048
              | 3072
              | 4096;
            vectors: Array<{
              messageId?: string;
              model: string;
              table: string;
              threadId?: string;
              userId?: string;
              vector: Array<number>;
            }>;
          },
          Array<
            | string
            | string
            | string
            | string
            | string
            | string
            | string
            | string
            | string
            | string
          >
        >;
        paginate: FunctionReference<
          "query",
          "internal",
          {
            cursor?: string;
            limit: number;
            table?: string;
            targetModel: string;
            vectorDimension:
              | 128
              | 256
              | 512
              | 768
              | 1024
              | 1408
              | 1536
              | 2048
              | 3072
              | 4096;
          },
          {
            continueCursor: string;
            ids: Array<
              | string
              | string
              | string
              | string
              | string
              | string
              | string
              | string
              | string
              | string
            >;
            isDone: boolean;
          }
        >;
        updateBatch: FunctionReference<
          "mutation",
          "internal",
          {
            vectors: Array<{
              id:
                | string
                | string
                | string
                | string
                | string
                | string
                | string
                | string
                | string
                | string;
              model: string;
              vector: Array<number>;
            }>;
          },
          null
        >;
      };
    };
  };
  resend: {
    lib: {
      cancelEmail: FunctionReference<
        "mutation",
        "internal",
        { emailId: string },
        null
      >;
      cleanupAbandonedEmails: FunctionReference<
        "mutation",
        "internal",
        { olderThan?: number },
        null
      >;
      cleanupOldEmails: FunctionReference<
        "mutation",
        "internal",
        { olderThan?: number },
        null
      >;
      createManualEmail: FunctionReference<
        "mutation",
        "internal",
        {
          from: string;
          headers?: Array<{ name: string; value: string }>;
          replyTo?: Array<string>;
          subject: string;
          to: Array<string> | string;
        },
        string
      >;
      get: FunctionReference<
        "query",
        "internal",
        { emailId: string },
        {
          bcc?: Array<string>;
          bounced?: boolean;
          cc?: Array<string>;
          clicked?: boolean;
          complained: boolean;
          createdAt: number;
          deliveryDelayed?: boolean;
          errorMessage?: string;
          failed?: boolean;
          finalizedAt: number;
          from: string;
          headers?: Array<{ name: string; value: string }>;
          html?: string;
          opened: boolean;
          replyTo: Array<string>;
          resendId?: string;
          segment: number;
          status:
            | "waiting"
            | "queued"
            | "cancelled"
            | "sent"
            | "delivered"
            | "delivery_delayed"
            | "bounced"
            | "failed";
          subject?: string;
          template?: {
            id: string;
            variables?: Record<string, string | number>;
          };
          text?: string;
          to: Array<string>;
        } | null
      >;
      getStatus: FunctionReference<
        "query",
        "internal",
        { emailId: string },
        {
          bounced: boolean;
          clicked: boolean;
          complained: boolean;
          deliveryDelayed: boolean;
          errorMessage: string | null;
          failed: boolean;
          opened: boolean;
          status:
            | "waiting"
            | "queued"
            | "cancelled"
            | "sent"
            | "delivered"
            | "delivery_delayed"
            | "bounced"
            | "failed";
        } | null
      >;
      handleEmailEvent: FunctionReference<
        "mutation",
        "internal",
        { event: any },
        null
      >;
      sendEmail: FunctionReference<
        "mutation",
        "internal",
        {
          bcc?: Array<string>;
          cc?: Array<string>;
          from: string;
          headers?: Array<{ name: string; value: string }>;
          html?: string;
          options: {
            apiKey: string;
            initialBackoffMs: number;
            onEmailEvent?: { fnHandle: string };
            retryAttempts: number;
            testMode: boolean;
          };
          replyTo?: Array<string>;
          subject?: string;
          template?: {
            id: string;
            variables?: Record<string, string | number>;
          };
          text?: string;
          to: Array<string>;
        },
        string
      >;
      updateManualEmail: FunctionReference<
        "mutation",
        "internal",
        {
          emailId: string;
          errorMessage?: string;
          resendId?: string;
          status:
            | "waiting"
            | "queued"
            | "cancelled"
            | "sent"
            | "delivered"
            | "delivery_delayed"
            | "bounced"
            | "failed";
        },
        null
      >;
    };
  };
};
</file>

<file path="packages/backend/convex/_generated/api.js">
/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import { anyApi, componentsGeneric } from "convex/server";

/**

- A utility for referencing Convex functions in your app's API.
-
- Usage:

- ```js
- const myFunctionReference = api.myModule.myFunction;

- ```

 */
export const api = anyApi;
export const internal = anyApi;
export const components = componentsGeneric();
</file>

<file path="packages/backend/convex/_generated/dataModel.d.ts">
/* eslint-disable */
/**
 * Generated data model types.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  DataModelFromSchemaDefinition,
  DocumentByName,
  TableNamesInDataModel,
  SystemTableNames,
} from "convex/server";
import type { GenericId } from "convex/values";
import schema from "../schema.js";

/**

- The names of all of your Convex tables.
 */
export type TableNames = TableNamesInDataModel<DataModel>;

/**

- The type of a document stored in Convex.
-
- @typeParam TableName - A string literal type of the table name (like "users").
 */
export type Doc<TableName extends TableNames> = DocumentByName<
  DataModel,
  TableName

>;

/**

- An identifier for a document in Convex.
-
- Convex documents are uniquely identified by their `Id`, which is accessible
- on the `_id` field. To learn more, see [Document IDs](https://docs.convex.dev/using/document-ids).
-
- Documents can be loaded using `db.get(tableName, id)` in query and mutation functions.
-
- IDs are just strings at runtime, but this type can be used to distinguish them from other
- strings when type checking.
-
- @typeParam TableName - A string literal type of the table name (like "users").
 */
export type Id<TableName extends TableNames | SystemTableNames> =
  GenericId<TableName>;

/**

- A type describing your Convex data model.
-
- This type includes information about what tables you have, the type of
- documents stored in those tables, and the indexes defined on them.
-
- This type is used to parameterize methods like `queryGeneric` and
- `mutationGeneric` to make them type-safe.
 */
export type DataModel = DataModelFromSchemaDefinition<typeof schema>;
</file>

<file path="packages/backend/convex/_generated/server.d.ts">
/* eslint-disable */
/**
 * Generated utilities for implementing server-side Convex query and mutation functions.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import {
  ActionBuilder,
  HttpActionBuilder,
  MutationBuilder,
  QueryBuilder,
  GenericActionCtx,
  GenericMutationCtx,
  GenericQueryCtx,
  GenericDatabaseReader,
  GenericDatabaseWriter,
} from "convex/server";
import type { DataModel } from "./dataModel.js";

/**

- Define a query in this Convex app's public API.
-
- This function will be allowed to read your Convex database and will be accessible from the client.
-
- @param func - The query function. It receives a {@link QueryCtx} as its first argument.
- @returns The wrapped query. Include this as an `export` to name it and make it accessible.
 */
export declare const query: QueryBuilder<DataModel, "public">;

/**

- Define a query that is only accessible from other Convex functions (but not from the client).
-
- This function will be allowed to read from your Convex database. It will not be accessible from the client.
-
- @param func - The query function. It receives a {@link QueryCtx} as its first argument.
- @returns The wrapped query. Include this as an `export` to name it and make it accessible.
 */
export declare const internalQuery: QueryBuilder<DataModel, "internal">;

/**

- Define a mutation in this Convex app's public API.
-
- This function will be allowed to modify your Convex database and will be accessible from the client.
-
- @param func - The mutation function. It receives a {@link MutationCtx} as its first argument.
- @returns The wrapped mutation. Include this as an `export` to name it and make it accessible.
 */
export declare const mutation: MutationBuilder<DataModel, "public">;

/**

- Define a mutation that is only accessible from other Convex functions (but not from the client).
-
- This function will be allowed to modify your Convex database. It will not be accessible from the client.
-
- @param func - The mutation function. It receives a {@link MutationCtx} as its first argument.
- @returns The wrapped mutation. Include this as an `export` to name it and make it accessible.
 */
export declare const internalMutation: MutationBuilder<DataModel, "internal">;

/**

- Define an action in this Convex app's public API.
-
- An action is a function which can execute any JavaScript code, including non-deterministic
- code and code with side-effects, like calling third-party services.
- They can be run in Convex's JavaScript environment or in Node.js using the "use node" directive.
- They can interact with the database indirectly by calling queries and mutations using the {@link ActionCtx}.
-
- @param func - The action. It receives an {@link ActionCtx} as its first argument.
- @returns The wrapped action. Include this as an `export` to name it and make it accessible.
 */
export declare const action: ActionBuilder<DataModel, "public">;

/**

- Define an action that is only accessible from other Convex functions (but not from the client).
-
- @param func - The function. It receives an {@link ActionCtx} as its first argument.
- @returns The wrapped function. Include this as an `export` to name it and make it accessible.
 */
export declare const internalAction: ActionBuilder<DataModel, "internal">;

/**

- Define an HTTP action.
-
- The wrapped function will be used to respond to HTTP requests received
- by a Convex deployment if the requests matches the path and method where
- this action is routed. Be sure to route your httpAction in `convex/http.js`.
-
- @param func - The function. It receives an {@link ActionCtx} as its first argument
- and a Fetch API `Request` object as its second.
- @returns The wrapped function. Import this function from `convex/http.js` and route it to hook it up.
 */
export declare const httpAction: HttpActionBuilder;

/**

- A set of services for use within Convex query functions.
-
- The query context is passed as the first argument to any Convex query
- function run on the server.
-
- This differs from the {@link MutationCtx} because all of the services are
- read-only.
 */
export type QueryCtx = GenericQueryCtx<DataModel>;

/**

- A set of services for use within Convex mutation functions.
-
- The mutation context is passed as the first argument to any Convex mutation
- function run on the server.
 */
export type MutationCtx = GenericMutationCtx<DataModel>;

/**

- A set of services for use within Convex action functions.
-
- The action context is passed as the first argument to any Convex action
- function run on the server.
 */
export type ActionCtx = GenericActionCtx<DataModel>;

/**

- An interface to read from the database within Convex query functions.
-
- The two entry points are {@link DatabaseReader.get}, which fetches a single
- document by its {@link Id}, or {@link DatabaseReader.query}, which starts
- building a query.
 */
export type DatabaseReader = GenericDatabaseReader<DataModel>;

/**

- An interface to read from and write to the database within Convex mutation
- functions.
-
- Convex guarantees that all writes within a single mutation are
- executed atomically, so you never have to worry about partial writes leaving
- your data in an inconsistent state. See [the Convex Guide](https://docs.convex.dev/understanding/convex-fundamentals/functions#atomicity-and-optimistic-concurrency-control)
- for the guarantees Convex provides your functions.
 */
export type DatabaseWriter = GenericDatabaseWriter<DataModel>;
</file>

<file path="packages/backend/convex/_generated/server.js">
/* eslint-disable */
/**
 * Generated utilities for implementing server-side Convex query and mutation functions.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import {
  actionGeneric,
  httpActionGeneric,
  queryGeneric,
  mutationGeneric,
  internalActionGeneric,
  internalMutationGeneric,
  internalQueryGeneric,
} from "convex/server";

/**

- Define a query in this Convex app's public API.
-
- This function will be allowed to read your Convex database and will be accessible from the client.
-
- @param func - The query function. It receives a {@link QueryCtx} as its first argument.
- @returns The wrapped query. Include this as an `export` to name it and make it accessible.
 */
export const query = queryGeneric;

/**

- Define a query that is only accessible from other Convex functions (but not from the client).
-
- This function will be allowed to read from your Convex database. It will not be accessible from the client.
-
- @param func - The query function. It receives a {@link QueryCtx} as its first argument.
- @returns The wrapped query. Include this as an `export` to name it and make it accessible.
 */
export const internalQuery = internalQueryGeneric;

/**

- Define a mutation in this Convex app's public API.
-
- This function will be allowed to modify your Convex database and will be accessible from the client.
-
- @param func - The mutation function. It receives a {@link MutationCtx} as its first argument.
- @returns The wrapped mutation. Include this as an `export` to name it and make it accessible.
 */
export const mutation = mutationGeneric;

/**

- Define a mutation that is only accessible from other Convex functions (but not from the client).
-
- This function will be allowed to modify your Convex database. It will not be accessible from the client.
-
- @param func - The mutation function. It receives a {@link MutationCtx} as its first argument.
- @returns The wrapped mutation. Include this as an `export` to name it and make it accessible.
 */
export const internalMutation = internalMutationGeneric;

/**

- Define an action in this Convex app's public API.
-
- An action is a function which can execute any JavaScript code, including non-deterministic
- code and code with side-effects, like calling third-party services.
- They can be run in Convex's JavaScript environment or in Node.js using the "use node" directive.
- They can interact with the database indirectly by calling queries and mutations using the {@link ActionCtx}.
-
- @param func - The action. It receives an {@link ActionCtx} as its first argument.
- @returns The wrapped action. Include this as an `export` to name it and make it accessible.
 */
export const action = actionGeneric;

/**

- Define an action that is only accessible from other Convex functions (but not from the client).
-
- @param func - The function. It receives an {@link ActionCtx} as its first argument.
- @returns The wrapped function. Include this as an `export` to name it and make it accessible.
 */
export const internalAction = internalActionGeneric;

/**

- Define an HTTP action.
-
- The wrapped function will be used to respond to HTTP requests received
- by a Convex deployment if the requests matches the path and method where
- this action is routed. Be sure to route your httpAction in `convex/http.js`.
-
- @param func - The function. It receives an {@link ActionCtx} as its first argument
- and a Fetch API `Request` object as its second.
- @returns The wrapped function. Import this function from `convex/http.js` and route it to hook it up.
 */
export const httpAction = httpActionGeneric;
</file>

<file path="packages/backend/convex/agent.ts">
import { google } from "@ai-sdk/google";
import { Agent } from "@convex-dev/agent";
import { components } from "./_generated/api";

export const chatAgent = new Agent(components.agent, {
  name: "Chat Agent",
  languageModel: google("gemini-2.5-flash"),
  instructions:
    "You are a helpful AI assistant. Be concise and friendly in your responses.",
});
</file>

<file path="packages/backend/convex/auth.config.ts">
import { getAuthConfigProvider } from "@convex-dev/better-auth/auth-config";
import type { AuthConfig } from "convex/server";

/**

- Auth configuration for Convex with Better Auth
- Uses customJwt provider for optimized JWT validation
 */
export default {
  providers: [getAuthConfigProvider()],
} satisfies AuthConfig;
</file>

<file path="packages/backend/convex/auth.ts">
import { expo } from "@better-auth/expo";
import {
  type AuthFunctions,
  createClient,
  type GenericCtx,
} from "@convex-dev/better-auth";
import { convex, crossDomain } from "@convex-dev/better-auth/plugins";
import { requireActionCtx } from "@convex-dev/better-auth/utils";
import { Resend } from "@convex-dev/resend";
import { betterAuth } from "better-auth";
import { emailOTP, lastLoginMethod } from "better-auth/plugins";
import { components, internal } from "./_generated/api";
import type { DataModel } from "./_generated/dataModel";
import { query } from "./_generated/server";
import authConfig from "./auth.config";

/**

- Resend email client for sending transactional emails
- Set testMode: false to send to real email addresses
 */
export const resend = new Resend(components.resend, {
  testMode: false, // Set to true to only allow test addresses (<delivered@resend.dev>)
});

const siteUrl = process.env.SITE_URL!;
const nativeAppUrl =
  process.env.NATIVE_APP_URL || "convoexpo-and-nextjs-web-bun-better-auth://";
const nativeAppScheme = process.env.NATIVE_APP_SCHEME || "cityuniversityclub";
const emailFromAddress =
  process.env.EMAIL_FROM_ADDRESS || "Password Reset <onboarding@resend.dev>";

// Wire up internal auth functions for the component
const authFunctions: AuthFunctions = internal.auth;

/**

- Auth component with triggers for user lifecycle events
 */
export const authComponent = createClient<DataModel>(components.betterAuth, {
  authFunctions,
  verbose: process.env.NODE_ENV === "development",
  triggers: {
    user: {
      onCreate: async (_ctx, authUser) => {
        // Called when a new user is created
        // You can create related records here (e.g., profile, settings)
        console.log("User created:", authUser.email);
      },
      onUpdate: async (_ctx,_newUser, _oldUser) => {
        // Called when user data is updated
        // Both old and new documents are available for comparison
      },
      onDelete: async (_ctx, authUser) => {
        // Called when a user is deleted
        // Clean up related records here
        console.log("User deleted:", authUser.email);
      },
    },
  },
});

/**

- Export trigger handlers required by the component
 */
export const { onCreate, onUpdate, onDelete } = authComponent.triggersApi();

/**

- Create Better Auth instance with Convex and Expo plugins
 */
function createAuth(ctx: GenericCtx<DataModel>) {
  return betterAuth({
    baseURL: siteUrl,
    trustedOrigins: [
      siteUrl,
      nativeAppUrl,
      // Expo Go development URLs - always included for development flexibility
      // Using explicit patterns since NODE_ENV may not be reliable in Convex runtime
      "exp://127.0.0.1:*/**", // iOS Simulator
      "exp://192.168.*.*:*/**", // Local network devices (common home/office range)
      "exp://10.*.*.*:*/**", // Alternative local network range
      "exp://localhost:*/**", // Localhost
      "http://localhost:8081", // Expo web development
      // Apple Sign-In requires this origin
      "https://appleid.apple.com",
    ],
    database: authComponent.adapter(ctx),
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: false,
      // Password reset email handler using Resend
      sendResetPassword: async ({ user, url }) => {
        console.log(`[Password Reset] Sending email to: ${user.email}`);
        console.log(`[Password Reset] URL: ${url}`);

        // Send password reset email via Resend
        await resend.sendEmail(requireActionCtx(ctx), {
          from: emailFromAddress,
          to: user.email,
          subject: "Reset your password",
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2>Reset Your Password</h2>
              <p>You requested a password reset for your account.</p>
              <p>Click the button below to reset your password:</p>
              <a href="${url}" style="display: inline-block; background-color: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 16px 0;">
                Reset Password
              </a>
              <p style="color: #666; font-size: 14px;">If you didn't request this, you can safely ignore this email.</p>
              <p style="color: #666; font-size: 14px;">This link will expire in 1 hour.</p>
            </div>
          `,
        });
      },
    },
    socialProviders: {
      github: {
        clientId: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      },
    },
    plugins: [
      expo(),
      convex({
        authConfig,
        jwksRotateOnTokenGenerationError: true,
      }),
      lastLoginMethod(),
      crossDomain({ siteUrl }), // Required for Expo web support
      emailOTP({
        otpLength: 6,
        expiresIn: 300, // 5 minutes
        async sendVerificationOTP({ email, otp, type }) {
          if (type === "forget-password") {
            console.log(`[Password Reset OTP] Sending OTP to: ${email}`);
            console.log(`[Password Reset OTP] Code: ${otp}`);

            // Create deep link that will open the app with OTP pre-filled
            const deepLink = `${nativeAppScheme}://email/verify-reset-code?email=${encodeURIComponent(email)}&otp=${otp}`;

            // Send password reset email with OTP code via Resend
            await resend.sendEmail(requireActionCtx(ctx), {
              from: emailFromAddress,
              to: email,
              subject: "Reset your password - Verification Code",
              html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                  <h2 style="color: #1a365d;">Reset Your Password</h2>
                  <p>You requested a password reset for your account.</p>

                  <div style="background-color: #f7fafc; border-radius: 8px; padding: 24px; margin: 24px 0; text-align: center;">
                    <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">Your verification code is:</p>
                    <div style="font-size: 36px; font-weight: bold; letter-spacing: 8px; color: #1a365d; font-family: monospace;">
                      ${otp}
                    </div>
                    <p style="margin: 12px 0 0 0; color: #666; font-size: 12px;">This code expires in 5 minutes</p>
                  </div>

                  <p style="text-align: center; margin: 24px 0;">
                    <span style="color: #666;">─────────── or ───────────</span>
                  </p>

                  <p style="text-align: center;">
                    <a href="${deepLink}" style="display: inline-block; background-color: #1a365d; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">
                      Open App & Reset Password
                    </a>
                  </p>

                  <p style="color: #666; font-size: 14px; margin-top: 24px;">If you didn't request this, you can safely ignore this email.</p>
                </div>
              `,
            });
          }
        },
      }),
    ],
  });
}

export { createAuth };

/**

- Query to get the current authenticated user
 */
export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    return await authComponent.safeGetAuthUser(ctx);
  },
});
</file>

<file path="packages/backend/convex/chat.ts">
import {
  createThread,
  listUIMessages,
  saveMessage,
  syncStreams,
  vStreamArgs,
} from "@convex-dev/agent";
import { paginationOptsValidator } from "convex/server";
import { v } from "convex/values";

import { components, internal } from "./_generated/api";
import { internalAction, mutation, query } from "./_generated/server";
import { chatAgent } from "./agent";

export const createNewThread = mutation({
  args: {},
  handler: async (ctx) => {
    const threadId = await createThread(ctx, components.agent, {});
    return threadId;
  },
});

export const listMessages = query({
  args: {
    threadId: v.string(),
    paginationOpts: paginationOptsValidator,
    streamArgs: vStreamArgs,
  },
  handler: async (ctx, args) => {
    const paginated = await listUIMessages(ctx, components.agent, args);
    const streams = await syncStreams(ctx, components.agent, args);
    return { ...paginated, streams };
  },
});

export const sendMessage = mutation({
  args: {
    threadId: v.string(),
    prompt: v.string(),
  },
  handler: async (ctx, { threadId, prompt }) => {
    const { messageId } = await saveMessage(ctx, components.agent, {
      threadId,
      prompt,
    });
    await ctx.scheduler.runAfter(0, internal.chat.generateResponseAsync, {
      threadId,
      promptMessageId: messageId,
    });
    return messageId;
  },
});

export const generateResponseAsync = internalAction({
  args: {
    threadId: v.string(),
    promptMessageId: v.string(),
  },
  handler: async (ctx, { threadId, promptMessageId }) => {
    await chatAgent.streamText(
      ctx,
      { threadId },
      { promptMessageId },
      { saveStreamDeltas: true }
    );
  },
});
</file>

<file path="packages/backend/convex/convex.config.ts">
import agent from "@convex-dev/agent/convex.config";
import betterAuth from "@convex-dev/better-auth/convex.config";
import resend from "@convex-dev/resend/convex.config";
import { defineApp } from "convex/server";

const app = defineApp();
app.use(betterAuth);
app.use(agent);
app.use(resend);

export default app;
</file>

<file path="packages/backend/convex/healthCheck.ts">
import { query } from "./_generated/server";

export const get = query({
  handler: async () => {
    return "OK";
  },
});
</file>

<file path="packages/backend/convex/http.ts">
import { httpRouter } from "convex/server";
import { authComponent, createAuth } from "./auth";

const http = httpRouter();

// Register auth routes with CORS enabled for Expo web support
authComponent.registerRoutes(http, createAuth, { cors: true });

export default http;
</file>

<file path="packages/backend/convex/privateData.ts">
import { query } from "./_generated/server";
import { authComponent } from "./auth";

export const get = query({
  args: {},
  handler: async (ctx) => {
    const authUser = await authComponent.safeGetAuthUser(ctx);
    if (!authUser) {
      return {
        message: "Not authenticated",
      };
    }
    return {
      message: "This is private",
    };
  },
});
</file>

<file path="packages/backend/convex/README.md">
# Welcome to your Convex functions directory!

Write your Convex functions here.
See <https://docs.convex.dev/functions> for more.

A query function that takes two arguments looks like:

```ts
// convex/myFunctions.ts
import { query } from "./_generated/server";
import { v } from "convex/values";

export const myQueryFunction = query({
  // Validators for arguments.
  args: {
    first: v.number(),
    second: v.string(),
  },

  // Function implementation.
  handler: async (ctx, args) => {
    // Read the database as many times as you need here.
    // See https://docs.convex.dev/database/reading-data.
    const documents = await ctx.db.query("tablename").collect();

    // Arguments passed from the client are properties of the args object.
    console.log(args.first, args.second);

    // Write arbitrary JavaScript here: filter, aggregate, build derived data,
    // remove non-public properties, or create new objects.
    return documents;
  },
});
```

Using this query function in a React component looks like:

```ts
const data = useQuery(api.myFunctions.myQueryFunction, {
  first: 10,
  second: "hello",
});
```

A mutation function looks like:

```ts
// convex/myFunctions.ts
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const myMutationFunction = mutation({
  // Validators for arguments.
  args: {
    first: v.string(),
    second: v.string(),
  },

  // Function implementation.
  handler: async (ctx, args) => {
    // Insert or modify documents in the database here.
    // Mutations can also read from the database like queries.
    // See https://docs.convex.dev/database/writing-data.
    const message = { body: args.first, author: args.second };
    const id = await ctx.db.insert("messages", message);

    // Optionally, return a value from your mutation.
    return await ctx.db.get("messages", id);
  },
});
```

Using this mutation function in a React component looks like:

```ts
const mutation = useMutation(api.myFunctions.myMutationFunction);
function handleButtonPress() {
  // fire and forget, the most common way to use mutations
  mutation({ first: "Hello!", second: "me" });
  // OR
  // use the result once the mutation has completed
  mutation({ first: "Hello!", second: "me" }).then((result) =>
    console.log(result),
  );
}
```

Use the Convex CLI to push your functions to a deployment. See everything
the Convex CLI can do by running `npx convex -h` in your project root
directory. To learn more, launch the docs with `npx convex docs`.
</file>

<file path="packages/backend/convex/rsvps.ts">
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { authComponent } from "./auth";

/**

- Get the current user's RSVP for a specific event
- Returns the RSVP document or null if not found
 */
export const getUserRsvpForEvent = query({
  args: {
    eventId: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await authComponent.safeGetAuthUser(ctx);
    if (!user) {
      return null;
    }

    const rsvp = await ctx.db
      .query("rsvps")
      .withIndex("by_user_and_event", (q) =>
        q.eq("userId", user._id).eq("eventId", args.eventId)
      )
      .unique();

    return rsvp;
  },
});

/**

- Get all RSVPs for the current user
 */
export const getUserRsvps = query({
  args: {},
  handler: async (ctx) => {
    const user = await authComponent.safeGetAuthUser(ctx);
    if (!user) {
      return [];
    }

    const rsvps = await ctx.db
      .query("rsvps")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .collect();

    return rsvps;
  },
});

/**

- Get the count of RSVPs for a specific event
- Useful for showing capacity/availability
 */
export const getEventRsvpCount = query({
  args: {
    eventId: v.string(),
  },
  handler: async (ctx, args) => {
    const rsvps = await ctx.db
      .query("rsvps")
      .withIndex("by_event", (q) => q.eq("eventId", args.eventId))
      .collect();

    // Sum up all guests across RSVPs
    const totalGuests = rsvps.reduce((sum, rsvp) => sum + rsvp.guests, 0);

    return {
      rsvpCount: rsvps.length,
      totalGuests,
    };
  },
});

/**

- Create a new RSVP for an event
- Prevents duplicate RSVPs for the same user+event
 */
export const createRsvp = mutation({
  args: {
    eventId: v.string(),
    guests: v.number(),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const user = await authComponent.safeGetAuthUser(ctx);
    if (!user) {
      throw new Error("You must be logged in to RSVP");
    }

    // Check for existing RSVP
    const existingRsvp = await ctx.db
      .query("rsvps")
      .withIndex("by_user_and_event", (q) =>
        q.eq("userId", user._id).eq("eventId", args.eventId)
      )
      .unique();

    if (existingRsvp) {
      throw new Error("You have already RSVP'd to this event");
    }

    // Validate guests count
    if (args.guests < 1 || args.guests > 10) {
      throw new Error("Number of guests must be between 1 and 10");
    }

    // Create the RSVP
    const rsvpId = await ctx.db.insert("rsvps", {
      userId: user._id,
      eventId: args.eventId,
      guests: args.guests,
      notes: args.notes,
      createdAt: Date.now(),
    });

    return { rsvpId, success: true };
  },
});

/**

- Cancel/delete an RSVP for an event (US-010)
 */
export const cancelRsvp = mutation({
  args: {
    eventId: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await authComponent.safeGetAuthUser(ctx);
    if (!user) {
      throw new Error("You must be logged in to cancel an RSVP");
    }

    // Find the user's RSVP for this event
    const rsvp = await ctx.db
      .query("rsvps")
      .withIndex("by_user_and_event", (q) =>
        q.eq("userId", user._id).eq("eventId", args.eventId)
      )
      .unique();

    if (!rsvp) {
      throw new Error("No RSVP found for this event");
    }

    // Delete the RSVP
    await ctx.db.delete(rsvp._id);

    return { success: true };
  },
});

/**

- Update an existing RSVP (e.g., change number of guests)
 */
export const updateRsvp = mutation({
  args: {
    eventId: v.string(),
    guests: v.number(),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const user = await authComponent.safeGetAuthUser(ctx);
    if (!user) {
      throw new Error("You must be logged in to update an RSVP");
    }

    // Find the user's RSVP for this event
    const rsvp = await ctx.db
      .query("rsvps")
      .withIndex("by_user_and_event", (q) =>
        q.eq("userId", user._id).eq("eventId", args.eventId)
      )
      .unique();

    if (!rsvp) {
      throw new Error("No RSVP found for this event");
    }

    // Validate guests count
    if (args.guests < 1 || args.guests > 10) {
      throw new Error("Number of guests must be between 1 and 10");
    }

    // Update the RSVP
    await ctx.db.patch(rsvp._id, {
      guests: args.guests,
      notes: args.notes,
    });

    return { success: true };
  },
});
</file>

<file path="packages/backend/convex/schema.ts">
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  todos: defineTable({
    text: v.string(),
    completed: v.boolean(),
  }),

  // RSVPs for events
  rsvps: defineTable({
    userId: v.string(), // User ID from better-auth
    eventId: v.string(), // Event ID (matches hardcoded event.id)
    guests: v.number(), // Number of guests (1-5)
    notes: v.optional(v.string()), // Special requirements
    createdAt: v.number(), // Timestamp
  })
    .index("by_user", ["userId"])
    .index("by_event", ["eventId"])
    .index("by_user_and_event", ["userId", "eventId"]),
});
</file>

<file path="packages/backend/convex/todos.ts">
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getAll = query({
  handler: async (ctx) => {
    return await ctx.db.query("todos").collect();
  },
});

export const create = mutation({
  args: {
    text: v.string(),
  },
  handler: async (ctx, args) => {
    const newTodoId = await ctx.db.insert("todos", {
      text: args.text,
      completed: false,
    });
    return await ctx.db.get("todos", newTodoId);
  },
});

export const toggle = mutation({
  args: {
    id: v.id("todos"),
    completed: v.boolean(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch("todos", args.id, { completed: args.completed });
    return { success: true };
  },
});

export const deleteTodo = mutation({
  args: {
    id: v.id("todos"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete("todos", args.id);
    return { success: true };
  },
});
</file>

<file path="packages/backend/convex/tsconfig.json">
{
  /* This TypeScript project config describes the environment that
   * Convex functions run in and is used to typecheck them.
   * You can modify it, but some settings are required to use Convex.
   */
  "compilerOptions": {
    /* These settings are not required by Convex and can be modified. */
    "allowJs": true,
    "strict": true,
    "moduleResolution": "Bundler",
    "jsx": "react-jsx",
    "skipLibCheck": true,
    "allowSyntheticDefaultImports": true,

    /* These compiler options are required by Convex */
    "target": "ESNext",
    "lib": ["ES2021", "dom"],
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "isolatedModules": true,
    "noEmit": true
  },
  "include": ["./**/*"],
  "exclude": ["./_generated"]
}
</file>

<file path="packages/backend/.gitignore">
.env.local
</file>

<file path="packages/backend/package.json">
{
  "name": "@convoexpo-and-nextjs-web-bun-better-auth/backend",
  "version": "1.0.0",
  "scripts": {
    "dev": "convex dev",
    "dev:setup": "convex dev --configure --until-success"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "@types/node": "^24.3.0",
    "typescript": "catalog:",
    "@convoexpo-and-nextjs-web-bun-better-auth/config": "workspace:*"
  },
  "dependencies": {
    "@ai-sdk/google": "^2.0.52",
    "@better-auth/expo": "catalog:",
    "@convex-dev/agent": "catalog:",
    "@convex-dev/better-auth": "catalog:",
    "@convex-dev/resend": "^0.2.3",
    "ai": "^5.0.117",
    "better-auth": "catalog:",
    "convex": "catalog:",
    "dotenv": "catalog:",
    "zod": "catalog:"
  }
}
</file>

<file path="packages/config/package.json">
{
  "name": "@convoexpo-and-nextjs-web-bun-better-auth/config",
  "version": "0.0.0",
  "private": true
}
</file>

<file path="packages/config/tsconfig.base.json">
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "lib": ["ESNext"],
    "verbatimModuleSyntax": true,
    "strict": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true,
    "noUncheckedIndexedAccess": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "types": ["node", "@cloudflare/workers-types"]
  }
}
</file>

<file path="packages/env/src/native.ts">
import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "EXPO_PUBLIC_",
  client: {
    EXPO_PUBLIC_CONVEX_URL: z.url(),
    EXPO_PUBLIC_CONVEX_SITE_URL: z.url(),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
</file>

<file path="packages/env/src/server.ts">
import "dotenv/config";
import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    BETTER_AUTH_SECRET: z.string().min(32),
    BETTER_AUTH_URL: z.url(),
    CORS_ORIGIN: z.url(),
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
</file>

<file path="packages/env/src/web.ts">
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_CONVEX_URL: z.url(),
    NEXT_PUBLIC_CONVEX_SITE_URL: z.url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL,
    NEXT_PUBLIC_CONVEX_SITE_URL: process.env.NEXT_PUBLIC_CONVEX_SITE_URL,
  },
  emptyStringAsUndefined: true,
});
</file>

<file path="packages/env/package.json">
{
  "name": "@convoexpo-and-nextjs-web-bun-better-auth/env",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "exports": {
    "./web": "./src/web.ts",
    "./native": "./src/native.ts"
  },
  "dependencies": {
    "dotenv": "catalog:",
    "zod": "catalog:",
    "@t3-oss/env-nextjs": "^0.13.1"
  },
  "devDependencies": {
    "typescript": "catalog:",
    "@convoexpo-and-nextjs-web-bun-better-auth/config": "workspace:*",
    "@convoexpo-and-nextjs-web-bun-better-auth/infra": "workspace:*"
  }
}
</file>

<file path="packages/env/tsconfig.json">
{
  "extends": "@convoexpo-and-nextjs-web-bun-better-auth/config/tsconfig.base.json",
  "compilerOptions": {
    "strictNullChecks": true
  }
}
</file>

<file path="packages/infra/alchemy.run.ts">
import alchemy from "alchemy";
import { Nextjs } from "alchemy/cloudflare";
import { config } from "dotenv";

config({ path: "./.env" });
config({ path: "../../apps/web/.env" });

const app = await alchemy("convoexpo-and-nextjs-web-bun-better-auth");

export const web = await Nextjs("web", {
  cwd: "../../apps/web",
  bindings: {
    NEXT_PUBLIC_CONVEX_URL: alchemy.env.NEXT_PUBLIC_CONVEX_URL!,
    NEXT_PUBLIC_CONVEX_SITE_URL: alchemy.env.NEXT_PUBLIC_CONVEX_SITE_URL!,
  },
});

console.log(`Web    -> ${web.url}`);

await app.finalize();
</file>

<file path="packages/infra/package.json">
{
  "name": "@convoexpo-and-nextjs-web-bun-better-auth/infra",
  "private": true,
  "type": "module",
  "scripts": {
    "dev:cloudflare": "alchemy dev",
    "deploy": "alchemy deploy",
    "destroy": "alchemy destroy"
  },
  "dependencies": {
    "dotenv": "catalog:",
    "zod": "catalog:"
  },
  "devDependencies": {
    "typescript": "catalog:",
    "@convoexpo-and-nextjs-web-bun-better-auth/config": "workspace:*",
    "alchemy": "catalog:"
  }
}
</file>

<file path=".gitignore">
# Dependencies
node_modules
.pnp
.pnp.js

# Build outputs

dist
build
*.tsbuildinfo

# Environment variables

.env
.env*.local

# IDEs and editors

.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
.idea
*.swp
*.swo
*~
.DS_Store

# Logs

logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*

# Turbo

.turbo

# Better-T-Stack

.alchemy

# Testing

coverage
.nyc_output

# Storybook

storybook-static
**/storybook.requires.ts

# Misc

*.tgz
.cache
tmp
temp
</file>

<file path="AUTHENTICATION-INVESTIGATION.md">
# Authentication Investigation: Better Auth + Convex + Expo

## Problem Summary

Authentication is failing across all development environments with "Invalid origin" errors. This has been an ongoing issue through multiple debugging sessions without resolution.

---

## Observed Errors

### 1. iOS Simulator (localhost)

```
14/01/2026, 11:49:07 [CONVEX H(POST /api/auth/sign-up/email)] [ERROR]
'2026-01-14T11:49:07.611Z ERROR [Better Auth]: Invalid origin: exp://127.0.0.1:8081'
```

### 2. Expo Go on Physical Device (local network)

```
14/01/2026, 11:56:29 [CONVEX H(POST /api/auth/sign-up/email)] [ERROR]
'2026-01-14T11:56:29.956Z ERROR [Better Auth]: Invalid origin: exp://192.168.1.163:8081'
```

### 3. Web Browser (press W in Metro)

- `GET /api/auth/get-session` - Status 200 but **CORS error**
- `POST /api/auth/sign-in/email` - **CORS error**
- `POST /api/auth/sign-up/email` - **CORS error**

### 4. Development Build Mode

- QR code opens Safari on phone
- Safari shows "can't connect to server" (localhost unreachable from phone)

---

## User-Facing Error

The error shown to users is:
> "Unable to create account. Please try again."

This is unhelpful because:

- It doesn't indicate the actual problem (server-side origin validation)
- "Try again" will produce the same result
- User cannot fix this - it's a configuration issue

---

## Environment Details

### Metro Bundler Output

- Metro waiting on: `exp://192.168.1.163:8081`
- Web waiting on: `http://localhost:8081`
- Mode: "Using Expo Go" (Press S to switch to development build)

### Convex Deployment

- Deployment: `artful-cod-78`
- Site URL: `https://artful-cod-78.convex.site`

### Convex Environment Variables (Current)

```
BETTER_AUTH_SECRET=wdh0RLepFOAuSkdlRpWDwnT3dLOINPgTJC8xV9N1+d0
NATIVE_APP_URL=convoexpo-and-nextjs-web-bun-better-auth://
SITE_URL=http://localhost:3001
```

### App Scheme (from app.config.ts)

```
scheme: "cityuniversityclub"
```

**ISSUE FOUND**: The `NATIVE_APP_URL` env var is `convoexpo-and-nextjs-web-bun-better-auth://` but the actual app scheme is `cityuniversityclub://`

---

## Origins Being Rejected

| Environment | Origin Sent | Current Status |
|------------|-------------|----------------|
| iOS Simulator | `exp://127.0.0.1:8081` | Rejected |
| Expo Go (phone) | `exp://192.168.1.163:8081` | Rejected |
| Web (localhost) | `http://localhost:8081` | CORS Error |
| Production App | `cityuniversityclub://` | Unknown |

---

## Current Configuration Analysis

### 1. Server Auth Config (`packages/backend/convex/auth.ts`)

```typescript
trustedOrigins: [
  siteUrl,  // http://localhost:3001
  nativeAppUrl,  // convoexpo-and-nextjs-web-bun-better-auth:// (WRONG - should be cityuniversityclub://)
  // Expo Go development URLs
  ...(process.env.NODE_ENV === "development"
    ? ["exp://"]
    : []),
],
```

**Issues Found:**

1. `nativeAppUrl` doesn't match actual app scheme
2. `"exp://"` alone may not be working - need to verify pattern syntax

### 2. HTTP Routes (`packages/backend/convex/http.ts`)

```typescript
authComponent.registerRoutes(http, createAuth, { cors: false });
```

**CRITICAL ISSUE**: `cors: false` breaks web browser authentication entirely!

### 3. Native Auth Client (`apps/native/lib/auth-client.ts`)

```typescript
plugins: [
  expoClient({
    scheme: Constants.expoConfig?.scheme as string,
    storagePrefix: Constants.expoConfig?.scheme as string,
    storage: SecureStore,
  }),
  convexClient(),
  lastLoginMethodClient(),
],
```

**Issue**: No conditional handling for web vs native - uses `expoClient` for everything.

### 4. Web Auth Client (`apps/web/src/lib/auth-client.ts`)

```typescript
plugins: [convexClient()],
```

**Issue**: Missing `crossDomainClient()` plugin required for CORS.

---

## Research Findings

### Better Auth trustedOrigins Pattern Syntax

From official documentation:

| Pattern | Description |
|---------|-------------|
| `?` | Matches exactly one character (except `/`) |
| `*` | Matches zero or more characters that don't cross `/` |
| `**` | Matches zero or more characters including `/` |

#### Pattern Examples from Documentation

| Pattern | Matches | Does Not Match |
|---------|---------|----------------|
| `exp://192.168.*.*:*/**` | `exp://192.168.1.100:8081/path` | `exp://10.0.0.29:8081/path` |
| `myapp://` | All URLs starting with `myapp://` | - |
| `exp://` | All URLs starting with `exp://` (prefix matching) | - |

**Key Insight**: For custom schemes like `exp://` or `myapp://`, patterns match against the full URL including paths when wildcards are present, or use **prefix matching** when no wildcards exist.

### Official Better Auth Expo Configuration (from docs)

```typescript
export const auth = betterAuth({
  trustedOrigins: [
    "myapp://",

    // Development mode - Expo's exp:// scheme with local IP ranges
    ...(process.env.NODE_ENV === "development" ? [
      "exp://",                      // Trust all Expo URLs (prefix matching)
      "exp://**",                    // Trust all Expo URLs (wildcard matching)
      "exp://192.168.*.*:*/**",      // Trust 192.168.x.x IP range with any port and path
    ] : [])
  ]
})
```

### Convex + Better Auth Expo Web Support (CRITICAL)

From the Convex Better Auth documentation, to support **both Expo native AND Expo Web**:

#### Server-side changes required

```typescript
import { crossDomain } from "@convex-dev/better-auth/plugins";

const siteUrl = process.env.SITE_URL!;

export const createAuth = (ctx) => betterAuth({
  trustedOrigins: [siteUrl, "your-scheme://"],
  plugins: [
    expo(),
    convex({ authConfig }),
    crossDomain({ siteUrl }),  // REQUIRED for web
  ],
});
```

#### HTTP routes change required

```typescript
// CORS handling is required for client side frameworks
authComponent.registerRoutes(http, createAuth, { cors: true });  // MUST be true for web
```

#### Client-side changes required

```typescript
import { Platform } from "react-native";
import { expoClient } from "@better-auth/expo/client";
import { crossDomainClient } from "@convex-dev/better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL: process.env.EXPO_PUBLIC_CONVEX_SITE_URL,
  plugins: [
    convexClient(),
    // CRITICAL: expoClient and crossDomainClient CANNOT both be included!
    ...(Platform.OS === "web"
      ? [crossDomainClient()]
      : [
          expoClient({
            scheme: Constants.expoConfig?.scheme as string,
            storagePrefix: Constants.expoConfig?.scheme as string,
            storage: SecureStore,
          }),
        ]),
  ],
});
```

### Reference Repo Analysis (`~/gruckion-workdir/convexpo/`)

The reference repo uses a different approach:

- Sets `EXPO_MOBILE_URL` env var to the specific development IP (e.g., `exp://192.168.1.163:8081`)
- Uses `cors: false`
- Has `trustedOrigins: ["https://appleid.apple.com", requireEnv("EXPO_MOBILE_URL")]`

**Problem with this approach**: IP addresses change between devices and network configurations, making it inflexible.

---

## Root Causes Identified

### Issue 1: NATIVE_APP_URL Mismatch

- **Current**: `NATIVE_APP_URL=convoexpo-and-nextjs-web-bun-better-auth://`
- **Required**: `NATIVE_APP_URL=cityuniversityclub://` (matches app.config.ts scheme)

### Issue 2: CORS Disabled

- **Current**: `cors: false` in http.ts
- **Required**: `cors: true` for web browser support

### Issue 3: Missing crossDomain Plugin

- Server needs `crossDomain({ siteUrl })` plugin for web support
- Client needs conditional `crossDomainClient()` vs `expoClient()` based on platform

### Issue 4: Expo Development Origins

- Current config uses `"exp://"` which should work for prefix matching
- However, may need more explicit patterns like `"exp://127.0.0.1:*/**"` and `"exp://192.168.*.*:*/**"`

### Issue 5: Environment Detection

- `process.env.NODE_ENV` may not be `"development"` in Convex environment
- Need to verify how Convex sets this

---

## Recommended Solution

### 1. Fix Environment Variables (Convex)

```bash
npx convex env set NATIVE_APP_URL="cityuniversityclub://"
npx convex env set SITE_URL="http://localhost:8081"  # For Expo web
```

### 2. Update Server Auth Config (`packages/backend/convex/auth.ts`)

```typescript
import { crossDomain } from "@convex-dev/better-auth/plugins";

const siteUrl = process.env.SITE_URL!;
const nativeAppUrl = process.env.NATIVE_APP_URL || "cityuniversityclub://";

function createAuth(ctx: GenericCtx<DataModel>) {
  return betterAuth({
    baseURL: siteUrl,
    trustedOrigins: [
      siteUrl,
      nativeAppUrl,
      // Expo development URLs - explicit patterns
      "exp://127.0.0.1:*/**",      // iOS Simulator
      "exp://192.168.*.*:*/**",    // Local network devices
      "exp://10.*.*.*:*/**",       // Alternative local network range
      "exp://localhost:*/**",      // Localhost
    ],
    database: authComponent.adapter(ctx),
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: false,
    },
    plugins: [
      expo(),
      convex({ authConfig }),
      crossDomain({ siteUrl }),  // ADD THIS
    ],
  });
}
```

### 3. Update HTTP Routes (`packages/backend/convex/http.ts`)

```typescript
authComponent.registerRoutes(http, createAuth, { cors: true });  // CHANGE to true
```

### 4. Update Native Auth Client (`apps/native/lib/auth-client.ts`)

```typescript
import { Platform } from "react-native";
import { expoClient } from "@better-auth/expo/client";
import { crossDomainClient, convexClient } from "@convex-dev/better-auth/client/plugins";
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";

export const authClient = createAuthClient({
  baseURL: env.EXPO_PUBLIC_CONVEX_SITE_URL,
  plugins: [
    convexClient(),
    ...(Platform.OS === "web"
      ? [crossDomainClient()]
      : [
          expoClient({
            scheme: Constants.expoConfig?.scheme as string,
            storagePrefix: Constants.expoConfig?.scheme as string,
            storage: SecureStore,
          }),
        ]),
  ],
});
```

### 5. Verify Metro Config

Ensure `metro.config.js` has:

```javascript
config.resolver.unstable_enablePackageExports = true;
```

---

## Testing Checklist

After implementing changes:

- [ ] iOS Simulator: `exp://127.0.0.1:8081` should work
- [ ] Expo Go on phone: `exp://192.168.x.x:8081` should work
- [ ] Web browser: `http://localhost:8081` should work (no CORS errors)
- [ ] Production build: `cityuniversityclub://` should work

---

## Summary

The authentication failures are caused by **multiple configuration issues**:

1. **Wrong app scheme** in Convex env vars
2. **CORS disabled** which breaks web entirely
3. **Missing crossDomain plugin** required for web support
4. **Client not conditionally switching** between `expoClient` and `crossDomainClient`
5. **Potentially insufficient** trusted origin patterns for development

The fix requires changes to:

- Convex environment variables
- Server auth configuration (add crossDomain plugin)
- HTTP routes (enable CORS)
- Native auth client (conditional plugin loading)

---

## References

- [Better Auth Expo Integration](https://www.better-auth.com/docs/integrations/expo)
- [Convex + Better Auth Expo Guide](https://labs.convex.dev/better-auth/framework-guides/expo)
- [Better Auth Options Reference - trustedOrigins](https://www.better-auth.com/docs/reference/options#trustedorigins)
</file>

<file path="biome.jsonc">
{
  "$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
  "extends": ["ultracite/biome/core"],
  "files": {
    "includes": [
      "!**/convex/_generated",
      "!**/.next",
      "!**/.expo",
      "!**/node_modules",
      "!**/convex/tsconfig.json",
      "!**/.rnstorybook/storybook.requires.ts"
    ]
  },
  "json": {
    "parser": {
      "allowComments": true,
      "allowTrailingCommas": true
    }
  },
  "linter": {
    "rules": {
      "performance": {
        "noNamespaceImport": "off",
        "noBarrelFile": "off"
      },
      "style": {
        "useFilenamingConvention": "off",
        "noNonNullAssertion": "off",
        "noNestedTernary": "off"
      },
      "a11y": {
        "noLabelWithoutControl": "off"
      }
    }
  },
  "overrides": [
    {
      "includes": ["**/convex/**"],
      "linter": {
        "rules": {
          "suspicious": {
            "useAwait": "off"
          }
        }
      }
    }
  ]
}
</file>

<file path="CLAUDE.md">
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
bun install

# Development - run all apps (web, native, backend)
bun run dev

# Development - individual apps
bun run dev:web     # Next.js web app on port 3001
bun run dev:native  # Expo React Native app
bun run dev:server  # Convex backend only

# Initial setup (first time)
bun run dev:setup   # Configure Convex project

# Build and type checking
bun run build
bun run check-types

# Linting and formatting (Biome)
bun biome check --write .

# Cloudflare deployment (from apps/web/)
cd apps/web && bun run alchemy dev    # Local dev
cd apps/web && bun run deploy         # Deploy
cd apps/web && bun run destroy        # Tear down
```

## Architecture

This is a Turborepo monorepo with a shared Convex backend serving both a Next.js web app and an Expo React Native app.

### Workspace Structure

- `apps/web` - Next.js 16 web app (port 3001)
- `apps/native` - Expo/React Native mobile app
- `packages/backend` - Convex functions and schema (`convex/` directory)
- `packages/env` - Typed environment variables (t3-env), exports `env/web` and `env/native`
- `packages/config` - Shared TypeScript config
- `packages/infra` - Alchemy infrastructure for Cloudflare deployment

### Authentication Flow

Better-Auth integrated with Convex:

- Backend: `packages/backend/convex/auth.ts` creates auth client with `@convex-dev/better-auth`
- Web client: `apps/web/src/lib/auth-client.ts` uses Better-Auth React client
- Web server: `apps/web/src/lib/auth-server.ts` provides SSR auth helpers via `convexBetterAuthNextJs`
- Native client: `apps/native/lib/auth-client.ts` uses Better-Auth with Expo SecureStore

The web app wraps children in `ConvexBetterAuthProvider` which handles token synchronization.

### Convex Backend

- Schema defined in `packages/backend/convex/schema.ts`
- Components configured in `convex.config.ts` (betterAuth, agent)
- AI agent setup using `@convex-dev/agent` with Google Gemini (`agent.ts`, `chat.ts`)

### Environment Variables

- Web: `NEXT_PUBLIC_CONVEX_URL`, `NEXT_PUBLIC_CONVEX_SITE_URL`
- Native: `EXPO_PUBLIC_CONVEX_URL`, `EXPO_PUBLIC_CONVEX_SITE_URL`
- Backend: `SITE_URL`, `NATIVE_APP_URL`, `GOOGLE_GENERATIVE_AI_API_KEY`

Copy `.env.local` from `packages/backend/` to both `apps/web/.env` and `apps/native/.env` after setup.

## Code Style

- Biome for linting/formatting with tab indentation and double quotes
- Tailwind CSS v4 with sorted class names (`cn`, `clsx`, `cva` functions)
- Pre-commit hook runs Biome on staged files (lefthook)
</file>

<file path="design.md">
# City University Club - Design System

**Source:** <https://www.cityuniversityclub.co.uk/>
**Extracted:** 11:48

---

## Logo

- **URL:** <https://static.wixstatic.com/media/5e0aaa_0e0a73fe0edb472b8eebfde40d24d47f~mv2.png/v1/fill/w_102,h_102,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20(Instagram%20Post).png>
- **Dimensions:** 102×102px

### Favicons

| Type | URL |
|------|-----|
| icon (192x192) | <https://static.parastorage.com/client/pfavico.ico> |
| shortcut icon | <https://static.parastorage.com/client/pfavico.ico> |
| apple-touch-icon | <https://static.parastorage.com/client/pfavico.ico> |
| favicon.ico | <https://www.cityuniversityclub.co.uk/favicon.ico> |

---

## Colors

### Primary Brand Colors (Visible in Live Site)

These are the colors actually used in the visible design:

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Dark Navy | `#06273a` | rgb(6, 39, 58) | Hero backgrounds, buttons, text on light backgrounds |
| Muted Sage | `#8fa89d` | rgb(143, 168, 157) | Header/nav background, subtle accents |
| Cream | `#fffef8` | rgb(255, 254, 248) | Page backgrounds, text on dark backgrounds |
| White | `#ffffff` | rgb(255, 255, 255) | Input backgrounds, cards on light theme |

### UI Color Applications

| Context | Background | Text | Border |
|---------|------------|------|--------|
| Dark sections (hero, footer) | `#06273a` | `#fffef8` | `#fffef8` (1px) |
| Light sections (forms, content) | `#fffef8` | `#06273a` | `#06273a` (1px) |
| Header/Navigation | `#8fa89d` | `#06273a` | — |
| Primary buttons | `#06273a` | `#fffef8` | — |
| Secondary buttons | `#fffef8` | `#06273a` | `#06273a` |

### Unused CSS Variables (from Wix template)

These exist in the stylesheet but are NOT used in the visible design:

| Color | Hex | CSS Variable | Note |
|-------|-----|--------------|------|
| Deep Brown | `#783600` | `--wst-color-custom-20` | Unused |
| Bright Orange | `#f06c00` | `--wst-color-custom-19` | Unused |
| Golden Yellow | `#f6a800` | `--wst-color-custom-14` | Unused |
| Sky Blue | `#32a7ea` | `--wst-color-fill-base-shade-2` | Unused |

---

## Typography

### Font Families

#### Primary: Cormorant Garamond

- **Variant:** Light
- **Fallbacks:** cormorantgaramond, cormorant garamond
- **Usage:** Headings, display text

#### Secondary: Raleway

- **Usage:** Body text, navigation, captions

#### System Fonts

- **Times New Roman** (fallbacks: times)
- **Helvetica** (fallbacks: Arial, メイリオ, meiryo, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro)
- **Arial**
- **helvetica-w01-roman**

### Type Scale

| Element | Font | Size | Line Height | Weight |
|---------|------|------|-------------|--------|
| Heading 1 (Large) | Cormorant Garamond | 40px (2.50rem) | 0.80 (tight) | — |
| Heading 1 (Bold) | Cormorant Garamond | 40px (2.50rem) | 1.35 | 700 |
| Heading 1 (Medium) | Times New Roman | 35px (2.19rem) | 0.91 (tight) | — |
| Heading 2 | Cormorant Garamond | 22px (1.38rem) | 1.41 | — |
| Body/Nav | Raleway | 15px (0.94rem) | 1.67 (relaxed) | — |
| Subheading | helvetica-w01-roman | 15px (0.94rem) | 1.40 | 700 |
| Link | Raleway | 14px (0.88rem) | 1.79 (relaxed) | — |
| Button | Helvetica | 14px (0.88rem) | — | — |
| Button (Alt) | Arial | 13.33px (0.83rem) | — | — |
| Caption | Raleway | 14px (0.88rem) | 3.57 (relaxed) | — |
| Small Text | Arial | 10px (0.63rem) | — | — |

---

## Spacing System

**Base Unit:** 8px

| Value | Rem | Use Case |
|-------|-----|----------|
| 3px | 0.19rem | Micro spacing |
| 7px | 0.44rem | Tight spacing |
| 8px | 0.50rem | Base unit |
| 9px | 0.56rem | Small |
| 10px | 0.63rem | Small |
| 18px | 1.13rem | Component padding |
| 22px | 1.38rem | Medium gap |
| 26px | 1.63rem | Section padding |
| 27px | 1.69rem | Section padding |
| 34px | 2.13rem | Large gap |
| 43px | 2.69rem | Section spacing |
| 55px | 3.44rem | Large sections |
| 59px | 3.69rem | Large sections |
| 60px | 3.75rem | Section breaks |
| 61px | 3.81rem | Section breaks |

---

## Borders

| Style | Color | Use |
|-------|-------|-----|
| 1px solid | `#fffef8` rgb(255, 254, 248) | Input borders |

---

## Components

### Buttons

#### Primary Button (Off-White)

| State | Background | Text | Border |
|-------|------------|------|--------|
| Default | `#fffef8` | `#000000` | 2px solid rgba(6, 39, 58, 0) |
| Hover | `var(--corvid-hover-background-color)` | — | — |
| Active | `var(--corvid-hover-background-color)` | — | — |

### Text Inputs

| State | Background | Text | Border | Padding |
|-------|------------|------|--------|---------|
| Default | `#06273a` (1% opacity) | `#fffef8` | 1px solid #fffef8 | 3px 3px 3px 5px |
| Focus | `rgba(255,255,255,1)` | — | rgba(163,217,246,1) | — |

**Focus Ring:** `var(--focus-ring-box-shadow)`
**Focus Outline:** rgb(17, 109, 255) solid 2px

---

## Links

| State | Color | Hex |
|-------|-------|-----|
| Default (Visited) | Blue | `#0000ee` |
| Light Theme | Off White | `#fffef8` |
| Dark Theme | Dark Teal | `#06273a` |

---

## Frameworks Detected

| Framework | Details |
|-----------|---------|
| Radix UI | 11 Radix primitives |
| PrimeReact/Vue/NG | 57 Prime components |

---

## CSS Custom Properties Reference

```css
:root {
  /* Primary Brand Colors (ACTUALLY USED) */
  --cuc-navy: #06273a;
  --cuc-sage: #8fa89d;
  --cuc-cream: #fffef8;
  --cuc-white: #ffffff;

  /* Unused Wix Template Variables (kept for reference) */
  --wst-color-custom-20: #783600; /* Deep Brown - UNUSED */
  --wst-color-custom-19: #f06c00; /* Bright Orange - UNUSED */
  --wst-color-custom-14: #f6a800; /* Golden Yellow - UNUSED */
}
```

---

## Design Notes

- **Visual Style:** Sophisticated British private club aesthetic with cool, muted tones
- **Color Palette:** Dark navy/teal paired with muted sage green and cream - creating a refined, understated look reminiscent of traditional London clubs
- **Color Mood:** Cool and professional, NOT warm or earthy
- **Typography:** Serif display font (Cormorant Garamond) for elegance, sans-serif (Raleway) for readability
- **Platform:** Built on Wix with Radix UI and PrimeReact components
- **Important:** The browns/oranges in the Wix CSS variables are template defaults that are NOT used in the actual visible design
</file>

<file path="HEROUI_COMPLIANCE_ANALYSIS.md">
# HeroUI Native Compliance Analysis

This document analyzes the recent refactoring work against HeroUI Native documentation and best practices.

## Executive Summary

The recent refactoring successfully centralized brand colors into `apps/native/theme/colors.ts` and removed code duplication. However, there are opportunities to better align with HeroUI Native's recommended patterns for theming, styling, and composition.

**Overall Assessment: Partially Compliant** - The current implementation works correctly but uses a parallel theming approach rather than HeroUI's CSS variable system.

---

## Current Implementation Analysis

### What Was Done

1. **Created centralized color constants** (`apps/native/theme/colors.ts`):

   ```typescript
   export const CUC_COLORS = {
     navy: "#06273a",
     sage: "#85b09a",
     cream: "#fffef8",
     white: "#ffffff",
   } as const;
   ```

2. **Removed color re-exports** from multiple files to use single source of truth
3. **Added TypeScript types** for color keys and values
4. **Fixed Biome lint errors** related to export patterns

### HeroUI Native's Recommended Approach

HeroUI Native uses a CSS variable-based theming system with semantic color names:

```css
/* HeroUI's approach - semantic CSS variables */
--background: oklch(1 0 0);
--foreground: oklch(0.145 0 0);
--accent: oklch(0.205 0 0);
--accent-foreground: oklch(0.985 0 0);
--surface: oklch(1 0 0);
--surface-foreground: oklch(0.145 0 0);
```

Accessed via:

```typescript
import { useThemeColor } from "heroui-native";

function MyComponent() {
  const backgroundColor = useThemeColor("background");
  const accentColor = useThemeColor("accent");
}
```

---

## Detailed Findings

### 1. Provider Configuration ✅ COMPLIANT

**Current Implementation** (`apps/native/app/_layout.tsx`):

```typescript
<HeroUINativeProvider
  config={{
    textProps: {
      allowFontScaling: false,
    },
  }}
>
```

**Assessment**: The provider is correctly configured at the root level with a single instance, following HeroUI best practices.

**Recommendation**: No changes needed. Configuration object is correctly defined outside the component.

---

### 2. Color/Theming System ⚠️ PARTIALLY COMPLIANT

**Current Approach**:

- Hardcoded `CUC_COLORS` object with brand-specific hex values
- Direct usage: `backgroundColor: CUC_COLORS.navy`
- No integration with HeroUI's CSS variable system

**HeroUI Approach**:

- Semantic CSS variables defined in `global.css`
- `useThemeColor` hook for runtime access
- Built-in dark/light mode support

**Risk Assessment**: LOW RISK

- Current approach works correctly
- Does not break any HeroUI functionality
- Runs in parallel to HeroUI's theming system

**Recommendations**:

| Priority | Action | Impact | Risk |
|----------|--------|--------|------|
| Low | Map CUC_COLORS to custom CSS variables | Enables theme switching | Low |
| Low | Consider `useThemeColor` hook adoption | Better HeroUI integration | Medium |
| None | No immediate changes required | System works as-is | None |

**If Migration Desired** (optional):

Add to `apps/native/global.css`:

```css
:root {
  /* CUC Brand Colors as CSS variables */
  --cuc-navy: #06273a;
  --cuc-sage: #85b09a;
  --cuc-cream: #fffef8;
  --cuc-white: #ffffff;

  /* Mapping to HeroUI semantic tokens */
  --accent: var(--cuc-sage);
  --accent-foreground: var(--cuc-navy);
  --background: var(--cuc-cream);
  --foreground: var(--cuc-navy);
  --surface: var(--cuc-white);
  --surface-foreground: var(--cuc-navy);
}
```

---

### 3. Styling Approach ⚠️ PARTIALLY COMPLIANT

**Current Approach**:

- Heavy use of inline `style` objects with React Native StyleSheet patterns
- Example from `signin.tsx`:

  ```typescript
  <Text style={{
    color: CUC_COLORS.sage,
    fontSize: 14,
    fontWeight: "500",
  }}>
  ```

**HeroUI Approach**:

- Prefers `className` with Tailwind/Uniwind utilities
- `cn()` utility for conditional classes
- Example:

  ```typescript
  <Text className="text-accent text-sm font-medium">
  ```

**Risk Assessment**: MEDIUM RISK

- Changing styling approach requires touching many files
- Could introduce visual regressions
- Benefits are maintainability, not functionality

**Recommendations**:

| Priority | Action | Impact | Risk |
|----------|--------|--------|------|
| None | Keep current inline styles | Working system | None |
| Future | Gradually adopt className on new components | Better consistency | Low |
| Future | Create Tailwind color utilities for CUC colors | Unified approach | Low |

**If Tailwind Integration Desired** (optional):

Add to `apps/native/tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        cuc: {
          navy: "#06273a",
          sage: "#85b09a",
          cream: "#fffef8",
        },
      },
    },
  },
};
```

Then use as: `className="bg-cuc-navy text-cuc-cream"`

---

### 4. Component Composition ✅ COMPLIANT

**Current Usage**:

- `StyledTextInput` and `StyledButton` are custom components wrapping HeroUI primitives
- Proper prop forwarding with refs
- Clean interface extraction

**HeroUI Pattern**:

- Compound components with dot notation (e.g., `Button.Label`)
- `asChild` prop for composition

**Assessment**: Current approach is valid. Custom wrapper components are acceptable when they provide consistent styling and behavior across the app.

**Recommendation**: No changes needed. The abstraction level is appropriate.

---

### 5. Animation Configuration ✅ COMPLIANT

**Current Implementation**:

- Uses `react-native-reanimated` directly for custom animations
- Example from `events/index.tsx`:

  ```typescript
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
  ```

**HeroUI Approach**:

- Built-in `animation` prop on components
- Global animation control via provider

**Assessment**: Direct reanimated usage is fine for custom animations. HeroUI's animation prop is for component-level animations, not custom gestures.

**Recommendation**: No changes needed.

---

### 6. Form Components ✅ COMPLIANT

**Current Implementation** (`components/form.tsx`):

- Custom `StyledTextInput` wrapping base TextInput
- Proper ref forwarding with `forwardRef`
- Clean props interface

**Assessment**: Follows React patterns correctly. The wrapper provides consistent styling and accessibility attributes.

**Recommendation**: No changes needed.

---

## Risk Matrix for Potential Changes

| Change | Benefit | Risk | Effort | Recommendation |
|--------|---------|------|--------|----------------|
| Keep current CUC_COLORS | None (already done) | None | None | ✅ Keep |
| Add CSS variables | Theme switching | Low | Low | 🔄 Optional |
| Use `useThemeColor` | HeroUI alignment | Medium | Medium | ⏸️ Defer |
| Convert to className | Consistency | Medium | High | ⏸️ Defer |
| Add Tailwind colors | Better DX | Low | Low | 🔄 Optional |

---

## Conclusion

### What's Working Well

1. **Centralized color management** - Single source of truth in `theme/colors.ts`
2. **Type safety** - Proper TypeScript types for colors
3. **Provider setup** - Correctly configured HeroUINativeProvider
4. **Component abstraction** - Clean form component wrappers
5. **Animation usage** - Appropriate use of reanimated

### No Breaking Changes Required

The current implementation does not conflict with HeroUI Native. It runs a parallel theming system that:

- Works correctly
- Is maintainable
- Is type-safe
- Does not break any HeroUI functionality

### Optional Future Enhancements

If the team wants deeper HeroUI integration in the future:

1. **Phase 1** (Low effort): Add CUC colors to `global.css` as CSS variables
2. **Phase 2** (Medium effort): Create a custom hook `useCUCColor()` that mirrors `useThemeColor`
3. **Phase 3** (High effort): Gradually migrate inline styles to className-based styling

These phases are optional and should be driven by specific needs (e.g., dark mode support, design system consistency).

---

## Files Reviewed

- `apps/native/theme/colors.ts`
- `apps/native/components/form.tsx`
- `apps/native/app/_layout.tsx`
- `apps/native/global.css`
- `apps/native/contexts/app-theme-context.tsx`
- `apps/native/app/(auth)/email/signin.tsx`
- `apps/native/app/(auth)/email/signup.tsx`
- `apps/native/app/(auth)/email/(reset)/reset-password.tsx`
- `apps/native/app/(tabs)/events/index.tsx`

## HeroUI Documentation Consulted

- Provider configuration and best practices
- Theming system (CSS variables, useThemeColor)
- Design principles (semantic intent, composition)
- Styling approaches (className, StyleSheet, cn utility)
- Animation configuration
- Component composition patterns
</file>

<file path="HEROUI_THEMING_MIGRATION_PLAN.md">
# HeroUI Native Theming Migration Plan

This document outlines the migration from hardcoded `CUC_COLORS` to HeroUI Native's idiomatic theming system with light/dark mode support.

## Idiomatic Approach (Per HeroUI Documentation)

**Primary method: `className` with Tailwind CSS utilities**

> "HeroUI Native is built with `className` as the go-to styling solution."
> — [HeroUI Native Styling Docs](https://v3.heroui.com/docs/native/getting-started/styling)

**Secondary method: `useThemeColor` hook** — Only for scenarios where className cannot be used (icons, third-party components, dynamic calculations).

**DO NOT create custom hook wrappers** — Use `useThemeColor` directly from `heroui-native`.

---

## Current Brand Colors (Baseline - Must Be Preserved)

| Color Name | Hex Value | Current Usage |
|------------|-----------|---------------|
| Navy | `#06273a` | Headers, tab bar, text on light bg, overlays |
| Sage | `#85b09a` | Accent text, links, highlights |
| Cream | `#fffef8` | Page backgrounds, text on dark bg |
| White | `#ffffff` | Cards, inputs, surfaces |
| Muted | `#666666` | Secondary text |
| Border | `#e5e5e5` | Input borders |

---

## Phase 1: Define CSS Variables in global.css

### File: `apps/native/global.css`

```css
@import "tailwindcss";
@import "uniwind";
@import "heroui-native/styles";

@source "./node_modules/heroui-native/lib";

/* ============================================
   City University Club Brand Theme

   These CSS variables integrate with HeroUI's
   theming system. Use className with Tailwind
   utilities (bg-background, text-foreground, etc.)
   ============================================ */

:root {
  /* Brand constants (theme-independent) */
  --cuc-navy: #06273a;
  --cuc-sage: #85b09a;
  --cuc-cream: #fffef8;

  /* Light mode semantic tokens */
  --background: #fffef8;           /* cream - page backgrounds */
  --foreground: #06273a;           /* navy - primary text */
  --accent: #85b09a;               /* sage - links, highlights */
  --accent-foreground: #06273a;    /* navy - text on accent bg */
  --surface: #ffffff;              /* white - cards, inputs */
  --surface-foreground: #06273a;   /* navy - text on surfaces */
  --muted: #666666;                /* gray - secondary text */
  --border: #e5e5e5;               /* light gray - borders */

  /* Primary brand (locked - always navy for tab bar, headers) */
  --primary: #06273a;
  --primary-foreground: #fffef8;
}

.dark {
  /* Dark mode semantic tokens */
  --background: #06273a;           /* navy - page backgrounds */
  --foreground: #fffef8;           /* cream - primary text */
  --accent: #85b09a;               /* sage - links, highlights */
  --accent-foreground: #06273a;    /* navy - text on accent bg */
  --surface: #0a3d54;              /* lighter navy - cards */
  --surface-foreground: #fffef8;   /* cream - text on surfaces */
  --muted: #85b09a;                /* sage - secondary text */
  --border: #1a4d64;               /* dark blue - borders */

  /* Primary brand stays the same */
  --primary: #06273a;
  --primary-foreground: #fffef8;
}
```

---

## Phase 2: Migration Patterns

### Pattern A: Backgrounds (Use className)

**Before:**

```tsx
<View style={{ backgroundColor: CUC_COLORS.cream }}>
```

**After:**

```tsx
<View className="bg-background">
```

### Pattern B: Text Colors (Use className)

**Before:**

```tsx
<Text style={{ color: CUC_COLORS.navy, fontSize: 16, fontWeight: "600" }}>
```

**After:**

```tsx
<Text className="text-foreground text-base font-semibold">
```

### Pattern C: Icons (Use useThemeColor - only exception)

**Before:**

```tsx
<Ionicons color={CUC_COLORS.navy} name="home" size={24} />
```

**After:**

```tsx
import { useThemeColor } from "heroui-native";

const foreground = useThemeColor("foreground");
<Ionicons color={foreground} name="home" size={24} />
```

### Pattern D: Mixed (className for colors, style for layout)

**Before:**

```tsx
<View style={{
  backgroundColor: CUC_COLORS.white,
  borderRadius: 12,
  padding: 16,
  shadowColor: "#000",
  shadowOpacity: 0.1,
}}>
```

**After:**

```tsx
<View
  className="bg-surface"
  style={{
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
  }}
>
```

### Pattern E: Conditional Colors (Use useThemeColor for dynamic scenarios)

**Before:**

```tsx
backgroundColor: featured ? CUC_COLORS.navy : CUC_COLORS.white,
```

**After:**

```tsx
const primary = useThemeColor("primary");
const surface = useThemeColor("surface");
// ...
backgroundColor: featured ? primary : surface,
```

---

## Phase 3: Color Mapping Reference

| Old Code | New className | New useThemeColor | When to Use |
|----------|---------------|-------------------|-------------|
| `CUC_COLORS.cream` (bg) | `bg-background` | `useThemeColor("background")` | className preferred |
| `CUC_COLORS.navy` (text) | `text-foreground` | `useThemeColor("foreground")` | className for Text, hook for Icons |
| `CUC_COLORS.navy` (bg) | `bg-primary` | `useThemeColor("primary")` | Tab bar, headers (brand-locked) |
| `CUC_COLORS.sage` | `text-accent` / `bg-accent` | `useThemeColor("accent")` | Accent elements |
| `CUC_COLORS.white` | `bg-surface` | `useThemeColor("surface")` | Cards, inputs |
| `"#666"` / `"#888"` | `text-muted` | `useThemeColor("muted")` | Secondary text |
| `"#e5e5e5"` | `border-border` | `useThemeColor("border")` | Borders |

---

## Phase 4: Files to Update (27 files)

### Files with Local CUC_COLORS Duplicates (Remove constant, use theme)

- `app/(tabs)/_layout.tsx`
- `app/(auth)/landing.tsx`
- `components/ExternalLinkButton.tsx`

### Files Importing from @/theme/colors (Update imports, use theme)

- `components/form.tsx`
- `components/CategoryFilter.tsx`
- `components/MembershipCard.tsx`
- `app/(tabs)/index.tsx`
- `app/(tabs)/events/index.tsx`
- `app/(tabs)/events/[id].tsx`
- `app/(tabs)/menu/index.tsx`
- `app/(tabs)/menu/[category].tsx`
- `app/(tabs)/menu/_layout.tsx`
- `app/(tabs)/more/index.tsx`
- `app/(tabs)/more/membership.tsx`
- `app/(tabs)/more/about.tsx`
- `app/(tabs)/more/bugle.tsx`
- `app/(tabs)/more/contact.tsx`
- `app/(tabs)/more/dining-room.tsx`
- `app/(tabs)/more/fabric-fund.tsx`
- `app/(tabs)/more/reciprocal-clubs.tsx`
- `app/(auth)/email/_layout.tsx`
- `app/(auth)/email/signin.tsx`
- `app/(auth)/email/signup.tsx`
- `app/(auth)/email/(reset)/request-password-reset.tsx`
- `app/(auth)/email/(reset)/reset-password.tsx`
- `app/(auth)/email/(reset)/verify-reset-code.tsx`

### Files to Delete

- `theme/colors.ts`
- `theme/index.ts`

---

## Phase 5: Subagent Work Distribution

### Subagent 1: Foundation + Core Components

- `global.css` (CSS variables)
- `components/form.tsx`
- `components/CategoryFilter.tsx`
- `components/MembershipCard.tsx`
- `components/ExternalLinkButton.tsx`

### Subagent 2: Tab Layouts + Menu

- `app/(tabs)/_layout.tsx`
- `app/(tabs)/index.tsx`
- `app/(tabs)/menu/_layout.tsx`
- `app/(tabs)/menu/index.tsx`
- `app/(tabs)/menu/[category].tsx`

### Subagent 3: Events + More (part 1)

- `app/(tabs)/events/index.tsx`
- `app/(tabs)/events/[id].tsx`
- `app/(tabs)/more/index.tsx`
- `app/(tabs)/more/membership.tsx`

### Subagent 4: More Screens (part 2)

- `app/(tabs)/more/about.tsx`
- `app/(tabs)/more/bugle.tsx`
- `app/(tabs)/more/contact.tsx`
- `app/(tabs)/more/dining-room.tsx`
- `app/(tabs)/more/fabric-fund.tsx`
- `app/(tabs)/more/reciprocal-clubs.tsx`

### Subagent 5: Auth Screens

- `app/(auth)/landing.tsx`
- `app/(auth)/_layout.tsx`
- `app/(auth)/email/_layout.tsx`
- `app/(auth)/email/signin.tsx`
- `app/(auth)/email/signup.tsx`
- `app/(auth)/email/(reset)/request-password-reset.tsx`
- `app/(auth)/email/(reset)/reset-password.tsx`
- `app/(auth)/email/(reset)/verify-reset-code.tsx`

---

## Phase 6: Verification Protocol

After EACH subagent batch:

1. Run `bun run check-types` - must pass with no errors
2. Run `bun biome check --write .` - must pass with no errors
3. Take iOS simulator screenshot - compare to baseline
4. UI must be IDENTICAL to before (this is a refactor, not a redesign)

---

## Phase 7: Add Theme Toggle (After Migration)

Add theme toggle to More screen using existing `AppThemeContext`:

```tsx
import { Switch } from "react-native";
import { useThemeColor } from "heroui-native";
import { useAppTheme } from "@/contexts/app-theme-context";

// In More screen, add before Sign Out:
const { colorScheme, toggleColorScheme } = useAppTheme();
const foreground = useThemeColor("foreground");
const muted = useThemeColor("muted");

<View className="bg-surface rounded-xl p-4 mb-3 flex-row items-center justify-between">
  <View className="flex-row items-center gap-3.5">
    <View className="w-11 h-11 rounded-full bg-foreground/10 items-center justify-center">
      <Ionicons
        color={foreground}
        name={colorScheme === "dark" ? "moon" : "sunny"}
        size={22}
      />
    </View>
    <View>
      <Text className="text-foreground text-base font-medium">Dark Mode</Text>
      <Text className="text-muted text-sm mt-0.5">
        {colorScheme === "dark" ? "On" : "Off"}
      </Text>
    </View>
  </View>
  <Switch
    value={colorScheme === "dark"}
    onValueChange={toggleColorScheme}
  />
</View>
```

---

## Important Rules

1. **UI Must Not Change** — This is a refactor. The visual appearance must remain identical by using the exact same hex color values in CSS variables.

2. **className is Primary** — Use Tailwind utilities (`bg-background`, `text-foreground`) as the default approach.

3. **useThemeColor for Icons Only** — The hook is only for `Ionicons` and components that don't accept className.

4. **NO Custom Hook Wrappers** — Do NOT create `useCUCTheme()` or any wrapper. Use `useThemeColor` directly from `heroui-native`.

5. **Verify After Each Batch** — Run type check, lint, and compare screenshots before proceeding.

---

## Cleanup After Migration

1. Delete `apps/native/theme/colors.ts`
2. Delete `apps/native/theme/index.ts`
3. Verify no remaining `CUC_COLORS` references: `grep -r "CUC_COLORS" apps/native/`
</file>

<file path="KEYBOARD_FORM_IMPROVEMENTS.md">
# Keyboard & Form Improvements Plan

This document outlines the planned improvements to keyboard handling and form submission behavior in the native Expo app.

## Problem Statement

When using the iOS simulator (and native devices), users cannot submit the login form by pressing Enter/Return on the keyboard. They must physically tap the "Sign In" button. This is a poor user experience, especially when using a hardware keyboard.

## Features to Implement

| # | Feature | Description | Platform |
|---|---------|-------------|----------|
| 1 | **Enter/Return key submission** | Pressing Enter/Return submits the login form | iOS, Android, Web |
| 2 | **Keyboard toolbar** | Previous/Next/Done buttons above keyboard for field navigation | iOS, Android |
| 3 | **Auto-scroll to focused input** | Content scrolls automatically when keyboard opens | iOS, Android |
| 4 | **Dismiss keyboard on drag** | Swipe down to dismiss the keyboard | iOS, Android |
| 5 | **Cross-platform support** | All features work appropriately on each platform | All |

## Technical Approach

### React 19: No forwardRef Required

React 19 (which we're using - v19.1.0) deprecates `forwardRef`. Refs can now be passed directly as props:

```tsx
// React 19 - No forwardRef wrapper needed
function StyledTextInput({ label, ref, ...props }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput ref={ref} {...props} />
    </View>
  );
}
```

### Expo Platform-Specific File Extensions

Following Expo's official documentation, we use platform-specific file extensions:

- `Component.tsx` — Web bundler picks this (fallback)
- `Component.native.tsx` — Metro bundler picks this (iOS + Android)

This approach:

- Zero runtime overhead (resolved at build time)
- Perfect tree-shaking (web bundle never sees native-only code)
- Type-safe (each file has proper types for its platform)
- Official Expo/React Native pattern

### Library: react-native-keyboard-controller

Already installed (v1.18.5). Provides:

- `KeyboardProvider` — Root wrapper for keyboard functionality
- `KeyboardAwareScrollView` — Auto-scrolls to focused input
- `KeyboardToolbar` — Previous/Next/Done navigation buttons
- `KeyboardGestureArea` — Dismiss keyboard on drag (Android 11+)

**Note:** This library only supports iOS and Android, not web. We handle this with platform-specific files.

---

## Files to Create

### 1. `apps/native/components/keyboard/KeyboardAwareForm.native.tsx`

Native implementation using react-native-keyboard-controller.

```tsx
import { ReactNode } from "react";
import {
  KeyboardAwareScrollView,
  KeyboardToolbar,
} from "react-native-keyboard-controller";
import { StyleSheet } from "react-native";

interface KeyboardAwareFormProps {
  children: ReactNode;
  bottomOffset?: number;
}

export function KeyboardAwareForm({
  children,
  bottomOffset = 62
}: KeyboardAwareFormProps) {
  return (
    <>
      <KeyboardAwareScrollView
        bottomOffset={bottomOffset}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </KeyboardAwareScrollView>
      <KeyboardToolbar>
        <KeyboardToolbar.Prev />
        <KeyboardToolbar.Next />
        <KeyboardToolbar.Done />
      </KeyboardToolbar>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
```

### 2. `apps/native/components/keyboard/KeyboardAwareForm.tsx`

Web fallback using standard ScrollView.

```tsx
import { ReactNode } from "react";
import { ScrollView, StyleSheet } from "react-native";

interface KeyboardAwareFormProps {
  children: ReactNode;
  bottomOffset?: number;
}

export function KeyboardAwareForm({
  children,
  bottomOffset: _bottomOffset, // Unused on web
}: KeyboardAwareFormProps) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  );
  // No KeyboardToolbar on web - browsers handle keyboard natively
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
```

### 3. `apps/native/components/keyboard/index.ts`

Re-export for clean imports.

```tsx
export { KeyboardAwareForm } from "./KeyboardAwareForm";
```

---

## Files to Modify

### 1. `apps/native/app/_layout.tsx`

**Change:** Wrap app with `KeyboardProvider` from react-native-keyboard-controller.

**Current state:** No KeyboardProvider

**Required change:** Add KeyboardProvider wrapper (only on native platforms)

```tsx
import { KeyboardProvider } from "react-native-keyboard-controller";

// Wrap the root layout content with KeyboardProvider
<KeyboardProvider>
  {/* existing app content */}
</KeyboardProvider>
```

**Note:** May need platform-specific handling since KeyboardProvider is native-only.

---

### 2. `apps/native/components/form.tsx`

**Change:** Update `StyledTextInput` to accept keyboard-related props and ref.

**Current props (lines 66-86):**

```tsx
export function StyledTextInput({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  autoCorrect,
  textContentType,
  autoComplete,
}: { ... })
```

**New props to add:**

```tsx
export function StyledTextInput({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  autoCorrect,
  textContentType,
  autoComplete,
  // NEW: Keyboard navigation props
  ref,                    // React 19 style - no forwardRef needed
  returnKeyType,          // "next" | "go" | "done" | "search" | "send"
  onSubmitEditing,        // Callback when Enter/Return pressed
  blurOnSubmit,           // Whether to blur on submit (default: true)
}: { ... })
```

**Forward these props to the underlying TextInput:**

```tsx
<TextInput
  ref={ref}
  returnKeyType={returnKeyType}
  onSubmitEditing={onSubmitEditing}
  blurOnSubmit={blurOnSubmit}
  // ... existing props
/>
```

---

### 3. `apps/native/app/(auth)/email/signin.tsx`

**Change:** Implement keyboard-aware form with Enter key submission.

**Current structure (lines 89-167):**

- Uses `FormContainer` (basic View wrapper)
- Two `StyledTextInput` components (email, password)
- `StyledButton` for submission
- No keyboard navigation

**New structure:**

```tsx
import { useRef } from "react";
import { TextInput } from "react-native";
import { KeyboardAwareForm } from "@/components/keyboard";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Ref for focusing password field
  const passwordRef = useRef<TextInput>(null);

  const handleSignIn = async () => { /* existing logic */ };

  return (
    <KeyboardAwareForm>
      <FormHeader
        title="Welcome Back"
        description="Sign in to access your membership and exclusive club features"
      />

      <StyledTextInput
        label="Email Address"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="emailAddress"
        autoComplete="email"
        // NEW: Keyboard navigation
        returnKeyType="next"
        blurOnSubmit={false}
        onSubmitEditing={() => passwordRef.current?.focus()}
      />

      <StyledTextInput
        ref={passwordRef}
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        textContentType="password"
        autoComplete="password"
        // NEW: Submit on Enter
        returnKeyType="go"
        onSubmitEditing={handleSignIn}
      />

      <View style={{ marginTop: 8 }}>
        <StyledButton
          onPress={handleSignIn}
          label="Sign In"
          isLoading={isLoading}
        />
      </View>

      {/* ... rest of component (forgot password link, sign up link) */}
    </KeyboardAwareForm>
  );
}
```

---

### 4. `apps/native/app/(auth)/email/signup.tsx`

**Change:** Same pattern as signin.tsx for the signup form.

**Current structure (lines 96-180):**

- Uses `KeyboardAvoidingView` + `ScrollView`
- Four `StyledTextInput` components (name, email, password, confirmPassword)
- No keyboard navigation between fields

**New structure:**

- Replace `KeyboardAvoidingView` + `ScrollView` with `KeyboardAwareForm`
- Add refs for each field after the first
- Chain `onSubmitEditing` handlers: name → email → password → confirmPassword → submit
- Use `returnKeyType="next"` for all fields except last
- Use `returnKeyType="go"` on confirmPassword field

```tsx
const emailRef = useRef<TextInput>(null);
const passwordRef = useRef<TextInput>(null);
const confirmPasswordRef = useRef<TextInput>(null);

// Field chain:
// Name:            returnKeyType="next"  → focus email
// Email:           returnKeyType="next"  → focus password
// Password:        returnKeyType="next"  → focus confirmPassword
// ConfirmPassword: returnKeyType="go"    → handleSignUp
```

---

## Summary of Changes

| File | Action | Description |
|------|--------|-------------|
| `components/keyboard/KeyboardAwareForm.native.tsx` | **Create** | Native keyboard handling with toolbar |
| `components/keyboard/KeyboardAwareForm.tsx` | **Create** | Web fallback with basic ScrollView |
| `components/keyboard/index.ts` | **Create** | Re-exports |
| `app/_layout.tsx` | **Modify** | Add KeyboardProvider wrapper |
| `components/form.tsx` | **Modify** | Add ref, returnKeyType, onSubmitEditing, blurOnSubmit props |
| `app/(auth)/email/signin.tsx` | **Modify** | Use KeyboardAwareForm, add field refs and keyboard handlers |
| `app/(auth)/email/signup.tsx` | **Modify** | Same pattern as signin.tsx |

---

## Testing Plan

### iOS Simulator

1. Open sign-in screen
2. Tap email field → keyboard appears with "Next" button
3. Press Enter/Return → focus moves to password field
4. Press Enter/Return → form submits
5. Verify Previous/Next/Done toolbar appears above keyboard
6. Verify scrolling when keyboard covers input

### Android Emulator

1. Same tests as iOS
2. Verify KeyboardGestureArea allows swipe-to-dismiss (Android 11+)

### Web Browser

1. Open sign-in screen
2. Tab between fields works
3. Press Enter in password field → form submits
4. No JavaScript errors from native-only imports

---

## Dependencies

Already installed:

- `react-native-keyboard-controller`: ^1.18.5
- `react-native-reanimated`: ~4.1.1 (required by keyboard-controller)
- `react`: 19.1.0 (supports ref as prop)

No new dependencies required.

---

## References

- [Expo Platform-Specific Modules](https://docs.expo.dev/router/advanced/platform-specific-modules/)
- [React Native TextInput](https://reactnative.dev/docs/textinput)
- [react-native-keyboard-controller Docs](https://kirillzyusko.github.io/react-native-keyboard-controller/)
- [React 19 ref as prop](https://react.dev/blog/2024/12/05/react-19)
</file>

<file path="LAST_LOGIN_METHOD_IMPLEMENTATION_PLAN.md">
# Last Login Method Implementation Plan

## Cross-Platform Authentication for Expo (Native + Web)

This document outlines the complete implementation plan for adding the `lastLoginMethod` feature to work correctly on both native (iOS/Android) and web platforms when running an Expo application with Better Auth via Convex.

---

## Table of Contents

1. [Problem Statement](#problem-statement)
2. [Research Findings](#research-findings)
3. [Architecture Overview](#architecture-overview)
4. [Implementation Details](#implementation-details)
5. [Files to Modify](#files-to-modify)
6. [Step-by-Step Implementation](#step-by-step-implementation)
7. [Testing Plan](#testing-plan)
8. [Sources](#sources)

---

## Problem Statement

### Current Issue

The `lastLoginMethodClient` plugin was imported from `better-auth/client/plugins`, which is the **web version** that uses browser cookies. In React Native, `document.cookie` doesn't exist, causing `authClient.getLastUsedLoginMethod()` to always return `null`.

### Requirements

1. **Native apps (iOS/Android)**: Must use `expo-secure-store` for persistent storage
2. **Web apps**: Must use cookies for storage (standard web approach)
3. **Both platforms**: Must support the `lastLoginMethod` feature with the same API
4. **Constraint**: `expoClient` and `crossDomainClient` plugins **cannot coexist** in the same client instance

---

## Research Findings

### Key Documentation Sources

| Source | Key Finding |
|--------|-------------|
| [Better Auth Expo Docs](https://www.better-auth.com/docs/integrations/expo) | Expo supports both native and web apps |
| [Convex Better Auth Expo Guide](https://labs.convex.dev/better-auth/framework-guides/expo) | Platform-specific plugin loading required |
| [GitHub Issue #6409](https://github.com/better-auth/better-auth/issues/6409) | lastLoginMethod incompatible with Expo native (fixed in PR #6413) |
| [@better-auth/expo npm](https://www.npmjs.com/package/@better-auth/expo) | Dedicated Expo plugins available |

### Critical Constraints

1. **Plugin Exclusivity**: From the Convex docs:
   > "Note that the expoClient and crossDomainClient plugins cannot both be included in the client instance at the same time."

2. **Platform Detection**: Must use `Platform.OS` from `react-native` to conditionally load plugins

3. **CORS Requirement**: Web apps require `{ cors: true }` on the server route registration

4. **Import Paths**:
   - Native: `@better-auth/expo/plugins` for `lastLoginMethodClient`
   - Web: `better-auth/client/plugins` for `lastLoginMethodClient`

---

## Architecture Overview

### Plugin Matrix

| Plugin | Native (iOS/Android) | Web | Import Path |
|--------|---------------------|-----|-------------|
| `convexClient` | ✅ | ✅ | `@convex-dev/better-auth/client/plugins` |
| `expoClient` | ✅ | ❌ | `@better-auth/expo/client` |
| `crossDomainClient` | ❌ | ✅ | `@convex-dev/better-auth/client/plugins` |
| `lastLoginMethodClient` (Expo) | ✅ | ❌ | `@better-auth/expo/plugins` |
| `lastLoginMethodClient` (Web) | ❌ | ✅ | `better-auth/client/plugins` |

### Server Plugin Matrix

| Plugin | Purpose | Import Path |
|--------|---------|-------------|
| `expo()` | Native OAuth/deep links | `@better-auth/expo` |
| `convex()` | Convex database adapter | `@convex-dev/better-auth/plugins` |
| `crossDomain()` | Web cross-origin support | `@convex-dev/better-auth/plugins` |
| `lastLoginMethod()` | Track auth method (cookies) | `better-auth/plugins` |

---

## Implementation Details

### Server-Side Changes

#### 1. `packages/backend/convex/auth.ts`

**Current state:**

```typescript
plugins: [
  expo(),
  convex({
    authConfig,
    jwksRotateOnTokenGenerationError: true,
  }),
  lastLoginMethod(),
],
```

**Required changes:**

```typescript
import { crossDomain } from "@convex-dev/better-auth/plugins";

// ...

plugins: [
  expo(),
  convex({
    authConfig,
    jwksRotateOnTokenGenerationError: true,
  }),
  crossDomain({ siteUrl }),  // ADD: For web support
  lastLoginMethod(),
],
```

**Rationale**: The `crossDomain` plugin enables the server to handle web clients that make cross-origin requests and manages one-time tokens for secure session establishment.

#### 2. `packages/backend/convex/http.ts`

**Current state:**

```typescript
authComponent.registerRoutes(http, createAuth, { cors: false });
```

**Required change:**

```typescript
authComponent.registerRoutes(http, createAuth, { cors: true });
```

**Rationale**: CORS must be enabled for web browsers to communicate with the Convex backend from a different origin.

### Client-Side Changes

#### 3. `apps/native/lib/auth-client.ts`

**Current state (broken):**

```typescript
import { lastLoginMethodClient } from "better-auth/client/plugins"; // WRONG for native

export const authClient = createAuthClient({
  baseURL: env.EXPO_PUBLIC_CONVEX_SITE_URL,
  plugins: [
    expoClient({ ... }),
    convexClient(),
    lastLoginMethodClient(), // Uses cookies - fails on native
  ],
});
```

**Required change (complete rewrite):**

```typescript
import { Platform } from "react-native";
import { createAuthClient } from "better-auth/react";
import { convexClient } from "@convex-dev/better-auth/client/plugins";
import Constants from "expo-constants";
import { env } from "@convoexpo-and-nextjs-web-bun-better-auth/env/native";

// Platform-specific imports are handled conditionally to avoid
// bundling native modules in web builds
function getPlugins() {
  const isWeb = Platform.OS === "web";
  const scheme = Constants.expoConfig?.scheme as string;

  if (isWeb) {
    // Web: Use crossDomainClient and cookie-based lastLoginMethod
    const { crossDomainClient } = require("@convex-dev/better-auth/client/plugins");
    const { lastLoginMethodClient } = require("better-auth/client/plugins");

    return [
      convexClient(),
      crossDomainClient(),
      lastLoginMethodClient(),
    ];
  } else {
    // Native: Use expoClient and SecureStore-based lastLoginMethod
    const { expoClient } = require("@better-auth/expo/client");
    const { lastLoginMethodClient } = require("@better-auth/expo/plugins");
    const SecureStore = require("expo-secure-store");

    return [
      convexClient(),
      expoClient({
        scheme,
        storagePrefix: scheme,
        storage: SecureStore,
      }),
      lastLoginMethodClient({
        storage: SecureStore,
        storagePrefix: scheme,
      }),
    ];
  }
}

export const authClient = createAuthClient({
  baseURL: env.EXPO_PUBLIC_CONVEX_SITE_URL,
  plugins: getPlugins(),
});
```

**Rationale**:

1. Uses `require()` instead of top-level imports to prevent webpack from bundling native modules in web builds
2. Conditionally loads the appropriate plugins based on platform
3. Uses consistent `storagePrefix` across expoClient and lastLoginMethodClient
4. The `convexClient()` is always included as it works on both platforms

### UI Changes

#### 4. `apps/native/app/(auth)/landing.tsx`

**Current state:**

```typescript
{authClient.isLastUsedLoginMethod("google") && (
  <LastUsedIndicator />
)}
```

**Recommended enhancement:**

```typescript
import { useState, useEffect } from "react";

export default function Landing() {
  const [lastMethod, setLastMethod] = useState<string | null>(null);

  useEffect(() => {
    // Read after mount to avoid hydration issues on web
    setLastMethod(authClient.getLastUsedLoginMethod());
  }, []);

  // ... rest of component

  {lastMethod === "google" && <LastUsedIndicator />}
}
```

**Rationale**: Using `useEffect` ensures the value is read after the component mounts, preventing potential hydration mismatches on web and ensuring the cookie/SecureStore has been read.

---

## Files to Modify

| File | Change Type | Priority |
|------|-------------|----------|
| `packages/backend/convex/auth.ts` | Add crossDomain plugin | 1 (Server) |
| `packages/backend/convex/http.ts` | Enable CORS | 1 (Server) |
| `apps/native/lib/auth-client.ts` | Complete rewrite with platform detection | 2 (Client) |
| `apps/native/app/(auth)/landing.tsx` | Add useEffect for lastMethod | 3 (UI) |

---

## Step-by-Step Implementation

### Phase 1: Server Changes (Enable Web Support)

#### Step 1.1: Update `auth.ts`

```typescript
// Add import
import { crossDomain } from "@convex-dev/better-auth/plugins";

// Add to plugins array (inside createAuth function)
plugins: [
  expo(),
  convex({
    authConfig,
    jwksRotateOnTokenGenerationError: true,
  }),
  crossDomain({ siteUrl }), // NEW
  lastLoginMethod(),
],
```

#### Step 1.2: Update `http.ts`

```typescript
// Change cors: false to cors: true
authComponent.registerRoutes(http, createAuth, { cors: true });
```

### Phase 2: Client Changes (Platform-Specific Plugins)

#### Step 2.1: Rewrite `auth-client.ts`

Replace the entire file with the platform-aware implementation shown above.

Key points:

- Use `Platform.OS === "web"` for detection
- Use `require()` for conditional imports
- Keep `convexClient()` in both paths
- Configure consistent `storagePrefix`

### Phase 3: UI Changes (Robust Indicator)

#### Step 3.1: Update `landing.tsx`

Add `useState` and `useEffect` for the last method reading.

---

## Testing Plan

### Native Testing (iOS/Android)

1. **Fresh install test**:
   - Uninstall app completely
   - Sign in with Google
   - Close and reopen app
   - Verify "Last Used" indicator shows on Google button

2. **Method switching test**:
   - Sign out
   - Sign in with Email
   - Verify indicator moves to Email button

3. **Persistence test**:
   - Force close app
   - Reopen
   - Verify indicator persists

### Web Testing (Expo Web)

1. **Start the app in web mode**:

   ```bash
   cd apps/native && bun run web
   ```

2. **Cookie verification**:
   - Open DevTools > Application > Cookies
   - Sign in with any method
   - Verify `better-auth.last_used_login_method` cookie is set

3. **Cross-session test**:
   - Sign in with Google
   - Close browser tab
   - Reopen (same browser)
   - Verify indicator shows on Google

### Cross-Platform Consistency

1. Sign in on native with Google
2. Sign in on web with Email
3. Verify each platform maintains its own "last used" state independently (this is expected behavior - they use different storage)

---

## Sources

- [Better Auth Expo Integration](https://www.better-auth.com/docs/integrations/expo)
- [Convex + Better Auth Expo Guide](https://labs.convex.dev/better-auth/framework-guides/expo)
- [Better Auth Last Login Method Plugin](https://www.better-auth.com/docs/plugins/last-login-method)
- [GitHub Issue #6409: lastLoginMethod in Expo](https://github.com/better-auth/better-auth/issues/6409)
- [@better-auth/expo npm package](https://www.npmjs.com/package/@better-auth/expo)
- [@convex-dev/better-auth npm package](https://www.npmjs.com/package/@convex-dev/better-auth)

---

## Appendix: Type Definitions

### lastLoginMethodClient (Expo Version)

```typescript
interface LastLoginMethodClientConfig {
  storage: {
    setItem: (key: string, value: string) => any;
    getItem: (key: string) => string | null;
    deleteItemAsync: (key: string) => Awaitable<void>;
  };
  storagePrefix?: string;
  customResolveMethod?: (url: string | URL) => Awaitable<string | undefined | null>;
}
```

### crossDomain (Server)

```typescript
crossDomain({ siteUrl: string }): BetterAuthPlugin
```

### crossDomainClient (Client)

```typescript
crossDomainClient(opts?: {
  storage?: {
    setItem: (key: string, value: string) => any;
    getItem: (key: string) => string | null;
  };
  storagePrefix?: string;
  disableCache?: boolean;
}): BetterAuthClientPlugin
```

---

## Version Information

- `better-auth`: 1.4.9 (pinned)
- `@better-auth/expo`: 1.4.9 (pinned)
- `@convex-dev/better-auth`: ^0.10.9

**Note**: Per Convex documentation, these versions should be pinned exactly for compatibility.
</file>

<file path="lefthook.yml">
# Lefthook configuration
# https://github.com/evilmartians/lefthook

pre-commit:
  parallel: true
  jobs:
    - name: biome
      glob: "*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc}"
      run: bun biome check --write --no-errors-on-unmatched --files-ignore-unknown=true {staged_files}
      stage_fixed: true
</file>

<file path="MIGRATION-PLAN.md">
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
- [ ] Create CUC HeroUI theme from design.md colors
- [ ] Build club app screens (home/events/dining/membership)

---

## Tech Stack Comparison

### Your Project (convoexpo-and-nextjs-web-bun-better-auth)

| Category | Technology |
|----------|------------|
| Package Manager | **bun 1.2.20** |
| Frontend | Next.js 16 (web) + Expo 54 (native) |
| Styling | **UniWind** + Tailwind v4 |
| UI Components | heroui-native (beta.9) |
| Auth | Better-Auth **1.4.9** + @convex-dev/better-auth **0.10.9** |
| Backend | Convex **1.31.2** |
| AI | @convex-dev/agent + Gemini |
| Deploy | Cloudflare (Alchemy) |
| Extras | biome, lefthook, turborepo, fumadocs, ruler, ultracite |

### convexpo Project (Reference)

| Category | Technology |
|----------|------------|
| Package Manager | **pnpm 10.15.0** |
| Frontend | **Native only** (Expo 54) - no web app |
| Styling | **NativeWind 4.1.23** + Tailwind v3 |
| UI Components | heroui-native (alpha.14) |
| Auth | Better-Auth **1.3.11** + @convex-dev/better-auth **0.8.6** |
| Backend | Convex **1.27.3** |
| Extras | biome, turborepo, @convex-dev/resend (email) |

### Key Differences

| Aspect | Your Project | convexpo |
|--------|-------------|----------|
| **Web App** | Next.js 16 | None |
| **Auth Version** | Newer (1.4.9) | Older (1.3.11) |
| **Convex Version** | Newer (1.31.2) | Older (1.27.3) |
| **Styling** | UniWind (minimal, v4) | NativeWind (mature, v3) |
| **Auth Features** | Basic email signin/signup | Full OAuth (Google/Apple) + Email + Password Reset |
| **UI Polish** | Basic demo screens | Polished landing + auth flows |
| **bts.jsonc** | Missing | Present |

---

## NativeWind → UniWind Porting Analysis

### Key Differences

| Aspect | NativeWind (convexpo) | UniWind (your project) |
|--------|----------------------|------------------------|
| **Tailwind Version** | v3 | v4 |
| **Metro Config** | `withNativeWind()` | `withUniwindConfig()` |
| **Babel** | Requires `nativewind/babel` preset | No babel preset needed |
| **CSS Import** | `@tailwind base/components/utilities` | `@import "tailwindcss"` + `@import "uniwind"` |
| **Theme Config** | `tailwind.config.js` with presets | CSS-based theming in `global.css` |
| **className Deduplication** | Automatic | Manual (needs `tailwind-merge`) |
| **Third-party Components** | `cssInterop()` | `withUniwind()` HOC |

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
<View className="bg-red-500 bg-blue-500" /> // → blue

// UniWind: CSS specificity rules apply (unpredictable)
// Need tailwind-merge:
import { twMerge } from 'tailwind-merge'
<View className={twMerge("bg-red-500", "bg-blue-500")} /> // → blue
```

### 3. SafeAreaView Styling

convexpo uses NativeWind's built-in `SafeAreaView` className support.
UniWind requires wrapping with `withUniwind()`:

```tsx
import { withUniwind } from 'uniwind'
import { SafeAreaView } from 'react-native-safe-area-context'

const StyledSafeAreaView = withUniwind(SafeAreaView)
```

### 4. GestureHandlerRootView

convexpo uses `className="flex-1"` directly.
Your project uses `style={{ flex: 1 }}` - this works but should be consistent.

### 5. Theme System

convexpo's theme is in `tailwind.config.js` with CSS variables in `global.css`.
UniWind uses pure CSS theming. You'll need to migrate the design.md colors directly into your CSS.

---

## Files to Port from convexpo

| File | Purpose | Conversion Needed |
|------|---------|-------------------|
| `lib/betterAuth/client.ts` | Auth client setup | Already similar |
| `lib/betterAuth/oauth/useGoogleAuth.ts` | Google OAuth hook | Direct copy |
| `lib/betterAuth/oauth/useAppleAuth.ts` | Apple OAuth hook | Direct copy + add `expo-apple-authentication` |
| `app/(root)/(auth)/landing.tsx` | Landing page UI | Convert SafeAreaView usage |
| `app/(root)/(auth)/email/signin.tsx` | Email signin | Convert patterns |
| `app/(root)/(auth)/email/signup.tsx` | Email signup | Convert patterns |
| `app/(root)/(auth)/email/(reset)/*` | Password reset flow | Convert patterns |
| `themes/pastel-themes.ts` | HeroUI theme config | Adapt for CUC branding |
| `contexts/app-theme-context.tsx` | Theme switching | Already have similar |
| `providers/SplashScreenProvider.tsx` | Splash screen handling | Optional port |

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
4. **Create CUC theme** - Use design.md colors in HeroUI theme format
5. **Build club features** - Home, events, dining, membership screens

---

## Yale Club App Features (Reference)

Based on App Store research, features to implement for City University Club:

- Digital membership card
- Member directory
- Dining reservations & menus
- Event calendar & notifications
- Account/statement management
- Reciprocal clubs info
- News & announcements

---

## City University Club Branding

See `design.md` for full color palette and typography extracted from <https://www.cityuniversityclub.co.uk/>

### Primary Colors (Actual Visible Design)

| Color | Hex | Usage |
|-------|-----|-------|
| Dark Navy | `#06273a` | Hero backgrounds, buttons, text on light |
| Muted Sage | `#8fa89d` | Header/nav background, accents |
| Cream | `#fffef8` | Page backgrounds, text on dark |
| White | `#ffffff` | Input backgrounds, cards |

**Note:** The browns/oranges in some Wix CSS variables are template defaults that are NOT used in the visible design. The actual brand is cool-toned (navy + sage + cream), not warm (no browns/oranges).

### Typography

- **Headings:** Cormorant Garamond (elegant serif)
- **Body:** Raleway (clean sans-serif)

### Brand Mood

Sophisticated British private club - cool, understated, refined. Think traditional London club aesthetic, not warm/earthy hospitality.
</file>

<file path="package.json">
{
  "name": "convoexpo-and-nextjs-web-bun-better-auth",
  "private": true,
  "type": "module",
  "workspaces": {
    "packages": [
      "apps/*",
      "packages/*"
    ],
    "catalog": {
      "dotenv": "^17.2.2",
      "zod": "^4.1.13",
      "typescript": "^5",
      "@cloudflare/workers-types": "^4.20251213.0",
      "convex": "^1.31.2",
      "better-auth": "1.4.9",
      "@convex-dev/better-auth": "^0.10.9",
      "@convex-dev/agent": "^0.3.2",
      "alchemy": "^0.82.1",
      "@better-auth/expo": "1.4.9"
    }
  },
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build",
    "check-types": "turbo check-types",
    "dev:native": "turbo -F native dev",
    "dev:web": "turbo -F web dev",
    "dev:server": "turbo -F @convoexpo-and-nextjs-web-bun-better-auth/backend dev",
    "dev:setup": "turbo -F @convoexpo-and-nextjs-web-bun-better-auth/backend dev:setup",
    "prepare": "lefthook install",
    "lint": "biome check .",
    "lint:fix": "biome check --write .",
    "format": "biome format --write .",
    "android": "expo run:android",
    "ios": "expo run:ios",
    "storybook:web": "turbo -F web storybook",
    "storybook:native": "turbo -F native storybook",
    "storybook:native:web-ui": "turbo -F native storybook:web-ui",
    "storybook:build": "turbo storybook:build",
    "storybook:build:web": "turbo -F web storybook:build",
    "storybook:build:native": "turbo -F native storybook:build:web"
  },
  "packageManager": "bun@1.2.20",
  "dependencies": {
    "@convoexpo-and-nextjs-web-bun-better-auth/env": "workspace:*",
    "dotenv": "catalog:",
    "esbuild": "^0.27.2",
    "expo": "~54.0.31",
    "expo-splash-screen": "~31.0.13",
    "react": "19.1.0",
    "react-native": "0.81.5",
    "zod": "catalog:"
  },
  "devDependencies": {
    "@biomejs/biome": "2.3.11",
    "@cloudflare/workers-types": "catalog:",
    "@convoexpo-and-nextjs-web-bun-better-auth/config": "workspace:*",
    "lefthook": "^2.0.15",
    "turbo": "^2.6.3",
    "typescript": "catalog:",
    "ultracite": "7.0.11"
  },
  "version": "1.0.0"
}
</file>

<file path="README.md">
# convoexpo-and-nextjs-web-bun-better-auth

This project was created with [Better-T-Stack](https://github.com/AmanVarshney01/create-better-t-stack), a modern TypeScript stack that combines Next.js, Convex, and more.

## Features

- **TypeScript** - For type safety and improved developer experience
- **Next.js** - Full-stack React framework
- **React Native** - Build mobile apps using React
- **Expo** - Tools for React Native development
- **TailwindCSS** - Utility-first CSS for rapid UI development
- **shadcn/ui** - Reusable UI components
- **Convex** - Reactive backend-as-a-service platform
- **Authentication** - Better-Auth
- **Biome** - Linting and formatting
- **Turborepo** - Optimized monorepo build system

## Getting Started

First, install the dependencies:

```bash
bun install
```

## Convex Setup

This project uses Convex as a backend. You'll need to set up Convex before running the app:

```bash
bun run dev:setup
```

Follow the prompts to create a new Convex project and connect it to your application.

Copy environment variables from `packages/backend/.env.local` to `apps/*/.env`.

Then, run the development server:

```bash
bun run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser to see the web application.
Use the Expo Go app to run the mobile application.
Your app will connect to the Convex cloud backend automatically.

## Deployment (Cloudflare via Alchemy)

- Dev: cd apps/web && bun run alchemy dev
- Deploy: cd apps/web && bun run deploy
- Destroy: cd apps/web && bun run destroy

For more details, see the guide on [Deploying to Cloudflare with Alchemy](https://www.better-t-stack.dev/docs/guides/cloudflare-alchemy).

## Git Hooks and Formatting

- Format and lint fix: `bun run check`

## Project Structure

```
convoexpo-and-nextjs-web-bun-better-auth/
├── apps/
│   ├── web/         # Frontend application (Next.js)
│   ├── native/      # Mobile application (React Native, Expo)
├── packages/
│   ├── backend/     # Convex backend functions and schema
```

## Available Scripts

- `bun run dev`: Start all applications in development mode
- `bun run build`: Build all applications
- `bun run dev:web`: Start only the web application
- `bun run dev:setup`: Setup and configure your Convex project
- `bun run check-types`: Check TypeScript types across all apps
- `bun run dev:native`: Start the React Native/Expo development server
- `bun run check`: Run Biome formatting and linting
</file>

<file path="tsconfig.json">
{
  "extends": "@convoexpo-and-nextjs-web-bun-better-auth/config/tsconfig.base.json",
  "compilerOptions": {
    "strictNullChecks": true
  }
}
</file>

<file path="turbo.json">
{
  "$schema": "https://turbo.build/schema.json",
  "ui": "tui",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "inputs": ["$TURBO_DEFAULT$", ".env*"],
      "outputs": ["dist/**", ".next/**"]
    },
    "lint": {
      "dependsOn": ["^lint"]
    },
    "check-types": {
      "dependsOn": ["^check-types"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "dev:setup": {
      "cache": false,
      "persistent": true
    },
    "deploy": {
      "cache": false
    },
    "destroy": {
      "cache": false
    },
    "storybook": {
      "cache": false,
      "persistent": true
    },
    "storybook:build": {
      "dependsOn": ["^build"],
      "outputs": ["storybook-static/**"]
    }
  }
}
</file>

</files>
</>
