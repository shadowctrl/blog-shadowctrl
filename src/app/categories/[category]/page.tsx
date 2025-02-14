import BlogCard from "@/app/components/blogCard";
import { getCategory } from "@/hooks/getStrapiData";
import { DataArrayType } from "@/types";
import { NextPage } from "next";
import { Metadata } from "next";
import { redirect } from "next/navigation";
interface Params {
  category: string;
}
interface Props {
  params: Promise<Params>;
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  return {
    title: `${
      category.charAt(0).toUpperCase() + category.slice(1)
    } Blogs | ShadowCtrl Blogs`,
    description: `Read the latest ${category} blogs on ShadowCtrl. Stay updated with the newest trends and insights in ${category}.`,
    keywords: `${category}, blogs, ShadowCtrl, latest ${category} blogs, ${category} insights`,
  };
}

const Page: NextPage<Props> = async ({ params }) => {
  const { category } = await params;
  const { status, data } = await getCategory(category);
  if (status !== 200) redirect("/categories");

  return (
    <div className="mt-14 p-8 max-w-7xl mx-auto">
      <div className="flex flex-wrap lg:gap-8">
        {data.data.map((post: DataArrayType) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Page;
