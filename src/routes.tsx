import { createBrowserRouter } from 'react-router-dom'
import {
  Home,
  Login,
  Register,
  Landing,
  Error,
  ProtectedRoute,
  Dashboard,
} from './pages'
import { action as registerAction } from './domain/auth/RegisterForm'
import { action as loginAction } from './domain/auth/LoginForm'

export const router = createBrowserRouter([
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
  {
    path: 'dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
])
