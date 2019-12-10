import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Item from '../../components/Item';

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
                <Row>
                    {this.props.beers.map((beer, index) => (
                        <Col md={4} key={index}>
                            <Item id={beer.id} name={beer.name} tagline={beer.tagline} />
                        </Col>
                    ))}
                </Row>

                <Row>
                    <Col align='center'>
                        <Button onClick={this.handleShowMore.bind(this)}>Show more</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => ({ beers: state.beer.list });

const mapDispatchToProps = dispatch => bindActionCreators({ getBeersByPageNumber }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Beers);