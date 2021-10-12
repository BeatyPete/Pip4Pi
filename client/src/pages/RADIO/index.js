import MainTabs from "../../components/Main-tabs";
import { useRef } from "react";

function RADIO({mainTab, setMainTab, radioStations}) {
  const muzak = useRef(null)

  const playRadio = () => {
    muzak.current.play()
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
        <audio ref={muzak} src={require(`../../lib/radio/Normal/song1.mp3`).default}></audio>
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