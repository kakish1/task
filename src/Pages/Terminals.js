import React, { useState, useReducer } from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap';


const Terminals = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [details, dispatch] = useReducer((details, { type, value }) => {
        switch (type) {
          case "add":
            return [...details, {name : value[0], description: value[1]}];
          case "remove":
            return details.filter((_, index) => index !== value);
          default:
            return details;
        }
      }, []);


    return (
        <div className="terminalBlock">
            <Container>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Название терминала</Form.Label>
                        <Form.Control type="name" placeholder="Введите название терминала" value={name} onChange={e => setName(e.target.value)} />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Описание</Form.Label>
                        <Form.Control type="description" placeholder="Введите описание"  value={description} onChange={e => setDescription(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" onClick={() => dispatch({ type: "add", value: [name, description]})}>
                        Добавить
                    </Button>
                </Form>
                <div className="terminalTable">
                    <Table bordered >
                        <thead>
                            <tr>
                                <td>Название терминала</td>
                                <td>Описание</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                details && details.map(((items, index) =>
                                    <>
                                        <tr key={items.id}>
                                            <td>{items.name}</td>
                                            <td>{items.description}</td>
                                            <td><Button variant="danger" value={index} onClick={() => dispatch({ type: "remove", value: index })}>Удалить</Button></td>
                                        </tr>
                                    </>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
}

export default Terminals;