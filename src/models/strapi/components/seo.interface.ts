import type { StrapiEncapsuler } from "../common/encapsuler";
import type { CommonMedia } from "../common/media";

export interface SeoPlugin {
  metaTitle: string;
  metaDescription: string;
  metaImage: StrapiEncapsuler<CommonMedia>;
  keywords: string;
  metaRobots: string;
  structuredData: any;
  metaViewport: any;
  canonicalURL: any;
  metaSocial: MetaSocial[];
}

export interface MetaSocial {
  id: number;
  socialNetwork: "Facebook" | "Twitter";
  title: string;
  description: string;
}
