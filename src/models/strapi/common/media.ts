export interface CommonMedia {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: CommonMediaFormat;
    small: CommonMediaFormat;
    medium: CommonMediaFormat;
    large: CommonMediaFormat;
    xlarge: CommonMediaFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  createdAt: Date;
  updatedAt: Date;
}

export const listImageFormat = [
  "thumbnail",
  "small",
  "medium",
  "large",
  "xlarge",
] as const;
export type LIST_IMAGE_FORMAT = (typeof listImageFormat)[number];

export interface CommonMediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: string;
  url: string;
}
