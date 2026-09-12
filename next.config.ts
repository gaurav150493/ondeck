import { join } from "node:path";
import type { NextConfig } from "next";

const stylesDir = join(process.cwd(), "src", "styles");

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [stylesDir],
    loadPaths: [stylesDir],
  },
};

export default nextConfig;
