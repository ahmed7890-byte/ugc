import { Slot } from "expo-router";

/**
 * Web Tabs Layout - Pass-through (No Tabs)
 *
 * On web, we don't use bottom tab navigation.
 * Instead, navigation is handled by the header in WebNavigationShell.
 * This layout simply renders the page content.
 */
export default function WebTabsLayout() {
	return <Slot />;
}
