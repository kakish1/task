import React from 'react';
import { Container, Card } from 'react-bootstrap';

const BuyersInfo = (props) => {

    const arr = [props.buyers.find(item => item['id'] == props.id)];
    return (
        <Container>
            <Card>
                <Card.Header>Информация о покупателе</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">


                        {
                            arr.map((items) =>
                                <div key={items.id}>
                                    <p>
                                        Ваш ID : {items.id}
                                    </p>
                                    <p>
                                        Ваше имя : {items.name}
                                    </p>
                                    <p>
                                        Средний чек : {items.check}
                                    </p>
                                    <p>
                                        Количество покупок : {items.count}
                                    </p>
                                    <p>
                                        Общая выручка : {items.sum}
                                    </p>
                                </div>
                            )
                        }
                    </blockquote>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default BuyersInfo;