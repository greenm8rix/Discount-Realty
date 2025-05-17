import React, { useState, lazy, Suspense } from 'react';
import { Check } from 'lucide-react';
import DomainOfferForm from './components/DomainOfferForm';
import DomainValueSection from './components/DomainValueSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import FAQSection from './components/FAQSection';
import DiscountRealtySection from './components/DiscountRealtySection';
import TestimonialsSection from './components/TestimonialsSection';
import BlogPreviewSection from './components/BlogPreviewSection';
import RealEstateMarketSection from './components/RealEstateMarketSection';
import LocalDealsSection from './components/LocalDealsSection';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { supabase } from './lib/supabase';
import { Helmet } from 'react-helmet-async';

// Lazy load pages for better performance
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const HTMLSitemap = lazy(() => import('./components/HTMLSitemap'));
const FAQ = lazy(() => import('./pages/FAQ'));

function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = async (data: any) => {
    console.log('Form submitted:', data);
    
    try {
      // More defensive check for supabase configuration
      const isSupabaseConfigured = supabase && 
                                  supabase.url && 
                                  typeof supabase.url === 'string' && 
                                  !supabase.url.includes('your_supabase_url');
      
      if (isSupabaseConfigured) {
        console.log('Data was submitted to Supabase in the form component');
      } else {
        console.log('Supabase not configured, would send email here in a production app');
        // In a real implementation, you would send this data via an API or serverless function
      }
      setIsFormSubmitted(true);
    } catch (error) {
      console.error('Error handling form submission:', error);
      // Form will handle UI errors directly
    }
  };

  // Homepage structured data that combines WebSite and Organization
  const homePageStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "url": "https://discount.realty/",
        "name": "Discount.Realty",
        "description": "Premium homes at better prices than others are paying. Same quality, lower price - just like finding the best deal on a Ferrari.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://discount.realty/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "RealEstateAgent",
        "name": "Discount.Realty",
        "url": "https://discount.realty",
        "logo": {
          "@type": "ImageObject",
          "url": "https://discount.realty/favicon.svg",
          "width": "512",
          "height": "512",
          "contentUrl": "https://discount.realty/favicon.svg"
        },
        "description": "Finding premium homes at better prices than others are paying. We help buyers secure the same quality properties at 10-15% less than comparable homes in the same neighborhoods.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US"
        },
        "priceRange": "$$",
        "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+35699283257",
          "contactType": "customer service",
          "email": "exaliodevelopment@gmail.com",
          "availableLanguage": ["English"]
        }
      }
    ]
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Helmet>
          {/* Alternate language hreflang tags */}
          <link rel="alternate" hreflang="x-default" href="https://discount.realty/" />
          <link rel="alternate" hreflang="en" href="https://discount.realty/" />
          
          {/* Link to RSS feed */}
          <link rel="alternate" type="application/rss+xml" title="Discount.Realty Blog" href="https://discount.realty/rss.xml" />
          <link rel="alternate" type="application/json" title="Discount.Realty Blog" href="https://discount.realty/feed.json" />
          
          {/* Combined structured data for homepage in a single script tag */}
          <script type="application/ld+json">
            {JSON.stringify(homePageStructuredData)}
          </script>
        </Helmet>
        
        <Header />
        <Suspense fallback={
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <DiscountRealtySection />
                <LocalDealsSection />
                <RealEstateMarketSection />
                <TestimonialsSection />
                <BlogPreviewSection />
                <DomainValueSection />
                <div className="bg-gradient-to-r from-rose-50 to-sky-50 py-16">
                  <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                      {!isFormSubmitted ? (
                        <DomainOfferForm onSubmit={handleFormSubmit} />
                      ) : (
                        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                            <Check className="w-8 h-8 text-green-600" />
                          </div>
                          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Thank You for Your Offer!</h3>
                          <p className="text-gray-600 mb-6">
                            We've received your offer for the Discount.Realty domain. We'll review it and get back to you within 24 hours.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <FAQSection />
              </>
            } />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/sitemap" element={<HTMLSitemap />} />
            <Route path="/faq" element={<FAQ />} />
            {/* Redirect for any non-matching routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;