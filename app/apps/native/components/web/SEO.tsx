import Head from "expo-router/head";

/**
 * Base URL for the site - used for canonical URLs and OG tags
 */
const SITE_URL = "https://ugp.gruckion.com";

/**
 * Default OG image URL
 */
const DEFAULT_OG_IMAGE = `${SITE_URL}/og.png`;

/**
 * Site name for OG tags
 */
const SITE_NAME = "UGC Marketplace";

/**
 * Twitter handle
 */
const TWITTER_HANDLE = "@gruckion";

/**
 * Props for the SEO component
 */
export interface SEOProps {
	/** Page title - will be appended with site name */
	title: string;
	/** Meta description for the page */
	description: string;
	/** Canonical URL path (e.g., "/about" or "/browse/creators") */
	path?: string;
	/** Custom OG image URL (defaults to site OG image) */
	ogImage?: string;
	/** OG type (defaults to "website") */
	ogType?: "website" | "article" | "product";
	/** Additional keywords for meta keywords tag */
	keywords?: string[];
	/** Whether to prevent indexing (for pages like auth) */
	noIndex?: boolean;
	/** JSON-LD structured data object */
	jsonLd?: object;
}

/**
 * SEO component for Expo Router web pages
 *
 * Uses expo-router/head to inject meta tags into the document head.
 * Should be used at the top of each .web.tsx page component.
 *
 * @example
 * ```tsx
 * import { SEO } from "@/components/web/SEO";
 *
 * export default function AboutPage() {
 *   return (
 *     <>
 *       <SEO
 *         title="About Us"
 *         description="Learn about UGC Marketplace and our mission."
 *         path="/about"
 *       />
 *       <View>...</View>
 *     </>
 *   );
 * }
 * ```
 */
export function SEO({
	title,
	description,
	path = "",
	ogImage = DEFAULT_OG_IMAGE,
	ogType = "website",
	keywords = [],
	noIndex = false,
	jsonLd,
}: SEOProps) {
	// Construct full title with site name
	const fullTitle =
		title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;

	// Construct canonical URL
	const canonicalUrl = `${SITE_URL}${path}`;

	// Default keywords for the site
	const defaultKeywords = [
		"UGC",
		"user generated content",
		"creators",
		"brands",
		"marketplace",
		"content creators",
		"influencer marketing",
		"authentic content",
	];

	// Combine keywords
	const allKeywords = [...new Set([...defaultKeywords, ...keywords])];

	return (
		<Head>
			{/* Primary Meta Tags */}
			<title>{fullTitle}</title>
			<meta name="title" content={fullTitle} />
			<meta name="description" content={description} />
			<meta name="keywords" content={allKeywords.join(", ")} />

			{/* Canonical URL */}
			<link rel="canonical" href={canonicalUrl} />

			{/* Robots */}
			{noIndex ? (
				<meta name="robots" content="noindex, nofollow" />
			) : (
				<meta name="robots" content="index, follow" />
			)}
			<meta
				name="googlebot"
				content={noIndex ? "noindex, nofollow" : "index, follow"}
			/>

			{/* Open Graph / Facebook */}
			<meta property="og:type" content={ogType} />
			<meta property="og:url" content={canonicalUrl} />
			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={ogImage} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta property="og:image:alt" content={fullTitle} />
			<meta property="og:site_name" content={SITE_NAME} />
			<meta property="og:locale" content="en_US" />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:url" content={canonicalUrl} />
			<meta name="twitter:title" content={fullTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={ogImage} />
			<meta name="twitter:creator" content={TWITTER_HANDLE} />
			<meta name="twitter:site" content={TWITTER_HANDLE} />

			{/* JSON-LD Structured Data */}
			{jsonLd && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			)}
		</Head>
	);
}

/**
 * Organization JSON-LD schema for the site
 * Include this on the homepage
 */
export const organizationJsonLd = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "UGC Marketplace",
	alternateName: "UGP",
	url: SITE_URL,
	logo: `${SITE_URL}/og.png`,
	description:
		"Connect brands with talented creators for authentic user-generated content that converts.",
	sameAs: ["https://twitter.com/gruckion"],
	contactPoint: {
		"@type": "ContactPoint",
		contactType: "customer service",
		url: `${SITE_URL}/contact`,
	},
};

/**
 * WebSite JSON-LD schema with search action
 * Include this on the homepage
 */
export const websiteJsonLd = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: "UGC Marketplace",
	url: SITE_URL,
	potentialAction: {
		"@type": "SearchAction",
		target: {
			"@type": "EntryPoint",
			urlTemplate: `${SITE_URL}/browse/creators?q={search_term_string}`,
		},
		"query-input": "required name=search_term_string",
	},
};

/**
 * Helper to create WebPage JSON-LD schema
 */
export function createWebPageJsonLd(
	name: string,
	description: string,
	path: string
) {
	return {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name,
		description,
		url: `${SITE_URL}${path}`,
		isPartOf: {
			"@type": "WebSite",
			name: "UGC Marketplace",
			url: SITE_URL,
		},
	};
}

/**
 * Helper to create FAQPage JSON-LD schema
 */
export function createFAQPageJsonLd(
	faqs: Array<{ question: string; answer: string }>
) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
	};
}

/**
 * Helper to create BreadcrumbList JSON-LD schema
 */
export function createBreadcrumbJsonLd(
	items: Array<{ name: string; path: string }>
) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: `${SITE_URL}${item.path}`,
		})),
	};
}

/**
 * Service schema for UGC Marketplace services
 */
export const serviceJsonLd = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "UGC Content Creation Marketplace",
	provider: {
		"@type": "Organization",
		name: "UGC Marketplace",
	},
	description:
		"Connect with talented content creators for authentic user-generated content including videos, photos, and social media content.",
	serviceType: "Content Creation Marketplace",
	areaServed: "Worldwide",
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "UGC Services",
		itemListElement: [
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "UGC Video Production",
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Product Review Content",
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Social Media Content",
				},
			},
		],
	},
};

export default SEO;
