// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取当前的用户 GET /api/common/getToken */
export async function getUploadToken(options?: { [key: string]: any }) {
    return request<API.Result>('http://localhost:8090/api/common/getToken', {
        method: 'GET',
        ...(options || {}),
    });
}