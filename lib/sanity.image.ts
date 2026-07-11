import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "./sanity.client";

const imageBuilder = imageUrlBuilder({ projectId, dataset });

export const urlForImage = (
  source: any,
  dimensions?: { width: number; height: number },
) => {
  const builder = imageBuilder.image(source).auto("format");
  if (dimensions) {
    return builder
      .width(dimensions.width)
      .height(dimensions.height)
      .fit("crop")
      .crop("focalpoint");
  }
  return builder.fit("max");
};
