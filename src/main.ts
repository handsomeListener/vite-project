
// 必须导入以下语句以触发 SVG 注册逻辑
import 'virtual:svg-icons-register'
import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/Global/index.ts'

const app = createApp(App)

app.use(components).mount('#app')
