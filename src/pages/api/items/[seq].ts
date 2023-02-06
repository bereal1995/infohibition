import { PerformanceDisplay } from '@/types/items';
import type { NextApiRequest, NextApiResponse } from 'next';
import xml2js from 'xml2js';

let setQuery = (params: any) =>
  Object.keys(params)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');

const BASE_URL =
  process.env.BASE_URL ??
  'http://www.culture.go.kr/openapi/rest/publicperformancedisplays';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.query;
  const url = `${BASE_URL}/d/?${setQuery(query)}`;

  const response = await fetch(url);
  const xmlData = await response.text();

  let data = {};
  const parser = new xml2js.Parser({ explicitArray: false });
  parser.parseString(xmlData, (err, result) => {
    data = result?.response?.msgBody as PerformanceDisplay;
  });

  res.status(200).json({ ...data });
}
