const defaultState = require('./../defaultTickets.json');

// const reducerActions = {
//   ADD: 'ADD_TICKET',
//   UPDATE: 'UPDATE_TICKET',
//   DELETE: 'DELETE_TICKET'
// }

const helpQueueReducer = (state = defaultState, action) => {
  const { title, description, status, id } = action;
  // const { ADD, UPDATE, DELETE } = reducerActions;
  console.log(action.type);
  console.log(action);
  switch (action.type) {
    case 'ADD_TICKET':
      return { ...state, [id]: { title: title, description: description, status: status, id: id } }
    case 'UPDATE_TICKET':
      console.log("HIT UPDATE REDUCER SWITCH")
      // return Object.assign({}, state, {
      //   [id]: {
      //     title: title,
      //     description: description,
      //     status: status,
      //     id: id
      //   }
      // })
      return { ...state, [id]: { title: title, description: description, status: status, id: id } }
    case 'DELETE_TICKET':
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
}

export default helpQueueReducer;
