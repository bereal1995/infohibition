import TabLayout from '@/components-shared/layouts';
import HomeContainer from '@/components-pages/home';
import ThemeButton from '@/components-shared/buttons/ThemeButton';
import SearchButton from '@/components-shared/buttons/SearchButton';
import AsyncBoundaryWithQuery from '@/components-shared/error/AsyncBoundaryWithQuery';

export default function Home() {
  return (
    <TabLayout
      headerRight={
        <>
          <ThemeButton />
          <SearchButton />
        </>
      }
    >
      <AsyncBoundaryWithQuery>
        <HomeContainer />
      </AsyncBoundaryWithQuery>
    </TabLayout>
  );
}
