import React from 'react';
import { DollarSign, TrendingUp, Users, Star } from 'lucide-react';

const DomainValueProposition = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-10 h-10 text-rose-600" />,
      title: "Perfect for Discount Realty Business",
      description: "Discount.Realty instantly communicates your discount real estate business model to potential clients searching for property deals."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-rose-600" />,
      title: "Premium Market Position",
      description: "Own a domain that positions your business as the go-to resource for discount real estate and property opportunities."
    },
    {
      icon: <Users className="w-10 h-10 text-rose-600" />,
      title: "Target Audience Alignment",
      description: "Perfectly aligned with the growing segment of budget-conscious home buyers searching for 'discount realty' online."
    },
    {
      icon: <Star className="w-10 h-10 text-rose-600" />,
      title: "Exceptional SEO Potential",
      description: "Rank for valuable keywords like 'discount realty', 'discount real estate', and 'discount properties' with this exact-match domain."
    }
  ];

  return (
    <section id="value" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why <span className="text-rose-600">Discount.Realty</span> Is Valuable</h2>
          <p className="text-xl text-gray-600">
            In the competitive discount real estate market, owning the perfect domain name gives you an immediate advantage. Here's why this domain stands out:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-rose-50 to-sky-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dominate the Discount Realty Market</h3>
              <p className="text-gray-600 mb-4">
                The .Realty TLD combined with "Discount" creates the perfect domain for any business focusing on discount real estate opportunities, foreclosures, or affordable housing.
              </p>
              <p className="text-gray-600">
                With thousands of monthly searches for terms like "discount realty," "discount real estate," and "discount properties," this domain puts you directly in front of motivated buyers and sellers.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="text-5xl font-bold text-rose-600 mb-2">10K+</div>
                <p className="text-gray-600">Monthly searches for "discount realty" related terms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainValueProposition;