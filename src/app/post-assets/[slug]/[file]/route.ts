import fs from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";

const postsDirectory = path.join(process.cwd(), "content", "posts");

const contentTypeByExtension: Record<string, string> = {
  ".avif": "image/avif",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

type AssetRouteParams = {
  params: Promise<{ slug: string; file: string }>;
};

export async function GET(_: Request, { params }: AssetRouteParams) {
  const { slug, file } = await params;

  if (!slug || !file) {
    notFound();
  }

  const safeSlug = path.basename(slug);
  const safeFile = path.basename(file);

  if (safeSlug !== slug || safeFile !== file) {
    notFound();
  }

  const postDirectory = path.join(postsDirectory, safeSlug);
  const assetPath = path.join(postDirectory, safeFile);

  if (!assetPath.startsWith(postDirectory)) {
    notFound();
  }

  try {
    const imageBuffer = await fs.readFile(assetPath);
    const extension = path.extname(safeFile).toLowerCase();
    const contentType = contentTypeByExtension[extension] ?? "application/octet-stream";

    return new Response(imageBuffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    notFound();
  }
}
