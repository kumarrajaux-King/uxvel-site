export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://uxvel.com/sitemap.xml',
    host: 'https://uxvel.com',
  };
}
