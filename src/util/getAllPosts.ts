import compareDesc from "date-fns/compareDesc";
import parseISO from "date-fns/parseISO";

// shamelessly stolen from https://www.smashingmagazine.com/2020/09/build-blog-nextjs-mdx/

export interface PostMeta {
  title: string;
  date: string;
}

function importAll(r) {
  return r
    .keys()
    .map((fileName) => ({
      link: `/blog${fileName.substr(1).replace(/\.mdx$/, "")}`,
      meta: r(fileName).meta,
    }))
    .sort((a, b) => compareDesc(parseISO(a.meta.date), parseISO(b.meta.date)));
}

export const getAllPosts = () =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  importAll(require.context("../pages/blog/", true, /\.mdx$/));
