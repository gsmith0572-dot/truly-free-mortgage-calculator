import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://trulyfreemortgage.com';
  const articles = [
    'fha-mortgage-calculator',
    '15-year-vs-30-year-mortgage',
    'mortgage-refinance-calculator',
    'amortization-schedule-generator',
    'va-loan-calculator',
    'usda-rural-home-loan-calculator',
    'jumbo-loan-calculator',
    'investment-property-calculator',
    'arm-vs-fixed-rate',
    'mortgage-payoff-calculator',
    'calculadora-hipoteca-fha',
    'calculadora-amortizacion',
  ];

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: base + '/mortgage-calculator', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: base + '/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    ...articles.map((slug) => ({
      url: base + '/blog/' + slug,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
