import * as fs from "fs";
import * as path from "path";

const SITE_URL = "https://ugp.gruckion.com";

interface SitemapEntry {
	path: string;
	changefreq:
		| "always"
		| "hourly"
		| "daily"
		| "weekly"
		| "monthly"
		| "yearly"
		| "never";
	priority: number;
}

/**
 * List of routes to include in the sitemap
 * Add new public pages here when they are created
 */
const routes: SitemapEntry[] = [
	// Homepage - highest priority
	{ path: "/", changefreq: "daily", priority: 1.0 },

	// Main navigation pages - high priority
	{ path: "/about", changefreq: "monthly", priority: 0.8 },
	{ path: "/pricing", changefreq: "weekly", priority: 0.9 },
	{ path: "/how-it-works", changefreq: "monthly", priority: 0.9 },

	// Browse pages - high priority for marketplace
	{ path: "/browse", changefreq: "daily", priority: 0.9 },
	{ path: "/browse/creators", changefreq: "daily", priority: 0.9 },
	{ path: "/browse/briefs", changefreq: "daily", priority: 0.9 },

	// Content pages - medium priority
	{ path: "/blog", changefreq: "weekly", priority: 0.7 },
	{ path: "/guides", changefreq: "weekly", priority: 0.7 },
	{ path: "/success-stories", changefreq: "weekly", priority: 0.7 },
	{ path: "/community-events", changefreq: "weekly", priority: 0.6 },

	// Help and FAQ pages
	{ path: "/help-center", changefreq: "monthly", priority: 0.6 },
	{ path: "/brand-faq", changefreq: "monthly", priority: 0.6 },
	{ path: "/creator-faq", changefreq: "monthly", priority: 0.6 },

	// Contact page
	{ path: "/contact", changefreq: "monthly", priority: 0.5 },

	// Legal pages - lower priority but important
	{ path: "/termsofservice", changefreq: "yearly", priority: 0.3 },
	{ path: "/privacypolicy", changefreq: "yearly", priority: 0.3 },
];

/**
 * Generate the sitemap XML content
 */
function generateSitemap(): string {
	const today = new Date().toISOString().split("T")[0];

	const urls = routes
		.map(
			({ path: routePath, changefreq, priority }) => `  <url>
    <loc>${SITE_URL}${routePath}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
		)
		.join("\n");

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

/**
 * Main function to generate and write the sitemap
 */
function main() {
	const sitemap = generateSitemap();
	const outputPath = path.join(__dirname, "../public/sitemap.xml");

	fs.writeFileSync(outputPath, sitemap, "utf-8");
	console.log(`✓ Sitemap generated: ${outputPath}`);
	console.log(`  - ${routes.length} URLs included`);
	console.log(`  - Last modified: ${new Date().toISOString().split("T")[0]}`);
}

main();
