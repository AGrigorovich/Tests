import React, {Component} from 'react';
import {connect} from 'react-redux';

import LoginForm from '../components/LoginForm';

class Login extends Component {
    state = {
        login: '',
        password: '',
        errorMessage: ''
    };

    userLogin = () => {
        if (this.state.login.length < 6 || this.state.password.length < 2) {
            this.setState({
                errorMessage: 'Вы ввели не верные данные'
            })
        }
        else {
            localStorage.setItem('jwt', btoa(this.state.login + ':' + this.state.password));
            this.props.dispatch({
                type: "USER_LOGIN",
                isLogin: true
            });
            this.props.history.push('/scan');
        }
    };

    setLogin = (event) => {
        this.setState({
            login: event.target.value,
            errorMessage: ''
        });
    };

    setPassword = (event) => {
        this.setState({
            password: event.target.value,
            errorMessage: ''
        });
    };

    render() {
        const {isLogin} = this.props;
        return (
            <LoginForm isLogin={isLogin}
                       userLogin={this.userLogin}
                       setUserLogin={this.setLogin}
                       setUserPassword={this.setPassword}
                       errorMessage={this.state.errorMessage}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        isLogin: state.loginReducer.isLogin
    }
}

export default connect(mapStateToProps)(Login);
