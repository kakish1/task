import React, { useState } from 'react';
import { Container, Table, Nav, Button, Card, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Pagination } from '../Components/Pagination';
import './style.css';



const AllBayers = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [buyersPerPage, setBuyersPerPage] = useState(5);
    const [name, setName] = useState('');
    const [filtered, setFiltered] = useState(false);

    const indexOfLastBuyer = currentPage * buyersPerPage;
    const indexOfFirstBuyer = indexOfLastBuyer - buyersPerPage;
    const currentBuyers = props.buyers.slice(indexOfFirstBuyer, indexOfLastBuyer);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const filteredArr = props.buyers.filter(item => item['name'].toLowerCase() === name.toLowerCase());

    

    const onFilter = () => {
        console.log(filteredArr)
        setFiltered(true);
    }

    return (
        <Container>
            <Form.Group controlId="filterName">
                <Form.Label> Фильтрация по имени: </Form.Label>
                <Form.Control type="filterName" placeholder="Введите имя..." style={{ width: '250px' }}
                    value={name} onChange={e => setName(e.target.value)}
                    onBlur={()=>{''}}
                />
                <Button onClick={() => onFilter()} style={{ margin: '15px' }}> Найти </Button>
                <Button variant='danger' onClick={() => setFiltered(false)} style={{ marginLeft: '3px' }}> Очистить </Button>
            </Form.Group>
            <Table bordered striped hover={true} style={{ width: 'auto', textAlign: 'center' }}>
                <thead >
                    <tr>
                        <td> ID Покупателя </td>
                        <td> Имя покупателя</td>
                        <td onClick={() => props.onSort('check')}>Средний чек</td>
                        <td onClick={() => props.onSort('count')}>Количество покупок</td>
                        <td onClick={() => props.onSort('sum')}>Общая выручка</td>
                    </tr>
                </thead>
                <tbody >

                    {
                        !filtered ?
                            currentBuyers.map((items =>
                                <>
                                    <tr key={items.id}>
                                        <td> <Nav.Link to={'/buyers/' + items.id} as={NavLink}> {items.id} </Nav.Link></td>
                                        <td>{items.name}</td>
                                        <td>{items.check}</td>
                                        <td>{items.count}</td>
                                        <td>{items.sum}</td>
                                    </tr>
                                </>
                            ))

                            :

                            filteredArr.map((items =>
                                <>
                                    <tr key={items.id}>
                                        <td> <Nav.Link to={'/buyers/' + items.id} as={NavLink}> {items.id} </Nav.Link></td>
                                        <td>{items.name}</td>
                                        <td>{items.check}</td>
                                        <td>{items.count}</td>
                                        <td>{items.sum}</td>
                                    </tr>
                                </>
                            ))
                    }
                </tbody>
            </Table>
            <div className="showButtons">
                <Card.Title>Show by:</Card.Title>
                <Button variant='primary' onClick={() => setBuyersPerPage(5)}> 5</Button>
                <Button variant='primary' onClick={() => setBuyersPerPage(10)}> 10</Button>
                <Button variant='primary' onClick={() => setBuyersPerPage(15)}> 15</Button>
            </div>
            {buyersPerPage === 5 || 10 ? <Pagination buyersPerPage={buyersPerPage} totalBuyers={props.buyers.length} paginate={paginate} /> : ''}
        </Container>
    );
}

export default AllBayers;