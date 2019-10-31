import React from 'react';
import '../drumpad/drumpad.scss';
import DrumPadSettings from '../drumpad-settings/drumpad-settings';
import DrumPad from '../drumpad/drumpad';
import fire from '../../fire.jpg';
import './drumpad-container.scss';

const keyMappingsA = [
    {key: 'q', sound:'Chord 1', audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},
    {key: 'w', sound:'Chord 2', audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},
    {key: 'e', sound:'Chord 3', audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},
    {key: 'a', sound:'Shaker', audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},
    {key: 's', sound:'Open HH', audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},
    {key: 'd', sound:'Closed HH', audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},
    {key: 'z', sound:'Punchy Kick', audioFile: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},
    {key: 'x', sound:'Side Kick', audioFile: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},
    {key: 'c', sound:'Snare', audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}
];

const keyMappingsB = [
    {key: 'q', sound:'Heater 1', audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
    {key: 'w', sound:'Heater 2', audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
    {key: 'e', sound:'Heater 3', audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
    {key: 'a', sound:'Heater 4', audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
    {key: 's', sound:'Clap', audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},
    {key: 'd', sound:'Open HH', audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},
    {key: 'z', sound:"Kick n' Hat", audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
    {key: 'x', sound:'Kick', audioFile: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},
    {key: 'c', sound:'Closed HH', audioFile: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}
];

const PowerMode = {
    ON: "on",
    OFF: "off"
};

const BankMode = {
    DEFAULT: "default",
    ALTERNATIVE: "alternative"
};

class DrumContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            mapping: keyMappingsA,
            defaultMode: BankMode.DEFAULT,
            powerMode: PowerMode.OFF
        }

        this.onHandleClick = this.onHandleClick.bind(this);
        this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
        this.toggleMode = this.toggleMode.bind(this);
        this.togglePower = this.togglePower.bind(this);
    }

    handleOnKeyPress(event) {

        if(this.state.powerMode === PowerMode.ON) {
            let keyMapping = this.state.mapping.filter(mapping => {
                return mapping.key === event.key ? mapping : null;
            })[0];
    
            if(keyMapping === undefined) {
                return;
            }
    
            this.performClick(this.state.mapping.indexOf(keyMapping));
        }
    }

    onHandleClick(index) {
            
        this.setState({
            index: index
        });
    }

    toggleMode() {
        
        this.setState(
            {
                defaultMode: this.state.defaultMode === BankMode.DEFAULT ? BankMode.ALTERNATIVE : BankMode.DEFAULT,
                mapping: this.state.defaultMode === BankMode.DEFAULT ? keyMappingsB : keyMappingsA
            }
        );
    }

    togglePower() {
        this.setState({powerMode: this.state.powerMode === PowerMode.OFF ? PowerMode.ON : PowerMode.OFF});
        if(this.state.powerMode === PowerMode.ON) {
            document.removeEventListener("keydown", this.handleOnKeyPress);
        } else {
            document.addEventListener("keydown", this.handleOnKeyPress);
        }
    }
    
    performClick(index) {

        if(this.state.powerMode === PowerMode.ON) {
            const keyElements = document.getElementsByClassName('drumpad-button');
            keyElements[index].click();
            this.setState({index: index});
        }
    }

    render() {
        const currentMapping = this.state.mapping;
        console.log(currentMapping);
        
        return (
            <div id='drum-container'>
                <div id='board-logo' >
                    <p>My SoundBoard</p>
                    <img src={fire}/>
                </div>
                <div id='inner-drum-container'>
                    <DrumPad keys={currentMapping} 
                        onBtnClick={this.onHandleClick} 
                        powerMode={this.state.powerMode} />
                    <DrumPadSettings currentKey={currentMapping[this.state.index].sound} 
                        powerMode={this.state.powerMode} 
                        onModeToggle={this.toggleMode} 
                        onPowerToggle={this.togglePower} />
                </div>
            </div>
        );
    }
}

export default DrumContainer;