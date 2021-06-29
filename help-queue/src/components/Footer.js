import { ImTicket } from 'react-icons/im';

function Footer() {
  const footerStyle = {
    backgroundColor: 'rgb(76, 195, 255)',
    marginTop: '120px',
    padding: '10px',
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <div style={footerStyle}>
      <ImTicket alt='a ticket' style={{ fontSize: '30px' }} />
      <h3>Ticket Queue</h3>
      <span>&nbsp;-&nbsp;</span>
      <p>&copy; 2021 Ahmed, Carlos, & Tom</p>
    </div>
  )
}

export default Footer;
