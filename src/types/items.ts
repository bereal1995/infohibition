export type PerformanceType = 'period' | 'area' | 'realm';
export interface PerformanceParams {
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
  /**
   * 1: 등록일, 2: 공연명, 3: 지역
   */
  sortStdr: 1 | 2 | 3;
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
  realmName: RealmName[];
  area: string[];
  thumbnail: string[];
  gpsX: string[];
  gpsY: string[];
}

export type RealmName =
  | '건축'
  | '문화정책'
  | '무용'
  | '기타'
  | '미술'
  | '문학'
  | '음악'
  | '축제문화공간'
  | '연극'
  | '영상';

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
  realmName: RealmName[];
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
