import axios from 'axios'

const apiClient = axios.create({
	baseURL:'http://laravel-vue.test/api',
	withCredentials:false,
	headers:{
		Accept: 'application/json',
		'Content-type':'application/json'
	}
})

export default{
	getBerita(){
		return apiClient.get('/berita')
	},
	deleteBerita(id){
		return apiClient.delete('/berita/'+id)
	},
	tambahBerita(berita){
		return apiClient.post('/berita',berita)
	},
	editBerita(id){
		return apiClient.get('/berita/'+id)
	},
	updateBerita(id,berita){
		return apiClient.put('/berita/'+id,berita)
	}
}