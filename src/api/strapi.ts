import qs from "qs";

const POPULATED_QUERY = { populate: "*" };

const fetchStrapi = async <T>(api: string, query: string = "") => {
  try {
    const request = new Request(
      `${import.meta.env.STRAPI_URL}/api/${api}?${query}`
    );
    console.log(request.url);
    const response = await fetch(request);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching Strapi API: ${error}`);
  }
};

export const useStrapi = () => {
  const getCarte = async (locale = "all") => {
    const qsString = qs.stringify({
      populate: {
        menu: "url",
      },
      locale,
    });
    return fetchStrapi("carte", qsString);
  };

  return { getCarte };
};
