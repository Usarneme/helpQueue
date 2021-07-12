import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'
import { withFirestore } from 'react-redux-firebase'

import Kanban from './Kanban'
import NewTicketForm from './NewTicketForm'
import { ADD, UPDATE, DELETE } from './../actions/index'

class Tickets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTicketFormShowing: false
    }
  }

  // DEPRECATED after introduction of Firebase Hook in NewForm component
  addNewTicket = (title, description) => {
    const id = uuid()
    const { dispatch } = this.props;
    const action = {
      type: ADD,
      id: id,
      title: title,
      description: description,
      status: "Todo"
    }
    dispatch(action)
  }

  // DEPRECATED - replaced with useFirestore hook in ticket component
  changeTicketStatus = (ticket, newStatus) => {
    // const { dispatch } = this.props;
    // const { id, title, description } = ticket;
    // const action = {
    //   type: UPDATE,
    //   id: id,
    //   title: title,
    //   description: description,
    //   status: newStatus
    // }
    // dispatch(action)
  }

  deleteTicket = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: DELETE,
      id: id
    }
    dispatch(action)
  }

  handleShowNewTicketFormButtonClick = () => {
    this.setState({ newTicketFormShowing: !this.state.newTicketFormShowing })
    // this.setState(prevState => ({ newTicketFormShowing: !prevState.newTicketFormShowing }))
  }

  render() {
    return (
      <React.Fragment>
        { this.state.newTicketFormShowing ? <NewTicketForm onNewTicketCreation={this.addNewTicket} /> : null }
        <button onClick={() => this.handleShowNewTicketFormButtonClick()} >
          { this.state.newTicketFormShowing ? "Cancel New Ticket" : "Add New Ticket" }
        </button>
        <Kanban
          changeTicketStatus={this.changeTicketStatus}
          deleteTicket={this.deleteTicket} />
      </React.Fragment>
    )
  }
}

Tickets = withFirestore(Tickets)

export default Tickets
