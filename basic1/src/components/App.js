import React from "react";
import { selectSong } from "../actions";
import SongDetails from "./SongDetails";
import SongList from "./SongList";

export default function App() {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <>
          <SongDetails />
        </>
      </div>
    </div>
  );
}
