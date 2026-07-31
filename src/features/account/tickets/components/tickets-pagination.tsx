import Pagination from "@/components/common/pagination";
import React from "react";

const TicketsPagination = () => {
  return (
    <Pagination
      baseHref="/account/tickets"
      currentPage={1}
      pageSize="20"
      totalItemsCount={50}
    />
  );
};

export default TicketsPagination;
