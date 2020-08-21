import React, { useState } from 'react';
import { Navbar, Container, Button, Nav, Col, Image } from 'react-bootstrap';
import { Route, Switch } from 'react-router';
import Buyers from '../Pages/Buyers';
import Terminals from '../Pages/Terminals';
import { NavLink } from 'react-router-dom';
import Login from '../Pages/Login';
import NotFound from '../Pages/NotFound';

export const Header = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(['']);

    const logout = () => {
        setIsAuth(false);
    };

    let validate = /^[A-Za-z]\w{7,14}$/;
    const fetchData = (login, password) => {
        fetch(`https://api.github.com/users/${login}`)
            .then(response => response.json())
            .then(data => {
                if (!data.message && password.match(validate)) {
                    setIsAuth(true);
                    setData(data);
                }
                else {
                    setIsAuth(false);
                    setError('Incorrect login or password, try again... ');
                }
            })
            .catch(err => console.log(err));
    }
return (
    <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to="/terminals"> Терминалы  </Nav.Link>
                        <Nav.Link as={NavLink} to="/buyers"> Покупатели  </Nav.Link>
                    </Nav>
                    {
                        !isAuth ?
                            <Button variant="outline-primary" size="sm">
                                <Nav.Link as={NavLink} to="/login"> Login  </Nav.Link>
                            </Button>
                            :
                            <>
                                <Col xs={6} md={1}>
                                    <Image src={data.avatar_url} roundedCircle width="30px" height="30px" />
                                </Col>
                                <Button variant="danger" size="sm" onClick={() => logout()}>
                                    Logout
                                    </Button>
                            </>
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Switch>
            <Route exact path="/login" render={() => <Login fetchData={fetchData} isAuth={isAuth} error={error} />} />
            <Route exact path="/terminals" component={Terminals} />
            <Route exact path="/buyers/:id?" component={Buyers} />
            <Route path="" component={NotFound} />
        </Switch>

    </>
);
}