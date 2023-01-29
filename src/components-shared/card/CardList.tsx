import styled from '@emotion/styled';

import CardItem from 'src/components-shared/card/CardItem';
import { PerforItem } from '@/types/items';

interface Props {
  items: PerforItem[];
}

function CardList({ items }: Props) {
  if (items.length === 0) return <Container>리스트가 없습니다.</Container>;

  return (
    <Container>
      {items.map((item) => (
        <CardItem key={item.seq[0]} item={item} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  padding: 0 16px;
  margin-top: 10px;
`;

export default CardList;
