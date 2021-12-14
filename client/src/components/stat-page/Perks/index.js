import './perks.css'
import { useState, useEffect } from 'react';
import {perks} from '../../../lib/perks'
import DefaultPerkAnim from '../../animations/perks/defaultPerk';
import StarSvg from '../../images/star';
import EmptyStarSvg from '../../images/emptyStar';

function Perks() {
    const [acquiredPerks] = useState([])
    const [hoveredPerk, setHoveredPerk] = useState(0)

    return (
      <main className='flex-center'>
           <div className='main-wrapper small-text'>
            <section className='list-container special-list'>
                <ul>
                {perks.map((perk, i) => (
                    <li 
                    /* ref={i === hoveredItem ? hovered: null} */
                    /* className={`${addSelectedClass(i)} ${isHovered(i)}`} */
                    key={`perks ${i}`}
                    >
                    
                        <div>{perk.name}</div>
                    </li>
                ))}
                </ul>
            </section>
            <section className='perk-info'>
                <div className='flex-center perk-anim'>
                    <DefaultPerkAnim></DefaultPerkAnim>
                </div>
                <div>
                    <div className='flex-center'>
                        {[...Array(perks[hoveredPerk].rank)].map((e, i) => <StarSvg classes='perk-rank'></StarSvg>)}
                        {[...Array(perks[hoveredPerk].maxRank - perks[hoveredPerk].rank)].map((e, i) => <EmptyStarSvg classes='perk-rank'></EmptyStarSvg>)}
                        {/* <StarSvg classes='perk-rank'></StarSvg>
                        <EmptyStarSvg classes='perk-rank'></EmptyStarSvg> */}
                    </div>
                    <div className='perk-text'>
                        {perks[hoveredPerk].description}
                    </div>
                </div>
            </section>
          </div>
      </main>
)}

export default Perks;