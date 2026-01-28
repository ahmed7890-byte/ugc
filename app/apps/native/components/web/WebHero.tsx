import { ScrollView, Text, View } from "react-native";
import { useResponsive } from "@/hooks/useResponsive";
import { CategoryTag } from "./CategoryTag";
import { type CategoryOption, SearchBar } from "./SearchBar";

// Theme colors for video hero (light text on dark video)
const THEME_COLORS = {
  primary: "#1DBF73",
  primaryForeground: "#FFFFFF",
  foreground: "#FFFFFF",
  muted: "rgba(255, 255, 255, 0.8)",
  background: "#FFFFFF",
  heroBackground: "#1a1a1a",
};

interface PopularTag {
  label: string;
  href: string;
}

export interface WebHeroProps {
  /** Main headline text */
  headline?: string;
  /** Subheadline with value props */
  subheadline?: string;
  /** Categories for the search dropdown */
  categories?: CategoryOption[];
  /** Popular tags to display below search */
  popularTags?: PopularTag[];
  /** Search submit handler */
  onSearch?: (query: string, categoryId?: string) => void;
}

const DEFAULT_CATEGORIES: CategoryOption[] = [
  { id: "all", label: "All Categories", icon: "grid-outline" },
  { id: "lifestyle", label: "Lifestyle", icon: "heart-outline" },
  { id: "tech", label: "Tech & Gadgets", icon: "phone-portrait-outline" },
  { id: "beauty", label: "Beauty", icon: "sparkles-outline" },
  { id: "food", label: "Food & Beverage", icon: "restaurant-outline" },
  { id: "fitness", label: "Fitness", icon: "barbell-outline" },
];

const DEFAULT_POPULAR_TAGS: PopularTag[] = [
  { label: "Product Reviews", href: "/browse?tag=reviews" },
  { label: "Unboxing", href: "/browse?tag=unboxing" },
  { label: "Testimonials", href: "/browse?tag=testimonials" },
  { label: "How-To Videos", href: "/browse?tag=howto" },
];

export function WebHero({
  headline = "Find trusted UGC creators",
  subheadline = "Connect with authentic creators for your brand. Every brief is execution-ready, payment is secured, and trust is built into the system.",
  categories = DEFAULT_CATEGORIES,
  popularTags = DEFAULT_POPULAR_TAGS,
  onSearch,
}: WebHeroProps) {
  const { isMobile, isTablet } = useResponsive();

  return (
    <View
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: THEME_COLORS.heroBackground,
        minHeight: isMobile ? 500 : 600,
      }}
    >
      {/* Background Video - Web only */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for text readability */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <View
        style={{
          position: "relative",
          zIndex: 2,
          paddingTop: isMobile ? 100 : 140,
          paddingBottom: isMobile ? 48 : 80,
          paddingHorizontal: 24,
        }}
      >
        <View
          style={{
            maxWidth: 900,
            marginHorizontal: "auto",
            alignItems: "center",
          }}
        >
          {/* Headline */}
          <Text
            style={{
              fontSize: isMobile ? 32 : isTablet ? 42 : 56,
              fontWeight: "700",
              color: THEME_COLORS.foreground,
              textAlign: "center",
              marginBottom: 16,
              lineHeight: isMobile ? 40 : isTablet ? 50 : 66,
              textShadowColor: "rgba(0, 0, 0, 0.3)",
              textShadowOffset: { width: 0, height: 2 },
              textShadowRadius: 4,
            }}
          >
            {headline}
          </Text>

          {/* Subheadline */}
          <Text
            style={{
              fontSize: isMobile ? 16 : 18,
              color: THEME_COLORS.muted,
              textAlign: "center",
              lineHeight: isMobile ? 24 : 28,
              maxWidth: 600,
              marginBottom: 32,
              textShadowColor: "rgba(0, 0, 0, 0.3)",
              textShadowOffset: { width: 0, height: 1 },
              textShadowRadius: 2,
            }}
          >
            {subheadline}
          </Text>

          {/* Search Bar */}
          <View
            style={{
              width: "100%",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <SearchBar
              categories={categories}
              onSearch={onSearch}
              placeholder="Search for creators or briefs..."
            />
          </View>

          {/* Popular Tags */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              flexWrap: isMobile ? "nowrap" : "wrap",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: THEME_COLORS.muted,
                marginRight: 4,
              }}
            >
              Popular:
            </Text>
            {isMobile ? (
              <ScrollView
                contentContainerStyle={{ gap: 8, paddingRight: 24 }}
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {popularTags.map((tag) => (
                  <CategoryTag
                    href={tag.href}
                    key={tag.label}
                    label={tag.label}
                    size="small"
                    variant="light"
                  />
                ))}
              </ScrollView>
            ) : (
              <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
                {popularTags.map((tag) => (
                  <CategoryTag
                    href={tag.href}
                    key={tag.label}
                    label={tag.label}
                    size="small"
                    variant="light"
                  />
                ))}
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

export default WebHero;
