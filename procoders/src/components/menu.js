import React from 'react';
import {Link} from 'react-router-dom';

import LoginButton from './loginButton';

import {Menu} from 'element-react';
import 'element-theme-default';

const TopMenu = (props) => {
    const {isLogin, isUserLogin} = props;
    return (
        <Menu theme="dark" className="el-menu-demo" mode="horizontal">
            <LoginButton className={"el-button--text"} isLogin={isLogin}
                         buttonClick={isUserLogin}/>
            <Link to='/main' className="link">
                <Menu.Item index="1">Main</Menu.Item>
            </Link>
            <Link to='/news' className="link">
                <Menu.Item index="2">News</Menu.Item>
            </Link>
            {isLogin && (
                <Link to='/profile' className="link">
                    <Menu.Item index="3">Profile</Menu.Item>
                </Link>
            )}
        </Menu>
    );
};

export default TopMenu;
