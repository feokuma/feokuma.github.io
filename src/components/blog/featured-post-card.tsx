import Image from "next/image";
import Link from "next/link";
import { PostMeta } from "@/components/blog/post-meta";
import type { Post } from "@/lib/posts";

type FeaturedPostCardProps = {
  post: Post;
};

export function FeaturedPostCard({ post }: FeaturedPostCardProps) {
  return (
    <article className="blog-featured-card">
      <div className="space-y-4 p-6 md:p-8">
        <p className="blog-tag">Destaque</p>
        <Link href={`/blog/${post.slug}`} className="text-3xl font-semibold leading-tight hover:opacity-85">
          {post.title}
        </Link>
        <p className="text-base text-[color:var(--ctp-subtext0)]">{post.excerpt}</p>
        <PostMeta date={post.date} readingTimeMinutes={post.readingTimeMinutes} className="text-sm" />
      </div>
      <Link href={`/blog/${post.slug}`} className="blog-featured-visual" aria-label={`Abrir artigo ${post.title}`}>
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={`Capa do artigo ${post.title}`}
            fill
            className="blog-cover-image"
            sizes="(min-width: 900px) 45vw, 100vw"
          />
        ) : null}
        <span>{post.readingTimeMinutes} min de leitura</span>
      </Link>
    </article>
  );
}
