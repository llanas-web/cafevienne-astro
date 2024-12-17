import qs from "qs";
import type { AccueilModel } from "../models/strapi/accueil.model";
import type {
  StrapiEncapsuler,
  StrapiEncapsulerList,
} from "../models/strapi/common/encapsuler";

const listLocale = ["all", "fr", "en", "es", "ca"] as const;

type ComponentChild = {
  name: string;
  extensions?: string[];
  childrens?: ComponentChild[];
};

const populateComponent = (
  component: ComponentChild,
  previousName?: string
) => {
  const name = previousName
    ? `${previousName}.${component.name}`
    : component.name;
  const listPopulated = [name];
  if (component.extensions && component.extensions.length > 0) {
    listPopulated.push(...component.extensions.map((ext) => `${name}.${ext}`));
  }
  if (component.childrens && component.childrens.length > 0) {
    component.childrens?.forEach((child) => {
      listPopulated.push(...populateComponent(child, name));
    });
  }
  return listPopulated;
};

const fetchStrapi = async <T>(api: string, query: string = ""): Promise<T> => {
  try {
    const request = new Request(
      `${import.meta.env.STRAPI_URL}/api/${api}?${query}`
    );
    console.log(request.url);
    const response = await fetch(request);
    return response.json();
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching Strapi API: ${error}`);
  }
};

export const useStrapi = (locale: (typeof listLocale)[number] = "all") => {
  const getCarte = async () => {
    const qsString = qs.stringify({
      populate: ["carte"],
      locale,
    });
    return fetchStrapi<StrapiEncapsulerList<AccueilModel>>("accueil", qsString);
  };

  const getAccueil = async () => {
    const populateArray = [
      ...populateComponent({
        name: "entete",
        childrens: [{ name: "background", extensions: ["formats"] }],
      }),
      ...populateComponent({
        name: "histoire",
        childrens: [{ name: "images", extensions: ["formats"] }],
      }),
      ...populateComponent({
        name: "menu",
        childrens: [{ name: "images", extensions: ["formats"] }],
      }),
      ...populateComponent({
        name: "evenement",
        childrens: [
          { name: "images", extensions: ["formats"] },
          {
            name: "button",
            childrens: [{ name: "file", extensions: ["formats"] }],
          },
        ],
      }),
      ...populateComponent({ name: "carte" }),
      ...populateComponent({
        name: "salon",
        childrens: [{ name: "images", extensions: ["formats"] }],
      }),
      ...populateComponent({ name: "video" }),
      ...populateComponent({ name: "medias" }),
      ...populateComponent({ name: "footer" }),
      ...populateComponent({
        name: "expos",
        childrens: [{ name: "image", extensions: ["formats"] }],
      }),
      ...["seo", "seo.metaImage", "seo.metaSocial"],
    ];
    const qsString = qs.stringify({
      populate: populateArray,
      locale,
    });
    console.log(populateArray);
    return fetchStrapi<StrapiEncapsuler<AccueilModel>>("accueil", qsString);
  };

  return { getCarte, getAccueil };
};
