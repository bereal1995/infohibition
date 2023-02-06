import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import Button from '@/components-shared/buttons';
import { themeVar } from '@/utils/theme';
import { useBottomSheetModalActions } from '@/states/bottomSheetModal';
import { useFilterQueriesStore } from '@/components-pages/home/Filter/states/filterQueries';
import FilterGenreSelector from '@/components-pages/home/Filter/FilterGenreSelector';
import {
  FilterPeriod,
  FilterSortStdr,
} from '@/components-pages/home/Filter/FilterIndicator';

function FilterContent() {
  const router = useRouter();
  const { close } = useBottomSheetModalActions();

  const onClickSelectButton = () => {
    const queriesState = useFilterQueriesStore.getState().queries;
    const newQueries =
      queriesState.month === 'custom'
        ? { ...queriesState }
        : { ...queriesState, from: undefined, to: undefined };

    router.replace({ query: newQueries });
    close();
  };

  return (
    <Container>
      <PeriodContainer>
        <div>
          <h2>조회 기간</h2>
          <FilterPeriod />
        </div>
        <div className="mt-[12px]">
          <h2>장르</h2>
          <FilterGenreSelector />
        </div>
        <div className="mt-[12px] pb-5">
          <h2>정렬</h2>
          <FilterSortStdr />
        </div>
      </PeriodContainer>
      <StyledButton fullWidth onClick={onClickSelectButton}>
        선택
      </StyledButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 16px;
  min-height: 460px;
  max-height: 80vh;
  background: ${themeVar.background};
  h2 {
    margin-bottom: 10px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }
`;

const PeriodContainer = styled.div`
  overflow: auto;
`;

const StyledButton = styled(Button)`
  height: 40px;
  margin-top: 10px;
  background: ${themeVar.primary};
  border-radius: 15px;
  color: ${themeVar.on_primary};
`;

export default FilterContent;
