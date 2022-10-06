import React, { useContext } from 'react';
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { NavLink, useLocation} from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Auth = observer(() => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Log In' : "Sign Up"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your email..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your password..."
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Do not have an account? <NavLink to={REGISTRATION_ROUTE}>Sign Up!</NavLink>
                            </div>
                            :
                            <div>
                                Already have an accoun? <NavLink to={LOGIN_ROUTE}>Log In!</NavLink>
                            </div>
                        }
                        <Button className="mt-3">
                            {isLogin ? 'Log In' : 'Sign Up'}
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
});

export default Auth;