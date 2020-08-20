import React from 'react'
import { NavLink } from 'react-router-dom';

export const Pagination = ({buyersPerPage, totalBuyers, paginate}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalBuyers / buyersPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div>
            <nav>
                <ul className='pagination'>
                    {pageNumbers.map(number => (
                        <li key = {number} className='page-item'>
                            <NavLink onClick={() => paginate(number)} to='#' className='page-link'>
                                {number}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
