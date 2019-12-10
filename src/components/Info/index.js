import React from 'react';

import './style.css';

const Info = ({ label, value }) => (
    <li className='info'>
        <b>{label}</b> <br />
        {value}
    </li>
)

export default Info;