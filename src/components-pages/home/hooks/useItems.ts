import { AxiosError } from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';

import { getItems } from '@/api/items';
import { handleAxiosError } from '@/lib/error';
import { PerformanceParams, PerformanceType } from '@/types/items';

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
    suspense: true,
    useErrorBoundary: true,
    onError: (error) => {
      if (error instanceof AxiosError) {
        handleAxiosError(error);
        return;
      }

      throw error;
    },
  });
