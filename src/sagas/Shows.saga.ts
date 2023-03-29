import { AnyAction } from "redux";
import { call, put } from "redux-saga/effects";
import { showLoadedAction } from "../Actions/Show.action";
import { searchShows } from "../api";
export function* fetchShows(action: AnyAction): Generator<any, any, any> {
  if (!action.payload) return;
  const shows = yield call(searchShows, action.payload);
  yield put(showLoadedAction(shows));
}
