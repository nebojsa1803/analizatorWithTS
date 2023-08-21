import styles from './Login.module.css'
import { Form, redirect, useNavigation } from 'react-router-dom'
import { toast } from 'react-toastify'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  const { email, password } = data
  //checking input values
  if (!email || !password) {
    toast.error('Please provide all values.')
    return null
  }
  if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    toast.error('Please provide valid email address.')
    return null
  }

  //if everything is ok
  toast.success('Hello User')
  console.log(data)
  return redirect('/')
}

const Login = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <div className={styles.wrapper}>
      <Form className='form' method='POST'>
        <h4 className={styles.heading}>Login</h4>

        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='text' className='form-input' id='email' name='email' />
        </div>
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            name='password'
          />
        </div>

        <button type='submit' className='btn btn-block' disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </Form>
    </div>
  )
}

export default Login
