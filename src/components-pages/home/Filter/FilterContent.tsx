import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import FilterPeriod from '@/components-pages/home/Filter/FilterPeriod';
import Button from '@/components-shared/buttons';
import { themeVar } from '@/utils/theme';
import { useBottomSheetModalActions } from '@/states/bottomSheetModal';
import {
  useFilterQueriesActions,
  useFilterQueriesStore,
} from '@/components-pages/home/Filter/states/filterQueries';

function FilterContent() {
  const router = useRouter();
  const { close } = useBottomSheetModalActions();
  const { setQueries } = useFilterQueriesActions();

  const onClickSelectButton = () => {
    const queries = useFilterQueriesStore.getState().queries;
    const newQueries =
      queries.month === 'custom'
        ? { ...queries }
        : { ...queries, from: undefined, to: undefined };

    router.replace({ query: newQueries });
    if (queries.month !== 'custom')
      setQueries({ from: undefined, to: undefined });
    close();
  };

  return (
    <Container>
      <PeriodContainer>
        <h2>조회 기간</h2>
        <FilterPeriod />
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
  background: ${themeVar.background};
  h2 {
    margin-bottom: 10px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }
`;

const PeriodContainer = styled.div``;

const StyledButton = styled(Button)`
  height: 40px;
  background: ${themeVar.primary};
  border-radius: 15px;
  color: ${themeVar.on_primary};
`;

export default FilterContent;
