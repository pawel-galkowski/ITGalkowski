import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://itgalkowski.pl'
  
  return [
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          pl: `${baseUrl}/pl`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/pl`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          pl: `${baseUrl}/pl`,
          en: `${baseUrl}/en`,
        },
      },
    },
  ]
}
