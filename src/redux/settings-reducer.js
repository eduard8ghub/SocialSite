const CHANGE_NAME = "CHANGE_NAME";
const CHANGE_STATUS = "CHANGE_STATUS";
const SHOW_STATUS = "SHOW_STATUS";
const SET_USER = "SET_USER";

let initialState = {
    user: {
        id: 1,
        avatarSrc: 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png',
        follow: true,
        fullName: 'Dima K',
        status: 'The best status 1',
        location: {country: 'Belorusia', city: 'Minsk'},
        date: "12.10.1991"
    },
    isStatus: true

};

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user,
            };
        case CHANGE_NAME:
            return {
                ...state,
                user: {...state.user, fullName: action.newName}
            };
        case CHANGE_STATUS:
            return {
                ...state,
                user: {...state.user, status: action.newStatus}
            };
        case SHOW_STATUS:
            return {
                ...state,
                isStatus: action.isStatus
            };

        default:
            return state;
    }
};

export const changeName = (newName) => ({type: CHANGE_NAME, newName});
export const changeStatus = (newStatus) => ({type: CHANGE_STATUS, newStatus});
export const setUser = (user) => ({type: SET_USER, user});
export const showStatus = (isStatus) => ({type: SHOW_STATUS, isStatus});


export default settingsReducer;