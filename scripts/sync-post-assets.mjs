import { cp, mkdir, readdir, rm, stat } from "node:fs/promises";
import path from "node:path";

const postsDirectory = path.join(process.cwd(), "content", "posts");
const destinationDirectory = path.join(process.cwd(), "public", "post-assets");

async function ensureDirectory(dirPath) {
  await mkdir(dirPath, { recursive: true });
}

async function copyPostAssets() {
  await rm(destinationDirectory, { recursive: true, force: true });
  await ensureDirectory(destinationDirectory);

  const entries = await readdir(postsDirectory, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const slug = entry.name;
    const sourcePostDirectory = path.join(postsDirectory, slug);
    const destinationPostDirectory = path.join(destinationDirectory, slug);

    await ensureDirectory(destinationPostDirectory);

    const files = await readdir(sourcePostDirectory);

    for (const fileName of files) {
      if (fileName === "index.md") continue;

      const sourceFile = path.join(sourcePostDirectory, fileName);
      const destinationFile = path.join(destinationPostDirectory, fileName);
      const sourceStats = await stat(sourceFile);

      if (sourceStats.isFile()) {
        await cp(sourceFile, destinationFile);
      }
    }
  }

  console.log("Post assets synced to public/post-assets");
}

await copyPostAssets();
