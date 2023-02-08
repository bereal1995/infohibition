import produce from 'immer';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';

interface SearchState {
  searchText: string;
  setSearchText: (text: string) => void;
}

const initialState: SearchState = {
  searchText: '',
  setSearchText: () => {},
};

export const useSearchStore = create<SearchState>()(
  devtools(
    (set, get) => ({
      ...initialState,
      setSearchText: (text: string) => {
        set(
          produce((state) => {
            state.searchText = text;
          })
        );
      },
    }),
    {
      name: 'SearchState',
    }
  )
);

export const searchTextSelector = (state: SearchState) => state.searchText;

export function useSearchActions() {
  return useSearchStore(
    (state) => ({
      setSearchText: state.setSearchText,
    }),
    shallow
  );
}
