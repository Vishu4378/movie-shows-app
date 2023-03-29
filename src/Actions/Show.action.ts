import { Show } from "../models/Show";

export const SHOWS_LOADED = "SHOWS_LOADED";

export type ActionCreator<T> = (...args: any) => { type: String; payload?: T };

export const showLoadedAction: ActionCreator<{
  shows: Show[];
}> = (shows: Show[]) => ({
  type: SHOWS_LOADED,
  payload: { shows },
});

export const SHOWS_QUERY_CHANGE = "SHOWS_QUERY_CHANGE";

export const ShowsQueryChangeAction: ActionCreator<string> = (
  query: string
) => ({
  type: SHOWS_QUERY_CHANGE,
  payload: query,
});
