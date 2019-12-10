import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import './style.css';

const Header = props => (
    <header className='header'>
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Navbar.Brand>Bruce Beers</Navbar.Brand>
        </Navbar>
    </header>
)

export default Header;