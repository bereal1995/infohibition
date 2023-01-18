import { getItems } from '@/api/items';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const useItems = () =>
  useQuery({
    queryKey: ['items'],
    queryFn: () => getItems(),
  });

export const useInfiniteItems = () =>
  useInfiniteQuery({
    queryKey: ['items'],
    queryFn: ({ pageParam }) => getItems(pageParam),
    getNextPageParam: (lastPage) => {
      const { cPage, totalCount, rows } = lastPage;
      const totalPage = Math.ceil(totalCount / rows);
      const nextPage = Number(cPage) + 1;

      return nextPage <= totalPage ? nextPage : false;
    },
  });
