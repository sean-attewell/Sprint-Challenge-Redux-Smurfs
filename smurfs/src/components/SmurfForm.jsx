import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addSmurfAsync } from '../actions/index';


export class SmurfForm extends React.Component {
    nameRef = React.createRef();
    ageRef = React.createRef();
    heightRef = React.createRef();

    onAddSmurf = () => {
        const nameInput = this.nameRef.current;
        const ageInput = this.ageRef.current;
        const heightInput = this.heightRef.current;

        const newSmurf = {
            name: nameInput.value,
            age: ageInput.value,
            height: heightInput.value
        };

        this.props.addSmurfAsync(newSmurf);

        nameInput.value = '';
        ageInput.value = '';
        heightInput.value = '';
    }

    render() {
        return (
            <div>
                <div>
                    <em>Name: </em>
                    <input ref={this.nameRef} type="text" />
                </div>
                <div>
                    <em>Age: </em>
                    <input ref={this.ageRef} type="text" />
                </div>
                <div>
                    <em>height: </em>
                    <input ref={this.heightRef} type="text" />
                </div>
                <div>
                    <button onClick={this.onAddSmurf}>Add Smurf</button>
                </div>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addSmurfAsync,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(SmurfForm);
