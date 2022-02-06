import VueRouter from "vue-router";
import Home from './components/Home'
import NovoFornecedor from './pages/NovoFornecedor'
import NovoCliente from './pages/NovoCliente'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/novo-cliente',
		name: 'novoCliente',
		component: NovoCliente
	},
    {
		path: '/novo-fornecedor',
		name: 'novoFornecedor',
		component: NovoFornecedor
	},
]

const router = new VueRouter({
    routes,
    mode: 'history'
  })

export default router;