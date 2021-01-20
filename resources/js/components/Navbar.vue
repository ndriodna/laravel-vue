<template>
	<div>
		<nav class="flex items-center justify-between flex-wrap bg-teal-300 p-6">
			<div class="flex items-center text-white mr-6">
		<span class="font-semibold text-xl tracking-tight">Laravue</span>
			</div>
		<div class="w-full block flex-grow lg:flex lg:item-center lg:w-auto">
			<div class="text-sm lg:flex-grow">
				<router-link class="block text-teal-100 hover:text-white mr-4 lg:inline-block" :to="{name:'berita-home'}">News</router-link>
				<router-link class="block text-teal-100 hover:text-white mr-4 lg:inline-block" :to="{name:'berita-list'}">List</router-link>
				<router-link class="block text-teal-100 hover:text-white mr-4 lg:inline-block float-right" :to="{name:'Login'}">Login</router-link>
				<router-link class="block text-teal-100 hover:text-white mr-4 lg:inline-block float-right" :to="{name:'Register'}">Register</router-link>
			</div>
				<div>
					<a href @click.prevent="logout">Logout</a>
				</div>
		</div>
		</nav>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return{
			}
		},
		methods:{
			logout() {
				localStorage.removeItem('token')
				this.$router.push('/login')
				this.$store.dispatch('berita/fetchBerita')
 		}
		}
	}
</script>