import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useSelector((store: RootState) => store.users)

  if (isLoggedIn === false) {
    return <Navigate to='/' />
  }
  return children
}

export default ProtectedRoute
