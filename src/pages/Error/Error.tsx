import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom'
import img from '../../assets/notFound.svg'
import styles from './Error.module.css'
const Error = () => {
  const error = useRouteError()
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <div className={styles.wrapper}>
        <div>
          <img src={img} alt='page not found' />
          <h3>Грешка</h3>
          <p>Не постоји страна коју тражите.</p>
          <Link to='/'>Почетна страна</Link>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <h3>Нешто није у реду</h3>
      </div>
    )
  }
}

export default Error
