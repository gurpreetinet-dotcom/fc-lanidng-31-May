/**
 * Resolves static asset paths dynamically based on the application's base URL (import.meta.env.BASE_URL).
 * This prevents broken asset links (404 errors) when deploying to subpaths (such as GitHub Pages).
 */
export function getAssetUrl(path: string): string {
  if (!path) return "";
  
  // Return early if the path is already an absolute remote URL or a data URI
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  
  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  
  return `${cleanBase}${cleanPath}`;
}
