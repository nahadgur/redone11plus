import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/quiz',        // transient quiz session pages — no SEO value
          '/test',        // internal debug page
          '/api/',        // API routes
        ],
      },
    ],
    sitemap: 'https://www.11plusexampapers.com/sitemap.xml',
    host: 'https://www.11plusexampapers.com',
  };
}
