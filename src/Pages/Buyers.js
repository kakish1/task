import React, { useState } from 'react';
import BuyersInfo from './BuyersInfo';
import AllBayers from './AllBuyers';
import './style.css';
import { orderBy } from 'lodash';

const Buyers = (props) => {

    const [buyers, setBuyers] = useState([
        { id: 1, name: 'Ivan', check: 5000, count: 12, sum: 121414  },
        { id: 2, name: 'Andrei', check: 15000, count: 2, sum: 1241241245 },
        { id: 3, name: 'Erbol', check: 12334, count: 24, sum: 23536363 },
        { id: 4, name: 'Erasyl', check: 112333, count: 68, sum: 37582},
        { id: 5, name: 'Ask', check: 12222, count: 5, sum: 458434748},
        { id: 6, name: 'Tako', check: 34525, count: 124, sum: 12547},
        { id: 7, name: 'Erbol', check: 256, count: 577, sum: 125267900},
        { id: 8, name: 'Dauletkhan', check: 25678, count: 235, sum: 8780},
        { id: 9, name: 'Bibarys', check: 6845, count: 67, sum: 378},
        { id: 10, name: 'Ansar', check: 345768, count: 25, sum: 987654},
        { id: 11, name: 'Agza', check: 6994, count: 167, sum:4987655 },
        { id: 12, name: 'Aset', check: 13567, count: 154, sum: 23467},
        { id: 13, name: 'Aldik', check: 124565, count: 1678, sum: 32627},
        { id: 14, name: 'Estai', check: 124444, count: 56, sum: 262727},
        { id: 15, name: 'Arman', check: 5000, count: 1, sum: 8695464},
    ])

    let [sorting, setSorting] = useState({
        sort: 'asc', //desc
        sortField: 'id'
    })

    const onSort = (sortField) => {
        const clonedArray = [...buyers];
        const sortType = sorting.sort === 'asc' ? 'desc' : 'asc';
        const orderedData = orderBy(clonedArray, sortField, sortType);
        setBuyers(
            orderedData
        );

        setSorting({
            sort: sortType,
            sortField
        })


    }

    return (
        <div className="buyersBlock">
            {(props.match.params.id) ? <BuyersInfo id={props.match.params.id} buyers={buyers} /> : <AllBayers buyers={buyers} onSort={onSort} />}
        </div>

    );
}

export default Buyers;