const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';

let initialState = {
    users: [
        // {
        //     id: 1,
        //     avatarSrc: 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png',
        //     follow: true, fullName: 'Dima K',
        //     status: 'The best status 1',
        //     location: {country: 'Belorusia', city: 'Minsk'}
        // },
        // {
        //     id: 2,
        //     avatarSrc: 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png',
        //     follow: true, fullName: 'Dima K',
        //     status: 'The best status 1',
        //     location: {country: 'Belorusia', city: 'Minsk'}
        // },
        // {
        //     id: 3,
        //     avatarSrc: 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png',
        //     follow: true, fullName: 'Dima K',
        //     status: 'The best status 1',
        //     location: {country: 'Belorusia', city: 'Minsk'}
        // }

    ],
    totalUsersCount: 25,
    showUsersToPage: 3,
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, follow: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, follow: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            };
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const changeCurrentPageAC = (pageNumber) => ({type: CHANGE_CURRENT_PAGE, pageNumber});
export const showPagesAC = (pages) => ({type: SET_USERS, pages});

export default usersReducer;