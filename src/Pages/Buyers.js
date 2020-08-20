import React, { useState } from 'react';
import BuyersInfo from './BuyersInfo';
import AllBayers from './AllBuyers';
import './style.css';

const Buyers = (props) => {

    const [buyers] = useState([
        { id: 1, name: 'Ivan', check: '5000tg', count: '12' },
        { id: 2, name: 'Andrei', check: '15000tg', count: '2' },
        { id: 3, name: 'Erbol', check: '12334tg', count: '24' },
        { id: 4, name: 'Erasyl', check: '112333tg', count: '68' },
        { id: 5, name: 'Ask', check: '12222tg', count: '254' },
        { id: 6, name: 'Tako', check: '34525tg', count: '124' },
        { id: 7, name: 'Erbol', check: '256tg', count: '577' },
        { id: 8, name: 'Dauletkhan', check: '25678tg', count: '1235' },
        { id: 9, name: 'Bibarys', check: '6845tg', count: '67' },
        { id: 10, name: 'Ansar', check: '345768g', count: '25' },
        { id: 11, name: 'Agza', check: '6994tg', count: '167' },
        { id: 12, name: 'Aset', check: '13567tg', count: '154' },
        { id: 13, name: 'Aldik', check: '124565tg', count: '1678' },
        { id: 14, name: 'Estai', check: '124444tg', count: '56' },
        { id: 15, name: 'Arman', check: '124577tg', count: '1' },
        
    ])
    

    return (
        <div className="buyersBlock">
            {(props.match.params.id) ? <BuyersInfo id= {props.match.params.id} buyers = {buyers}/> : <AllBayers buyers = {buyers}/>}
        </div>

    );
}

export default Buyers;