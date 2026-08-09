import React from "react";
import ProductGallery from "./product-gallery";

const ProductInfoWrapper = () => {
  return (
    <div className="col-span-9">
      <div className="grid grid-cols-12">
        <ProductGallery />
      </div>
    </div>
  );
};

export default ProductInfoWrapper;
