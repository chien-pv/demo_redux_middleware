import axios from "axios";
import { todoSlice } from "./todoSlide";

export function getAllData() {
  let { fetchData } = todoSlice.actions;
  return async function (dispatch, getState) {
    let result = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(result.data);
    dispatch(fetchData(result.data));
  };
}

export function addTodoThunk(todo) {
  let { addTodo } = todoSlice.actions;

  return async function (dispatch, getState) {
    let result = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      todo
    );
    console.log(result.data);
    dispatch(addTodo(result.data));
  };
}
