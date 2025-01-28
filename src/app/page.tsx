import { getStrapiData } from "@/hooks/getStrapiData";
import BlogCard from "./components/blogCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs Home | shadowctrl blogs",
};

const BlogListPage = async () => {
  const { data, status } = await getStrapiData();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-12">
      <h1 className="text-4xl font-bold mb-8 text-[--foreground]">
        Blog Posts
      </h1>
      <BlogCard data={data.data} />
    </div>
  );
};

export default BlogListPage;
