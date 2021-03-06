/*
 * @Author: your name
 * @Date: 2021-07-28 15:51:41
 * @LastEditTime: 2022-03-27 13:31:42
 * @LastEditors: liliang
 * @Description: In User Settings Edit
 * @FilePath: /score/vite.config.ts
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const path = require('path');
import svgicon from 'vite-plugin-svgicon';

const proxy = {
//  target: 'http://localhost:3000/'
  target: 'https://www.114tm.cn/'
}
export default defineConfig({
  plugins: [vue(), svgicon({
    include: ['**/assets/svg/origin/*.svg']
  })],
  resolve: {
    extensions: ['.js', '.vue', '.ts', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      views: path.resolve(__dirname, './src/views'),
      '@com': path.resolve(__dirname, "./src/components"),
      utils: path.resolve(__dirname, './src/utils'),
      assets: path.resolve(__dirname, "./src/assets"),
      store: path.resolve(__dirname, "./src/store"),
      router: path.resolve(__dirname, './src/router'),
      api: path.resolve(__dirname, './src/api'),
    }
  },
  server: {
    // hostname: '0.0.0.0',
    // hmr: { overlay: false },
    host: "localhost",
    port: 3001,
    // // 是否自动在浏览器打开
    open: true,
    // // 是否开启 https
    // https: false,
    // // 服务端渲染
    // ssr: false,
    cors: true,
    proxy: {
      '/apiv1': {
        target: proxy.target,
        changeOrigin: true,
        followRedirects: true
      },
      '/admins': {
        target: proxy.target,
        changeOrigin: true,
        followRedirects: true
      },
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'static',
    target: 'es2015',
    // sourcemap: 'inline',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vuex', 'vue-router'],
          elementPlus: ['element-plus'],
          axios: ['axios']
        },
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    },
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: true,
        drop_debugger: true
      }
    },
    chunkSizeWarningLimit: 300
  }
});
