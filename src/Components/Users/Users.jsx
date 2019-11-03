import React from "react";
import s from "./Users.module.css";
import Button from "antd/es/button";
import axios from "axios";


class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.showUsersToPage}`)
            .then((respons) => {
                this.props.setUsers(respons.data.items);
            });
    }

    onChangePage = (pageNumber) => {
        this.props.changeCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.showUsersToPage}`)
            .then((respons) => {
                this.props.setUsers(respons.data.items);
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
                                <span className={s.avatar}><img src={u.photos.small} alt="avatar"/></span>
                                {
                                    !u.followed
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
                                    <span className={s.name}>{u.name}</span>
                                    <div className={s.status}>{u.status}</div>
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