import { FC, useEffect, useState } from "react";
import { connect } from "react-redux/es/exports";
import {
  showLoadedAction,
  ShowsQueryChangeAction,
} from "../Actions/Show.action";
import { searchShows } from "../api";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { Show } from "../models/Show";
import { showsQuerySelector, showsSelector } from "../Selectors/Shows.selector";
import { State } from "../store";

type ShowlistProps = {
  shows: Show[];
  query: string;
  showsQueryChange: (query: string) => void;
};

const ShowListPage: FC<ShowlistProps> = ({
  shows,
  query,
  showsQueryChange,
}) => {
  return (
    <div className="mt-2">
      <SearchBar
        value={query}
        onChange={(e) => {
          showsQueryChange(e.target.value);
        }}
      />
      <div className="flex flex-wrap justify-center">
        {shows.map((s) => (
          <ShowCard show={s} />
        ))}
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  showsQueryChange: ShowsQueryChangeAction,
};
const mapStateToProps = (state: State) => {
  return { query: showsQuerySelector(state), shows: showsSelector(state) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowListPage);
