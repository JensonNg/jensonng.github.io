import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_NAME, SITE_URL, getPageMeta } from "../lib/seo";

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

/**
 * Keeps the document head in step with the route during client-side navigation.
 * The first load already has the same tags, written into the prerendered HTML.
 */
export function Head() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getPageMeta(pathname);
    if (!meta) return;
    const url = `${SITE_URL}${meta.path === "/" ? "/" : meta.path}`;

    document.title = meta.title;
    setMeta("name", "description", meta.description);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:image", meta.image);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", meta.type);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", meta.title);
    setMeta("name", "twitter:description", meta.description);
    setMeta("name", "twitter:image", meta.image);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    document.head.querySelectorAll('script[type="application/ld+json"]').forEach((el) => el.remove());
    for (const data of meta.jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    }
  }, [pathname]);

  return null;
}
