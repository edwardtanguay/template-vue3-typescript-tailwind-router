<script setup lang="ts">
import InfoItem from '../components/InfoItem.vue'
</script>

<template>
	<main>
		<p>Welcome to this site.</p>

		<InfoItem>
			<template #icon>1</template>
			<template #heading>Vue.js</template>
			<div>This is a template site that runs on Vue 3 created with Vite.</div>
		</InfoItem>

		<InfoItem>
			<template #icon>2</template>
			<template #heading>Slot Components</template>
			<div>These boxes are examples of slots.</div>
		</InfoItem>

		<InfoItem>
			<template #icon>3</template>
			<template #heading>Other Features</template>
			<section class="flex flex-wrap gap-3 mt-2">
				<div class="featureBox">TypeScript</div>
				<div class="featureBox">Tailwind</div>
				<div class="featureBox">Router</div>
				<div class="featureBox">Responsive</div>
				<div class="featureBox">Unit Testing</div>
			</section>
		</InfoItem>
	</main>
</template>

<style scoped lang="scss">
.featureBox {
	border: 1px solid #888;
	background-color: #eee;
	border-radius: 0.3rem;
	padding: 0.1rem 0.4rem 0.2rem 0.4rem;
}
</style>
