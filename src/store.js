import { combineReducers, createStore, applyMiddleware } from "redux";
import StudentReducer from "./reducers/studentReducer";
// import promiseMiddleware from "redux-promise";
import thunk from "redux-thunk";

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

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
