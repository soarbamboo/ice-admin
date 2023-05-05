export default {
  dev: {
    '/api/': {
      // 要代理的地址
      target: 'http://127.0.0.1:8090/',
      // 配置了这个可以从 http 代理到 https
      // 依赖 origin 的功能可能需要这个，比如 cookie
      // changeOrigin: true,
    },
  },
  pre: {
    '/api/': {
      target: 'https.://api.netbugs.cn/',
      changeOrigin: true,
    },
  },
};
