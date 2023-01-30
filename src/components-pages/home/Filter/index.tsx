import styled from '@emotion/styled';

import FilterIcon from '@/img/filter_icon.svg';
import { RealmCodeType, SortType } from '@/constants/items';
import { useFilterQuery } from '@/components-pages/home/hooks/useFilterQuery';
import { useBottomSheetModalActions } from '@/states/bottomSheetModal';
import FilterContent from '@/components-pages/home/Filter/FilterContent';

const SORT_NAME: Record<SortType, string> = {
  ['1']: '등록일순',
  ['2']: '공연명순',
  ['3']: '지역순',
};

const REEL_M_CODE_NAME: Record<RealmCodeType | 'all', string> = {
  A000: '연극',
  B000: '음악',
  C000: '무용',
  D000: '미술',
  E000: '건축',
  G000: '영상',
  H000: '문학',
  I000: '문화정책',
  J000: '축제문화공간',
  L000: '기타',
  all: '전체',
};

function ListFilter() {
  const { open } = useBottomSheetModalActions();
  const { queries } = useFilterQuery();
  const { month, realmCode = 'all', sortStdr, to, from } = queries;
  const realmCodeName = REEL_M_CODE_NAME[realmCode] ?? REEL_M_CODE_NAME.all;
  const sortName = SORT_NAME[sortStdr] ?? SORT_NAME['1'];
  const monthName =
    decodeURIComponent(month) === 'custom' ? `${from} ~ ${to}` : `${month}개월`;

  const onClickFilter = () => {
    open(<FilterContent />);
  };

  return (
    <Container>
      <button onClick={onClickFilter}>
        <span suppressHydrationWarning>{monthName}</span>
        <span>•</span>
        <span suppressHydrationWarning>{realmCodeName}</span>
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
