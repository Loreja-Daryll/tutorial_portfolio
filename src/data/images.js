// Central image registry.
// To replace any image on the site, either:
//   1) change the value below to a new external URL, OR
//   2) drop a file into /public/images and reference it with localImage("yourfile.jpg")
// Every component below imports from this file — no image paths are hardcoded in JSX.
//
// Do NOT hardcode paths like "/images/yourfile.jpg" — this breaks under the GitHub
// Pages subpath (e.g. /design-portfolio/). Always go through localImage(), which
// prefixes the current base URL (import.meta.env.BASE_URL) so paths resolve correctly
// in dev, `vite preview`, and the deployed site alike.
//
// Files currently sitting in /public/images (unused by any key below — swap them in
// whenever you're ready): hero.jpg, pic1.jpg, pic2.jpg, sunrise.jpg, sunrise1.jpg,
// sunset.jpg. Example: heroProfile: localImage("hero.jpg")
export function localImage(filename) {
  return `${import.meta.env.BASE_URL}images/${filename}`;
}

export const images = {
  // Hero — circular profile photo, top-right
  heroProfile: localImage("pic2.jpg"),

  // "Who is [Name]?" — arched-top candid/work photo
  whoIsMe:  localImage("hero.jpg"),

  // "My Art" — 3 equal-width arched-top cards
  artPiece1: localImage("sunrise.jpg"),
  artPiece2: localImage("sunrise1.jpg"),
  artPiece3: localImage("sunset.jpg"),

  // Quote section — arched-top image, person reading/working
  quoteSection: localImage("pic1.jpg"),

  // "More of My Work" — small circular thumbnails, varied backgrounds
  workThumb1: localImage("work1.jpg"),
  workThumb2: localImage("work2.jpg"),
  workThumb3: localImage("work3.jpg"),
  workThumb4: localImage("work4.jpg"),
  workThumb5: localImage("work5.jpg"),
};
