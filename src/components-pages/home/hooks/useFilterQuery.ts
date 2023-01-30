import { useRouter } from 'next/router';
import moment from 'moment';

import { PerformanceParams, PerformanceType } from '@/types/items';
import { asPathToObjectQuery } from '@/utils/api';
import { SortType } from '@/constants/items';

type realmNameType = PerformanceParams['realmCode'];

interface FilterQueries {
  month: string;
  sort: SortType;
  realmCode: realmNameType;
}

/**
 * 쿼리스트링을 파싱하여 필터링에 필요한 파라미터, 쿼리스트링를 반환합니다.
 */
export const useFilterQuery = () => {
  const { asPath } = useRouter();
  const query = asPathToObjectQuery(asPath);
  const { month = '1', sort = '1', realmCode }: FilterQueries = query;
  const to = moment().add(month, 'month').format('YYYYMMDD');
  const type: PerformanceType = realmCode ? 'realm' : 'period';

  const params = {
    month,
    realmCode,
    sortStdr: sort,
    type,
    to,
  };

  return params;
};
