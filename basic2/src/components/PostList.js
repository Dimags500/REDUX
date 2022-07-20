import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index.js";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map((item) => {
      return (
        <div className="item" key={item.id}>
          <i className="large middle aligned icon user "></i>
          <div className="content">
            <div className="description">
              <h2>{item.title}</h2>
              <p>{item.doby}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list ">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
