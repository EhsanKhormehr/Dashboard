"use client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams, useRouter } from "next/navigation";

type updateUrlParamsProps = {
  key: string;
  value: string;
  searchParams: ReadonlyURLSearchParams;
  pathname: string;
  router: AppRouterInstance;
  defaultValue?: string;
};

export const updateUrlParams = ({
  key,
  value,
  searchParams,
  pathname,
  router,
  defaultValue,
}: updateUrlParamsProps) => {
  const params = new URLSearchParams(searchParams.toString());
  if (value === "" || value === "DEFAULT" || value === defaultValue) {
    params.delete(key);
  } else {
    params.set(key, value);
  }
  router.push(`${pathname}?${params}`);
};
