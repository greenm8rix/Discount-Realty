import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const SalesSection = () => {
  const marketComparisons = [
    { domain: "Discount.com", price: "$5,000,000+", sold: true },
    { domain: "RealEstate.com", price: "$8,400,000", sold: true },
    { domain: "Houses.com", price: "$2,000,000+", sold: true },
    { domain: "Properties.com", price: "$1,700,000+", sold: true },
    { domain: "Realty.com", price: "$1,950,000", sold: true }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Opportunity to Own <span className="text-rose-600">Discount.Realty</span></h2>
          <p className="text-xl text-gray-600">
            Premium domains with clear industry relevance sell quickly and can become the foundation of a successful business. This is an exclusive opportunity to secure a domain with built-in marketing value.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="md:w-1/2">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Domain Market Context</h3>
              <p className="text-gray-600 mb-6">
                Premium domains in the real estate niche continue to command significant value due to their immediate brand recognition and marketing advantages.
              </p>
              
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Recent Premium Domain Sales:</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 text-left text-gray-700">Domain</th>
                      <th className="py-2 px-4 text-left text-gray-700">Sale Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marketComparisons.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-2 px-4 text-gray-800">{item.domain}</td>
                        <td className="py-2 px-4 text-gray-800">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Prices shown are based on publicly reported sales and industry estimates
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-gradient-to-r from-rose-50 to-sky-50 p-8 rounded-lg shadow-md h-full">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Investment Opportunity</h3>
                <p className="text-gray-600">Contact us for pricing information</p>
              </div>
              
              <h4 className="text-xl font-semibold text-gray-800 mb-4">What's Included:</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Full ownership rights to Discount.Realty domain</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Secure domain transfer through an escrow service</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Basic logo design concepts (upon request)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">1-year domain registration included</span>
                </li>
              </ul>
              
              <div className="text-center">
                <a 
                  href="#contact" 
                  className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors w-full"
                >
                  Inquire About This Domain
                </a>
                <p className="text-sm text-gray-500 mt-4">
                  Serious inquiries only. All inquiries are confidential.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Act Now?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Limited Availability</h4>
              <p className="text-gray-600">
                Premium domain names, especially those with clear industry relevance, are increasingly rare and difficult to acquire.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Immediate Brand Value</h4>
              <p className="text-gray-600">
                Launch your business with a domain that instantly communicates your value proposition to potential clients.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Investment Potential</h4>
              <p className="text-gray-600">
                Premium domains have historically appreciated in value, making them not just a business asset but an investment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesSection;