export const REALM_ALL = {
  code: 'ALL',
  name: '전체',
} as const;

export const REALM_NAMES = [
  '건축',
  '문화정책',
  '무용',
  '기타',
  '미술',
  '문학',
  '음악',
  '축제문화공간',
  '연극',
  '영상',
] as const;
export type RealmNamesType = typeof REALM_NAMES[number];

export const REALM_CODES = [
  'A000',
  'B000',
  'C000',
  'D000',
  'E000',
  'G000',
  'H000',
  'I000',
  'J000',
  'L000',
] as const;
export type RealmCodesType = typeof REALM_CODES[number];

export const REALM_OBJ = REALM_NAMES.reduce((acc, realmName, index) => {
  acc[REALM_CODES[index]] = realmName;
  return acc;
}, {} as Record<RealmCodesType, RealmNamesType>);

export type SortType = '1' | '2' | '3';
export const SORT_NAMES: Record<SortType, string> = {
  ['1']: '등록일순',
  ['2']: '공연명순',
  ['3']: '지역순',
} as const;
