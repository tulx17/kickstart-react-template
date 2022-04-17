import { useAtom } from 'jotai';
import { globalState } from 'configurations/global-state/configurations';

type useGlobalStateParams = {
    key: keyof typeof globalState;
};

export function useGlobalState (params: useGlobalStateParams) {
    const { key } = params;
    return useAtom(globalState[ key ]);
}