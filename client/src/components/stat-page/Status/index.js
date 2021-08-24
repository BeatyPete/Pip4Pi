import './status.css'
import {useState, useEffect} from 'react'

import DamageList from '../../damageList'

import GunSvg from '../../images/gun'
import ZapSvg from '../../images/zap'
import ShieldSvg from '../../images/shield'
import HelmetSvg from '../../images/helmet'
import CrosshairSvg from '../../images/crosshair'
import RadsSvg from '../../images/rads'

import BodyAnim from '../../animations/status-body'
import HeadAnim from '../../animations/status-head'
import LegsBrokeAnim from '../../animations/legs-broke'
import LarmBrokeAnim from '../../animations/l-arm-broke'
import RarmBrokeAnim from '../../animations/r-arm-broke'
import BrokeArmsAnim from '../../animations/arms-broke'

import { useStoreContext } from "../../../utils/GlobalState";

function Status() {
  const [state, dispatch] = useStoreContext();
  const { charStats, limbs, damage, damResist } = state;
  const [limbState, setLimbState] = useState('healthy')
  const [headCondition, setHeadCondition] = useState('healthy')

  useEffect(() => {
    if (parseInt(limbs.head) < 1) {
      setHeadCondition('head-broken')
    }
    if (parseInt(limbs.lLeg) < 1 && parseInt(limbs.rLeg) < 1) {
       setLimbState('broken-legs')
    } else if (parseInt(limbs.lArm) < 1 && parseInt(limbs.rArm) > 0) {
      setLimbState('l-arm-broke')
    } else if (parseInt(limbs.rArm) < 1 && parseInt(limbs.lArm) > 0) {
      setLimbState('r-arm-broke')
    } else if (parseInt(limbs.lArm) < 1 && parseInt(limbs.rArm) < 1) {
      setLimbState('broken-arms')
    }
  }, [limbs]);

  const healthStatus = () => {
    switch (limbState) {
      case 'healthy':
        return 'healthy-head'
        break;
      case 'broken-legs':
        return 'broken-legs-head'
        break;
      case 'l-arm-broke':
        return 'healthy-head'
        break;
      case 'r-arm-broke':
        return 'healthy-head'
        break;
      case 'broken-arms':
        return 'broken-arms-head'
        break;  
      default:
        return ''
        break;
    }
  }

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
                <div id='r-arm-fill' style={{"width":limbs.rArm}}></div>
              </div>
              <div className='limb-bar'>
                <div id='r-leg-fill' style={{"width":limbs.rLeg}}></div>
              </div>
            </div>

            <div className='vault-boy'>
              <HeadAnim animation={healthStatus()} headCondition={headCondition}></HeadAnim>
              {limbState === 'healthy' && <BodyAnim></BodyAnim>}
              {limbState === 'broken-legs' && <LegsBrokeAnim></LegsBrokeAnim>}
              {limbState === 'l-arm-broke' && <LarmBrokeAnim></LarmBrokeAnim>}
              {limbState === 'r-arm-broke' && <RarmBrokeAnim></RarmBrokeAnim>}
              {limbState === 'broken-arms' && <BrokeArmsAnim></BrokeArmsAnim>}
            </div>

            <div className='right-limbs'>
              <div className='limb-bar'>
                <div id='l-arm-fill' style={{"width":limbs.lArm}}></div>
              </div>
              <div className='limb-bar'>
                <div id='l-leg-fill' style={{"width":limbs.lLeg}}></div>
              </div>
            </div>
          </div>

          <div>
            <div className='limb-bar'>
              {/* apparently there is no chest cripple in fo4 and this bar is health instead*/}
              <div id='chest-fill' style={{"width":getHealthPercent()}}></div>
            </div>
          </div>
        </section>
          
        <section className='equip-stats large-text'>
          <div className='weapon-stats'>
            <GunSvg classes='backing equip-img'></GunSvg>
            <DamageList damageValues={damage}></DamageList>
          </div>

          <div className='armor-stats'>
            <HelmetSvg classes='backing equip-img'></HelmetSvg>
            <DamageList damageValues={damResist} isDamResist='true'></DamageList>
          </div>
        </section>

        <section className='nameplate small-text'>{charStats.name}</section>
      </main>
)}

export default Status;