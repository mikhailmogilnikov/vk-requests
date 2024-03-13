import { apiClientCatFacts } from '@/shared/api/base';
import { CatFact } from '../../model/catfact.type';

export const getCatFact = async () => {
  const response = await apiClientCatFacts.get<CatFact>('/fact');
  return response.fact;
};
