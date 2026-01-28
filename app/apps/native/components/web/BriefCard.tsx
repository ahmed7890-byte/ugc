import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

// Fiverr-style theme colors
const THEME_COLORS = {
  primary: "#1DBF73",
  primaryForeground: "#FFFFFF",
  foreground: "#222325",
  muted: "#62646a",
  border: "#e4e5e7",
  background: "#FFFFFF",
};

export interface BriefCardProps {
  /** Brief ID for navigation */
  id: string;
  /** Brief title */
  title: string;
  /** Brand name */
  brandName: string;
  /** Brief description/excerpt */
  description?: string;
  /** Category */
  category: string;
  /** Budget/payment amount */
  budget: number;
  /** Currency symbol */
  currency?: string;
  /** Brief status badge */
  status?: "open" | "in_progress" | "review" | "completed";
  /** Thumbnail image URL */
  thumbnailUrl?: string;
  /** Whether payment is secured */
  paymentSecured?: boolean;
  /** Days until deadline */
  daysRemaining?: number;
  /** Press handler (alternative to href navigation) */
  onPress?: () => void;
}

export function BriefCard({
  id,
  title,
  brandName,
  description,
  category,
  budget,
  currency = "$",
  thumbnailUrl,
  paymentSecured = true,
  daysRemaining,
  onPress,
}: BriefCardProps) {
  const CardContent = ({ hovered = false }: { hovered?: boolean }) => (
    <View
      style={{
        backgroundColor: THEME_COLORS.background,
        borderRadius: 12,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: THEME_COLORS.border,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: hovered ? 8 : 2 },
        shadowOpacity: hovered ? 0.12 : 0.06,
        shadowRadius: hovered ? 16 : 8,
        elevation: hovered ? 8 : 2,
        transform: [{ translateY: hovered ? -4 : 0 }],
        width: 300,
      }}
    >
      {/* Thumbnail */}
      {thumbnailUrl ? (
        <Image
          contentFit="cover"
          source={{ uri: thumbnailUrl }}
          style={{ width: "100%", height: 160 }}
        />
      ) : (
        <View
          style={{
            width: "100%",
            height: 160,
            backgroundColor: "#f5f5f5",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons color={THEME_COLORS.muted} name="image-outline" size={40} />
        </View>
      )}

      {/* Content */}
      <View style={{ padding: 16 }}>
        {/* Category & Payment Badge */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <View
            style={{
              backgroundColor: "#f0fdf4",
              paddingHorizontal: 10,
              paddingVertical: 4,
              borderRadius: 12,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: THEME_COLORS.primary,
                fontWeight: "600",
              }}
            >
              {category}
            </Text>
          </View>
          {paymentSecured && (
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <Ionicons
                color={THEME_COLORS.primary}
                name="checkmark-circle"
                size={14}
              />
              <Text
                style={{
                  fontSize: 11,
                  color: THEME_COLORS.primary,
                  fontWeight: "500",
                }}
              >
                Payment Secured
              </Text>
            </View>
          )}
        </View>

        {/* Title */}
        <Text
          numberOfLines={2}
          style={{
            fontSize: 16,
            fontWeight: "600",
            color: THEME_COLORS.foreground,
            marginBottom: 4,
            lineHeight: 22,
          }}
        >
          {title}
        </Text>

        {/* Brand */}
        <Text
          style={{
            fontSize: 13,
            color: THEME_COLORS.muted,
            marginBottom: 8,
          }}
        >
          by {brandName}
        </Text>

        {/* Description */}
        {description && (
          <Text
            numberOfLines={2}
            style={{
              fontSize: 14,
              color: THEME_COLORS.muted,
              marginBottom: 12,
              lineHeight: 20,
            }}
          >
            {description}
          </Text>
        )}

        {/* Footer */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 12,
            borderTopWidth: 1,
            borderTopColor: THEME_COLORS.border,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: THEME_COLORS.foreground,
            }}
          >
            {currency}
            {budget.toLocaleString()}
          </Text>
          {daysRemaining !== undefined && (
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <Ionicons
                color={THEME_COLORS.muted}
                name="time-outline"
                size={14}
              />
              <Text style={{ fontSize: 13, color: THEME_COLORS.muted }}>
                {daysRemaining} days left
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );

  if (onPress) {
    return (
      <Pressable onPress={onPress}>
        {({ hovered }) => <CardContent hovered={hovered} />}
      </Pressable>
    );
  }

  return (
    <Link asChild href={`/browse/briefs/${id}` as any}>
      <Pressable>
        {({ hovered }) => <CardContent hovered={hovered} />}
      </Pressable>
    </Link>
  );
}

export default BriefCard;
