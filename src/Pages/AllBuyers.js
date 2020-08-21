import React, { useState } from 'react';
import { Container, Table, Nav, Button, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Pagination } from '../Components/Pagination';
import './style.css';



const AllBayers = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [buyersPerPage, setBuyersPerPage] = useState(5);

    const indexOfLastBuyer = currentPage * buyersPerPage;
    const indexOfFirstBuyer = indexOfLastBuyer - buyersPerPage;
    const currentBuyers = props.buyers.slice(indexOfFirstBuyer, indexOfLastBuyer);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container>
            <Table bordered striped hover={true} style={{width : 'auto' }}>
                <thead style={{textAlign : 'center'}}>
                    <tr>
                        <td> ID Покупателя </td>
                        <td> Имя покупателя</td>
                        <td onClick={() => props.onSort('check')}>Средний чек</td>
                        <td onClick={() => props.onSort('count')}>Количество покупок</td>
                        <td onClick={() => props.onSort('sum')}>Общая выручка</td>                        
                    </tr>
                </thead>
                <tbody style={{textAlign : 'center'}}>

                    {
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
                    }
                </tbody>
            </Table>
            <div className="showButtons">
                <Card.Title>Show by:</Card.Title>
                <Button variant='primary' onClick={() => setBuyersPerPage(5)}> 5</Button>
                <Button variant='primary' onClick={() => setBuyersPerPage(10)}> 10</Button>
                <Button variant='primary' onClick={() => setBuyersPerPage(15)}> 15</Button>
            </div>
            {buyersPerPage === 5 || 10 ? <Pagination buyersPerPage={buyersPerPage} totalBuyers={props.buyers.length} paginate={paginate} />  : ''}
        </Container>
    );
}

export default AllBayers;