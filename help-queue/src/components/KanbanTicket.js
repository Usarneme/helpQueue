import PropTypes from 'prop-types';
import { ImArrowRight } from 'react-icons/im';
import { ImArrowLeft } from 'react-icons/im';

function KanbanTicket(props) {
  const kanbanCardStyles = {
    margin: '8px',
    padding: '4px',
    border: '1px solid black',
    borderRadius: '15px',
    background: props.status === 'Todo' ? 'rgba(0,0,0,0.15)' : props.status === 'InProgress' ? 'green' : 'orange'
  }

  const nextLevel = (props.status === 'Todo') ? 'InProgress' : 'Done';
  const previousLevel = (props.status === 'Done') ? 'InProgress' : 'Todo';

  return (
    <div style={kanbanCardStyles}>
      <h5>{props.title}</h5>
      <p style={{ padding: '6px 6px 12px' }}>{props.description}</p>
      <p>
        <button type="button" style={{ padding: '9px', marginTop: '10px' }} onClick={() => props.changeTicketStatus(props, previousLevel)}><ImArrowLeft /></button>
        <button type="button" style={{ padding: '9px', marginTop: '10px' }} onClick={() => props.changeTicketStatus(props, nextLevel)}><ImArrowRight /></button>
      </p>
    </div>
  );
}

KanbanTicket.propTypes = {
  description: PropTypes.string.isRequired,
  changeTicketStatus: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default KanbanTicket;
