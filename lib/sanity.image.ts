import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "./sanity.client";

const imageBuilder = imageUrlBuilder({ projectId, dataset });

export const urlForImage = (source: any) => {
  return imageBuilder.image(source).auto("format").fit("max");
};
