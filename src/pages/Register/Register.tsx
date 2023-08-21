import styles from './Register.module.css'
import { Form, redirect, useNavigation } from 'react-router-dom'

import { toast } from 'react-toastify'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  const { firstName, lastName, email, password, repeatPassword } = data
  //checking input values
  if (!firstName || !lastName || !email || !password || !repeatPassword) {
    toast.error('Please provide all values.')
    return null
  }
  if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    toast.error('Please provide valid email address.')
    return null
  }
  if (password !== repeatPassword) {
    toast.error('Repeat password must be the same as password.')
    return null
  }
  if (password.length < 5) {
    toast.error('Password must be at least 5 characters long.')
    return null
  }
  //if everything is ok
  toast.success('Hello. You are successfully registred.')
  console.log(data)
  return redirect('/')
}

const Register = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <div className={styles.wrapper}>
      <Form className='form' method='POST'>
        <h4 className={styles.heading}>Register Here</h4>
        <div className='form-row'>
          <label htmlFor='firstName' className='form-label'>
            First Name
          </label>
          <input
            type='text'
            className='form-input'
            id='firstName'
            name='firstName'
          />
        </div>
        <div className='form-row'>
          <label htmlFor='lastName' className='form-label'>
            Last Name
          </label>
          <input
            type='text'
            className='form-input'
            id='lastName'
            name='lastName'
          />
        </div>
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
        <div className='form-row'>
          <label htmlFor='repeatPassword' className='form-label'>
            Repeat Password
          </label>
          <input
            type='password'
            className='form-input'
            id='repeatPassword'
            name='repeatPassword'
          />
        </div>
        <button type='submit' className='btn btn-block' disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </Form>
    </div>
  )
}

export default Register
