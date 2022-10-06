import React, { useContext } from 'react'
import { Context } from '../index'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { WELCOME_ROUTE } from '../utils/consts';
import Button from 'react-bootstrap/Button';
import { observer } from "mobx-react-lite";

const NavBar = observer (() => {
    const { user } = useContext(Context)
    console.log(user)
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <NavLink to={WELCOME_ROUTE}>Football Agent</NavLink>
                {user.isAuth ? 
                    <Nav className="ml-auto">
                        <Button variant="dark">Admin</Button>
                        <Button variant="dark" className="ms-2">Log In</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant="dark" onClick={() => user.setIsAuth(true)} >Log In</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});
export default NavBar;