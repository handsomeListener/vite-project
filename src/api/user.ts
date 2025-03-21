import http from '@/utils/http.ts'

export function getUserInfo() {
    return http.get('/user/info')
}

