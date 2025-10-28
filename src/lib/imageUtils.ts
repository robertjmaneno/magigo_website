/**
 * Helper function to get the correct image URL for deployment
 * Automatically prepends the base path for GitHub Pages deployment
 * Updated: October 28, 2025 - Logo filename fix deployed
 */
export function getImageUrl(imagePath: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // In production, use the base path; in development, use relative path
  const basePath = import.meta.env.PROD ? '/magigo_website/' : '/';
  
  return `${basePath}${cleanPath}`;
}

/**
 * Helper for background image styles
 */
export function getBackgroundImageStyle(imagePath: string): React.CSSProperties {
  return {
    backgroundImage: `url("${getImageUrl(imagePath)}")`
  };
}