'use client';

export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'PuruBoy API',
        url: 'https://puruboy-api.vercel.app',
        description: 'AI, 다운로더, 애니메이션 스트리밍 및 개발 도구를 제공하는 개발자용 무료 REST API 플랫폼입니다.',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'All',
        author: {
          '@type': 'Person',
          name: 'PuruBoy',
          url: 'https://github.com/purujawa06-bot',
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'IDR',
          description: '모든 개발자에게 무료',
        },
      },
      {
        '@type': 'WebSite',
        name: 'PuruBoy API',
        url: 'https://puruboy-api.vercel.app',
        description: 'AI, 다운로더 및 애니메이션 스트리밍을 통합한 모듈형 API 플랫폼입니다. 무료로 빠르고 쉽게 사용할 수 있습니다.',
        about: {
          '@type': 'Thing',
          name: 'PuruBoy API – 개발자를 위한 무료 API 솔루션',
          description: 'PuruBoy API는 AI 채팅, 이미지 생성, 멀티미디어 다운로더 및 웹 개발 도구를 제공하는 무료 REST API 플랫폼입니다.'
        },
        inLanguage: ['ko'],
        publisher: {
          '@type': 'Person',
          name: 'PuruBoy',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://puruboy-api.vercel.app/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'CollectionPage',
        name: 'API 문서 – PuruBoy API',
        description: 'PuruBoy REST API 엔드포인트 전체 문서: AI, 다운로더, 애니메이션, 개발 도구 및 검색.',
        url: 'https://puruboy-api.vercel.app/docs',
        isPartOf: {
          '@type': 'WebSite',
          name: 'PuruBoy API',
          url: 'https://puruboy-api.vercel.app',
        },
      },
      {
        '@type': 'BreadcrumbList',
        name: 'Breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '홈', item: 'https://puruboy-api.vercel.app/' },
          { '@type': 'ListItem', position: 2, name: '문서', item: 'https://puruboy-api.vercel.app/docs' },
          { '@type': 'ListItem', position: 3, name: 'Blog', item: 'https://puruboy-api.vercel.app/blog' },
          { '@type': 'ListItem', position: 4, name: '채팅방', item: 'https://puruboy-api.vercel.app/chat' },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
