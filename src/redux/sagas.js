import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { todoSlice } from "./todoSlide";

async function getAPI() {
  let result = await axios.get("https://jsonplaceholder.typicode.com/todos");
  return result.data;
}

function* fetchAllDataSaga() {
  let { fetchData } = todoSlice.actions;
  let result = yield call(getAPI);
  console.log("fetchAllDataSaga", result);
  yield put(fetchData(result));
}

function* todoSaga() {
  yield takeEvery("TODO_FETCH_REQUESTED", fetchAllDataSaga);
}

export default todoSaga;
