import type { MetadataRoute } from 'next';

export const dynamic = 'force-static'; // <-- ADD THIS LINE

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://kavi-priyan.github.io',
            lastModified: new Date('2024-01-01'), // Use a fixed date or your deployment date
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}
