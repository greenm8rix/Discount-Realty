import React from 'react';
import { TrendingUp, TrendingDown, AlertCircle, DollarSign, BarChart4 } from 'lucide-react';

const RealEstateMarketSection = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Current <span className="text-rose-600">Price Advantage</span> Market Trends</h2>
          <p className="text-xl text-gray-600">
            Stay informed about market conditions creating opportunities to pay less for the same quality properties others are buying at full price.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-10 h-10 text-green-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Motivated Seller Price Advantages</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Recent economic shifts have increased the number of sellers prioritizing quick, certain sales over maximum price. This is creating opportunities for buyers to purchase the same quality homes others pay full price for, but at significantly better rates.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Job Relocation Sales</span>
                <span className="text-green-600 font-medium">+18% YoY</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '18%' }}></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                More quality homes available at better prices through job transfer and relocation situations
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center mb-6">
              <TrendingDown className="w-10 h-10 text-rose-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Builder Pricing Incentives</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Smart buyers are purchasing the exact same new construction homes as their neighbors, but paying 8-12% less by timing their purchases during builder incentive periods. Same property, same quality, better price.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Builder Price Reductions</span>
                <span className="text-rose-600 font-medium">8-12% Savings</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-rose-500 rounded-full" style={{ width: '10%' }}></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Average savings on identical homes through strategic purchase timing
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Regional Price Advantage Hotspots</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-rose-600 rounded-full mr-2"></div>
                <h4 className="font-semibold text-gray-900">Midwest</h4>
              </div>
              <p className="text-sm text-gray-600 mb-2">Price Advantage:</p>
              <p className="text-2xl font-bold text-rose-600">Excellent</p>
              <p className="text-xs text-gray-500">Same homes for less in premium suburban communities</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
                <h4 className="font-semibold text-gray-900">Southeast</h4>
              </div>
              <p className="text-sm text-gray-600 mb-2">Price Advantage:</p>
              <p className="text-2xl font-bold text-blue-600">Very Good</p>
              <p className="text-xs text-gray-500">Better pricing on identical waterfront properties</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-amber-600 rounded-full mr-2"></div>
                <h4 className="font-semibold text-gray-900">Southwest</h4>
              </div>
              <p className="text-sm text-gray-600 mb-2">Price Advantage:</p>
              <p className="text-2xl font-bold text-amber-600">Strong</p>
              <p className="text-xs text-gray-500">Pay less for identical new construction homes</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                <h4 className="font-semibold text-gray-900">Northeast</h4>
              </div>
              <p className="text-sm text-gray-600 mb-2">Price Advantage:</p>
              <p className="text-2xl font-bold text-green-600">Good</p>
              <p className="text-xs text-gray-500">Better prices through estate sales in premium areas</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-rose-50 to-sky-50 p-8 rounded-lg">
          <div className="flex items-center justify-center mb-8">
            <AlertCircle className="w-8 h-8 text-rose-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Price Advantage Forecast</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <BarChart4 className="w-6 h-6 text-gray-700 mr-2" />
                <h4 className="font-semibold text-gray-900">Next 6 Months</h4>
              </div>
              <p className="text-gray-600">
                Opportunities to purchase quality homes at better prices expected to increase. The same properties others are buying at full price will be available to strategic buyers at 10-15% less.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <DollarSign className="w-6 h-6 text-gray-700 mr-2" />
                <h4 className="font-semibold text-gray-900">Best Price Opportunities</h4>
              </div>
              <p className="text-gray-600">
                Look for situations where identical properties are available at different price points – like finding your dream car at two dealerships but paying substantially less at one of them.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-gray-700 mr-2" />
                <h4 className="font-semibold text-gray-900">Strategic Buying</h4>
              </div>
              <p className="text-gray-600">
                Focus on timing purchases to coincide with seller incentives. The same home could be available at significantly different prices depending on when and how you make your offer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealEstateMarketSection;