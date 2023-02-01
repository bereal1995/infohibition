import { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import FilterDatePicker from '@/components-pages/home/Filter/FilterDatePicker';
import { useFilterQueriesActions } from '@/components-pages/home/Filter/states/filterQueries';
import { useFilterQuery } from '@/components-pages/home/hooks/useFilterQuery';
import { SORT_NAMES } from '@/constants/items';
import { themeVar } from '@/utils/theme';

interface FilterIndicatorProps {
  list: Record<string, string>[];
  activeValue: string;
  onClickIndicator: (value: string) => void;
}

function FilterIndicator({
  list,
  activeValue,
  onClickIndicator,
}: FilterIndicatorProps) {
  const activeIndex = list.findIndex((item) => item.value === activeValue);
  const indicatorLeft = `${33.3 * activeIndex}%`;

  return (
    <Container>
      <Indicator layout style={{ left: indicatorLeft, width: '33.3%' }} />
      {list.map(({ name, value }) => (
        <FilterButton
          key={value}
          active={activeValue === value}
          onClick={() => onClickIndicator(value)}
        >
          {name}
        </FilterButton>
      ))}
    </Container>
  );
}

const PERIODS = [
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
    value: 'custom',
  },
];
export function FilterPeriod() {
  const { queries } = useFilterQuery();
  const defaultMonth = queries.month;
  const [month, setMonth] = useState(defaultMonth);
  const { setMonthQuery } = useFilterQueriesActions();

  const onClickIndicator = (value: string) => {
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

const SORT_LIST = Object.entries(SORT_NAMES).map(([value, name]) => ({
  value,
  name,
}));
export function FilterSortStdr() {
  const { queries } = useFilterQuery();
  const defaultSortStdr = queries.sortStdr;
  const [sortStdr, setSortStdr] = useState<string>(defaultSortStdr);
  const { setSortQuery } = useFilterQueriesActions();

  const onClickIndicator = (value: string) => {
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
