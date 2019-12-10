import React from 'react';
import { Link } from 'react-router-dom'
import Info from '../Info/index';

import './style.css';

const Item = ({ id, name, tagline }) => (
    <div className='item'>
        <Link to={`/beers/${id}`}>
            <ul>
                <Info label='Name' value={name} />
                <Info label='Tagline' value={tagline} />
            </ul>
        </Link>
    </div>
)

export default Item;