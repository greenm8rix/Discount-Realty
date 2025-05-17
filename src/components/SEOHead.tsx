import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  articleProps?: {
    publishedTime: string;
    modifiedTime?: string;
    author: string;
    section?: string;
    tags?: string[];
  };
  keywords?: string[];
  structuredData?: Record<string, any>;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  image = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80',
  imageAlt = 'Premium homes at better prices than others are paying',
  type = 'website',
  articleProps,
  keywords = ['premium homes better price', 'same quality lower price', 'price advantage real estate'],
  structuredData,
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Discount.Realty" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content={imageAlt} />
      
      {/* Article specific meta tags */}
      {type === 'article' && articleProps && (
        <>
          <meta property="article:published_time" content={articleProps.publishedTime} />
          {articleProps.modifiedTime && (
            <meta property="article:modified_time" content={articleProps.modifiedTime} />
          )}
          <meta property="article:author" content={articleProps.author} />
          {articleProps.section && (
            <meta property="article:section" content={articleProps.section} />
          )}
          {articleProps.tags && articleProps.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;