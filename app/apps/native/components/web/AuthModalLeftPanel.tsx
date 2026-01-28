import { Ionicons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

const THEME_COLORS = {
  primaryForeground: "#FFFFFF",
};

const VALUE_PROPS = [
  "Over 700 categories",
  "Quality work done faster",
  "Access to talent and businesses across the globe",
];

export function AuthModalLeftPanel() {
  return (
    <View style={{ width: 400, overflow: "hidden" }}>
      {/* Background Image - absolute positioned behind content */}
      <Image
        resizeMode="cover"
        source={require("@/assets/images/auth.png")}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 400,
          height: "100%",
        }}
      />

      {/* Content overlaid on top */}
      <View style={{ padding: 40, zIndex: 1 }}>
        {/* Title */}
        <Text
          style={{
            fontSize: 32,
            fontWeight: "700",
            color: THEME_COLORS.primaryForeground,
            marginBottom: 24,
            lineHeight: 40,
          }}
        >
          Success starts here
        </Text>

        {/* Value Props */}
        <View style={{ gap: 12 }}>
          {VALUE_PROPS.map((prop) => (
            <View
              key={prop}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
              }}
            >
              <Ionicons
                color={THEME_COLORS.primaryForeground}
                name="checkmark"
                size={20}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: THEME_COLORS.primaryForeground,
                  flex: 1,
                }}
              >
                {prop}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

export default AuthModalLeftPanel;
