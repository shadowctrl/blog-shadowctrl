import { NextPage } from "next";
import { getStrapiData } from "@/hooks/getStrapiData";
import { Calendar, Clock, User } from "lucide-react";
import Image from "next/image";
import RichText from "@/app/components/richText";
import { dateFormat } from "@/utils/dateFormat";

interface Params {
  title: string;
}
interface Props {
  params: Promise<Params>;
}

export async function generateMetadata({ params }: Props) {
  const { title } = await params;
  const { status, data } = await getStrapiData(title);
  return {
    title: `${data.title} | shadowctrl blogs`,
  };
}

const Page: NextPage<Props> = async ({ params }): Promise<any> => {
  const { title } = await params;
  const { status, data } = await getStrapiData(title);

  if (status !== 200) return <h1>404</h1>;
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:px-8 mt-12">
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
              <span>{dateFormat(data.publishedAt)}</span>
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
