import React from 'react';
import Switch from '../switch/Switch';
import './switch-label.scss';

class LabelSwitch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='label-switch'>
                <p>{this.props.label}</p>
                <Switch onToggle={this.props.onAction} />
            </div>
        );
    }
}

export default LabelSwitch;