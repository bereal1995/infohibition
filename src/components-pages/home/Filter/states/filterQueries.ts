import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import produce from 'immer';

import { FilterQueries } from '@/components-pages/home/hooks/useFilterQuery';
import { RealmCodesType, SortType } from '@/constants/items';
import moment from 'moment';

interface FilterQueriesState {
  queries: FilterQueries;
  setMonthQuery(month: string): void;
  setFromQuery(from: string): void;
  setToQuery(from: string): void;
  setSortQuery(sort: string): void;
  setRealmCodeQuery(realmCode?: RealmCodesType): void;
  setQueries(queries: FilterQueries): void;
  clearQueries(): void;
}

const initialState: FilterQueriesState = {
  queries: {
    month: '1',
    sortStdr: '1',
    realmCode: undefined,
    from: moment().format('YYYYMMDD'),
    to: moment().add(3, 'month').format('YYYYMMDD'),
  },
  setMonthQuery: () => {},
  setFromQuery: () => {},
  setToQuery: () => {},
  setSortQuery: () => {},
  setRealmCodeQuery: () => {},
  setQueries: () => {},
  clearQueries: () => {},
};

export const useFilterQueriesStore = create<FilterQueriesState>()(
  devtools(
    (set, get) => ({
      ...initialState,
      setMonthQuery: (month: string) => {
        set(
          produce((state) => {
            state.queries.month = month;
          })
        );
      },
      setFromQuery: (from: string) => {
        set(
          produce((state) => {
            state.queries.from = from;
          })
        );
      },
      setToQuery: (to: string) => {
        set(
          produce((state) => {
            state.queries.to = to;
          })
        );
      },
      setSortQuery: (sortStdr: SortType) => {
        set(
          produce((state) => {
            state.queries.sortStdr = sortStdr;
          })
        );
      },
      setRealmCodeQuery: (realmCode: RealmCodesType) => {
        set(
          produce((state) => {
            state.queries.realmCode = realmCode;
          })
        );
      },
      setQueries: (queries: FilterQueries) => {
        set(
          produce((state) => {
            state.queries = queries;
          })
        );
      },
      clearQueries: () => {
        set(() => ({ queries: initialState.queries }));
      },
    }),
    {
      name: 'filterQueries',
    }
  )
);

export const monthSelector = (state: FilterQueriesState) => state.queries.month;

export const useDateStore = () =>
  useFilterQueriesStore(
    (state: FilterQueriesState) => ({
      fromState: state.queries.from,
      toState: state.queries.to,
    }),
    shallow
  );

export function useFilterQueriesActions() {
  return useFilterQueriesStore(
    (state) => ({
      setMonthQuery: state.setMonthQuery,
      setFromQuery: state.setFromQuery,
      setToQuery: state.setToQuery,
      setSortQuery: state.setSortQuery,
      setRealmCodeQuery: state.setRealmCodeQuery,
      setQueries: state.setQueries,
      clearQueries: state.clearQueries,
    }),
    shallow
  );
}
