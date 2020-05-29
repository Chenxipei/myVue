import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/home.vue'

Vue.use(VueRouter)

const routes = [{
	path: '/',
	name: 'Home',
	component: Home
}, {
	path: '/home',
	name: 'Home',
	component: Home
}, {
	path: '/about',
	name: 'About',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: () =>
		import( /* webpackChunkName: "about" */ '../views/About.vue')
}, {
	path: '/audio',
	name: 'Audio',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: () =>
		import( /* webpackChunkName: "about" */ '../views/Audio/audio.vue')
},
{
	path: '/grou',
	name: 'Grou',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: () => import(/* webpackChunkName: "about" */ '../views/Grou/grou.vue')
},
{
	path: '/broadcast',
	name: 'Broadcast',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: () => import(/* webpackChunkName: "about" */ '../views/Broadcast/broadcast.vue'),
	children: [
		{ path: 'film', name: 'Film', component: () => import(/* webpackChunkName: "about" */ '../views/Broadcast/film.vue') },
		{ path: 'read', name: 'Read', component: () => import(/* webpackChunkName: "about" */ '../views/Broadcast/read.vue') },
		{ path: 'tv', name: 'Tv', component: () => import(/* webpackChunkName: "about" */ '../views/Broadcast/tv.vue') },
		{ path: 'city', name: 'City', component: () => import(/* webpackChunkName: "about" */ '../views/Broadcast/city.vue') },
		{ path: 'music', name: 'Music', component: () => import(/* webpackChunkName: "about" */ '../views/Broadcast/music.vue') }
	]
},
{
	path: '/mine',
	name: 'Mine',
	// route level code-splitting
	// this generates a separate chunk (about.[hash].js) for this route
	// which is lazy-loaded when the route is visited.
	component: () => import(/* webpackChunkName: "about" */ '../views/Mine/mine.vue')
}
]

const router = new VueRouter({
	routes
})

export default router