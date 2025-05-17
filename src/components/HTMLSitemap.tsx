import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import SEOHead from './SEOHead';

const HTMLSitemap = () => {
  // Organize blog posts by category
  const categorizedPosts: Record<string, typeof blogData> = {};
  
  blogData.forEach(post => {
    post.categories.forEach(category => {
      if (!categorizedPosts[category]) {
        categorizedPosts[category] = [];
      }
      categorizedPosts[category].push(post);
    });
  });

  // Main site pages
  const mainPages = [
    { name: 'Home', path: '/' },
    { name: 'Premium Properties', path: '/premium-properties' },
    { name: 'Price Advantage', path: '/price-advantage' },
    { name: 'Motivated Sellers', path: '/motivated-sellers' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <SEOHead 
        title="Sitemap | Find Premium Homes at Better Prices | Discount.Realty"
        description="Navigate our complete site map to find expert resources on premium homes at better prices than others are paying for the same quality properties."
        canonicalUrl="https://discount.realty/sitemap"
        keywords={['site map', 'premium homes', 'better prices', 'discount real estate', 'property guides']}
      />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
            <p className="text-xl text-gray-600 mb-12">
              Find all our resources on premium homes at better prices than others are paying for the same quality properties.
            </p>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Main Pages</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mainPages.map((page, index) => (
                  <li key={index}>
                    <Link 
                      to={page.path} 
                      className="text-rose-600 hover:text-rose-800 hover:underline"
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Blog Categories</h2>
              
              {Object.keys(categorizedPosts).map((category, index) => (
                <div key={index} className="mb-10 last:mb-0">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 capitalize">
                    {category.replace(/-/g, ' ')}
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {categorizedPosts[category].map((post, idx) => (
                      <li key={idx}>
                        <Link 
                          to={`/blog/${post.slug}`} 
                          className="text-rose-600 hover:text-rose-800 hover:underline"
                        >
                          {post.title}
                        </Link>
                        <span className="text-gray-500 text-sm ml-2">
                          ({post.date})
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HTMLSitemap;