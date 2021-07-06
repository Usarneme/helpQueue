import PropTypes from 'prop-types';
import { SiTodoist } from 'react-icons/si';
import { GiProgression } from 'react-icons/gi';
import { AiOutlineFileDone } from 'react-icons/ai';
import KanbanTicket from './KanbanTicket';

function Kanban(props) {
  const kanbanBoardStyles = {
    margin: '4px',
    border: '1px solid black',
    flex: '1 1 100%',
    padding: '5px',
    background: 'rgba(255,255,255,0.25)'
  }

  return (
    <div style={{ minHeight: '20vh' }}>
      <h3 style={{ marginTop: '42px' }}>Kanban</h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={kanbanBoardStyles}>
          <label style={{ borderBottom: '1px solid black', marginBottom: '8px' }}><SiTodoist /> TODO</label>
          <div style={{ padding: '8px 2px' }}>
            {Object.values(props.tickets).map(ticket => (ticket.status === "Todo") ?
              (
                <KanbanTicket
                  key={ticket.id}
                  id={ticket.id}
                  status={ticket.status}
                  title={ticket.title}
                  description={ticket.description}
                  changeTicketStatus={props.changeTicketStatus}
                  deleteTicket={props.deleteTicket}
                />
              ) : null
            )}
          </div>
        </div>

        <div style={kanbanBoardStyles}>
          <label style={{ borderBottom: '1px solid black', marginBottom: '8px' }}><GiProgression /> In Progress</label>
          <div style={{ padding: '8px 2px' }}>
            {Object.values(props.tickets).map(ticket => (ticket.status === "InProgress") ?
              (
                <KanbanTicket
                  key={ticket.id}
                  id={ticket.id}
                  status={ticket.status}
                  title={ticket.title}
                  description={ticket.description}
                  changeTicketStatus={props.changeTicketStatus}
                  deleteTicket={props.deleteTicket}
                />
              ) : null
            )}
          </div>
        </div>

        <div style={kanbanBoardStyles}>
          <label style={{ borderBottom: '1px solid black', marginBottom: '8px' }}><AiOutlineFileDone /> Done</label>
          <div style={{ padding: '8px 2px' }}>
            {Object.values(props.tickets).map(ticket => (ticket.status === "Done") ?
              (
                <KanbanTicket
                  key={ticket.id}
                  id={ticket.id}
                  status={ticket.status}
                  title={ticket.title}
                  description={ticket.description}
                  changeTicketStatus={props.changeTicketStatus}
                  deleteTicket={props.deleteTicket}
                />
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

Kanban.propTypes = {
  tickets: PropTypes.object.isRequired,
  changeTicketStatus: PropTypes.func.isRequired,
  deleteTicket: PropTypes.func.isRequired
}

export default Kanban;
