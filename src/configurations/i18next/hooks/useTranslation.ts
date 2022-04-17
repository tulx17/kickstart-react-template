import { useTranslation as translator, UseTranslationOptions } from 'react-i18next';

type useTranslationParams = {
    ns?: string | string[],
    options?: UseTranslationOptions<undefined> | undefined;
};

export function useTranslation (params: useTranslationParams) {
    const { ns, options } = params;
    const result = translator(ns, options);

    return result;
}
