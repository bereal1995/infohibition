export const REALM_ALL = {
  code: 'ALL',
  name: '전체',
} as const;

export const REALM_OBJ = {
  A000: '연극',
  B000: '음악',
  C000: '무용',
  D000: '미술',
  E000: '건축',
  G000: '영상',
  H000: '문학',
  I000: '문화정책',
  J000: '축제문화공간',
  L000: '기타',
} as const;
export const REALM_CODES = Object.keys(REALM_OBJ) as RealmCodesType[];
export type RealmCodesType = keyof typeof REALM_OBJ;
export const REALM_NAMES = Object.values(REALM_OBJ) as RealmNamesType[];
export type RealmNamesType = typeof REALM_OBJ[keyof typeof REALM_OBJ];

export const SORT_NAMES = {
  ['1']: '등록일순',
  ['2']: '공연명순',
  ['3']: '지역순',
} as const;
export type SortType = keyof typeof SORT_NAMES;
