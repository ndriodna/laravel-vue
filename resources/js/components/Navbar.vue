<template>
	<div>
		<nav class="flex items-center justify-between flex-wrap bg-teal-300 p-6">
			<div class="flex items-center text-white mr-6">
		<span class="font-semibold text-xl tracking-tight">Laravue</span>
			</div>
		<div class="w-full block flex-grow lg:flex lg:item-center lg:w-auto">
			<div class="text-sm lg:flex-grow">
				<router-link class="block text-teal-100 hover:text-white mr-4 lg:inline-block" :to="{name:'news'}">News</router-link>
				<router-link class="block text-teal-100 hover:text-white mr-4 lg:inline-block" to="/edit">Edit</router-link>
			</div>
		</div>
		</nav>
	</div>
</template>