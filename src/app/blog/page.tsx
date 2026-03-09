import Image from "next/image";
import Link from "next/link";
import { FeaturedPostCard } from "@/components/blog/featured-post-card";
import { PostMeta } from "@/components/blog/post-meta";
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
        {remainingPosts.map((post, index) => (
          <li key={post.slug} className="blog-grid-card">
            <Link href={`/blog/${post.slug}`} className={`blog-grid-media blog-grid-media-${(index % 4) + 1}`} aria-label={`Abrir artigo ${post.title}`}>
              {post.coverImage ? (
                <Image
                  src={post.coverImage}
                  alt={`Capa do artigo ${post.title}`}
                  fill
                  className="blog-cover-image"
                  sizes="(min-width: 1024px) 28vw, (min-width: 768px) 44vw, 100vw"
                />
              ) : null}
              <span>{post.readingTimeMinutes} min de leitura</span>
            </Link>
            <div className="space-y-3 p-5">
              <p className="blog-tag">Artigo</p>
              <Link href={`/blog/${post.slug}`} className="line-clamp-2 text-2xl font-semibold leading-tight hover:opacity-85">
                {post.title}
              </Link>
              <p className="line-clamp-3 text-[color:var(--ctp-subtext0)]">{post.excerpt}</p>
              <PostMeta date={post.date} readingTimeMinutes={post.readingTimeMinutes} className="text-sm" />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
