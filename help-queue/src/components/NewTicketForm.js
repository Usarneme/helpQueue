import React from 'react';
import PropTypes from 'prop-types';

function NewTicketForm(props) {
  const formSubmissionHandler = event => {
    event.preventDefault()
    const title = event.target.title.value;
    const description = event.target.description.value;
    console.log("form submitted", title, description)
    props.onNewTicketCreation(title, description)
  }

  return (
    <form onSubmit={event => formSubmissionHandler(event)}>
      <input type="text" name="title" placeholder="title" />
      <input type="text" name="description" placeholder="description" />
      <button type="submit">Add new ticket</button>
    </form>
  )
}

NewTicketForm.prototype = {
  onNewTicketCreation: PropTypes.func
}

export default NewTicketForm;
