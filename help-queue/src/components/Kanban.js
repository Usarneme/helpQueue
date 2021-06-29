import PropTypes from 'prop-types';

function Kanban(props) {
  return (
    <div style={{ minHeight: '20vh' }}>
      <h3 style={{ marginTop: '42px' }} >Kanban</h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ margin: '4px', border: '1px solid black', flex: '1 1 100%' }}>
          <label style={{ borderBottom: '1px solid black'}}>TODO</label>
          <div>

          </div>
        </div>
        <div style={{ margin: '4px', border: '1px solid black', flex: '1 1 100%' }}>
          <label style={{ borderBottom: '1px solid black'}}>In Progress</label>
          <div>

          </div>
        </div>
        <div style={{ margin: '4px', border: '1px solid black', flex: '1 1 100%' }}>
          <label style={{ borderBottom: '1px solid black'}}>Done</label>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

Kanban.propTypes = {
  tickets: PropTypes.array.isRequired
}

export default Kanban;
