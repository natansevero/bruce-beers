import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import './style.css';

const Header = ({ title }) => (
    <header className='header'>
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Navbar.Brand>{title}</Navbar.Brand>
        </Navbar>
    </header>
)

export default Header;