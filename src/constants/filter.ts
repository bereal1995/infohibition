import { SortStdrKeys, SORT_STDR } from '@/constants/items';

export const MONTH_CUSTOM = 'custom';

export const PERIODS = [
  {
    name: '1개월',
    value: '1',
  },
  {
    name: '3개월',
    value: '3',
  },
  {
    name: '직접입력',
    value: MONTH_CUSTOM,
  },
] as const;

export type Periods = typeof PERIODS;
export type PeriodValue = Periods[number]['value'];

export const SORT_LIST = Object.entries(SORT_STDR).map(
  ([value, name]) =>
    ({
      name,
      value: value as SortStdrKeys,
    } as const)
);

export type SortList = typeof SORT_LIST;
export type SortListValue = SortList[number]['value'];
