
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';
  import tailwindcss from '@tailwindcss/vite';
  import path from 'path';
  import fs from 'fs';
  import type { Plugin } from 'vite';
  import { parseFrontmatter } from './src/lib/frontmatter';

  // After each build, write a small HTML page per published blog post
  // (dist/blog/<slug>/index.html) with the post's title, summary and cover
  // baked in. LinkedIn and other link previews don't run JavaScript, so this
  // is what makes shared post links show the right preview.
  function blogSharePages(): Plugin {
    const SITE = 'https://jensonng.github.io';
    const esc = (v: string) =>
      v.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const setTag = (html: string, pattern: RegExp, replacement: string) =>
      pattern.test(html) ? html.replace(pattern, replacement) : html.replace('</head>', `  ${replacement}\n  </head>`);

    function page(template: string, title: string, description: string, url: string, image: string, type: string) {
      let html = template.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
      html = setTag(html, /<meta name="description"[^>]*>/, `<meta name="description" content="${esc(description)}" />`);
      html = setTag(html, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(title)}" />`);
      html = setTag(html, /<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(description)}" />`);
      html = setTag(html, /<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${esc(image)}" />`);
      html = setTag(html, /<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${esc(url)}" />`);
      html = setTag(html, /<meta property="og:type"[^>]*>/, `<meta property="og:type" content="${type}" />`);
      html = setTag(html, /<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${esc(image)}" />`);
      return html;
    }

    return {
      name: 'blog-share-pages',
      apply: 'build',
      closeBundle() {
        const dist = path.resolve(__dirname, 'dist');
        const postsDir = path.resolve(__dirname, 'src/content/blog');
        const indexFile = path.join(dist, 'index.html');
        if (!fs.existsSync(indexFile) || !fs.existsSync(postsDir)) return;
        const template = fs.readFileSync(indexFile, 'utf8');
        const defaultImage = `${SITE}/images/og-thumbnail.png`;

        const write = (rel: string, html: string) => {
          const dir = path.join(dist, rel);
          fs.mkdirSync(dir, { recursive: true });
          fs.writeFileSync(path.join(dir, 'index.html'), html);
        };

        write('blog', page(template, 'Blog – Son Nguyen',
          'Recipes, food notes and lessons from marketing: a marketer who cooks, and a cook who thinks like a marketer.',
          `${SITE}/blog`, defaultImage, 'website'));

        let count = 0;
        for (const file of fs.readdirSync(postsDir)) {
          if (!file.endsWith('.md') || file.startsWith('_')) continue;
          const { data } = parseFrontmatter(fs.readFileSync(path.join(postsDir, file), 'utf8'));
          if (String(data.draft).toLowerCase() === 'true') continue;
          const slug = file.replace(/\.md$/, '');
          const cover = typeof data.cover === 'string' && data.cover ? data.cover : '';
          const image = cover ? (cover.startsWith('http') ? cover : SITE + cover) : defaultImage;
          const title = `${typeof data.title === 'string' ? data.title : slug} – Son Nguyen`;
          const summary = typeof data.summary === 'string' ? data.summary : '';
          write(`blog/${slug}`, page(template, title, summary, `${SITE}/blog/${slug}`, image, 'article'));
          count++;
        }
        console.log(`blog-share-pages: wrote share pages for ${count} published post(s)`);
      },
    };
  }

  export default defineConfig({
    plugins: [react(), tailwindcss(), blogSharePages()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'vaul@1.1.2': 'vaul',
        'sonner@2.0.3': 'sonner',
        'recharts@2.15.2': 'recharts',
        'react-resizable-panels@2.1.7': 'react-resizable-panels',
        'react-hook-form@7.55.0': 'react-hook-form',
        'react-day-picker@8.10.1': 'react-day-picker',
        'next-themes@0.4.6': 'next-themes',
        'lucide-react@0.487.0': 'lucide-react',
        'input-otp@1.4.2': 'input-otp',
        'figma:asset/c74ad8233c7850b416c0d322784aaae053a99f61.png': path.resolve(__dirname, './src/assets/c74ad8233c7850b416c0d322784aaae053a99f61.png'),
        'figma:asset/b9d29cf634fdf1ebba58a9a6471bb26ba1e2f1c5.png': path.resolve(__dirname, './src/assets/b9d29cf634fdf1ebba58a9a6471bb26ba1e2f1c5.png'),
        'figma:asset/84ace3ae11e9f0f382a10a4ccc3eae5ef42aa9ac.png': path.resolve(__dirname, './src/assets/84ace3ae11e9f0f382a10a4ccc3eae5ef42aa9ac.png'),
        'figma:asset/47f32426d8547b89328c9ab1d8fee70e80030de1.png': path.resolve(__dirname, './src/assets/47f32426d8547b89328c9ab1d8fee70e80030de1.png'),
        'figma:asset/4125bcc198a601d52d88051146403a12d203cde7.png': path.resolve(__dirname, './src/assets/4125bcc198a601d52d88051146403a12d203cde7.png'),
        'figma:asset/4124704a542996e3710071803911cce88096775c.png': path.resolve(__dirname, './src/assets/4124704a542996e3710071803911cce88096775c.png'),
        'figma:asset/1e960cafd215c602f918461bdf659ed69ec10c28.png': path.resolve(__dirname, './src/assets/1e960cafd215c602f918461bdf659ed69ec10c28.png'),
        'embla-carousel-react@8.6.0': 'embla-carousel-react',
        'cmdk@1.1.1': 'cmdk',
        'class-variance-authority@0.7.1': 'class-variance-authority',
        '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
        '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
        '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
        '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
        '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
        '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
        '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
        '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
        '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
        '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
        '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
        '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
        '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
        '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
        '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
        '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
        '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
        '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
        '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
        '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
        '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
        '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
        '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
        '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
        '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
        '@jsr/supabase__supabase-js@2.49.8': '@jsr/supabase__supabase-js',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'dist',
    },
    server: {
      port: 3000,
      open: true,
    },
  });