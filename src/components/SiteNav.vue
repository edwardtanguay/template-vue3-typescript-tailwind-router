<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
	<nav class="bg-gray-400 flex gap-2 px-2 pb-1 pt-1 md:pt-0 rounded mb-3">
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/about">About</RouterLink>
	</nav>
</template>

<style scoped lang="scss">
nav {
	a.router-link-active {
		font-weight: bold;
	}
}
</style>
