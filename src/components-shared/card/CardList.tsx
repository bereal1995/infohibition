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
        <CardItem key={item.seq} item={item} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 5px;
`;

export default CardList;
