import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Notification} from 'element-react';

import LoginForm from './loginForm';

import {sendUserDataForLoginToApi} from '../actions/loginActions';

class Login extends Component {

    state = {
        email: '',
        password: '',
        error: '',
    };

    componentDidUpdate = (prevProps) => {
        if (this.props.isLogin) {
            Notification({
                title: "Congratulations",
                message: "you was successfully login",
                type: "success",
            });
            this.props.history.push('/profile');
        }
        if (prevProps.error !== this.props.error) {
            this.props.error && Notification({
                title: "Something went wrong",
                message: this.props.error,
                type: "error",
            });
            this.setState({password: ''});
        }
    };

    setEmailValue = (newValue) => {
        this.setState({email: newValue, error: ''})
    };

    setPasswordValue = (newValue) => {
        this.setState({password: newValue, error: ''})
    };

    checkLoginData = () => {
        if (this.state.email.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/) && this.state.password.trim().length > 1) {
            this.props.sendUserDataForLogin({username: this.state.email, password: this.state.password});
        }
        else {
            if (!this.state.email.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)) {
                this.setState({error: 'Не верно введен email'});
            }
            else if (this.state.password.trim().length < 1) {
                this.setState({error: 'Слишком короткий пароль'});
            }
        }
    };

    render() {
        const {isLoading} = this.props;
        return (
            <LoginForm loading={isLoading} setPasswordValue={(val) => this.setPasswordValue(val)}
                       setEmailValue={(val) => this.setEmailValue(val)}
                       checkLoginData={() => this.checkLoginData()} email={this.state.email}
                       password={this.state.password} error={this.state.error}/>
        )
    }
}

const mapStateToProps = (state) => ({
    error: state.loginStore.error,
    isLogin: state.loginStore.isLogin,
    isLoading: state.loginStore.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
    sendUserDataForLogin: (userData) => {
        dispatch(sendUserDataForLoginToApi(userData));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
