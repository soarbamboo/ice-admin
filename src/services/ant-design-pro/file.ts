import { request } from 'umi';
import { HOST } from '..';

/** 获取列表数据 */
export const getList = async (current?: number, pageSize?: number) => {
  return request<any>(HOST + '/api/file/list', {
    method: 'GET',
    params: {
      ...{ current, pageSize },
    },
  });
};
