import React from 'react';
import './drumpad-button.scss';

class DrumPadButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // let audio = new Audio(this.props.audioFile);
        return (
            <button className='drumpad-button' type="button"
            onClick={this.props.onClick}>
                <p>{this.props.keyName}</p>
            </button>
        );
    }
}

export default DrumPadButton;