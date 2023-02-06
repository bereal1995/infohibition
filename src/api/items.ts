import client from '@/api/client';
import moment from 'moment';

import { PerformanceParams, PerformanceType } from '@/types/items';
import { PerforInfoItem } from '@/types/item';

const SERVICE_KEY = process.env.NEXT_PUBLIC_API_KEY;

const getItemsDefaultParams: Partial<PerformanceParams> = {
  from: moment().format('YYYYMMDD'),
  to: moment().add(1, 'month').format('YYYYMMDD'),
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
  const result = await client.get<PerforInfoItem>(`/items/${seq}`, {
    params: {
      ServiceKey: SERVICE_KEY,
    },
  });
  return result.data;
};
