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
		path: '/clientes',
		name: 'clientes',
		component: ClienteForm
	},
    {
		path: '/fornecedores',
		name: 'fornecedores',
		component: FornecedorForm
	},
]

const router = new VueRouter({
    routes,
    mode: 'history'
  })

export default router;