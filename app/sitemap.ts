import { MetadataRoute } from "next";
import { getAllScams } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://unhackablehumans.org";

  const staticRoutes = [
    "",
    "/about",
    "/our-work",
    "/scam-library",
    "/invisible-devices",
    "/digital-exit",
    "/digital-exit/flow",
    "/testimonials",
    "/team",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/digital-exit") ? 0.9 : 0.8,
  }));

  const scamRoutes = getAllScams().map((scam) => ({
    url: `${baseUrl}/scam-library/${scam.slug}`,
    lastModified: new Date(scam.publicationDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...scamRoutes];
}
