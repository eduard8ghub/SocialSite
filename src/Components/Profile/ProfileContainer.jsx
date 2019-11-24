import React from "react";
import Profile from "./Profile";
import {compose} from "redux";
import {connect} from "react-redux";
import {getProfile, getProfileStatus, updateProfileStatus} from "../../redux/profile-reducer";


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(5173);
        this.props.getProfileStatus(5173);
    }

    render() {
        return (
            <>
                <Profile {...this.props} updateProfileStatus={this.props.updateProfileStatus}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
};

export default compose(
    connect(mapStateToProps,{getProfile, getProfileStatus, updateProfileStatus})

)(ProfileContainer);