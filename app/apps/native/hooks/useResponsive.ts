import { useWindowDimensions } from "react-native";

/**
 * Breakpoints for responsive design (matching common web standards)
 */
export const BREAKPOINTS = {
	/** Mobile: < 768px */
	mobile: 768,
	/** Tablet: 768px - 1024px */
	tablet: 1024,
	/** Desktop: >= 1024px */
	desktop: 1024,
	/** Large desktop: >= 1200px */
	largeDesktop: 1200,
} as const;

/**
 * Responsive design hook for web components
 *
 * Provides breakpoint information based on current window dimensions.
 * Use this hook to adapt component layouts for different screen sizes.
 *
 * @example
 * ```tsx
 * const { isMobile, isDesktop } = useResponsive();
 *
 * return (
 *   <View style={{ flexDirection: isMobile ? 'column' : 'row' }}>
 *     {!isMobile && <Sidebar />}
 *     <Content />
 *   </View>
 * );
 * ```
 */
export function useResponsive() {
	const { width, height } = useWindowDimensions();

	return {
		/** Current window width */
		width,
		/** Current window height */
		height,
		/** True if viewport is mobile sized (< 768px) */
		isMobile: width < BREAKPOINTS.mobile,
		/** True if viewport is tablet sized (768px - 1024px) */
		isTablet: width >= BREAKPOINTS.mobile && width < BREAKPOINTS.tablet,
		/** True if viewport is desktop sized (>= 1024px) */
		isDesktop: width >= BREAKPOINTS.desktop,
		/** True if viewport is large desktop sized (>= 1200px) */
		isLargeDesktop: width >= BREAKPOINTS.largeDesktop,
		/** True if viewport is tablet or larger */
		isTabletOrLarger: width >= BREAKPOINTS.mobile,
		/** True if viewport is smaller than desktop */
		isMobileOrTablet: width < BREAKPOINTS.desktop,
	};
}

/**
 * Get responsive value based on current breakpoint
 *
 * @example
 * ```tsx
 * const { width } = useResponsive();
 * const columns = getResponsiveValue(width, { mobile: 1, tablet: 2, desktop: 3 });
 * ```
 */
export function getResponsiveValue<T>(
	width: number,
	values: { mobile: T; tablet?: T; desktop?: T },
): T {
	if (width >= BREAKPOINTS.desktop && values.desktop !== undefined) {
		return values.desktop;
	}
	if (width >= BREAKPOINTS.mobile && values.tablet !== undefined) {
		return values.tablet;
	}
	return values.mobile;
}
