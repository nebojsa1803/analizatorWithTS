import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
const Home = () => {
  return (
    <>
      <Navbar />
      <section className='page'>
        <Outlet />
      </section>
    </>
  )
}

export default Home
