import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './style.css';
import { Redirect } from 'react-router';


const Login = (props) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            {
                !props.isAuth ? <Redirect to='/login' /> : <Redirect to='/terminals' />

            }
            <div className='loginForm'>
                <Container>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Login</Form.Label>
                            <Form.Control type="login" placeholder="Enter login" value={login} onChange={e => setLogin(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                            {   props.error ?                                
                                <Form.Text className="text">
                                   {props.error}
                                </Form.Text> 
                                :
                                ''
                            }
                        </Form.Group>
                        <Button variant="primary" onClick={() => props.fetchData(login, password)}>
                            Log in
                    </Button>
                    </Form>
                </Container>
            </div>
        </>
    );
}

export default Login;