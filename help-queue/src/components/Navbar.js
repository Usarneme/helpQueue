import { ImTicket } from 'react-icons/im';

function Navbar() {
  return (
    <div style={{ display: 'flex', padding: '11px', alignItems: 'center', borderBottom: '2px solid gray', justifyContent: 'center', background: 'rgba(255,255,255,0.5)' }}>
      <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
        <ImTicket alt='a ticket' style={{ fontSize: '60px' }} />
        <h1 style={{ paddingLeft: '10px' }}>Ticket Queue</h1>
      </a>
    </div>
  )
}

export default Navbar;
