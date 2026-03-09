import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostMeta } from "@/components/blog/post-meta";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);
    return { title: post.title };
  } catch {
    return { title: "Post não encontrado" };
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  let post: Awaited<ReturnType<typeof getPostBySlug>>;

  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <main className="page-shell mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-6 px-6 py-16">
      <article className="space-y-4">
        <header className="space-y-2">
          <div className="post-header-image">
            {post.coverImage ? (
              <Image
                src={post.coverImage}
                alt={`Capa do artigo ${post.title}`}
                fill
                className="blog-cover-image"
                sizes="(min-width: 1024px) 65vw, 100vw"
                priority
              />
            ) : null}
          </div>
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <PostMeta date={post.date} readingTimeMinutes={post.readingTimeMinutes} />
        </header>
        <section
          className="markdown-content space-y-4"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  );
}
