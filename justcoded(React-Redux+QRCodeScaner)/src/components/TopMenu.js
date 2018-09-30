import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";

import TopMenuNavBar from '../components/TopMenuNavBar';

class TopMenu extends Component {
    exit = () => {
        this.props.dispatch({
            type: "USER_LOGIN",
            isLogin: false
        });
        this.props.history.push('/');
        localStorage.clear();
    };

    render() {
        return (
            <TopMenuNavBar singOut={this.exit}/>
        );
    }
}

export default withRouter(connect()(TopMenu));
