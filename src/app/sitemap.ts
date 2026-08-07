import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://shopdriveaki.id',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];
}
