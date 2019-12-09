import React from 'react';
// import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getBeersByPageNumber } from '../../actions';

class Beers extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            pageNumber: 1
        }
    }

    componentDidMount() {
        this.props.getBeersByPageNumber(this.state.pageNumber);
    }

    handleShowMore() {
        this.setState({ ...this.state, pageNumber: this.state.pageNumber + 1 }, () => {
            this.props.getBeersByPageNumber(this.state.pageNumber);
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.beers.map((beer, index) => (
                        <li key={index}>
                            <b>Name:</b> {beer.name} | <b>Tagline;</b> {beer.tagline}
                        </li>
                    ))}
                </ul>

                <Button onClick={this.handleShowMore.bind(this)}>Show more</Button>
            </div>
        )
    }
}

const mapStateToProps = state => ({ beers: state.beer.list });

const mapDispatchToProps = dispatch => bindActionCreators({ getBeersByPageNumber }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Beers);