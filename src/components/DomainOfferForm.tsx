import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Mail, Loader } from 'lucide-react';

interface DomainOfferFormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  offer: string;
  phone: string;
  message: string;
}

const DomainOfferForm: React.FC<DomainOfferFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    offer: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.offer.trim()) newErrors.offer = 'Offer amount is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      setSubmitError(null);
      
      try {
        // Map form data to match the domain_offers table structure
        const domainOfferData = {
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          offer_amount: formData.offer,
          phone: formData.phone || null,
          message: formData.message || null
        };

        // Insert data into Supabase
        const { error } = await supabase
          .from('domain_offers')
          .insert(domainOfferData);

        if (error) {
          console.error('Error submitting to Supabase:', error);
          throw new Error(error.message);
        }

        console.log('Successfully submitted offer to Supabase');
        onSubmit(formData);
      } catch (error) {
        console.error('Error during form submission:', error);
        setSubmitError(
          'There was a problem submitting your offer. Please use the email option instead.'
        );
        setIsSubmitting(false);
      }
    }
  };

  const handleEmailInstead = (e: React.MouseEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Offer for Discount.Realty Domain');
    const body = encodeURIComponent(`Hello,

I am interested in purchasing the Discount.Realty domain. Here is my offer:

Amount: ${formData.offer}
Name: ${formData.name}
Email: ${formData.email}
${formData.company ? `Company: ${formData.company}` : ''}
${formData.phone ? `Phone: ${formData.phone}` : ''}
${formData.message ? `\nAdditional information:\n${formData.message}` : ''}

Thank you.`);
    
    window.location.href = `mailto:exaliodevelopment@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div id="buy-domain" className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Make an Offer for Discount.Realty</h3>
      
      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
          <p>{submitError}</p>
          <button 
            onClick={handleEmailInstead}
            className="text-rose-600 hover:text-rose-800 font-medium mt-2 flex items-center"
          >
            <Mail className="w-4 h-4 mr-1" />
            Send offer via email instead
          </button>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
          
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="offer" className="block text-sm font-medium text-gray-700 mb-1">
            Your Offer Amount*
          </label>
          <input
            type="text"
            id="offer"
            name="offer"
            value={formData.offer}
            onChange={handleChange}
            placeholder="e.g. $5,000"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 ${
              errors.offer ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.offer && <p className="mt-1 text-sm text-red-600">{errors.offer}</p>}
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
            placeholder="Tell us about your intended use for the domain..."
          ></textarea>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`inline-flex items-center justify-center bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-md font-bold transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? (
              <>
                <Loader className="w-5 h-5 mr-2 animate-spin" />
                Submitting...
              </>
            ) : 'Submit Offer'}
          </button>
          
          <button
            type="button"
            onClick={handleEmailInstead}
            className="inline-flex items-center justify-center bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-md font-medium transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            Send Via Email Instead
          </button>
          
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            *We'll respond to all serious offers within
            24 hours
          </p>
        </div>
      </form>
    </div>
  );
};

export default DomainOfferForm;