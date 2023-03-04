import { getSearchItems } from '@/api/items';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useInfiniteSearchItems = (keyword: string) => {
  return useInfiniteQuery({
    queryKey: ['searchItems', keyword],
    queryFn: ({ pageParam }) =>
      getSearchItems({ keyword, cPage: pageParam || 1 }),
    getNextPageParam: (lastPage) => {
      const { cPage, totalCount, rows } = lastPage;
      const totalPage = Math.ceil(totalCount / rows);
      const nextPage = Number(cPage) + 1;

      return nextPage <= totalPage ? nextPage : false;
    },
    enabled: !!keyword,
    suspense: true,
    useErrorBoundary: true,
  });
};
