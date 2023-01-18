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
