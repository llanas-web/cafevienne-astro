export type StrapiEncapsuler<T> = {
  data: {
    id: number;
    attributes: T;
  };
};

export type StrapiEncapsulerList<T> = {
  data: {
    id: number;
    attributes: T;
  }[];
};
