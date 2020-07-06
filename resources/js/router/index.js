import Vue from "vue"
import vueRouter from "vue-router"

import Edit from "../views/Edit.vue"
import News from "../views/News.vue"
import Tambah from "../views/Tambah.vue"
import Update from "../views/Update.vue"
Vue.use(vueRouter);

const routes = [
{
	path: "/edit",
	name: "edit",
	component: Edit
},
{
	path: "/",
	name: "news",
	component: News
},
{
	path:"/tambah",
	name:"tambah",
	component: Tambah
},
{
	path:"/update/:id",
	name:"update",
	component:Update
}
];

const router = new vueRouter({
	mode:"history",
	routes
})
export default router