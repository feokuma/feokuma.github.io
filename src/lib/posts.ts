import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

const postsDirectory = path.join(process.cwd(), "content", "posts");

function readPostFile(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return matter(fileContents);
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const { data, content } = readPostFile(slug);

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        excerpt: data.excerpt ?? content.slice(0, 140),
      } satisfies Post;
    });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string) {
  const { data, content } = readPostFile(slug);
  const processedContent = await remark().use(html).process(content);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    contentHtml: processedContent.toString(),
  };
}
