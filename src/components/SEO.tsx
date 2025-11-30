import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Royal Resinz By Narpavi Gifts | Handcrafted Pencil Art & Resin Gifts",
  description = "Royal Resinz By Narpavi Gifts: Transform precious memories into stunning pencil portraits and resin masterpieces. Custom art and personalized gifts handmade with love in India.",
  image = "/gallery-preview.jpg",
  url = "https://royalresinz.com",
  type = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Royal Resinz By Narpavi Gifts",
    "url": url,
    "logo": `${url}/np-logo.png`,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.instagram.com/narpavi_gifts",
      "https://wa.me/1234567890"
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;