import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { useThemeColor } from "heroui-native";

// Fiverr-style theme colors for tab bar
// These match the CSS variables defined in global.css
const THEME_COLORS = {
  primary: "#1DBF73", // Fiverr green
  primaryForeground: "#FFFFFF",
};

export default function TabLayout() {
  const _router = useRouter();
  const accent = useThemeColor("accent");
  const primary = THEME_COLORS.primary;
  const primaryForeground = THEME_COLORS.primaryForeground;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: primaryForeground,
        tabBarInactiveTintColor: accent,
        tabBarStyle: {
          backgroundColor: primary,
          borderTopWidth: 0,
          height: 85,
          paddingTop: 8,
          paddingBottom: 25,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} name="home-outline" size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} name="restaurant-outline" size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: "Events",
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} name="calendar-outline" size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} name="ellipsis-horizontal" size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
