import React from 'react';
import { Tag, Percent, BadgeDollarSign, Search } from 'lucide-react';

const DiscountRealtySection = () => {
  const discountProperties = [
    {
      title: "Premium Neighborhood Family Home - 15% Lower Price",
      location: "Phoenix, Arizona",
      discount: "15% Less",
      price: "$425,000",
      originalPrice: "$499,000",
      description: "Identical to others in the neighborhood but priced lower. 4 bedrooms, resort-style pool, top school district.",
      image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      alt: "Spacious family home in premium Phoenix neighborhood at 15% less than neighbors paid"
    },
    {
      title: "Luxury Waterfront Condo - Same View, Better Price",
      location: "Miami, Florida",
      discount: "12% Less",
      price: "$675,000",
      originalPrice: "$768,000",
      description: "Identical unit to those that sold for $90K more. High-end 2BR with panoramic views, motivated seller due to relocation.",
      image: "https://images.unsplash.com/photo-1594540637720-9b14714212bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
      alt: "Luxury waterfront condo in Miami at a better price than identical units in the same building"
    },
    {
      title: "Historic District Townhome - Pay Less Than Neighbors",
      location: "Denver, Colorado",
      discount: "18% Less",
      price: "$510,000",
      originalPrice: "$620,000",
      description: "Estate sale priced below recent sales of identical units. Same charm, same location, same quality – just a better price.",
      image: "https://images.unsplash.com/photo-1605146768851-eda79da39897?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      alt: "Character-filled townhome in Denver's premium historic district for less than comparable properties"
    },
    {
      title: "New Construction in Golf Community - Builder Incentives",
      location: "Austin, Texas",
      discount: "10% Less",
      price: "$585,000",
      originalPrice: "$650,000",
      description: "Same model others paid full price for, but with $65K in savings. Premium finishes in prestigious golf community.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      alt: "New construction home in Austin golf community for less than identical homes in the same development"
    }
  ];

  const discountTypes = [
    {
      icon: <Tag className="w-10 h-10 text-rose-600" />,
      title: "Same Home, Lower Price",
      description: "Why pay more for the same property? Just like finding a Ferrari at a better dealership price, we help you identify opportunities to purchase quality homes in excellent locations at prices below what others are paying for the same product."
    },
    {
      icon: <Percent className="w-10 h-10 text-rose-600" />,
      title: "Motivated Seller Advantage",
      description: "When sellers prioritize a quick, certain sale over maximum price, smart buyers benefit. These situations create opportunities to purchase the exact same home you'd want anyway, but at a significantly better price point."
    },
    {
      icon: <BadgeDollarSign className="w-10 h-10 text-rose-600" />,
      title: "Strategic Timing Opportunities",
      description: "Just like savvy shoppers who know when to find the best sales, we identify moments when premium properties can be acquired at advantageous prices due to market timing, builder inventory adjustments, or individual seller circumstances."
    },
    {
      icon: <Search className="w-10 h-10 text-rose-600" />,
      title: "Better Price Finder",
      description: "Our service specializes in finding the exact same quality properties others are paying full price for, but at better values. Why pay the list price when you can get the identical home for less? It's simple price advantage without compromise."
    }
  ];

  return (
    <section id="discounts" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured <span className="text-rose-600">Price Advantages</span> on Premium Homes</h2>
          <p className="text-xl text-gray-600">
            Browse our collection of quality homes available at prices below what others are paying for identical properties in the same premium neighborhoods.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {discountProperties.map((property, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.alt} 
                  className="w-full h-full object-cover" 
                  loading={index > 1 ? "lazy" : "eager"}
                />
                <div className="absolute top-0 right-0 bg-rose-600 text-white px-4 py-2 font-bold">
                  {property.discount}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{property.title}</h3>
                  <div className="text-right">
                    <p className="text-rose-600 font-bold">{property.price}</p>
                    <p className="text-gray-500 text-sm line-through">{property.originalPrice}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-3">{property.location}</p>
                <p className="text-gray-700">{property.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center max-w-3xl mx-auto mb-12" id="types">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">How We Find <span className="text-rose-600">Better Prices</span> on Great Homes</h3>
          <p className="text-xl text-gray-600 mb-8">
            Our approach focuses on one simple concept – helping you pay less for the same quality home others are paying full price for.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {discountTypes.map((type, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="mb-6">{type.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
              <p className="text-gray-600">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscountRealtySection;