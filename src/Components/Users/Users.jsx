import React from "react";
import s from "./Users.module.css";
import Button from "antd/es/button";
import axios from "axios";


const Users = (props) => {
    let pages = [];
    let pagesCount = Math.ceil(props.totalUsersCount / props.showUsersToPage);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let onUnFollow = (idUser) => {
        // axios.post(`http://localhost:3004/users/1`)
        //     .then((respons) => {
        //         debugger
        //
        //     });
    };

    let follow = (idUser) => {
        props.setFollow()
    };

    return (
        <div>
            <h3>Users</h3>
            {pages.map(p => (
                <span onClick={() => {
                    props.onChangePage(p)
                }}
                      className={props.currentPage === p && s.active_page}>{p}</span>
            ))}

            {
                props.users.map((u, index) =>
                    <div className={s.user_item} key={index}>
                        <div className={s.wrap_avatar}>
                            <span className={s.avatar}><img src={u.avatarSrc} alt="avatar"/></span>
                            {u.follow === true
                                ? <Button type="primary" onClick={() => {onUnFollow(u.id)}} >UnFollow</Button>
                                : <Button type="primary" onClick={() => {follow(u.id)}} >Follow</Button>
                            }
                        </div>
                        <div className={s.wrap_info}>
                            <div className={s.left_side}>
                                <span className={s.name}>{u.fullName}</span>
                                <div className={s.status}>{u.status} {index + 1}</div>
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