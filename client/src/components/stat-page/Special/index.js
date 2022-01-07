import './special.css'
import { useState } from 'react'
import { useStoreContext } from "../../../utils/GlobalState";
import StrengthAnim from '../../animations/special/strength'
import PerceptionAnim from '../../animations/special/perception';
import EnduranceAnim from '../../animations/special/endurance';
import CharismaAnim from '../../animations/special/charisma';
import IntelligenceAnim from '../../animations/special/intelligence';
import AgilityAnim from '../../animations/special/agility';
import LuckAnim from '../../animations/special/luck';

function Special() {

    const [state] = useStoreContext();
    const { charStats } = state;

    const specialDetails = [
        {
            title: 'Strength',
            description: 'Strength is a measure of your raw physical power. It affects how much you can carry, and the damage of all melee attacks.',
            value: charStats.special.Strength
        },
        {
            title: 'Perception',
            description: 'Perception is your environmental awareness and "sixth sense," and affects weapon accuracy in V.A.T.S.',
            value: charStats.special.Perception
        },
        {
            title: 'Endurance',
            description: 'Endurance is a measure of your overall physical fitness. It affects your total Health and the Action Point drain from sprinting',
            value: charStats.special.Endurance
        },
        {
            title: 'Charisma',
            description: 'Charisma is your ability to charm and convince others. It affects your success to persuade in dialogue and prices when you barter.',
            value: charStats.special.Charisma
        },
        {
            title: 'Intelligence',
            description: 'Intelligence is a measure of your overall mental acuity, and affects the number of Experience Points earned.',
            value: charStats.special.Intelligence
        },
        {
            title: 'Agility',
            description: 'Agility is a measure of your overall finesse and reflexes. It affects the number of Action Points in V.A.T.S. and your ability to sneak.',
            value: charStats.special.Agility
        },
        {
            title: 'Luck',
            description: 'Luck is a measure of your general good fortune, and affects the recharge rate of Critical Hits.',
            value: charStats.special.Luck
        },
    ]

    const [specialText, setSpecialText] = useState(specialDetails[0].description)

    const handleText = e => {
        let eventId = e.target.id
        if(e.target.tagName === 'DIV') {
            eventId = e.target.parentNode.id
        }
        const specialNum = eventId.split(' ')
        setSpecialText(specialDetails[specialNum[1]].description)
    }

    return (
    <main className='flex-center'>
        <div className='main-wrapper'>
            <section className='small-text list-container special-list'>
                <ul>
                {specialDetails.map((special, i) => (
                    <li 
                    /* ref={i === hoveredItem ? hovered: null} */
                    /* className={`${addSelectedClass(i)} ${isHovered(i)}`} */
                    key={`special ${i}`}
                    id={`special ${i}`}
                    onMouseEnter={handleText}
                    >
                    
                    <div>{special.title}</div>
                    <div>{special.value}</div>
                    </li>
                ))}
                </ul>
            </section>
            <section className='special-desc'>
                <div className="special-anim">
                    {specialText === specialDetails[0].description && <StrengthAnim></StrengthAnim>}
                    {specialText === specialDetails[1].description && <PerceptionAnim></PerceptionAnim>}
                    {specialText === specialDetails[2].description && <EnduranceAnim></EnduranceAnim>}
                    {specialText === specialDetails[3].description && <CharismaAnim></CharismaAnim>}
                    {specialText === specialDetails[4].description && <IntelligenceAnim></IntelligenceAnim>}
                    {specialText === specialDetails[5].description && <AgilityAnim></AgilityAnim>}
                    {specialText === specialDetails[6].description && <LuckAnim></LuckAnim>}    
                </div>
                <div className='special-text small-text'>
                    <p>
                        {specialText}
                    </p>
                </div>
            </section>
          </div>
    </main>
)}

export default Special;