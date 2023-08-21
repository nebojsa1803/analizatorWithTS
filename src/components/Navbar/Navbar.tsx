import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navCenter}>
        <span className={styles.logo}>TestAnalizator</span>
        <div className={styles.navLinks}>
          <NavLink to='/' className={styles.navLink}>
            Home
          </NavLink>
          <NavLink to='/login' className={styles.navLink}>
            Login
          </NavLink>
          <NavLink to='/register' className={styles.navLink}>
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
