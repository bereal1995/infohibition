import styled from '@emotion/styled';
import Link from 'next/link';
import moment from 'moment';
import 'moment/locale/ko';

import CardIcon from 'src/components-shared/card/CardIcon';
import { themeVar } from '@/utils/theme';
import { PerforItem } from '@/types/items';
interface Props {
  item: PerforItem;
  onClick?: () => void;
}

function CardItem({ item, onClick }: Props) {
  const href = `/items/${item.seq[0]}`;
  const startDate = moment(item?.startDate?.[0]).format('YYYY.MM.DD(ddd)');
  const endDate = moment(item?.endDate?.[0]).format('YYYY.MM.DD(ddd)');

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
            기간: {startDate} ~ {endDate} <br />
          </span>
          <span>
            장소: {(item.area[0] && item.area[0] + ' ') + item.place[0]}
          </span>
        </Description>
      </Content>
    </Container>
  );
}

const Container = styled(Link)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const Thumbnail = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  img {
    width: 100%;
    transform: scale(1.01);
  }
`;

const Content = styled.div`
  padding: 12px 16px 16px 16px;
  background: ${themeVar.background_elevated};
`;

const PerformanceType = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 12px;
  color: ${themeVar.primary};
`;

const Title = styled.div`
  margin: 10px 0 6px;
  font-size: 18px;
  line-height: 1;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  line-height: 1.4;
  white-space: pre-wrap;
  color: ${themeVar.sub_text};
`;

export default CardItem;
