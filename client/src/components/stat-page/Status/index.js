import './status.css'

import GunSvg from '../../images/gun'
import ZapSvg from '../../images/zap'
import HelmetSvg from '../../images/helmet'
import CrosshairSvg from '../../images/crosshair'
import RadsSvg from '../../images/rads'

import BodyAnim from '../../animations/status-body'
import HeadAnim from '../../animations/status-head'
import LegsBrokeAnim from '../../animations/legs-broke'

function Status() {
    return (
        <main>
        <section className="character">
          <div>
            <div className='limb-bar'>
              <div id='head-fill'></div>
            </div>
          </div>

          <div className='char-middle'>
            <div className='left-limbs'>
              <div className='limb-bar'>
                <div id='l-arm-fill'></div>
              </div>
              <div className='limb-bar'>
                <div id='l-leg-fill'></div>
              </div>
            </div>

            <div className='vault-boy'>
              <HeadAnim></HeadAnim>
              <BodyAnim></BodyAnim>
              {/* <LegsBrokeAnim></LegsBrokeAnim> */}
            </div>

            <div className='right-limbs'>
              <div className='limb-bar'>
                <div id='r-arm-fill'></div>
              </div>
              <div className='limb-bar'>
                <div id='r-leg-fill'></div>
              </div>
            </div>
          </div>

          <div>
            <div className='limb-bar'>
              <div id='chest-fill'></div>
            </div>
          </div>
        </section>
          
        <section className='equip-stats large-text'>
          <div className='weapon-stats'>
            <GunSvg classes='backing equip-img'></GunSvg>
            <div className='backing stat-info'>
              <CrosshairSvg classes='stat-img'></CrosshairSvg>
              <div>18</div>
            </div>  
          </div>

          <div className='armor-stats'>
            <HelmetSvg classes='backing equip-img'></HelmetSvg>
            <div className='backing stat-info'>
              <ZapSvg classes='stat-img'></ZapSvg>
              <div>5</div>
            </div>
            <div className='backing stat-info'>
              <RadsSvg classes='stat-img'></RadsSvg>
              <div>10</div>
            </div>
          </div>
        </section>

        <section className='nameplate small-text'>Howard</section>
      </main>
)}

export default Status;