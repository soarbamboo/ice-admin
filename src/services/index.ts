const isDev = process.env.NODE_ENV === 'development';

export const HOST = isDev ? 'http://localhost:8090' : 'https://api.netbugs.cn';

export const UPLOAD_PATH = HOST + '/api/file/upload';
