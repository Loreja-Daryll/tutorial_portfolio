import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT for GitHub Pages:
// If you deploy to https://<username>.github.io/<repo-name>/, base must be "/<repo-name>/"
// If you deploy to https://<username>.github.io/ (a user/org root site), base must be "/"
//
// The GitHub Actions workflow (.github/workflows/deploy.yml) sets VITE_BASE_PATH
// automatically from the actual repo name at build time, so production deploys
// are always correct even if this repo gets renamed later.
//
// The fallback below ("/design-portfolio/") is only used for local `npm run build`
// / `npm run preview` — update it if you rename the repo and want local preview
// to match the deployed subpath exactly. `npm run dev` is unaffected either way.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/design-portfolio/",
  build: {
    outDir: "dist",
  },
});
