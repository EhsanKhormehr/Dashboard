import { Newspaper } from "lucide-react";
import BlogLatestCard from "./blog-latest-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BlogLatestWrapper = () => {
  return (
    <div className="bg-surface rounded-xl shadow-soft-card px-4">
      <div className="flex gap-2 py-5">
        <Newspaper className="text-primary" />
        <span className="font-extrabold">Latest Articles</span>
      </div>
      <div className="pb-5 flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          <BlogLatestCard />
          <BlogLatestCard />
          <BlogLatestCard />
        </div>
        <Button asChild variant={"outline"}>
          <Link href={"/"}>View All</Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogLatestWrapper;
