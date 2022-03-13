import {useState, useEffect} from 'react'
import './map.css'
import MainTabs from "../../components/Main-tabs";
import placeholder from '../../assets/images/map.png'
import {getDate, getTime} from '../../utils/getTime'

function MAP({mainTab, setMainTab}) {
  

  const [time, setTime] = useState(getTime)
  const [date, setDate] = useState(getDate)
  const [position] = useState({
    mapX: `${random(0,100)}%`,
    mapY: `${random(0,100)}%`,
    playerRotation: `rotate(${random(0,360)}deg)`
  })

  useEffect(() => {
    let clock = setInterval(() => {
      setTime(getTime)
    }, 1000)
    let calendar = setInterval(() => {
      setDate(getDate)
    }, 60000)
    return () => {clearInterval(clock); clearInterval(calendar);}
  }, []);

  function random(min, max) {
    let stink = Math.floor(Math.random() * (max - min + 1)) + min
    return stink;
  }

    return (
        <>
      <header>
        <MainTabs mainTab={mainTab} setMainTab={setMainTab}></MainTabs>
      </header>

      <main>
        <div className='map flex-center' style={{backgroundSize: '175%', backgroundPositionX: position.mapX, backgroundPositionY: position.mapY, backgroundImage: `url(${placeholder})`}}>
          <svg className='player-marker' style={{transform: position.playerRotation}} viewBox="0 0 128 195" version="1.1">
            <g id="surface1">
              <path xmlns="http://www.w3.org/2000/svg" d="M 123.820312 188.976562 L 63.808594 171.96875 L 5.316406 188.597656 L 0 184.441406 L 60.390625 0.0234375 L 67.226562 0.0234375 L 128 185.195312 L 123.820312 188.976562 M 106.351562 168.191406 L 63.808594 39.324219 L 21.648438 168.191406 L 63.808594 155.71875 L 106.351562 168.191406 "/>
              <path xmlns="http://www.w3.org/2000/svg" d="M 106.351562 168.191406 L 63.808594 155.71875 L 21.648438 168.191406 L 63.808594 39.324219 L 106.351562 168.191406 "/>
            </g>
          </svg>
        </div>
      </main>

      <footer className='large-text'>
        <div className='backing'>{date}</div>

        <div className='backing'>{time}</div>

        <div className='backing right-footer large-footer'>Commonwealth</div>
      </footer>
      </>
)}

export default MAP;