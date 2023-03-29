import createSagaMiddleware from "@redux-saga/core";
import { takeEvery, takeLatest } from "redux-saga/effects";
import { combineReducers, applyMiddleware, createStore } from "redux";
import { SHOWS_QUERY_CHANGE } from "./Actions/Show.action";
import showReducer from "./Reducers/Show.reducer";
import { fetchShows } from "./sagas/Shows.saga";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  shows: showReducer,
});
function* rootSaga() {
  yield takeLatest(SHOWS_QUERY_CHANGE, fetchShows);
}
const sagaMiddleware = createSagaMiddleware();

export type State = ReturnType<typeof reducer>;

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
