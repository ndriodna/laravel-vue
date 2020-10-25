import Vue from "vue"
import vueRouter from "vue-router"

import BeritaList from "../views/BeritaList.vue"
import BeritaHome from "../views/BeritaHome.vue"
import BeritaTambah from "../views/BeritaTambah.vue"
import BeritaUpdate from "../views/BeritaUpdate.vue"
Vue.use(vueRouter);

const routes = [
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
export default router