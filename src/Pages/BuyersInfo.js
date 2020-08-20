import React from 'react';
import { Container, Card } from 'react-bootstrap';

const BuyersInfo = (props) => {
    
    const arr = [props.buyers.find(item => item['id'] == props.id)]
    return (
        <Container>
            <Card>
                <Card.Header>Информация о покупателе</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">


                        {
                            arr.map((items) =>
                                <>
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
                                </>
                            )
                        }

                        {/* <p>
                            Ваш ID : {props.buyers.id = props.match.params.id}
                        </p>
                        <p>
                            Ваше имя : {props.buyers.name = props.match.params.id}
                        </p>
                        <p>
                            Средний чек : {props.buyers.check = props.match.params.id}
                        </p>
                        <p>
                            Количество покупок : {props.buyers.count = props.match.params.id}
                        </p> */}
                    </blockquote>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default BuyersInfo;