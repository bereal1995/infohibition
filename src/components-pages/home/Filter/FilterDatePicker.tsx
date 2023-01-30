import { useEffect } from 'react';
import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import { themeVar } from '@/utils/theme';
import {
  fromToSelector,
  useFilterQueriesActions,
  useFilterQueriesStore,
} from '@/components-pages/home/Filter/states/filterQueries';

function FilterDatePicker() {
  const { fromState, toState } = useFilterQueriesStore(fromToSelector);
  const { setFromQuery, setToQuery } = useFilterQueriesActions();
  const from = moment(fromState).toDate();
  const to = toState
    ? moment(toState).toDate()
    : moment(toState).add(3, 'month').toDate();

  useEffect(() => {
    setFromQuery(moment(from).format('YYYYMMDD'));
    setToQuery(moment(to).format('YYYYMMDD'));
  }, []);

  return (
    <Container>
      <DatePicker
        wrapperClassName="ih-date-picker"
        dayClassName={(date) => 'ih-day-picker'}
        selected={from}
        onChange={(date) => setFromQuery(moment(date).format('YYYYMMDD'))}
        locale="ko-kr"
        dateFormat="yyyy년 MM월 dd일"
        maxDate={to}
      />
      <span>-</span>
      <DatePicker
        wrapperClassName="ih-date-picker"
        selected={to}
        onChange={(date) => setToQuery(moment(date).format('YYYYMMDD'))}
        locale="ko-kr"
        dateFormat="yyyy년 MM월 dd일"
        minDate={from}
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
  border: 1px solid ${themeVar.highlight};
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
