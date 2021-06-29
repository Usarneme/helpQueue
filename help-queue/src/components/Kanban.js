import PropTypes from 'prop-types';

function Kanban(props) {
  return (
    <>
      <h1>Kanban</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ margin: '4px' }}>
          <label>TODO</label>
          <div></div>
        </div>
        <div style={{ margin: '4px' }}>
          <label>In Progress</label>
          <div></div>
        </div>
        <div style={{ margin: '4px' }}>
          <label>Done</label>
          <div>
            {/* {props.tickets.map(ticket => ticket.title)} */}
          </div>
        </div>
      </div>
    </>
  )
}

Kanban.propTypes = {
  tickets: PropTypes.array.isRequired
}

export default Kanban;
