import React from "react";
import s from "./Users.module.css";
import Button from "antd/es/button";
import defaultAvatar from './../../Images/avatar.png';


const Users = (props) => {
    let pages = [];
    let pagesCount = Math.ceil(props.totalUsersCount / props.showUsersToPage);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <h3>Users</h3>
            {pages.map(p => (
                <span key={p} onClick={() => {
                    props.onChangePage(p)
                }}
                      className={props.currentPage === p ? (s.active_page + ' ' + s.buttonPagination) : s.buttonPagination}>{p}</span>
            ))}
            {
                props.users.map((u, index) =>
                    <div className={s.user_item} key={index}>
                        <div className={s.wrap_avatar}>
                            <span className={s.avatar}><img
                                src={u.photos.small !== null ? u.photos.small : defaultAvatar} alt="avatar"/></span>

                            {u.followed === true
                                ? <Button loading={props.statusLoadingButton.some(id => id === u.id)} type="primary" onClick={() => {props.onUnFollow(u.id)}}>UnFollow</Button>
                                : <Button loading={props.statusLoadingButton.some(id => id === u.id)} type="primary" onClick={() => {props.onFollow(u.id)}}>Follow</Button>
                            }
                        </div>
                        <div className={s.wrap_info}>
                            <div className={s.left_side}>
                                <span className={s.name}>{u.name}</span>
                                <div className={s.status}>{u.status} ID:{u.id}</div>
                            </div>
                            <div className={s.right_side}>
                                <div className={s.location}>
                                    <div className={s.country}>Rusia</div>
                                    <div className={s.city}>Moscow</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
};

export default Users;