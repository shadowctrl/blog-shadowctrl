import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DataArrayType } from "@/types";
import { dateFormat } from "@/utils/dateFormat";

interface BlogCardProps {
  post: DataArrayType;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="max-w-sm group relative bg-zinc-900/40 backdrop-blur-sm rounded-xl border border-zinc-800 hover:border-zinc-700 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
    >
      {post.cover?.url && (
        <div className="relative h-64 w-full rounded-t-xl overflow-hidden">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}${post.cover.url}`}
            alt={post.title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />

          {/* Category Tags Overlay */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {post.categories?.map((category: any) => (
              <span
                key={category.id}
                className="px-3 py-1 text-sm font-medium text-pri-col bg-zinc-900/90 rounded-full border border-emerald-800/30 backdrop-blur-sm"
              >
                {category.name}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex items-center gap-2 mb-4 text-sm text-zinc-400">
          <span className="font-medium">{post.author?.name}</span>
          <span className="text-zinc-600">•</span>
          <time dateTime={new Date(post.publishedAt).toISOString()}>
            {post.publishedAt && dateFormat(post.publishedAt)}
          </time>
        </div>

        <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-pri-col transition-colors duration-200 line-clamp-2">
          {post.title}
        </h2>

        <p className="text-zinc-400 mb-4 line-clamp-2">{post.description}</p>

        <div className="flex items-center gap-2 text-sm text-pri-col font-medium">
          Read More
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
