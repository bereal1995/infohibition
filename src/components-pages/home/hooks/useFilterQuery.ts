import { useRouter } from 'next/router';

import { PerformanceType } from '@/types/items';
import { asPathToObjectQuery } from '@/utils/api';
import { RealmCodesType, SortType } from '@/constants/items';

export interface FilterQueries {
  month: string;
  sortStdr: SortType;
  realmCode?: RealmCodesType;
  to?: string;
  from?: string;
}

/**
 * 쿼리스트링을 파싱하여 필터링에 필요한 파라미터, 쿼리스트링를 반환합니다.
 */
export const useFilterQuery = () => {
  const { asPath } = useRouter();
  const query = asPathToObjectQuery(asPath);
  const {
    month = '1',
    sortStdr = '1',
    realmCode,
    to,
    from,
  }: FilterQueries = query;
  const type: PerformanceType = realmCode ? 'realm' : 'period';

  const queries = {
    month,
    realmCode,
    sortStdr,
    from,
    to,
  };

  return { queries, type };
};
