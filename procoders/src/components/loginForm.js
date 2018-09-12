import React from 'react';

import {Form, Loading} from 'element-react';

import LoginFormInput from '../components/loginFormInput';
import LoginButton from '../components/loginButton';

const LoginForm = (props) => {
    const {checkLoginData, loading, setPasswordValue, setEmailValue, email, password, error} = props;
    return (
        <Form className="loginForm">
            <Loading text="Loading..." loading={loading}>
                <h4>Email:
                    <LoginFormInput type="email" placeholder="Enter your email..." onKeyPress={checkLoginData}
                                    onChange={setEmailValue} value={email}/>
                </h4>
                <h4>Password:
                    <LoginFormInput type="text" placeholder="Enter your password..." value={password}
                                    onKeyPress={checkLoginData}
                                    onChange={setPasswordValue}/>
                </h4>
                <p style={{color: 'red'}}>{error}</p>
                <LoginButton className='el-button--success' buttonClick={checkLoginData} isLogin={false}/>
            </Loading>
        </Form>
    )
};

export default LoginForm;
