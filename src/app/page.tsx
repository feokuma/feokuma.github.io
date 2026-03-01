import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <main className="page-shell mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-8 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Feokuma Blog</h1>
        <p>Artigos escritos em Markdown com Next.js.</p>
      </header>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Posts recentes</h2>
          <Link href="/blog" className="underline">
            Ver todos
          </Link>
        </div>

        <ul className="space-y-3">
          {posts.map((post) => (
            <li key={post.slug} className="post-card space-y-1">
              <Link href={`/blog/${post.slug}`} className="text-lg font-medium underline">
                {post.title}
              </Link>
              <p>{post.date}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
