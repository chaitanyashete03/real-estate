import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dilipbhandge.com';

  // Core Static Pages
  const routes = [
    '',
    '/properties',
    '/about',
    '/services',
    '/contact',
    '/blog',
    '/testimonials',
    '/rera-compliance',
    '/book-visit',
    '/downloads',
    '/properties-in-wakad',
    '/flats-in-hinjewadi',
    '/baner-properties',
    '/kothrud-homes',
    '/properties-under-1-crore-pune',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Mock Dynamic Properties Paths
  const propertyRoutes = ['prop-1', 'prop-2', 'prop-3', 'prop-4', 'prop-5', 'prop-6'].map((id) => ({
    url: `${baseUrl}/property/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Mock Dynamic Blog Paths
  const blogRoutes = ['investing-in-wakad-2024', 'rera-benefits-for-buyers', 'nri-home-loan-process'].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...propertyRoutes, ...blogRoutes];
}
