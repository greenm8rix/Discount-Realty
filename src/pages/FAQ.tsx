import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "What does 'discount' really mean for these properties?",
      answer: "It's simple – discount means paying less for the exact same quality. Just like choosing between two identical Ferraris where one dealership offers a lower price, we help you find high-quality homes in desirable areas at better prices than others are paying. The properties have the same features, same neighborhoods, and same quality – you just pay less."
    },
    {
      question: "Why would sellers offer the same home at a lower price?",
      answer: "Various circumstances lead sellers to prioritize a quick, certain sale over maximizing price – relocations, estate sales, career changes, or builders with excess inventory. These create opportunities to purchase the exact same home you'd want anyway, but at a better price. It's like finding a luxury watch at 15% off – same product, better value."
    },
    {
      question: "How much can I really save on these properties?",
      answer: "Typically, our clients secure homes at 8-15% below comparable properties in the same neighborhoods. On a $500,000 home, that's $40,000-$75,000 in savings – simply by being strategic about when and how you purchase. Who wouldn't want to pay less for the exact same product?"
    },
    {
      question: "How to find good deals on houses in premium neighborhoods?",
      answer: "Look for properties where timing creates opportunities – end-of-quarter sales, relocating homeowners, estate sales, or new construction incentive periods. The best deals on premium homes come when sellers prioritize a quick, certain transaction over maximum price. Focus on homes that have been on the market longer than average without fundamental flaws, and build relationships with agents who know about off-market opportunities in premium neighborhoods before they're widely advertised."
    },
    {
      question: "When is the best time to buy a house for the best price?",
      answer: "Strategic timing can save you 8-12% on premium properties. The best times to purchase are typically during seasonal slowdowns (late fall and winter months when competition decreases), end-of-quarter periods when builders offer incentives to meet sales targets, and during market transitions when motivated sellers emerge. For luxury homes specifically, December through February often yields significantly better prices on the exact same properties that would cost more during peak season."
    },
    {
      question: "How to save money when buying a home without sacrificing quality?",
      answer: "The key to saving money while maintaining quality is strategic targeting and smart negotiation. Focus on properties with cosmetic issues that can be easily addressed but don't affect structural quality. Look for homes with longer market times in otherwise desirable neighborhoods. Consider properties from motivated sellers who prioritize closing quickly. Compare builder incentives across similar developments, as identical floor plans often sell for 5-10% less at different times of year or with different incentives packages."
    },
    {
      question: "How to find underpriced homes in good neighborhoods?",
      answer: "Underpriced homes in good neighborhoods often come from specific situations – estate sales, relocations, divorce situations, or builder closeouts. Work with agents who specialize in these opportunities and have connections to find listings before they hit the market. Look for homes that have been price-reduced multiple times despite being in premium locations. Also consider homes with dated cosmetic features in otherwise excellent neighborhoods – these often sell for substantially less while offering the same location advantages."
    },
    {
      question: "How to get a better price on a home in a competitive market?",
      answer: "Even in competitive markets, strategic buyers can secure better prices. Focus on properties that have been overlooked due to poor marketing, inconvenient showing times, or cosmetic issues. Present yourself as a strong, qualified buyer who can close quickly and reliably. Consider offering flexible closing terms that benefit the seller while maintaining your price advantage. Timing is crucial – properties that don't sell in the first weekend in hot markets often see price reductions of 5-10% within 3-4 weeks."
    },
    {
      question: "How to know if a house is worth the price before buying?",
      answer: "To determine if a home is worth the price, conduct thorough comparative market analysis with properties that have sold in the past 3-6 months with similar features, quality, and location. Always get professional inspections to verify structural and system integrity. Evaluate the pricing of identical or nearly identical properties in the same community that have recently sold. Calculate price per square foot compared to neighborhood averages, accounting for upgrades and special features. Remember that premium properties at better prices offer both immediate savings and long-term investment potential."
    },
    {
      question: "What are the best neighborhoods for home value appreciation?",
      answer: "The best neighborhoods for home value appreciation typically share key characteristics: strong school districts, proximity to employment centers, walkable amenities, low crime rates, and limited land for new construction. Look for areas with consistent price growth over 5-10 years rather than just recent spikes. Neighborhoods undergoing positive transitions often offer the best opportunity to purchase premium homes at better prices while positioning for strong appreciation. When evaluating potential neighborhoods, also consider infrastructure improvements, commercial development plans, and migration trends."
    },
    {
      question: "How to negotiate house price without losing the deal?",
      answer: "Successful price negotiation requires preparation and psychology. Start by understanding the seller's motivation and timeline. Support your offer with comparable sales data showing similar properties that sold for less. Consider strategic concessions that matter less to you but may be valuable to the seller. Present yourself as a qualified, serious buyer who can close reliably. Focus negotiations on objective criteria like pricing per square foot compared to recent sales. Remember that a respectful, professional approach often achieves better results than aggressive tactics."
    },
    {
      question: "What are the best locations to buy property for investment in 2025?",
      answer: "The best locations for property investment in 2025 combine strong economic fundamentals with emerging price advantages. Focus on areas with diverse employment bases, population growth, and lifestyle amenities that attract long-term residents. Cities with strong tech and healthcare sectors continue to show resilience. Markets experiencing temporary supply increases often create opportunities to purchase premium properties at better prices. Look for locations with planned infrastructure improvements, expanding job markets, and housing demand that exceeds new construction starts."
    },
    {
      question: "How to get a good deal in a seller's market?",
      answer: "Finding good deals in seller's markets requires targeting specific situations and being prepared to act quickly. Focus on homes that have been listed longer than market averages – these often represent the best opportunity for below-market pricing. Look for properties with poor marketing, inconvenient showing schedules, or fixable cosmetic issues that deter other buyers. Be prepared with financing pre-approval and flexible closing terms. Builder closeouts and inventory homes near the end of sales cycles often offer significant price advantages even in strong seller's markets."
    },
    {
      question: "Is buying property a good investment in the current market?",
      answer: "Property remains an excellent investment when purchased strategically at the right price point. The key is focusing on homes with strong fundamentals – quality construction in desirable locations – while securing price advantages of 8-15% through timing and negotiation. Real estate continues to offer both appreciation potential and inflation protection. Premium properties purchased at better prices than others are paying for similar homes offer particularly compelling investment profiles, combining immediate equity with strong potential for long-term appreciation regardless of shorter-term market fluctuations."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  
  return (
    <>
      <SEOHead
        title="Frequently Asked Questions | Premium Homes at Better Prices | Discount.Realty"
        description="Get answers about how to find premium homes at better prices than others are paying for the same quality properties. Learn about strategic timing, motivated sellers, and negotiation tactics."
        canonicalUrl="https://discount.realty/faq"
        keywords={[
          "premium homes FAQ",
          "discount real estate questions",
          "better price property FAQ",
          "same quality lower price questions",
          "real estate price advantage",
          "home buying price strategies"
        ]}
        structuredData={faqStructuredData}
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 text-center mb-12">
              Get answers about finding premium homes at better prices than others are paying for the same quality properties.
            </p>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="mb-4 border border-gray-200 rounded-lg bg-white overflow-hidden"
                >
                  <button 
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                    {openIndex === index ? 
                      <ChevronUp className="w-5 h-5 text-gray-500" aria-hidden="true" /> : 
                      <ChevronDown className="w-5 h-5 text-gray-500" aria-hidden="true" />
                    }
                  </button>
                  
                  {openIndex === index && (
                    <div 
                      id={`faq-answer-${index}`}
                      className="px-6 py-4 bg-gray-50 border-t border-gray-200"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-gradient-to-r from-rose-50 to-sky-50 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Still have questions?</h2>
              <p className="text-gray-600 text-center mb-6">
                If you didn't find the answer you were looking for, please contact us and we'll be happy to help.
              </p>
              <div className="flex justify-center">
                <a 
                  href="/#contact" 
                  className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-md font-bold transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;