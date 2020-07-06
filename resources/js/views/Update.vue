<template>
	<div class="m-5">
		<h2 class="font-bold">Tambah Data</h2>
		<form @submit.prevent="updateData" class="w-full">
			<div class="items-center mt-6">
				<div class="mb-2">
					<label class="block text-gray-700 font-bold mb-2">Judul</label>
					<input type="text" class="appearance-none border-2 border-gray-700 rounded w-1/2 py-2 px-4" placeholder="Judul" v-model="judul">
				</div>
				<div class="mb-2">
					<label class="block text-gray-700 font-bold mb-2">Isi</label>
					<textarea class="resize-y border-2 border-gray-700 rounded w-1/2 py-2 px-4" placeholder="Isi" v-model="isi"></textarea>
				</div>
				<div class="mb-2">
					<label class="block text-gray-700 font-bold mb-2">Penulis</label>
					<input type="text" class="resize-y border-2 border-gray-700 rounded w-1/2 py-2 px-4" placeholder="Penulis" v-model="penulis">
				</div>
				<div class="mb-2">
					<label class="block text-gray-700 font-bold mb-2">Date</label>
					<input type="datetime-local" v-model="tgl_terbit" class=" pl-4 pr-10 py-3 leading-none rounded-lg shadow-lg focus:outline-none focus:shadow-outline text-gray-600 font-medium">
				</div>
				<button class="bg-blue-500 text-white rounded px-4 py-2">Simpan</button>
			</div>
		</form>
	</div>
</template>
<script>
	import BeritaApi from '../ServicesAPI/BeritaApi.js'
	export default{
		data(){
			return{
				judul:'',
				isi:'',
				penulis:'',
				tgl_terbit:''
			}
		},
		created(){
			BeritaApi.editBerita(this.$route.params.id)
			.then(response=>{
				this.judul = response.data.judul
				this.isi = response.data.isi
				this.penulis = response.data.penulis
				this.tgl_terbit = response.data.tgl_terbit
			})
		},
		methods:{
			updateData(){
				BeritaApi.updateBerita(this.$route.params.id,{
					judul:this.judul,
					isi:this.isi,
					penulis:this.penulis,
					tgl_terbit:this.tgl_terbit,
				}).then(response=>{
					this.$router.push({name:'news'})
				})
			}
		}
	}
</script>