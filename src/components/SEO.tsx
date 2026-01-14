import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export default function SEO({
  title,
  description,
  keywords = 'Sabelo Gumede, Full Stack Developer, Web Developer, React, TypeScript, Node.js, Portfolio',
  ogImage = 'https://your-portfolio-url.com/og-image.jpg',
  ogType = 'website',
  canonicalUrl = typeof window !== 'undefined' ? window.location.href : '',
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const metaTags: { [key: string]: string } = {
      description,
      keywords,
      author: 'Sabelo Gumede',
      'og:title': title,
      'og:description': description,
      'og:type': ogType,
      'og:image': ogImage,
      'og:url': canonicalUrl,
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': ogImage,
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      const attribute = name.startsWith('og:') || name.startsWith('twitter:') ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }

      meta.setAttribute('content', content);
    });

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [title, description, keywords, ogImage, ogType, canonicalUrl]);

  return null;
}
