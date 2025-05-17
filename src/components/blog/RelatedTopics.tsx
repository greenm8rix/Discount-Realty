import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Tag, DollarSign, BarChart3, PiggyBank } from 'lucide-react';

const RelatedTopics = () => {
  const topics = [
    {
      title: "Premium Homes, Better Prices",
      description: "Quality properties at 10-15% below what others pay",
      icon: <Home className="w-8 h-8 text-rose-600" />,
      link: "/blog?category=price-advantage"
    },
    {
      title: "Strategic Buying Guide",
      description: "Expert strategies for finding identical homes at better prices",
      icon: <Tag className="w-8 h-8 text-rose-600" />,
      link: "/blog?category=real-estate-investing"
    },
    {
      title: "Luxury Property Advantages",
      description: "Paying less for the same premium properties",
      icon: <DollarSign className="w-8 h-8 text-rose-600" />,
      link: "/blog?category=luxury-properties"
    },
    {
      title: "Market Timing Analysis",
      description: "When to buy for the best pricing on quality homes",
      icon: <BarChart3 className="w-8 h-8 text-rose-600" />,
      link: "/blog?category=market-timing"
    },
    {
      title: "Value Comparison Tools",
      description: "Compare pricing of identical properties in the same area",
      icon: <PiggyBank className="w-8 h-8 text-rose-600" />,
      link: "/blog?category=price-advantage"
    }
  ];

  return (
    <div className="grid md:grid-cols-5 gap-4">
      {topics.map((topic, index) => (
        <Link 
          key={index}
          to={topic.link}
          className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
        >
          <div className="mb-3">
            {topic.icon}
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">{topic.title}</h3>
          <p className="text-sm text-gray-600">{topic.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default RelatedTopics;