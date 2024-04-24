import type {
  StrapiEncapsuler,
  StrapiEncapsulerList,
} from "./common/encapsuler";
import type { CommonMedia } from "./common/media";
import type {
  PageContent,
  PageFooter,
  PageHeader,
} from "./components/page.interface";
import type { StrapiLocale } from "./locale.interface";

export interface AccueilModel extends StrapiLocale {
  entete: PageHeader;
  histoire: PageContent;
  menu: PageContent;
  carte: StrapiEncapsuler<CommonMedia>;
  salon_header: PageHeader;
  salon_content: PageContent;
  medias: StrapiEncapsulerList<CommonMedia>;
  footer: PageFooter;
}
