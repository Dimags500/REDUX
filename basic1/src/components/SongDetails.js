import React from "react";
import { connect } from "react-redux";

class SongDetails extends React.Component {
  renderSong() {}
  render() {
    if (this.props.song == null) {
      return <div>Click Song</div>;
    } else {
      return (
        <div>
          <div>{this.props.song.title}</div>
          <div>{this.props.song.duration}</div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
