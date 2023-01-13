import Header from '@/components/header';
import FullHeightPage from '@/components/system/FullHeightPage';
import styled from '@emotion/styled';
import MenuIcon from '@/img/header_menu.svg';
import SearchIcon from '@/img/search.svg';
import Button from '@/components/buttons';
import ThemeButton from '@/components/buttons/ThemeButton';

interface Props {
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}
/**
 * 헤더와 푸터가 포함된 페이지 템플릿
 */
function TabLayout({
  headerLeft,
  headerRight,
  title,
  children,
  className,
}: Props) {
  return (
    <FullHeightPage>
      <Header
        title={title}
        headerLeft={
          headerLeft ?? (
            <Button>
              <MenuIcon />
            </Button>
          )
        }
        headerRight={
          headerRight ?? (
            <>
              <ThemeButton />
              <Button>
                <SearchIcon />
              </Button>
            </>
          )
        }
      />
      <Content className={className}>{children}</Content>
      {/* <Footer /> */}
    </FullHeightPage>
  );
}

const Content = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default TabLayout;
