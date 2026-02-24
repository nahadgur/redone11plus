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
    sitemap: 'https://11plusexampapers.co.uk/sitemap.xml',
    host: 'https://11plusexampapers.co.uk',
  };
}
