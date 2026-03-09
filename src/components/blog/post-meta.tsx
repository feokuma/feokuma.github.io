import { formatDisplayDate } from "@/lib/format-display-date";

type PostMetaProps = {
  date: string;
  readingTimeMinutes: number;
  className?: string;
};

export function PostMeta({ date, readingTimeMinutes, className }: PostMetaProps) {
  const metaClassName = className ? `blog-meta ${className}` : "blog-meta";

  return (
    <div className={metaClassName}>
      <span>{formatDisplayDate(date)}</span>
      <span aria-hidden="true">•</span>
      <span>{readingTimeMinutes} min de leitura</span>
    </div>
  );
}
