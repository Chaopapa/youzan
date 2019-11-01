module.exports = {
  runtimeCompiler: false,
  devServer: {
    // 配置项目的正向代理
    proxy: {//http-proxy-middleware
      '/api': {
        target: 'http://www.littleemmayang.com:8000',
        changeOrigin: true
      }
    }
  }
}