import { Link } from 'react-router-dom'
import { ImTicket } from 'react-icons/im'
import { BiLogIn } from 'react-icons/bi'
import { VscChecklist } from 'react-icons/vsc'

function Navbar() {

  const navbarStyles = {
    display: 'flex',
    padding: '11px',
    alignItems: 'center',
    borderBottom: '2px solid gray',
    justifyContent: 'space-between',
    background: 'rgba(255,255,255,0.5)'
  }

  return (
    <div style={navbarStyles}>
      <Link to="/"
        style={{ display: 'flex', alignItems: 'center' }}>
        <ImTicket alt='a ticket' style={{ fontSize: '45px' }} />
        <h3 style={{ paddingLeft: '10px' }}>Ticket Queue</h3>
      </Link>
      <Link to="/tickets"
        style={{ display: 'flex', alignItems: 'center' }}>
        <VscChecklist alt='door with an arrow' style={{ fontSize: '45px' }} />
        <h3 style={{ paddingLeft: '10px' }}>Tickets</h3>
      </Link>
      <Link to="/account"
        style={{ display: 'flex', alignItems: 'center' }}>
        <BiLogIn alt='door with an arrow' style={{ fontSize: '45px' }} />
        <h3 style={{ paddingLeft: '10px' }}>Account</h3>
      </Link>
    </div>
  )
}

export default Navbar
