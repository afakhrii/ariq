import Vue from 'vue'
import Router from 'vue-router'
import Siswa from '@/components/Siswa'
import Kelas from '@/components/Kelas'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/siswa',
		name: 'Siswa',
		components: Siswa
	},
	{
		path: '/kelas',
		name: 'Kelas',
		components: Kelas
	}]
})