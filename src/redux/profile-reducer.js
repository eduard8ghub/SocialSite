const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const DELETE_POST = 'DELETE-POST';
const SET_POSTS = 'SET_POSTS';

let initialState = {
  posts: [
    // {message: 'My new post1'},
    // {message: 'My new post2'},
    // {message: 'My new post3'},
    // {message: 'My new post4'}
  ],
  newPost: '',
};

const profileReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case ADD_POST:
      stateCopy = {
        ...state,
        newPost: '',
        posts: [...state.posts, {message: state.newPost}]
      };
      return stateCopy;
    case UPDATE_POST:
      stateCopy = {
        ...state,
        newPost: action.newPost
      };
      return stateCopy;
    case DELETE_POST:
      state.posts.forEach((item, index, arr) => {
        if(index === action.index) {
          arr.splice(index, 1);
        }
      });
      stateCopy = {
        ...state,
      };
      return stateCopy;
    case SET_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...action.posts]
      };
    default:
      return state;
  }
};

export let addPostActionCreator = () => {
  return {type: ADD_POST};
};

export let updatePostActionCreator = (text) => {
  return {type: UPDATE_POST, newPost: text}
};

export let deletePostActionCreator = (idx) => {
  return {type: DELETE_POST, index: +idx}
};

export let setPostsAC = (posts) => {
  return {type: SET_POSTS, posts}
};

export default profileReducer;

