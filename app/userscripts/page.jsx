import React from 'react';
import UserscriptStoreClient from '../../components/UserscriptStoreClient';
import { SCRIPTS } from '../../lib/userscripts-store';

export const metadata = {
    title: 'UserScript Store | PuruBoy API',
    description: 'PuruBoy API의 무료 UserScript 모음입니다. 한 번 설치하면 Tampermonkey 또는 Violentmonkey를 통해 자동으로 업데이트됩니다.',
    keywords: ['UserScript Store', 'Tampermonkey', 'Violentmonkey', 'DeepSeek Token', 'UserScript Indonesia', 'PuruBoy Script'],
    openGraph: {
        title: 'UserScript Store - PuruBoy API',
        description: 'PuruBoy API를 더 쉽게 사용할 수 있는 자동 업데이트 무료 UserScript입니다.',
        url: 'https://puruboy-api.vercel.app/userscripts',
        siteName: 'PuruBoy API',
        type: 'website',
    },
};

export default function UserscriptsPage() {
    return <UserscriptStoreClient scripts={SCRIPTS} />;
}