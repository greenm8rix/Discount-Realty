import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
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
      question: "How do you find these better-priced properties?",
      answer: "We leverage our market knowledge and timing to identify quality homes where motivated sellers are willing to accept competitive offers. Think of it like knowing which car dealership is offering the best price on the same model. We focus exclusively on desirable neighborhoods and well-maintained properties – helping you pay less for the home you actually want."
    },
    {
      question: "Are these discounted homes in good condition?",
      answer: "Absolutely. Unlike 'fixer-uppers,' we focus on well-maintained homes in excellent locations. These are the same quality properties others are paying full price for in the same neighborhoods. The discount is purely on price, not quality – just like getting the same designer handbag for less during a sale."
    },
    {
      question: "How much can I really save on these properties?",
      answer: "Typically, our clients secure homes at 8-15% below comparable properties in the same neighborhoods. On a $500,000 home, that's $40,000-$75,000 in savings – simply by being strategic about when and how you purchase. Who wouldn't want to pay less for the exact same product?"
    },
    {
      question: "What's your approach to helping clients find these deals?",
      answer: "We identify quality properties in premium locations where timing, seller motivation, or market conditions create opportunities to purchase at favorable prices. We never compromise on neighborhood quality or property condition – we simply help you pay less for the same home others are paying full price for."
    },
    {
      question: "How do these properties compare to full-price listings in the same neighborhoods?",
      answer: "They're essentially identical in terms of quality, features, and location – the primary difference is price. It's like finding the same laptop model during a flash sale versus paying full retail price. Our clients enjoy the exact same neighborhoods and home quality as those who paid more, just with significant savings."
    },
    {
      question: "What's the value of the Discount.Realty domain?",
      answer: "This domain perfectly communicates the essential value proposition – helping clients pay less for quality real estate. It combines the highly-searched term 'discount' with the industry-specific extension '.Realty'. For any business focused on providing better prices on quality properties, this domain instantly communicates that core benefit to potential clients."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Get answers about finding premium homes at better prices than others are paying.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
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
      </div>
    </section>
  );
};

export default FAQSection;