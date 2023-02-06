import { RealmNamesType } from '@/constants/items';

interface PerforInfo {
  seq: string;
  title: string;
  startDate: string;
  endDate: string;
  place: string;
  realmName: RealmNamesType;
  area: string;
  subTitle: string;
  contents1: string;
  contents2: string;
  url: string;
  phone: string;
  imgUrl: string;
  gpsX: string;
  gpsY: string;
  placeUrl: string;
  placeAddr: string;
  placeSeq: string;
  price: string;
}
export interface PerforInfoItem {
  seq: string;
  perforInfo: PerforInfo;
}
