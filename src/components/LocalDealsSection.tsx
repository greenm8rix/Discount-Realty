import React, { useState } from 'react';
import { MapPin, Search } from 'lucide-react';

const LocalDealsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const popularSearches = [
    "New York luxury homes better prices", 
    "Florida waterfront property deals", 
    "Chicago luxury condos for less", 
    "Texas gated communities price advantage",
    "California premium neighborhoods better value",
    "Arizona golf communities lower prices"
  ];
  
  const cityDiscounts = [
    { city: "Phoenix, AZ", valueRange: "10-15%", dealCount: 64, image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" },
    { city: "Atlanta, GA", valueRange: "8-12%", dealCount: 49, image: "https://images.unsplash.com/photo-1575917649705-08edb78a0fe2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" },
    { city: "Austin, TX", valueRange: "9-14%", dealCount: 53, image: "https://images.unsplash.com/photo-1564686552156-2caa144b7266?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" },
    { city: "Tampa, FL", valueRange: "11-16%", dealCount: 42, image: "https://images.unsplash.com/photo-1574715526661-f11e7aa5a034?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" }
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    // In a real implementation, this would search for properties in the specified location
  };
  
  return (
    <section className="py-20 bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Find <span className="text-rose-600">Better Prices</span> in Premium Locations</h2>
          <p className="text-xl text-gray-600 mb-8">
            Like choosing the dealership with the best price on a Ferrari, we help you find the same quality homes others are buying, but at lower prices.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-grow mb-4 sm:mb-0 sm:mr-4">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Enter city, neighborhood, or zip code" 
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search for locations with price advantages"
              />
            </div>
            <button 
              type="submit" 
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-4 rounded-lg font-bold transition-colors flex items-center justify-center"
            >
              <Search className="w-5 h-5 mr-2" />
              Find Better Prices
            </button>
          </form>
          
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="text-gray-500">Popular searches:</span>
            {popularSearches.map((term, index) => (
              <button 
                key={index}
                className="text-rose-600 hover:text-rose-800 hover:underline"
                onClick={() => setSearchTerm(term)}
              >
                {term}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-4 mt-16">
          {cityDiscounts.map((city, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-36 overflow-hidden relative">
                <img 
                  src={city.image} 
                  alt={`Premium properties in ${city.city} at better prices than competitors`}
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white font-bold text-xl p-4">{city.city}</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">Typical Price Advantage:</span>
                  <span className="text-rose-600 font-bold">{city.valueRange}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Available Properties:</span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-medium">{city.dealCount}</span>
                </div>
                <button 
                  className="w-full mt-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded font-medium transition-colors text-sm"
                  onClick={() => setSearchTerm(city.city)}
                >
                  View Better-Priced Properties
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalDealsSection;