const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        message: action.message,
        time: action.time
      };
      state.messages.push(newMessage);
      state.newMessage = '';
      return state;
    case UPDATE_NEW_MESSAGE:
      state.newMessage = action.newMessage;
      return state;
    default:
      return state;

  }
};

export let addNewMessageActionCreator = (text, newTime) => {
  return { type: ADD_MESSAGE, message: text, time: newTime}
};

export let updateNewMessageActionCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE, newMessage: text}
};

export default dialogsReducer;