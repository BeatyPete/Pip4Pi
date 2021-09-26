import {useEffect, useState} from 'react'
import MainTabs from "../../components/Main-tabs";
import SubTabs from "../../components/Sub-tabs";
import Quests from "../../components/data-page/Quests";
import Workshops from "../../components/data-page/Workshops";
import Stats from "../../components/data-page/Stats";
import Settings from "../../components/data-page/Settings";
/* import './stat.css' */
import {getDate, getTime} from '../../utils/getTime'

function DATA({mainTab, setMainTab}) {
  const [sub, setSub] = useState('QUESTS')

  
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
  
  /* const subs = ['WEAPONS', 'APPAREL', 'AID', 'MISC', 'JUNK', 'MODS', 'AMMO'] */
  const subs = [
    {
      name:'QUESTS',
      position: '-29%'
    },
    {
      name:'WORKSHOPS',
      position: '-8%'
    },
    {
      name:'STATS',
      position: '10.5%'
    },
    {
      name:'SETTINGS',
      position: '26.8%'
    }
  ]


    return (
        <>
      <header>
        <MainTabs mainTab={mainTab} setMainTab={setMainTab}></MainTabs>
        <SubTabs tabs={subs} sub={sub} setSub={setSub}></SubTabs>
      </header>

      {sub === 'QUESTS' && (<Quests></Quests>)}
      {sub === 'STATS' && (<Stats></Stats>)}
      {sub === 'WORKSHOPS' && (<Workshops></Workshops>)}
      {sub === 'SETTINGS' && (<Settings></Settings>)}

      <footer className='large-text'>
        <div className='backing'>{date}</div>

        <div className='backing'>{time}</div>

        <div className='backing right-footer large-footer'></div>
      </footer>
      </>
)}

export default DATA;