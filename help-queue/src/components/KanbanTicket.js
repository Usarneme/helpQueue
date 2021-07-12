import PropTypes from 'prop-types'
import { ImArrowRight, ImArrowLeft, ImCancelCircle } from 'react-icons/im'
import { useFirestore } from 'react-redux-firebase'

function KanbanTicket(props) {
  const kanbanCardStyles = {
    margin: '8px',
    padding: '4px',
    border: '1px solid black',
    borderRadius: '15px',
    position: 'relative',
    background: props.status === 'Todo' ? 'rgba(0,0,0,0.15)' : props.status === 'InProgress' ? 'green' : 'orange'
  }

  const deleteButtonStyles = {
    position: 'absolute',
    top: '4px',
    right: '8px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    margin: '0',
    padding: '0',
    backgroundColor: 'rgba(0,0,0,0)',
    cursor: 'pointer'
  }

  const changeButtonStyles = {
    padding: '9px',
    marginTop: '10px',
    cursor: 'pointer'
  }

  const nextLevel = (props.status === 'Todo') ? 'InProgress' : 'Done'
  const previousLevel = (props.status === 'Done') ? 'InProgress' : 'Todo'
  const firestore = useFirestore()

  return (
    <div style={kanbanCardStyles}>
      <ImCancelCircle type="button" style={deleteButtonStyles} onClick={() => props.deleteTicket(props.id)} />
      <h5>{props.title}</h5>
      <p style={{ padding: '6px 6px 12px' }}>{props.description}</p>
      <p>
        <button
          type="button"
          style={changeButtonStyles}
          onClick={() => firestore.update({ collection: 'tickets', doc: props.id }, { status: previousLevel })} >
            <ImArrowLeft />
        </button>
        <button
          type="button"
          style={changeButtonStyles}
          onClick={() => firestore.update({ collection: 'tickets', doc: props.id }, { status: nextLevel })} >
            <ImArrowRight />
        </button>
      </p>
    </div>
  );
}

KanbanTicket.propTypes = {
  description: PropTypes.string.isRequired,
  deleteTicket: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default KanbanTicket
