import { request } from 'umi';

/** 获取列表数据 */
export const getList = async (current?: number, pageSize?: number) => {
  return request<any>('/api/file/list', {
    method: 'GET',
    params: {
      ...{ current, pageSize },
    },
  });
};
