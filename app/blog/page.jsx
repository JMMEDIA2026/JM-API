import React from 'react';
import blogService from '../../lib/blogService';
import BlogClient from '../../components/BlogClient';

export const metadata = {
    title: '블로그 및 튜토리얼 | PuruBoy API',
    description: 'PuruBoy API 공식 블로그입니다. API 사용 튜토리얼, 최신 기능 업데이트, 변경 이력과 개발 팁을 확인하세요.',
    keywords: ['Blog PuruBoy API', 'Tutorial API Indonesia', 'Update API', 'Changelog', 'Tips Developer', 'PuruBoy Tutorial'],
    openGraph: {
        title: 'PuruBoy API 블로그 및 튜토리얼',
        description: 'PuruBoy API 튜토리얼, 기능 업데이트 및 개발 팁을 제공합니다.',
        url: 'https://puruboy-api.vercel.app/blog',
        siteName: 'PuruBoy API',
        type: 'website',
    },
};

export const revalidate = 60;

export default async function BlogPage() {
    let initialPosts = [];
    let totalPages = 1;
    let error = null;

    const page = 1;
    const limit = 5;

    try {
        const data = await blogService.getAll(page, limit);
        initialPosts = Array.isArray(data?.posts) ? data.posts : [];
        totalPages = data?.totalPages || 1;
    } catch (err) {
        console.error("Failed to fetch blogs:", err);
        error = "블로그 게시물을 불러오지 못했습니다.";
        initialPosts = [];
    }

    return (
        <div className="animate-fade-in pb-8">
            <div className="sticky-header -mx-4 px-4 py-4 mb-6 flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-primary tracking-tight">블로그 업데이트</h1>
                    <p className="text-xs text-secondary mt-1">PuruBoy API 소식 및 튜토리얼</p>
                </div>
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <i className="fas fa-newspaper"></i>
                </div>
            </div>

            {error ? (
                <div className="bg-red-900/20 border border-red-800 p-6 rounded-2xl text-center">
                    <i className="fas fa-exclamation-circle text-red-500 text-2xl mb-2"></i>
                    <p className="text-red-300 text-sm">{error}</p>
                </div>
            ) : (initialPosts && initialPosts.length > 0) ? (
                <BlogClient 
                    initialPosts={initialPosts} 
                    totalPages={totalPages} 
                />
            ) : (
                <div className="text-center py-20 text-muted flex flex-col items-center">
                    <i className="far fa-folder-open text-4xl mb-3 opacity-50"></i>
                    <p>아직 게시물이 없습니다.</p>
                </div>
            )}
        </div>
    );
}