import React from 'react';

export default class Smurf extends React.Component {
    render() {
        const {
            smurf,
        } = this.props;

        return (
            <div>
                <div>{smurf.name}</div>
                <em>{smurf.age}</em>
                <div>{smurf.height}</div>
            </div>
        );
    }
}
