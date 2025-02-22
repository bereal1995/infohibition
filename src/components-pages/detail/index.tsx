import styled from '@emotion/styled';
import moment from 'moment';
import 'moment/locale/ko';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { themeVar } from '@/utils/theme';
import { useItem } from '@/components-pages/detail/hooks/useItem';
import HeadMeta, { IH_URL } from '@/components-shared/seo/HeadMeta';

function DetailContainer() {
  const router = useRouter();
  const { seq } = router.query;
  const { data } = useItem(seq as string);
  const perforInfo = data?.perforInfo;
  const startDate = moment(perforInfo?.startDate).format('YYYY.MM.DD(ddd)');
  const endDate = moment(perforInfo?.endDate).format('YYYY.MM.DD(ddd)');

  const description = perforInfo?.contents1
    ? perforInfo?.contents1 + perforInfo?.contents2
    : '등록된 내용이 없습니다.';

  const createTitle = (text?: string) => {
    if (!text) return;
    return { __html: text };
  };
  const linkUrl = !perforInfo?.url ? perforInfo?.placeUrl : perforInfo?.url;

  const defaultSeo = {
    title: perforInfo?.title,
    description: `제목: ${perforInfo?.title} 기간: ${startDate} ~ ${endDate}장소: ${perforInfo?.place} (${perforInfo?.placeAddr})요금: ${perforInfo?.price}문의: ${perforInfo?.phone}`,
    image: perforInfo?.imgUrl,
    url: `${IH_URL}/${seq}`,
    keywords: `공연 정보, ${perforInfo?.title}, ${perforInfo?.place}`,
  };

  return (
    <>
      <HeadMeta {...defaultSeo} />
      <Container>
        <Thumb>
          <Image
            src={perforInfo?.imgUrl.replace('http', 'https') ?? ''}
            alt={perforInfo?.title ?? ''}
            width={300}
            height={200}
          />
        </Thumb>
        <Content>
          <TitleWrap>
            <div>
              <h2
                className="text-[18px]"
                dangerouslySetInnerHTML={createTitle(perforInfo?.title)}
              />
              <span className="text-[12px]">{perforInfo?.subTitle}</span>
            </div>
            <StyledLink href={linkUrl} target="_blank">
              관람
            </StyledLink>
          </TitleWrap>
          <Info>
            기간: {startDate} ~ {endDate}
            <br />
            장소: {perforInfo?.place} ({perforInfo?.placeAddr})
            <br />
            요금: {perforInfo?.price}
            <br />
            문의: {perforInfo?.phone}
            <br />
            {/* 더보기 */}
          </Info>
          <Description>{description}</Description>
        </Content>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 0 16px;
`;

const Thumb = styled.div`
  overflow: hidden;
  width: 100%;
  margin-bottom: 14px;
  img {
    width: 100%;
    transform: scale(1.02);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
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

const StyledLink = styled.a`
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
