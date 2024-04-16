import qs from "qs";
import type { AccueilModel } from "../models/strapi/accueil.model";
import type { StrapiEncapsuler } from "../models/strapi/common/encapsuler";

const listLocale = ["all", "fr", "en", "es", "ca"] as const;

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
      populate: {
        menu: "url",
      },
      locale,
    });
    return fetchStrapi("carte", qsString);
  };

  const getAccueil = async () => {
    const qsString = qs.stringify({
      populate: [
        "entete",
        "entete.media",
        "entete.media.formats",
        "histoire",
        "histoire.media",
        "histoire.media.formats",
      ],
      locale,
    });
    return fetchStrapi<StrapiEncapsuler<AccueilModel>>("accueil", qsString);
  };

  return { getCarte, getAccueil };
};
