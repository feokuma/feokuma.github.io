import Image from "next/image";
import Link from "next/link";
import { PostMeta } from "@/components/blog/post-meta";
import type { Post } from "@/lib/posts";

type RemainingPostCardProps = {
  post: Post;
};

export function RemainingPostCard({ post }: RemainingPostCardProps) {
  return (
    <li className="blog-grid-card">
      <Link
        href={`/blog/${post.slug}`}
        className="blog-grid-media"
        aria-label={`Abrir artigo ${post.title}`}
      >
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
  );
}
