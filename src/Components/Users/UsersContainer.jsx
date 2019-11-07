import {connect} from "react-redux";
import {
    changeCurrentPage,
    follow,
    setUsers,
    unFollow,
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import {setIsFetching} from "../../redux/preloader-reducer";
import Preloader from "../Common/Preloader/Preloader";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.showUsersToPage)
            .then((data) => {
                this.props.setIsFetching(false);
                this.props.setUsers(data);
            });
    }

    // setFollow = (userId) => {
    //     console.log(this.props.users[1]);
    //     axios.put('http://localhost:3004/users/1', {})
    //         .then((respons) => {
    //             debugger
    //             respons.data.follow = true
    //         });
    // };

    onChangePage = (pageNumber) => {
        this.props.changeCurrentPage(pageNumber);
        this.props.setIsFetching(true);
            usersAPI.getUsers(pageNumber, this.props.showUsersToPage)
            .then((data) => {
                this.props.setIsFetching(false);
                this.props.setUsers(data);
            });
    };

    render() {
        return (
            <>
                {this.props.isFetching === true ? <Preloader/> : null}

                <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    showUsersToPage={this.props.showUsersToPage}
                    currentPage={this.props.currentPage}
                    onChangePage={this.onChangePage}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    match{...this.props.match}
                    setFollow={this.setFollow}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        showUsersToPage: state.usersPage.showUsersToPage,
        currentPage: state.usersPage.currentPage,
        isFetching: state.preloaderC.isFetching
    }
};

let WithUrlDataCC = withRouter(UsersContainer);

export default connect(mapStateToProps,
    {follow, unFollow, setUsers, changeCurrentPage, setIsFetching}
    )(WithUrlDataCC);

