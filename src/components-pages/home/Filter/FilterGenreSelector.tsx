import { useFilterQueriesActions } from '@/components-pages/home/Filter/states/filterQueries';
import { useFilterQuery } from '@/components-pages/home/hooks/useFilterQuery';
import CardIcon from '@/components-shared/card/CardIcon';
import {
  RealmCodesType,
  REALM_CODES,
  REALM_ALL,
  REALM_OBJ,
} from '@/constants/items';
import { themeVar } from '@/utils/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useState } from 'react';

type FilterGenreSelectorNames = RealmCodesType | typeof REALM_ALL['code'];

function FilterGenreSelector() {
  const { queries } = useFilterQuery();
  const { realmCode } = queries;
  const [selected, setSelected] = useState<FilterGenreSelectorNames>(
    realmCode ?? REALM_ALL.code
  );
  const { setRealmCodeQuery } = useFilterQueriesActions();
  const list = REALM_CODES.map((code) => ({
    code,
    name: REALM_OBJ[code],
  }));

  const onClickIndicator = (code: FilterGenreSelectorNames) => {
    setSelected(code);
    setRealmCodeQuery(code === 'ALL' ? undefined : code);
  };

  return (
    <Container>
      <ListContainer>
        {list.map(({ code, name }) => (
          <IndicatorContainer key={name} whileTap={{ scale: 1.1 }}>
            <IndicatorItem
              isActive={selected === code}
              onClick={() => onClickIndicator(code)}
            >
              <CardIcon type={name} />
              <span>{name}</span>
            </IndicatorItem>
          </IndicatorContainer>
        ))}
        <IndicatorItem
          isActive={selected === REALM_ALL.code}
          onClick={() => onClickIndicator(REALM_ALL.code)}
        >
          <CardIcon type={REALM_ALL.name} />
          <span>{REALM_ALL.name}</span>
        </IndicatorItem>
      </ListContainer>
      <span className="text-[12px] text-[#AAA]">
        * 장르는 현재 1가지만 선택 가능합니다.
      </span>
    </Container>
  );
}

const Container = styled.div``;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`;

const IndicatorContainer = styled(motion.div)``;

const IndicatorItem = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 32px;
  padding: 7px 10px;
  border: 1px solid ${themeVar.outline};
  border-radius: 5px;
  font-size: 14px;
  color: ${themeVar.sub_text};
  ${({ isActive }) =>
    isActive &&
    css`
      color: ${themeVar.on_primary};
      background-color: ${themeVar.primary};
      border: none;
    `};
`;

export default FilterGenreSelector;
