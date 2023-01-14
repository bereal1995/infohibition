import client from '@/api/client';
import moment from 'moment';

const SERVICE_KEY = process.env.NEXT_PUBLIC_API_KEY;
type PerformanceType = 'period' | 'area' | 'realm';
interface PerformanceParams {
  from: string;
  to: string;
  cPage: number;
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

export async function getPerformanceDisplay(
  type: PerformanceType = 'period',
  params: PerformanceParams = {
    from: moment().subtract(6, 'month').format('YYYYMMDD'),
    to: moment().format('YYYYMMDD'),
    cPage: 1,
    rows: 10,
    place: '',
    gpsxfrom: '',
    gpsyfrom: '',
    gpsxto: '',
    gpsyto: '',
    keyword: '',
    sortStdr: 1,
  }
) {
  const result = await client.get(`/${type}`, {
    params: {
      ServiceKey: SERVICE_KEY,
      ...params,
    },
  });
  return result.data;
}
