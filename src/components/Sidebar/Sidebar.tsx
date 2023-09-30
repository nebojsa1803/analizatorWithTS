import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BiHomeAlt, BiLogOut } from 'react-icons/bi'
import styles from './Sidebar.module.css'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { logUserOut } from '../../feature/users/usersSlice'

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { currentUser } = useSelector((store: RootState) => store.users)
  const firstNameInitial = currentUser.firstName[0]
  const dispatch = useDispatch()

  if (!isSidebarOpen) {
    return (
      <button
        className={styles.sidebarToggle}
        onClick={() => setIsSidebarOpen(true)}
      >
        <FaBars />
      </button>
    )
  }
  return (
    <aside className={styles.sidebar}>
      {/* Header */}

      <div className={styles.sidebarHeader}>
        <h3>TestAnalizator</h3>
        <button
          className={styles.closeBtn}
          onClick={() => setIsSidebarOpen(false)}
        >
          <FaTimes />
        </button>
      </div>

      {/* Avatar */}

      <div className={styles.avatar}>
        <Avatar firstNameInitial={firstNameInitial} />
      </div>

      {/* Sidebar options */}
      <div className={styles.sidebarOptions}>
        <button
          className={styles.buttonLink}
          onClick={() => dispatch(logUserOut())}
        >
          <span className={styles.icon}>
            <BiLogOut />
          </span>
          <span className={styles.text}>Logout</span>
        </button>

        <button className={styles.buttonLink}>
          <Link to='/'>
            <span className={styles.icon}>
              <BiHomeAlt />
            </span>
            <span className={styles.text}>Home</span>
          </Link>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
