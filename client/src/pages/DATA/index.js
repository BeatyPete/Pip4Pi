import {useState} from 'react'
import MainTabs from "../../components/Main-tabs";
import SubTabs from "../../components/Sub-tabs";
import Quests from "../../components/data-page/Quests";
import Workshops from "../../components/data-page/Workshops";
import Stats from "../../components/data-page/Stats";
import Settings from "../../components/data-page/Settings";
/* import './stat.css' */

function DATA({mainTab, setMainTab}) {
  const [sub, setSub] = useState('QUESTS')
  
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
        <div className='backing'>HP 90/90</div>

        <div className='backing xp-container'>
          LEVEL 1
          <div id='xp-bar'>
            <div id='xp-fill'></div>
          </div>
        </div>

        <div className='backing' id="ap">AP 70/70</div>
      </footer>
      </>
)}

export default DATA;