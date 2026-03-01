import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPagesRepo = repositoryName.endsWith(".github.io");
const hasConfiguredBasePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined;
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const autoBasePath = isGithubActions && repositoryName && !isUserOrOrgPagesRepo ? `/${repositoryName}` : "";

const basePath = hasConfiguredBasePath ? configuredBasePath : autoBasePath;

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
