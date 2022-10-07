import React, { useContext } from 'react'
import { Context } from '../index'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, WELCOME_ROUTE, ADMIN_ROUTE } from '../utils/consts';
import Button from 'react-bootstrap/Button';
import { observer } from "mobx-react-lite";

const NavBar = observer (() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    console.log(user)
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <NavLink style={{ color: 'black' }} to={WELCOME_ROUTE}>Football Agent</NavLink>
                {user.isAuth ? 
                    <Nav className="ml-auto">
                        <Button variant={"dark"} onClick={() => navigate(ADMIN_ROUTE)}>Admin</Button>
                        <Button variant={"dark"} className="ms-2" onClick={() => navigate(LOGIN_ROUTE)}>Log In</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant={"dark"} onClick={() => navigate(REGISTRATION_ROUTE)}>Sign Up</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});
export default NavBar;