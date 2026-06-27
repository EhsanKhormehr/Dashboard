import React from "react";

type PageHeaderProps = {
  title: string;
};

export default function PageHeader({ title }: PageHeaderProps) {
  return <h1 className="font-bold text-3xl">{title}</h1>;
}
