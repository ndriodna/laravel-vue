<template>
	<div>
		<div class="flex justify-center mt-5">
			<form @submit.prevent="registerUser">
				<h2 class="justify-center">Register</h2>
				<div class="mb-2">
					<label class="block text-gray 700 font-bold mb-2">Username</label>
					<input type="text" class="appearance-none border-2 border-gray-700 rounded w-full py-2 px-4" placeholder="Username" v-model="name">
				</div>
				<div class="mb-2">
					<label class="block text-gray 700 font-bold mb-2">Email</label>
					<input type="email" class="appearance-none border-2 border-gray-700 rounded w-full py-2 px-4" placeholder="@mail" v-model="email">
				</div>
				<div class="mb-2">
					<label class="block text-gray 700 font-bold mb-2">Password</label>
					<input type="password" class="appearance-none border-2 border-gray-700 rounded w-full py-2 px-4" placeholder="password" v-model="password">
				</div>
				<div class="mb-2">
					<button class="bg-blue-500 text-white rounded px-4 py-2">Register</button>
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
			name:'',
			email:'',
			password:''
		}
	},
	methods:{
		registerUser(){
			axios.post("http://laravel-vue.test/api/auth/register",
				{name:this.name, email:this.email, password:this.password},
				{headers: {'X-Requested-With': 'XMLHttpRequest'}})
			.then(()=>{
				console.log('register berhasil')
				// this.$router.push('/')
			}).catch(()=>{
				console.log("ERRRR:: ",error.response.data)
			})
		}
	}

}
</script>