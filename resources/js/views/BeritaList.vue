<template>
	<div>
	<div class="flex justify-center">
	<router-link :to="{name:'berita-tambah'}" class="bg-blue-500 rounded text-white font-bold py-2 px-4 float-right m-5">Tambah</router-link> 
	</div>
	<div class="rounded px-4 py-2">
	<table class="table-fixed">
		<thead>
			<tr>
				<th class="w-1/4 px-4 py-2">Judul</th>
				<th class="w-1/2 px-4 py-2">Isi</th>
				<th class="w-1/12 px-4 py-2">Action</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="berita in berita.beritas" :key="berita.id">
				<td class="border px-4 py-2">{{ berita.title }}</td>
				<td class="border px-4 py-2">{{ berita.body }}</td>
				<td class="border px-4 py-2 grid gap-3">
					<template v-if="berita">
					<router-link class="bg-orange-700 rounded text-center text-white py-2 px-4 " :to="{path:'berita/update/'+berita.id}">Update</router-link>
					</template>
					<button class="bg-red-700 rounded text-white py-2 px-4" @click="remove(berita.id)">Remove</button>
				</td>
			</tr>
		</tbody>
	</table>
	</div>
	</div>
</template>
<script>
	import {mapState,mapActions} from 'vuex'
	export default{
		props:["id"],
		created(){
			this.fetchBerita()
		},
		computed:{
			...mapState(['berita'])
		},
		methods:{
			...mapActions('berita',['fetchBerita']),
			remove(id){
				this.$store.dispatch('berita/deleteBerita',id)
			}
		}
	}
</script>