const defaultState = require('./../defaultTickets.json');

const helpQueueReducer = (state = defaultState, action) => {
  const { title, description, status, id } = action;
  switch (action.type) {
    case "ADD_TICKET":
      return { ...state, [id]: { title: title, description: description, status: status, id: id } }
    case "DELETE_TICKET":
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
}

export default helpQueueReducer;
