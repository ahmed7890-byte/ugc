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

// Level badge colors
const LEVEL_COLORS = {
  new: { bg: "#f5f5f5", text: "#666666" },
  rising: { bg: "#fef3c7", text: "#92400e" },
  established: { bg: "#dbeafe", text: "#1e40af" },
  pro: { bg: "#f0fdf4", text: "#166534" },
};

export interface CreatorCardProps {
  /** Creator ID for navigation */
  id: string;
  /** Creator display name */
  name: string;
  /** Profile image URL */
  avatarUrl?: string;
  /** Creator tagline/bio */
  tagline: string;
  /** Creator niches/categories */
  niches: string[];
  /** Trust score (0-100) */
  trustScore?: number;
  /** Experience level */
  level?: "new" | "rising" | "established" | "pro";
  /** Starting rate */
  startingRate?: number;
  /** Currency */
  currency?: string;
  /** Completed briefs count */
  completedBriefs?: number;
  /** Average response time */
  avgResponseTime?: string;
  /** Press handler (alternative to href navigation) */
  onPress?: () => void;
}

export function CreatorCard({
  id,
  name,
  avatarUrl,
  tagline,
  niches,
  trustScore,
  level = "new",
  startingRate,
  currency = "$",
  completedBriefs,
  avgResponseTime,
  onPress,
}: CreatorCardProps) {
  const levelConfig = LEVEL_COLORS[level];
  const levelLabel =
    level === "new"
      ? "New"
      : level === "rising"
        ? "Rising"
        : level === "established"
          ? "Established"
          : "Pro";

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
        padding: 20,
      }}
    >
      {/* Header with Avatar */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          marginBottom: 16,
        }}
      >
        {/* Avatar */}
        <View style={{ position: "relative" }}>
          {avatarUrl ? (
            <Image
              contentFit="cover"
              source={{ uri: avatarUrl }}
              style={{
                width: 56,
                height: 56,
                borderRadius: 28,
              }}
            />
          ) : (
            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                backgroundColor: THEME_COLORS.primary,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: THEME_COLORS.primaryForeground,
                  fontSize: 22,
                  fontWeight: "600",
                }}
              >
                {name.charAt(0)}
              </Text>
            </View>
          )}
          {/* Level Badge */}
          {level === "pro" && (
            <View
              style={{
                position: "absolute",
                bottom: -2,
                right: -2,
                backgroundColor: THEME_COLORS.primary,
                width: 20,
                height: 20,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 2,
                borderColor: THEME_COLORS.background,
              }}
            >
              <Ionicons
                color={THEME_COLORS.primaryForeground}
                name="checkmark"
                size={12}
              />
            </View>
          )}
        </View>

        {/* Name & Level */}
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: THEME_COLORS.foreground,
              marginBottom: 4,
            }}
          >
            {name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <View
              style={{
                backgroundColor: levelConfig.bg,
                paddingHorizontal: 8,
                paddingVertical: 2,
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: "600",
                  color: levelConfig.text,
                }}
              >
                {levelLabel}
              </Text>
            </View>
            {trustScore !== undefined && (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <Ionicons color="#fbbf24" name="star" size={12} />
                <Text
                  style={{
                    fontSize: 12,
                    color: THEME_COLORS.muted,
                    fontWeight: "500",
                  }}
                >
                  {trustScore}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>

      {/* Tagline */}
      <Text
        numberOfLines={2}
        style={{
          fontSize: 14,
          color: THEME_COLORS.muted,
          marginBottom: 12,
          lineHeight: 20,
        }}
      >
        {tagline}
      </Text>

      {/* Niches */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 6,
          marginBottom: 16,
        }}
      >
        {niches.slice(0, 3).map((niche) => (
          <View
            key={niche}
            style={{
              backgroundColor: "#f5f5f5",
              paddingHorizontal: 10,
              paddingVertical: 4,
              borderRadius: 12,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: THEME_COLORS.foreground,
              }}
            >
              {niche}
            </Text>
          </View>
        ))}
      </View>

      {/* Stats */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 12,
          borderTopWidth: 1,
          borderTopColor: THEME_COLORS.border,
        }}
      >
        {completedBriefs !== undefined && (
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: THEME_COLORS.foreground,
              }}
            >
              {completedBriefs}
            </Text>
            <Text style={{ fontSize: 11, color: THEME_COLORS.muted }}>
              Completed
            </Text>
          </View>
        )}
        {avgResponseTime && (
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: THEME_COLORS.foreground,
              }}
            >
              {avgResponseTime}
            </Text>
            <Text style={{ fontSize: 11, color: THEME_COLORS.muted }}>
              Response
            </Text>
          </View>
        )}
        {startingRate !== undefined && (
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: THEME_COLORS.foreground,
              }}
            >
              {currency}
              {startingRate}
            </Text>
            <Text style={{ fontSize: 11, color: THEME_COLORS.muted }}>
              Starting
            </Text>
          </View>
        )}
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
    <Link asChild href={`/browse/creators/${id}` as any}>
      <Pressable>
        {({ hovered }) => <CardContent hovered={hovered} />}
      </Pressable>
    </Link>
  );
}

export default CreatorCard;
