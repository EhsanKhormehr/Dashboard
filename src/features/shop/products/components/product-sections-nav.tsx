import React from "react";

const ProductSectionsNav = () => {
  return (
    <div className="mt-5 bg-surface shadow-soft-card rounded-xl overflow-hidden text-muted-foreground">
      <div className="flex ml-5">
        <a
          className="mr-7 py-4 border-b-3 border-primary text-surface-foreground font-bold"
          href="#specifications"
        >
          Specifications
        </a>
        <a className="mr-7 py-4" href="#expert-review">
          Expert Review
        </a>
        <a className="mr-7 py-4" href="#reviews">
          Reviews
        </a>
      </div>
    </div>
  );
};

export default ProductSectionsNav;
