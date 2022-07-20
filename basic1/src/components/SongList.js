import React, { Component } from "react";
import { connect } from "react-redux";

import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((item) => {
      return (
        <div className="item" key={item.title}>
          <div className="right floated content ">
            <button
              onClick={() => this.props.selectedSong(item)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">
            {item.title === this.props.faveSong
              ? item.title + " ---faorite !"
              : item.title}
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui devided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs.songs, faveSong: state.songs.favoriteTitle };
};

export default connect(mapStateToProps, { selectedSong: selectSong })(SongList);
