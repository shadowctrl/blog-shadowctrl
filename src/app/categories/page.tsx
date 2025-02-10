import React from "react";
import { getCategories } from "@/hooks/getStrapiData";
import { CategoryData } from "@/types";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { redirect } from "next/navigation";

const CategoriesPage = async () => {
  const { data, status } = await getCategories();
  if (status !== 200) redirect("/");

  return (
    <div className="min-h-screen bg-black mt-12 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-pri-col" />
            <h1 className="text-4xl font-bold text-white">Browse Categories</h1>
          </div>
          <div className="w-24 h-1 bg-pri-col mx-auto rounded-full mb-4" />
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Explore our content through these carefully curated categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.data.map((category: CategoryData) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="group relative"
            >
              <div className="relative p-6 rounded-xl bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 hover:border-pri-col/50 transition-all duration-300 overflow-hidden">
                {/* Animated Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pri-col-600/10 to-pri-col-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner Decoration */}
                <div className="absolute -top-8 -right-8 w-16 h-16">
                  <div className="absolute inset-0 transform rotate-45 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-full h-full bg-pri-col/20 backdrop-blur-sm" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h2 className="text-2xl font-bold text-white group-hover:text-pri-col transition-colors duration-300 mb-3">
                    {category.name}
                  </h2>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm mb-4">
                    {category.name || `Explore our ${category.name} content`}
                  </p>

                  {/* Post Count */}
                  <div className="flex items-center gap-2 text-sm text-zinc-500 pb-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                    <span>
                      {Array.isArray(category.articles)
                        ? category.articles.length
                        : 0}{" "}
                      posts
                    </span>
                  </div>

                  {/* Hover Indicator */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-full bg-pri-col transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
