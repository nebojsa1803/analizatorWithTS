import styles from './Login.module.css'
import LoginForm from '../../domain/auth/LoginForm'

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <LoginForm />
    </div>
  )
}

export default Login
