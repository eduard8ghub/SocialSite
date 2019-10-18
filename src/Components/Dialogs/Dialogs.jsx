import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const listDialogs = [
    {name: 'Dima',status: 'online',id: 1},
    {name: 'Vasea',status: 'offline',id: 2},
    {name: 'Olea',status: 'online',id: 3},
    {name: 'Lena',status: 'offline',id: 4}
];

const messagesList = [
    {message: 'Hi how are you?'},
    {message: 'Hi i am Andrey?'},
    {message: 'Hyyyyy'}
];



const Dialogs = (props) => {
    console.log(props);
  return (
      <div className={s.dialogs}>
          <div className={s.dialogsItems}>
              <h3>Dialogs</h3>
              <div className={s.dialog}>
                  {
                      listDialogs.map((item) => (
                          <NavLink to={'/' + item.id}>
                              <span className={s.iconStatus + ' ' + (item.status === 'online' ? s.iconOnline: s.iconOffline)}> </span>
                              <div>{item.name}</div>
                          </NavLink>
                      ))
                  }
              </div>

          </div>
          <div className={s.messages}>
              {
                  messagesList.map(itemMessage => (
                      <div className={s.message}>{itemMessage.message}</div>
                  ))
              }
          </div>
      </div>
  );
};

export default Dialogs;



// {
//     list.map(item => (
//         <NavLink to={props.location.pathname} activeClassName={s.selectedDialog}>
//             <span className={s.iconStatus + ' ' + (item.status === 'online' ? s.iconOnline : s.iconOffline)}> </span>
//             <div>{item.name}</div>
//         </NavLink>
//     ))
// }