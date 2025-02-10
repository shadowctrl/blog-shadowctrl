import BlogCard from "@/app/components/blogCard";
import { getCategory } from "@/hooks/getStrapiData";
import { DataArrayType } from "@/types";
import { NextPage } from "next";
import { Metadata } from "next";
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
    } Blogs | shadowctrl blogs`,
  };
}

const Page: NextPage<Props> = async ({ params }) => {
  const { category } = await params;
  const { status, data } = await getCategory(category);
  return (
    <div className="mt-14 p-8 max-w-7xl mx-auto">
      <div className="flex flex-wrap gap-8">
        {data.data.map((post: DataArrayType) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Page;
