import MainTabs from "../../components/Main-tabs";
import { useEffect } from "react";

function RADIO({radioStations , currRadio, setCurrRadio, setCurrSong, muzak, setPlaylist}) {

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
              const min = 1
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

    return (
      <>
      <header>
        <MainTabs></MainTabs>
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