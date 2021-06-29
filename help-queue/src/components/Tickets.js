import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import Kanban from './Kanban';
import ListTicket from './ListTicket';

class Tickets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tickets: [
        {
          title: "Ticket one",
          description: "This is the first ticket",
          status: "InProgress",
          id: uuid()
        },
        {
          title: "Ticket two",
          description: "This is the second ticket",
          status: "Todo",
          id: uuid()
        },
        {
          title: "Create Kanban",
          description: "Generate the kanban board",
          status: "Done",
          id: uuid()
        },
        {
          title: "Do styling",
          description: "Make it pretty",
          status: "Todo",
          id: uuid()
        }
      ]
    }
  }

  changeTicketStatus = (ticketId, newStatus) => {
    // loop thru the tickets array and find the one that matches the id
    const newTicketsArray = this.state.tickets.map(ticket => {
      if (ticket.id === ticketId) {
        // change the status of that ONE ELEMENT
        const newTicket = {...ticket};
        newTicket.status = newStatus;
        return newTicket;
      } else {
        return ticket;
      }
    });
    // update the state with the new tickets array
    this.setState({ tickets: newTicketsArray });
  }

  render() {

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
          {this.state.tickets.map(ticket => <ListTicket key={ticket.id} title={ticket.title} description={ticket.description} />)}
        </div>
        <Kanban tickets={this.state.tickets} changeTicketStatus={this.changeTicketStatus} />
      </React.Fragment>
    )
  }
}

export default Tickets;
