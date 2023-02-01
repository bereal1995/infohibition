import { useState } from 'react';
import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import { themeVar } from '@/utils/theme';
import {
  dateSelector,
  useFilterQueriesActions,
  useFilterQueriesStore,
} from '@/components-pages/home/Filter/states/filterQueries';
import { useFilterQuery } from '@/components-pages/home/hooks/useFilterQuery';

interface SelectedDate {
  from: Date;
  to: Date;
}

function FilterDatePicker() {
  const { queries } = useFilterQuery();
  const { to, from } = queries;
  const { fromState, toState } = useFilterQueriesStore(dateSelector);
  const initialDate = {
    from: moment(from || fromState).toDate(),
    to: moment(to || toState).toDate(),
  };
  const [selectedDate, setSelectedDate] = useState<SelectedDate>(initialDate);
  const { setFromQuery, setToQuery } = useFilterQueriesActions();

  const onChangeFrom = (date: Date) => {
    setFromQuery(moment(date).format('YYYYMMDD'));
    setSelectedDate({ ...selectedDate, from: date });
  };

  const onChangeTo = (date: Date) => {
    setToQuery(moment(date).format('YYYYMMDD'));
    setSelectedDate({ ...selectedDate, to: date });
  };

  return (
    <Container>
      <DatePicker
        wrapperClassName="ih-date-picker"
        dayClassName={(date) => 'ih-day-picker'}
        selected={selectedDate.from}
        onChange={onChangeFrom}
        locale="ko-kr"
        dateFormat="yyyy년 MM월 dd일"
        maxDate={selectedDate.to}
      />
      <span>-</span>
      <DatePicker
        wrapperClassName="ih-date-picker"
        selected={selectedDate.to}
        onChange={onChangeTo}
        locale="ko-kr"
        dateFormat="yyyy년 MM월 dd일"
        minDate={selectedDate.from}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 5px;
  margin-top: 5px;
  border: 1px solid ${themeVar.outline};
  border-radius: 5px;
  font-size: 12px;

  & .ih-day-picker.react-datepicker__day--selected {
    background: ${themeVar.primary};
  }
  & .ih-date-picker {
    input {
      background: ${themeVar.background};
      text-align: center;
    }
  }
`;

export default FilterDatePicker;
