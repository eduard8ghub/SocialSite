let renderEntireTree = () => {
    console.log(1);
};



let state = {
    dialogsPage: {
        messages: [
            {message: 'Hi, how are you? Hi, how are you?', time: '12:00'},
            {message: 'Hi, i am fine', time: '12:00'},
            {message: 'Hi, i am fine', time: '12:00'},
            {message: 'Hi, i am fine Hi, how are you? Hi, how are you?', time: '12:00'},
            {message: 'Hi, i am fine Hi, how are you? Hi, how are you? Hi, how are you? Hi, how are you?', time: '12:00'},
            {message: 'Hi, i am fine', time: '12:00'}
        ],
        listDialogs: [
            {name: 'Dima',status: 'online',id: 1},
            {name: 'Vasea',status: 'offline',id: 2},
            {name: 'Olea',status: 'online',id: 3},
            {name: 'Lena',status: 'offline',id: 4}
        ],
        newMessage: 'Write text'
    },
    profilePage: {
        posts: [
            {messages: 'Hi, how are you?'},
            {messages: 'Hi, i am fine'}
        ],
        newPost: 'React JS'
    },
    sideBar: {
        friends: [
            {name: 'Dima', size: 67, avatar:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
            {name: 'Vasea', size: 67, avatar:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
            {name: 'Olea', size: 67, avatar:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'},
        ]
    }
};

export const addPost = (post) => {
    let itemPost = {
        messages: post
    };
    state.profilePage.posts.push(itemPost);
    renderEntireTree(state);
    state.profilePage.newPost = '';
};

export const removePost = (index) => {
    let posts = state.profilePage.posts;

    posts.forEach(() => {
        posts.splice(index, 1);
    });
    renderEntireTree(state);
};

export const updatePost = (txt) => {
    state.profilePage.newPost = txt;
    renderEntireTree(state);
};

export const addMessage = (message, time) => {
    let newMess = {
        message: message,
        time: time
    };
    state.dialogsPage.messages.push(newMess);
    renderEntireTree(state);
    state.dialogsPage.newMessage = '';
};

export const updateText = (txt) => {
  state.dialogsPage.newMessage = txt;
    renderEntireTree(state);
};

export const subscribe = (observer) => {
    renderEntireTree = observer;
};


export default state;