<template>
	<svg class="svg-icon">
		<use :xlink:href="`#icon-${name}`" />
	</svg>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'SvgIcon',
	props: {
		name: {
			type: String,
			required: true,
		}
	}
});
</script>

<style scoped lang="scss">

</style>