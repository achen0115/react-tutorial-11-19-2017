function StudentReducer(state = [], action) {
  switch (action.type) {
    case "ADD_STUDENT":
      return [...state, action.payload];
    case "FETCH_STUDENTS":
      console.log(" I am reducer");
      console.log(action.payload);
      return [...action.payload];
    default:
      return state;
  }
}

export default StudentReducer;
