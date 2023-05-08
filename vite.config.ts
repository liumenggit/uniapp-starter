import {resolve} from 'path'
import type {ConfigEnv, UserConfig} from 'vite'
import {loadEnv} from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'

// https://vitejs.cn/config/
export default ({mode}: ConfigEnv): UserConfig => {
    const root = process.cwd()
    const env = loadEnv(mode, root)
    // 在控制台输出环境变量
    console.log('当前环境：', env)
    return {
        base: './',
        // 设置路径别名
        resolve: {
            alias: {
                '@': resolve('./src'),
            },
        },
        // 自定义全局变量
        define: {
            'process.env': {},
        },
        server: {
            host: true,
            // open: true,
            port: env.VITE_PORT as unknown as number,
            proxy: {
                // '/api': {
                //   target: env.VITE_BASE_URL,
                //   changeOrigin: true,
                //   rewrite: path => path.replace(/^\/api/, ''),
                // },
                // '/upload': {
                //   target: env.VITE_BASE_URL,
                //   changeOrigin: true,
                //   rewrite: path => path.replace(/^\/upload/, ''),
                // },
            },
        },
        plugins: [
            uni(),
            Unocss(),
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    // additionalData: '@import "@/assets/style/main.scss";',
                },
            },
        },
    }
}
