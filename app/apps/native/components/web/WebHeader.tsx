import { Ionicons } from "@expo/vector-icons";
import { useConvexAuth } from "convex/react";
import { Link } from "expo-router";
import { useCallback, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Animated, {
	Easing,
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from "react-native-reanimated";
import { UGCLogo } from "@/components/UGCLogo";
import { useAuthModal } from "@/contexts/auth-modal-context";
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

export function WebHeader() {
	const { isMobile, isTablet } = useResponsive();
	const { isAuthenticated } = useConvexAuth();
	const { open: openAuthModal } = useAuthModal();

	// Menu state and animation
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuProgress = useSharedValue(0);

	const openMenu = useCallback(() => {
		setIsMenuOpen(true);
		menuProgress.value = withTiming(1, {
			duration: 300,
			easing: Easing.bezier(0.4, 0, 0.2, 1),
		});
	}, [menuProgress]);

	const closeMenu = useCallback(() => {
		menuProgress.value = withTiming(0, {
			duration: 250,
			easing: Easing.bezier(0.4, 0, 0.2, 1),
		});
		// Delay unmounting until animation completes
		setTimeout(() => setIsMenuOpen(false), 260);
	}, [menuProgress]);

	// Animated styles for menu panel - slides from right
	const menuPanelStyle = useAnimatedStyle(() => ({
		transform: [
			{
				translateX: interpolate(menuProgress.value, [0, 1], [320, 0]),
			},
		],
	}));

	// Animated styles for backdrop
	const backdropStyle = useAnimatedStyle(() => ({
		opacity: menuProgress.value,
	}));

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
								<Pressable onPress={() => openAuthModal("signin")}>
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
								<Pressable
									onPress={() => openAuthModal("signup")}
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
							</>
						)}
					</View>
				)}

				{/* Mobile Menu Button */}
				{showMobileNav && (
					<Pressable onPress={isMenuOpen ? closeMenu : openMenu}>
						<Ionicons
							color={THEME_COLORS.foreground}
							name={isMenuOpen ? "close" : "menu"}
							size={28}
						/>
					</Pressable>
				)}
			</View>

			{/* Mobile Menu Overlay - Slides from RIGHT (not bottom) */}
			{showMobileNav && isMenuOpen && (
				<View
					style={{
						position: "fixed" as any,
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						zIndex: 1001,
					}}
				>
					{/* Backdrop */}
					<Animated.View
						style={[
							{
								position: "absolute",
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								backgroundColor: "rgba(0,0,0,0.5)",
							},
							backdropStyle,
						]}
					>
						<Pressable style={{ flex: 1 }} onPress={closeMenu} />
					</Animated.View>

					{/* Menu Panel - Slides from right */}
					<Animated.View
						style={[
							{
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
							},
							menuPanelStyle,
						]}
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
							<Pressable onPress={closeMenu}>
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
										onPress={closeMenu}
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
											onPress={closeMenu}
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
										<Pressable
											onPress={() => {
												closeMenu();
												openAuthModal("signin");
											}}
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
										<Pressable
											onPress={() => {
												closeMenu();
												openAuthModal("signup");
											}}
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
									</>
								)}
							</View>
						</ScrollView>
					</Animated.View>
				</View>
			)}
		</View>
	);
}

export default WebHeader;
