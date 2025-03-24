interface Response<T = any> {
	code: number;
	message: string | undefined;
	data: T;
}

// 扩展 AxiosResponse 类型
declare module 'axios' {
	interface AxiosResponse<T = any, D = any> extends Response<T> {}
}

import axios, { AxiosResponse } from 'axios';

//创建axios实例
const http = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	timeout: 5000
});
//请求拦截
http.interceptors.request.use((config) => {
	return config;
});

//响应拦截
http.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error) => {
		let message = '';
		const status = error.response.status;
		switch (status) {
			case 401:
				message = 'TOKEN过期';
				break;
			case 403:
				message = '无权访问';
				break;
			case 404:
				message = '请求地址错误';
				break;
			case 500:
				message = '服务器出现问题';
				break;
			default:
				message = '网络出现问题';
				break;
		}
		//提示错误信息
		console.log(message);
		return Promise.reject(error);
	}
);
//对外暴露
export default http;
