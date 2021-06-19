import {useState} from 'react'
import MainTabs from "../../components/Main-tabs";
import SubTabs from "../../components/Sub-tabs";

import ItemList from '../../components/Item-list'
import {weapons, apparel, aid, misc, junk, mods, ammo} from '../../lib/items'
/* import './stat.css' */
import weightImg from '../../assets/images/weight.svg'
import capsImg from '../../assets/images/caps.svg'

import GunSvg from '../../components/images/gun'
import ZapSvg from '../../components/images/zap'



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

      {sub === 'WEAPONS' && (<ItemList items={weapons}></ItemList>)}
      {sub === 'APPAREL' && (<ItemList items={apparel}></ItemList>)}
      {sub === 'AID' && (<ItemList items={aid}></ItemList>)}
      {sub === 'MISC' && (<ItemList items={misc}></ItemList>)}
      {sub === 'JUNK' && (<ItemList items={junk}></ItemList>)}
      {sub === 'MODS' && (<ItemList items={mods}></ItemList>)}
      {sub === 'AMMO' && (<ItemList items={ammo}></ItemList>)}

      <footer className='large-text'>
        <div className='backing'>
        <svg className='footer-lg-img' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 125" version="1.1">
          <g id="surface1">
          <path d="M 76.035156 16.667969 C 72.71875 13.335938 68.574219 11.667969 63.605469 11.667969 C 58.769531 11.667969 54.625 13.335938 51.171875 16.667969 C 47.71875 20.28125 45.992188 24.515625 45.992188 29.375 C 45.992188 34.375 47.71875 38.613281 51.171875 42.085938 C 54.625 45.417969 58.769531 47.085938 63.605469 47.085938 C 68.574219 47.085938 72.71875 45.417969 76.035156 42.085938 C 79.488281 38.613281 81.214844 34.375 81.214844 29.375 C 81.214844 24.515625 79.488281 20.28125 76.035156 16.667969 M 63.605469 0.00390625 C 71.753906 0.00390625 78.726562 2.917969 84.527344 8.753906 C 90.191406 14.445312 93.023438 21.460938 93.023438 29.792969 L 91.78125 38.542969 L 99.652344 38.542969 C 103.242188 39.238281 106.351562 40.972656 108.976562 43.75 C 111.738281 46.527344 113.464844 49.652344 114.15625 53.125 L 125.964844 108.539062 C 126.65625 112.84375 125.6875 116.664062 123.0625 119.996094 C 120.300781 123.328125 116.640625 124.996094 112.082031 124.996094 L 14.917969 124.996094 C 10.359375 124.996094 6.769531 123.328125 4.144531 119.996094 C 1.382812 116.664062 0.414062 112.84375 1.242188 108.539062 L 13.050781 53.125 C 13.605469 49.652344 15.261719 46.527344 18.023438 43.75 C 20.785156 40.972656 23.894531 39.238281 27.347656 38.542969 L 35.425781 38.542969 C 34.460938 35.765625 33.976562 32.847656 33.976562 29.792969 C 33.976562 21.460938 36.878906 14.445312 42.679688 8.753906 C 48.480469 2.917969 55.453125 0.00390625 63.605469 0.00390625 "/>
          </g>
        </svg>
           159/165</div>

        <div className='backing'>
        <svg className='footer-lg-img' viewBox="0 0 128 128" version="1.1">
          <g id="surface1">
          <path d="M 81.335938 2.382812 L 85.40625 3.660156 C 87.117188 8.210938 89.613281 11.40625 92.894531 13.253906 C 97.320312 15.246094 101.316406 15.8125 104.882812 14.960938 L 108.09375 17.734375 C 107.523438 22.707031 108.523438 26.617188 111.089844 29.460938 C 114.085938 33.296875 117.511719 35.429688 121.363281 35.855469 L 123.289062 39.90625 C 120.578125 43.746094 119.867188 47.726562 121.152344 51.847656 C 121.722656 56.109375 124.003906 59.453125 128 61.867188 L 128 66.132812 C 124.003906 68.546875 121.722656 71.890625 121.152344 76.152344 C 119.867188 80.132812 120.578125 84.113281 123.289062 88.09375 L 121.363281 91.929688 C 117.511719 92.5 114.085938 94.632812 111.089844 98.328125 C 108.523438 101.3125 107.523438 105.292969 108.09375 110.265625 L 104.882812 112.824219 C 101.316406 111.972656 97.320312 112.539062 92.894531 114.53125 C 89.613281 116.378906 87.117188 119.578125 85.40625 124.125 L 81.335938 125.40625 C 77.914062 123.128906 73.988281 121.992188 69.566406 121.992188 C 65.425781 122.703125 61.859375 124.695312 58.863281 127.964844 L 54.582031 127.535156 C 52.296875 123.699219 49.230469 121.070312 45.378906 119.648438 L 33.175781 120.5 L 29.324219 118.367188 C 28.753906 113.394531 27.042969 109.769531 24.1875 107.496094 L 18.835938 104.296875 L 12.628906 103.445312 L 10.058594 100.03125 C 11.773438 95.484375 11.628906 91.433594 9.632812 87.878906 C 7.917969 83.757812 5.066406 80.914062 1.070312 79.351562 L 0 75.300781 C 3.425781 71.890625 4.996094 68.121094 4.710938 64 C 4.996094 59.734375 3.425781 55.96875 0 52.699219 L 1.070312 48.4375 C 5.066406 47.15625 7.917969 44.382812 9.632812 40.121094 C 11.628906 36.425781 11.773438 32.375 10.058594 27.96875 L 12.628906 24.554688 L 18.835938 23.488281 L 24.1875 20.503906 C 27.042969 18.230469 28.753906 14.535156 29.324219 9.417969 L 33.175781 7.5 L 45.378906 8.351562 C 49.230469 7.074219 52.296875 4.441406 54.582031 0.464844 L 58.863281 0.0351562 C 61.71875 3.304688 65.285156 5.296875 69.566406 6.007812 C 73.988281 6.148438 77.914062 4.941406 81.335938 2.382812 M 93.109375 26.046875 C 90.257812 22.636719 85.121094 21.285156 77.699219 21.996094 C 72.988281 22.425781 67.496094 24.628906 61.21875 28.605469 C 54.796875 32.871094 48.945312 38.058594 43.664062 44.171875 C 30.679688 59.523438 26.042969 74.589844 29.753906 89.371094 C 31.035156 95.199219 34.246094 99.464844 39.382812 102.164062 C 43.238281 104.4375 47.875 105.574219 53.296875 105.574219 C 60.003906 105.574219 67.496094 101.597656 75.773438 93.636719 L 86.046875 81.910156 L 83.90625 77.859375 L 74.703125 86.386719 C 67.566406 92.074219 61.929688 94.914062 57.792969 94.914062 C 51.800781 94.914062 47.660156 91.503906 45.378906 84.679688 C 43.09375 77.148438 44.808594 67.980469 50.515625 57.175781 C 55.082031 48.789062 60.148438 41.96875 65.710938 36.710938 C 70.992188 31.734375 75.273438 29.746094 78.554688 30.738281 C 80.125 31.023438 80.765625 31.804688 80.480469 33.085938 L 78.339844 37.773438 C 76.058594 42.609375 76.273438 46.019531 78.984375 48.007812 L 90.328125 48.4375 C 94.039062 45.734375 95.894531 41.898438 95.894531 36.921875 C 95.894531 31.804688 94.964844 28.179688 93.109375 26.046875 "/>
          </g>
        </svg> 670
        </div>

        {sub === 'WEAPONS' 
          ? <div className='backing right-footer large-footer'>
              <GunSvg classes='footer-lg-img'></GunSvg>
              <ZapSvg classes='stat-img'></ZapSvg>
              91
            </div>
          : sub === 'APPAREL'
          ? <div className='backing right-footer large-footer'>
              <GunSvg classes='footer-lg-img'></GunSvg>
              <ZapSvg classes='stat-img'></ZapSvg>
              91
            </div>
          : ''
        }
        
      </footer>
      </>
)}

export default INV;