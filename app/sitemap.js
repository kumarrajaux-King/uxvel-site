const ROUTES = ['', 'services', 'process', 'work', 'about', 'contact', 'techouts', 'flyrlink', 'aarniksha-solutions', 'dermsaga', 'advyra'];

export const dynamic = 'force-static';

export default function sitemap() {
  const now = new Date();
  return ROUTES.map((r) => ({
    url: 'https://uxvel.com' + (r ? '/' + r : '') + '/',
    lastModified: now,
    changeFrequency: r === '' ? 'weekly' : 'monthly',
    priority: r === '' ? 1 : 0.7,
  }));
}
