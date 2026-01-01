import { siteConfig } from "./site-config";

export type JsonLd = Record<string, unknown> | Record<string, unknown>[];

export type SeoProps = {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
  noindex?: boolean;
  jsonLd?: JsonLd;
};

const titleTemplate = `%s | ${siteConfig.name}`;
const defaultTitle = `${siteConfig.name} — ${siteConfig.tagline}`;
const defaultDescription = siteConfig.description;

export const seoDefaults = {
  siteName: siteConfig.name,
  titleTemplate,
  defaultTitle,
  defaultDescription,
  twitterCard: "summary_large_image" as const,
  ogType: "website" as const,
};

export function formatTitle(title?: string) {
  if (!title) return defaultTitle;

  return title.includes(siteConfig.name)
    ? title
    : titleTemplate.replace("%s", title);
}

export function formatDescription(description?: string) {
  return description ?? defaultDescription;
}

export function formatCanonical(site?: URL, canonical?: string, pathname?: string) {
  if (!site) return canonical ?? pathname;

  if (canonical) return new URL(canonical, site).toString();
  if (pathname) return new URL(pathname, site).toString();

  return site.toString();
}

export function absoluteImageUrl(site?: URL, image?: string) {
  if (!image) return undefined;

  try {
    return site ? new URL(image, site).toString() : image;
  } catch (error) {
    console.warn("Failed to build absolute image URL", error);
    return image;
  }
}
