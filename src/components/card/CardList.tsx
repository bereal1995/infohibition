import CardItem from '@/components/card/CardItem';
import { PerforItem } from '@/types/perfor';
import styled from '@emotion/styled';

interface Props {
  items: PerforItem[];
}

function CardList({ items }: Props) {
  return (
    <Container>
      {items.map((item) => (
        <CardItem key={item.seq} item={item} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  padding: 0 16px;
  margin-top: 10px;
`;

export default CardList;
