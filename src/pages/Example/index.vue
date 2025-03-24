<template>
	<div class="example-index">
		<div class="example-item">
			<div class="example-item-title">
				ElementPlus:
			</div>
			<div class="example-item-content">
				<el-input v-model="keyword" />
			</div>
		</div>
		<div class="example-item">
			<div class="example-item-title">
				MockJs
			</div>
			<div class="example-item-content">
				用户名：{{ userInfo.username }}，密码：{{ userInfo.password }}
			</div>
		</div>
		<div class="example-item">
			<div class="example-item-title">
				Pinia:
			</div>
			<div class="example-item-content">
				用户名：{{ user.userInfo.username }}，密码：{{ user.userInfo.password }}
			</div>
		</div>
		<div class="example-item">
			<div class="example-item-title">
				SvgIcon:
			</div>
			<div class="example-item-content">
				<svg-icon name="dog" />
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { getUserInfo } from '@/api/user.ts';
import userStore from '@/store/user.ts';
import SvgIcon from '@/components/Global/SvgIcon.vue';

export default defineComponent({
	name: 'index',
	components: { SvgIcon },
	setup() {
		const keyword = ref('');
		const userInfo = ref({
			username: '',
			password: ''
		});
		const user = userStore()
		getUserInfo().then(res => {
			if(res.code === 200) {
				const data = res.data;
				userInfo.value.username = data.username;
				userInfo.value.password = data.password;
				user.updateUserInfo(data)
			}
		});
		return {
			keyword,
			userInfo,
			user
		}
	}
});
</script>

<style scoped lang="scss">
.example-index {
	height: 100%;
	width: 100%;
	.example-item {
		margin-top: 10px;
		.example-item-title {
			font-weight: bold;
			padding-bottom: 5px;
		}
	}
}
</style>