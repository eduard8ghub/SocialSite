import {connect} from "react-redux";
import Post from "./Post";
import {deletePostActionCreator, setPostsAC} from "../../../../redux/profile-reducer";


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

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);

export default PostContainer;