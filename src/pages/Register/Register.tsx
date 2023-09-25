import styles from './Register.module.css'
import RegisterForm from '../../domain/auth/RegisterForm'

const Register = () => {
  return (
    <div className={styles.wrapper}>
      <RegisterForm />
    </div>
  )
}

export default Register
