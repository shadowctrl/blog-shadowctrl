import { NextPage } from "next";
import { getArticle } from "@/hooks/getArticle";
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
    <div>
      <div>
        <h1>{data.title}</h1>
      </div>
      <div>
        <p>{data.description}</p>
      </div>
      <div>
        <p>{new Date(data.publishedAt).toDateString()}</p>
      </div>
      <RichText content={data.content} />
    </div>
  );
};

export default Page;
