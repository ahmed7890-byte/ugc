import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useRef } from "react";
import {
  Pressable,
  ScrollView,
  type ScrollView as ScrollViewType,
  Text,
  View,
} from "react-native";
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

export interface CardCarouselProps<T> {
  /** Section title */
  title: string;
  /** Items to render */
  items: T[];
  /** Render function for each card */
  renderItem: (item: T, index: number) => React.ReactNode;
  /** Key extractor */
  keyExtractor: (item: T) => string;
  /** "See all" link URL */
  seeAllHref?: string;
  /** "See all" link text */
  seeAllText?: string;
  /** Loading state */
  isLoading?: boolean;
  /** Gap between cards */
  gap?: number;
}

export function CardCarousel<T>({
  title,
  items,
  renderItem,
  keyExtractor,
  seeAllHref,
  seeAllText = "See All",
  isLoading = false,
  gap = 20,
}: CardCarouselProps<T>) {
  const { isDesktop } = useResponsive();
  const scrollViewRef = useRef<ScrollViewType>(null);

  const scrollLeft = () => {
    scrollViewRef.current?.scrollTo({
      x: 0,
      animated: true,
    });
  };

  const scrollRight = () => {
    // Scroll to end
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };

  return (
    <View>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "700",
            color: THEME_COLORS.foreground,
          }}
        >
          {title}
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
          {/* Desktop Navigation Arrows */}
          {isDesktop && items.length > 3 && (
            <View style={{ flexDirection: "row", gap: 8 }}>
              <Pressable
                onPress={scrollLeft}
                style={({ hovered }) => ({
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  borderWidth: 1,
                  borderColor: hovered
                    ? THEME_COLORS.primary
                    : THEME_COLORS.border,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: hovered ? "#f0fdf4" : "transparent",
                })}
              >
                <Ionicons
                  color={THEME_COLORS.foreground}
                  name="chevron-back"
                  size={18}
                />
              </Pressable>
              <Pressable
                onPress={scrollRight}
                style={({ hovered }) => ({
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  borderWidth: 1,
                  borderColor: hovered
                    ? THEME_COLORS.primary
                    : THEME_COLORS.border,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: hovered ? "#f0fdf4" : "transparent",
                })}
              >
                <Ionicons
                  color={THEME_COLORS.foreground}
                  name="chevron-forward"
                  size={18}
                />
              </Pressable>
            </View>
          )}

          {/* See All Link */}
          {seeAllHref && (
            <Link asChild href={seeAllHref as any}>
              <Pressable
                style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
              >
                {({ hovered }) => (
                  <>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "500",
                        color: hovered
                          ? THEME_COLORS.primary
                          : THEME_COLORS.foreground,
                      }}
                    >
                      {seeAllText}
                    </Text>
                    <Ionicons
                      color={
                        hovered ? THEME_COLORS.primary : THEME_COLORS.foreground
                      }
                      name="arrow-forward"
                      size={18}
                    />
                  </>
                )}
              </Pressable>
            </Link>
          )}
        </View>
      </View>

      {/* Cards */}
      {isLoading ? (
        // Loading Skeleton
        <View style={{ flexDirection: "row", gap }}>
          {[1, 2, 3].map((i) => (
            <View
              key={i}
              style={{
                width: 300,
                height: 280,
                backgroundColor: "#f5f5f5",
                borderRadius: 12,
              }}
            />
          ))}
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={{ gap, paddingBottom: 8 }}
          horizontal
          ref={scrollViewRef}
          showsHorizontalScrollIndicator={false}
        >
          {items.map((item, index) => (
            <View key={keyExtractor(item)}>{renderItem(item, index)}</View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

export default CardCarousel;
