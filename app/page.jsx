import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getDocsSpec } from '../lib/docsService';

export const revalidate = 3600;

export const metadata = {
    title: 'PuruBoy API - 개발자를 위한 무료 REST API 플랫폼',
    description: 'PuruBoy API 홈입니다. AI 채팅, 다운로더, 애니메이션 스트리밍 및 개발 도구를 제공하는 빠르고 안정적인 무료 REST API 플랫폼입니다.',
    keywords: ['PuruBoy API', 'REST API Gratis Indonesia', 'API AI Indonesia', 'TikTok Downloader', 'YouTube Downloader API', 'Anime API', 'Developer API', 'PuruBoy'],
    openGraph: {
        title: 'PuruBoy API - 무료 REST API 플랫폼',
        description: '개발자를 위한 무료 REST API 플랫폼입니다. AI, 다운로더, 애니메이션, 개발 도구를 모두 무료로 제공합니다.',
        url: 'https://puruboy-api.vercel.app',
        siteName: 'PuruBoy API',
        type: 'website',
    },
};

const Hero = () => (
    <div className="text-center mb-12 animate-fade-in pt-8 md:pt-12 relative">
        <div className="mb-4 relative z-20">
            <div className="inline-block relative">
                <span className="text-[11px] bg-accent/10 text-accent border border-accent/20 px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                    무료 오픈 REST API
                </span>
                <span className="absolute -top-1 -right-2 w-3 h-3 bg-green-400 rounded-full border-2 border-[#09090b] animate-pulse z-10"></span>
            </div>
        </div>
        <h1 className="text-5xl font-extrabold text-primary mb-3 tracking-tight mt-4">
            PuruBoy <span className="gradient-text">API</span>
        </h1>
        <p className="text-secondary text-sm leading-relaxed max-w-sm mx-auto font-medium">
            AI, 다운로더 및 애니메이션 스트리밍을 통합한 모듈형 API 플랫폼입니다. 무료로 빠르고 쉽게 사용할 수 있습니다.
        </p>
        
        <div className="mt-8 flex flex-col gap-3 max-w-xs mx-auto">
            <Link href="/docs" className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-accent/30 transition-all active:scale-95 flex items-center justify-center gap-2 group">
                <i className="fas fa-book-open text-sm"></i>
                <span>문서 살펴보기</span>
                <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
            </Link>
            <Link href="/blog" className="w-full bg-card border border-default hover:bg-white/5 text-secondary font-semibold py-3.5 rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-2">
                <i className="fas fa-newspaper text-sm"></i>
                <span>업데이트 보기</span>
            </Link>
        </div>
    </div>
);

const StatsCard = ({ icon, count, label, color = 'text-accent' }) => (
    <div className="native-card p-4 flex items-center gap-4 hover:border-accent/50 transition-all group cursor-default">
        <div className={`w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center ${color} group-hover:scale-110 transition-transform`}>
            <i className={`fas ${icon} text-xl`}></i>
        </div>
        <div>
            <div className="text-2xl font-extrabold text-primary">{count}</div>
            <div className="text-[10px] text-muted uppercase tracking-widest font-bold">{label}</div>
        </div>
    </div>
);

const FeatureItem = ({ icon, title, desc, badge }) => (
    <div className="flex gap-4 p-4 native-card hover:bg-white/5 transition-colors group">
        <div className="flex-shrink-0 mt-0.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-default flex items-center justify-center group-hover:border-accent/40 transition-colors">
                <i className={`fas ${icon} text-accent text-sm`}></i>
            </div>
        </div>
        <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-primary text-sm">{title}</h3>
                {badge && <span className="text-[9px] bg-green-500/10 text-green-400 border border-green-500/20 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">{badge}</span>}
            </div>
            <p className="text-xs text-secondary leading-relaxed opacity-80">{desc}</p>
        </div>
    </div>
);

