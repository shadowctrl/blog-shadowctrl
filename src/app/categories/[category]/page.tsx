import BlogCard from "@/app/components/blogCard";
import { getCategory } from "@/hooks/getStrapiData";
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
    <div className="mt-14 p-8">
      <div className="max-w-4xl">
        <BlogCard data={data.data} />
      </div>
    </div>
  );
};

export default Page;
