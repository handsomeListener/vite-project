<template>
	<div class="App">
		<svg-icon name="dog" />
	</div>
</template>
<script lang="tsx">
import { defineComponent } from 'vue';
import { getUserInfo } from '@/api/user.ts';
import SvgIcon from '@/components/Global/SvgIcon.vue';

export default defineComponent({
	name: 'App',
	components: { SvgIcon },
	setup() {
		getUserInfo().then(res => {
			if (res.code === 200) {
				console.log(res.data);
			}
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