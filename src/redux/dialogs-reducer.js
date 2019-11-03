const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
  messages: [
    {message: 'Hi, how are you? Hi, how are you?', time: '12:00'},
    {message: 'Hi, i am fine', time: '12:00'},
    {message: 'Hi, i am fine', time: '12:00'},
    {message: 'Hi, i am fine Hi, how are you? Hi, how are you?', time: '12:00'},
    {
      message: 'Hi, i am fine Hi, how are you? Hi, how are you? Hi, how are you? Hi, how are you?',
      time: '12:00'
    },
    {message: 'Hi, i am fine', time: '12:00'}
  ],
  listDialogs: [
    {name: 'Dima', status: 'online', id: 1},
    {name: 'Vasea', status: 'offline', id: 2},
    {name: 'Olea', status: 'online', id: 3},
    {name: 'Lena', status: 'offline', id: 4}
  ],
  newMessage: 'Write text',
};

const dialogsReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case ADD_MESSAGE:
      stateCopy = {
        ...state,
        newMessage: '',
        messages: [...state.messages, {message: state.newMessage, time: action.time}]
      };
      return stateCopy;
    case UPDATE_NEW_MESSAGE:
      stateCopy = {
        ...state,
        newMessage: action.newMessage
      };
      return stateCopy;
    default:
      return state;

  }
};

export let addNewMessageActionCreator = (newTime) => {
  return {type: ADD_MESSAGE, time: newTime}
};

export let updateNewMessageActionCreator = (text) => {
  return {type: UPDATE_NEW_MESSAGE, newMessage: text}
};

export default dialogsReducer;