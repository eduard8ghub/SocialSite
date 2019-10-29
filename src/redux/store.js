import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const DELETE_POST = 'DELETE-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            post: [
                {message: 'My new post1'},
                {message: 'My new post2'},
                {message: 'My new post3'},
                {message: 'My new post4'}
            ],
            newPost: 'React JS',
        },
        sideBar: {
        _friends: [
            {name: 'Dima', size: 67, avatar:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
            {name: 'Vasea', size: 67, avatar:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
            {name: 'Olea', size: 67, avatar:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
        ],
        getFriends() {
            return this._friends;
        }
    },
    },
    _callSubscriber() {
      console.log("subscriber")
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
};
// let store = {
//     _state: {
//         dialogsPage: {
//             messages: [
//                 {message: 'Hi, how are you? Hi, how are you?', time: '12:00'},
//                 {message: 'Hi, i am fine', time: '12:00'},
//                 {message: 'Hi, i am fine', time: '12:00'},
//                 {message: 'Hi, i am fine Hi, how are you? Hi, how are you?', time: '12:00'},
//                 {message: 'Hi, i am fine Hi, how are you? Hi, how are you? Hi, how are you? Hi, how are you?', time: '12:00'},
//                 {message: 'Hi, i am fine', time: '12:00'}
//             ],
//             listDialogs: [
//                 {name: 'Dima',status: 'online',id: 1},
//                 {name: 'Vasea',status: 'offline',id: 2},
//                 {name: 'Olea',status: 'online',id: 3},
//                 {name: 'Lena',status: 'offline',id: 4}
//             ],
//             newMessage: 'Write text',
//             addMessage(message, time) {
//                 let newMessage = {
//                     message,
//                     time
//                 };
//                 this.messages.push(newMessage);
//                 renderEntireTree(store);
//                 this._newMessage = '';
//             },
//             updateText(txt) {
//                 this._newMessage = txt;
//                 renderEntireTree(store);
//             },
//
//         },
//     },
//
//     profilePage: {
//         _post: [
//             {message: 'My new post1'},
//             {message: 'My new post2'},
//             {message: 'My new post3'},
//             {message: 'My new post4'}
//         ],
//         _newPost: 'React JS',
//         deletePost(index) {
//             let post = store.profilePage._post;
//             post.forEach((item, idx, arr) => {
//                 if(+index === idx) {
//                     arr.splice(idx, 1);
//                 }
//             });
//             renderEntireTree(store);
//         },
//     },
//     sideBar: {
//         _friends: [
//             {name: 'Dima', size: 67, avatar:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
//             {name: 'Vasea', size: 67, avatar:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
//             {name: 'Olea', size: 67, avatar:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
//         ],
//         getFriends() {
//             return this._friends;
//         }
//     },
//     dispatch(action) {
//         console.log(store._state.dialogsPage);
//         store._state.dialogsPage = profileReducer(this.store, action)
//     },
//
// };



export let addPostActionCreator = (text) => {
    return {type: ADD_POST, post: text};
};

export let updatePostActionCreator = (text) => {
    return { type: UPDATE_POST, newPost: text}
};

export let deletePostActionCreator = (idx) => {
    return { type: DELETE_POST, index: +idx}
};

export let addNewMessageActionCreator = (text, newTime) => {
    return { type: ADD_MESSAGE, message: text, time: newTime}
};

export let updateNewMessageActionCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE, newMessage: text}
};

window.store = store;

export default store;