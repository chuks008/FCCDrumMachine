import React from 'react';
import './switch.scss'; // switch css

class Switch extends React.Component {
    render() {
        return (
            <label className='switch'>
                <input type="checkbox" />
                <span className="slider"></span>
            </label>
        );
    }
}

export default Switch;