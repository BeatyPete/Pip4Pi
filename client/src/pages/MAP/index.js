import {useState, useEffect} from 'react'
import MainTabs from "../../components/Main-tabs";
import SubTabs from "../../components/Sub-tabs";
/* import './stat.css' */
import {getDate, getTime} from '../../utils/getTime'

function MAP({mainTab, setMainTab}) {
  

  const [time, setTime] = useState(getTime)
  const [date, setDate] = useState(getDate)

  useEffect(() => {
    let clock = setInterval(() => {
      setTime(getTime)
    }, 1000)
    let calendar =setInterval(() => {
      setDate(getDate)
    }, 60000)
    return () => {clearInterval(clock); clearInterval(calendar);}
}, []);

    return (
        <>
      <header>
        <MainTabs mainTab={mainTab} setMainTab={setMainTab}></MainTabs>
      </header>

      <main>MAP</main>

      <footer className='large-text'>
        <div className='backing'>{date}</div>

        <div className='backing'>{time}</div>

        <div className='backing right-footer large-footer'>Commonwealth</div>
      </footer>
      </>
)}

export default MAP;