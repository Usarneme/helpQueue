import React, { Component } from 'react';
import Ticket from './Ticket';

class Tickets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tickets: [
        {
          title: "Ticket one",
          description: "This is the first ticket"
        },
        {
          title: "Ticket two",
          description: "This is the second ticket"
        },
        {
          title: "Create Kanban",
          description: "Generate the kanban board"
        },
        {
          title: "Do styling",
          description: "Make it pretty"
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
          {this.state.tickets.map(ticket => <Ticket title={ticket.title} description={ticket.description} />)}
        </div>
      </React.Fragment>
    )
  }
}

export default Tickets;