import React, { useState } from 'react'
import { useFirestore } from 'react-redux-firebase'

function NewTicketForm() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const firestore = useFirestore()

  const formSubmissionHandler = event => {
    event.preventDefault()
    firestore.collection('tickets').add({
      title: title,
      description: description,
      status: "Todo",
      timeOpen: firestore.FieldValue.serverTimestamp()
    })
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

export default NewTicketForm
