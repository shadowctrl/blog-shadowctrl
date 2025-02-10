import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CategoryData, DataArrayType } from "@/types";
import { getCategory } from "@/hooks/getStrapiData";

interface Props {
  category: CategoryData;
  currentArticleSlug: string;
}

const RelatedBlog: React.FC<Props> = async ({
  category,
  currentArticleSlug,
}) => {
  const { status, data } = await getCategory(category.slug, currentArticleSlug);

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section className="py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Related Articles</h2>
        <div className="w-20 h-1 bg-pri-col rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((post: DataArrayType) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.id}
            className="group block relative overflow-hidden rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1"
          >
            {post.cover?.url ? (
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}${post.cover.url}`}
                  alt={post.title}
                  fill
                  className="object-cover brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
              </div>
            ) : (
              <div className="h-48 bg-zinc-800/50 flex items-center justify-center">
                <span className="text-zinc-600">No image available</span>
              </div>
            )}

            <div className="p-5">
              <div className="mb-3">
                <span className="px-3 py-1 text-sm font-medium text-pri-col bg-emerald-950/30 rounded-full border border-emerald-800/30">
                  {category.name}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white group-hover:text-pri-col transition-colors duration-200 mb-2">
                {post.title}
              </h3>

              {post.description && (
                <p className="text-zinc-400 text-sm line-clamp-2">
                  {post.description}
                </p>
              )}

              <div className="mt-4 flex items-center text-sm text-zinc-500">
                <span className="text-zinc-400">{post.author?.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedBlog;
