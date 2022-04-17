import { atom } from 'jotai';

export const globalState = {
    language: atom<Language>('en'),
    isDarkMode: atom<boolean>(false),
    account: atom<{}>({}),
}

type Language = 'en' | 'vn';