import { apiClientUserAge } from '@/shared/api/base';
import { UserAgeResponse } from '../../model/user-age.type';

export const getAgeByName = async (name: string, signal: AbortSignal) => {
  const response = await apiClientUserAge.get<UserAgeResponse>(
    '',
    { name },
    { signal },
  );
  return response;
};
