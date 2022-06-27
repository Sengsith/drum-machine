import React, {useEffect, useState} from 'react';
import './App.scss';
import Shine from "./audioclips/shine.wav"
import Laser from "./audioclips/laser.wav";
import Hiyah from "./audioclips/hiyah.wav";
import MissionComplete from "./audioclips/mission-complete.wav";
import SpotDodge from "./audioclips/spot-dodge.wav";
import StarKO from "./audioclips/star-ko.wav";
import AirDodge from "./audioclips/air-dodge.wav";
import Tei from "./audioclips/tei.wav";
import Torya from "./audioclips/torya.wav";

const audioClips = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Shine',
    url: Shine
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Laser',
    url: Laser
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Hiyah',
    url: Hiyah
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Mission-Complete',
    url: MissionComplete
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Spot-Dodge',
    url: SpotDodge
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Star-KO',
    url: StarKO
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Air-Dodge",
    url: AirDodge
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Tei',
    url: Tei
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Torya',
    url: Torya
  }
];

function App() {
  const [volume, setVolume] = useState(1);
  const [display, setDisplay] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <div id="drum-machine">
          <h1>Fox Machine</h1>
          <div className="drum-pad-container">
            {audioClips.map(clip => (
              <Pad key={clip.id} clip={clip} volume={volume} setDisplay={setDisplay}/>
            ))}
          </div>
          <div id="display">
            <h3>
              {display}
            </h3>
          </div>
            <h4>Volume</h4>
            <input type='range' step="0.01" value={volume} max="1" min="0" onChange={e => setVolume(e.target.value)}></input>
        </div>
      </header>
    </div>
  );
}

function Pad({ clip, volume, setDisplay}) {

  const [active, setActive] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }/*Removed input array to get volume to work for keydown*/)

  const handleKeyPress = (e) => {
    if (e.keyCode === clip.keyCode) {
      playSound();
    }
  }

  const playSound = () => {
    const audioTag = document.getElementById(clip.keyTrigger)
    setDisplay(clip.id);
    setActive(true);
    setTimeout(() =>setActive(false), 200)
    audioTag.volume = volume;
    audioTag.currentTime = 0;
    audioTag.play();
  };

  return (
    <button className={`drum-pad ${active && "drum-pad-click"}`} onClick={playSound} >
      <audio id={clip.keyTrigger} src={clip.url}/>
      {clip.keyTrigger}
    </button>
  );
}

export default App;
