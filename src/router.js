import VueRouter from "vue-router";
import Home from './components/Home'
import ClienteForm from './components/ClienteForm'
import FornecedorForm from './components/FornecedorForm'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/cliente',
		name: 'cliente',
		component: ClienteForm
	},
    {
		path: '/fornecedor',
		name: 'fornecedor',
		component: FornecedorForm
	},
]

const router = new VueRouter({
    routes,
    mode: 'history'
  })

export default router;