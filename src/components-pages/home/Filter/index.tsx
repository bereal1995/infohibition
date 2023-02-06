import { useEffect } from 'react';
import styled from '@emotion/styled';
import ko from 'date-fns/locale/ko';
import moment from 'moment';
import { registerLocale } from 'react-datepicker';

import FilterIcon from '@/img/filter_icon.svg';
import { REALM_ALL, REALM_OBJ, SORT_STDR } from '@/constants/items';
import { useFilterQuery } from '@/components-pages/home/hooks/useFilterQuery';
import { useBottomSheetModalActions } from '@/states/bottomSheetModal';
import FilterContent from '@/components-pages/home/Filter/FilterContent';
import { useFilterQueriesActions } from '@/components-pages/home/Filter/states/filterQueries';

function ListFilter() {
  const { open } = useBottomSheetModalActions();
  const { queries } = useFilterQuery();
  const { setQueries } = useFilterQueriesActions();
  const { month, realmCode, sortStdr, to, from } = queries;
  const realmName = realmCode ? REALM_OBJ[realmCode] : REALM_ALL.name;
  const sortName = SORT_STDR[sortStdr];
  const monthName =
    decodeURIComponent(month) === 'custom' ? `${from} ~ ${to}` : `${month}개월`;

  const onClickFilter = () => {
    open(<FilterContent />);
  };

  useEffect(() => {
    const defaultQueries = { ...queries };
    if (!defaultQueries.from) defaultQueries.from = moment().format('YYYYMMDD');
    if (!defaultQueries.to)
      defaultQueries.to = moment().add(3, 'month').format('YYYYMMDD');
    setQueries(defaultQueries);
  }, []);

  useEffect(() => {
    registerLocale('ko-kr', ko);
  }, []);

  return (
    <Container>
      <button onClick={onClickFilter}>
        <span suppressHydrationWarning>{monthName}</span>
        <span>•</span>
        <span suppressHydrationWarning>{realmName}</span>
        <span>•</span>
        <span suppressHydrationWarning>{sortName}</span>
        <FilterIcon />
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  button {
    display: flex;
    align-items: center;
    gap: 2px;
    height: 30px;
    margin-top: 10px;
  }
  svg {
    width: 14px;
    height: 14px;
  }
`;

export default ListFilter;
