
import PageHeader from "@/components/common/page-header";
import CategoryForm from "@/features/dashboard/categories/components/category-form";

export default function NewCategory() {
  return (
    <div>
      <PageHeader title="New Category"/> 
      <div className="mt-6">
        <CategoryForm mode="create" />
      </div>
    </div>
  );
}
