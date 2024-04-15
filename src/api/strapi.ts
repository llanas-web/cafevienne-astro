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
  const getCarte = async (local?: string) => {
    const qsString = qs.stringify({});
    const carte = await fetchStrapi("carte", qs.stringify(POPULATED_QUERY));
    return carte.attributes;
  };

  const getHome = async () => {
    const qsString = qs.stringify({
      populate: {
        bio: {
          populate: "image.formats",
        },
        seo: {
          populate: "cover.formats",
        },
        cover: {
          populate: "*",
        },
        actuality: {
          populate: "*",
        },
      },
    });
    const home = await fetchStrapi<Home>("home", qsString);
    return home.attributes;
  };

  const getAgenda = async () => {
    const qsString = qs.stringify({
      populate: {
        seo: {
          populate: "cover.formats",
        },
      },
    });
    const agenda = await fetchStrapi<any>("agenda", qsString);
    return agenda.attributes;
  };

  const getEvents = async () => {
    const qsString = qs.stringify({
      pagination: {
        pageSize: 50,
      },
      populate: "image.formats",
      sort: ["starting"],
    });
    const events = await fetchStrapi<Event[]>("events", qsString);
    return events;
  };

  return { getHome, getAgenda, getEvents };
};
