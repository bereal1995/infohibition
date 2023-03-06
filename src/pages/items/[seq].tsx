import DetailContainer from '@/components-pages/detail';
import DetailLayout from '@/components-shared/layouts/DetailLayout';
import ThemeButton from '@/components-shared/buttons/ThemeButton';
import AsyncBoundaryWithQuery from '@/components-shared/error/AsyncBoundaryWithQuery';

export default function DetailPage() {
  return (
    <DetailLayout hasBackButton headerRight={<ThemeButton />}>
      <AsyncBoundaryWithQuery>
        <DetailContainer />
      </AsyncBoundaryWithQuery>
    </DetailLayout>
  );
}
