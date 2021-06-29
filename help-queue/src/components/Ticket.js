import PropTypes from 'prop-types';

function Ticket(props) {
  return (
    <div>
      <h3>Ticket: {props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

Ticket.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Ticket;
