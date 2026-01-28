import { Text, View } from "react-native";

// Fiverr-style theme colors
const THEME_COLORS = {
  primary: "#1DBF73", // Fiverr green
  primaryForeground: "#FFFFFF",
};

interface UGCLogoProps {
  /** Size of the logo circle in pixels */
  size?: number;
  /** Optional custom background color */
  backgroundColor?: string;
  /** Optional custom text color */
  textColor?: string;
}

/**
 * Simple UGC logo - a green circle with white "UGC" text
 */
export function UGCLogo({
  size = 56,
  backgroundColor = THEME_COLORS.primary,
  textColor = THEME_COLORS.primaryForeground,
}: UGCLogoProps) {
  // Font size scales with the circle size
  const fontSize = size * 0.32;

  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: textColor,
          fontSize,
          fontWeight: "700",
          letterSpacing: 1,
        }}
      >
        UGC
      </Text>
    </View>
  );
}

export default UGCLogo;
