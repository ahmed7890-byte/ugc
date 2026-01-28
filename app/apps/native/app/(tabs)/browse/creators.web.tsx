import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { CreatorCard } from "@/components/web/CreatorCard";
import { getResponsiveValue, useResponsive } from "@/hooks/useResponsive";

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

// Mock creator data
const MOCK_CREATORS = [
  {
    id: "1",
    name: "Sarah Johnson",
    tagline: "Authentic lifestyle content for DTC brands. 5+ years experience.",
    niches: ["Lifestyle", "Beauty"],
    trustScore: 98,
    level: "pro" as const,
    startingRate: 250,
    completedBriefs: 147,
    avgResponseTime: "2h",
  },
  {
    id: "2",
    name: "Mike Chen",
    tagline:
      "Tech reviews that convert. Specializing in gadgets and electronics.",
    niches: ["Tech", "Gadgets"],
    trustScore: 95,
    level: "established" as const,
    startingRate: 300,
    completedBriefs: 89,
    avgResponseTime: "4h",
  },
  {
    id: "3",
    name: "Emma Davis",
    tagline: "Fitness content that inspires action. NASM certified trainer.",
    niches: ["Fitness", "Wellness"],
    trustScore: 97,
    level: "pro" as const,
    startingRate: 275,
    completedBriefs: 112,
    avgResponseTime: "3h",
  },
  {
    id: "4",
    name: "Alex Rivera",
    tagline: "Food content that makes you hungry. Former chef turned creator.",
    niches: ["Food", "Lifestyle"],
    trustScore: 94,
    level: "established" as const,
    startingRate: 225,
    completedBriefs: 67,
    avgResponseTime: "5h",
  },
  {
    id: "5",
    name: "Jessica Park",
    tagline: "Beauty tutorials and skincare reviews. Over 500K followers.",
    niches: ["Beauty", "Skincare"],
    trustScore: 99,
    level: "pro" as const,
    startingRate: 400,
    completedBriefs: 234,
    avgResponseTime: "1h",
  },
  {
    id: "6",
    name: "David Kim",
    tagline: "Fashion and streetwear content. Based in NYC.",
    niches: ["Fashion", "Lifestyle"],
    trustScore: 92,
    level: "rising" as const,
    startingRate: 200,
    completedBriefs: 34,
    avgResponseTime: "6h",
  },
  {
    id: "7",
    name: "Maria Garcia",
    tagline: "Travel and adventure content. Visited 40+ countries.",
    niches: ["Travel", "Adventure"],
    trustScore: 96,
    level: "established" as const,
    startingRate: 350,
    completedBriefs: 78,
    avgResponseTime: "4h",
  },
  {
    id: "8",
    name: "James Wilson",
    tagline: "Gaming content and reviews. Twitch partner.",
    niches: ["Gaming", "Tech"],
    trustScore: 91,
    level: "rising" as const,
    startingRate: 175,
    completedBriefs: 45,
    avgResponseTime: "2h",
  },
];

// Filter categories
const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "lifestyle", label: "Lifestyle" },
  { id: "tech", label: "Tech" },
  { id: "beauty", label: "Beauty" },
  { id: "food", label: "Food" },
  { id: "fitness", label: "Fitness" },
  { id: "fashion", label: "Fashion" },
  { id: "travel", label: "Travel" },
  { id: "gaming", label: "Gaming" },
];

// Sort options
const SORT_OPTIONS = [
  { id: "trust", label: "Trust Score" },
  { id: "rate_low", label: "Rate: Low to High" },
  { id: "rate_high", label: "Rate: High to Low" },
  { id: "completed", label: "Most Completed" },
];

