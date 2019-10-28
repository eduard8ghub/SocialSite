const ADD_POST = 'ADD-POST';

let renderEntireTree = () => {
    console.log(1);
};

let store = {
    dialogsPage: {
        _messages: [
            {message: 'Hi, how are you? Hi, how are you?', time: '12:00'},
            {message: 'Hi, i am fine', time: '12:00'},
            {message: 'Hi, i am fine', time: '12:00'},
            {message: 'Hi, i am fine Hi, how are you? Hi, how are you?', time: '12:00'},
            {message: 'Hi, i am fine Hi, how are you? Hi, how are you? Hi, how are you? Hi, how are you?', time: '12:00'},
            {message: 'Hi, i am fine', time: '12:00'}
        ],
        _listDialogs: [
            {name: 'Dima',status: 'online',id: 1},
            {name: 'Vasea',status: 'offline',id: 2},
            {name: 'Olea',status: 'online',id: 3},
            {name: 'Lena',status: 'offline',id: 4}
        ],
        _newMessage: 'Write text',
        addMessage(message, time) {
            let newMessage = {
                message,
                time
            };
            this._messages.push(newMessage);
            renderEntireTree(store);
            this._newMessage = '';
        },
        updateText(txt) {
            this._newMessage = txt;
            renderEntireTree(store);
        },
        getMessages() {
            return this._messages;
        },
        getDialogs() {
           return this._listDialogs;
        },
        getNewMessage() {
            return this._newMessage;
        }
    },
    profilePage: {
        _post: [
            {message: 'My new post1'},
            {message: 'My new post2'},
            {message: 'My new post3'},
            {message: 'My new post4'}
        ],
        _newPost: 'React JS',
        deletePost(index) {
            let post = store.profilePage._post;
            post.forEach((item, idx, arr) => {
                if(+index === idx) {
                    arr.splice(idx, 1);
                }
            });
            renderEntireTree(store);
        },
        // addPost(post) {
        //     let newPost = {
        //         message: post
        //     };
        //     this._post.push(newPost);
        //     renderEntireTree(store);
        //     this._newPost = '';
        // },
        updatePost(txt) {
            this._newPost = txt;
            renderEntireTree(store);
        },
        getAllPosts() {
            return this._post;
        },
        getNewPost() {
            return this._newPost;
        }
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
    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost = {
                message: action.post
            };
            this.store._post.push(newPost);
            renderEntireTree(store);
            this.store._newPost = '';
        }
    }
};

export const subscribe = (observer) => {
    renderEntireTree = observer;
};

export let addPostActionCreator = (text) => {
    return {type: ADD_POST, post: text};
};

window.store = store;

export default store;