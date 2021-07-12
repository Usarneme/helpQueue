import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

import helpQueueReducer from './help-queue'

const rootReducer = combineReducers({
  helpQueueReducer: helpQueueReducer,
  firestore: firestoreReducer
})

export default rootReducer
