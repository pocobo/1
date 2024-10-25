import { defineApplicationConfig } from '@vben/vite-config';

export default defineApplicationConfig({
  build: {
    outDir: 'docs',
    assetsDir: 'assets', // 静态资源的输出目录，默认是 'assets'
    emptyOutDir: true, // 构建前是否清空输出目录，默认是 true
    rollupOptions: {
      // 自定义底层的 Rollup 打包配置
      output: {
        // 自定义输出配置
      },
    },
  },
  overrides: {
    optimizeDeps: {
      include: [
        'echarts/core',
        'echarts/charts',
        'echarts/components',
        'echarts/renderers',
        'qrcode',
        '@iconify/iconify',
        'ant-design-vue/es/locale/zh_CN',
        'ant-design-vue/es/locale/en_US',
      ],
    },
    server: {
      proxy: {
        '/basic-api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/basic-api`), ''),
          // only https
          // secure: false
        },
        '/upload': {
          target: 'http://localhost:3300/upload',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/upload`), ''),
        },
      },
      open: true, // 项目启动后，自动打开
      warmup: {
        clientFiles: ['./index.html', './src/{views,components}/*'],
      },
    },
  },
});
