import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Info from '../../components/Info';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getOneBeerById } from '../../actions'

import './style.css';

class Beer extends React.Component {

    componentDidMount() {
        this.props.getOneBeerById(this.props.match.params.id);
    }

    render() {
        return (
            <Row>
                <Col align='center'>
                    <img src={this.props.beer.image_url} width='220' height='600' alt={this.props.beer.name} />
                </Col>
                <Col>
                    <ul className='detail'>
                        <Info label='Name' value={this.props.beer.name} />
                        <Info label='Tagline' value={this.props.beer.tagline} />
                        <Info label='Description' value={this.props.beer.description} />
                    </ul>

                    <Button onClick={() => this.props.history.goBack()}>
                        Back
                    </Button>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => ({ beer: state.beer.single });

const mapDispatchToProps = dispatch => bindActionCreators({ getOneBeerById }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Beer);