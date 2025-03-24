import { reactive } from 'vue';
import { defineStore } from 'pinia';
const userStore = defineStore('user', () => {
	const userInfo = reactive({
		username: '',
		password: '',
	})
	function updateUserInfo({ username, password }: { username: string; password: string }) {
		userInfo.username = username
		userInfo.password = password
	}
	return {
		userInfo,
		updateUserInfo
	}
})
export default userStore;