import fs from 'fs';
import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

const DOMAIN = 'https://discount.realty';

// Main content pages
const pages = [
  { url: '/', changefreq: 'weekly', priority: 1.0, lastmod: new Date() },
  { url: '/premium-properties', changefreq: 'daily', priority: 0.9, lastmod: new Date() },
  { url: '/price-advantage', changefreq: 'daily', priority: 0.9, lastmod: new Date() },
  { url: '/motivated-sellers', changefreq: 'daily', priority: 0.8, lastmod: new Date() },
  { url: '/blog', changefreq: 'daily', priority: 0.8, lastmod: new Date() },
  { url: '/faq', changefreq: 'monthly', priority: 0.6, lastmod: new Date() },
  { url: '/about', changefreq: 'monthly', priority: 0.5, lastmod: new Date() },
  { url: '/contact', changefreq: 'monthly', priority: 0.5, lastmod: new Date() },
];

// Blog posts
const blogPosts = [
  { url: '/blog/find-discount-real-estate-deals', changefreq: 'monthly', priority: 0.7, lastmod: new Date('2025-06-12') },
  { url: '/blog/foreclosure-discount-guide', changefreq: 'monthly', priority: 0.7, lastmod: new Date('2025-05-28') },
  { url: '/blog/calculating-discount-property-value', changefreq: 'monthly', priority: 0.7, lastmod: new Date('2025-05-15') },
  { url: '/blog/better-price-strategies', changefreq: 'monthly', priority: 0.7, lastmod: new Date('2025-05-08') },
  { url: '/blog/financing-premium-properties', changefreq: 'monthly', priority: 0.7, lastmod: new Date('2025-04-22') },
  { url: '/blog/motivated-seller-opportunities', changefreq: 'monthly', priority: 0.7, lastmod: new Date('2025-04-10') },
  { url: '/blog/luxury-purchase-timing', changefreq: 'monthly', priority: 0.7, lastmod: new Date('2025-03-25') },
  { url: '/blog/premium-property-inspection-guide', changefreq: 'monthly', priority: 0.7, lastmod: new Date('2025-03-12') },
  { url: '/blog/premium-properties-appreciation', changefreq: 'monthly', priority: 0.7, lastmod: new Date('2025-02-28') },
  { url: '/blog/success-stories-better-prices', changefreq: 'monthly', priority: 0.7, lastmod: new Date('2025-02-15') },
];

async function generateSitemap() {
  try {
    // Create streams
    const sitemapStream = new SitemapStream({ hostname: DOMAIN });
    const pipeline = Readable.from([...pages, ...blogPosts]).pipe(sitemapStream);
    
    // Generate sitemap XML
    const xml = await streamToPromise(pipeline);
    
    // Write to file
    fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), xml);
    
    console.log('Sitemap generated successfully at public/sitemap.xml');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();