import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addData, fetchData } from './actions';

import './App.css';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchData();
        console.log('componentDidMount')
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <ul>
                    {this.props.info.map((number, index) => (
                        <li key={index}>{number}</li>
                    ))}
                </ul>
                <button onClick={() => this.props.addData(2)}>Add</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    info: state.data.info
})

const mapDispatchToProps = dispatch => bindActionCreators({ addData, fetchData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);