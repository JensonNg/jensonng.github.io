# Writing a blog post

Posts live in `src/content/blog/`. Each post is one Markdown (`.md`) text file.

## Start a new post
1. Copy a template from `src/content/blog/_templates/`:
   - `recipe.md` for Kitchen posts with a recipe
   - `article.md` for Work or "Where They Meet" posts
2. Paste it into `src/content/blog/` and give it a short name with dashes, e.g. `banh-mi-at-home.md`.
   The file name becomes the address: `jensonng.github.io/blog/banh-mi-at-home`.
3. Fill in the fields at the top and write the post below the second `---` line.

## Categories
| `category:` | Shown as | For |
| --- | --- | --- |
| `kitchen` | Kitchen | Recipes, food notes, Vietnamese-in-Sweden stories |
| `work` | Work | Lessons from marketing |
| `crossover` | Where They Meet | Food brands, pop-ups, content through a marketer's eyes |

## Photos
Put photos in `public/images/blog/<post-name>/` and refer to them as `/images/blog/<post-name>/photo.jpg`.
Keep each photo under about 500 KB (export at around 1600 px wide) so pages load fast.

## Preview, then publish
- `draft: true` – the post shows on localhost only (`npm run dev`, http://localhost:3000/blog).
- `draft: false` – the post goes live the next time the site is published.
- The Blog link appears in the top menu automatically once the first post is published.

## Example drafts
`example-recipe.md` and `example-article.md` are drafts that show the layout on localhost.
Delete them when your first real post is ready.
