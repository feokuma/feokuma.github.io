import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import csharp from "highlight.js/lib/languages/csharp";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
};

const postsDirectory = path.join(process.cwd(), "content", "posts");
const coverImageCandidates = ["header.avif", "header.webp", "header.jpg", "header.jpeg", "header.png", "header.svg"];

function getPostDirectory(slug: string) {
  return path.join(postsDirectory, slug);
}

function resolveCoverImageUrl(slug: string, frontmatterCoverImage?: string) {
  if (frontmatterCoverImage) {
    if (frontmatterCoverImage.startsWith("/")) return frontmatterCoverImage;

    const normalizedFileName = frontmatterCoverImage.replace(/^\.\//, "");
    return `/post-assets/${slug}/${normalizedFileName}`;
  }

  const postDirectory = getPostDirectory(slug);
  const coverImageFileName = coverImageCandidates.find((fileName) =>
    fs.existsSync(path.join(postDirectory, fileName)),
  );

  if (!coverImageFileName) return undefined;
  return `/post-assets/${slug}/${coverImageFileName}`;
}

function readPostFile(slug: string) {
  const fullPath = path.join(getPostDirectory(slug), "index.md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return matter(fileContents);
}

export function getAllPosts(): Post[] {
  const entries = fs.readdirSync(postsDirectory, { withFileTypes: true });

  const posts = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const slug = entry.name;
      const { data, content } = readPostFile(slug);

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        excerpt: data.excerpt ?? content.slice(0, 140),
        coverImage: resolveCoverImageUrl(slug, data.coverImage),
      } satisfies Post;
    });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string) {
  const { data, content } = readPostFile(slug);
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight, {
      languages: {
        csharp,
      },
    })
    .use(rehypeStringify)
    .process(content);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    coverImage: resolveCoverImageUrl(slug, data.coverImage),
    contentHtml: processedContent.toString(),
  };
}
