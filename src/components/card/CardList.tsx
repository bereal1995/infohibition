import CardItem from '@/components/card/CardItem';
import { PerforItem } from '@/types/perfor';
import styled from '@emotion/styled';

interface Props {
  items: PerforItem[];
}

function CardList({ items }: Props) {
  console.log('items', items);
  if (!items) return '리스트가 없습니다';
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
