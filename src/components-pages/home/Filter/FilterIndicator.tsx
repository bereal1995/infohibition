import { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import FilterDatePicker from '@/components-pages/home/Filter/FilterDatePicker';
import { useFilterQueriesActions } from '@/components-pages/home/Filter/states/filterQueries';
import { useFilterQuery } from '@/components-pages/home/hooks/useFilterQuery';
import { themeVar } from '@/utils/theme';
import {
  PERIODS,
  PeriodValue,
  SortListValue,
  SORT_LIST,
} from '@/constants/filter';

interface FilterIndicatorProps<T> {
  list: readonly { readonly name: string; readonly value: T }[];
  activeValue: T;
  onClickIndicator: (value: T) => void;
}

function FilterIndicator<T>({
  list,
  activeValue,
  onClickIndicator,
}: FilterIndicatorProps<T>) {
  const activeIndex = list.findIndex((item) => item.value === activeValue);
  const indicatorLeft = `${33.3 * activeIndex}%`;

  return (
    <Container>
      <Indicator layout style={{ left: indicatorLeft, width: '33.3%' }} />
      {list.map(({ name, value }) => (
        <FilterButton
          key={name}
          active={activeValue === value}
          onClick={() => onClickIndicator(value)}
        >
          {name}
        </FilterButton>
      ))}
    </Container>
  );
}

export function FilterPeriod() {
  const { queries } = useFilterQuery();
  const defaultMonth = queries.month;
  const [month, setMonth] = useState(defaultMonth);
  const { setMonthQuery } = useFilterQueriesActions();

  const onClickIndicator = (value: PeriodValue) => {
    if (month === value) return;

    setMonthQuery(value);
    setMonth(value);
  };
  return (
    <>
      <FilterIndicator
        list={PERIODS}
        activeValue={month}
        onClickIndicator={onClickIndicator}
      />
      {month === 'custom' && <FilterDatePicker />}
    </>
  );
}

export function FilterSortStdr() {
  const { queries } = useFilterQuery();
  const defaultSortStdr = queries.sortStdr;
  const [sortStdr, setSortStdr] = useState(defaultSortStdr);
  const { setSortQuery } = useFilterQueriesActions();

  const onClickIndicator = (value: SortListValue) => {
    if (sortStdr === value) return;

    setSortQuery(value);
    setSortStdr(value);
  };
  return (
    <FilterIndicator
      list={SORT_LIST}
      activeValue={sortStdr}
      onClickIndicator={onClickIndicator}
    />
  );
}

const Container = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${themeVar.outline};
  border-radius: 5px;
`;

const FilterButton = styled.button<{ active?: boolean }>`
  position: relative;
  width: 33.3%;
  height: 32px;
  color: ${themeVar.sub_text};
  font-size: 14px;
  &:not(:last-child) {
    border-right: 1px solid ${themeVar.outline};
  }
  ${({ active }) =>
    active &&
    css`
      color: ${themeVar.on_primary};
    `}
`;

const Indicator = styled(motion.div)`
  position: absolute;
  width: 33.3%;
  height: 100%;
  background-color: ${themeVar.primary};
`;

export default FilterIndicator;
