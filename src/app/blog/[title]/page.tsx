import { NextPage } from "next";
import { getArticle } from "@/hooks/getArticle";

import { Calendar, Clock, User } from "lucide-react";
import Image from "next/image";
import { createElement } from "react";
import RichText from "@/app/components/richText";

interface Props {
  params: {
    title: string;
  };
}

const Page: NextPage<Props> = async ({ params }) => {
  const { title } = await params;
  const data = await getArticle(title);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:px-8">
      <article className="bg-white dark:bg-neutral-900 shadow-lg rounded-lg overflow-hidden">
        <header className="p-6 bg-pri-col/10">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            {data.title}
          </h1>

          <div className="flex items-center space-x-4 text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span className="text-pri-col">
                {data.author.name || "Anonymous"}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>
                {new Date(data.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{data.readTime || "5 min read"}</span>
            </div>
          </div>
        </header>

        {data.cover && (
          <div className="w-full h-96 overflow-hidden">
            <Image
              src={process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + data.cover.url}
              alt={data.title}
              width={2000}
              height={2000}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert p-6 md:p-8">
          <RichText content={data.content} />
        </div>
      </article>
    </div>
  );
};

export default Page;
