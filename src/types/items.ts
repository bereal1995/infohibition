import { RealmCodesType, RealmNamesType, SortType } from '@/constants/items';

export type PerformanceType = 'period' | 'area' | 'realm';
type SidoType =
  | '서울'
  | '경기'
  | '인천'
  | '강원'
  | '충북'
  | '충남'
  | '대전'
  | '세종'
  | '전북'
  | '전남'
  | '광주'
  | '경북'
  | '경남'
  | '대구'
  | '울산'
  | '부산'
  | '제주';

export interface PerformanceParams {
  realmCode?: RealmCodesType;
  sido: SidoType;
  gugun: string;
  from: string;
  to: string;
  cPage: any;
  rows: number;
  place: string;
  gpsxfrom: string | number;
  gpsyfrom: string | number;
  gpsxto: string | number;
  gpsyto: string | number;
  keyword: string;
  sortStdr: SortType;
}

export interface PerformanceDisplay {
  totalCount: string[];
  cPage: string[];
  rows: string[];
  from: string[];
  to: string[];
  place: string[];
  gpsxfrom: string[];
  gpsyfrom: string[];
  gpsxto: string[];
  gpsyto: string[];
  keyword: string[];
  sortStdr: string[];
  perforList: PerforItem[];
}
export interface PerforItem {
  seq: string[];
  title: string[];
  startDate: string[];
  endDate: string[];
  place: string[];
  realmName: RealmNamesType[];
  area: string[];
  thumbnail: string[];
  gpsX: string[];
  gpsY: string[];
}
interface PerforInfo {
  area: string[];
  contents1: string[];
  contents2: string[];
  endDate: string[];
  gpsX: string[];
  gpsY: string[];
  imgUrl: string[];
  phone: string[];
  place: string[];
  placeAddr: string[];
  placeSeq: string[];
  placeUrl: string[];
  price: string[];
  realmName: RealmNamesType[];
  seq: string[];
  startDate: string[];
  subTitle: string[];
  title: string[];
  url: string[];
}
export interface PerforInfoItem {
  seq: string[];
  perforInfo: PerforInfo[];
}
