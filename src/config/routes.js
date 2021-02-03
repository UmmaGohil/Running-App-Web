import Home from '../pages/Home'
import Add from '../pages/Add'
import Edit from '../pages/Edit'
import View from '../pages/View'
import Route from '../pages/Route'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    name: Home,
  },
  {
    path: '/Home',
    exact: true,
    component: Home,
    name: Home,
  },
  {
    path: '/Add',
    exact: true,
    component: Add,
    name: Add,
  },
  {
    path: '/Edit',
    exact: true,
    component: Edit,
    name: Edit,
  },
  {
    path: '/View',
    exact: true,
    component: View,
    name: View,
  },
  {
    path: '/Route',
    exact: true,
    component: Route,
    name: Route,
  },
]

export default routes
