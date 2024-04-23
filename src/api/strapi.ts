import qs from "qs";
import type { AccueilModel } from "../models/strapi/accueil.model";
import type { StrapiEncapsuler } from "../models/strapi/common/encapsuler";
import type { CarteModel } from "../models/strapi/carte.model";

const listLocale = ["all", "fr", "en", "es", "ca"] as const;

const populateComponent = (name: string, mediaName?: string) => {
  const listPopulated = [name];
  if (mediaName) {
    listPopulated.push(
      ...[
        `${name}.${mediaName}`,
        `${name}.${mediaName}`,
        `${name}${mediaName}.formats`,
      ]
    );
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
      populate: [
        "menu",
        "menu.url",
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "Suggestions",
      ],
      locale,
    });
    return fetchStrapi<StrapiEncapsuler<CarteModel>>("carte", qsString);
  };

  const getAccueil = async () => {
    const qsString = qs.stringify({
      populate: [
        ...populateComponent("histoire", "images"),
        ...populateComponent("menu", "images"),
        ...populateComponent("carte"),
        ...populateComponent("salon_header", "background"),
        ...populateComponent("salon_content", "images"),
        ...populateComponent("medias"),
        ...populateComponent("footer"),
      ],
      locale,
    });
    return fetchStrapi<StrapiEncapsuler<AccueilModel>>("accueil", qsString);
  };

  return { getCarte, getAccueil };
};
