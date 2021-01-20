import axios from 'axios'

const authServices = axios.create({
	baseURL:'http://laravel-vue.test/api/auth'
})

export default{
	Login(user){
		return authServices.post('/login',{
			email: user.email,
			password: user.password
		}).then(response=>{
			if (response.data.token) {
				localStorage.setItem('token', JSON.stringify(response.data.token))
			}
			return response.data
		})
	},
	Register(user){
		return authServices.post('/register',{
			name: user.name,
			email: user.email,
			password: user.password,
		})
	},
	Logout(){
		localStorage.removeItem('token')
	}
}