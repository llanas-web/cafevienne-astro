import type { CommonMedia } from "./common/media";
import type { MenuPlat } from "./components/menu.interface";
import type { StrapiLocale } from "./locale.interface";

export interface CarteModel extends StrapiLocale {
  carte: CommonMedia;
  lundi: MenuPlat;
  mardi: MenuPlat;
  mercredi: MenuPlat;
  jeudi: MenuPlat;
  vendredi: MenuPlat;
  Suggestions: MenuPlat[];
}
