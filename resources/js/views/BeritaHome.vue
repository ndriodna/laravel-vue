<template>
	<div>
		<div class="flex justify-center mt-5 grid grid-cols-3 gap-2">
			<div v-for="berita in berita.beritas" :key="berita.id" class="max-w-sm rounded overflow-hidden shadow-lg">
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2">{{ berita.title }}</div>
					<div class="text-sm p-4">
						<p class="text-gray-700 leading-none">By {{ berita.user }}</p>
					</div>
					<p class="text-gray-700 text-base">{{ berita.body}}</p>
				</div>
				<span>{{auth.token}}</span>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	import {mapState,mapActions} from 'vuex'
	export default{
		created(){
			// this.$store.dispatch('fetchBerita')
			this.fetchBerita()
			console.log(localStorage.getItem('token'))
		},
		computed: {
			...mapState(['berita','auth']),
		},
		methods: {
			...mapActions('berita',['fetchBerita']),
		}

	}
	// import BeritaApi from '../ServicesAPI/BeritaApi.js'
	// export default{
	// 	data(){
	// 		return{
	// 			beritas:[]
	// 		}
	// 	},
	// 	created(){
	// 		BeritaApi.getBerita().then(response=>{
	// 			this.beritas = response.data
	// 		})
	// 	},
	// 	methods:{
	// 	}
	// }
</script>