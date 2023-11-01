import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaForwardStep, FaBackwardStep, FaPause } from 'react-icons/fa6';

const App = () => {
  const [iconPlay, setIconPlay] = useState('block');
  const [iconPause, setIconPause] = useState('none');
  const [number, setNumber] = useState('block');
  const [playIcon, setPlayIcon] = useState('none');
  const [activeIcon, setActiveIcon] = useState(null);

  const audioRefs = useRef([]);
  const [songList, setSongList] = useState([]);
  const [activeSongIndex, setActiveSongIndex] = useState(null);
  const [songTime, setSongTime] = useState('0:00');

  useEffect(() => {
    fetch('https://playground.4geeks.com//apis/fake/sound/songs')
      .then((response) => response.json())
      .then((data) => {
        setSongList(data);
        audioRefs.current = data.map(() => React.createRef());
      })
      .catch((error) => console.log(error));
  }, []);

  const handlePlaySong = (index) => {
    if (audioRefs.current[index].current) {
      if (activeSongIndex !== null) {
        audioRefs.current[activeSongIndex].current.pause();
      }
      audioRefs.current[index].current.play();
      setActiveSongIndex(index);
      setIconPlay('none');
      setIconPause('block');

      audioRefs.current[index].current.addEventListener('timeupdate', updateTime);
    }
  };

  const updateTime = () => {
    if (audioRefs.current[activeSongIndex].current) {
      const audioElement = audioRefs.current[activeSongIndex].current;
      const minutes = Math.floor(audioElement.currentTime / 60);
      const seconds = Math.floor(audioElement.currentTime % 60);
      setSongTime(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
    }
  };

  const handlePauseSong = (index) => {
    if (audioRefs.current[index].current !== null) {
      audioRefs.current[index].current.pause();
      setIconPlay('block');
      setIconPause('none');
      setActiveSongIndex(null);
      audioRefs.current[index].current.removeEventListener('timeupdate', updateTime);
    }
  };

  const elementoActivo = () => {
    setActiveIcon();
    setPlayIcon('block');
    setNumber('none');
  };

  const elementoInactivo = () => {
    setActiveIcon(null);
    setPlayIcon('none');
    setNumber('block');
  };

  return (
    <>
      <div className="contenedorReproductor">

        <div className="overflowList">
          <div className="containerList">
            <ul>
              {songList.length > 0 ? songList.map((item, index) => {
                return (
                  <li key={item.id} onMouseEnter={() => { elementoActivo(item); }} onMouseLeave={() => { elementoInactivo(null); }}>
                    <div style={{ display: playIcon }}>
                      <div className="playIconContainer">
                        <FaPlay onClick={() => { handlePlaySong(index); }} style={{ display: iconPlay }} />
                        <FaPause onClick={() => { handlePauseSong(index); }} style={{ display: iconPause }} />
                      </div>
                    </div>

                    <div className="itemInfo">
                      <div style={{ display: number }}><div className='numberContainer'>{item.id}</div></div>
                      <div>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</div>
                    </div>

                    <audio src={`https://playground.4geeks.com/apis/fake/sound/${item.url}`} ref={audioRefs.current[index]}></audio>
                    <p>{songTime}</p>
                  </li>
                );
              }) : 'Tu lista está vacía'}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
