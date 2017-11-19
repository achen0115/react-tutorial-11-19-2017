import { combineReducers, createStore } from "redux";
import StudentReducer from "./reducers/studentReducer";

// function counter(state = 0, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// }

const rootReducer = combineReducers({
  students: StudentReducer
});

const store = createStore(rootReducer);

export default store;
