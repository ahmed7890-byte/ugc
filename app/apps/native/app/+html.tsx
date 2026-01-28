import { ScrollViewStyleReset } from "expo-router/html";
import type { PropsWithChildren } from "react";

/**
 * Root HTML template for Expo web
 * Provides base SEO meta tags, Open Graph, Twitter Cards
 * Individual pages can override these using expo-router/head
 *
 * Note: JSON-LD structured data (Organization, WebSite) is handled by the
 * SEO component on individual pages to avoid duplication.
 */
export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />

        {/* Primary Meta Tags */}
        <title>UGC Marketplace - Connect Brands with Creators</title>
        <meta
          content="Find authentic user-generated content for your brand. Connect with talented creators and get high-quality UGC that converts."
          name="description"
        />
        <meta
          content="UGC, user generated content, creators, brands, marketplace, content creators, influencer marketing, authentic content, video content, social media content"
          name="keywords"
        />
        <meta content="UGC Marketplace" name="author" />

        {/* Robots */}
        <meta content="index, follow" name="robots" />
        <meta
          content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
          name="googlebot"
        />

        {/* Canonical URL - base URL, pages will override */}
        <link href="https://ugp.gruckion.com/" rel="canonical" />

        {/* Open Graph / Facebook */}
        <meta content="website" property="og:type" />
        <meta content="https://ugp.gruckion.com/" property="og:url" />
        <meta
          content="UGC Marketplace - Connect Brands with Creators"
          property="og:title"
        />
        <meta
          content="Find authentic user-generated content for your brand. Connect with talented creators and get high-quality UGC that converts."
          property="og:description"
        />
        <meta content="https://ugp.gruckion.com/og.png" property="og:image" />
        <meta content="1200" property="og:image:width" />
        <meta content="630" property="og:image:height" />
        <meta
          content="UGC Marketplace - Connect Brands with Creators"
          property="og:image:alt"
        />
        <meta content="UGC Marketplace" property="og:site_name" />
        <meta content="en_US" property="og:locale" />

        {/* Twitter */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="https://ugp.gruckion.com/" name="twitter:url" />
        <meta
          content="UGC Marketplace - Connect Brands with Creators"
          name="twitter:title"
        />
        <meta
          content="Find authentic user-generated content for your brand. Connect with talented creators and get high-quality UGC that converts."
          name="twitter:description"
        />
        <meta content="https://ugp.gruckion.com/og.png" name="twitter:image" />
        <meta content="@idoads" name="twitter:creator" />
        <meta content="@idoads" name="twitter:site" />

        {/* Theme Color */}
        <meta content="#1DBF73" name="theme-color" />
        <meta content="#1DBF73" name="msapplication-TileColor" />

        {/* Favicons */}
        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          href="/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link href="/site.webmanifest" rel="manifest" />

        {/* Apple Web App */}
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content="default" name="apple-mobile-web-app-status-bar-style" />
        <meta content="UGC Marketplace" name="apple-mobile-web-app-title" />

        {/* Google Analytics 4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YHPRFFTT25"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YHPRFFTT25');
            `,
          }}
        />

        {/* Disable body scrolling on web. This makes ScrollView components work correctly. */}
        <ScrollViewStyleReset />
      </head>
      <body>{children}</body>
    </html>
  );
}
