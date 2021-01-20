<template>
	<div>
		<div class="flex justify-center mt-5">
			<form @submit.prevent="Login">
				<h2 class="justify-center">LOGIN</h2>
				<div class="mb-2">
					<label class="block text-gray 700 font-bold mb-2">Email</label>
					<input type="email" class="appearance-none border-2 border-gray-700 rounded w-full py-2 px-4" placeholder="@mail" v-model="user.email">
				</div>
				<div class="mb-2">
					<label class="block text-gray 700 font-bold mb-2">Password</label>
					<input type="password" class="appearance-none border-2 border-gray-700 rounded w-full py-2 px-4" placeholder="password" v-model="user.password">
				</div>
				<div class="mb-2">
					<button class="bg-blue-500 text-white rounded px-4 py-2">LOGIN</button>
				</div>
			</form>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
export default{
	data(){
		return{
			user:{
			email:'',
			password:''
		}
		}
	},
	methods:{
		Login(){
			if (this.user.email && this.user.password) {
			this.$store.dispatch('auth/login',this.user)
			.then(response=>{
				this.$router.push('/')
				this.$store.dispatch('berita/fetchBerita')
			})	
			}
		}
	}

}
</script>