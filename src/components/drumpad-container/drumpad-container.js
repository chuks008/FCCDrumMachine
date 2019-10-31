import React from 'react';
import '../drumpad/drumpad.scss';
import DrumPadButton from '../drumpad-button/drumpad-button';
import DrumPadSettings from '../drumpad-settings/drumpad-settings';
import fire from '../../fire.jpg';
import './drumpad-container.scss';

const keyMappings = [
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

class DrumContainer extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            mapping: keyMappings,
            currentSound: ""
        }

        this.onHandleClick = this.onHandleClick.bind(this);
        this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
    }

    handleOnKeyPress(event) {
        let keyCode = event.keyCode;

        switch(keyCode) {
            case 81:
                this.performClick(0); // q
                break;
            case 87: 
                this.performClick(1); //w
                break;
            case 69:
                this.performClick(2); //e
                break;
            case 65:
                this.performClick(3); //a
                break;
            case 83:
                this.performClick(4); //s
                break;
            case 68:
                this.performClick(5); //d
                break;
            case 90:
                this.performClick(6); //z
                break;
            case 88:
                this.performClick(7); //e
                break;
            case 67:
                this.performClick(8); //e
                break;
            default:
                break;
        }
    }

    performClick(index) {
        console.log("Performing click event with index: ", index);
        const keyElements = document.getElementsByClassName('drumpad-button');
        keyElements[index].click();
        this.setState({index: index});
    }

    onHandleClick(index, event) {
        
        console.log("Index on click", index);
        this.setState({
            index: index,
            currentSound: this.state.mapping[index].audioFile
        })

        document.getElementById('audio').play();
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleOnKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleOnKeyPress);
    }

    render() {
        const drumPadButtons = keyMappings.map((mapping, index) => {
            return (
                <DrumPadButton onClick={e => this.onHandleClick(index, e)} key={mapping.key+index} keyName={mapping.key} audioFile={mapping.audioFile} />
            );
        })

        return (
            <div id='drum-container'>
                <div id='board-logo' >
                    <p>My SoundBoard</p>
                    <img src={fire}/>
                </div>
                <div id='inner-drum-container'>
                    <audio id='audio'>
                        <source src={this.state.currentSound} />
                    </audio>
                    <div id="drum-pad">
                        {drumPadButtons}
                    </div>
                    <DrumPadSettings currentKey={keyMappings[this.state.index].sound} />
                </div>
            </div>
        );
    }
}

export default DrumContainer;