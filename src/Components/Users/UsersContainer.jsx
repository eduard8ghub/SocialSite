import Users from "./Users";
import {connect} from "react-redux";
import {changeCurrentPageAC, followAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        showUsersToPage: state.usersPage.showUsersToPage,
        currentPage: state.usersPage.currentPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        changeCurrentPage: (pageNumber) => {
            dispatch(changeCurrentPageAC(pageNumber))
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;