import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Hook for connecting Firebase+Redux for getting real-time data updates
import { useSelector } from 'react-redux'
import { useFirebase, useFirestoreConnect, isLoaded } from 'react-redux-firebase'

import { SiTodoist } from 'react-icons/si'
import { GiProgression } from 'react-icons/gi'
import { AiOutlineFileDone } from 'react-icons/ai'

import NewTicketForm from './../components/NewTicketForm'
import KanbanTicket from './../components/KanbanTicket'
import Header from './../components/Header'
import Footer from './../components/Footer'

function Kanban() {
  const firebase = useFirebase()
  const auth = firebase.auth()
  useFirestoreConnect([
    { collection: 'tickets' }
  ])
  const [newTicketFormShowing, showNewTicketForm] = useState(false)
  const tickets = useSelector(state => state.firestore.ordered.tickets)

  const kanbanBoardStyles = {
    margin: '4px',
    border: '1px solid black',
    flex: '1 1 100%',
    padding: '5px',
    background: 'rgba(255,255,255,0.25)'
  }

  if (!isLoaded(auth) || !isLoaded(tickets)) {
    return (
      <>
        <div className='container'>
          <Header title='Ticket List' />
          <h3>Loading...</h3>
        </div>
        <Footer />
      </>
    )
  }

  if (isLoaded(auth) && (auth.currentUser === null)) {
    return (
      <>
        <div className='container'>
          <Header title='Ticket List' />
          <h2 style={{ margin: '52px' }}>You must be signed in to access the ticket queue.</h2>
          <Link className='linkStyles' to='/account'>Click here to log in</Link>
        </div>
        <Footer />
      </>
    )
  }

  if (isLoaded(auth) && (auth.currentUser !== null) && isLoaded(tickets)) {
    console.log("AUTH", auth)
    return (
      <>
        <div className='container'>
          <Header title='Ticket List' />
          <div style={{ minHeight: '20vh' }}>
            <h3 style={{ marginTop: '42px' }}>Kanban</h3>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={kanbanBoardStyles}>
                <label style={{ borderBottom: '1px solid black', marginBottom: '8px' }}><SiTodoist /> TODO</label>
                <div style={{ padding: '8px 2px' }}>
                  {tickets.map(ticket => (ticket.status === "Todo") ?
                    (
                      <KanbanTicket
                        key={ticket.id}
                        id={ticket.id}
                        status={ticket.status}
                        title={ticket.title}
                        description={ticket.description}
                      />
                    ) : null
                  )}
                </div>
              </div>

              <div style={kanbanBoardStyles}>
                <label style={{ borderBottom: '1px solid black', marginBottom: '8px' }}><GiProgression /> In Progress</label>
                <div style={{ padding: '8px 2px' }}>
                  {tickets.map(ticket => (ticket.status === "InProgress") ?
                    (
                      <KanbanTicket
                        key={ticket.id}
                        id={ticket.id}
                        status={ticket.status}
                        title={ticket.title}
                        description={ticket.description}
                      />
                    ) : null
                  )}
                </div>
              </div>

              <div style={kanbanBoardStyles}>
                <label style={{ borderBottom: '1px solid black', marginBottom: '8px' }}><AiOutlineFileDone /> Done</label>
                <div style={{ padding: '8px 2px' }}>
                  {tickets.map(ticket => (ticket.status === "Done") ?
                    (
                      <KanbanTicket
                        key={ticket.id}
                        id={ticket.id}
                        status={ticket.status}
                        title={ticket.title}
                        description={ticket.description}
                      />
                    ) : null
                  )}
                </div>
              </div>
            </div>
            <button className='linkStyles' onClick={() => showNewTicketForm(!newTicketFormShowing)} >
              { newTicketFormShowing ? "Cancel New Ticket" : "Add New Ticket" }
            </button>
            { newTicketFormShowing ? <NewTicketForm /> : null }
          </div>
        </div>
        <Footer />
      </>
    )
  }

}

export default Kanban
