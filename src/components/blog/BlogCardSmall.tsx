import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

interface BlogCardSmallProps {
  post: any;
}

const BlogCardSmall: React.FC<BlogCardSmallProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-duration-300 h-full flex flex-col">
      <div className="h-52 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.alt || `Discount real estate - ${post.title}`} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy" 
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {post.date}
          </span>
          <span className="ml-auto text-sm">{post.readTime || '6 min read'}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-rose-600 transition-colors">
          <Link to={`/blog/${post.slug}`} className="block">{post.title}</Link>
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">
          {post.excerpt.length > 120 ? `${post.excerpt.substring(0, 120)}...` : post.excerpt}
        </p>
        <Link to={`/blog/${post.slug}`} className="text-rose-600 font-medium flex items-center hover:text-rose-800 transition-colors mt-auto">
          Read more
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCardSmall;