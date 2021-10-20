import MainTabs from "../../components/Main-tabs";
import { useEffect, useRef } from "react";
import './radio.css'
import GraphSvg from "../../components/images/graph";
import { useStoreContext } from "../../utils/GlobalState";

function RADIO({radioStations , currRadio, setCurrRadio, setCurrSong, muzak, setPlaylist}) {

  const [state] = useStoreContext();
  const { settings } = state;

  useEffect(() => {
    if (currRadio) {
        muzak.current.play()
    }
  }, [currRadio]);
  
  const playRadio = e => {  
    let selectedRadio = e.target.textContent
    if (currRadio !== selectedRadio) {
      //set station
      for (let i = 0; i < radioStations.length; i++) {
        if (radioStations[i].radio === selectedRadio) {
          setCurrRadio(selectedRadio)
          const songList = [...radioStations[i].songs]
          let newPlaylist = shuffle(songList)
          const hostAudio = radioStations[i].host
          let numSongs = songList.length
          if (hostAudio) {
            const hostList = shuffle(hostAudio)
            let totalIncrease = 0
            let timesPassed = 0
            for (let i = 0; totalIncrease < numSongs; i++) {
              if ( i > (hostList.length-1)) {
                i = 0
              }
              /* min and max determine frequency of host audio */
              let min = 1
              if (timesPassed === 0) { min = 0 }
              const max = 3
              const increase = Math.floor(Math.random() * (max - min + 1)) + min
              newPlaylist.splice((increase + totalIncrease + timesPassed), 0, hostList[i])
              totalIncrease = totalIncrease + increase
              timesPassed++
            }
               
          }
          setPlaylist([...newPlaylist])
          setCurrSong(0)
          break
        }
      }
    } else {
      muzak.current.pause()
      setCurrRadio('')
      setCurrSong('')
    }
  }

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const waves = useRef()
  const waves2 = useRef()

  useEffect(() => {
    var c = waves.current
    var ctx = c.getContext("2d");
    var c2 = waves2.current
    var ctx2 = c2.getContext("2d");
    const halfHeight = c.height / 2
    ctx.moveTo(0, halfHeight);
    //(how close together, how low or high, left-right pos, up-down pos )
    const frequency = 5
    let position = 0
    for (let i = 1; i < 25; i++) {
        /* const peak = -(Math.floor(Math.random() * (78 - 0 + 1)) + 0)
        const trough = 150 + Math.abs(peak) */
        const peaks = [0, 2, 30, 65, 75]
        const peak = -(peaks[Math.floor(Math.random() * peaks.length)])
        const trough = 150 + Math.abs(peak)
        /* const peak = -50
        const trough = 150 + Math.abs(peak)  */
        const firstStart = position + frequency
        const firstEnd = firstStart + frequency
        const secondStart = firstEnd + frequency
        const secondEnd = secondStart + frequency
        ctx.quadraticCurveTo(firstStart, peak, firstEnd, halfHeight);
        ctx.quadraticCurveTo(secondStart, trough, secondEnd, halfHeight);
        position = secondEnd
    }

    ctx.lineWidth = 1.5;
    ctx.strokeStyle = `rgb(${settings.r}, ${settings.g}, ${settings.b})`;
    ctx.stroke();
    ctx2.drawImage(c, 0, 0);
  }, []);

  const addSelectedClass = i => {
    const radioLocation = radioStations.findIndex(station => station.radio === currRadio)
    if (radioLocation === i) {
      return 'equipped'
    } else {return ''}
  }

    return (
      <>
      <header>
        <MainTabs></MainTabs>
      </header>

      <main className='radio-page'>
        {/* <div> */}
          <section className='small-text item-list list-container radio-list'>
            <ul>
              {radioStations.map((radioStation, i) => (
                <li 
                className={`${addSelectedClass(i)}`}
                key={`radio ${i}`}
                onClick={playRadio}
                >
                  {radioStation.radio}
                </li>
              ))}
            </ul>
          </section>
          
          <section className='visualizer'>
            <div className='soundblock'>
                <GraphSvg></GraphSvg>
            </div>
            <div className='wave-container'>
              <canvas ref={waves} width='450' height='150' className='soundwaves'></canvas>
              <canvas ref={waves2} width='450' height='150' className='soundwaves'></canvas>
            </div>
          </section>
        {/* </div> */}
      </main>

      <footer className='large-text backing'>
        <div style={{'opacity': 0}}>temp</div>
      </footer>
      </>
)}

export default RADIO;