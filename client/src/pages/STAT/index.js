import {useState} from 'react'
import MainTabs from "../../components/Main-tabs";
import SubTabs from "../../components/Sub-tabs";
import Status from "../../components/stat-page/Status";
import Special from "../../components/stat-page/Special";
import Perks from "../../components/stat-page/Perks";
import './stat.css'

function STAT({mainTab, setMainTab}) {
  const [sub, setSub] = useState('STATUS')
  /* const subs = ['STATUS', 'SPECIAL', 'PERKS'] */
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

      {sub === 'STATUS' && (<Status></Status>)}
      {sub === 'SPECIAL' && (<Special></Special>)}
      {sub === 'PERKS' && (<Perks></Perks>)}

      <footer className='large-text'>
        <div className='backing'>HP 90/90</div>

        <div className='backing xp-container large-footer'>
          LEVEL 1
          <div id='xp-bar'>
            <div id='xp-fill'></div>
          </div>
        </div>

        <div className='backing right-footer'>AP 70/70</div>
      </footer>
      </>
)}

export default STAT;