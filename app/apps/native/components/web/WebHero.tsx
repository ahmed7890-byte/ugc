import { ScrollView, Text, View } from "react-native";
import { useResponsive } from "@/hooks/useResponsive";
import { CategoryTag } from "./CategoryTag";
import { type CategoryOption, SearchBar } from "./SearchBar";

// Fiverr-style theme colors
const THEME_COLORS = {
  primary: "#1DBF73",
  primaryForeground: "#FFFFFF",
  foreground: "#222325",
  muted: "#62646a",
  background: "#FFFFFF",
  heroBackground: "#fafafa",
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
        backgroundColor: THEME_COLORS.heroBackground,
        paddingTop: isMobile ? 100 : 120,
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
            fontSize: isMobile ? 32 : isTablet ? 42 : 52,
            fontWeight: "700",
            color: THEME_COLORS.foreground,
            textAlign: "center",
            marginBottom: 16,
            lineHeight: isMobile ? 40 : isTablet ? 50 : 62,
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
                />
              ))}
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

export default WebHero;
