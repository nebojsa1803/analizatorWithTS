import { useNavigation, Form } from 'react-router-dom'
import { toast } from 'react-toastify'
import { redirect } from 'react-router-dom'
import Input from '../../components/Input/Input'
import styles from './../../pages/Register/Register.module.css'

// what register form needs to do
export const action = async ({ request }) => {
  //always must return somthing, even null

  console.log(request)
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
    toast.error('Repeated password must be the same as password.')
    return null
  }
  if (password.length < 5) {
    toast.error('Password must be at least 5 characters long.')
    return null
  }
  //if everything is ok
  //later this must insert user in database
  toast.success('Hello. You are successfully registred.')
  console.log(data)
  return redirect('/')
}

const RegisterForm = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
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
  )
}

export default RegisterForm
