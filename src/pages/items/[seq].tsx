import DetailContainer from '@/components-pages/detail';
import DetailLayout from '@/components-shared/layouts/DetailLayout';
import ThemeButton from '@/components-shared/buttons/ThemeButton';

export default function DetailPage() {
  return (
    <DetailLayout hasBackButton headerRight={<ThemeButton />}>
      <DetailContainer />
    </DetailLayout>
  );
}
