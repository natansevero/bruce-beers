import React from 'react';
// import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getOneBeerById } from '../../actions'

class Beer extends React.Component {
    
    componentDidMount() {
        this.props.getOneBeerById(this.props.match.params.id);
    }

    render() {
        return (
            <div>
                <img src={this.props.beer.image_url} alt={this.props.beer.name} />
                <ul>
                    <li>{this.props.beer.name}</li>
                    <li>{this.props.beer.tagline}</li>
                    <li>{this.props.beer.description}</li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({ beer: state.beer.single });

const mapDispatchToProps = dispatch => bindActionCreators({ getOneBeerById }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Beer);