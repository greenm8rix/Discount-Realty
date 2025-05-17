import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, Tag, Share2, ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { blogData } from '../data/blogData';
import RelatedPostCard from '../components/blog/RelatedPostCard';
import AuthorBio from '../components/blog/AuthorBio';
import SocialShare from '../components/blog/SocialShare';
import TableOfContents from '../components/blog/TableOfContents';
import CommentSection from '../components/blog/CommentSection';
import RelatedTopics from '../components/blog/RelatedTopics';
import SEOHead from '../components/SEOHead';
import { Helmet } from 'react-helmet-async';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const post = blogData.find(post => post.slug === slug);
  
  // Track page view
  useEffect(() => {
    if (post) {
      // In a real app, you'd send analytics data here
      console.log(`Viewing article: ${post.title}`);
    }
  }, [post, slug]);
  
  // Simulate post loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [slug]);

  // Handle 404 for blog posts
  useEffect(() => {
    if (!isLoading && !post) {
      console.log('Post not found, this is a 404 situation');
    }
  }, [isLoading, post]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading premium homes at better prices article...</p>
        </div>
      </div>
    );
  }
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Article Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, the article you're looking for doesn't exist or has been moved.</p>
          <Link to="/blog" className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-md font-bold transition-colors">
            Browse All Articles
          </Link>
        </div>
      </div>
    );
  }

  // Find related posts based on categories
  const relatedPosts = blogData
    .filter(p => p.slug !== post.slug && p.categories.some(cat => post.categories.includes(cat)))
    .slice(0, 3);

  // Get index and navigation links
  const currentIndex = blogData.findIndex(p => p.slug === post.slug);
  const previousPost = currentIndex > 0 ? blogData[currentIndex - 1] : null;
  const nextPost = currentIndex < blogData.length - 1 ? blogData[currentIndex + 1] : null;

  // Mock FAQs for the article (in a real scenario, these would be part of the post data)
  const articleFaqs = [
    {
      question: `What are the best ways to find ${post.title.includes('better price') ? 'better prices on premium homes' : 'quality homes at competitive prices'}?`,
      answer: `Look for motivated sellers, strategic timing opportunities, and market inefficiencies. Understanding seller psychology, leveraging end-of-quarter builder incentives, and monitoring estate sales can lead to significant price advantages of 10-15% on homes of identical quality.`
    },
    {
      question: `How much can you save on ${post.categories.includes('luxury-properties') ? 'luxury properties' : 'premium homes'} through strategic buying?`,
      answer: `Typically, buyers can save between 8-15% on premium properties through strategic approaches compared to what others pay for identical homes. The exact price advantage depends on the seller's motivation, timing, and your negotiation strategy.`
    },
    {
      question: `What factors should I consider when comparing ${post.categories.includes('new-construction') ? 'new construction homes' : 'premium properties'} at different price points?`,
      answer: `Always confirm you're comparing truly equivalent properties by examining quality of materials, neighborhood values, age and condition, builder reputation, and ongoing maintenance costs. Ensure the price advantage doesn't come with hidden compromises in quality or location.`
    }
  ];

  // Mock sections for table of contents
  const articleSections = [
    { id: "introduction", title: "Introduction" },
    { id: "finding-deals", title: `Finding ${post.categories.includes('new-construction') ? 'Builder Incentives' : 'Price Advantages'}` },
    { id: "negotiation-strategies", title: "Negotiation Strategies" },
    { id: "due-diligence", title: "Verification Process" },
    { id: "financing-options", title: "Financing Considerations" },
    { id: "success-stories", title: "Success Stories" },
    { id: "common-mistakes", title: "Common Mistakes to Avoid" },
    { id: "conclusion", title: "Conclusion" }
  ];
  
  // Combined structured data - includes breadcrumbs, article, and FAQ
  const combinedStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://discount.realty/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://discount.realty/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.categories[0].replace('-', ' '),
            "item": `https://discount.realty/blog?category=${post.categories[0]}`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": post.title,
            "item": `https://discount.realty/blog/${post.slug}`
          }
        ]
      },
      {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.image,
        "url": `https://discount.realty/blog/${post.slug}`,
        "datePublished": post.date,
        "dateModified": post.lastModified || post.date,
        "author": {
          "@type": "Person",
          "name": post.author,
          "url": `https://discount.realty/authors/${post.author.toLowerCase().replace(/\s+/g, '-')}`
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
        "keywords": post.keywords.join(", "),
        "wordCount": post.excerpt ? post.excerpt.split(/\s+/).length * 20 : 1000,
        "articleSection": post.categories[0].replace('-', ' ')
      },
      {
        "@type": "FAQPage",
        "mainEntity": articleFaqs.map(faq => ({
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

  // Add HowTo schema if applicable
  if (post.title.toLowerCase().includes('how to')) {
    const howToSchema = {
      "@type": "HowTo",
      "name": post.title,
      "description": post.excerpt,
      "image": post.image,
      "totalTime": "PT20M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "supply": [
        {
          "@type": "HowToSupply",
          "name": "Market research tools"
        },
        {
          "@type": "HowToSupply",
          "name": "Property comparison data"
        }
      ],
      "tool": [
        {
          "@type": "HowToTool",
          "name": "Negotiation strategy"
        },
        {
          "@type": "HowToTool",
          "name": "Timing knowledge"
        }
      ],
      "step": articleSections.slice(1, -1).map((section, index) => ({
        "@type": "HowToStep",
        "name": section.title,
        "url": `https://discount.realty/blog/${post.slug}#${section.id}`,
        "image": post.image,
        "position": index + 1,
        "itemListElement": {
          "@type": "HowToDirection",
          "text": `Learn about ${section.title.toLowerCase()} to find premium homes at better prices.`
        }
      }))
    };
    
    // Add HowTo schema to the graph array
    combinedStructuredData["@graph"].push(howToSchema);
  }

  return (
    <>
      <SEOHead
        title={`${post.title} | Premium Homes at Better Prices`}
        description={post.excerpt}
        canonicalUrl={`https://discount.realty/blog/${post.slug}`}
        image={post.image}
        imageAlt={post.alt || `Premium home at better price - ${post.title}`}
        type="article"
        articleProps={{
          publishedTime: new Date(post.date).toISOString(),
          modifiedTime: post.lastModified ? new Date(post.lastModified).toISOString() : undefined,
          author: post.author,
          section: post.categories[0].replace('-', ' '),
          tags: post.tags
        }}
        keywords={post.keywords}
      />
      
      {/* Combined structured data in a single script tag */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(combinedStructuredData)}
        </script>
      </Helmet>

      <div className="bg-gray-50 pt-8 pb-2">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <nav className="flex items-center text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center flex-wrap">
                <li className="flex items-center">
                  <Link to="/" className="hover:text-rose-600 transition-colors">Home</Link>
                </li>
                <ChevronRight className="w-4 h-4 mx-2" />
                <li className="flex items-center">
                  <Link to="/blog" className="hover:text-rose-600 transition-colors">Blog</Link>
                </li>
                <ChevronRight className="w-4 h-4 mx-2" />
                <li className="flex items-center">
                  <Link to={`/blog?category=${post.categories[0]}`} className="hover:text-rose-600 transition-colors">
                    {post.categories[0].charAt(0).toUpperCase() + post.categories[0].slice(1).replace('-', ' ')}
                  </Link>
                </li>
                <ChevronRight className="w-4 h-4 mx-2" />
                <li className="text-gray-700 font-medium truncate max-w-[200px] sm:max-w-none">
                  {post.title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-3/4">
                <header className="mb-8">
                  <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-3">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </span>
                    {post.categories.map((category, index) => (
                      <Link 
                        key={index}
                        to={`/blog?category=${category}`}
                        className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 transition-colors"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {category.replace('-', ' ')}
                      </Link>
                    ))}
                    <div className="ml-auto">
                      <button 
                        aria-label="Share article" 
                        className="flex items-center hover:text-rose-600 transition-colors"
                        onClick={() => {
                          // Open native share if available, otherwise fallback
                          if (navigator.share) {
                            navigator.share({
                              title: post.title,
                              text: post.excerpt,
                              url: window.location.href
                            }).catch(console.error);
                          } else {
                            // Scroll to share component
                            document.getElementById('social-share')?.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        <Share2 className="w-4 h-4 mr-1" />
                        Share
                      </button>
                    </div>
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" id="introduction">
                    {post.title}
                  </h1>
                  
                  <p className="text-xl text-gray-600 mb-6">
                    {post.excerpt}
                  </p>
                </header>
                
                <div className="mb-12 rounded-lg overflow-hidden h-96 relative">
                  <img 
                    src={post.image} 
                    alt={post.alt || `Premium home at better price - ${post.title}`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white text-sm">
                      Image: {post.alt || `Illustration for ${post.title}`}
                    </p>
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none mb-16">
                  {/* Mock article content - in a real implementation, this would come from post.content */}
                  <h2 id="finding-deals">Finding {post.categories.includes('new-construction') ? 'Builder Incentives' : 'Price Advantages'} on Premium Homes</h2>
                  <p>
                    The market offers incredible opportunities for buyers looking to save 10-15% on premium property purchases. Whether you're seeking your dream home or adding to your investment portfolio, understanding how to identify properties where you can pay less while getting the same quality is essential.
                  </p>
                  <p>
                    Look for motivated sellers, end-of-quarter builder incentives, estate sales, and relocation situations. These scenarios consistently yield the best price advantages on properties that are identical to those others are paying full price for in the same neighborhoods.
                  </p>
                  
                  <h2 id="negotiation-strategies">Negotiation Strategies for Maximum Price Advantage</h2>
                  <p>
                    When pursuing premium homes at better prices, your negotiation approach can dramatically impact your savings. Unlike traditional transactions, these opportunities require specific strategies to maximize your price advantage.
                  </p>
                  <p>
                    For new construction, emphasize the builder's carrying costs and the value of a quick, certain close. With motivated sellers, focus on providing a streamlined transaction process rather than solely focusing on price. These approaches typically yield an additional 3-5% price advantage beyond the initial offering.
                  </p>
                  
                  <blockquote>
                    <p>"The biggest mistake buyers make is focusing only on the list price. The true advantage comes from understanding when and how to make your offer on identical properties." — Real Estate Strategy Expert</p>
                  </blockquote>
                  
                  <h2 id="due-diligence">The Critical Verification Process</h2>
                  <p>
                    When purchasing premium homes at better prices than others are paying, thorough verification is essential. You must confirm you're truly getting the same quality property at a better price.
                  </p>
                  <p>
                    Always conduct professional inspections, compare materials and finishes with full-price equivalents, research neighborhood values thoroughly, and verify all systems and structural elements. These steps help ensure the property truly represents the same quality despite its better price.
                  </p>
                  
                  <h2 id="financing-options">Financing Considerations for Premium Properties</h2>
                  <p>
                    The right financing approach can enhance your price advantage even further when purchasing premium properties at better prices than others are paying.
                  </p>
                  <p>
                    Consider specialized jumbo loans with competitive rates, strategic down payment amounts to maximize leverage, or portfolio financing options. For investors consistently pursuing premium properties at better prices, establishing relationships with lenders who understand your approach can provide significant long-term advantages.
                  </p>
                  
                  <h2 id="success-stories">Real-World Success Stories</h2>
                  <p>
                    Many buyers have achieved remarkable results by finding premium properties at better prices than others paid for identical homes in the same neighborhoods.
                  </p>
                  <p>
                    For example, a family in Phoenix purchased a premium home in an exclusive neighborhood for $75,000 less than their neighbors paid for the identical floor plan just three months earlier, simply by leveraging the builder's end-of-quarter incentives. In another case, a buyer in Miami secured a luxury waterfront condo at 12% below what others paid for identical units in the same building by purchasing from a motivated seller who needed to relocate quickly.
                  </p>
                  
                  <h2 id="common-mistakes">Common Mistakes to Avoid</h2>
                  <p>
                    While premium homes at better prices offer tremendous opportunities, there are common pitfalls every buyer should avoid. Being aware of these mistakes will improve your success rate significantly.
                  </p>
                  <p>
                    Avoid assuming all lower-priced properties represent the same quality, rushing the verification process, misunderstanding seller motivation, or focusing exclusively on the purchase price without considering the total acquisition cost. Additionally, don't neglect to confirm you're truly comparing identical properties in terms of quality, features, and location.
                  </p>
                  
                  <h2 id="conclusion">Conclusion: Maximizing Your Price Advantage Strategy</h2>
                  <p>
                    Success in finding premium homes at better prices comes from combining proper research, strategic timing, and thoughtful negotiation. By understanding how to identify situations where sellers will accept less for the same quality property others are paying full price for, you can achieve significant savings.
                  </p>
                  <p>
                    Remember that patience and thoroughness are essential when pursuing price advantages on premium properties. With the right approach, you can secure the same quality home others are paying full price for, but at a 10-15% discount – just like finding the best deal on a Ferrari.
                  </p>
                </div>
                
                <section id="faqs" className="mb-16">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {articleFaqs.map((faq, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800 p-4 bg-gray-50 rounded-t-lg">
                          {faq.question}
                        </h3>
                        <div className="p-4">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
                
                <section className="mb-16">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Exploring Premium Homes at Better Prices</h2>
                  <div className="flex flex-col sm:flex-row gap-4">
                    {previousPost && (
                      <Link 
                        to={`/blog/${previousPost.slug}`}
                        className="flex-1 border border-gray-200 rounded-lg p-4 hover:border-rose-300 hover:bg-rose-50 transition-colors group"
                      >
                        <div className="flex items-center text-gray-500 mb-2">
                          <ArrowLeft className="w-4 h-4 mr-1 group-hover:text-rose-600" />
                          <span className="text-sm">Previous Article</span>
                        </div>
                        <h3 className="font-medium text-gray-900 group-hover:text-rose-600">{previousPost.title}</h3>
                      </Link>
                    )}
                    
                    {nextPost && (
                      <Link 
                        to={`/blog/${nextPost.slug}`}
                        className="flex-1 border border-gray-200 rounded-lg p-4 hover:border-rose-300 hover:bg-rose-50 transition-colors text-right group"
                      >
                        <div className="flex items-center justify-end text-gray-500 mb-2">
                          <span className="text-sm">Next Article</span>
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:text-rose-600" />
                        </div>
                        <h3 className="font-medium text-gray-900 group-hover:text-rose-600">{nextPost.title}</h3>
                      </Link>
                    )}
                  </div>
                </section>
                
                <AuthorBio author={post.author} />
                
                <CommentSection />
              </div>
              
              <aside className="md:w-1/4">
                <div className="sticky top-24">
                  <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
                    <TableOfContents sections={articleSections} />
                  </div>
                  
                  <div id="social-share">
                    <SocialShare title={post.title} />
                  </div>
                  
                  {relatedPosts.length > 0 && (
                    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
                      <div className="space-y-6">
                        {relatedPosts.map(related => (
                          <RelatedPostCard key={related.slug} post={related} />
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="bg-gradient-to-r from-rose-50 to-sky-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Price Advantage Advice</h3>
                    <p className="text-gray-600 mb-4">Looking for personalized guidance on finding premium homes at better prices?</p>
                    <Link 
                      to="/" 
                      className="block w-full bg-rose-600 hover:bg-rose-700 text-white text-center px-4 py-3 rounded-md font-medium transition-colors"
                    >
                      Speak With an Expert
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </article>
      
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">More Resources for Premium Homes at Better Prices</h2>
            <RelatedTopics />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;