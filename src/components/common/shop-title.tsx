import React from "react";

type ShopTitleProps = {
  title: string;
};

const ShopTitle = ({ title }: ShopTitleProps) => {
  return <span className="text-xl font-bold">{title}</span>;
};

export default ShopTitle;
