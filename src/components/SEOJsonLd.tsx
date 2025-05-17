import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LocalBusinessProps {
  name: string;
  description: string;
  url: string;
  logo: string;
  telephone: string;
  email: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  sameAs?: string[];
  openingHours?: string;
  priceRange?: string;
}

interface FAQItemProps {
  question: string;
  answer: string;
}

interface ArticleProps {
  headline: string;
  description: string;
  image: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  };
  publisher: {
    name: string;
    logo: {
      url: string;
    };
  };
  keywords?: string[];
  articleSection?: string;
}

interface ProductProps {
  name: string;
  description: string;
  image: string;
  url: string;
  brand?: {
    name: string;
  };
  offers?: {
    price: number;
    priceCurrency: string;
    availability: string;
    url: string;
    validFrom?: string;
    priceValidUntil?: string;
  };
}

interface EventProps {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: {
    name: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
  };
  image: string;
  url: string;
  organizer?: {
    name: string;
    url?: string;
  };
  offers?: {
    price: number;
    priceCurrency: string;
    availability: string;
    url: string;
    validFrom?: string;
  };
}

interface WebsiteProps {
  name: string;
  url: string;
  description: string;
  potentialAction?: {
    target: string;
  };
}

interface SEOJsonLdProps {
  type: 'LocalBusiness' | 'FAQPage' | 'Article' | 'Product' | 'Event' | 'Website';
  data: LocalBusinessProps | FAQItemProps[] | ArticleProps | ProductProps | EventProps | WebsiteProps;
}

const SEOJsonLd: React.FC<SEOJsonLdProps> = ({ type, data }) => {
  let schemaData;

  switch (type) {
    case 'LocalBusiness':
      const businessData = data as LocalBusinessProps;
      schemaData = {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": businessData.name,
        "description": businessData.description,
        "url": businessData.url,
        "logo": businessData.logo,
        "telephone": businessData.telephone,
        "email": businessData.email,
        "address": businessData.address ? {
          "@type": "PostalAddress",
          "streetAddress": businessData.address.streetAddress,
          "addressLocality": businessData.address.addressLocality,
          "addressRegion": businessData.address.addressRegion,
          "postalCode": businessData.address.postalCode,
          "addressCountry": businessData.address.addressCountry
        } : undefined,
        "geo": businessData.geo ? {
          "@type": "GeoCoordinates",
          "latitude": businessData.geo.latitude,
          "longitude": businessData.geo.longitude
        } : undefined,
        "sameAs": businessData.sameAs,
        "openingHours": businessData.openingHours,
        "priceRange": businessData.priceRange
      };
      break;
    
    case 'FAQPage':
      const faqData = data as FAQItemProps[];
      schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      };
      break;
    
    case 'Article':
      const articleData = data as ArticleProps;
      schemaData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": articleData.headline,
        "description": articleData.description,
        "image": articleData.image,
        "url": articleData.url,
        "datePublished": articleData.datePublished,
        "dateModified": articleData.dateModified || articleData.datePublished,
        "author": {
          "@type": "Person",
          "name": articleData.author.name,
          "url": articleData.author.url
        },
        "publisher": {
          "@type": "Organization",
          "name": articleData.publisher.name,
          "logo": {
            "@type": "ImageObject",
            "url": articleData.publisher.logo.url
          }
        },
        "keywords": articleData.keywords ? articleData.keywords.join(", ") : undefined,
        "articleSection": articleData.articleSection
      };
      break;
    
    case 'Product':
      const productData = data as ProductProps;
      schemaData = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": productData.name,
        "description": productData.description,
        "image": productData.image,
        "url": productData.url,
        "brand": productData.brand ? {
          "@type": "Brand",
          "name": productData.brand.name
        } : undefined,
        "offers": productData.offers ? {
          "@type": "Offer",
          "price": productData.offers.price,
          "priceCurrency": productData.offers.priceCurrency,
          "availability": productData.offers.availability,
          "url": productData.offers.url,
          "validFrom": productData.offers.validFrom,
          "priceValidUntil": productData.offers.priceValidUntil
        } : undefined
      };
      break;
    
    case 'Event':
      const eventData = data as EventProps;
      schemaData = {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": eventData.name,
        "description": eventData.description,
        "startDate": eventData.startDate,
        "endDate": eventData.endDate,
        "location": {
          "@type": "Place",
          "name": eventData.location.name,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": eventData.location.address.streetAddress,
            "addressLocality": eventData.location.address.addressLocality,
            "addressRegion": eventData.location.address.addressRegion,
            "postalCode": eventData.location.address.postalCode,
            "addressCountry": eventData.location.address.addressCountry
          }
        },
        "image": eventData.image,
        "url": eventData.url,
        "organizer": eventData.organizer ? {
          "@type": "Organization",
          "name": eventData.organizer.name,
          "url": eventData.organizer.url
        } : undefined,
        "offers": eventData.offers ? {
          "@type": "Offer",
          "price": eventData.offers.price,
          "priceCurrency": eventData.offers.priceCurrency,
          "availability": eventData.offers.availability,
          "url": eventData.offers.url,
          "validFrom": eventData.offers.validFrom
        } : undefined
      };
      break;
    
    case 'Website':
      const websiteData = data as WebsiteProps;
      schemaData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": websiteData.name,
        "url": websiteData.url,
        "description": websiteData.description,
        "potentialAction": websiteData.potentialAction ? {
          "@type": "SearchAction",
          "target": websiteData.potentialAction.target,
          "query-input": "required name=search_term_string"
        } : undefined
      };
      break;
    
    default:
      schemaData = null;
  }

  if (!schemaData) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEOJsonLd;