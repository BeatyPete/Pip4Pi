import './status.css'
import {useState, useEffect} from 'react'

import DamageList from '../../damageList'

import GunSvg from '../../images/gun'
import HelmetSvg from '../../images/helmet'

import BodyAnim from '../../animations/limb-conditions/status-body'
import HeadAnim from '../../animations/limb-conditions/status-head'
import BrokeLegsAnim from '../../animations/limb-conditions/legs-broke'
import LarmBrokeAnim from '../../animations/limb-conditions/l-arm-broke'
import LArmLLegBrokeAnim from '../../animations/limb-conditions/lArm-lLeg-broke'
import LArmRLegBrokeAnim from '../../animations/limb-conditions/lArm-rLeg-broke'
import RarmBrokeAnim from '../../animations/limb-conditions/r-arm-broke'
import RArmLLegBrokeAnim from '../../animations/limb-conditions/rArm-lLeg-broke'
import RArmRLegBrokeAnim from '../../animations/limb-conditions/rArm-rLeg-broke'
import BrokeArmsAnim from '../../animations/limb-conditions/arms-broke'
import RLegBrokeAnim from '../../animations/limb-conditions/r-leg-broke'
import LLegBrokeAnim from '../../animations/limb-conditions/l-leg-broke'
import BrokeArmslLegAnim from '../../animations/limb-conditions/arms-lLeg-broke'
import BrokeArmsrLegAnim from '../../animations/limb-conditions/arms-rLeg-broke'
import WholeBodyBrokeAnim from '../../animations/limb-conditions/whole-body-broke'
import BrokeLegslArmAnim from '../../animations/limb-conditions/lArm-legs-broke'
import BrokeLegsrArmAnim from '../../animations/limb-conditions/rArm-legs-broke'

import { useStoreContext } from "../../../utils/GlobalState";

function Status() {
  const [state] = useStoreContext();
  const { charStats, limbs, damage, damResist } = state;
  const [limbState, setLimbState] = useState('healthy')
  const [headCondition, setHeadCondition] = useState('healthy')

  useEffect(() => {
    if (parseInt(limbs.head) < 1) {
      setHeadCondition('head-broken')
    }
    if ( parseInt(limbs.lArm) > 0 && parseInt(limbs.rArm) > 0 && parseInt(limbs.lLeg) < 1 && parseInt(limbs.rLeg) < 1 ) {
       setLimbState('broken-legs')
    } else if ( parseInt(limbs.lArm) < 1 && parseInt(limbs.rArm) > 0 && parseInt(limbs.lLeg) > 0 && parseInt(limbs.rLeg) > 0 ) {
      setLimbState('l-arm-broke')
    } else if ( parseInt(limbs.lArm) < 1 && parseInt(limbs.rArm) > 0 && parseInt(limbs.lLeg) < 1 && parseInt(limbs.rLeg) > 0 ) {
      setLimbState('lArm-lLeg-broke')
    } else if ( parseInt(limbs.lArm) < 1 && parseInt(limbs.rArm) > 0 && parseInt(limbs.lLeg) > 0 && parseInt(limbs.rLeg) < 1 ) {
      setLimbState('lArm-rLeg-broke')
    } else if ( parseInt(limbs.lArm) > 0 && parseInt(limbs.rArm) < 1 && parseInt(limbs.lLeg) > 0 && parseInt(limbs.rLeg) > 0 ) {
      setLimbState('r-arm-broke')
    } else if ( parseInt(limbs.lArm) > 0 && parseInt(limbs.rArm) < 1 && parseInt(limbs.lLeg) < 1 && parseInt(limbs.rLeg) > 0 ) {
      setLimbState('rArm-lLeg-broke')
    } else if ( parseInt(limbs.lArm) > 0 && parseInt(limbs.rArm) < 1 && parseInt(limbs.lLeg) > 0 && parseInt(limbs.rLeg) < 1 ) {
      setLimbState('rArm-rLeg-broke')
    } else if ( parseInt(limbs.lArm) < 1 && parseInt(limbs.rArm) < 1 && parseInt(limbs.lLeg) > 0 && parseInt(limbs.rLeg) > 0 ) {
      setLimbState('broken-arms')
    } else if ( parseInt(limbs.lArm) < 1 && parseInt(limbs.rArm) < 1 && parseInt(limbs.lLeg) < 1 && parseInt(limbs.rLeg) > 0 ) {
      setLimbState('broken-arms-lLeg')
    } else if ( parseInt(limbs.lArm) < 1 && parseInt(limbs.rArm) < 1 && parseInt(limbs.lLeg) > 0 && parseInt(limbs.rLeg) < 1 ) {
      setLimbState('broken-arms-rLeg')
    } else if ( parseInt(limbs.lArm) > 0 && parseInt(limbs.rArm) > 0 && parseInt(limbs.lLeg) < 1 && parseInt(limbs.rLeg) > 0 ) {
      setLimbState('l-leg-broke')
    } else if ( parseInt(limbs.lArm) > 0 && parseInt(limbs.rArm) > 0 && parseInt(limbs.lLeg) > 0 && parseInt(limbs.rLeg) < 1 ) {
      setLimbState('r-leg-broke')
    } else if ( parseInt(limbs.lArm) < 1 && parseInt(limbs.rArm) > 0 && parseInt(limbs.lLeg) < 1 && parseInt(limbs.rLeg) < 1 ) {
      setLimbState('broken-legs-lArm')
    } else if ( parseInt(limbs.lArm) > 0 && parseInt(limbs.rArm) < 1 && parseInt(limbs.lLeg) < 1 && parseInt(limbs.rLeg) < 1 ) {
      setLimbState('broken-legs-rArm')
    } else if ( parseInt(limbs.lArm) < 1 && parseInt(limbs.rArm) < 1 && parseInt(limbs.lLeg) < 1 && parseInt(limbs.rLeg) < 1 ) {
      setLimbState('broken-body')
    }
  }, [limbs]);

  const healthStatus = () => {
    switch (limbState) {
      case 'healthy':
        return 'healthy-head'
        break;
      case 'l-arm-broke':
        return 'healthy-head'
        break;
      case 'r-arm-broke':
        return 'healthy-head'
        break;
      case 'broken-arms':
        return 'healthy-head'
        break; 
      case 'broken-arms-lLeg':
        return 'broke-arms-lLeg-head'
        break;  
      case 'broken-arms-rLeg':
        /* this one could use its own anim */
        return 'broke-arms-lLeg-head'
        break;   
      case 'r-leg-broke':
        return 'broke-rLeg-head'
        break; 
      case 'l-leg-broke':
        return 'broke-lLeg-head'
        break;
      case 'broken-legs-lArm':
        return 'broken-legs-lArm-head'
        break;
      case 'broken-legs-rArm':
        return 'broken-legs-lArm-head'
        break;
      case 'broken-body':
        return 'broke-body-head'
        break;
      case 'lArm-lLeg-broke':
        return 'broke-lArm-lLeg-head'
        break;
      case 'rArm-lLeg-broke':
        return 'broke-rArm-lLeg-head'
        break;
      case 'lArm-rLeg-broke':
        return 'broke-lArm-rLeg-head'
        break;
      case 'rArm-rLeg-broke':
        return 'broke-rArm-rLeg-head'
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
              {limbState === 'l-arm-broke' && <LarmBrokeAnim></LarmBrokeAnim>}
              {limbState === 'lArm-lLeg-broke' && <LArmLLegBrokeAnim></LArmLLegBrokeAnim>}
              {limbState === 'lArm-rLeg-broke' && <LArmRLegBrokeAnim></LArmRLegBrokeAnim>}
              {limbState === 'r-arm-broke' && <RarmBrokeAnim></RarmBrokeAnim>}
              {limbState === 'rArm-lLeg-broke' && <RArmLLegBrokeAnim></RArmLLegBrokeAnim>}
              {limbState === 'rArm-rLeg-broke' && <RArmRLegBrokeAnim></RArmRLegBrokeAnim>}
              {limbState === 'broken-arms' && <BrokeArmsAnim></BrokeArmsAnim>}
              {limbState === 'broken-arms-lLeg' && <BrokeArmslLegAnim></BrokeArmslLegAnim>}
              {limbState === 'broken-arms-rLeg' && <BrokeArmsrLegAnim></BrokeArmsrLegAnim>}
              {limbState === 'r-leg-broke' && <RLegBrokeAnim></RLegBrokeAnim>}
              {limbState === 'l-leg-broke' && <LLegBrokeAnim></LLegBrokeAnim>}
              {limbState === 'broken-legs' && <BrokeLegsAnim></BrokeLegsAnim>}
              {limbState === 'broken-legs-lArm' && <BrokeLegslArmAnim></BrokeLegslArmAnim>}
              {limbState === 'broken-legs-rArm' && <BrokeLegsrArmAnim></BrokeLegsrArmAnim>}
              {limbState === 'broken-body' && <WholeBodyBrokeAnim></WholeBodyBrokeAnim>}
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