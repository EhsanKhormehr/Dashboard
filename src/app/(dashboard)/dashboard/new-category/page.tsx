
import CategoryForm from "@/features/dashboard/categories/components/category-form";

export default function page() {
  return (
    <div>
      <h1 className="font-bold text-3xl">New Category</h1>
      <div className="mt-10">
        <CategoryForm mode="create" />
      </div>
    </div>
  );
}
