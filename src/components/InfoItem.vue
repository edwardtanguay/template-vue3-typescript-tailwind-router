<template>
	<div class="flex gap-4 mt-3 bg-gray-200 p-5 rounded w-full md:w-fit">
		<div class="text-4xl text-gray-700">
			<slot name="icon"></slot>
		</div>
		<div class="flex flex-col">
			<h3 class="font-semibold text-xl mb-1">
				<slot name="heading"></slot>
			</h3>
			<slot></slot>
		</div>
	</div>
</template>
