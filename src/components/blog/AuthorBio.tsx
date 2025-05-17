import React from 'react';
import { User } from 'lucide-react';

interface AuthorBioProps {
  author: string;
}

const AuthorBio: React.FC<AuthorBioProps> = ({ author }) => {
  // In a real implementation, you would fetch author details from a database
  const authorDetails = {
    name: author,
    title: "Discount Real Estate Expert",
    bio: "Specializes in finding and evaluating discount real estate opportunities with over 10 years of experience in foreclosures, short sales, and distressed properties. Helps investors and homebuyers save 20-40% on property purchases.",
    image: `https://i.pravatar.cc/300?u=${author.replace(/\s+/g, '')}`
  };

  return (
    <section className="bg-gray-50 rounded-lg p-6 mb-16 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Author</h2>
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
          <img 
            src={authorDetails.image} 
            alt={`${authorDetails.name} - Discount Real Estate Expert`}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{authorDetails.name}</h3>
          <p className="text-gray-600 mb-4">{authorDetails.title}</p>
          <p className="text-gray-700">{authorDetails.bio}</p>
          <div className="mt-4">
            <a 
              href={`/authors/${authorDetails.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-rose-600 font-medium hover:text-rose-800 transition-colors"
            >
              View all articles by this author
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorBio;