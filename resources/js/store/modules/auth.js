import AuthAPI from "../../ServicesAPI/AuthAPI.js"
export const namespaced = true

const token = localStorage.getItem('token')
const statusToken = token ? {status : {loggedUser : true},token} : {status:{loggedUser:false},token:null}

export const state={
	statusToken,
	newUsers:[]
}
export const mutations = {
	LOGIN_SUCCESS(state,status){
		state.status.loggedUser = true
		state.token = token
	},
	LOGGIN_FAIL(state,status){
		state.status.loggedUser = false
	},
	REGISTER(state,newUser){
		state.newUser.push(newUsers)
	},
	REGISTER_SUCCESS(state){
		state.status.loggedUser = false
	},
	REGISTER_FAILE(state){
		state.status.loggedUser = false
	}
}
export const actions = {
	login({commit},user){
		AuthAPI.Login(user).then(response=>{
			commit('LOGIN_SUCCESS',user)
		}).catch(error=>{
			console.log(error.response)
		})
	}
}