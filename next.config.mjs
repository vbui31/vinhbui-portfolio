/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/vinhbui-portfolio" : "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: isProd ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
