import React from 'react';
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import WithAuthRedirect from "../../hoc/WithAuthRedirect"
import {compose} from "redux";


let mapStateToProps = (state) => {
  return {
    listDialogs: state.dialogsPage.listDialogs,
    messages: state.dialogsPage.messages,
    newMessage: state.dialogsPage.newMessage,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    onAddMessage: (currentTime) => {
      dispatch(addNewMessageActionCreator(currentTime));
    },
    onChangeMessage: (body) => {
      dispatch(updateNewMessageActionCreator(body))
    }
  }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

