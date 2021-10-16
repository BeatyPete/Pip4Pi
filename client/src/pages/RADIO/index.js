import MainTabs from "../../components/Main-tabs";
import { useRef, useEffect, useState } from "react";

function RADIO({mainTab, setMainTab, radioStations}) {
  const muzak = useRef()

  const [currRadio, setCurrRadio] = useState()
  const [currSong, setCurrSong] = useState()
  
  useEffect(() => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();
    let track = audioCtx.createMediaElementSource(muzak.current)
    track.connect(audioCtx.destination);
    muzak.current.onended = endedHandler;
  }, []);
  useEffect(() => {
    if (currRadio) {
        muzak.current.play()
    }
  }, [currRadio]);
  
  const endedHandler = () => {
    console.log('done')
  }

  const playRadio = e => {  
    let selectedRadio = e.target.textContent
    if (currRadio !== selectedRadio) {
      //set station
      for (let i = 0; i < radioStations.length; i++) {
        if (radioStations[i].radio === selectedRadio) {
          setCurrRadio(selectedRadio)
          const songList = radioStations[i].songs
          const randomSong = songList[Math.floor(Math.random() * songList.length)]
          setCurrSong(randomSong)
          break
        }
      }
    } else {
      muzak.current.pause()
      setCurrRadio('')
      setCurrSong('')
    }
  }

    return (
      <>
      <header>
        <MainTabs mainTab={mainTab} setMainTab={setMainTab}></MainTabs>
      </header>

      <main>
        {/* <button>{radioStations[1].radio}</button> */}
        <section className='small-text item-list list-container'>
          <ul>
            {radioStations.map((radioStation, i) => (
              <li 
              key={`radio ${i}`}
              onClick={playRadio}
              >
                {radioStation.radio}
              </li>
            ))}
          </ul>
        </section>
        <audio ref={muzak} src={currRadio && require(`../../lib/radio/${currRadio}/${currSong}`).default}></audio>
        <section className='visualizer'>
          <div className='soundblock'></div>
        </section>
      </main>

      <footer className='large-text backing'>
        <div style={{'opacity': 0}}>temp</div>
      </footer>
      </>
)}

export default RADIO;