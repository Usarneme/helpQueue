import { Link } from 'react-router-dom'

import Header from './../components/Header'
import Footer from './../components/Footer'

function Home() {
  return (
    <>
      <div className='container'>
        <Header title='Welcome to the Ticket Queue' />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <Link to='/account' className='linkStyles'>Account</Link>
          <Link to='/tickets' className='linkStyles'>Tickets</Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
