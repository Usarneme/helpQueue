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

  handleShowNewTicketFormButtonClick = () => {
    this.setState({ newTicketFormShowing: !this.state.newTicketFormShowing })
    // this.setState(prevState => ({ newTicketFormShowing: !prevState.newTicketFormShowing }))
  }

  onNewTicketCreation = (title, description) => {
    console.log("onNewTicketCreation", title, description)
    this.addNewTicket(title, description)
  }

  render() {
    return (
      <React.Fragment>
        { this.state.newTicketFormShowing ? <NewTicketForm onNewTicketCreation={this.onNewTicketCreation} /> : null }
        <button onClick={() => this.handleShowNewTicketFormButtonClick()} >
          { this.state.newTicketFormShowing ? "Cancel New Ticket" : "Add New Ticket" }
        </button>
        <Kanban tickets={this.props.tickets} changeTicketStatus={this.changeTicketStatus} />
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
