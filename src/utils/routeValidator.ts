export const VALID_SECTION_IDS = [
  'hero',
  'about',
  'projects',
  'skills',
  'education',
  'contact',
] as const;

export type ValidSectionId = (typeof VALID_SECTION_IDS)[number];

export const VALID_HASHES = new Set<string>([
  '',
  '#',
  ...VALID_SECTION_IDS.map((id) => `#${id}`),
]);

export const VALID_PATHS = new Set<string>(['', '/', '/index.html']);

/**
 * Validates the current pathname and hash against the strict whitelist.
 * Returns true only if both pathname and hash exactly match the whitelist.
 */
export const isRouteValid = (): boolean => {
  if (typeof window === 'undefined') return true;

  // Validate pathname (must be root or index.html)
  const pathname = window.location.pathname;
  if (!VALID_PATHS.has(pathname)) {
    return false;
  }

  // Validate hash
  const rawHash = window.location.hash;
  if (!rawHash || rawHash === '#' || rawHash === '') {
    return true;
  }

  try {
    const decodedHash = decodeURIComponent(rawHash);
    return VALID_HASHES.has(decodedHash);
  } catch {
    // Malformed encoding throws URIError
    return false;
  }
};
