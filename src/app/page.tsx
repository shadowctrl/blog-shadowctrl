import React from "react";
import Image from "next/image";
import { getStrapiData } from "@/hooks/getStrapiData";
import { DataArrayType } from "@/types";
import { dateFormat } from "@/utils/dateFormat";
import Link from "next/link";

const BlogListPage = async () => {
  const { data, status } = await getStrapiData();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-12">
      <h1 className="text-4xl font-bold mb-8 text-[--foreground]">
        Blog Posts
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.data.map((post: DataArrayType) => (
          <Link
            href={"/blog/" + post.slug}
            key={post.slug}
            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              {post.cover?.url && (
                <div className="relative w-full h-48">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}${post.cover.url}`}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
            <h2 className="text-xl font-semibold text-[--background] text-center px-1 py-2">
              {post.title}
            </h2>
            <div className="p-5">
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.description}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-[--pri-col]">
                    {post.author.name}
                  </span>
                  <span className="text-xs">•</span>
                  <time dateTime={new Date(post.publishedAt).toISOString()}>
                    {dateFormat(post.publishedAt)}
                  </time>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;
