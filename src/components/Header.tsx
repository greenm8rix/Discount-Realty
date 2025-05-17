import React, { useState } from 'react';
import { Home, Menu, X, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleBuyDomainClick = (e: React.MouseEvent) => {
    // Option 1: Open mailto link
    const mailtoOption = confirm('Would you like to make an offer via email? Click OK to open your email client, or Cancel to use the form on the website.');
    
    if (mailtoOption) {
      e.preventDefault();
      const subject = encodeURIComponent('Offer for Discount.Realty Domain');
      const body = encodeURIComponent('Hello,\n\nI am interested in purchasing the Discount.Realty domain. Here is my offer:\n\nAmount: $\n\nName: \n\nCompany: \n\nContact details: \n\nIntended use: \n\nThank you.');
      window.location.href = `mailto:exaliodevelopment@gmail.com?subject=${subject}&body=${body}`;
    } else {
      // Navigate to the form section
      navigate('/#buy-domain');
      // Ensure smooth scrolling to the form
      setTimeout(() => {
        const formElement = document.getElementById('buy-domain');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Home className="h-6 w-6 text-rose-600 mr-2" aria-hidden="true" />
              <span className="font-bold text-gray-900 text-xl">
                <span className="text-rose-600">Discount</span>.Realty
              </span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-rose-600 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? 
                <X className="h-6 w-6" /> : 
                <Menu className="h-6 w-6" />
              }
            </button>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/#discounts" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
              Discount Properties
            </a>
            <a href="/#types" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
              Deal Types
            </a>
            <a href="/#testimonials" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
              Success Stories
            </a>
            <Link to="/blog" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
              Blog
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
              FAQ
            </Link>
          </nav>
          
          <button 
            onClick={handleBuyDomainClick}
            className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-md font-medium transition-colors hidden md:flex items-center"
            aria-label="Buy the Discount.Realty domain"
          >
            <Mail className="h-4 w-4 mr-2" />
            Buy This Domain
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3">
              <a 
                href="/#discounts" 
                className="text-gray-700 hover:text-rose-600 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Discount Properties
              </a>
              <a 
                href="/#types" 
                className="text-gray-700 hover:text-rose-600 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Deal Types
              </a>
              <a 
                href="/#testimonials" 
                className="text-gray-700 hover:text-rose-600 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Success Stories
              </a>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-rose-600 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/faq" 
                className="text-gray-700 hover:text-rose-600 font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <button 
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleBuyDomainClick(e);
                }}
                className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-md font-medium transition-colors inline-flex items-center justify-center w-full"
              >
                <Mail className="h-4 w-4 mr-2" />
                Buy This Domain
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;