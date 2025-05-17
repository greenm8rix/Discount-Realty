import React from 'react';
import { Home, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Offer for Discount.Realty Domain');
    const body = encodeURIComponent('Hello,\n\nI am interested in purchasing the Discount.Realty domain. Here is my offer:\n\nAmount: $\n\nName: \n\nCompany: \n\nContact details: \n\nIntended use: \n\nThank you.');
    window.location.href = `mailto:exaliodevelopment@gmail.com?subject=${subject}&body=${body}`;
  };
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8" itemScope itemType="https://schema.org/WPFooter">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-10 md:mb-0">
            <div className="flex items-center mb-4">
              <Home className="h-6 w-6 text-rose-500 mr-2" aria-hidden="true" />
              <span className="font-bold text-xl" itemProp="name">
                <span className="text-rose-500">Discount</span>.Realty
              </span>
            </div>
            <p className="text-gray-400 max-w-md mb-6" itemProp="description">
              Your resource for finding premium homes at better prices than others are paying. We focus on high-quality properties in excellent neighborhoods – same quality, better price.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/discountrealty" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Discount Realty on Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://facebook.com/discountrealty" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Discount Realty on Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/discountrealty" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Discount Realty on Instagram">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-bold text-lg mb-4">Better Price Advantages</h3>
              <nav aria-label="Footer primary navigation">
                <ul className="space-y-2">
                  <li><a href="/#discounts" className="text-gray-400 hover:text-white transition-colors">Premium Properties</a></li>
                  <li><a href="/#types" className="text-gray-400 hover:text-white transition-colors">Price Advantage Strategies</a></li>
                  <li><a href="/#testimonials" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
                  <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">Price Advantage FAQ</Link></li>
                </ul>
              </nav>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Premium Opportunities</h3>
              <nav aria-label="Footer secondary navigation">
                <ul className="space-y-2">
                  <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Price Advantage Blog</Link></li>
                  <li><a href="/motivated-sellers" className="text-gray-400 hover:text-white transition-colors">Motivated Seller Properties</a></li>
                  <li><a href="/premium-properties" className="text-gray-400 hover:text-white transition-colors">Builder Incentive Homes</a></li>
                  <li><a href="/price-advantage" className="text-gray-400 hover:text-white transition-colors">Strategic Timing Opportunities</a></li>
                  <li><a href="/premium-properties" className="text-gray-400 hover:text-white transition-colors">Estate Sale Properties</a></li>
                </ul>
              </nav>
            </div>
            
            <div itemScope itemType="https://schema.org/Organization">
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-rose-500 mr-2 mt-0.5" aria-hidden="true" />
                  <a href="mailto:exaliodevelopment@gmail.com" className="text-gray-400 hover:text-white transition-colors" itemProp="email">
                    exaliodevelopment@gmail.com
                  </a>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-rose-500 mr-2 mt-0.5" aria-hidden="true" />
                  <a href="tel:+35699283257" className="text-gray-400 hover:text-white transition-colors" itemProp="telephone">
                    +356 9928 3257
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-rose-500 mr-2 mt-0.5" aria-hidden="true" />
                  <span className="text-gray-400" itemProp="location" itemScope itemType="https://schema.org/Place">
                    <span itemProp="name">Premium Properties, Better Prices</span>
                  </span>
                </li>
                <li>
                  <div className="mt-3">
                    <a 
                      href="/#buy-domain" 
                      className="text-rose-400 hover:text-white transition-colors inline-block"
                    >
                      Use our form to make an offer
                    </a>
                    <span className="text-gray-500 mx-2">or</span>
                    <button 
                      onClick={handleEmailClick}
                      className="text-rose-400 hover:text-white transition-colors inline-flex items-center"
                    >
                      <Mail className="h-4 w-4 mr-1" />
                      Email directly
                    </button>
                  </div>
                </li>
              </ul>
              <meta itemProp="name" content="Discount.Realty" />
              <link itemProp="url" href="https://discount.realty" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} <span itemProp="copyrightHolder">Discount.Realty</span>. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            The premium domain Discount.Realty is available for purchase. <a href="/#buy-domain" className="text-rose-400 hover:text-white">Make an offer</a>
          </p>
          
          <div className="mt-4 mb-4">
            <p className="text-gray-500 text-sm mb-2">Our Partners:</p>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="https://promarketing.agency" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-white transition-colors">ProMarketing Agency</a>
              <a href="https://usamansion.com" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-white transition-colors">USA Mansion</a>
            </div>
          </div>
          
          <p className="text-gray-700 text-xs mt-4">
            Keywords: premium properties better prices, same quality lower price, price advantage real estate, luxury homes better deals, identical homes better prices, strategic home buying, pay less than neighbors, premium neighborhoods price advantage
          </p>
          <nav aria-label="Footer legal links" className="mt-4">
            <ul className="flex justify-center space-x-6 text-sm text-gray-500">
              <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><Link to="/sitemap" className="hover:text-white transition-colors">HTML Sitemap</Link></li>
              <li><a href="/sitemap.xml" className="hover:text-white transition-colors">XML Sitemap</a></li>
              <li><a href="/rss.xml" className="hover:text-white transition-colors">RSS Feed</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;