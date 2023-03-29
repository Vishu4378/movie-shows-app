import { createSelector } from "reselect";
import { State } from "../store";

const ShowsStateSelector = (state: State) => {
  return state.shows;
};

export const showsQuerySelector = createSelector(
  ShowsStateSelector,
  (showState) => showState.query
);

export const showsMapSelector = createSelector(
  ShowsStateSelector,
  (showState) => showState.shows
);

export const showsSelector = createSelector(showsMapSelector, (showsMap) =>
  Object.keys(showsMap).map((showId) => showsMap[+showId])
);
