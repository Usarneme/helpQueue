import React, { useState } from 'react'
import { withFirestore } from 'react-redux-firebase'

import Kanban from './Kanban'
import NewTicketForm from './NewTicketForm'

function Tickets(props) {
  const [newTicketFormShowing, showNewTicketForm] = useState(false)

  const handleShowNewTicketFormButtonClick = () => {
    showNewTicketForm(!newTicketFormShowing)
  }

  return (
    <React.Fragment>
      { newTicketFormShowing ? <NewTicketForm /> : null }
      <button onClick={() => handleShowNewTicketFormButtonClick()} >
        { newTicketFormShowing ? "Cancel New Ticket" : "Add New Ticket" }
      </button>
      <Kanban />
    </React.Fragment>
  )
}

export default withFirestore(Tickets)
