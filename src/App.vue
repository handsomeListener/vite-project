<template>
	<div class="App">
		<router-view v-slot="{ Component }">
			<component :is="Component" />
		</router-view>
	</div>
</template>
<script lang="tsx">
import { defineComponent } from 'vue';
import { getUserInfo } from '@/api/user.ts';

export default defineComponent({
	name: 'App',
	setup() {
		getUserInfo().then(res => {
			if(res.code === 200) {}
		});
	}
});
</script>

<style lang="scss" scoped>
.App {
	width: 100%;
	height: 100%;
	:deep(.svg-icon) {
		font-size: 14px;
	}
}
</style>