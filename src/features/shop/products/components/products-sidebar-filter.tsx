import ProductsFiltering from "./products-filtering";

const ProductsSidebarFilter = () => {
  return (
    <div className="bg-surface w-full rounded-2xl shadow-soft-card px-4 self-start py-7 sticky top-5">
     <ProductsFiltering />
    </div>
  );
};

export default ProductsSidebarFilter;
