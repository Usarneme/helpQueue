import React, { Component } from 'react';
import Kanban from './Kanban';
import Ticket from './Ticket';

class Tickets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tickets: [
        {
          title: "Ticket one",
          description: "This is the first ticket",
          status: "Todo"
        },
        {
          title: "Ticket two",
          description: "This is the second ticket",
          status: "Todo"
        },
        {
          title: "Create Kanban",
          description: "Generate the kanban board",
          status: "Todo"
        },
        {
          title: "Do styling",
          description: "Make it pretty",
          status: "Todo"
        }
      ]
    }
  }

  render() {

    const ticketsStyles = {
      display: 'grid',
      gridGap: '10px',
      color: 'green',
      gridTemplateColumns: 'repeat(2, 1fr)'
    }

    return (
      <React.Fragment>
        <h1>Current Tickets:</h1>
        <div style={ticketsStyles} >
          {this.state.tickets.map((ticket, index) => <Ticket key={index} title={ticket.title} description={ticket.description} />)}
        </div>
        <Kanban tickets={this.state.tickets} />
      </React.Fragment>
    )
  }
}

export default Tickets;
