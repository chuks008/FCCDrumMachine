import React from 'react';
import '../drumpad/drumpad.scss';
import DrumPadButton from '../drumpad-button/drumpad-button';
import DrumPadSettings from '../drumpad-settings/drumpad-settings';
import DrumPad from '../drumpad/drumpad';
import fire from '../../fire.jpg';
import './drumpad-container.scss';

const keyMappingsA = [
    {key: 'q', sound:'Chord 1', audioFile: ""},
    {key: 'w', sound:'Chord 2', audioFile: ""},
    {key: 'e', sound:'Chord 3', audioFile: ""},
    {key: 'a', sound:'Shaker', audioFile: ""},
    {key: 's', sound:'Open HH', audioFile: ""},
    {key: 'd', sound:'Closed HH', audioFile: ""},
    {key: 'z', sound:'Punchy Kick', audioFile: ""},
    {key: 'x', sound:'Side Kick', audioFile: ""},
    {key: 'c', sound:'Snare', audioFile: ""}
];

const keyMappingsB = [
    {key: 'q', sound:'Heater 1', audioFile: ""},
    {key: 'w', sound:'Heater 2', audioFile: ""},
    {key: 'e', sound:'Heater 3', audioFile: ""},
    {key: 'a', sound:'Heater 4', audioFile: ""},
    {key: 's', sound:'Clap', audioFile: ""},
    {key: 'd', sound:'Open HH', audioFile: ""},
    {key: 'z', sound:"Kick n' Hat", audioFile: ""},
    {key: 'x', sound:'Kick', audioFile: ""},
    {key: 'c', sound:'Closed HH', audioFile: ""}
];

// codes for characters q, w, e, a, s, d, z, x, c 
const keyboardCodes = [81,87,69,65,83,68,90,88,67] 

class DrumContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            mapping: keyMappingsA,
            defaultMode: "default"
        }

        this.onHandleClick = this.onHandleClick.bind(this);
        this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
        this.toggleMode = this.toggleMode.bind(this);
    }

    handleOnKeyPress(event) {
        let keyCode = event.keyCode;
        if(!keyboardCodes.includes(keyCode)) {
            return;
        }

        this.performClick(keyboardCodes.indexOf(keyCode));
    }

    onHandleClick(index) {
        
        console.log("Index on click", index);
        this.setState({
            index: index
        })

        document.getElementById('audio').play();
    }

    toggleMode() {
        
        this.setState(
            {
                defaultMode: this.state.defaultMode === "default" ? "alternative" : "default",
                mapping: this.state.defaultMode === "default" ? keyMappingsB : keyMappingsA
            }
        );
    }

    performClick(index) {
        console.log("Performing click event with index: ", index);
        const keyElements = document.getElementsByClassName('drumpad-button');
        keyElements[index].click();
        this.setState({index: index});
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleOnKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleOnKeyPress);
    }

    render() {
        const currentMapping = this.state.mapping;

        console.log("Changing toggle mode: ", this.state.mapping);
        console.log("Is default mode: ", this.state.defaultMode);
        
        return (
            <div id='drum-container'>
                <div id='board-logo' >
                    <p>My SoundBoard</p>
                    <img src={fire}/>
                </div>
                <div id='inner-drum-container'>
                    <audio id='audio'>
                        <source src={currentMapping[this.state.index].audioFile} />
                    </audio>
                    <DrumPad keys={currentMapping} onBtnClick={this.onHandleClick} />
                    <DrumPadSettings currentKey={currentMapping[this.state.index].sound} onModeToggle={this.toggleMode} />
                </div>
            </div>
        );
    }
}

export default DrumContainer;