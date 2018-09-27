import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import TopMenu from './menu';

import {clickLoginButton} from "../actions/loginActions";

class MainMenu extends Component {

    isUserLogin = () => {
        this.props.displayProfile
            ? this.props.clickLoginButton()
            : this.props.history.push('/login');
    }

    render() {
        const {displayProfile} = this.props;
        return (
            <TopMenu isLogin={displayProfile} isUserLogin={() => this.isUserLogin()}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        displayProfile: state.loginStore.isLogin
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        clickLoginButton: () => {
            dispatch(clickLoginButton());
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainMenu));
