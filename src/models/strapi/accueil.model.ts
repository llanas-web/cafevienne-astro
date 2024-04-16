import type { PageContent, PageHeader } from "./components/page.interface";
import type { StrapiLocale } from "./locale.interface";

export interface AccueilModel extends StrapiLocale {
  entete: PageHeader;
  histoire: PageContent;
}
