
// 必须导入以下语句以触发 SVG 注册逻辑
import 'virtual:svg-icons-register'
import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/Global/index.ts'
import router from '@/router/router.ts'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import pinia from '@/store';

const app = createApp(App)

app.use(components).use(router).use(ElementPlus).use(pinia).mount('#app')
