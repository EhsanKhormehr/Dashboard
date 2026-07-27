import Pagination from "@/components/common/pagination";
import React from "react";

const OrdersPagination = () => {
  return (
    <Pagination
      baseHref="/account/orders"
      currentPage={10}
      pageSize="10"
      totalItemsCount={40}
    />
  );
};

export default OrdersPagination;
