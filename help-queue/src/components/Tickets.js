import React, { Component } from 'react';
// import { v4 as uuid } from 'uuid';
import Kanban from './Kanban';
import ListTicket from './ListTicket';
import { connect } from 'react-redux';

class Tickets extends Component {
  changeTicketStatus = (ticket, newStatus) => {
    const { id, title, description } = ticket;
    console.log("CHANGING TICKET", ticket, newStatus)
    const { dispatch } = this.props;
    const action = {
      type: "UPDATE_TICKET",
      id: id,
      title: title,
      description: description,
      status: newStatus
    }
    const result = dispatch(action)
    console.log("AFTER DISPATCH", result)
  }

  render() {
    console.log("TICKETS COMPONENT< props: ",this.props)

    const ticketsStyles = {
      display: 'flex',
      color: 'green',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }

    return (
      <React.Fragment>
        <h3>All Tickets:</h3>
        <div style={ticketsStyles} >
          {Object.values(this.props.tickets).map(ticket => <ListTicket key={ticket.id} title={ticket.title} description={ticket.description} />)}
        </div>
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
