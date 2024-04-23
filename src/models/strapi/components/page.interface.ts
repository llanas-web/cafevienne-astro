import type { StrapiEncapsuler } from "../common/encapsuler";
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
  contenu: any;
  images?: StrapiEncapsuler<CommonMedia>;
}

export interface PageDivider {
  content: string;
  background: StrapiEncapsuler<CommonMedia>;
}

export interface PageFooter {
  title?: string;
  subtitle?: string;
  phone: string;
  email: string;
  address: string;
}
