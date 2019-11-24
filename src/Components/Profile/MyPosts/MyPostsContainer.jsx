import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";
import {compose} from "redux";
import WithAuthRedirect from "../../../hoc/WithAuthRedirect";


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


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(MyPosts);