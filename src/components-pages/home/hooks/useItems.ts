import { getItems } from '@/api/items';
import { PerformanceParams, PerformanceType } from '@/types/items';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useInfiniteItems = (
  type: PerformanceType = 'period',
  params?: Partial<PerformanceParams>
) =>
  useInfiniteQuery({
    queryKey: ['items', type, params],
    queryFn: ({ pageParam }) =>
      getItems(type, { ...params, cPage: pageParam || 1 }),
    getNextPageParam: (lastPage) => {
      const { cPage, totalCount, rows } = lastPage;
      const totalPage = Math.ceil(totalCount / rows);
      const nextPage = Number(cPage) + 1;

      return nextPage <= totalPage ? nextPage : false;
    },
  });
