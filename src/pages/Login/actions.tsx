import { redirect } from 'react-router-dom'
import { toast } from 'react-toastify'

export const action = async ({ request }) => {
  // what register form needs to do

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
  //later, this must check is this user in db
  toast.success('Hello User')
  console.log(data)
  return redirect('/')
}
