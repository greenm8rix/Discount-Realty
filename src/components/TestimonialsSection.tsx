import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "We found the exact same model home as our friends, but paid $75,000 less because of a builder's end-of-quarter incentive. Same quality, same neighborhood, better price.",
      author: "Michael Anderson",
      title: "Homeowner in Phoenix"
    },
    {
      quote: "I was looking at full-price waterfront condos until I discovered an identical unit from a motivated seller who needed to relocate quickly. Saved 12% on the exact same property others paid full price for.",
      author: "Sarah Martinez",
      title: "Real Estate Investor"
    },
    {
      quote: "We were looking in a neighborhood we thought was out of our price range until we found a home from an estate sale. It's the same quality as other homes on the street, but we paid substantially less.",
      author: "David Thompson",
      title: "First-time Homebuyer"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Success Stories: Same Homes, Better Prices</h2>
          <p className="text-xl text-gray-300">
            Hear from people who found identical properties to ones selling at full price, but paid significantly less.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg">
              <div className="mb-6">
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <blockquote className="text-gray-300 mb-6 italic">"{testimonial.quote}"</blockquote>
              <div>
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-gray-400">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;