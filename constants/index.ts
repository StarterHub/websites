export const cacheLngKey: string = "__starter_lng__";
export const cacheThemeKey: string = "__starter_theme__";
export const basePath =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "/starter-projects"
    : "";
export const host =
  process.env.NODE_ENV === "production"
    ? `https://kjxbyz.com${basePath}`
    : `http://localhost:3000${basePath}`;
