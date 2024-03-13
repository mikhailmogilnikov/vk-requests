import { getCatFact } from './get-fact';

export const getCatFactQueries = {
  queryKey: ['cat_fact'],
  queryFn: getCatFact,
  enabled: false,
};
