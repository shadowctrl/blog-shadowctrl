"use client";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

interface Props {
  content: BlocksContent;
}

const RichText: NextPage<Props> = ({ content }) => {
  return <BlocksRenderer content={content} />;
};

export default RichText;
