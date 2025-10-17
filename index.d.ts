// index.d.ts
export interface Country {
  id: number;
  name: string;
  shortName: string;
  code: string;
  flag: string;
}

export function getAllCountries(): Country[];
export function getCountryById(id: number): Country | undefined;
export function getCountryByName(name: string): Country | undefined;
export function getCountryByShortName(shortName: string): Country | undefined;
export function getCountryByCode(code: string): Country | undefined;