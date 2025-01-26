export interface LinkType {
  src: string;
  title?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}

export interface StrapiDataType {
  data: any;
  article?: any;
  status: number;
}

export interface DataArrayCover {
  url: string;
  width: number;
  height: number;
}
export interface DataArrayContent {
  type: string;
  level: number;
  children: any;
}
export interface Author {
  name: string;
  email: string;
}
export interface DataArrayType {
  title: string;
  slug: string;
  description: string;
  publishedAt: Date;
  content: DataArrayContent;
  cover?: DataArrayCover;
  author: Author;
}
