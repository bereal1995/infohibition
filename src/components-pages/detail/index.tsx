import styled from '@emotion/styled';
import Link from 'next/link';
import moment from 'moment';
import 'moment/locale/ko';
import { useRouter } from 'next/router';

import { themeVar } from '@/utils/theme';
import { useItem } from '@/components-pages/detail/hooks/useItem';
import HeadMeta from '@/components-shared/seo/HeadMeta';

// TODO: 이미지 최적화 필요
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

  const createTitle = (text?: string) => {
    if (!text) return;
    return { __html: text };
  };

  const defaultSeo = {
    title: perforInfo?.title?.[0],
    description: `제목: ${perforInfo?.title?.[0]} 기간: ${startDate} ~ ${endDate}장소: ${perforInfo?.place} (${perforInfo?.placeAddr?.[0]})요금: ${perforInfo?.price?.[0]}문의: ${perforInfo?.phone?.[0]}`,
    image: perforInfo?.imgUrl?.[0],
    url: `https://www.hhxdragon.com/items/${seq}`,
  };

  return (
    <>
      <HeadMeta {...defaultSeo} />
      <Container>
        <Thumb>
          <img src={perforInfo?.imgUrl?.[0]} alt={perforInfo?.title?.[0]} />
        </Thumb>
        <Content>
          <TitleWrap>
            <div>
              <h2
                className="text-[18px]"
                dangerouslySetInnerHTML={createTitle(perforInfo?.title?.[0])}
              />
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
    </>
  );
}

const Container = styled.div``;

const Thumb = styled.div`
  overflow: hidden;
  width: 100%;
  margin-bottom: 14px;
  img {
    width: 100%;
    transform: scale(1.01);
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
