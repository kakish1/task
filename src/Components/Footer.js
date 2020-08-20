import React from 'react';
import { Card, Container } from 'react-bootstrap';

export const Footer = () => {
    return (
        <div>

            <Card.Footer fixed="bottom" className="text-muted">
                <Container> Copyright © 2020 </Container>
            </Card.Footer>

        </div>
    );
}

