import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSmurfsAsync } from '../actions/index'
import Smurf from './Smurf';

export class Smurfs extends React.Component {
    componentDidMount() {
        this.props.getSmurfsAsync();
    }

    render() {
        return (
            <div>
                <h3>The Smurf Village!</h3>
                <div>
                    {
                        this.props.smurfs.map(smurf => (
                            <Smurf
                                key={smurf.id}
                                smurf={smurf}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        smurfs: state.smurfsReducer,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getSmurfsAsync,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Smurfs);
