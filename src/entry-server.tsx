// Build-time entry: renders each public page to HTML so crawlers and AI tools
// that do not run JavaScript still get the full content (scripts/prerender.mjs).
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { AppContent } from "./App";
import { getPageMeta, headTags, llmsTxt, publicPaths, sitemapXml } from "./lib/seo";

export function render(path: string): { html: string; head: string } {
  const meta = getPageMeta(path);
  if (!meta) throw new Error(`No page metadata for ${path}`);
  const html = renderToString(
    <StaticRouter location={path}>
      <AppContent />
    </StaticRouter>,
  );
  return { html, head: headTags(meta) };
}

export { llmsTxt, publicPaths, sitemapXml };
