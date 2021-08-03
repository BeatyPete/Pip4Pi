/* import './status.css' */
import ZapSvg from '../images/zap'
import CrosshairSvg from '../images/crosshair'
import ShieldSvg from '../images/shield'
import RadsSvg from '../images/rads'
import AmmoSvg from '../images/ammo';
import ammoSvg from '../images/ammo';


function DamageList({ damageValues, isInline, isDamResist }) {

    const noArmorEquipped = () => {
        if (damageValues.energy === 0 && damageValues.radiation === 0 || damageValues.physical > 0) {
          return true
        } else {
          return false
        }
    }
    
    const styleCheck = () => {
        if (isInline) {
            return 'footer-stat'
        } else {
            return 'backing stat-info'
        }
    }

    return (
        <>
          {noArmorEquipped() &&
            <div className={styleCheck()}>
              
              {isDamResist 
              ? <ShieldSvg classes='stat-img'></ShieldSvg>
              : <CrosshairSvg classes='stat-img'></CrosshairSvg>
              }
              <div>{damageValues.physical}</div>
            </div>
          }
          {damageValues.energy > 0 &&
            <div className={styleCheck()}>
              <ZapSvg classes='stat-img'></ZapSvg>
              <div>{damageValues.energy}</div>
            </div>
          }
          {damageValues.radiation > 0 &&
            <div className={styleCheck()}>
              <RadsSvg classes='stat-img'></RadsSvg>
              <div>{damageValues.radiation}</div>
            </div>
          }
        </>
)}

export default DamageList;