import styled from '@emotion/styled';

import CardItem from '@/components/card/CardItem';
import { PerforItem } from '@/types/perfor';

interface Props {
  items: PerforItem[];
}

function CardList({ items }: Props) {
  console.log('items', items);
  if (!items) return <Container>리스트가 없습니다</Container>;
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
