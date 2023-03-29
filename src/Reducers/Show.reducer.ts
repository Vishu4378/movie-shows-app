import produce from "immer";
import { schema, normalize } from "normalizr";
import { AnyAction } from "redux";
import dummyShows from "./helper";
import {
  showLoadedAction,
  SHOWS_LOADED,
  SHOWS_QUERY_CHANGE,
} from "../Actions/Show.action";
import { Show } from "../models/Show";
export type State = {
  shows: { [showId: number]: Show };
  query: string;
};
console.log(dummyShows);
export const initialState: State = {
  shows: dummyShows,
  query: "",
};
function showReducer(currentState = initialState, Action: AnyAction): State {
  switch (Action.type) {
    case SHOWS_LOADED:
      return produce(currentState, (draft) => {
        const shows = Action.payload.shows as Show[];

        const showSchema = new schema.Entity("shows");
        const normalizedData = normalize(shows, [showSchema]);
        const showsToSave = normalizedData.entities.shows || {};
        console.log(shows);
        draft.shows = showsToSave;
      });
    case SHOWS_QUERY_CHANGE:
      return produce(currentState, (draft) => {
        draft.query = Action.payload;
      });
    default:
      currentState;
  }
  return currentState;
}
export default showReducer;
