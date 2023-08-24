import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Login, Register, Landing, Error } from './pages'
import { action as registerAction } from './pages/Register/actions'
import { action as loginAction } from './pages/Login/actions'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction,
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
