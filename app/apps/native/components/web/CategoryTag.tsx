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
}

export function CategoryTag({
  label,
  href,
  icon,
  isActive = false,
  onPress,
  size = "medium",
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
        borderColor:
          isActive || hovered ? THEME_COLORS.primary : THEME_COLORS.border,
        backgroundColor:
          isActive || hovered ? THEME_COLORS.primary : THEME_COLORS.background,
      }}
    >
      {icon && (
        <Ionicons
          color={
            isActive || hovered
              ? THEME_COLORS.primaryForeground
              : THEME_COLORS.muted
          }
          name={icon}
          size={currentSize.iconSize}
        />
      )}
      <Text
        style={{
          fontSize: currentSize.fontSize,
          fontWeight: "500",
          color:
            isActive || hovered
              ? THEME_COLORS.primaryForeground
              : THEME_COLORS.foreground,
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
