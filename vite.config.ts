import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as process from 'node:process';
import path from 'path';
import { viteMockServe } from 'vite-plugin-mock';
import vueJsx from '@vitejs/plugin-vue-jsx';

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd());
	return {
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler'
				}
			}
		},
		plugins: [
			vue(),
			vueJsx(),
			viteMockServe(
				{
					mockPath: 'mock', // mock文件夹路径
					enable: command === 'serve' // 只有在开发环境才开启mock
				}
			),
			createSvgIconsPlugin({
				iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
				symbolId: 'icon-[name]',
				svgoOptions: {
					plugins: [
						{ name: 'removeAttrs', params: { attrs: ['class', 'data-name'] } }
					]
				}
			})
		],
		esbuild: {
			jsxFactory: 'h', // 设置 JSX factory function name to 'h' (default in Vue)
			jsxFragment: 'Fragment', // 设置 JSX fragment name to 'Fragment' (default in Vue)
			jsxInject: `import { h, Fragment } from 'vue';` // 注入必要的导入语句到每个 JSX 文件顶部
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src')
			}
		}
		// server: {
		// 	port: "8088",
		// 	proxy: {
		// 		[env.VITE_API_BASE_URL]: {
		// 			target: env.VITE_API_URL,
		// 			changeOrigin: true, // 需要代理跨域
		// 			rewrite: path => {
		// 				return path.replace(new RegExp('^', env.VITE_API_BASE_URL), '')
		// 			}
		// 		}
		// 	}
		// }
	};
});
