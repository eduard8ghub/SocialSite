const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const DELETE_POST = 'DELETE-POST';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        message: action.post
      };
      state.post.push(newPost);
      state.newPost = '';
      return state;
    case UPDATE_POST:
      state.newPost = action.newPost;
      return state;
    case DELETE_POST:
      let post = state.post;
      post.forEach((item, idx, arr) => {
        if (action.index === idx) {
          arr.splice(idx, 1);
          }
        });
      return state;
    default:
      return state;
  }
};

export let addPostActionCreator = (text) => {
  return {type: ADD_POST, post: text};
};

export let updatePostActionCreator = (text) => {
  return { type: UPDATE_POST, newPost: text}
};

export let deletePostActionCreator = (idx) => {
  return { type: DELETE_POST, index: +idx}
};

export default profileReducer;