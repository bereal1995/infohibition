import { useSearchActions } from '@/components-pages/search/states';
import { useEffect } from 'react';
import { useDebounce } from 'use-debounce';

export function useSearchBarState(searchText: string) {
  const { setSearchText: setSearchStateText } = useSearchActions();
  const [debouncedSearchText] = useDebounce(searchText, 300);

  useEffect(() => {
    const newUrl = `/search?q=${debouncedSearchText}`;
    window.history.replaceState(
      { ...window.history.state, as: newUrl, url: newUrl },
      '',
      newUrl
    );
    setSearchStateText(debouncedSearchText);
  }, [debouncedSearchText, setSearchStateText]);
}
