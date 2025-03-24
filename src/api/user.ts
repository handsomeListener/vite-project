import http from '@/api/index.ts'

export function getUserInfo() {
    return http.get('/user/info')
}

