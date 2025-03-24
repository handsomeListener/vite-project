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
		<div class="example-item">
			<div class="example-item-title">MomentJs</div>
			<div class=example-item-content>时间：{{ time }}</div>
		</div>
		<div class="example-item">
			<div class="example-item-title">LodashJs</div>
			<div class=example-item-content>数组1：{{ array1 }}，数组2:{{ array2 }}，数组1的值不在数组2的有：{{ array }}</div>
		</div>
		<div class="example-item">
			<div class="example-item-title">AnimateCss</div>
			<div class=example-item-content><span :class="['animate', { 'animate__hinge': flag }]" @mouseenter="flag = true" @mouseleave="flag = false">鼠标放上来</span></div>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { getUserInfo } from '@/api/user.ts';
import userStore from '@/store/user.ts';
import SvgIcon from '@/components/Global/SvgIcon.vue';
import moment from 'moment';
import { difference } from 'lodash';

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
		const time = moment().format('YYYY-MM-DD');
		const array1 = [1, 3, 5]
		const array2 = [2, 3, 4]
		const array = difference(array1, array2);
		const flag = ref(false);
		return {
			keyword,
			userInfo,
			user,
			time,
			array,
			array1,
			array2,
			flag,
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
		.example-item-content {
			.animate {
				display: inline-block;
				cursor: pointer;
				color: skyblue;
				text-decoration: underline;
				padding-left: 20px;
			}
		}
	}
}
</style>