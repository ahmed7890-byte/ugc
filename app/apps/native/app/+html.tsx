import { ScrollViewStyleReset } from "expo-router/html";
import type { PropsWithChildren } from "react";

/**
 * Root HTML template for Expo web
 * Provides base SEO meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
 * Individual pages can override these using expo-router/head
 */
export default function Root({ children }: PropsWithChildren) {
  // Organization JSON-LD structured data
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "UGC Marketplace",
    alternateName: "UGP",
    url: "https://ugp.gruckion.com",
    logo: "https://ugp.gruckion.com/og.png",
    description:
      "Connect brands with talented creators for authentic user-generated content that converts.",
    sameAs: ["https://twitter.com/gruckion"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: "https://ugp.gruckion.com/contact",
    },
  };

  // WebSite JSON-LD with search action
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "UGC Marketplace",
    url: "https://ugp.gruckion.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://ugp.gruckion.com/browse/creators?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* Primary Meta Tags */}
        <title>UGC Marketplace - Connect Brands with Creators</title>
        <meta
          name="description"
          content="Find authentic user-generated content for your brand. Connect with talented creators and get high-quality UGC that converts."
        />
        <meta
          name="keywords"
          content="UGC, user generated content, creators, brands, marketplace, content creators, influencer marketing, authentic content, video content, social media content"
        />
        <meta name="author" content="UGC Marketplace" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        />

        {/* Canonical URL - base URL, pages will override */}
        <link rel="canonical" href="https://ugp.gruckion.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ugp.gruckion.com/" />
        <meta
          property="og:title"
          content="UGC Marketplace - Connect Brands with Creators"
        />
        <meta
          property="og:description"
          content="Find authentic user-generated content for your brand. Connect with talented creators and get high-quality UGC that converts."
        />
        <meta property="og:image" content="https://ugp.gruckion.com/og.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="UGC Marketplace - Connect Brands with Creators"
        />
        <meta property="og:site_name" content="UGC Marketplace" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://ugp.gruckion.com/" />
        <meta
          name="twitter:title"
          content="UGC Marketplace - Connect Brands with Creators"
        />
        <meta
          name="twitter:description"
          content="Find authentic user-generated content for your brand. Connect with talented creators and get high-quality UGC that converts."
        />
        <meta name="twitter:image" content="https://ugp.gruckion.com/og.png" />
        <meta name="twitter:creator" content="@gruckion" />
        <meta name="twitter:site" content="@gruckion" />

        {/* Theme Color */}
        <meta name="theme-color" content="#1DBF73" />
        <meta name="msapplication-TileColor" content="#1DBF73" />

        {/* Apple Web App */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="UGC Marketplace" />
        <link rel="apple-touch-icon" href="/og.png" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* JSON-LD Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />

        {/* JSON-LD Structured Data - WebSite with Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        {/* Disable body scrolling on web. This makes ScrollView components work correctly. */}
        <ScrollViewStyleReset />
      </head>
      <body>{children}</body>
    </html>
  );
}
