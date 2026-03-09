import { FeaturedPostCard } from "@/components/blog/featured-post-card";
import { RemainingPostCard } from "@/components/blog/remaining-post-card";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();
  const [featuredPost, ...remainingPosts] = posts;

  return (
    <main className="page-shell mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-6 py-14 md:px-10">
      <header className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold md:text-5xl">Nossos artigos mais recentes</h1>
          <p className="text-[color:var(--ctp-subtext0)]">Conteúdo novo sobre desenvolvimento e tecnologia.</p>
        </div>
      </header>

      {featuredPost ? <FeaturedPostCard post={featuredPost} /> : null}

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {remainingPosts.map((post) => (
          <RemainingPostCard key={post.slug} post={post} />
        ))}
      </ul>
    </main>
  );
}
