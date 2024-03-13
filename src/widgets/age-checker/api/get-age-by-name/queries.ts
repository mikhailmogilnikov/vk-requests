import { queryOptions } from '@tanstack/react-query';
import { getAgeByName } from './get-age-by-name';

export const getAgeByNameQueries = (name: string) =>
  queryOptions({
    queryKey: ['age_by_name', name],
    queryFn: ({ signal }) => getAgeByName(name, signal),
    enabled: false,
    retry: false,
  });
