import { QueryFunction, QueryKey, useQuery as useFetch, UseQueryOptions } from 'react-query';

type useQueryParams = {
    key: QueryKey,
    fetcher: QueryFunction<any, QueryKey>,
    options?: Omit<UseQueryOptions<any, unknown, any, QueryKey>, "queryKey" | "queryFn"> | undefined;
};

export function useQuery (params: useQueryParams) {
    const { key, fetcher, options } = params;
    const result = useFetch(key, fetcher, options);
    return result;
}
