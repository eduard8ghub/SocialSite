import {followAPI, unFollowAPI, usersAPI} from "../api/api";
import {setIsFetching} from "./preloader-reducer";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const TOGGLE_STATUS_BUTTON = 'TOGGLE_STATUS_BUTTON';

let initialState = {
    users: [],
    totalUsersCount: null,
    showUsersToPage: 10,
    currentPage: 1,
    statusLoadingButton: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users,
                totalUsersCount: action.totalUsers
            };
        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            };
        case TOGGLE_STATUS_BUTTON:
            return {
                ...state,
                statusLoadingButton: action.status
                    ? [...state.statusLoadingButton, action.userId]
                    : state.statusLoadingButton.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
};

export const follow = (userId) => ({type: FOLLOW, userId});
export const unFollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users, totalUsers) => ({type: SET_USERS, users, totalUsers});
export const changeCurrentPage = (pageNumber) => ({type: CHANGE_CURRENT_PAGE, pageNumber});
export const toggleStatusButton = (status, userId) => ({type: TOGGLE_STATUS_BUTTON, status, userId});


export const getUsersThunkCreator = (pageNumber, currentPage, showUsersToPage) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(changeCurrentPage(pageNumber));
        usersAPI.getUsers(currentPage, showUsersToPage)
            .then((data) => {
                dispatch(setIsFetching(false));
                dispatch(setUsers(data.items, data.totalCount / 10));
            });
    }
};

export const followTC = (userId) => {
    return (dispatch) => {
        dispatch(toggleStatusButton(true, userId));
        usersAPI.followUser(userId)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(follow(userId));
                    dispatch(toggleStatusButton(false, userId));
                }
            })
    }
};

export const unFollowTC = (userId) => {
    return (dispatch) => {
        dispatch(toggleStatusButton(true, userId));
        usersAPI.unFollowUser(userId)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(unFollow(userId));
                    dispatch(toggleStatusButton(false, userId));
                }
            })
    }
};

export default usersReducer;