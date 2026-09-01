import React from "react";

const normalizeImage = (image: string) => {
  return `/${image.replace(/^\/+/, "")}`;
};

export default normalizeImage;
