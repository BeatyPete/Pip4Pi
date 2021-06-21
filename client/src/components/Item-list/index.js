import { useState } from 'react'
import './item-list.css'

import ZapSvg from '../images/zap'
import CrosshairSvg from '../images/crosshair'

function ItemList({items}) {
/* character stats like damage and armor value could be stored in global store */
    const [deets, setDeets] = useState(items[0])

    const showItemDeets = e => {
        /* could alt use the e.target.textContent to search list for itemNum or show details based on which item has the class with greenbackground */
        const eventId = e.target.id
        const itemNum = eventId.split(' ')
        setDeets(items[itemNum[1]])
    }

    const equip = e => {
        const eventId = e.target.id
        const itemNum = eventId.split(' ')
        console.log(itemNum[1])
    }

    return (
    <main className='flex-center'>
        <div className='inventory-grid'>
            <section className='small-text item-list'>
                <ul>
                {items.map((item, i) => (
                    <li
                    className='equipped'
                    onMouseEnter={showItemDeets}
                    onClick={equip}
                        key={`item ${i}`}
                        id={`item ${i}`}
                        >{`${item.name} ${item.quantity > 1 ? `(${item.quantity})` : ""}`}</li>
                    ))}
                </ul>
            </section>
            <section className='item-details-container'>
                <div></div>
                    {/* do not render stats if item array is empty */}
                    {deets &&
                    <ul className='small-text'>
                        {deets.stats.map((stat, i) => (
                            /* damage and damRes can hjave multiple values so it needs to be rendered differently */
                                stat.statName === 'Damage'
                                ? <li>
                                    <div>{stat.statName}</div>
                                    <div>
                                    {stat.damType.map((damType) => (
                                        <div>
                                            {/* conditional rendering for the damage icon */}
                                            {damType.icon === 'physical'
                                            ? <CrosshairSvg classes='stat-img'></CrosshairSvg>
                                            : damType.icon === 'energy'
                                            ? <ZapSvg classes='stat-img'></ZapSvg>
                                            /* extra damage types can be added on next conditional */
                                            : ''}
                                            {damType.value}
                                        </div>
                                    ))}
                                    </div>
                                </li>
                                : <li key={stat.name}>
                                    <div>{stat.statName}</div>
                                    <div>{stat.value}</div>
                                </li>
                                
                        ))}
                    </ul> }
            </section>
        </div>
    </main>
)}

export default ItemList;