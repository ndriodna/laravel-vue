<template>
	<div>
	<div class="flex justify-center">
	<router-link :to="{name:'tambah'}" class="bg-blue-500 rounded text-white font-bold py-2 px-4 float-right m-5">Tambah</router-link> 
	</div>
	<div class="bg-gray-200 rounded px-4 py-2 shadow-xl">
		
	<table class="table-fixed">
		<thead>
			<tr>
				<th class="w-1/2 px-4 py-2">Judul</th>
				<th class="w-1/2 px-4 py-2">Isi</th>
				<th class="w-1/2 px-4 py-2">Action</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="berita in beritas" :key="berita.id">
				<td class="border border-gray-500 px-4 py-2">{{ berita.judul }}</td>
				<td class="border border-gray-500 px-4 py-2">{{ berita.isi.substring(0,200) }}</td>
				<td class="border border-gray-500 px-4 py-2 grid gap-3">
					<router-link class="bg-orange-700 rounded text-white py-2 px-4 " :to="'/update/'+berita.id">Update</router-link>
					<button class="bg-red-700 rounded text-white py-2 px-4" @click="remove(berita.id)">Remove</button>
				</td>
			</tr>
		</tbody>
	</table>
	</div>
	</div>
</template>
<script>

	import BeritaApi from '../ServicesAPI/BeritaApi.js'

	export default{
		data(){
			return{
				beritas:[],
			}
		},
		created(){
			this.LoadData()
		},
		methods:{
			LoadData(){
				BeritaApi.getBerita().then(response=>{
				this.beritas = response.data
			})
			},
			remove(id){
				BeritaApi.deleteBerita(id).then(response=>{
					this.LoadData()
				})
			}
		}
	}
</script>