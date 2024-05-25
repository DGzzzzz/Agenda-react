import { Provider } from 'react-redux'

import EstiloGlobal from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import store from './store/reducers'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo-cadastro',
    element: <Cadastro />
  },
  {
    path: '/novo-cadastro/:id',
    element: <Cadastro />
  }
])

const App = () => {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <RouterProvider router={rotas} />
    </Provider>
  )
}

export default App
