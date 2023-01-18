import CardList from 'src/components-shared/card/CardList';
import { PerformanceDisplay } from '@/types/perfor';
import styled from '@emotion/styled';

const dummy = [
  {
    seq: ['1'],
    title: ['string'],
    startDate: ['string'],
    endDate: ['string'],
    place: ['string'],
    realMName: ['string'],
    area: ['string'],
    thumbnail: ['string'],
    gpsX: ['12'],
    gpsY: ['12'],
  },
  {
    seq: ['1'],
    title: ['string'],
    startDate: ['string'],
    endDate: ['string'],
    place: ['string'],
    realMName: ['string'],
    area: ['string'],
    thumbnail: ['string'],
    gpsX: ['12'],
    gpsY: ['12'],
  },
  {
    seq: ['1'],
    title: ['string'],
    startDate: ['string'],
    endDate: ['string'],
    place: ['string'],
    realMName: ['string'],
    area: ['string'],
    thumbnail: ['string'],
    gpsX: ['12'],
    gpsY: ['12'],
  },
  {
    seq: ['1'],
    title: ['string'],
    startDate: ['string'],
    endDate: ['string'],
    place: ['string'],
    realMName: ['string'],
    area: ['string'],
    thumbnail: ['string'],
    gpsX: ['12'],
    gpsY: ['12'],
  },
  {
    seq: ['1'],
    title: ['string'],
    startDate: ['string'],
    endDate: ['string'],
    place: ['string'],
    realMName: ['string'],
    area: ['string'],
    thumbnail: ['string'],
    gpsX: ['12'],
    gpsY: ['12'],
  },
];

interface Props {
  data: PerformanceDisplay;
}

function HomeContainer({ data }: Props) {
  return (
    <Container>
      <CardList items={data?.perforList} />
    </Container>
  );
}

const Container = styled.div``;

export default HomeContainer;
