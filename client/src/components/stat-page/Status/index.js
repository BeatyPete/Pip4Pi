import './status.css'

import GunSvg from '../../images/gun'
import ZapSvg from '../../images/zap'
import ShieldSvg from '../../images/shield'
import HelmetSvg from '../../images/helmet'
import CrosshairSvg from '../../images/crosshair'
import RadsSvg from '../../images/rads'

import BodyAnim from '../../animations/status-body'
import HeadAnim from '../../animations/status-head'
import LegsBrokeAnim from '../../animations/legs-broke'

import { useStoreContext } from "../../../utils/GlobalState";

function Status() {
  const [state, dispatch] = useStoreContext();
  const { charStats, limbs, damage, damResist } = state;

  const noArmorEquipped = () => {
    if (damResist.energy === 0 && damResist.radiation === 0 || damResist.physical > 0) {
      return true
    } else {
      return false
    }
  }

    return (
        <main>
        <section className="character">
          <div>
            <div className='limb-bar'>
              <div id='head-fill' style={{"width":limbs.head}}></div>
            </div>
          </div>

          <div className='char-middle'>
            <div className='left-limbs'>
              <div className='limb-bar'>
                <div id='l-arm-fill' style={{"width":limbs.lArm}}></div>
              </div>
              <div className='limb-bar'>
                <div id='l-leg-fill' style={{"width":limbs.lLeg}}></div>
              </div>
            </div>

            <div className='vault-boy'>
              <HeadAnim></HeadAnim>
              <BodyAnim></BodyAnim>
              {/* <LegsBrokeAnim></LegsBrokeAnim> */}
            </div>

            <div className='right-limbs'>
              <div className='limb-bar'>
                <div id='r-arm-fill' style={{"width":limbs.rArm}}></div>
              </div>
              <div className='limb-bar'>
                <div id='r-leg-fill' style={{"width":limbs.rLeg}}></div>
              </div>
            </div>
          </div>

          <div>
            <div className='limb-bar'>
              <div id='chest-fill' style={{"width":limbs.chest}}></div>
            </div>
          </div>
        </section>
          
        <section className='equip-stats large-text'>
          <div className='weapon-stats'>
            <GunSvg classes='backing equip-img'></GunSvg>
            {damage.physical > 0 && 
            < div className='backing stat-info'>
              <CrosshairSvg classes='stat-img'></CrosshairSvg>
              <div>{damage.physical}</div>
            </div>} 
            {damage.energy > 0 && 
            < div className='backing stat-info'>
              <ZapSvg classes='stat-img'></ZapSvg>
              <div>{damage.energy}</div>
            </div>} 
            {damage.radiation > 0 && 
            < div className='backing stat-info'>
              <CrosshairSvg classes='stat-img'></CrosshairSvg>
              <div>{damage.radiation}</div>
            </div>} 
          </div>

          <div className='armor-stats'>
            <HelmetSvg classes='backing equip-img'></HelmetSvg>
            {noArmorEquipped() &&
            <div className='backing stat-info'>
              <ShieldSvg classes='stat-img'></ShieldSvg>
              <div>{damResist.physical}</div>
            </div>}
            {damResist.energy > 0 &&
            <div className='backing stat-info'>
              <ZapSvg classes='stat-img'></ZapSvg>
              <div>{damResist.energy}</div>
            </div>}
            {damResist.radiation > 0 &&
            <div className='backing stat-info'>
              <RadsSvg classes='stat-img'></RadsSvg>
              <div>{damResist.radiation}</div>
            </div>}
          </div>
        </section>

        <section className='nameplate small-text'>{charStats.name}</section>
      </main>
)}

export default Status;