import type { StrapiEncapsuler } from "./common/encapsuler";
import type { CommonMedia } from "./common/media";
import type { StrapiLocale } from "./locale.interface";

export interface AccueilModel extends StrapiLocale {
  titre: string;
  description: string;
  entete: StrapiEncapsuler<CommonMedia>;
}
