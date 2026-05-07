import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

const SITE_NAME = "NGANYA SERIES";
const BASE_URL = "https://nganyaseries.co.ke";
const DEFAULT_IMAGE = `${BASE_URL}/opengraph.jpg`;

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSEO({
  title,
  description,
  keywords,
  ogImage = DEFAULT_IMAGE,
  ogType = "website",
  canonical,
}: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    // Standard meta
    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    setMeta("author", "NGANYA SERIES");
    setMeta("robots", "index, follow");
    setMeta("theme-color", "#7B2FBE");

    // Open Graph
    setMeta("og:type", ogType, "property");
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:image", ogImage, "property");
    setMeta("og:site_name", SITE_NAME, "property");
    setMeta("og:locale", "en_KE", "property");

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);
    setMeta("twitter:site", "@nganyaseries");
    setMeta("twitter:creator", "@nganyaseries");

    // Canonical
    if (canonical) setLink("canonical", `${BASE_URL}${canonical}`);

    return () => {
      document.title = SITE_NAME;
    };
  }, [title, description, keywords, ogImage, ogType, canonical]);
}
