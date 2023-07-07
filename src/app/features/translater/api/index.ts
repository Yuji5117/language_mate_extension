import { apiClient } from '../../../lib/axios';

export const translate = async (text = 'hello') => {
  const res = await apiClient.post('', { text });

  const data = await res.data.body;
  return data;
};
