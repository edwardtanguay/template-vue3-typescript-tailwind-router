<script setup lang="ts">
import SiteTitle from './components/SiteTitle.vue'
import SiteNav from './components/SiteNav.vue'
</script>

<template>
	<main class="bg-gray-300 p-6 md:w-[50rem] md:rounded w-full">
		<SiteTitle title="Info Site" />
		<SiteNav />
		<router-view />
	</main>
</template>
