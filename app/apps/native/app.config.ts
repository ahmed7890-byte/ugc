import type { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "User Generated Content",
  slug: "user-generated-content",
  version: "1.0.0",
  orientation: "portrait",
  scheme: "ugc",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,

  // Universal app icon (fallback)
  icon: "./assets/images/icons/ios-light.png",

  // iOS-specific configuration
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.ugc.app",
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
      backgroundColor: "#1DBF73", // Fiverr green
    },
    package: "com.ugc.app",
  },

  // Web-specific configuration
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/icons/favicon-32x32.png",
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
          "Allow UGC to add events to your calendar",
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
          "Allow UGC to access device motion for card animations",
      },
    ],
    [
      "expo-splash-screen",
      {
        backgroundColor: "#1DBF73", // Fiverr green
        image: "./assets/images/icons/splash-icon-light.png",
        imageWidth: 200,
        ios: {
          backgroundColor: "#1DBF73",
          image: "./assets/images/icons/splash-icon-light.png",
          resizeMode: "contain",
        },
        android: {
          backgroundColor: "#1DBF73",
          image: "./assets/images/icons/splash-icon-light.png",
          imageWidth: 200,
        },
        dark: {
          backgroundColor: "#222325", // Dark gray
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
