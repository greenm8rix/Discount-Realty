import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80')] bg-cover bg-center opacity-20" aria-hidden="true"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-rose-600 text-white rounded-full px-4 py-1 text-sm font-medium mb-6">
            #1 Resource for Getting the Best Price on Quality Homes
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Why Pay More for the <span className="text-rose-400">Same Home</span> Everyone Else Does?
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Discover premium homes in desirable neighborhoods at lower prices than others are paying – same quality, better deals
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <a 
              href="#discounts" 
              className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-all transform hover:-translate-y-1"
            >
              See Our Price Advantages
            </a>
            <a 
              href="#types" 
              className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-4 rounded-md font-bold text-lg transition-all transform hover:-translate-y-1"
            >
              How We Find Better Prices
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true"></div>
    </div>
  );
};

export default Hero;