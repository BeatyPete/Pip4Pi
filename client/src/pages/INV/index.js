import {useState} from 'react'
import MainTabs from "../../components/Main-tabs";
import SubTabs from "../../components/Sub-tabs";

import ItemList from '../../components/Item-list'
import {weapons, apparel, aid, misc, junk, mods, ammo} from '../../lib/items'
import './inv.css'

import WeightSvg from '../../components/images/weight'
import CapsSvg from '../../components/images/caps'
import GunSvg from '../../components/images/gun'
import ZapSvg from '../../components/images/zap'
import HelmetSvg from '../../components/images/helmet'
import ShieldSvg from '../../components/images/shield'



function INV({mainTab, setMainTab}) {
  const [sub, setSub] = useState('WEAPONS')
  
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

      {sub === 'WEAPONS' && (<ItemList items={weapons}></ItemList>)}
      {sub === 'APPAREL' && (<ItemList items={apparel}></ItemList>)}
      {sub === 'AID' && (<ItemList items={aid}></ItemList>)}
      {sub === 'MISC' && (<ItemList items={misc}></ItemList>)}
      {sub === 'JUNK' && (<ItemList items={junk}></ItemList>)}
      {sub === 'MODS' && (<ItemList items={mods}></ItemList>)}
      {sub === 'AMMO' && (<ItemList items={ammo}></ItemList>)}

      <footer className='large-text'>
        <div className='backing'>
          <WeightSvg classes='footer-lg-img'></WeightSvg>
          159/165
        </div>

        <div className='backing'>
          <CapsSvg classes='footer-lg-img'></CapsSvg>
          670
        </div>

        {sub === 'WEAPONS' 
          ? <div className='backing right-footer large-footer'>
              <GunSvg classes='footer-lg-img'></GunSvg>
              <ZapSvg classes='stat-img'></ZapSvg>
              91
            </div>
          : sub === 'APPAREL'
          ? <div className='backing right-footer large-footer'>
              <HelmetSvg classes='footer-lg-img'></HelmetSvg>
              <ShieldSvg classes='stat-img'></ShieldSvg>
              118
              <ZapSvg classes='stat-img'></ZapSvg>
              92
            </div>
          : sub === 'AID'
          ? <div className='backing xp-container large-footer'>
              HP
              <div id='hp-bar'>
                <div id='hp-fill'></div>
              </div>
            </div>
          : <div className='backing right-footer large-footer'></div>
        }
        
      </footer>
    </>
)}

export default INV;