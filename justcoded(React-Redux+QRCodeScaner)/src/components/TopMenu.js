import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";

import TopMenuNavBar from '../components/TopMenuNavBar';

class TopMenu extends Component {
    exit = () => {
        if (this.props.isLogin) {
            this.props.dispatch({
                type: "USER_LOGIN",
                isLogin: false
            });
            this.props.history.push('/');
            localStorage.clear();
        }
    };

    render() {
        return (
            <TopMenuNavBar singOut={this.exit}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLogin: state.loginReducer.isLogin
    }
}

export default withRouter(connect(mapStateToProps)(TopMenu));
