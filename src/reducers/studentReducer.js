function StudentReducer(state = [], action) {
  switch (action.type) {
    case "ADD_STUDENT":
      return [...state, { name: action.name }];
    default:
      return state;
  }
}

export default StudentReducer;
