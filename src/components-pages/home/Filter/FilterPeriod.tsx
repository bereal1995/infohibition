import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import { useEffect, useState } from 'react';

import { useFilterQueriesActions } from '@/components-pages/home/Filter/states/filterQueries';
import { themeVar } from '@/utils/theme';
import FilterDatePicker from '@/components-pages/home/Filter/FilterDatePicker';
import { motion } from 'framer-motion';
import { useFilterQuery } from '@/components-pages/home/hooks/useFilterQuery';

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

function FilterPeriod() {
  const { queries } = useFilterQuery();
  const monthQuery = queries.month;
  const [month, setMonth] = useState(monthQuery);
  const { setMonthQuery: setMonthQueryState } = useFilterQueriesActions();

  const activeIndex = PERIODS.findIndex((period) => period.value === month);
  const indicatorLeft = `${33.3 * activeIndex}%`;

  const onClickPeriodButton = (newMonth: string) => {
    if (month === newMonth) return;
    setMonthQueryState(newMonth);
    setMonth(newMonth);
  };

  useEffect(() => {
    registerLocale('ko-kr', ko);
  }, []);

  return (
    <>
      <PeriodContainer>
        <Indicator layout style={{ left: indicatorLeft, width: '33.3%' }} />
        {PERIODS.map(({ name, value }) => (
          <PeriodButton
            key={value}
            active={month === value}
            onClick={() => onClickPeriodButton(value)}
          >
            {name}
          </PeriodButton>
        ))}
      </PeriodContainer>
      {month === 'custom' && <FilterDatePicker />}
    </>
  );
}

const PeriodContainer = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${themeVar.outline};
  border-radius: 5px;
`;

const PeriodButton = styled.button<{ active?: boolean }>`
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

export default FilterPeriod;
