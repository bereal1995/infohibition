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
  border: 1px solid ${themeVar.outline};
  border-radius: 10px;
`;

const Thumbnail = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 82.5%;
  img {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Content = styled.div`
  padding: 8px 16px 16px 16px;
`;

const PerformanceType = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 12px;
  color: ${themeVar.sub_text};
`;

const Title = styled.div`
  margin: 4px 0;
  font-size: 18px;
  line-height: 1;
  letter-spacing: -1px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  line-height: 1.5;
  white-space: pre-wrap;
  color: ${themeVar.sub_text};
`;

export default CardItem;
