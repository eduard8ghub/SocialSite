import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import preloaderReducer from "./preloader-reducer";
import settingsReducer from "./settings-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";


let reducer = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  settingsPage: settingsReducer,
  sideBar: sidebarReducer,
  preloaderC: preloaderReducer,
  auth: authReducer,
  form: formReducer
});

let store = createStore(reducer, applyMiddleware(thunkMiddleware));


window.store = store;
export default store;