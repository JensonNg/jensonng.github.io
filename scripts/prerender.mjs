// Post-build step: writes a full HTML file for every public page, plus
// sitemap.xml and llms.txt, into dist/.
//
// GitHub Pages answers unknown paths with 404.html and a 404 status, so
// without these files search engines and AI crawlers would only ever see
// the homepage. Each page is written as both /about.html and /about/index.html
// so /about and /about/ are both served with a 200.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const server = await import(pathToFileURL(join(root, "dist-ssr", "entry-server.js")).href);

const template = readFileSync(join(dist, "index.html"), "utf8");
if (!template.includes("<!--app-head-->") || !template.includes("<!--app-html-->")) {
  throw new Error("dist/index.html is missing the <!--app-head--> or <!--app-html--> placeholder");
}

function write(file, content) {
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
}

const paths = server.publicPaths();
for (const path of paths) {
  const { html, head } = server.render(path);
  const page = template.replace("<!--app-head-->", head).replace("<!--app-html-->", html);
  if (path === "/") {
    write(join(dist, "index.html"), page);
  } else {
    write(join(dist, `${path.slice(1)}.html`), page);
    write(join(dist, path.slice(1), "index.html"), page);
  }
}

const today = new Date().toISOString().slice(0, 10);
write(join(dist, "sitemap.xml"), server.sitemapXml(today));
write(join(dist, "llms.txt"), server.llmsTxt());

console.log(`Prerendered ${paths.length} pages, sitemap.xml and llms.txt`);
