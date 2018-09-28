import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Button, ControlLabel, Col, Label, FormControl, FormGroup} from 'react-bootstrap';

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
        return (
            <Col sm={4}>
                {this.props.isLogin && <h1 style={{color: 'green'}}>Вы уже зарегестрированы</h1>}
                <FormGroup>
                    <ControlLabel>Форма регистрации</ControlLabel><br/>
                    <Label>Логин:</Label>
                    <FormControl type="text" placeholder="Введите логин или email..."
                                 onChange={(event) => this.setLogin(event)}/>
                    <Label>Пароль:</Label>
                    <FormControl type="password" placeholder="Введите пароль..."
                                 onChange={(event) => this.setPassword(event)}/>
                    <span style={{color: 'red'}}>{this.state.errorMessage}</span>
                </FormGroup>
                <Button bsStyle="primary" onClick={() => this.userLogin()}>Регистрация</Button>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        isLogin: state.loginReducer.isLogin
    }
}

export default connect(mapStateToProps)(Login);
