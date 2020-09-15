import BeritaApi from "../../ServicesAPI/BeritaApi.js"
export const namespaced = true

export const state ={
	beritas:[],
	berita:{}
}
export const getters ={
	getBeritaById: (state) => (id) => {
    return state.beritas.find(berita => berita.id === id)
  }
}
export const mutations = {
	HOME_BERITA(state,beritas){
		state.beritas = beritas
	},
	ADD_BERITA(state,berita){
		state.beritas.push(berita)
	},
	LIST_BERITA(state,beritas){
		state.beritas = beritas
	},
	SHOW_BERITA(state,berita){
		state.berita = berita
	},
	UPDATE_BERITA(state,berita){
		state.beritas.push(berita)
	}
}

export const actions = {
	fetchBerita({commit}){
		BeritaApi.getBerita()
		.then(response=>{
				commit('HOME_BERITA',response.data)
			})
		.catch(error =>{
			console.log('error',error.response)
		})
	},
	addBerita({commit},berita){
		BeritaApi.tambahBerita(berita)
		.then(response=>{
			commit('ADD_BERITA',berita)
		})
		.catch(error =>{
			console.log('error',error.response)
		})
	},
	showBerita({commit,getters},id){
		var berita = getters.getBeritaById(id)
		if (berita) {
			commit('SHOW_BERITA',berita)
		}else{
		BeritaApi.editBerita(id)
		.then(response=>{
			commit('SHOW_BERITA',response.data)
		})
		.catch(error=>{
			console.log('error',error.response)
		})
		}
	},
	updateBerita({commit,state},id){
		BeritaApi.updateBerita(id,state.berita)
		.then(response=>{
			commit('UPDATE_BERITA',response.data)
		})
		.catch(error=>{
			console.log('error',error.response)
		})
	},
	 // updateBerita({ state, commit }, id,berita) {
  //       return new Promise((resolve, reject) => {
  //           BeritaApi.updateBerita(id, berita)
  //           .then((response) => {
  //               commit('UPDATE_BERITA')
  //               resolve(response.data)
  //           })
  //       })
  //   },
	deleteBerita({dispatch},id){
		BeritaApi.deleteBerita(id)
		.then(response=>{
			if (response.status === 200) {
				console.log('success')
			}
			dispatch('fetchBerita')
		})
	}
}
// export default{
// 	namespaced:true,
// 	state,
// 	mutations,
// 	actions
// }