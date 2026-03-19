# jensonng.github.io

Personal portfolio and blog website for Son Ngoc Nguyen (Jenson).

## Tech Stack

- [Eleventy (11ty)](https://www.11ty.dev/) — Static site generator
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [Nunjucks](https://mozilla.github.io/nunjucks/) — Templating engine
- [KaTeX](https://katex.org/) — Math equation rendering

## Getting Started

### Prerequisites

- Node.js (v14+)
- Yarn

### Installation

```bash
yarn install
```

### Development

Start a local dev server with live reload:

```bash
yarn start
```

### Production Build

```bash
yarn build
```

The built site will be in the `dist/` directory.

## Project Structure

```
src/
├── _data/          # Global data (site config, navigation)
├── _includes/      # Layouts and reusable partials
├── blog/           # Blog posts (Markdown)
├── projects/       # Project posts (Markdown)
├── filters/        # Custom Eleventy filters
├── utils/          # Utility functions
├── scss/           # Stylesheets (Tailwind + PostCSS)
└── images/         # Static images
```

## License

MIT
