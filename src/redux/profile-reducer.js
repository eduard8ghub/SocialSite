import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const DELETE_POST = 'DELETE-POST';
const SET_POSTS = 'SET_POSTS';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [],
    newPost: "",
    profile: {},
    status: ""
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
                if (index === action.index) {
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
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
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

export let getUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export let setStatus = (status) => ({type: SET_STATUS, status});

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(getUserProfile(data))
        });
    }
};

export const getProfileStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data));
        })
    }
};

export const updateProfileStatus = (status) => {
    return (dispatch) => {
        profileAPI.upDateStatus(status).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
};

export default profileReducer;

