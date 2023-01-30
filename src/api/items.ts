import client from '@/api/client';
import moment from 'moment';

import {
  PerforInfoItem,
  PerformanceParams,
  PerformanceType,
} from '@/types/items';

const SERVICE_KEY = process.env.NEXT_PUBLIC_API_KEY;

const getItemsDefaultParams: Partial<PerformanceParams> = {
  from: moment().format('YYYYMMDD'),
  rows: 10,
  place: '',
  gpsxfrom: '',
  gpsyfrom: '',
  gpsxto: '',
  gpsyto: '',
  keyword: '',
};

export const getItems = async (
  type: PerformanceType = 'period',
  params?: Partial<PerformanceParams>
) => {
  console.log('type', type);
  const result = await client.get(`/items`, {
    params: {
      ServiceKey: SERVICE_KEY,
      type,
      ...getItemsDefaultParams,
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
