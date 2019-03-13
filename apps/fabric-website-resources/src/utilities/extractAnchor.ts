/** Return the anchor link from the URL without the hash */
export function extractAnchorLink(path: string): string {
  const index = path.lastIndexOf('#');
  if (index >= 0) {
    path = path.slice(index + 1);
  }
  return path;
}
