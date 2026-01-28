import { Ionicons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

const THEME_COLORS = {
  primaryForeground: "#FFFFFF",
};

const VALUE_PROPS = [
  {
    icon: "checkmark-circle-outline" as const,
    title: "Execution-ready briefs",
    description:
      "Every brief has approved scripts, locked scope, and secured payment before you see it.",
  },
  {
    icon: "shield-checkmark-outline" as const,
    title: "Payment protection",
    description:
      "Full payment secured in escrow before work begins. Auto-release if brands go silent.",
  },
  {
    icon: "star-outline" as const,
    title: "Build your reputation",
    description:
      "Trust scores based on real behavior, not just reviews. Quality over price.",
  },
];

export function AuthModalLeftPanel() {
  return (
    <View style={{ width: 400, overflow: "hidden" }}>
      {/* Background Image - absolute positioned behind content */}
      <Image
        resizeMode="cover"
        source={require("@/assets/images/auth.png")}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 400,
          height: "100%",
          backgroundColor: "#883748",
        }}
      />

      {/* Content overlaid on top */}
      <View style={{ padding: 40, zIndex: 1 }}>
        {/* Value Props */}
        <View style={{ gap: 20 }}>
          {VALUE_PROPS.map((prop) => (
            <View
              key={prop.title}
              style={{
                flexDirection: "row",
                gap: 12,
              }}
            >
              <Ionicons
                color={THEME_COLORS.primaryForeground}
                name={prop.icon}
                size={24}
                style={{ marginTop: 2 }}
              />
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    color: THEME_COLORS.primaryForeground,
                    marginBottom: 4,
                  }}
                >
                  {prop.title}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    color: THEME_COLORS.primaryForeground,
                    opacity: 0.9,
                    lineHeight: 20,
                  }}
                >
                  {prop.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

export default AuthModalLeftPanel;
