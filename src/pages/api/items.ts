import { PerformanceDisplay } from '@/types/perfor';
import type { NextApiRequest, NextApiResponse } from 'next';
import xml2js from 'xml2js';

let setQuery = (params: any) =>
  Object.keys(params)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');

const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3000/api';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.query;
  const url = `${BASE_URL}/${query.type}?${setQuery(query)}`;

  const response = await fetch(url);
  const xmlData = await response.text();
  let data = {};
  const parser = new xml2js.Parser();
  parser.parseString(xmlData, (err, result) => {
    data = result?.response?.msgBody[0] as PerformanceDisplay;
  });

  res.status(200).json({ ...data });
}
