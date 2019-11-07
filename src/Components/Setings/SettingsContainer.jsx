import React from "react";
import Settings from "./Settings";
import {connect} from "react-redux";
import {changeName, changeStatus, setUser, showStatus} from "../../redux/settings-reducer";
import axios from "axios";
import {withRouter} from "react-router-dom";

class SettingsContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 1;
        }
        axios.get(`http://localhost:3004/users` + userId)
            .then((respons) => {
                this.props.setUser(respons.data);
            });
    }

    render() {

        return (
          <Settings
              user={this.props.user}
              isStatus={this.props.isStatus}
              changeName={this.props.changeName}
              changeStatus={this.props.changeStatus}
              showStatus={this.props.showStatus}
          />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        user: state.settingsPage.user,
        isStatus: state.settingsPage.isStatus
    }
};

let WithUrlDataContainerComponent = withRouter(SettingsContainer);

export default connect(mapStateToProps,{
    setUser,
    changeName,
    changeStatus,
    showStatus
})(WithUrlDataContainerComponent);