import {useState} from 'react'
import MainTabs from "../../components/Main-tabs";
import SubTabs from "../../components/Sub-tabs";
import Weapons from "../../components/inv-page/Weapons";
import Apparel from "../../components/inv-page/Apparel";
import Aid from "../../components/inv-page/Aid";
import Misc from "../../components/inv-page/Misc";
import Junk from "../../components/inv-page/Junk";
import Mods from "../../components/inv-page/Mods";
import Ammo from "../../components/inv-page/Ammo";
/* import './stat.css' */

function INV({mainTab, setMainTab}) {
  const [sub, setSub] = useState('WEAPONS')
  
  /* const subs = ['WEAPONS', 'APPAREL', 'AID', 'MISC', 'JUNK', 'MODS', 'AMMO'] */
  const subs = [
    {
      name:'WEAPONS',
      position: '-12.5%'
    },
    {
      name:'APPAREL',
      position: '7%'
    },
    {
      name:'AID',
      position: '20%'
    },
    {
      name:'MISC',
      position: '30%'
    },
    {
      name:'JUNK',
      position: '42%'
    },
    {
      name:'MODS',
      position: '54%'
    },
    {
      name:'AMMO',
      position: '68%'
    }
  ]

  

    return (
        <>
      <header>
        <MainTabs mainTab={mainTab} setMainTab={setMainTab}></MainTabs>
        <SubTabs tabs={subs} sub={sub} setSub={setSub}></SubTabs>
      </header>

      {sub === 'WEAPONS' && (<Weapons></Weapons>)}
      {sub === 'APPAREL' && (<Apparel></Apparel>)}
      {sub === 'AID' && (<Aid></Aid>)}
      {sub === 'MISC' && (<Misc></Misc>)}
      {sub === 'JUNK' && (<Junk></Junk>)}
      {sub === 'MODS' && (<Mods></Mods>)}
      {sub === 'AMMO' && (<Ammo></Ammo>)}

      <footer className='large-text'>
        <div className='backing'>HP 90/90</div>

        <div className='backing'>
          670 Caps
        </div>

        <div className='backing right-footer  large-footer'>AP 70/70</div>
      </footer>
      </>
)}

export default INV;