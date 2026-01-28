import type { Preview } from "@storybook/react";
import type { ReactNode } from "react";
import { View } from "react-native";

// Import global styles for UniWind/Tailwind
import "../global.css";

// Fiverr-style theme colors (hex values for Storybook background)
const UGC_COLORS = {
  light: {
    background: "#FFFFFF", // pure white
    foreground: "#222325", // dark gray
    primary: "#1DBF73", // Fiverr green
    accent: "#ffbe5b", // pro gold
  },
  dark: {
    background: "#222325", // dark gray
    foreground: "#FAFAFA", // near white
    primary: "#1DBF73", // Fiverr green
    accent: "#ffbe5b", // pro gold
  },
};

/**
 * Storybook decorator that wraps stories with necessary providers
 */
const withProviders = (Story: () => ReactNode) => (
  <View
    style={{
      flex: 1,
      padding: 16,
      backgroundColor: UGC_COLORS.light.background,
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
      default: "UGC Light",
      values: [
        {
          name: "UGC Light",
          value: UGC_COLORS.light.background,
        },
        {
          name: "UGC Dark",
          value: UGC_COLORS.dark.background,
        },
      ],
    },
  },
};

export default preview;
