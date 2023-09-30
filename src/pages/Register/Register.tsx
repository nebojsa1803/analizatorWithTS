import styles from './Register.module.css'
import RegisterForm from '../../domain/auth/RegisterForm'

const Register = () => {
  if (localStorage.getItem('users') === null) {
    localStorage.setItem('users', '[]')
  }

  return (
    <div className={styles.wrapper}>
      <RegisterForm />
    </div>
  )
}

export default Register
