# Design Portfolio

A one-page dark, minimalist, editorial-style design portfolio. Built with React + Vite + Tailwind CSS + Framer Motion, ready to deploy on GitHub Pages.

## Project structure

```
src/
  data/
    images.js      ← every image on the site, one constant per slot (swap here)
    content.js      ← every piece of copy on the site (swap here)
  components/
    Hero.jsx
    WhoIsMe.jsx
    Background.jsx
    MyArt.jsx
    Quote.jsx
    MoreWork.jsx
  App.jsx
  main.jsx
  index.css
index.html
vite.config.js
tailwind.config.js
```

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Replacing images

Everything image-related lives in `src/data/images.js`. Two ways to swap a photo:

1. Change the value in `images.js` to any image URL, e.g.:
   ```js
   heroProfile: "https://yoursite.com/your-photo.jpg",
   ```
2. Or drop your file into `public/images/` and point to it locally:
   ```js
   heroProfile: "/images/hero-profile.jpg",
   ```

No component files need to be touched — every component imports from this one file.

## Editing text

All copy (name, headings, bio, bullet lists, captions, quote) lives in `src/data/content.js`.

## Deploying to GitHub Pages

1. **Set the base path.** Open `vite.config.js` and set `base` to match your repo:
   - Project site (`https://<username>.github.io/<repo-name>/`) → `base: "/<repo-name>/"`
   - User/org root site (`https://<username>.github.io/`) → `base: "/"`

   This project defaults to `base: "/design-portfolio/"` — update `<repo-name>` to your actual GitHub repo name.

2. **Push the project to a GitHub repo** (if you haven't already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```

3. **Build and deploy** (uses the `gh-pages` package, already wired into `package.json`):
   ```bash
   npm install
   npm run deploy
   ```
   This runs `npm run build` first (via `predeploy`), then pushes the contents of `dist/` to a `gh-pages` branch.

4. **Enable Pages in GitHub.** In your repo: Settings → Pages → set "Build and deployment" source to "Deploy from a branch" → branch `gh-pages`, folder `/ (root)`.

5. Your site will be live at `https://<username>.github.io/<repo-name>/` within a minute or two.

## Notes

- All animation is done with Framer Motion (`whileInView` + `viewport={{ once: true }}` for scroll reveals, staggered per element).
- Reduced-motion is respected via a `prefers-reduced-motion` media query in `index.css`.
- Placeholder images come from `placehold.co` and can be swapped out at any time as described above.
