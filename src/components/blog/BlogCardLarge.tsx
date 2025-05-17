import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';

interface BlogCardLargeProps {
  post: any;
}

const BlogCardLarge: React.FC<BlogCardLargeProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-duration-300">
      <div className="md:flex md:h-[400px]">
        <div className="md:w-1/2 h-64 md:h-full overflow-hidden">
          <img 
            src={post.image} 
            alt={post.alt || `Discount real estate - ${post.title}`} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="eager" 
          />
        </div>
        <div className="p-8 md:w-1/2 flex flex-col">
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3 gap-3">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {post.date}
            </span>
            <span className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {post.author}
            </span>
            {post.categories.map((category: string, index: number) => (
              <Link 
                key={index}
                to={`/blog/category/${category}`}
                className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 transition-colors"
              >
                <Tag className="w-3 h-3 mr-1" />
                {category.replace('-', ' ')}
              </Link>
            ))}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-rose-600 transition-colors">
            <Link to={`/blog/${post.slug}`} className="block">{post.title}</Link>
          </h2>
          <p className="text-gray-600 mb-6 flex-grow">
            {post.excerpt}
          </p>
          <div className="flex justify-between items-center">
            <Link to={`/blog/${post.slug}`} className="text-rose-600 font-bold flex items-center hover:text-rose-800 transition-colors">
              Read Full Article
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <span className="text-sm text-gray-500">{post.readTime || '8 min read'}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCardLarge;