import { useEffect } from 'react';

interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function Head({ 
  title = "Son Nguyen - Growth Marketing Manager | Sustainable Brand Growth",
  description = "Welcome to my journey where growth marketing meets sustainable impact. Expert in UX Writing & Communications Strategy, helping brands grow authentically while making a positive difference. 🌱📈",
  image = "https://jensonng.github.io/images/og-thumbnail.png",
  url = window.location.href
}: HeadProps) {
  
  useEffect(() => {
    // Set document title
    document.title = title;
    
    // Helper function to set or update meta tag
    const setMetaTag = (property: string, content: string, isProperty = true) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${property}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, property);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    setMetaTag('description', description, false);
    setMetaTag('keywords', 'Growth Marketing Manager, UX Writing, Communications Strategy, Sustainable Marketing, Brand Growth, Environmental Science, Stockholm, Son Nguyen', false);
    setMetaTag('author', 'Son Nguyen', false);

    // Open Graph meta tags (Facebook, LinkedIn, etc.)
    setMetaTag('og:title', title);
    setMetaTag('og:description', description);
    setMetaTag('og:image', image);
    setMetaTag('og:url', url);
    setMetaTag('og:type', 'website');
    setMetaTag('og:site_name', 'Son Nguyen Portfolio');
    setMetaTag('og:locale', 'en_US');

    // Twitter Card meta tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);
    setMetaTag('twitter:creator', '@sonngoc');

    // Additional meta tags for better SEO
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0', false);
    setMetaTag('robots', 'index, follow', false);
    setMetaTag('theme-color', '#111111', false);

    // Structured data for better search results
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Son Nguyen",
      "jobTitle": "Growth Marketing Manager",
      "description": description,
      "url": url,
      "image": image,
      "sameAs": [
        "https://linkedin.com/in/soninsthlm",
        "https://instagram.com/foodstuckers.sthlm"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Stockholm",
        "addressCountry": "Sweden"
      },
      "knowsAbout": [
        "Growth Marketing",
        "UX Writing", 
        "Communications Strategy",
        "Sustainable Marketing",
        "Environmental Science"
      ]
    };

    // Add or update structured data script
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

  }, [title, description, image, url]);

  return null; // This component doesn't render anything visible
}