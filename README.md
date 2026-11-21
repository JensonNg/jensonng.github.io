# Portfolio for Creative Works

Personal portfolio site built with React, Vite and Tailwind CSS, deployed to GitHub Pages.
The original design is available in [Figma](https://www.figma.com/design/j4F5z5S1g7JXWfJYSL6VZa/Portfolio-for-Creative-Works).

## Set up on a new computer

1. Install the tools (one time only):
   - [Git](https://git-scm.com/downloads)
   - [Node.js](https://nodejs.org/) version 20 or newer (the LTS version is fine)
   - A code editor, for example [VS Code](https://code.visualstudio.com/)

2. Open a terminal and download the project into a local folder:

   ```bash
   mkdir -p ~/Projects
   cd ~/Projects
   git clone https://github.com/JensonNg/jensonng.github.io.git
   cd jensonng.github.io
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the local preview, then open the link it prints (http://localhost:3000; it usually opens automatically):

   ```bash
   npm run dev
   ```

## Everyday workflow

- Get the latest changes before you start: `git pull`
- Edit the content in `src/components` (sections) and `src/pages` (pages)
- Follow `DESIGN.md` for colours, fonts and layout; use token classes such as `bg-background` and `text-brand-ink`, never hex values
- Check both themes with the sun/moon button in the header
- Check the production build: `npm run build`
- Publish: commit and push to `master`. GitHub Actions builds the site and deploys it to GitHub Pages automatically.

## Project structure

| Folder | What lives there |
| --- | --- |
| `src/pages` | One file per page (Home, About, Projects, CV, Brand Book, ...) |
| `src/components` | Reusable sections (Hero, Experience, Testimonials, Footer, ...) |
| `src/images`, `src/assets` | Images used on the site |
| `public` | Files served as-is (favicon, social share image) |
| `.github/workflows` | Automatic deployment to GitHub Pages |
| `DESIGN.md` | The design system: colour tokens, typography, components, theme and mobile rules |
| `src/styles/globals.css` | Where the design tokens live (light values on `:root`, dark on `.dark`) |
