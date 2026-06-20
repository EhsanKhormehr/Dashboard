"use client";

import NewCategoryForm from "@/features/dashboard/new-category/components/form";

export default function page() {
  return (
    <div>
      <h1 className="font-bold text-3xl">New Category</h1>
      <div className="mt-10">
        <NewCategoryForm />
      </div>
    </div>
  );
}
