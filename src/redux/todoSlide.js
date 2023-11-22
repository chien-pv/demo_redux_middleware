import { createSlice } from "@reduxjs/toolkit";

let initState = {
  filter: {
    q: "",
  },
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: initState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
      return state;
    },
    fetchData: (state, action) => {
      state.todos = action.payload;
      return state;
    },
  },
});

// export const { addTodo } = todoSlice.actions;
// export default todoSlice.reducer;
