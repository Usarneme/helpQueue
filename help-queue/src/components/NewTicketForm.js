import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NewTicketForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const formSubmissionHandler = event => {
    event.preventDefault()
    // const title = event.target.title.value;
    // const description = event.target.description.value;
    console.log("form submitted", title, description)
    props.onNewTicketCreation(title, description)
    // event.target.title.value = ""
    // event.target.description.value = ""
    setTitle("")
    setDescription("")
  }

  return (
    <form onSubmit={event => formSubmissionHandler(event)}>
      <input type="text" name="title" placeholder="title" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="text" name="description" placeholder="description" value={description} onChange={e => setDescription(e.target.value)} />
      <button type="submit">Add new ticket</button>
    </form>
  )
}

NewTicketForm.prototype = {
  onNewTicketCreation: PropTypes.func
}

export default NewTicketForm;
