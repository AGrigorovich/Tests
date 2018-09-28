import React from 'react';

import {Button, ControlLabel, Col, Label, FormControl, FormGroup} from 'react-bootstrap';

const LoginForm = (props) => {
    const {isLogin, userLogin, setUserLogin, setUserPassword, errorMessage} = props;
    return (
        <Col sm={4}>
            {isLogin && <h1 style={{color: 'green'}}>Вы уже зарегестрированы</h1>}
            <FormGroup>
                <ControlLabel>Форма регистрации</ControlLabel><br/>
                <Label>Логин:</Label>
                <FormControl type="text" placeholder="Введите логин или email..."
                             onChange={(event) => setUserLogin(event)}/>
                <Label>Пароль:</Label>
                <FormControl type="password" placeholder="Введите пароль..."
                             onChange={(event) => setUserPassword(event)}/>
                <span style={{color: 'red'}}>{errorMessage}</span>
            </FormGroup>
            <Button bsStyle="primary" onClick={() => userLogin()}>Регистрация</Button>
        </Col>
    )
};

export default LoginForm;
