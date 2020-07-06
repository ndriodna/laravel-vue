<template>
	<div>
		<div class="flex justify-center mt-5 grid grid-cols-3 gap-3">
			<div v-for="berita in beritas" :key="berita.id" class="max-w-sm rounded overflow-hidden shadow-lg">
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2">{{ berita.judul }}</div>
					<div class="text-sm p-4">
						<p class="text-gray-700 leading-none">By {{ berita.penulis }}</p>
					</div>
					<p class="text-gray-700 text-base">{{ berita.isi.substring(0,150)+"..." }}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import BeritaApi from '../ServicesAPI/BeritaApi.js'
	export default{
		data(){
			return{
				beritas:[]
			}
		},
		created(){
			BeritaApi.getBerita().then(response=>{
				this.beritas = response.data
			})
		},
		methods:{

		}
	}
</script>