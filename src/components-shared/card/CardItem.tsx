import CardIcon from 'src/components-shared/card/CardIcon';
import { themeVar } from 'src/utils/theme';
import { PerforItem } from '@/types/items';
import styled from '@emotion/styled';
import Link from 'next/link';

interface Props {
  item: PerforItem;
  onClick?: () => void;
}

function CardItem({ item, onClick }: Props) {
  const href = `/items/${item.seq[0]}`;

  return (
    <Container href={href}>
      <Thumbnail>
        {/* TODO: 이미지 최적화 필요 */}
        <img src={item.thumbnail[0]} />
      </Thumbnail>
      <Content>
        <PerformanceType>
          <CardIcon type={item.realmName[0]} />
          {item.realmName[0]}
        </PerformanceType>
        <Title dangerouslySetInnerHTML={{ __html: item.title[0] }} />
        <Description>
          <span>
            {item.startDate[0]} ~ {item.endDate[0]} <br />
          </span>
          <span>{(item.area[0] && item.area[0] + ' ') + item.place[0]}</span>
        </Description>
      </Content>
    </Container>
  );
}

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Thumbnail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 288/200;
  border: 1px solid ${themeVar.on_background_elevated};
  border-radius: 10px;
  img {
    width: 100%;
    border-radius: inherit;
    aspect-ratio: inherit;
    object-fit: contain;
  }
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
  margin-bottom: 6px;
  font-size: 18px;
  line-height: 1;
  letter-spacing: -1px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  line-height: 1.2;
  color: ${themeVar.on_surface_elevated};
  white-space: pre-wrap;
`;

export default CardItem;
