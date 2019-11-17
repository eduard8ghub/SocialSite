import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";


let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: () => {
      dispatch(addPostActionCreator())
    },
    changePost: (newText) => {
      dispatch(updatePostActionCreator(newText))
    }
  }
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer;