import type { StrapiEncapsuler } from "../common/encapsuler";
import type { CommonMedia } from "../common/media";

export interface PageHeader {
  titre: string;
  description?: string;
  media: StrapiEncapsuler<CommonMedia>;
}

export interface PageContent {
  titre?: string;
  description?: string;
  contenu: any;
  media?: StrapiEncapsuler<CommonMedia>;
}
