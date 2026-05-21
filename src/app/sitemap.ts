import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://trulyfreemortgage.com";
  const statePages = [
    "california-mortgage-calculator",
    "texas-mortgage-calculator",
    "florida-mortgage-calculator",
    "new-york-mortgage-calculator",
    "washington-mortgage-calculator",
    "arizona-mortgage-calculator",
    "colorado-mortgage-calculator",
    "georgia-mortgage-calculator",
    "north-carolina-mortgage-calculator",
    "virginia-mortgage-calculator",
  ];
  const articles = [
    "fha-mortgage-calculator",
    "15-year-vs-30-year-mortgage",
    "mortgage-refinance-calculator",
    "amortization-schedule-generator",
    "va-loan-calculator",
    "usda-rural-home-loan-calculator",
    "jumbo-loan-calculator",
    "investment-property-calculator",
    "arm-vs-fixed-rate",
    "mortgage-payoff-calculator",
    "calculadora-hipoteca-fha",
    "calculadora-amortizacion",
  ];

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: base + "/mortgage-calculator", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: base + "/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: base + "/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: base + "/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: base + "/privacy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
    { url: base + "/terms", lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
    ...articles.map((slug) => ({
      url: base + "/blog/" + slug,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...statePages.map((slug) => ({
      url: base + "/" + slug,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
