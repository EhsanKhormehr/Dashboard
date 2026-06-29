"use client";
import React from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type PaginationProps = {
  totalItemsCount: number;
  pageSize: string;
  baseHref: string;
  currentPage: number;
};

export default function Pagination({
  totalItemsCount,
  pageSize,
  baseHref,
  currentPage,
}: PaginationProps) {
  const size = Number(pageSize) || 1;
  const totalPages = Math.ceil(totalItemsCount / size);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const searchParams = useSearchParams();

  const pageUrlHandler = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    return `${baseHref}?${params.toString()}`;
  };
  return (
    <div className="flex items-center justify-center mt-6">
      <div className="flex items-center">
        <Button type="button" variant={"outline"} className="mr-4" asChild>
          <Link href={pageUrlHandler(Math.max(1, currentPage - 1))}>
            <ChevronLeft />
          </Link>
        </Button>
        <div className="flex">
          {pages.map((page) => (
            <Button
              variant={currentPage === page ? "default" : "outline"}
              asChild
              key={page}
              className="mx-0.5"
            >
              <Link href={pageUrlHandler(page)}>{page}</Link>
            </Button>
          ))}
        </div>
        <Button type="button" variant={"outline"} className="ml-4" asChild>
          <Link href={pageUrlHandler(Math.min(totalPages, currentPage + 1))}>
            <ChevronRight />
          </Link>
        </Button>
      </div>
    </div>
  );
}
