import React, { useState, useEffect, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag, Filter } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { blogData } from '../data/blogData';
import BlogCardLarge from '../components/blog/BlogCardLarge';
import BlogCardSmall from '../components/blog/BlogCardSmall';
import RelatedTopics from '../components/blog/RelatedTopics';
import SEOHead from '../components/SEOHead';

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || 'all';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [filteredPosts, setFilteredPosts] = useState(blogData);
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [isLoading, setIsLoading] = useState(true);
  
  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'price-advantage', name: 'Price Advantage' },
    { id: 'real-estate-investing', name: 'Real Estate Investing' },
    { id: 'new-construction', name: 'New Construction' },
    { id: 'luxury-properties', name: 'Luxury Properties' },
  ];

  // Update URL when search or filter changes
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set('search', searchTerm);
    if (activeCategory !== 'all') params.set('category', activeCategory);
    setSearchParams(params, { replace: true });
  }, [searchTerm, activeCategory, setSearchParams]);

  // Memoized filtering function to improve performance
  const filterPosts = useCallback(() => {
    let results = blogData;
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      results = results.filter(post => 
        post.title.toLowerCase().includes(searchLower) || 
        post.excerpt.toLowerCase().includes(searchLower) || 
        post.author.toLowerCase().includes(searchLower) ||
        post.categories.some(cat => cat.toLowerCase().includes(searchLower)) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        post.keywords.some(keyword => keyword.toLowerCase().includes(searchLower))
      );
    }
    
    if (activeCategory !== 'all') {
      results = results.filter(post => 
        post.categories.includes(activeCategory)
      );
    }
    
    return results;
  }, [searchTerm, activeCategory]);

  // Filter posts based on search term and category
  useEffect(() => {
    // Add artificial delay to simulate data loading
    const timer = setTimeout(() => {
      setFilteredPosts(filterPosts());
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchTerm, activeCategory, filterPosts]);

  // Simulate loading blog data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const featuredPost = blogData[0]; // Use the first post as featured
  const latestPosts = blogData.slice(1, 4); // Next 3 posts
  const remainingPosts = filteredPosts.slice(4); // Rest of the posts
  
  // FAQ items for the blog page
  const blogFaqItems = [
    {
      question: "How can I find homes at better prices than others are paying?",
      answer: "Look for motivated sellers, builder incentive periods, and estate sales. Strategic timing and market knowledge are key to finding properties that are identical to those others pay full price for, but at 10-15% better prices."
    },
    {
      question: "Are these lower-priced homes the same quality as full-price options?",
      answer: "Absolutely. We focus on finding identical or equivalent properties at different price points. It's like finding the best deal on a Ferrari – same premium product, better price."
    },
    {
      question: "How much can I typically save on premium properties?",
      answer: "Our clients typically secure homes at 8-15% below what others pay for comparable properties in the same neighborhoods. On a $500,000 home, that's $40,000-$75,000 in savings."
    }
  ];
  
  // Combined structured data - includes Blog and FAQ in a single script
  const combinedStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "headline": "Premium Homes at Better Prices - Expert Insights",
        "description": "Discover expert advice, market trends, and investment strategies focused on finding premium homes at better prices than others are paying for the same quality.",
        "url": "https://discount.realty/blog",
        "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80",
        "publisher": {
          "@type": "Organization",
          "name": "Discount.Realty",
          "logo": {
            "@type": "ImageObject",
            "url": "https://discount.realty/favicon.svg",
            "width": "512",
            "height": "512",
            "contentUrl": "https://discount.realty/favicon.svg"
          }
        },
        "blogPost": blogData.map(post => ({
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "image": post.image,
          "url": `https://discount.realty/blog/${post.slug}`,
          "datePublished": post.date,
          "dateModified": post.lastModified || post.date,
          "author": {
            "@type": "Person",
            "name": post.author
          },
          "publisher": {
            "@type": "Organization",
            "name": "Discount.Realty",
            "logo": {
              "@type": "ImageObject",
              "url": "https://discount.realty/favicon.svg",
              "width": "512",
              "height": "512",
              "contentUrl": "https://discount.realty/favicon.svg"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://discount.realty/blog/${post.slug}`
          },
          "keywords": post.keywords.join(", ")
        }))
      },
      {
        "@type": "FAQPage",
        "mainEntity": blogFaqItems.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading premium homes at better prices articles...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title="Premium Homes at Better Prices | Expert Real Estate Insights | Discount.Realty"
        description="Discover expert guides on finding premium properties at better prices than others are paying for the same quality. Learn proven strategies to secure identical homes with 10-15% price advantages."
        canonicalUrl="https://discount.realty/blog"
        keywords={[
          "premium homes better price",
          "same quality lower price",
          "price advantage real estate",
          "luxury homes better deals",
          "identical homes better prices",
          "strategic home buying",
          "pay less than neighbors",
          "premium neighborhoods price advantage"
        ]}
      />
      
      {/* Combined structured data in a single script tag */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(combinedStructuredData)}
        </script>
      </Helmet>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-rose-600">Premium Homes,</span> Better Prices
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              Expert advice, market trends, and investment strategies focused on finding premium properties at better prices than others are paying for the same quality.
            </p>
            
            <div className="relative mb-12">
              <div className="flex flex-col md:flex-row gap-3 mb-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search for premium homes at better prices..." 
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    aria-label="Search blog posts about premium homes at better prices"
                  />
                </div>
                <div className="relative md:w-64">
                  <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 appearance-none bg-white cursor-pointer"
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    aria-label="Filter blog posts by category"
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-gray-500 text-sm">Popular searches:</span>
                <button className="text-sm text-rose-600 hover:text-rose-800 hover:underline" onClick={() => setSearchTerm('better price strategies')}>better price strategies</button>
                <button className="text-sm text-rose-600 hover:text-rose-800 hover:underline" onClick={() => setSearchTerm('same quality homes')}>same quality homes</button>
                <button className="text-sm text-rose-600 hover:text-rose-800 hover:underline" onClick={() => setSearchTerm('price advantage')}>price advantage</button>
                <button className="text-sm text-rose-600 hover:text-rose-800 hover:underline" onClick={() => setSearchTerm('builder incentives')}>builder incentives</button>
              </div>
            </div>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center bg-white p-8 rounded-lg shadow-md mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">No matching articles found</h2>
                <p className="text-gray-600 mb-4">Try adjusting your search or browse our categories for more content about premium homes at better prices.</p>
                <button 
                  onClick={() => {setSearchTerm(''); setActiveCategory('all');}}
                  className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
                >
                  View all articles
                </button>
              </div>
            ) : (
              <>
                {!searchTerm && activeCategory === 'all' && (
                  <div className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <span className="bg-rose-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2 flex-shrink-0">
                        <span>★</span>
                      </span>
                      Featured Article
                    </h2>
                    <BlogCardLarge post={featuredPost} />
                  </div>
                )}
                
                {!searchTerm && activeCategory === 'all' && (
                  <div className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Price Advantage Articles</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                      {latestPosts.map(post => (
                        <BlogCardSmall key={post.slug} post={post} />
                      ))}
                    </div>
                  </div>
                )}
                
                {(filteredPosts.length > 0) && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      {searchTerm || activeCategory !== 'all' ? 'Search Results' : 'All Articles About Premium Homes at Better Prices'}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      {(searchTerm || activeCategory !== 'all' ? filteredPosts : remainingPosts).map(post => (
                        <article key={post.slug} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-duration-300">
                          <div className="md:flex">
                            <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                              <img 
                                src={post.image} 
                                alt={post.alt || `Premium home at better price - ${post.title}`} 
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                loading="lazy" 
                              />
                            </div>
                            <div className="p-6 md:w-2/3">
                              <div className="flex flex-wrap items-center text-sm text-gray-500 mb-2 gap-3">
                                <span className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {post.date}
                                </span>
                                <span className="flex items-center">
                                  <User className="w-4 h-4 mr-1" />
                                  {post.author}
                                </span>
                                <span className="flex items-center">
                                  <Tag className="w-4 h-4 mr-1" />
                                  {post.categories[0].replace('-', ' ')}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-rose-600 transition-colors">
                                <Link to={`/blog/${post.slug}`} className="block">{post.title}</Link>
                              </h3>
                              <p className="text-gray-600 mb-4 line-clamp-2">
                                {post.excerpt}
                              </p>
                              <Link to={`/blog/${post.slug}`} className="text-rose-600 font-medium flex items-center hover:text-rose-800 transition-colors">
                                Read full article
                                <ArrowRight className="w-4 h-4 ml-1" />
                              </Link>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
            
            <div className="mt-12 mb-12">
              <RelatedTopics />
            </div>
            
            <div className="mt-16 p-8 bg-gradient-to-r from-rose-50 to-sky-50 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Get Price Advantage Updates</h3>
                  <p className="text-gray-600">Subscribe to receive the latest insights on finding premium homes at better prices directly to your inbox.</p>
                </div>
                <div className="w-full md:w-auto">
                  <form className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 w-full sm:w-64"
                      aria-label="Your email address"
                    />
                    <button 
                      type="submit" 
                      className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-bold transition-colors whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="text-xs text-gray-500 mt-2">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;