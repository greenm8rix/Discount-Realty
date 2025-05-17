import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Link as LinkIcon } from 'lucide-react';

interface SocialShareProps {
  title: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ title }) => {
  const encoded = encodeURIComponent(`${title} - Discount Real Estate Insights | discount.realty`);
  const url = encodeURIComponent(window.location.href);
  
  const shareLinks = [
    { 
      name: 'Facebook', 
      icon: <Facebook className="w-5 h-5" />, 
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    { 
      name: 'Twitter', 
      icon: <Twitter className="w-5 h-5" />, 
      href: `https://twitter.com/intent/tweet?text=${encoded}&url=${url}`,
      color: 'bg-sky-500 hover:bg-sky-600'
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin className="w-5 h-5" />, 
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${encoded}`,
      color: 'bg-blue-700 hover:bg-blue-800'
    },
    { 
      name: 'Email', 
      icon: <Mail className="w-5 h-5" />, 
      href: `mailto:?subject=${encoded}&body=Check out this article: ${url}`,
      color: 'bg-gray-600 hover:bg-gray-700'
    },
  ];

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Share This Article</h3>
      <div className="flex gap-2 mb-4">
        {shareLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${link.color} text-white p-2 rounded-full transition-colors`}
            aria-label={`Share on ${link.name}`}
          >
            {link.icon}
          </a>
        ))}
      </div>
      <button 
        onClick={copyLink}
        className="flex items-center justify-center w-full border border-gray-300 rounded-md py-2 hover:bg-gray-50 transition-colors"
      >
        <LinkIcon className="w-4 h-4 mr-2" />
        Copy Link
      </button>
    </div>
  );
};

export default SocialShare;