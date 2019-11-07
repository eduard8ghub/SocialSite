import React from "react";
import s from "./Settings.module.css";
import Button from "antd/lib/button";
import {Icon, Input, Switch, Tooltip} from "antd";
import {showStatus} from "../../redux/settings-reducer";


const Settings = (props) => {
    let changeNameInput = (e) => {
        props.changeName(e.target.value);
    };

    let changeStatusInput = (e) => {
        props.changeStatus(e.target.value);
    };

    let onShowStatus = (e) => {
        props.showStatus(e);
    };

    return (
      <>
          <div className={s.top_line}>
              <h2>Settings</h2>
              <Button type="primary">Save</Button>
          </div>
          <div className={s.wrap_change_photo}>
              <div className={s.photo}><img src={props.user.avatarSrc} alt="avatar"/></div>
              <Button>Change</Button>
          </div>
          <div className={s.wrap_info}>
              <Input
                  onChange={changeNameInput}
                  placeholder="Enter your username"
                  value={props.user.fullName}
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  suffix={
                      <Tooltip title="Extra information">
                          <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                      </Tooltip>
                  }
              />
              <Input
                  placeholder="Enter your location"
                  value={props.user.location.country + ',' + props.user.location.city}
                  prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  suffix={
                      <Tooltip title="Extra information">
                          <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                      </Tooltip>
                  }
              />
              {
                  props.isStatus === true ?
                      <Input
                          onChange={changeStatusInput}
                          placeholder="Enter your status"
                          value={props.user.status}
                          prefix={<Icon type="file-text" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          suffix={
                              <Tooltip title="Extra information">
                                  <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                              </Tooltip>
                          }
                      />
                      : null
              }

              <Switch onChange={onShowStatus} checked={props.isStatus} checkedChildren="Status" unCheckedChildren="Status" defaultChecked />

          </div>
      </>
    );
};

export default Settings;
