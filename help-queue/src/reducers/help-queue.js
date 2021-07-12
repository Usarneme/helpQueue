import defaultState from './../defaultTickets.json'
import { ADD, UPDATE, DELETE } from './../actions/index.js'

const helpQueueReducer = (state = defaultState, action) => {
  const { title, description, status, id } = action;
  switch (action.type) {
    case ADD:
    case UPDATE:
      return { ...state, [id]: { title: title, description: description, status: status, id: id } }
    case DELETE:
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
}

export default helpQueueReducer;