const ChannelPromo = () => (
    <div className="native-card overflow-hidden relative group mb-8 border-none ring-1 ring-white/10">
        <div className="relative h-40 w-full bg-gray-900">
            <Image 
                src="/puruboy-ch.jpg" 
                alt="PuruBoy Channel" 
                fill
                className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-[#121215]/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#24A1DE] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                        ✓ Official
                    </span>
                    <span className="text-gray-300 text-[10px] font-medium flex items-center gap-1">
                        <i className="fas fa-users"></i> Community Channel
                    </span>
                </div>
                <h3 className="text-xl font-bold text-white drop-shadow-md">Telegram Channel</h3>
            </div>
        </div>
        <div className="p-5 pt-3 bg-[#121215]">
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Dapatkan notifikasi update fitur, info maintenance, dan bagi-bagi script gratis langsung dari sumbernya.
            </p>
            <a 
                href="https://t.me/puruboy_hub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#24A1DE] hover:bg-[#1b8abf] text-white font-bold py-3 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
            >
                <i className="fab fa-telegram text-lg"></i>
                <span>Gabung Channel</span>
            </a>
        </div>
    </div>
);

const staticContributors = [
    {
        id: 7004559855,
        login: 'Mas Puru',
        html_url: 'https://github.com/purujawa06-bot',
        avatar_url: 'https://avatars.githubusercontent.com/u/7004559855?v=4',
        contributions: 999
    }
];

export default async function HomePage() {
    let stats = { endpoints: 0, categories: 0 };
    
    try {
        const data = await getDocsSpec();
        const totalEndpoints = Object.values(data).reduce((sum, arr) => sum + arr.length, 0);
        const totalCategories = Object.keys(data).length;
        stats = { endpoints: totalEndpoints, categories: totalCategories };
    } catch (e) {
        console.error("Failed to fetch stats for SSG", e);
    }

    const contributors = staticContributors;

    return (
        <div className="pb-4">
            <Hero />
            
            <ChannelPromo />

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-8">
                <StatsCard icon="fa-code-branch" count={`${stats.endpoints}+`} label="Endpoints" />
                <StatsCard icon="fa-folder-open" count={stats.categories} label="카테고리" />
            </div>

            {/* Quick Access */}
            <div className="mb-8">
                <h2 className="text-sm font-bold text-primary mb-3 px-1 flex items-center gap-2 uppercase tracking-wider">
                    <i className="fas fa-th-large text-accent text-xs"></i> 빠른 이동
                </h2>
                <div className="grid grid-cols-2 gap-3">
                    {[
                        { href: '/docs', icon: 'fa-book', label: '문서', desc: '모든 엔드포인트 보기', color: 'from-pink-600 to-rose-600' },
                        { href: '/chat', icon: 'fa-comments', label: '채팅방', desc: '실시간 대화', color: 'from-blue-600 to-indigo-600' },
                        { href: '/blog', icon: 'fa-newspaper', label: '블로그', desc: '업데이트 및 소식', color: 'from-purple-600 to-violet-600' },
                        { href: '/listpage', icon: 'fa-file-alt', label: '페이지 목록', desc: '사용자 페이지 목록', color: 'from-emerald-500 to-teal-600' },
                        { href: '/userscripts', icon: 'fa-cubes', label: '스크립트 스토어', desc: 'UserScript 자동 업데이트', color: 'from-cyan-500 to-sky-600' },
                    ].map(item => (
                        <Link key={item.href} href={item.href} className="native-card p-4 flex flex-col gap-2 hover:border-accent/40 transition-all active:scale-95 group">
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                <i className={`fas ${item.icon} text-white text-sm`}></i>
                            </div>
                            <div>
                                <div className="text-sm font-bold text-primary">{item.label}</div>
                                <div className="text-[10px] text-muted">{item.desc}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Features */}
            <h2 className="text-sm font-bold text-primary mb-3 px-1 flex items-center gap-2 uppercase tracking-wider">
                <i className="fas fa-star text-accent text-xs"></i> 주요 기능
            </h2>
            <div className="space-y-3 mb-8">
                <FeatureItem icon="fa-bolt" title="고성능" badge="빠름" desc="빠르고 안정적인 응답과 높은 가용성을 위해 최적화된 서버 인프라입니다." />
                <FeatureItem icon="fa-mobile-alt" title="모바일 친화적" desc="작은 화면에서도 편안하게 보고, 부드럽게 스크롤하며 반응성 있게 사용할 수 있도록 설계된 문서입니다." />
                <FeatureItem icon="fa-flask" title="API Tester" badge="신규" desc="추가 앱 없이 브라우저에서 바로 엔드포인트를 테스트하세요. 결과를 실시간으로 확인할 수 있습니다." />
                <FeatureItem icon="fa-robot" title="AI Powered" desc="일부 엔드포인트는 더 정확하고 고도화된 결과를 위해 최신 AI 모델을 사용합니다." />
            </div>

            {/* Contributors */}
            <div className="mb-8 animate-fade-in">
                <h2 className="text-sm font-bold text-primary mb-4 px-1 flex items-center gap-2 uppercase tracking-wider">
                    <i className="fas fa-crown text-yellow-500 text-xs"></i> 주요 기여자
                </h2>
                
                <div className="flex gap-3 flex-wrap">
                    {contributors.map((contributor) => (
                        <a 
                            key={contributor.id}
                            href={contributor.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="native-card min-w-[100px] w-[100px] p-3 flex flex-col items-center gap-2 snap-start border border-gray-800 hover:border-accent transition-all group"
                        >
                            <div className="relative w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-accent to-purple-600 shadow-lg shadow-purple-900/20 group-hover:scale-110 transition-transform duration-300">
                                <div className="w-full h-full rounded-full overflow-hidden bg-black">
                                    <Image
                                        src={contributor.avatar_url}
                                        alt={contributor.login}
                                        width={44}
                                        height={44}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <span className="text-[10px] font-bold text-secondary truncate w-full text-center group-hover:text-white transition-colors">
                                {contributor.login}
                            </span>
                            <span className="text-[9px] bg-accent/10 text-accent px-2 py-0.5 rounded-full font-mono border border-accent/20">
                                {contributor.contributions}✦
                            </span>
                        </a>
                    ))}
                </div>
            </div>

            {/* 공식 도메인 */}
            <div className="native-card p-5 mb-8 bg-gradient-to-br from-card to-transparent border border-default">
                <h3 className="font-bold text-primary text-sm mb-4 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
                        <i className="fas fa-globe text-accent text-xs"></i>
                    </div>
                    공식 도메인
                </h3>
                <div className="space-y-2">
                    <a href="https://www.puruboy.kozow.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-input/50 hover:bg-input p-3 rounded-xl border border-default transition-all group">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                            <span className="text-xs font-mono text-gray-300 group-hover:text-accent transition-colors">www.puruboy.kozow.com</span>
                        </div>
                        <span className="text-[9px] bg-green-500/10 text-green-400 px-2 py-1 rounded-full font-bold uppercase tracking-wider border border-green-500/20">안정적</span>
                    </a>
                    <a href="https://puruboy-api.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-input/50 hover:bg-input p-3 rounded-xl border border-default transition-all group">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                            <span className="text-xs font-mono text-gray-300 group-hover:text-accent transition-colors">puruboy-api.vercel.app</span>
                        </div>
                        <span className="text-[9px] bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full font-bold uppercase tracking-wider border border-blue-500/20">클라우드</span>
                    </a>
                </div>
            </div>

            {/* Footer CTA */}
            <div className="mt-8 p-5 native-card text-center border-dashed border-accent/30 bg-gradient-to-b from-accent/5 to-transparent">
                <i className="fas fa-code text-accent text-2xl mb-3 block"></i>
                <p className="text-xs text-secondary mb-4 leading-relaxed">지금 프로젝트에 PuruBoy API를 연동하세요. 무료이며 인증이 필요하지 않습니다.</p>
                <Link href="/docs" className="inline-flex items-center gap-2 bg-accent text-white text-sm font-bold px-6 py-3 rounded-xl shadow-lg shadow-accent/25 hover:bg-accent-hover transition-all active:scale-95">
                    <i className="fas fa-rocket text-sm"></i>
                    지금 시작하기
                </Link>
            </div>
        </div>
    );
}