import { createContext, useContext } from "react";
import type { ScrollView } from "react-native";

interface ScrollContextValue {
	scrollToTop: () => void;
	scrollRef: React.RefObject<ScrollView | null>;
}

export const ScrollContext = createContext<ScrollContextValue | null>(null);

export function useScrollContext() {
	const context = useContext(ScrollContext);
	if (!context) {
		throw new Error("useScrollContext must be used within a ScrollProvider");
	}
	return context;
}
