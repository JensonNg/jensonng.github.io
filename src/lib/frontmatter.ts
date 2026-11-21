// Tiny front-matter parser for blog posts.
// Supports the small YAML subset the post templates use:
//   key: value
//   key: [one, two]
//   key:
//     - list item
// Used both in the browser (src/lib/blog.ts) and at build time (vite.config.ts).

export type FrontmatterValue = string | string[];
export type Frontmatter = Record<string, FrontmatterValue>;

function unquote(value: string): string {
  const v = value.trim();
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    return v.slice(1, -1);
  }
  return v;
}

export function parseFrontmatter(raw: string): { data: Frontmatter; body: string } {
  const text = raw.replace(/^﻿/, "").replace(/\r\n/g, "\n");
  const match = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: text };

  const data: Frontmatter = {};
  let currentListKey: string | null = null;

  for (const line of match[1].split("\n")) {
    if (!line.trim() || line.trim().startsWith("#")) continue;

    const listItem = line.match(/^\s+-\s+(.*)$/);
    if (listItem && currentListKey) {
      (data[currentListKey] as string[]).push(unquote(listItem[1]));
      continue;
    }

    const pair = line.match(/^([A-Za-z][\w-]*):\s*(.*)$/);
    if (!pair) continue;
    const [, key, rest] = pair;
    const value = rest.trim();

    if (value === "") {
      data[key] = [];
      currentListKey = key;
    } else if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((item) => unquote(item))
        .filter(Boolean);
      currentListKey = null;
    } else {
      data[key] = unquote(value);
      currentListKey = null;
    }
  }

  return { data, body: match[2] };
}
