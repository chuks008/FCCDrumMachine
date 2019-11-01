import React from 'react';
import './volume-slider.scss';

class VolumeControl extends React.Component {

    render() {
        return(
            <div id='slider-container'>
                    <input className='volume-slider' type='range' min='0' max='100' defaultValue='50' />
            </div>
        );
    }
}

export default VolumeControl;