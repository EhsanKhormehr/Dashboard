import React from "react";
import ProductGallery from "./product-gallery";
import ProductInfoPanel from "./product-info-panel";

type ProductInfoWrapperProps = {
  commentCount: number;
};

const ProductInfoWrapper = ({ commentCount }: ProductInfoWrapperProps) => {
  return (
    <div className="col-span-12 lg:col-span-9">
      <div className="grid grid-cols-12 gap-5">
        <ProductGallery />
        <ProductInfoPanel commentCount={commentCount} />
      </div>
    </div>
  );
};

export default ProductInfoWrapper;
