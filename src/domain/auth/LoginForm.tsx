import { ActionFunctionArgs, Form, useNavigation } from 'react-router-dom'
import { redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import Input from '../../components/Input/Input'
import styles from './../../pages/Login/Login.module.css'
import { getDataFromLocalStorage } from '../../functions'
import {
  logUserIn,
  logUserOut,
  loggedUserData,
} from '../../feature/users/usersSlice'
import { store } from '../../store'

type User = {
  firstName: string
  lastName: string
  email: string
  password: string
  repeatPassword: string
}

export const action = async ({ request }: ActionFunctionArgs) => {
  //when log in start, previous user must be log out
  store.dispatch(logUserOut())

  const users = getDataFromLocalStorage('users')
  // what register form needs to do
  const formData = await request.formData()
  const email = formData.get('email')?.toString()
  const password = formData.get('password')?.toString()

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
  //later, this must check is this user in db

  const loggedUser = users.filter(
    (user: User) => user.email === email && user.password === password
  )
  if (loggedUser) {
    //can't use useDispatch  outside component, because of that
    //import store, and then store.dispatch
    store.dispatch(logUserIn())
    store.dispatch(loggedUserData(loggedUser))
    toast.success(`Hello, ${loggedUser[0].firstName}`)
    return redirect('/dashboard')
  }
  toast.error('You are not registered')
  return null
}

const LoginForm = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <Form className='form' method='POST'>
      <h4 className={styles.heading}>Login</h4>

      <Input inputName='email' inputType='text' labelText='Email' />
      <Input inputName='password' inputType='password' labelText='Password' />

      <button type='submit' className='btn btn-block' disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </Form>
  )
}

export default LoginForm
