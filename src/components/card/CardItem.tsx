import CardIcon from '@/components/card/CardIcon';
import { PerforItem } from '@/types/perfor';
import styled from '@emotion/styled';

interface Props {
  item: PerforItem;
}

function CardItem({ item }: Props) {
  return (
    <Container>
      <Thumbnail></Thumbnail>
      <Content>
        <PerformanceType>
          <CardIcon type="theater" />
          연극
        </PerformanceType>
        <Title>칼라바 쇼</Title>
        <Description>
          <span>2023.01.05 ~ 2023.01.06</span>
          <span>폴리미디어 씨어터 (서울 동작구)</span>
        </Description>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Thumbnail = styled.div`
  width: 100%;
  /* padding-bottom: 56.25%; */
  aspect-ratio: 289/160;
  background-color: #d9d9d9;
  border-radius: 10px;
`;

const Content = styled.div`
  margin-top: 9px;
`;

const PerformanceType = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  margin-bottom: 5px;
  font-size: 12px;
`;

const Title = styled.div`
  margin-bottom: 4px;
  font-size: 18px;
  line-height: 1;
  font-weight: 600;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #767676;
`;

export default CardItem;
