import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authTC, setUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authTC()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        dataAuth: state.auth.dataAuth
    }
};

export default connect(mapStateToProps,{setUserData, authTC})(HeaderContainer);