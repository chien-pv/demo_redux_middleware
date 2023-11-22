import Item from "./item";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { todoSlice } from "../redux/todoSlide";
import { getAllData, addTodoThunk } from "../redux/thunk_action";
function List() {
  let [text, setText] = useState("");
  let dispatch = useDispatch();
  let todos = useSelector((state) => state.todos);
  // console.log(todos);
  let datas = todos.map((item, index) => {
    return <Item {...item} key={index} />;
  });

  useEffect(() => {
    dispatch({ type: "TODO_FETCH_REQUESTED" });
  }, []);

  function handleAdd() {
    //addTodo(text)
    // {
    //     type: "ADD",
    //     payload: text
    // }

    let todo = {
      title: text,
      completed: false,
    };

    dispatch(addTodoThunk(todo));
  }

  return (
    <>
      <label>Name: </label>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="form-control"
      />
      <br />
      <button onClick={handleAdd} className="btn btn-info">
        ADD
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{datas}</tbody>
      </table>
    </>
  );
}

export default List;
