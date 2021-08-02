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
import CrosshairSvg from '../../components/images/crosshair';
import RadsSvg from '../../components/images/rads';

import { useStoreContext } from "../../utils/GlobalState";



function INV({mainTab, setMainTab}) {
  const [state, dispatch] = useStoreContext();
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

  const { charStats, damage, damResist } = state;

  const getHealthPercent = () => {
    const healthPercent = Math.floor((charStats.currentHealth / charStats.maxHealth) * 100)
    return `${healthPercent}%`
  }

  const noArmorEquipped = () => {
    if (damResist.energy === 0 && damResist.radiation === 0 || damResist.physical > 0) {
      return true
    } else {
      return false
    }
  }
  

    return (
    <>
      <header>
        <MainTabs mainTab={mainTab} setMainTab={setMainTab}></MainTabs>
        <SubTabs tabs={subs} sub={sub} setSub={setSub}></SubTabs>
      </header>

      {sub === 'WEAPONS' && (<ItemList sub={sub} items={weapons}></ItemList>)}
      {sub === 'APPAREL' && (<ItemList sub={sub} items={apparel}></ItemList>)}
      {sub === 'AID' && (<ItemList sub={sub} items={aid}></ItemList>)}
      {sub === 'MISC' && (<ItemList sub={sub} items={misc}></ItemList>)}
      {sub === 'JUNK' && (<ItemList sub={sub} items={junk}></ItemList>)}
      {sub === 'MODS' && (<ItemList sub={sub} items={mods}></ItemList>)}
      {sub === 'AMMO' && (<ItemList sub={sub} items={ammo}></ItemList>)}

      <footer className='large-text'>
        <div className='backing'>
          <WeightSvg classes='footer-lg-img'></WeightSvg>
          {charStats.currentWeight}/{charStats.maxWeight}
        </div>

        <div className='backing'>
          <CapsSvg classes='footer-lg-img'></CapsSvg>
          {charStats.caps}
        </div>

        {/* conditional footer section for weapons apparel and aid */}
        {sub === 'WEAPONS' 
          ? <div className='backing right-footer large-footer'>
              <GunSvg classes='footer-lg-img'></GunSvg>
              {damage.physical > 0 &&
                <div className='footer-stat'>
                  <CrosshairSvg classes='stat-img'></CrosshairSvg>
                  {damage.physical}
                </div>
              }
              {damage.energy > 0 &&
                <div className='footer-stat'>
                  <ZapSvg classes='stat-img'></ZapSvg>
                  {damage.energy}
                </div>
              }
              {damage.radiation > 0 &&
                <div className='footer-stat'>
                  <RadsSvg classes='stat-img'></RadsSvg>
                  {damage.radiation}
                </div>
              }
              
            </div>
          : sub === 'APPAREL'
          ? <div className='backing right-footer large-footer'>
              <HelmetSvg classes='footer-lg-img'></HelmetSvg>
              {noArmorEquipped() &&
                <div className='footer-stat'>
                  <ShieldSvg classes='stat-img'></ShieldSvg>
                  {damResist.physical}
                </div>
              }
              {damResist.energy > 0 &&
                <div className='footer-stat'>
                  <ZapSvg classes='stat-img'></ZapSvg>
                  {damResist.energy}
                </div>
              }
              {damResist.radiation > 0 &&
                <div className='footer-stat'>
                  <RadsSvg classes='stat-img'></RadsSvg>
                  {damResist.radiation}
                </div>
              }
            </div>
          : sub === 'AID'
          ? <div className='backing xp-container large-footer'>
              HP
              <div id='hp-bar'>
                <div style={{'width': getHealthPercent()}} id='hp-fill'></div>
              </div>
            </div>
          : <div className='backing right-footer large-footer'></div>
        }
        
      </footer>
    </>
)}

export default INV;