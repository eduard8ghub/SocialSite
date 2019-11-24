import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    dataAuth: {
        id: null,
        email: null,
        login: null
    },
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                dataAuth: {...action.data},
                isAuth: true
            };
        default:
            return state;
    }
};

export const setUserData = (id, email, login, status) => ({type: SET_USER_DATA, data: {id, email, login}});

export const authTC = () => {
    return (dispatch) => {
        authAPI.setAuth()
            .then(data => {
                if(data.resultCode !== 1) {
                    let {email, id, login} = data.data;
                    dispatch(setUserData(email, id, login))
                }
            })
    }
};

// export default authReducer1;