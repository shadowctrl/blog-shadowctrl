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

export const getCategories = async (): Promise<StrapiDataType> => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_ENDPOINT + "/api/categories?populate=*",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    }
  );
  if (!response.ok) return { status: 500, data: null };

  try {
    const data = await response.json();
    return { status: 200, data };
  } catch {
    return { status: 500, data: null };
  }
};

export const getCategory = async (slug: string): Promise<StrapiDataType> => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_ENDPOINT +
      `/api/articles?filters[category][slug][$eq]=${slug}&populate=*`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    }
  );
  if (!response.ok) return { status: 500, data: null };
  try {
    const data = await response.json();
    return { status: 200, data };
  } catch {
    return { status: 500, data: null };
  }
};
