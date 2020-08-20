import React from 'react';
import { Container } from 'react-bootstrap';
import './style.css';
const NotFound = () =>
    <div className="notFoundBlock">
        <Container>
            <h3>404 page not found</h3>
            <p>We are sorry but the page you are looking for does not exist.</p>
        </Container>
    </div>

export default NotFound;