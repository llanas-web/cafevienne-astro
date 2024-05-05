import type {
  StrapiEncapsuler,
  StrapiEncapsulerList,
} from "../common/encapsuler";
import type { CommonMedia } from "../common/media";

export interface PageHeader {
  title: string;
  subtitle?: string;
  content?: string;
  background: StrapiEncapsuler<CommonMedia>;
}

export interface PageContent {
  title?: string;
  subtitle?: string;
  content: any;
  images: StrapiEncapsulerList<CommonMedia>;
}

export interface PageEvent {
  title: string;
  description?: string;
  starting: string;
  ending: string;
  vernissage: string;
  image: StrapiEncapsuler<CommonMedia>;
}

export interface PageDivider {
  content: string;
  background: StrapiEncapsuler<CommonMedia>;
}

export interface PageFooter {
  title?: string;
  subtitle?: string;
  phone: string;
  mail: string;
  address: string;
}
