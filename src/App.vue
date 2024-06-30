<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteTitle from './components/SiteTitle.vue'
import SiteNav from './components/SiteNav.vue'
</script>

<template>
	<main class="bg-gray-300 p-6 md:w-[50rem] md:rounded w-full">
		<SiteTitle title="Info Site" />
		<SiteNav />
		<header>
			<div class="wrapper">
				<HelloWorld msg="You created it!" subtitle="A great site" />
			</div>
		</header>

		<RouterView />
	</main>
</template>
