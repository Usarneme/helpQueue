import PropTypes from 'prop-types';

function ListTicket(props) {
  return (
    <div style={{ flex: '1 1 100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h4 style={{ padding: '2px', margin: '2px' }} >{props.title}</h4>
      <span>&nbsp;-&nbsp;</span>
      <p>{props.description}</p>
    </div>
  );
}

ListTicket.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string
}

export default ListTicket;
