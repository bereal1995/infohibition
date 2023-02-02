import Header from 'src/components-shared/header';
import styled from '@emotion/styled';
import ThemeButton from 'src/components-shared/buttons/ThemeButton';

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
    <>
      <Header
        title={title}
        // headerLeft={
        //   headerLeft ?? (
        //     <Button>
        //       <MenuIcon />
        //     </Button>
        //   )
        // }
        headerRight={
          headerRight ?? (
            <>
              <ThemeButton />
              {/* <Button>
                <SearchIcon />
              </Button> */}
            </>
          )
        }
      />
      <Content className={className}>{children}</Content>
      {/* <Footer /> */}
    </>
  );
}

const Content = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export default TabLayout;
