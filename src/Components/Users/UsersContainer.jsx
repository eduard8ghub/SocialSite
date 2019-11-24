import {connect} from "react-redux";
import {
    changeCurrentPage,
    follow,
    followTC,
    getUsersThunkCreator,
    setUsers,
    unFollow, unFollowTC,
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.showUsersToPage)
    }

    onChangePage = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.currentPage, this.props.showUsersToPage)
    };

    onFollow = (userId) => {
        this.props.followTC(userId);
    };

    onUnFollow = (userId) => {
        this.props.unFollowTC(userId);
    };

    render() {
        return (
            <>
                {this.props.isFetching === true ? <Preloader/> : null}
                <Users {...this.props} onChangePage={this.onChangePage} onFollow={this.onFollow} onUnFollow={this.onUnFollow}/>
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
        isFetching: state.preloaderC.isFetching,
        statusLoadingButton: state.usersPage.statusLoadingButton
    }
};

// let WithUrlDataCC = (UsersContainer);

export default compose(
    connect(mapStateToProps,
        {follow, unFollow, setUsers, changeCurrentPage, getUsersThunkCreator, followTC, unFollowTC}
    ),
    WithAuthRedirect,
    withRouter
)(UsersContainer);
