import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface RelatedPostCardProps {
  post: any;
}

const RelatedPostCard: React.FC<RelatedPostCardProps> = ({ post }) => {
  return (
    <div className="flex items-start">
      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
        <img 
          src={post.image} 
          alt={post.alt || `Discount real estate - ${post.title}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="ml-4">
        <h4 className="font-medium text-gray-900 hover:text-rose-600 transition-colors line-clamp-2">
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h4>
        <div className="flex items-center text-xs text-gray-500 mt-1">
          <Calendar className="w-3 h-3 mr-1" />
          {post.date}
        </div>
      </div>
    </div>
  );
};

export default RelatedPostCard;