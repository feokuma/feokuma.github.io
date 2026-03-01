import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

function formatDisplayDate(date: string) {
  if (!date) return "Sem data";

  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) return date;

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(parsedDate);
}

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
        <nav aria-label="breadcrumb" className="blog-breadcrumb text-sm">
          <span>Início</span>
          <span aria-hidden="true">/</span>
          <span className="font-semibold">Blog</span>
        </nav>
      </header>

      {featuredPost ? (
        <article className="blog-featured-card">
          <div className="space-y-4 p-6 md:p-8">
            <p className="blog-tag">Destaque</p>
            <Link href={`/blog/${featuredPost.slug}`} className="text-3xl font-semibold leading-tight hover:opacity-85">
              {featuredPost.title}
            </Link>
            <p className="text-base text-[color:var(--ctp-subtext0)]">{featuredPost.excerpt}</p>
            <div className="blog-meta text-sm">
              <span>{formatDisplayDate(featuredPost.date)}</span>
              <span aria-hidden="true">•</span>
              <span>2 min de leitura</span>
            </div>
          </div>
          <div className="blog-featured-visual">
            <span>2 min Read</span>
          </div>
        </article>
      ) : null}

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {remainingPosts.map((post, index) => (
          <li key={post.slug} className="blog-grid-card">
            <div className={`blog-grid-media blog-grid-media-${(index % 4) + 1}`}>
              <span>2 min Read</span>
            </div>
            <div className="space-y-3 p-5">
              <p className="blog-tag">Artigo</p>
              <Link href={`/blog/${post.slug}`} className="line-clamp-2 text-2xl font-semibold leading-tight hover:opacity-85">
                {post.title}
              </Link>
              <p className="line-clamp-3 text-[color:var(--ctp-subtext0)]">{post.excerpt}</p>
              <div className="blog-meta text-sm">
                <span>{formatDisplayDate(post.date)}</span>
                <span aria-hidden="true">•</span>
                <span>2 min de leitura</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
