import { getItem } from '@/api/items';
import { useQuery } from '@tanstack/react-query';

export const useItem = (seq: string) =>
  useQuery({
    queryKey: ['item', seq],
    queryFn: () => getItem(seq),
  });
