import styled from '@emotion/styled';

import { themeVar } from '@/utils/theme';
import { useRouter } from 'next/router';
import { useItem } from '@/components-pages/detail/hooks/useItem';
import Link from 'next/link';
import moment from 'moment';
import 'moment/locale/ko';

// TODO: 데이터 가공 관련 리팩토링 필요
// TODO: 컴포넌트 분리할지 고민필요
function DetailContainer() {
  const router = useRouter();
  const { seq } = router.query;
  const { data } = useItem(seq as string);
  const perforInfo = data?.perforInfo?.[0];
  const startDate = moment(perforInfo?.startDate?.[0]).format(
    'YYYY.MM.DD(ddd)'
  );
  const endDate = moment(perforInfo?.endDate?.[0]).format('YYYY.MM.DD(ddd)');

  const description = perforInfo?.contents1?.[0]
    ? perforInfo?.contents1?.[0] + perforInfo?.contents2?.[0]
    : '등록된 내용이 없습니다.';

  return (
    <Container>
      <Thumb>
        <img src={perforInfo?.imgUrl?.[0]} alt={perforInfo?.title?.[0]} />
      </Thumb>
      <Content>
        <TitleWrap>
          <div>
            <h2 className="text-[18px]">{perforInfo?.title?.[0]}</h2>
            <span className="text-[12px]">{perforInfo?.subTitle?.[0]}</span>
          </div>
          <StyledLink href={perforInfo?.url?.[0] ?? '/'} target="_blank">
            관람
          </StyledLink>
        </TitleWrap>
        <Info>
          기간: {startDate} ~ {endDate}
          <br />
          장소: {perforInfo?.place} ({perforInfo?.placeAddr?.[0]})
          <br />
          요금: {perforInfo?.price?.[0]}
          <br />
          문의: {perforInfo?.phone?.[0]}
          <br />
          {/* 더보기 */}
        </Info>
        <Description>{description}</Description>
      </Content>
    </Container>
  );
}

const Container = styled.div``;

const Thumb = styled.div`
  width: 100%;
  margin-bottom: 14px;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1;
  margin-bottom: 14px;
  word-break: break-word;
  h2 {
    line-height: 1.2;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  span {
    color: ${themeVar.on_surface_elevated};
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  padding: 12px;
  margin-left: 8px;
  border-radius: 5px;
  background: ${themeVar.primary};
  color: #fff;
  transition: opacity 0.2s linear;
  white-space: nowrap;
  &:hover {
    opacity: 0.8;
  }
`;

const Info = styled.div`
  padding: 12px;
  margin-bottom: 12px;
  background: ${themeVar.background_elevated};
  border-radius: 5px;
  font-size: 12px;
  color: ${themeVar.sub_text};
`;

const Description = styled.div`
  font-size: 14px;
`;

export default DetailContainer;
