import styled from '@emotion/styled';

import Header from '@/components-shared/header';
import { useGoBack } from '@/hooks/useGoBack';
import HeaderBackButton from '@/components-shared/buttons/HeaderBackButton';

interface Props {
  className?: string;
  hasBackButton?: boolean;
  title?: React.ReactNode;
  headerRight?: React.ReactNode;
  desktopHeaderVisible?: boolean;
  children?: React.ReactNode;
  onGoBack?: () => void;
}

/**
 * 헤더만 포함된 페이지 템플릿
 * 헤더에는 뒤로가기 버튼이 있음
 * 헤더에는 타이틀이 있음
 */
function DetailLayout({
  className,
  hasBackButton,
  title,
  headerRight,
  children,
  onGoBack,
}: Props) {
  const goBack = useGoBack();

  return (
    <>
      <Header
        className={className}
        title={title}
        headerLeft={
          hasBackButton ? (
            <HeaderBackButton onClick={onGoBack ?? goBack} />
          ) : undefined
        }
        headerRight={headerRight}
      />
      <Content>{children}</Content>
    </>
  );
}

const Content = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 450px;
  margin: 0 auto;
`;

export default DetailLayout;
