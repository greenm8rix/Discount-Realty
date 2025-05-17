import React from 'react';
import { DollarSign, TrendingUp, Users, Star } from 'lucide-react';

const DomainValueSection = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Own <span className="text-rose-600">Discount.Realty</span></h2>
            <p className="text-gray-700 mb-6">
              This premium domain is currently for sale to the right buyer. Discount.Realty is the perfect domain for any business focused on:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <DollarSign className="w-5 h-5 text-rose-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Offering the same quality homes at better prices than competitors</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="w-5 h-5 text-rose-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Helping clients pay less for premium properties in excellent locations</span>
              </li>
              <li className="flex items-start">
                <Users className="w-5 h-5 text-rose-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Creating value through price advantage without quality compromise</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-rose-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Finding opportunities where clients can pay less for the same quality</span>
              </li>
            </ul>
            <p className="text-gray-700 italic mb-6">
              The domain includes the high-value keywords "discount" and "realty" - immediately communicating price advantage to potential customers.
            </p>
            <a 
              href="#buy-domain" 
              className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-md font-bold transition-colors"
            >
              Make an Offer
            </a>
          </div>
          <div className="md:w-1/2 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Domain Features</h3>
            <ul className="space-y-4">
              <li className="border-b border-gray-200 pb-4">
                <p className="font-semibold text-gray-900">Industry-Specific Extension</p>
                <p className="text-gray-700">The .Realty TLD instantly communicates real estate industry focus</p>
              </li>
              <li className="border-b border-gray-200 pb-4">
                <p className="font-semibold text-gray-900">Keyword-Rich</p>
                <p className="text-gray-700">Contains the high-traffic keyword "discount" that consumers actively search for when looking to pay less for the same quality</p>
              </li>
              <li className="border-b border-gray-200 pb-4">
                <p className="font-semibold text-gray-900">Memorable & Descriptive</p>
                <p className="text-gray-700">Short, easy to remember, and clearly communicates your value proposition - better prices on premium properties</p>
              </li>
              <li>
                <p className="font-semibold text-gray-900">Search Engine Ready</p>
                <p className="text-gray-700">Potential to rank well for searches from consumers looking to pay less for high-quality properties</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainValueSection;