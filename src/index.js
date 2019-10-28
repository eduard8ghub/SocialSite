import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store , {subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export let renderEntireTree = (store) => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>, document.getElementById('root'));
};

subscribe(renderEntireTree);
renderEntireTree(store);




















// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
