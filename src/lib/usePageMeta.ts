import { useEffect } from "react";

const SITE = "https://jensonng.github.io";

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  const previous = el.getAttribute("content");
  el.setAttribute("content", content);
  return () => {
    if (previous !== null) el!.setAttribute("content", previous);
  };
}

// Sets the page title and share tags while a page is open, and restores the
// site defaults when the visitor navigates away.
export function usePageMeta(title: string, description: string, image?: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    const img = image ? (image.startsWith("http") ? image : SITE + image) : undefined;
    const restores = [
      setMeta('meta[name="description"]', "name", "description", description),
      setMeta('meta[property="og:title"]', "property", "og:title", title),
      setMeta('meta[property="og:description"]', "property", "og:description", description),
      setMeta('meta[name="twitter:title"]', "name", "twitter:title", title),
      setMeta('meta[name="twitter:description"]', "name", "twitter:description", description),
      ...(img
        ? [
            setMeta('meta[property="og:image"]', "property", "og:image", img),
            setMeta('meta[name="twitter:image"]', "name", "twitter:image", img),
          ]
        : []),
    ];
    return () => {
      document.title = previousTitle;
      restores.forEach((restore) => restore());
    };
  }, [title, description, image]);
}
