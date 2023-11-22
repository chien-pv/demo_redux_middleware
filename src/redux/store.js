import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
import { todoSlice } from "./todoSlide";
import createSagaMiddleware from "redux-saga";
import todoSaga from "./sagas";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: todoSlice.reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(todoSaga);

export default store;
