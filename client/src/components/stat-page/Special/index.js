import './special.css'
import { useState } from 'react'
import StrengthAnim from '../../animations/special/strength'

function Special() {

    const specialDetails = [
        {
            title: 'Strength',
            description: 'Strength is a measure of your raw physical power. It affects how much you can carry, and the damage of all melee attacks.',
            value: 0
        },
        {
            title: 'Perception',
            description: 'Strength is a measure of your raw physical power. It affects how much you can carry, and the damage of all melee attacks.',
            value: 0
        },
        {
            title: 'Endurance',
            description: 'Strength is a measure of your raw physical power. It affects how much you can carry, and the damage of all melee attacks.',
            value: 0
        },
        {
            title: 'Charisma',
            description: 'Strength is a measure of your raw physical power. It affects how much you can carry, and the damage of all melee attacks.',
            value: 0
        },
        {
            title: 'Intelligence',
            description: 'Strength is a measure of your raw physical power. It affects how much you can carry, and the damage of all melee attacks.',
            value: 0
        },
        {
            title: 'Agility',
            description: 'Strength is a measure of your raw physical power. It affects how much you can carry, and the damage of all melee attacks.',
            value: 0
        },
        {
            title: 'Luck',
            description: 'Strength is a measure of your raw physical power. It affects how much you can carry, and the damage of all melee attacks.',
            value: 0
        },
    ]

    const [specialText, setSpecialText] = useState(specialDetails[0].description)

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
                    >
                    
                    <div>{special.title}</div>
                    <div>{special.value}</div>
                    </li>
                ))}
                </ul>
            </section>
            <section className='special-desc'>
                <div className="special-anim">
                    <StrengthAnim></StrengthAnim>
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