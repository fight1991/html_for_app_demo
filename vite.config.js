import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
      libs: [
        {
          libraryName: '@nutui/nutui',
          libraryNameChangeCase: 'pascalCase',
          resolveStyle: (name) => {
            return `@nutui/nutui/dist/packages/${name}/index.scss`
          }
        }
      ],
    }),
    
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // 配置 nutui 全局 scss 变量
        additionalData: `@import "./src/style/custom_theme.scss";@import "@nutui/nutui/dist/styles/variables.scss";`
      }
    }
  },
  server: {
    open: true,
    host: '0.0.0.0',
    https: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "components": path.resolve(__dirname, "src/components"),
      "styles": path.resolve(__dirname, "src/styles"),
      "plugins": path.resolve(__dirname, "src/plugins"),
      "views": path.resolve(__dirname, "src/views"),
      "utils": path.resolve(__dirname, "src/utils"),
      "apis": path.resolve(__dirname, "src/apis"),
    },
    // 忽略扩展名
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.less', 'css']
  }
})
