import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import { Button, Input } from "antd";
import {Redirect} from 'react-router-dom';

const { TextArea } = Input;

const Dialogs = (props) => {

  let state = props.dialogsPage;
  let newMessage = React.createRef();

  let data = new Date();
  let getData = {
    hour: data.getHours().toString(),
    minute: data.getMinutes().toString()
  };
  let currentTime = getData.hour + ':' + (getData.minute.length === 1 ? ('0' + getData.minute) : getData.minute);

  let onAddMessage = () => {
    props.onAddMessage(currentTime);
  };

  let onChangeMessage = () => {
    let txt = newMessage.current.textAreaRef.value;
    props.onChangeMessage(txt)
  };

  let messages = props.messages.map((item, index) => (
    <div key={index} className={s.message + ' ' + (index % 2 ? s.message1 : s.message2)}>
      {item.message}
      <span className={s.time_mess}>{item.time}</span>
    </div>
  ));
  let dialogs = props.listDialogs.map(item => (
    <NavLink key={item.id} to={'/' + item.id}>
      <span className={s.iconStatus + ' ' + (item.status === 'online' ? s.iconOnline : s.iconOffline)}> </span>
      <div>{item.name}</div>
    </NavLink>
  ));

  

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <h3>Dialogs</h3>
        <div className={s.dialog}>
          {dialogs}
        </div>

      </div>
      <div className={s.messages}>
        {messages}
        <TextArea rows={2} ref={newMessage} value={props.newMessage} onChange={onChangeMessage} />
        <Button onClick={onAddMessage} type="primary">Send</Button>
      </div>
    </div>
  );
};

export default Dialogs;

