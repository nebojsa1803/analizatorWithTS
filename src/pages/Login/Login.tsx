import styles from './Login.module.css'
import { Form, redirect, useNavigation } from 'react-router-dom'
import { toast } from 'react-toastify'
import Input from '../../components/Input'

// export const action = async ({ request }) => {
//   const formData = await request.formData()
//   const data = Object.fromEntries(formData)

//   const { email, password } = data
//   //checking input values
//   if (!email || !password) {
//     toast.error('Please provide all values.')
//     return null
//   }
//   if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
//     toast.error('Please provide valid email address.')
//     return null
//   }

//   //if everything is ok
//   toast.success('Hello User')
//   console.log(data)
//   return redirect('/')
// }

const Login = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <div className={styles.wrapper}>
      <Form className='form' method='POST'>
        <h4 className={styles.heading}>Login</h4>

        <Input inputName='email' inputType='text' labelText='Email' />
        <Input inputName='password' inputType='password' labelText='Password' />

        <button type='submit' className='btn btn-block' disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </Form>
    </div>
  )
}

export default Login
