import React from "react";

const normalizeImage = (image: string) => {
  if (!image) return;
  return `/${image.replace(/^\/+/, "")}`;
};

export default normalizeImage;
