import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { BriefCard } from "@/components/web/BriefCard";
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

// Mock brief data
const MOCK_BRIEFS = [
  {
    id: "1",
    title: "Product Review Video for Skincare Brand",
    brandName: "GlowUp Beauty",
    description:
      "Looking for authentic UGC creator to review our new vitamin C serum.",
    budget: 500,
    category: "Beauty",
    daysRemaining: 5,
    paymentSecured: true,
  },
  {
    id: "2",
    title: "Unboxing TikTok for Wireless Earbuds",
    brandName: "SoundWave Tech",
    description:
      "Create an engaging unboxing video showcasing our premium wireless earbuds.",
    budget: 350,
    category: "Tech",
    daysRemaining: 3,
    paymentSecured: true,
  },
  {
    id: "3",
    title: "Lifestyle Content for Fitness App",
    brandName: "FitLife Pro",
    description: "Show how our app fits into your daily workout routine.",
    budget: 600,
    category: "Fitness",
    daysRemaining: 7,
    paymentSecured: true,
  },
  {
    id: "4",
    title: "Recipe Video for Organic Snacks",
    brandName: "NatureBite",
    description: "Create a fun recipe using our organic snack products.",
    budget: 400,
    category: "Food",
    daysRemaining: 4,
    paymentSecured: true,
  },
  {
    id: "5",
    title: "Fashion Haul Video",
    brandName: "UrbanStyle Co",
    description: "Showcase our new spring collection with styling tips.",
    budget: 550,
    category: "Fashion",
    daysRemaining: 6,
    paymentSecured: true,
  },
  {
    id: "6",
    title: "Travel Vlog Partnership",
    brandName: "WanderLux Hotels",
    description: "Document your stay at our boutique hotel property.",
    budget: 800,
    category: "Travel",
    daysRemaining: 10,
    paymentSecured: true,
  },
  {
    id: "7",
    title: "Gaming Headset Review",
    brandName: "ProGamer Gear",
    description: "In-depth review of our new surround sound gaming headset.",
    budget: 300,
    category: "Gaming",
    daysRemaining: 5,
    paymentSecured: true,
  },
  {
    id: "8",
    title: "Morning Routine with Our Coffee",
    brandName: "BeanBrew Co",
    description:
      "Feature our specialty coffee in your morning routine content.",
    budget: 350,
    category: "Lifestyle",
    daysRemaining: 4,
    paymentSecured: true,
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

// Budget filters
const BUDGET_FILTERS = [
  { id: "all", label: "All Budgets" },
  { id: "under300", label: "Under $300" },
  { id: "300-500", label: "$300 - $500" },
  { id: "500-800", label: "$500 - $800" },
  { id: "over800", label: "$800+" },
];

export default function BrowseBriefsPage() {
  const { width, isMobile } = useResponsive();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBudget, setSelectedBudget] = useState("all");

  // Grid columns calculated but using flex-wrap for responsiveness
  const _columns = getResponsiveValue(width, {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  });
  void _columns; // Used for future grid layout implementation

  // Filter briefs
  const filteredBriefs = MOCK_BRIEFS.filter((brief) => {
    const categoryMatch =
      selectedCategory === "all" ||
      brief.category.toLowerCase() === selectedCategory;

    let budgetMatch = true;
    if (selectedBudget === "under300") budgetMatch = brief.budget < 300;
    else if (selectedBudget === "300-500")
      budgetMatch = brief.budget >= 300 && brief.budget <= 500;
    else if (selectedBudget === "500-800")
      budgetMatch = brief.budget >= 500 && brief.budget <= 800;
    else if (selectedBudget === "over800") budgetMatch = brief.budget > 800;

    return categoryMatch && budgetMatch;
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
            Browse Briefs
          </Text>
          <Text style={{ fontSize: 16, color: THEME_COLORS.muted }}>
            {filteredBriefs.length} briefs available • All with secured payment
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

          {/* Budget Filter */}
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <Text style={{ fontSize: 14, color: THEME_COLORS.muted }}>
              Budget:
            </Text>
            <ScrollView
              contentContainerStyle={{ gap: 8 }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {BUDGET_FILTERS.map((filter) => (
                <Pressable
                  key={filter.id}
                  onPress={() => setSelectedBudget(filter.id)}
                  style={{
                    paddingHorizontal: 12,
                    paddingVertical: 6,
                    borderRadius: 16,
                    backgroundColor:
                      selectedBudget === filter.id ? "#f0fdf4" : "transparent",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: selectedBudget === filter.id ? "600" : "400",
                      color:
                        selectedBudget === filter.id
                          ? THEME_COLORS.primary
                          : THEME_COLORS.muted,
                    }}
                  >
                    {filter.label}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>

      {/* Brief Grid */}
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
            {filteredBriefs.map((brief) => (
              <BriefCard
                brandName={brief.brandName}
                budget={brief.budget}
                category={brief.category}
                daysRemaining={brief.daysRemaining}
                description={brief.description}
                id={brief.id}
                key={brief.id}
                paymentSecured={brief.paymentSecured}
                title={brief.title}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
