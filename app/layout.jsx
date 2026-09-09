import React from 'react';
import Script from 'next/script';
import './globals.css';
import Navbar from '../components/Navbar';
import BottomNav from '../components/BottomNav';
import NextNProgress from '../components/NextNProgress';
import Footer from '../components/Footer';
import FeaturedPopup from '../components/FeaturedPopup';
import SupportMePopup from '../components/SupportMePopup';
import JsonLd from '../components/JsonLd';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: 'resizes-content',
};

export const metadata = {
  metadataBase: new URL('https://puruboy-api.vercel.app'),
  title: {
    default: 'PuruBoy API - 개발자를 위한 무료 REST API 플랫폼',
    template: '%s | PuruBoy API'
  },
  description: 'PuruBoy API는 AI 채팅, 다운로더, 애니메이션 스트리밍 및 개발 도구를 제공하는 무료 REST API 플랫폼입니다. 빠르고 안정적이며 쉽게 연동할 수 있습니다.',
  keywords: ['PuruBoy API', '무료 REST API', '한국어 API', '무료 AI API', 'TikTok 다운로더 API', 'YouTube API', '애니메이션 스트리밍 API', '개발 도구', 'PuruBoy', '공개 API', '웹 서비스 API'],
  authors: [{ name: 'PuruBoy', url: 'https://github.com/purujawa06-bot' }],
  creator: 'PuruBoy',
  publisher: 'PuruBoy',
  alternates: {
    canonical: 'https://puruboy-api.vercel.app',
  },
  openGraph: {
    title: 'PuruBoy API - 무료 모듈형 REST API 플랫폼',
    description: 'AI, 다운로더, 애니메이션 및 개발 도구를 위한 수백 개의 무료 API 엔드포인트를 이용하세요. 완전한 문서와 빠른 응답을 제공합니다.',
    url: 'https://puruboy-api.vercel.app',
    siteName: 'PuruBoy API',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: 'https://puruboy-api.vercel.app/og',
        width: 1200,
        height: 630,
        alt: 'PuruBoy API - 무료 REST API 플랫폼',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PuruBoy API - 무료 REST API 및 AI 도구',
    description: 'AI, 다운로더, 애니메이션 및 개발 도구를 제공하는 개발자용 무료 REST API 플랫폼입니다.',
    creator: '@puruboy',
    images: ['https://puruboy-api.vercel.app/og'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.jpg', type: 'image/jpeg' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/favicon.jpg',
  },
  verification: {
    google: 'google41f3f05fef8cd977',
  },
  category: 'technology',
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="antialiased pb-24">
        <JsonLd />
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js" 
          strategy="afterInteractive" 
        />
        
        <NextNProgress />
        <FeaturedPopup />
        <SupportMePopup />
        <Navbar />
        
        <div className="background-animation"></div>
        
        {/* Menggunakan min-h-dvh untuk stabilitas viewport pada mobile */}
        <div className="container mx-auto px-4 max-w-md md:max-w-3xl min-h-dvh relative z-10 pt-6 md:pt-24">
            <main className="relative z-20">{children}</main>
            <Footer />
        </div>
        <BottomNav />
      </body>
    </html>
  );
}