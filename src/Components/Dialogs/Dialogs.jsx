import React from 'react';import s from './Dialogs.module.css';import {NavLink} from "react-router-dom";import {Button, Input} from "antd";const { TextArea } = Input;const Dialogs = (props) => {  let store = props.store;  let data = new Date();  let getData = {    hour: data.getHours().toString(),    minute: data.getMinutes().toString()  };  let currentTime = getData.hour + ':' + (getData.minute.length === 1 ? ('0' + getData.minute) : getData.minute );  let messages = store.getMessages().map((item, index) => (    <div className={s.message + ' ' + (index % 2 ? s.message1 : s.message2)}>      {item.message}      <span className={s.time_mess}>{item.time}</span>    </div>  ));  let dialogs = store.getDialogs().map(item => (    <NavLink to={'/' + item.id}>      <span className={s.iconStatus + ' ' + (item.status === 'online' ? s.iconOnline : s.iconOffline)}> </span>      <div>{item.name}</div>    </NavLink>  ));  let newMessage = React.createRef();  let addMessage = () => {    let text = newMessage.current.textAreaRef.value;    store.addMessage(text, currentTime);  };  let changeMessage = () => {    let txt = newMessage.current.textAreaRef.value;    store.updateText(txt);  };  return (    <div className={s.dialogs}>      <div className={s.dialogsItems}>        <h3>Dialogs</h3>        <div className={s.dialog}>          {dialogs}        </div>      </div>      <div className={s.messages}>        {messages}        <TextArea rows={2} ref={newMessage} value={store.getNewMessage()} onChange={changeMessage}/>        <Button onClick={addMessage} type="primary">Send</Button>      </div>    </div>  );};export default Dialogs;