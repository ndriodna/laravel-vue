import Vue from 'vue';
import Vuex from 'vuex';
// import BeritaApi from "../ServicesAPI/BeritaApi.js"
import * as berita from "./modules/berita.js"
Vue.use(Vuex);

export default new Vuex.Store({
	state:{
	
	},
	modules:{
		berita
	}
 
})