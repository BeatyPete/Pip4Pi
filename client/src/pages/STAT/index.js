import {useState} from 'react'
import MainTabs from "../../components/Main-tabs";
import SubTabs from "../../components/Sub-tabs";
import Status from "../../components/stat-page/Status";
import Special from "../../components/stat-page/Special";
import Perks from "../../components/stat-page/Perks";
import './stat.css'

import { useStoreContext } from "../../utils/GlobalState";

function STAT({mainTab, setMainTab}) {
  const [state] = useStoreContext();
  const [sub, setSub] = useState('STATUS')
  const { charStats } = state;
  const [maxHealth] = useState(80+(charStats.special.Endurance*5)+(charStats.currentLevel-1)*((charStats.special.Endurance/2)+2.5))
  const [maxAP] = useState(60+(10*charStats.special.Agility))

  const subs = [
    {
      name:'STATUS',
      position: '0%'
    },
    {
      name:'SPECIAL',
      position: '15.6%'
    },
    {
      name:'PERKS',
      position: '31.5%'
    }
  ]

    return (
        <>
      <header>
        <MainTabs mainTab={mainTab} setMainTab={setMainTab}></MainTabs>
        <SubTabs tabs={subs} sub={sub} setSub={setSub}></SubTabs>
      </header>

      {sub === 'STATUS' && (<Status maxHealth={maxHealth}></Status>)}
      {sub === 'SPECIAL' && (<Special></Special>)}
      {sub === 'PERKS' && (<Perks></Perks>)}

      <footer className='large-text'>
        <div className='backing'>HP {charStats.currentHealth}/{maxHealth}</div>

        <div className='backing xp-container large-footer'>
          LEVEL {charStats.currentLevel}
          <div id='xp-bar'>
            <div style={{"width":charStats.levelFillPercent}} id='xp-fill'></div>
          </div>
        </div>

        <div className='backing right-footer'>AP {charStats.currentAP}/{maxAP}</div>
      </footer>
      </>
)}

export default STAT;