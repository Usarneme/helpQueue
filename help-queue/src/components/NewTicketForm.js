import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NewTicketForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const formSubmissionHandler = event => {
    event.preventDefault()
    props.onNewTicketCreation(title, description)
    setTitle("")
    setDescription("")
  }

  return (
    <form onSubmit={e => formSubmissionHandler(e)}>
      <input
        type="text"
        name="title"
        placeholder="title"
        value={title}
        onChange={e => setTitle(e.target.value)} />
      <input
        type="text"
        name="description"
        placeholder="description"
        value={description} onChange={e => setDescription(e.target.value)} />
      <button type="submit">Add new ticket</button>
    </form>
  )
}

NewTicketForm.prototype = {
  onNewTicketCreation: PropTypes.func
}

export default NewTicketForm;
