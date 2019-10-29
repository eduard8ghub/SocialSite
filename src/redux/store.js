import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


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


window.store = store;

export default store;