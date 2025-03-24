<template>
	<div class="App">
		<router-view v-slot="{ Component }">
			<component :is="Component" />
		</router-view>
	</div>
</template>
<script lang="tsx">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'App',
	setup() {
	}
});
</script>

<style lang="scss" scoped>
.App {
	width: 100%;
	height: 100%;
}
</style>