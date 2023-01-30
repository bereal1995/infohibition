export const REALM_CODE = {
  THEATER: 'A000',
  MUSIC: 'B000',
  DANCING: 'C000',
  CULTURE: 'D000',
  CONSTRUCT: 'E000',
  VIDEO: 'G000',
  LITERATURE: 'H000',
  FESTIVAL: 'I000',
  SPACE: 'J000',
  ETC: 'L000',
} as const;
export type RealmCodeType = typeof REALM_CODE[keyof typeof REALM_CODE];

export const SORT = {
  REG_DATE: '1',
  TITLE: '2',
  LOCATION: '3',
} as const;
export type SortType = typeof SORT[keyof typeof SORT];