export default function BrowseCreatorsPage() {
  const { width, isMobile } = useResponsive();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSort, setSelectedSort] = useState("trust");

  const columns = getResponsiveValue(width, {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  });

  // Filter and sort creators
  const filteredCreators = MOCK_CREATORS.filter((creator) => {
    if (selectedCategory === "all") return true;
    return creator.niches.some(
      (niche) => niche.toLowerCase() === selectedCategory
    );
  }).sort((a, b) => {
    switch (selectedSort) {
      case "trust":
        return b.trustScore - a.trustScore;
      case "rate_low":
        return a.startingRate - b.startingRate;
      case "rate_high":
        return b.startingRate - a.startingRate;
      case "completed":
        return b.completedBriefs - a.completedBriefs;
      default:
        return 0;
    }
  });

  return (
    <View style={{ flex: 1, backgroundColor: THEME_COLORS.background }}>
      {/* Header */}
      <View
        style={{
          paddingTop: 32,
          paddingBottom: 24,
          paddingHorizontal: 24,
          borderBottomWidth: 1,
          borderBottomColor: THEME_COLORS.border,
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
              fontSize: 32,
              fontWeight: "700",
              color: THEME_COLORS.foreground,
              marginBottom: 8,
            }}
          >
            Browse Creators
          </Text>
          <Text style={{ fontSize: 16, color: THEME_COLORS.muted }}>
            {filteredCreators.length} creators available
          </Text>
        </View>
      </View>

      {/* Filters */}
      <View
        style={{
          paddingVertical: 16,
          paddingHorizontal: 24,
          backgroundColor: THEME_COLORS.sectionBackground,
          borderBottomWidth: 1,
          borderBottomColor: THEME_COLORS.border,
        }}
      >
        <View
          style={{
            maxWidth: 1200,
            marginHorizontal: "auto",
            width: "100%",
          }}
        >
          {/* Category Filter */}
          <ScrollView
            contentContainerStyle={{ gap: 8 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 16 }}
          >
            {CATEGORIES.map((category) => (
              <Pressable
                key={category.id}
                onPress={() => setSelectedCategory(category.id)}
                style={{
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderRadius: 20,
                  backgroundColor:
                    selectedCategory === category.id
                      ? THEME_COLORS.primary
                      : THEME_COLORS.background,
                  borderWidth: 1,
                  borderColor:
                    selectedCategory === category.id
                      ? THEME_COLORS.primary
                      : THEME_COLORS.border,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "500",
                    color:
                      selectedCategory === category.id
                        ? THEME_COLORS.primaryForeground
                        : THEME_COLORS.foreground,
                  }}
                >
                  {category.label}
                </Text>
              </Pressable>
            ))}
          </ScrollView>

          {/* Sort Dropdown */}
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <Text style={{ fontSize: 14, color: THEME_COLORS.muted }}>
              Sort by:
            </Text>
            <ScrollView
              contentContainerStyle={{ gap: 8 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {SORT_OPTIONS.map((option) => (
                <Pressable
                  key={option.id}
                  onPress={() => setSelectedSort(option.id)}
                  style={{
                    paddingHorizontal: 12,
                    paddingVertical: 6,
                    borderRadius: 16,
                    backgroundColor:
                      selectedSort === option.id ? "#f0fdf4" : "transparent",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: selectedSort === option.id ? "600" : "400",
                      color:
                        selectedSort === option.id
                          ? THEME_COLORS.primary
                          : THEME_COLORS.muted,
                    }}
                  >
                    {option.label}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>

      {/* Creator Grid */}
      <ScrollView
        contentContainerStyle={{
          paddingVertical: 32,
          paddingHorizontal: 24,
        }}
        style={{ flex: 1 }}
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
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 24,
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            {filteredCreators.map((creator) => (
              <CreatorCard
                avgResponseTime={creator.avgResponseTime}
                completedBriefs={creator.completedBriefs}
                id={creator.id}
                key={creator.id}
                level={creator.level}
                name={creator.name}
                niches={creator.niches}
                startingRate={creator.startingRate}
                tagline={creator.tagline}
                trustScore={creator.trustScore}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
