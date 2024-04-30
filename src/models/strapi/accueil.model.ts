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
import type { SeoPlugin } from "./components/seo.interface";
import type { StrapiLocale } from "./locale.interface";

export interface AccueilModel extends StrapiLocale {
  entete: PageHeader;
  histoire: PageContent;
  menu: PageContent;
  visuel: string;
  carte: StrapiEncapsuler<CommonMedia>;
  salon: PageContent;
  video: StrapiEncapsuler<CommonMedia>;
  medias: StrapiEncapsulerList<CommonMedia>;
  footer: PageFooter;
  seo: SeoPlugin;
}
