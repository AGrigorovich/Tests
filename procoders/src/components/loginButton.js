import React from 'react';

import {Button} from 'element-react';
import 'element-theme-default';

const LoginButton = (props) => {
    const {isLogin, buttonClick, className} = props;
    return (
        <Button className={className}
                onClick={() => buttonClick()}>
            {isLogin ? 'LogOut' : 'LogIn'}
        </Button>
    )
}

export default LoginButton;
