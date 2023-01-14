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
  realmName: string[];
  area: string[];
  thumbnail: string[];
  gpsX: string[];
  gpsY: string[];
}
