import React from "react";
import s from "./Users.module.css";
import Button from "antd/es/button";
import axios from "axios";


class Users extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:3004/users?_page=${this.props.currentPage}&_limit=${this.props.showUsersToPage}`)
            .then((respons) => {
                this.props.setUsers(respons.data);
            });
    }

    onChangePage = (pageNumber) => {
        this.props.changeCurrentPage(pageNumber);
        axios.get(`http://localhost:3004/users?_page=${pageNumber}&_limit=${this.props.showUsersToPage}`)
            .then((respons) => {
                this.props.setUsers(respons.data);
            });
    };

    render() {

        let pages = [];
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.showUsersToPage); // 7 pages
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <h3>Users</h3>
                {
                    pages.map(p => (
                        <span onClick={() => {this.onChangePage(p)}}
                              className={this.props.currentPage === p && s.active_page}>{p}</span>
                    ))
                }

                {
                    this.props.users.map((u, index) =>
                        <div className={s.user_item} key={index}>
                            <div className={s.wrap_avatar}>
                                <span className={s.avatar}><img src={u.avatarSrc} alt="avatar"/></span>
                                {
                                    !u.status
                                        ? <Button onClick={() => {
                                            this.props.follow(u.id)
                                        }} type="primary">Follow</Button>
                                        : <Button onClick={() => {
                                            this.props.unFollow(u.id)
                                        }} type="primary">UnFollow</Button>
                                }
                            </div>
                            <div className={s.wrap_info}>
                                <div className={s.left_side}>
                                    <span className={s.name}>{u.fullName}</span>
                                    <div className={s.status}>{u.status} {index+1}</div>
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
}

export default Users;