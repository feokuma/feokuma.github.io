import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="page-shell mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p>Todos os artigos publicados.</p>
      </header>

      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="post-card space-y-1">
            <Link href={`/blog/${post.slug}`} className="text-xl font-semibold underline">
              {post.title}
            </Link>
            <p>{post.date}</p>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
