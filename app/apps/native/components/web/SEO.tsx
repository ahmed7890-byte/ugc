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
 * X (formerly Twitter) handle
 */
const TWITTER_HANDLE = "@idoads";

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
  /** Author name for the page (defaults to "UGC Marketplace") */
  author?: string;
  /** Alternate language versions of this page for internationalization */
  alternateLanguages?: Array<{
    lang: string;
    path: string;
  }>;
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
  author = "UGC Marketplace",
  alternateLanguages,
}: SEOProps) {
  // Construct full title with site name
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;

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
      <meta content={fullTitle} name="title" />
      <meta content={description} name="description" />
      <meta content={allKeywords.join(", ")} name="keywords" />
      <meta content={author} name="author" />

      {/* Canonical URL */}
      <link href={canonicalUrl} rel="canonical" />

      {/* Hreflang for internationalization */}
      {alternateLanguages && alternateLanguages.length > 0 && (
        <>
          <link href={canonicalUrl} hrefLang="x-default" rel="alternate" />
          <link href={canonicalUrl} hrefLang="en" rel="alternate" />
          {alternateLanguages.map(({ lang, path: altPath }) => (
            <link
              href={`${SITE_URL}${altPath}`}
              hrefLang={lang}
              key={lang}
              rel="alternate"
            />
          ))}
        </>
      )}

      {/* Robots */}
      {noIndex ? (
        <meta content="noindex, nofollow" name="robots" />
      ) : (
        <meta content="index, follow" name="robots" />
      )}
      <meta
        content={
          noIndex
            ? "noindex, nofollow"
            : "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        }
        name="googlebot"
      />

      {/* Open Graph / Facebook */}
      <meta content={ogType} property="og:type" />
      <meta content={canonicalUrl} property="og:url" />
      <meta content={fullTitle} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={ogImage} property="og:image" />
      <meta content="1200" property="og:image:width" />
      <meta content="630" property="og:image:height" />
      <meta content={fullTitle} property="og:image:alt" />
      <meta content={SITE_NAME} property="og:site_name" />
      <meta content="en_US" property="og:locale" />

      {/* Twitter */}
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={canonicalUrl} name="twitter:url" />
      <meta content={fullTitle} name="twitter:title" />
      <meta content={description} name="twitter:description" />
      <meta content={ogImage} name="twitter:image" />
      <meta content={TWITTER_HANDLE} name="twitter:creator" />
      <meta content={TWITTER_HANDLE} name="twitter:site" />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          type="application/ld+json"
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
  alternateName: "UGC",
  url: SITE_URL,
  logo: `${SITE_URL}/og.png`,
  description:
    "Connect brands with talented creators for authentic user-generated content that converts.",
  sameAs: ["https://x.com/idoads"],
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
 * Helper to create Article JSON-LD schema for blog posts
 */
export function createArticleJsonLd({
  headline,
  description,
  path,
  datePublished,
  dateModified,
  authorName,
  image,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: `${SITE_URL}${path}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": authorName ? "Person" : "Organization",
      name: authorName || "UGC Marketplace",
    },
    publisher: {
      "@type": "Organization",
      name: "UGC Marketplace",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og.png`,
      },
    },
    image: image || `${SITE_URL}/og.png`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${path}`,
    },
  };
}

/**
 * Helper to create Review JSON-LD schema for testimonials
 */
export function createReviewJsonLd({
  reviewBody,
  ratingValue,
  authorName,
  authorJobTitle,
  datePublished,
}: {
  reviewBody: string;
  ratingValue: number;
  authorName: string;
  authorJobTitle?: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: ratingValue.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Person",
      name: authorName,
      ...(authorJobTitle && { jobTitle: authorJobTitle }),
    },
    itemReviewed: {
      "@type": "Organization",
      name: "UGC Marketplace",
    },
    ...(datePublished && { datePublished }),
  };
}

/**
 * Helper to create AggregateRating JSON-LD schema
 */
export function createAggregateRatingJsonLd({
  ratingValue,
  reviewCount,
  bestRating = 5,
  worstRating = 1,
}: {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue: ratingValue.toString(),
    reviewCount: reviewCount.toString(),
    bestRating: bestRating.toString(),
    worstRating: worstRating.toString(),
    itemReviewed: {
      "@type": "Organization",
      name: "UGC Marketplace",
    },
  };
}

/**
 * Helper to create Event JSON-LD schema for community events
 */
export function createEventJsonLd({
  name,
  description,
  startDate,
  endDate,
  location,
  isOnline = false,
  url,
  image,
  organizer,
}: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: string;
  isOnline?: boolean;
  url?: string;
  image?: string;
  organizer?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    description,
    startDate,
    ...(endDate && { endDate }),
    eventAttendanceMode: isOnline
      ? "https://schema.org/OnlineEventAttendanceMode"
      : "https://schema.org/OfflineEventAttendanceMode",
    location: isOnline
      ? {
          "@type": "VirtualLocation",
          url: url || `${SITE_URL}/community-events`,
        }
      : {
          "@type": "Place",
          name: location || "TBD",
        },
    organizer: {
      "@type": "Organization",
      name: organizer || "UGC Marketplace",
      url: SITE_URL,
    },
    ...(image && { image }),
  };
}

/**
 * Helper to create Product JSON-LD schema for marketplace listings
 */
export function createProductJsonLd({
  name,
  description,
  price,
  currency = "USD",
  image,
  path,
  availability = "InStock",
  sellerName,
  ratingValue,
  reviewCount,
}: {
  name: string;
  description: string;
  price: number;
  currency?: string;
  image?: string;
  path: string;
  availability?: "InStock" | "OutOfStock" | "PreOrder";
  sellerName?: string;
  ratingValue?: number;
  reviewCount?: number;
}) {
  const availabilityMap = {
    InStock: "https://schema.org/InStock",
    OutOfStock: "https://schema.org/OutOfStock",
    PreOrder: "https://schema.org/PreOrder",
  };

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url: `${SITE_URL}${path}`,
    image: image || `${SITE_URL}/og.png`,
    offers: {
      "@type": "Offer",
      price: price.toString(),
      priceCurrency: currency,
      availability: availabilityMap[availability],
      seller: {
        "@type": sellerName ? "Person" : "Organization",
        name: sellerName || "UGC Marketplace",
      },
    },
    ...(ratingValue &&
      reviewCount && {
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: ratingValue.toString(),
          reviewCount: reviewCount.toString(),
        },
      }),
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
