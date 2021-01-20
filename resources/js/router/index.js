import Vue from "vue"
import vueRouter from "vue-router"

import BeritaList from "../views/BeritaList.vue"
import BeritaHome from "../views/BeritaHome.vue"
import BeritaTambah from "../views/BeritaTambah.vue"
import BeritaUpdate from "../views/BeritaUpdate.vue"

import Login from "../views/auth/Login.vue"
import Register from "../views/auth/Register.vue"
Vue.use(vueRouter);

const routes = [
{
	// redirect home
	path:"*",
	redirect:"/"
},
{
	path:"/Login",
	name:"Login",
	component: Login
},
{
	path:"/Register",
	name:"Register",
	component: Register
},
{
	path: "/",
	name: "berita-home",
	component: BeritaHome
},
{
	path: "/berita/list",
	name: "berita-list",
	component: BeritaList,
	props:true
},
{
	path:"/berita/tambah",
	name:"berita-tambah",
	component: BeritaTambah
},
{
	path:"/berita/update/:id",
	name:"berita-update",
	component:BeritaUpdate,
	props:true
}
];

const router = new vueRouter({
	mode:"history",
	routes
})
router.beforeEach((to, from, next)=>{
	const LoginPage = ['/Login','/Register','/']
	const authRequired = !LoginPage.includes(to.path)
	const Logged = localStorage.getItem('toke')

	if (authRequired && !Logged) {
		return next('/login')
	}
	next()
})
export default router