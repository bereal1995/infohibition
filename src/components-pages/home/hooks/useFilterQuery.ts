import { useRouter } from 'next/router';

import { PerformanceParams, PerformanceType } from '@/types/items';
import { asPathToObjectQuery } from '@/utils/api';
import { SortType } from '@/constants/items';

export type realmNameType = PerformanceParams['realmCode'];

export interface FilterQueries {
  month: string;
  sort: SortType;
  realmCode: realmNameType;
  to?: string;
  from?: string;
}

/**
 * 쿼리스트링을 파싱하여 필터링에 필요한 파라미터, 쿼리스트링를 반환합니다.
 */
export const useFilterQuery = () => {
  const { asPath } = useRouter();
  const query = asPathToObjectQuery(asPath);
  const { month = '1', sort = '1', realmCode, to, from }: FilterQueries = query;
  const type: PerformanceType = realmCode ? 'realm' : 'period';

  const queries = {
    month,
    realmCode,
    sortStdr: sort,
    from,
    to,
  };

  return { queries, type };
};
