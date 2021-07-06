const defaultState = require('./../defaultTickets.json');

const reducerActions = {
  ADD: 'ADD_TICKET',
  UPDATE: 'UPDATE_TICKET',
  DELETE: 'DELETE_TICKET'
}

const helpQueueReducer = (state = defaultState, action) => {
  const { title, description, status, id } = action;
  const { ADD, UPDATE, DELETE } = reducerActions;
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
