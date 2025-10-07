// Importar desde @tanstack packages
import { createBrowserHistory } from '@tanstack/history'
import { createRouter, RootRoute, Route, RouterProvider } from '@tanstack/react-router'
import Home from './routes/index'
import Gallery from './routes/gallery'
import Commissions from './routes/commissions'
import Rules from './routes/rules'

// Crear historial y router
const history = createBrowserHistory()

// Definir rutas usando createRouter
const Root: any = new (RootRoute as any)({
  component: ({ Outlet }: any) => <Outlet />,
})

const IndexRoute: any = new (Route as any)({
  getParent: () => Root,
  path: '/',
  component: () => <Home />,
})

const GalleryRoute: any = new (Route as any)({
  getParent: () => Root,
  path: '/gallery',
  component: () => <Gallery />,
})

const CommissionsRoute: any = new (Route as any)({
  getParent: () => Root,
  path: '/commissions',
  component: () => <Commissions />,
})

const RulesRoute: any = new (Route as any)({
  getParent: () => Root,
  path: '/rules',
  component: () => <Rules />,
})

export const router = (createRouter as any)({
  history,
  routeTree: Root.addChildren([IndexRoute, GalleryRoute, CommissionsRoute, RulesRoute]),
})

export function AppRouter() {
  return <RouterProvider router={router} />
}
