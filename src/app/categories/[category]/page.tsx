import BlogCard from "@/app/components/blogCard";
import { getCategory } from "@/hooks/getStrapiData";
import { CategoryData, DataArrayType } from "@/types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { NextPage } from "next";

interface Props {
  params: {
    category: string;
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
