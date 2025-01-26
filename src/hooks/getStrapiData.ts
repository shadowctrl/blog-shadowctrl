import { StrapiDataType } from "@/types";

export const getStrapiData = async (
  slug?: string | undefined
): Promise<StrapiDataType> => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + "/api/articles?populate=*",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    }
  );
  const data = await response.json();

  if (slug) {
    const article = data.data.find((article: any) => article.slug === slug);
    if (!article) return { status: 404, data: article };

    return { status: 200, data: article };
  }

  return { status: 200, data };
};
