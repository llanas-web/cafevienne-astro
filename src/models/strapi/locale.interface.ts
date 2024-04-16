export const LIST_LOCALE = ["fr", "en", "es", "ca"];

export interface StrapiLocale {
  locale: (typeof LIST_LOCALE)[number];
}
