import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import preloaderReducer from "./preloader-reducer";
import settingsReducer from "./settings-reducer";

let reducer = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
  settingsPage: settingsReducer,
  sideBar: sidebarReducer,
  preloaderC: preloaderReducer,
});

let store = createStore(reducer);


window.store = store;
export default store;