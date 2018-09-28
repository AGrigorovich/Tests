import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from "react-redux";

import {Navbar, Nav, NavItem, Button} from 'react-bootstrap';

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
            <Navbar inverse>
                <Nav>
                    <NavItem componentClass={Link} href="/login" to="/login">Регистрация</NavItem>
                    <NavItem componentClass={Link} href="/scan" to="/scan">Сканировать</NavItem>
                    <NavItem componentClass={Button}
                             onClick={() => this.exit()}>Выйти</NavItem>
                </Nav>
            </Navbar>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLogin: state.loginReducer.isLogin
    }
}

export default withRouter(connect(mapStateToProps)(TopMenu));