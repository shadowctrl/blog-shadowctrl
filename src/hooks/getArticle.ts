export const getArticle = async (slug: string) => {
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
  const article = data.data.find((article: any) => article.slug === slug);
  return article;
};
