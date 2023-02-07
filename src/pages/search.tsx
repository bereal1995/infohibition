import SearchContainer from '@/components-pages/search';
import ThemeButton from '@/components-shared/buttons/ThemeButton';
import DetailLayout from '@/components-shared/layouts/DetailLayout';

export default function Search() {
  return (
    <DetailLayout hasBackButton headerRight={<ThemeButton />}>
      <SearchContainer />
    </DetailLayout>
  );
}
