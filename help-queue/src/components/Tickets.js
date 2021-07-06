import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';

import Kanban from './Kanban';
import NewTicketForm from './NewTicketForm';

class Tickets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTicketFormShowing: false
    }
  }

  addNewTicket = (title, description) => {
    const id = uuid();
    const { dispatch } = this.props;
    const action = {
      type: "ADD_TICKET",
      id: id,
      title: title,
      description: description,
      status: "Todo"
    }
    dispatch(action)
  }

  changeTicketStatus = (ticket, newStatus) => {
    const { dispatch } = this.props;
    const { id, title, description } = ticket;
    const action = {
      type: "UPDATE_TICKET",
      id: id,
      title: title,
      description: description,
      status: newStatus
    }
    dispatch(action)
  }

  deleteTicket = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_TICKET",
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
          tickets={this.props.tickets}
          changeTicketStatus={this.changeTicketStatus}
          deleteTicket={this.deleteTicket} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tickets: state
  };
};

Tickets = connect(mapStateToProps)(Tickets);

export default Tickets;
