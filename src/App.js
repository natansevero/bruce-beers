import React from 'react';
import Header from './components/Header';
import Routes from './Routes';
import Container from 'react-bootstrap/Container';

import './App.css';

const App = () => (
    <div>
        <Header title='Bruce Beers' />
        <Container>
            <Routes />
        </Container>
    </div>
)

export default App;