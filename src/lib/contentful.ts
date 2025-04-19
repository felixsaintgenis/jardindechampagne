import * as contentful from 'contentful'
import type { EntryFieldTypes } from "contentful";

// export interface BlogPost {
//   contentTypeId: "blogPost",
//   fields: {
//     title: EntryFieldTypes.Text
//     content: EntryFieldTypes.RichText,
//     date: EntryFieldTypes.Date,
//     description: EntryFieldTypes.Text,
//     slug: EntryFieldTypes.Text,
//     listImage: EntryFieldTypes.Asset
//     horaires: EntryFieldTypes.Text
//   }
// }

import type { EntrySkeletonType } from "contentful";

export interface TypeEventFields {
    title: EntryFieldTypes.Symbol;
    body: EntryFieldTypes.RichText;
    date?: EntryFieldTypes.Text;
    hours?: EntryFieldTypes.Text;
    shortDescription?: EntryFieldTypes.Text;
    coverImage?: EntryFieldTypes.AssetLink;
    slug?: EntryFieldTypes.Symbol;
    type?: EntryFieldTypes.Text;
}

export type TypeEventSkeleton = EntrySkeletonType<TypeEventFields, "events">;
// export type TypeBlogPost<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>;

export interface TypeArticleFields {
  title: EntryFieldTypes.Symbol;
  body?: EntryFieldTypes.RichText;
  tags?: EntryFieldTypes.Text;
  coverImage?: EntryFieldTypes.AssetLink;
  slug?: EntryFieldTypes.Symbol;
  date?: EntryFieldTypes.Text;
  hours?: EntryFieldTypes.Text;
}

export type TypeArticleSkeleton = EntrySkeletonType<TypeArticleFields, "articles">;

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});