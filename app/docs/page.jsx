import React, { Suspense } from 'react';
import { getDocsSpec } from '../../lib/docsService';
import DocsClient from '../../components/DocsClient';

export const metadata = {
    title: '전체 문서 | PuruBoy API',
    description: 'PuruBoy의 모든 REST API 엔드포인트를 살펴보고 직접 테스트하세요. AI, 다운로더, 애니메이션 스트리밍, 검색 및 개발 도구를 위한 대화형 문서를 제공합니다.',
    keywords: ['PuruBoy API 문서', '한국어 API 문서', 'REST API 문서', 'PuruBoy 엔드포인트', 'PuruBoy API 사용법', 'AI API 문서', '온라인 API 테스트'],
    openGraph: {
        title: 'API 문서 - PuruBoy API',
        description: 'PuruBoy REST API 엔드포인트를 위한 완전한 대화형 문서입니다. 브라우저에서 직접 테스트하세요.',
        url: 'https://puruboy-api.vercel.app/docs',
        siteName: 'PuruBoy API',
        type: 'website',
    },
};

export const revalidate = 3600;

export default async function DocsPage() {
    let apiSpec = {};
    let error = null;

    try {
        apiSpec = await getDocsSpec();
    } catch (err) {
        console.error("SSG Error:", err);
        error = "빌드 중 API 명세를 불러오지 못했습니다.";
    }

    if (error) {
        return (
            <div className="p-6 text-center text-red-400">
                <h1 className="text-xl font-bold mb-2">오류</h1>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <Suspense fallback={
            <div className="flex flex-col items-center justify-center py-20 min-h-[60vh]">
                <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-muted text-sm animate-pulse">문서를 준비하는 중...</p>
            </div>
        }>
            <DocsClient apiSpec={apiSpec} />
        </Suspense>
    );
}