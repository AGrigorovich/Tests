import React from 'react';

import {Link} from "react-router-dom";

import {Navbar, Nav, NavItem, Button} from 'react-bootstrap';

const TopMenuNavBar = (props) => {
    const {singOut} = props;
    return (
        <Navbar inverse>
            <Nav>
                <NavItem componentClass={Link} href="/login" to="/login">Регистрация</NavItem>
                <NavItem componentClass={Link} href="/scan" to="/scan">Сканировать</NavItem>
                <NavItem componentClass={Button}
                         onClick={() => singOut()}>Выйти</NavItem>
            </Nav>
        </Navbar>
    )
};

export default TopMenuNavBar;
