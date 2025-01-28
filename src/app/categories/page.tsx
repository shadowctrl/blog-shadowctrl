import { getCategories } from "@/hooks/getStrapiData";
import { CategoryData } from "@/types";
import { Metadata, NextPage } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";

interface Props {}

export const metadata: Metadata = {
  title: "Browse by Category | shadowctrl blogs",
};

const Page: NextPage<Props> = async ({}) => {
  const { data, status } = await getCategories();

  return (
    <div className="mt-14 p-8">
      <div className="flex items-center gap-2 mb-8">
        <Sparkles className="w-6 h-6 text-[#c778dd]" />
        <h1 className="text-3xl font-bold">Categories</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.data.map((val: CategoryData) => (
          <Link
            key={val.slug}
            href={"/categories/" + val.slug}
            className="group block"
          >
            <div className="relative p-6 rounded-lg border border-gray-200 bg-white hover:border-[#c778dd] transition-all duration-300 hover:shadow-lg hover:shadow-[#c778dd]/20">
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#c778dd] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h2 className="text-xl font-semibold text-[#171717] group-hover:text-[#c778dd] transition-colors duration-300">
                {val.name}
              </h2>

              <div className="mt-2 h-1 w-12 bg-[#c778dd] opacity-0 transform scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
