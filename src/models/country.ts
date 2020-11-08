import data from '../data.json';

export type Order = 'asc' | 'desc';

export interface Country {
  country: string;
  code: string;
  vat: number;
}

function sort(o: Order, d: Country[]): Country[] {
  switch (o) {
    case 'asc':
      return d.sort((a, b) => a.vat - b.vat);
    case 'desc':
      return d.sort((a, b) => b.vat - a.vat);
    default:
      throw Error('Bad order parameter');
  }
}

function filter(q: string, v: string): boolean {
  return v.indexOf(q) >= 0;
}

export default function query(q: string, o: Order): Country[] {
  return sort(
    o,
    (data as Country[]).filter((x) => filter(q, x.country) || filter(q, x.code)),
  );
}
