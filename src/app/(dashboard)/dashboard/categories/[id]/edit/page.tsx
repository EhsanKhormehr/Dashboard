import CategoryForm from "@/features/dashboard/categories/components/category-form";
import { useCategories } from "@/features/dashboard/categories/services/useQueries";
import { prisma } from "@/lib/prisma";
import React from "react";

type CategoryEditProps = {
  params: {
    id: string;
  };
};

export default async function CategoryEdit({ params }: CategoryEditProps) {
  const { id } = await params;

  const category = await prisma.category.findUnique({
    where: {
      id,
    },
    include: {
      attributes: true,
    },
  });

  if (!category) {
    return <div>Category not found</div>;
  }
  
  const initialData = {
    name: category?.name,
    slug: category?.slug,
    attributes: category?.attributes.map((attribute) => ({
      name: attribute.name,
      slug: attribute.slug,
      type: attribute.type,
      required:  attribute.required ? "TRUE" as const : "FALSE" as const,
      options: attribute.options.join(", ") ?? "",
    })),
  };

  return (
    <div>
      <h1 className="font-bold text-3xl">Categories</h1>
      <div className="mt-10">
        <CategoryForm mode="edit" initialData={initialData} categoryId={category.id}/>
      </div>
    </div>
  );
}
