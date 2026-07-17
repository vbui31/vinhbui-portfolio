import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vbui31.github.io/vinhbui-portfolio/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
