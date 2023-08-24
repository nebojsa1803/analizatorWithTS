import styles from './Register.module.css'
import { Form, useNavigation } from 'react-router-dom'
import Input from '../../components/Input'

const Register = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <div className={styles.wrapper}>
      <Form className='form' method='POST'>
        <h4 className={styles.heading}>Register Here</h4>

        <Input inputName='firstName' inputType='text' labelText='First Name' />
        <Input inputName='lastName' inputType='text' labelText='Last Name' />
        <Input inputName='email' inputType='text' labelText='Email' />
        <Input inputName='password' inputType='password' labelText='Password' />
        <Input
          inputName='repeatPassword'
          inputType='password'
          labelText='Repeat Password'
        />

        <button type='submit' className='btn btn-block' disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </Form>
    </div>
  )
}

export default Register
