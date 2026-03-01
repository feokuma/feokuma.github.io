import type { Metadata } from "next";
import { notFound } from "next/navigation";
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

  try {
    const post = await getPostBySlug(slug);

    return (
      <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-6 py-16">
        <article className="space-y-4">
          <header className="space-y-2">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p>{post.date}</p>
          </header>
          <section
            className="space-y-4"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>
      </main>
    );
  } catch {
    notFound();
  }
}
