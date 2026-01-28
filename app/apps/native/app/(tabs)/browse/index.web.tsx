import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useResponsive } from "@/hooks/useResponsive";

// Fiverr-style theme colors
const THEME_COLORS = {
  primary: "#1DBF73",
  primaryForeground: "#FFFFFF",
  foreground: "#222325",
  muted: "#62646a",
  border: "#e4e5e7",
  background: "#FFFFFF",
  sectionBackground: "#fafafa",
};

// Browse category cards
const BROWSE_OPTIONS = [
  {
    id: "creators",
    title: "Find Creators",
    description: "Browse talented UGC creators ready to work on your brand",
    icon: "people-outline" as const,
    href: "/browse/creators",
    color: "#1DBF73",
  },
  {
    id: "briefs",
    title: "Find Briefs",
    description: "Discover execution-ready briefs with secured payment",
    icon: "document-text-outline" as const,
    href: "/browse/briefs",
    color: "#3b82f6",
  },
];

// Category tags
const CATEGORIES = [
  { id: "lifestyle", label: "Lifestyle", icon: "heart-outline" as const },
  {
    id: "tech",
    label: "Tech & Gadgets",
    icon: "phone-portrait-outline" as const,
  },
  { id: "beauty", label: "Beauty", icon: "sparkles-outline" as const },
  { id: "food", label: "Food & Beverage", icon: "restaurant-outline" as const },
  { id: "fitness", label: "Fitness", icon: "barbell-outline" as const },
  { id: "fashion", label: "Fashion", icon: "shirt-outline" as const },
  { id: "travel", label: "Travel", icon: "airplane-outline" as const },
  { id: "gaming", label: "Gaming", icon: "game-controller-outline" as const },
];

export default function BrowseLandingPage() {
  const { isMobile } = useResponsive();

  return (
    <View style={{ flex: 1, backgroundColor: THEME_COLORS.background }}>
      {/* Hero Section */}
      <View
        style={{
          paddingTop: 48,
          paddingBottom: 64,
          paddingHorizontal: 24,
          backgroundColor: THEME_COLORS.sectionBackground,
        }}
      >
        <View
          style={{
            maxWidth: 1200,
            marginHorizontal: "auto",
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: isMobile ? 32 : 40,
              fontWeight: "700",
              color: THEME_COLORS.foreground,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Browse the Marketplace
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: THEME_COLORS.muted,
              textAlign: "center",
              maxWidth: 600,
              marginHorizontal: "auto",
            }}
          >
            Find talented creators or discover execution-ready briefs with
            secured payment
          </Text>
        </View>
      </View>

      {/* Browse Options */}
      <View
        style={{
          paddingVertical: 64,
          paddingHorizontal: 24,
        }}
      >
        <View
          style={{
            maxWidth: 1200,
            marginHorizontal: "auto",
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: isMobile ? "column" : "row",
              gap: 24,
              marginBottom: 64,
            }}
          >
            {BROWSE_OPTIONS.map((option) => (
              <Link asChild href={option.href as any} key={option.id}>
                <Pressable
                  style={({ hovered }) => ({
                    flex: 1,
                    backgroundColor: THEME_COLORS.background,
                    borderRadius: 16,
                    padding: 32,
                    borderWidth: 2,
                    borderColor: hovered ? option.color : THEME_COLORS.border,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: hovered ? 8 : 4 },
                    shadowOpacity: hovered ? 0.1 : 0.05,
                    shadowRadius: hovered ? 16 : 8,
                    transform: [{ translateY: hovered ? -4 : 0 }],
                  })}
                >
                  <View
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 32,
                      backgroundColor: `${option.color}15`,
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <Ionicons
                      color={option.color}
                      name={option.icon}
                      size={28}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: "700",
                      color: THEME_COLORS.foreground,
                      marginBottom: 8,
                    }}
                  >
                    {option.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: THEME_COLORS.muted,
                      lineHeight: 24,
                    }}
                  >
                    {option.description}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                      marginTop: 20,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "600",
                        color: option.color,
                      }}
                    >
                      Browse now
                    </Text>
                    <Ionicons
                      color={option.color}
                      name="arrow-forward"
                      size={18}
                    />
                  </View>
                </Pressable>
              </Link>
            ))}
          </View>

          {/* Categories Section */}
          <Text
            style={{
              fontSize: 24,
              fontWeight: "700",
              color: THEME_COLORS.foreground,
              marginBottom: 24,
            }}
          >
            Browse by Category
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            {CATEGORIES.map((category) => (
              <Link
                asChild
                href={`/browse/creators?category=${category.id}` as any}
                key={category.id}
              >
                <Pressable
                  style={({ hovered }) => ({
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                    paddingHorizontal: 20,
                    paddingVertical: 12,
                    borderRadius: 24,
                    borderWidth: 1,
                    borderColor: hovered
                      ? THEME_COLORS.primary
                      : THEME_COLORS.border,
                    backgroundColor: hovered
                      ? THEME_COLORS.primary
                      : THEME_COLORS.background,
                  })}
                >
                  {({ hovered }) => (
                    <>
                      <Ionicons
                        color={
                          hovered
                            ? THEME_COLORS.primaryForeground
                            : THEME_COLORS.muted
                        }
                        name={category.icon}
                        size={18}
                      />
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "500",
                          color: hovered
                            ? THEME_COLORS.primaryForeground
                            : THEME_COLORS.foreground,
                        }}
                      >
                        {category.label}
                      </Text>
                    </>
                  )}
                </Pressable>
              </Link>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}
