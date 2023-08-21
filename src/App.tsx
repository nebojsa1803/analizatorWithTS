import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, Login, Register, Landing, Error, SinglePageError } from './pages'
import { action as registerAction } from './pages/Register/Register'

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
