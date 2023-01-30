import { getItems } from '@/api/items';
import { PerformanceParams, PerformanceType } from '@/types/items';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const useItems = () =>
  useQuery({
    queryKey: ['items'],
    queryFn: () => getItems(),
  });

export const useInfiniteItems = (
  type: PerformanceType = 'period',
  params?: Partial<PerformanceParams>
) =>
  useInfiniteQuery({
    queryKey: ['items'],
    queryFn: ({ pageParam }) => getItems(pageParam, type, params),
    getNextPageParam: (lastPage) => {
      const { cPage, totalCount, rows } = lastPage;
      const totalPage = Math.ceil(totalCount / rows);
      const nextPage = Number(cPage) + 1;

      return nextPage <= totalPage ? nextPage : false;
    },
  });
