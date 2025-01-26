"use client";
import { NextPage } from "next";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import { Children, createElement } from "react";

interface Props {
  content: BlocksContent;
}

const RichText: NextPage<Props> = ({ content }) => {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        code: (props) => (
          <pre className="bg-background text-foreground p-4 rounded-md overflow-x-auto font-mono text-sm">
            <code className="block">{props.plainText}</code>
          </pre>
        ),
        heading: ({ children, level }) => {
          const headingClasses =
            {
              1: "text-4xl mb-6",
              2: "text-3xl mb-5",
              3: "text-2xl mb-4",
              4: "text-xl font-normal mb-3",
              5: "text-lg font-light mb-2",
              6: "text-base font-thin mb-1",
            }[level] || "text-xl";

          return createElement(
            `h${level}`,
            { className: headingClasses },
            children
          );
        },
      }}
    />
  );
};

export default RichText;
