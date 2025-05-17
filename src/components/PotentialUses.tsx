import React from 'react';

const PotentialUses = () => {
  const useCases = [
    {
      title: "Discount Real Estate Brokerage",
      description: "Launch a dedicated discount realty service offering reduced commission rates or flat-fee services to budget-conscious home sellers.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    },
    {
      title: "Discount Property Listings Platform",
      description: "Create the ultimate destination for discount property listings, foreclosures, and distressed sales across the country.",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
    },
    {
      title: "Discount Realty Deals Marketplace",
      description: "Build a platform connecting sellers of discounted properties with bargain-hunting buyers looking for below-market opportunities.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    },
    {
      title: "Discount Real Estate Investment Group",
      description: "Create a membership platform that aggregates and curates the best discount realty opportunities for property investors.",
      image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    }
  ];

  return (
    <section id="uses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Potential Uses for <span className="text-rose-600">Discount.Realty</span></h2>
          <p className="text-xl text-gray-600">
            This premium domain offers versatile applications in the discount real estate market, ideal for businesses focused on providing value, deals, or discount services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={useCase.image} alt={`Discount realty business model: ${useCase.title}`} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-6">
            The versatility of this domain makes it ideal for any business focusing on discount realty opportunities - from traditional brokerages to innovative real estate platforms.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
          >
            Secure This Discount Realty Domain
          </a>
        </div>
      </div>
    </section>
  );
};

export default PotentialUses;