import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { UGCLogo } from "@/components/UGCLogo";
import { useResponsive } from "@/hooks/useResponsive";

// Fiverr-style theme colors
const THEME_COLORS = {
  primary: "#1DBF73",
  primaryForeground: "#FFFFFF",
  foreground: "#222325",
  muted: "#62646a",
  border: "#e4e5e7",
  background: "#FFFFFF",
};

interface ValueProp {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
}

const DEFAULT_VALUE_PROPS: ValueProp[] = [
  {
    icon: "checkmark-circle-outline",
    title: "Execution-ready briefs",
    description:
      "Every brief has approved scripts, locked scope, and secured payment before you see it.",
  },
  {
    icon: "shield-checkmark-outline",
    title: "Payment protection",
    description:
      "Full payment secured in escrow before work begins. Auto-release if brands go silent.",
  },
  {
    icon: "star-outline",
    title: "Build your reputation",
    description:
      "Trust scores based on real behavior, not just reviews. Quality over price.",
  },
];

export interface WebSignInPageProps {
  /** Content for the right panel (form) */
  children: React.ReactNode;
  /** Value propositions for left panel */
  valueProps?: ValueProp[];
  /** Title shown in the left panel */
  leftPanelTitle?: string;
}

export function WebSignInPage({
  children,
  valueProps = DEFAULT_VALUE_PROPS,
  leftPanelTitle = "Success starts here",
}: WebSignInPageProps) {
  const { isMobile, isTablet } = useResponsive();
  const showSplitLayout = !(isMobile || isTablet);

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      {/* Left Panel - Value Props (Desktop Only) */}
      {showSplitLayout && (
        <View
          style={{
            flex: 1,
            backgroundColor: THEME_COLORS.primary,
            padding: 48,
            justifyContent: "center",
          }}
        >
          <View style={{ maxWidth: 480 }}>
            {/* Logo */}
            <View style={{ marginBottom: 48 }}>
              <UGCLogo
                backgroundColor={THEME_COLORS.primaryForeground}
                size={48}
                textColor={THEME_COLORS.primary}
              />
            </View>

            {/* Title */}
            <Text
              style={{
                fontSize: 40,
                fontWeight: "700",
                color: THEME_COLORS.primaryForeground,
                marginBottom: 32,
                lineHeight: 48,
              }}
            >
              {leftPanelTitle}
            </Text>

            {/* Value Props */}
            <View style={{ gap: 24 }}>
              {valueProps.map((prop) => (
                <View
                  key={prop.title}
                  style={{
                    flexDirection: "row",
                    gap: 16,
                    alignItems: "flex-start",
                  }}
                >
                  <Ionicons
                    color={THEME_COLORS.primaryForeground}
                    name={prop.icon}
                    size={24}
                  />
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "600",
                        color: THEME_COLORS.primaryForeground,
                        marginBottom: 4,
                      }}
                    >
                      {prop.title}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.85)",
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
      )}

      {/* Right Panel - Form */}
      <View
        style={{
          flex: 1,
          backgroundColor: THEME_COLORS.background,
        }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            padding: isMobile ? 24 : 48,
          }}
        >
          {/* Back to Home Link (Mobile/Tablet) */}
          <View style={{ marginBottom: 32 }}>
            <Link asChild href="/">
              <Pressable
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                {({ hovered }) => (
                  <>
                    <Ionicons
                      color={
                        hovered ? THEME_COLORS.primary : THEME_COLORS.muted
                      }
                      name="arrow-back"
                      size={20}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        color: hovered
                          ? THEME_COLORS.primary
                          : THEME_COLORS.muted,
                      }}
                    >
                      Back to home
                    </Text>
                  </>
                )}
              </Pressable>
            </Link>
          </View>

          {/* Mobile Logo */}
          {!showSplitLayout && (
            <View style={{ alignItems: "center", marginBottom: 32 }}>
              <UGCLogo size={56} />
            </View>
          )}

          {/* Form Content */}
          <View style={{ maxWidth: 400, width: "100%", alignSelf: "center" }}>
            {children}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default WebSignInPage;
