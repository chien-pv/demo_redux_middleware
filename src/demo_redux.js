// import { createStore } from "redux";
// let initialState = {
//   filter: {
//     q: "",
//   },
//   todos: [
//     { id: 1, name: "Học JS" },
//     { id: 2, name: "Học HTML" },
//   ],
// };

// function reducer(state = initialState, action) {
//   //{
//   // type: "ADD",
//   //payload: "name"
//   //}
//   switch (action.type) {
//     case "ADD":
//       let todo = { id: 11, name: action.payload };
//       return {
//         ...state,
//         todos: [...state.todos, todo],
//       };
//     case "DELETE":
//       break;
//     default:
//       return state;
//   }
// }

// let store = createStore(reducer);

// console.log(store.getState());

// let action = {
//   type: "ADD",
//   payload: "Học css",
// };

// store.dispatch(action);

// console.log(store.getState());
