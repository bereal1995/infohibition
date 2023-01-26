import styled from '@emotion/styled';

import Button from '@/components-shared/buttons';
import { themeVar } from '@/utils/theme';

function DetailContainer() {
  return (
    <Container>
      <Thumb>썸네일</Thumb>
      <Content>
        <TitleWrap>
          <div>
            <h2 className="text-[18px]">칼라바 쇼</h2>
            <span className="text-[12px]">장사익 콘서트</span>
          </div>
          <Button>관람</Button>
        </TitleWrap>
        <Info>
          기간: 2023.01.02(수) ~ 2023.08.07(일)
          <br />
          장소: 폴리미디어 씨어터 (서울 동작구)
          <br />
          더보기
        </Info>
        <Description>
          대통령의 임기는 5년으로 하며, 중임할 수 없다. 헌법재판소의 조직과 운영
          기타 필요한 사항은 법률로 정한다. 국정감사 및 조사에 관한 절차 기타
          필요한 사항은 법률로 정한다. 각급 선거관리위원회의 조직·직무범위 기타
          필요한 사항은 법률로 정한다. 행정각부의 장은 국무위원 중에서
          국무총리의 제청으로 대통령이 임명한다.
        </Description>
      </Content>
    </Container>
  );
}

const Container = styled.div``;

const Thumb = styled.div`
  width: 100%;
  height: 190px;
  margin-bottom: 14px;
  background-color: ${themeVar.on_background};
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
  span {
    color: ${themeVar.on_surface_elevated};
  }
`;

const Info = styled.div`
  padding: 12px;
  margin-bottom: 12px;
  background: ${themeVar.on_background_elevated};
  border-radius: 5px;
  font-size: 12px;
`;

const Description = styled.div`
  font-size: 14px;
`;

export default DetailContainer;
