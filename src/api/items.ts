import client from '@/api/client';
import moment from 'moment';

import {
  PerforInfoItem,
  PerformanceParams,
  PerformanceType,
} from '@/types/items';

const SERVICE_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getItems = async (
  pageParam: number = 1,
  type: PerformanceType = 'period',
  params: PerformanceParams = {
    from: moment().subtract(6, 'month').format('YYYYMMDD'),
    to: moment().format('YYYYMMDD'),
    cPage: pageParam,
    rows: 10,
    place: '',
    gpsxfrom: '',
    gpsyfrom: '',
    gpsxto: '',
    gpsyto: '',
    keyword: '',
    sortStdr: 1,
  }
) => {
  const result = await client.get(`/items`, {
    params: {
      ServiceKey: SERVICE_KEY,
      type,
      ...params,
    },
  });
  return result.data;
};

export const getItem = async (seq: string) => {
  const result = await client.get<PerforInfoItem>(`/item`, {
    params: {
      ServiceKey: SERVICE_KEY,
      seq,
    },
  });
  return result.data;
};
