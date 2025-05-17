import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPreviewSection = () => {
  const blogPosts = [
    {
      title: "How to Find Quality Homes at 10-15% Below What Others Pay",
      excerpt: "Discover strategic approaches to find premium properties at better prices than others are paying for the same quality. Learn how timing, market knowledge, and negotiation can help you save 10-15% on your dream home.",
      author: "Jennifer Williams",
      date: "June 12, 2025",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      alt: "Real estate agent showing premium property to buyers at a better price",
      slug: "find-discount-real-estate-deals"
    },
    {
      title: "Builder Incentives: How to Save 8-12% on New Construction Homes",
      excerpt: "Learn how to purchase the same model homes as other buyers, but at 8-12% less by leveraging builder incentive periods and end-of-quarter promotions. Same home, better price, smarter buying.",
      author: "Michael Chen",
      date: "May 28, 2025",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      alt: "Newly constructed home available at a better price through builder incentives",
      slug: "foreclosure-discount-guide"
    },
    {
      title: "5 Strategies to Pay Less for the Same Quality Home as Your Neighbors",
      excerpt: "Implement proven approaches to secure the same caliber home others paid full price for, but at a 10-15% lower price point. Learn strategic timing, negotiation tactics, and seller psychology to get the price advantage.",
      author: "David Thompson",
      date: "May 8, 2025",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      alt: "Premium property in upscale neighborhood available at a better price",
      slug: "better-price-strategies"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Real Estate <span className="text-rose-600">Price Advantage</span> Insights</h2>
          <p className="text-xl text-gray-600">
            Expert advice on finding premium properties at better prices than others are paying for the same quality homes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy" 
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-rose-600 transition-colors">
                  <Link to={`/blog/${post.slug}`} className="block">{post.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt.length > 120 ? `${post.excerpt.substring(0, 120)}...` : post.excerpt}
                </p>
                <Link to={`/blog/${post.slug}`} className="text-rose-600 font-medium flex items-center hover:text-rose-800 transition-colors">
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/blog" 
            className="inline-flex items-center bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-5 py-3 rounded-lg font-medium transition-colors"
          >
            View all price advantage articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;