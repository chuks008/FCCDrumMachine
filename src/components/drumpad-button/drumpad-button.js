import React from 'react';
import './drumpad-button.scss';

class DrumPadButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: false
        }
    }

    handleClick = () => {
        this.props.onAction(this.props.index);
        this.setState({pressed: true});
    }

    render() {
        const {pressed} = this.state;
        // let audio = new Audio(this.props.audioFile);
        return (
            <button type="button"
                onClick={this.handleClick}
                onTransitionEnd = {() => this.setState({pressed: false})}
                className={pressed ? 'drumpad-button pressed' : 'drumpad-button'}>
                <p>{this.props.keyName}</p>
            </button>
        );
    }
}

export default DrumPadButton;