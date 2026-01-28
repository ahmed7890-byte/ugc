import { Ionicons } from "@expo/vector-icons";
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

export interface CategoryTagProps {
  /** Display label for the tag */
  label: string;
  /** Navigation href */
  href: string;
  /** Optional icon name from Ionicons */
  icon?: keyof typeof Ionicons.glyphMap;
  /** Whether this tag is currently active/selected */
  isActive?: boolean;
  /** Optional onPress handler (if not using href navigation) */
  onPress?: () => void;
  /** Size variant */
  size?: "small" | "medium" | "large";
  /** Color variant - light for dark backgrounds */
  variant?: "default" | "light";
}

export function CategoryTag({
  label,
  href,
  icon,
  isActive = false,
  onPress,
  size = "medium",
  variant = "default",
}: CategoryTagProps) {
  const sizeStyles = {
    small: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      fontSize: 12,
      iconSize: 14,
      gap: 4,
    },
    medium: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      fontSize: 14,
      iconSize: 16,
      gap: 6,
    },
    large: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      fontSize: 16,
      iconSize: 18,
      gap: 8,
    },
  };

  const currentSize = sizeStyles[size];

  const isLight = variant === "light";

  const getBackgroundColor = (hovered: boolean) => {
    if (isActive || hovered) return THEME_COLORS.primary;
    if (isLight) return "rgba(255, 255, 255, 0.15)";
    return THEME_COLORS.background;
  };

  const getBorderColor = (hovered: boolean) => {
    if (isActive || hovered) return THEME_COLORS.primary;
    if (isLight) return "rgba(255, 255, 255, 0.3)";
    return THEME_COLORS.border;
  };

  const getTextColor = (hovered: boolean) => {
    if (isActive || hovered) return THEME_COLORS.primaryForeground;
    if (isLight) return "#FFFFFF";
    return THEME_COLORS.foreground;
  };

  const getIconColor = (hovered: boolean) => {
    if (isActive || hovered) return THEME_COLORS.primaryForeground;
    if (isLight) return "rgba(255, 255, 255, 0.8)";
    return THEME_COLORS.muted;
  };

  const TagContent = ({ hovered = false }: { hovered?: boolean }) => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: currentSize.gap,
        paddingHorizontal: currentSize.paddingHorizontal,
        paddingVertical: currentSize.paddingVertical,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: getBorderColor(hovered),
        backgroundColor: getBackgroundColor(hovered),
      }}
    >
      {icon && (
        <Ionicons
          color={getIconColor(hovered)}
          name={icon}
          size={currentSize.iconSize}
        />
      )}
      <Text
        style={{
          fontSize: currentSize.fontSize,
          fontWeight: "500",
          color: getTextColor(hovered),
        }}
      >
        {label}
      </Text>
    </View>
  );

  if (onPress) {
    return (
      <Pressable onPress={onPress}>
        {({ hovered }) => <TagContent hovered={hovered} />}
      </Pressable>
    );
  }

  return (
    <Link asChild href={href as any}>
      <Pressable>{({ hovered }) => <TagContent hovered={hovered} />}</Pressable>
    </Link>
  );
}

export default CategoryTag;
