import {useState, useEffect} from 'react'
import MainTabs from "../../components/Main-tabs";
import placeholder from '../../assets/images/map.jpg'
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

      <main>
        <div style={{width:'100%', height: '100%', background: `url(${placeholder}) 0% 0% / cover no-repeat var(--core-color)`, backgroundBlendMode: 'multiply'}}></div>
      </main>

      <footer className='large-text'>
        <div className='backing'>{date}</div>

        <div className='backing'>{time}</div>

        <div className='backing right-footer large-footer'>Commonwealth</div>
      </footer>
      </>
)}

export default MAP;