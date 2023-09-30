import { useDispatch, useSelector } from 'react-redux'
import { logUserOut } from '../../feature/users/usersSlice'
import Avatar from '../../components/Avatar/Avatar'
import { RootState } from '../../store'

const Dashboard = () => {
  const { currentUser } = useSelector((store: RootState) => store.users)

  const firstNameInitial = currentUser.firstName[0]

  const dispatch = useDispatch()

  return (
    <div>
      Dashboard
      <button
        className='btn'
        onClick={() => {
          dispatch(logUserOut())
        }}
      >
        Log Out
      </button>
      <Avatar firstNameInitial={firstNameInitial} />
    </div>
  )
}

export default Dashboard
