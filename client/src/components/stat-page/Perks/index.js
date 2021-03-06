import './perks.css'
import { useState, useEffect } from 'react';
import {perks} from '../../../lib/perks'
import DefaultPerkAnim from '../../animations/perks/defaultPerk';
import StarSvg from '../../images/star';
import EmptyStarSvg from '../../images/emptyStar';

function Perks() {
    const [acquiredPerks] = useState([])
    const [hoveredPerk, setHoveredPerk] = useState(0)

    const handlePerkInfo = e => {
        let eventId = e.target.id
        if(e.target.tagName === 'DIV') {
            eventId = e.target.parentNode.id
        }
        const perkNum = eventId.split(' ')
        setHoveredPerk(perkNum[1])
    }

    return (
      <main className='flex-center'>
           <div className='main-wrapper small-text'>
            <section className='list-container special-list'>
                <ul>
                {perks.map((perk, i) => (
                    <li 
                    /* ref={i === hoveredItem ? hovered: null} */
                    /* className={`${addSelectedClass(i)} ${isHovered(i)}`} */
                    onMouseEnter={handlePerkInfo}
                    id={`perks ${i}`}
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
                        {[...Array(perks[hoveredPerk].rank)].map((i) => <StarSvg key={`rank ${i}`} classes='perk-rank'></StarSvg>)}
                        {[...Array(perks[hoveredPerk].maxRank - perks[hoveredPerk].rank)].map((i) => <EmptyStarSvg key={`unrank ${i}`} classes='perk-rank'></EmptyStarSvg>)}
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