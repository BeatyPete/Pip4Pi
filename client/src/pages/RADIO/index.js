import MainTabs from "../../components/Main-tabs";
import { useRef, useEffect, useState } from "react";

function RADIO({radioStations , currRadio, setCurrRadio, setCurrSong, muzak}) {

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