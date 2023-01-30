import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import produce from 'immer';

import {
  FilterQueries,
  realmNameType,
} from '@/components-pages/home/hooks/useFilterQuery';
import { SortType } from '@/constants/items';

interface FilterQueriesState {
  queries: FilterQueries;
  setMonthQuery(month: string): void;
  setFromQuery(from: string): void;
  setToQuery(from: string): void;
  setSortQuery(sort: SortType): void;
  setRealmCodeQuery(realmCode: realmNameType): void;
  setQueries(queries: Partial<FilterQueries>): void;
  clearQueries(): void;
}

const initialState: FilterQueriesState = {
  queries: {
    month: '1',
    sort: '1',
    realmCode: undefined,
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
        set((prev) => ({ queries: { ...prev.queries, month } }));
      },
      setFromQuery: (from: string) => {
        set(
          produce((state) => {
            state.queries.from = from;
          })
        );
      },
      setToQuery: (to: string) => {
        set((prev) => ({ queries: { ...prev.queries, to } }));
      },
      setSortQuery: (sort: SortType) => {
        set((prev) => ({ queries: { ...prev.queries, sort } }));
      },
      setRealmCodeQuery: (realmCode: realmNameType) => {
        set((prev) => ({ queries: { ...prev.queries, realmCode } }));
      },
      setQueries: (queries: Partial<FilterQueries>) => {
        set((prev) => ({ queries: { ...prev.queries, ...queries } }));
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
export const fromToSelector = (state: FilterQueriesState) => ({
  fromState: state.queries.from,
  toState: state.queries.to,
});

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
