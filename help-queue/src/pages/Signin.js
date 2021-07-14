import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase/app'

function Signin() {
  const history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const doSignIn = async event => {
    event.preventDefault()
    try {
      const res = await firebase.auth().signInWithEmailAndPassword(email, password)
      console.log('Success!', res)
      resetFields()
      history.push('/')
    } catch (err) {
      console.error(err)
      alert('Error signing in. Please try again')
    }
  }

  const doSignUp = async event => {
    event.preventDefault()
    console.log(email, password)
    try {
      const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
      console.log('Success! Signing in...', res)
      doSignIn()
    } catch (err) {
      console.error(err)
      alert('Error signing up. Please try again')
    }
  }

  const resetFields = () => {
    setEmail("")
    setPassword("")
  }

  return (
    <div>
      <div>
        <h2>Sign In</h2>
        <form onSubmit={doSignIn}>
        <input
            onChange={e => setEmail(e.target.value)}
            type='email'
            name='email'
            placeholder='email' />
          <input
            onChange={e => setPassword(e.target.value)}
            type='password'
            name='password'
            placeholder='password' />
          <button type='submit'>Sign In</button>
        </form>
      </div>
      <div>
        <h2>Register Account</h2>
        <form onSubmit={e => doSignUp(e)}>
          <input
            onChange={e => setEmail(e.target.value)}
            type='email'
            name='email'
            placeholder='email' />
          <input
            onChange={e => setPassword(e.target.value)}
            type='password'
            name='password'
            placeholder='password' />
          <button type='submit'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Signin
