import React from 'react';

import {Input} from 'element-react';

const LoginForm = (props) => {
    const {type, placeholder, onChange, onKeyPress, value} = props;
    return (
        <Input type={type} placeholder={placeholder} value={value} onKeyPress={(event) => {
            event.key === "Enter" && onKeyPress()
        }} onChange={(value) => onChange(value)}/>
    )
};

export default LoginForm;
