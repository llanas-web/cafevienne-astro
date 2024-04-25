export const LIST_LOCALE = ["fr", "en", "es", "ca"] as const;

export interface StrapiLocale {
  locale: (typeof LIST_LOCALE)[number];
}
