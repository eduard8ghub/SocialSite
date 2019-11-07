import {connect} from "react-redux";
import Post from "./Post";
import {deletePostActionCreator, setPostsAC} from "../../../../redux/profile-reducer";
import axios from "axios";
import * as React from "react";

class PostContainer extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3004/profilePage')
        .then((response) => {
          this.props.setPosts(response.data.posts);
        })
  }

  render() {
    return <Post posts={this.props.posts}/>
  }
}

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    removeMessage(idMessage) {
      dispatch(deletePostActionCreator(idMessage))
    },
    setPosts: (posts) => {
      dispatch(setPostsAC(posts))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);

