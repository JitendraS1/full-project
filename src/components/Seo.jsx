import React from 'react';
import { Helmet } from 'react-helmet-async';

function Seo({ title, description, keywords, schemaMarkup }) {
  return (
    <Helmet>
      {/* Title */}
      <title>{title}</title>

      {/* Meta Tags */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph Tags (for social media) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {/*  <meta property="og:image" content={imageUrl} /> */}
      <meta property="og:url" content={window.location.href} />

      {/* Schema Markup */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
}

export default Seo;
