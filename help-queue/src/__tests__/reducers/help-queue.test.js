import helpQueueReducer from "../../reducers/help-queue.js";

describe("helpQueueReducer", () => {
  let action;
  const ticket = {
    title: "Test 1",
    description: "This is the first ticket",
    status: "Done",
    id: "1234-abcd"
  }
  const currentState = {
    [ticket.id]: ticket
  }

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(helpQueueReducer({}, {})).toEqual({});
  });

  test("Should successfully delete a ticket", () => {
    action = {
      type: "DELETE_TICKET",
      id: "1234-abcd",
    }
    expect(helpQueueReducer(currentState, action)).toEqual(
      {}
    )
  });

  test("should return state with a new ticket when you pass add_ticket action", () => {
    const { title, description, status, id } = ticket;
    action = {
      type: "ADD_TICKET",
      title: title,
      description: description,
      status: status,
      id: id
    };

    expect(helpQueueReducer({}, action)).toEqual({
      [id]: {
        title: title,
        description: description,
        status: status,
        id: id
      }
    })
  })
})

