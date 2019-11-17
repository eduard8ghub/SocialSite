import React from 'react';
import {addNewMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import WithAuthRedirect from "../../hoc/WithAuthRedirect"

let mapStateToProps = (state) => {
  return {
    listDialogs: state.dialogsPage.listDialogs,
    messages: state.dialogsPage.messages,
    newMessage: state.dialogsPage.newMessage,
  }
};

let mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth
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

let AuthRedirectComponent = WithAuthRedirect(Dialogs);
AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;

