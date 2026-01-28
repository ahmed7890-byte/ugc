import { Ionicons } from "@expo/vector-icons";
import { useConvexAuth } from "convex/react";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { UGCLogo } from "@/components/UGCLogo";
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

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Browse Creators", href: "/browse/creators" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
];

interface WebHeaderProps {
  /** Callback when search is submitted */
  onSearch?: (query: string) => void;
}

export function WebHeader({ onSearch }: WebHeaderProps) {
  const { isMobile, isTablet } = useResponsive();
  const { isAuthenticated } = useConvexAuth();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch?.(searchQuery);
      // Navigate to search results (placeholder)
      router.push("/browse/creators" as any);
    }
  };

  const showMobileNav = isMobile || isTablet;

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: THEME_COLORS.background,
        borderBottomWidth: 1,
        borderBottomColor: THEME_COLORS.border,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 24,
          paddingVertical: 12,
          maxWidth: 1200,
          marginHorizontal: "auto",
          width: "100%",
        }}
      >
        {/* Logo */}
        <Link asChild href="/">
          <Pressable
            style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
          >
            <UGCLogo size={36} />
            {!isMobile && (
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "600",
                  color: THEME_COLORS.foreground,
                }}
              >
                UGC Marketplace
              </Text>
            )}
          </Pressable>
        </Link>

        {/* Desktop Navigation */}
        {!showMobileNav && (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 32 }}>
            {NAV_ITEMS.map((item) => (
              <Link asChild href={item.href as any} key={item.href}>
                <Pressable>
                  {({ pressed, hovered }) => (
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "500",
                        color: hovered
                          ? THEME_COLORS.primary
                          : THEME_COLORS.foreground,
                        opacity: pressed ? 0.7 : 1,
                      }}
                    >
                      {item.label}
                    </Text>
                  )}
                </Pressable>
              </Link>
            ))}
          </View>
        )}

        {/* Search Bar (Desktop) */}
        {!showMobileNav && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: isSearchExpanded
                ? THEME_COLORS.primary
                : THEME_COLORS.border,
              borderRadius: 24,
              paddingHorizontal: 12,
              paddingVertical: 6,
              minWidth: isSearchExpanded ? 280 : 44,
              backgroundColor: THEME_COLORS.background,
            }}
          >
            {isSearchExpanded ? (
              <>
                <TextInput
                  autoFocus
                  onBlur={() => {
                    if (!searchQuery) setIsSearchExpanded(false);
                  }}
                  onChangeText={setSearchQuery}
                  onSubmitEditing={handleSearch}
                  placeholder="Search creators or briefs..."
                  placeholderTextColor={THEME_COLORS.muted}
                  returnKeyType="search"
                  style={{
                    flex: 1,
                    fontSize: 14,
                    color: THEME_COLORS.foreground,
                  }}
                  value={searchQuery}
                />
                <Pressable onPress={handleSearch}>
                  <Ionicons
                    color={THEME_COLORS.primary}
                    name="search"
                    size={20}
                  />
                </Pressable>
              </>
            ) : (
              <Pressable onPress={() => setIsSearchExpanded(true)}>
                <Ionicons color={THEME_COLORS.muted} name="search" size={20} />
              </Pressable>
            )}
          </View>
        )}

        {/* Auth Buttons (Desktop) */}
        {!showMobileNav && (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            {isAuthenticated ? (
              <Link asChild href="/(tabs)/more">
                <Pressable
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <Ionicons
                    color={THEME_COLORS.foreground}
                    name="person-circle-outline"
                    size={28}
                  />
                </Pressable>
              </Link>
            ) : (
              <>
                <Link asChild href="/(auth)/landing">
                  <Pressable>
                    {({ hovered }) => (
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "500",
                          color: hovered
                            ? THEME_COLORS.primary
                            : THEME_COLORS.foreground,
                        }}
                      >
                        Sign In
                      </Text>
                    )}
                  </Pressable>
                </Link>
                <Link asChild href="/(auth)/landing">
                  <Pressable
                    style={{
                      backgroundColor: THEME_COLORS.primary,
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                      borderRadius: 8,
                    }}
                  >
                    {({ pressed }) => (
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "600",
                          color: THEME_COLORS.primaryForeground,
                          opacity: pressed ? 0.8 : 1,
                        }}
                      >
                        Join
                      </Text>
                    )}
                  </Pressable>
                </Link>
              </>
            )}
          </View>
        )}

        {/* Mobile Menu Button */}
        {showMobileNav && (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
            <Pressable onPress={() => setIsSearchExpanded(!isSearchExpanded)}>
              <Ionicons
                color={THEME_COLORS.foreground}
                name="search"
                size={24}
              />
            </Pressable>
            <Pressable onPress={() => setIsMobileMenuOpen(true)}>
              <Ionicons color={THEME_COLORS.foreground} name="menu" size={28} />
            </Pressable>
          </View>
        )}
      </View>

      {/* Mobile Search Bar (expanded) */}
      {showMobileNav && isSearchExpanded && (
        <View
          style={{
            paddingHorizontal: 24,
            paddingBottom: 12,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: THEME_COLORS.border,
              borderRadius: 24,
              paddingHorizontal: 16,
              paddingVertical: 10,
              backgroundColor: THEME_COLORS.background,
            }}
          >
            <TextInput
              autoFocus
              onChangeText={setSearchQuery}
              onSubmitEditing={handleSearch}
              placeholder="Search creators or briefs..."
              placeholderTextColor={THEME_COLORS.muted}
              returnKeyType="search"
              style={{
                flex: 1,
                fontSize: 16,
                color: THEME_COLORS.foreground,
              }}
              value={searchQuery}
            />
            <Pressable onPress={handleSearch}>
              <Ionicons color={THEME_COLORS.primary} name="search" size={22} />
            </Pressable>
          </View>
        </View>
      )}

      {/* Mobile Menu Modal */}
      <Modal
        animationType="slide"
        onRequestClose={() => setIsMobileMenuOpen(false)}
        transparent
        visible={isMobileMenuOpen}
      >
        <Pressable
          onPress={() => setIsMobileMenuOpen(false)}
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "80%",
              maxWidth: 320,
              backgroundColor: THEME_COLORS.background,
              shadowColor: "#000",
              shadowOffset: { width: -2, height: 0 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
            }}
          >
            {/* Close Button */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: 16,
                borderBottomWidth: 1,
                borderBottomColor: THEME_COLORS.border,
              }}
            >
              <Pressable onPress={() => setIsMobileMenuOpen(false)}>
                <Ionicons
                  color={THEME_COLORS.foreground}
                  name="close"
                  size={28}
                />
              </Pressable>
            </View>

            {/* Menu Items */}
            <ScrollView style={{ flex: 1 }}>
              {NAV_ITEMS.map((item) => (
                <Link asChild href={item.href as any} key={item.href}>
                  <Pressable
                    onPress={() => setIsMobileMenuOpen(false)}
                    style={{
                      paddingHorizontal: 24,
                      paddingVertical: 16,
                      borderBottomWidth: 1,
                      borderBottomColor: THEME_COLORS.border,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "500",
                        color: THEME_COLORS.foreground,
                      }}
                    >
                      {item.label}
                    </Text>
                  </Pressable>
                </Link>
              ))}

              {/* Auth Section */}
              <View style={{ padding: 24, gap: 12 }}>
                {isAuthenticated ? (
                  <Link asChild href="/(tabs)/more">
                    <Pressable
                      onPress={() => setIsMobileMenuOpen(false)}
                      style={{
                        backgroundColor: THEME_COLORS.primary,
                        paddingVertical: 14,
                        borderRadius: 8,
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "600",
                          color: THEME_COLORS.primaryForeground,
                        }}
                      >
                        My Account
                      </Text>
                    </Pressable>
                  </Link>
                ) : (
                  <>
                    <Link asChild href="/(auth)/landing">
                      <Pressable
                        onPress={() => setIsMobileMenuOpen(false)}
                        style={{
                          borderWidth: 1,
                          borderColor: THEME_COLORS.primary,
                          paddingVertical: 14,
                          borderRadius: 8,
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: "600",
                            color: THEME_COLORS.primary,
                          }}
                        >
                          Sign In
                        </Text>
                      </Pressable>
                    </Link>
                    <Link asChild href="/(auth)/landing">
                      <Pressable
                        onPress={() => setIsMobileMenuOpen(false)}
                        style={{
                          backgroundColor: THEME_COLORS.primary,
                          paddingVertical: 14,
                          borderRadius: 8,
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: "600",
                            color: THEME_COLORS.primaryForeground,
                          }}
                        >
                          Join
                        </Text>
                      </Pressable>
                    </Link>
                  </>
                )}
              </View>
            </ScrollView>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

export default WebHeader;
