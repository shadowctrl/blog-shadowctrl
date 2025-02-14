import React from "react";
import { getStrapiData } from "@/hooks/getStrapiData";
import BlogCard from "./components/blogCard";
import { DataArrayType } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs Home | shadowctrl blogs",
  description:
    "Discover our latest thoughts, ideas, and insights on technology and development.",
  keywords: ["blog", "technology", "development", "shadowctrl"],
};

const BlogListPage = async () => {
  const { data, status } = await getStrapiData();
  if (status !== 200) return <div>Please try again later</div>;

  return (
    <div className="min-h-screen mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Blog Posts
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our latest thoughts, ideas, and insights on technology and
            development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.data.map((post: DataArrayType) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;
