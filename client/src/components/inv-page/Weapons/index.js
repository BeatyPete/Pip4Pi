import { useState } from 'react'
import './weapons.css'

function Weapons() {
/* character stats like damage and armor value could be stored in global store */
    const items = [
        {
            name: 'Baseball Grenade',
            quantity: 2,
            type: 'grenade',
            stats: [
                {
                    statName: 'Damage',
                    damType: [
                        {
                            icon: 'physical',
                            value: 200
                        }
                    ]
                },
                {
                    statName: 'Fire Rate',
                    value: 0
                },
                {
                    statName: 'Range',
                    value: 93
                },
                {
                    statName: 'Accuracy',
                    value: 0
                },
                {
                    statName: 'Weight',
                    value: 1
                },
                {
                    statName: 'Value',
                    value: 40
                }
            ]
        },
        {
            name: 'Cryo Mine',
            quantity: 1,
            type: 'grenade',
            stats: [
                {
                    statName: 'Damage',
                    damType: [
                        {
                            icon: 'physical',
                            value: 60
                        }
                    ]
                },
                {
                    statName: 'Fire Rate',
                    value: 0
                },
                {
                    statName: 'Range',
                    value: 93
                },
                {
                    statName: 'Accuracy',
                    value: 0
                },
                {
                    statName: 'Weight',
                    value: 0.5
                },
                {
                    statName: 'Value',
                    value: 50
                }
            ]
        },
        {
            name: 'Electrified Chinese Officer Sword',
            type: 'weapon',
            stats: [
                {
                    statName: 'Damage',
                    damType: [
                        {
                            icon: 'physical',
                            value: 85
                        },
                        {
                            icon: 'energy',
                            value: 20
                        }
                    ]
                },
                {
                    statName: 'Speed',
                    value: 'MEDIUM'
                },
                {
                    statName: 'Weight',
                    value: 3
                },
                {
                    statName: 'Value',
                    value: 100
                }
            ]
        },
        {
            name: 'Fragmentation Grenade',
            quantity: 2,
            type: 'grenade',
            stats: [
                {
                    statName: 'Damage',
                    damType: [
                        {
                            icon: 'physical',
                            value: 300
                        }
                    ]
                },
                {
                    statName: 'Fire Rate',
                    value: 0
                },
                {
                    statName: 'Range',
                    value: 93
                },
                {
                    statName: 'Accuracy',
                    value: 0
                },
                {
                    statName: 'Weight',
                    value: 0.5
                },
                {
                    statName: 'Value',
                    value: 50
                }
            ]
        },
        {
            name: 'Fragmentation Mine',
            quantity: 4,
            type: 'grenade',
            stats: [
                {
                    statName: 'Damage',
                    damType: [
                        {
                            icon: 'physical',
                            value: 250
                        }
                    ]
                },
                {
                    statName: 'Fire Rate',
                    value: 0
                },
                {
                    statName: 'Range',
                    value: 93
                },
                {
                    statName: 'Accuracy',
                    value: 0
                },
                {
                    statName: 'Weight',
                    value: 0.5
                },
                {
                    statName: 'Value',
                    value: 50
                }
            ]
        },
        {
            name: 'Suppressed Calibrated Poweful 10mm Pistol',
            type: 'weapon',
            stats: [
                {
                    statName: 'Damage',
                    damType: [
                        {
                            icon: 'physical',
                            value: 60
                        }
                    ]
                },
                {
                    statName: 'Ammo',
                    value: '10mm'
                },
                {
                    statName: 'Fire Rate',
                    value: 46
                },
                {
                    statName: 'Range',
                    value: 89
                },
                {
                    statName: 'Accuracy',
                    value: 77
                },
                {
                    statName: 'Weight',
                    value: 6.9
                },
                {
                    statName: 'Value',
                    value: 180
                }
            ]
        },
        {
            name: 'Suppressed Hardened Pipe Bolt-Action Sniper Rifle',
            type: 'weapon',
            stats: [
                {
                    statName: 'Damage',
                    damType: [
                        {
                            icon: 'physical',
                            value: 85
                        }
                    ]
                },
                {
                    statName: 'Ammo',
                    value: '.308'
                },
                {
                    statName: 'Fire Rate',
                    value: 2
                },
                {
                    statName: 'Range',
                    value: 185
                },
                {
                    statName: 'Accuracy',
                    value: 106
                },
                {
                    statName: 'Weight',
                    value: 7.3
                },
                {
                    statName: 'Value',
                    value: 94
                }
            ]
        },
        {
            name: 'Two Shot Boosted Automatic Laser Rifle',
            type: 'weapon',
            stats: [
                {
                    statName: 'Damage',
                    damType: [
                        {
                            icon: 'energy',
                            value: 91
                        }
                    ]
                },
                {
                    statName: 'Ammo',
                    value: 'Cell'
                },
                {
                    statName: 'Fire Rate',
                    value: 100
                },
                {
                    statName: 'Range',
                    value: 227
                },
                {
                    statName: 'Accuracy',
                    value: 77
                },
                {
                    statName: 'Weight',
                    value: 6.9
                },
                {
                    statName: 'Value',
                    value: 360
                }
            ]
        }
    ]

    const [deets, setDeets] = useState(items[0].stats)

    const showItemDeets = e => {
        /* could alt use the e.target.textContent to search list for itemNum or show details based on which item has the class with greenbackground */
        const eventId = e.target.id
        const itemNum = eventId.split(' ')
        console.log(items[2].stats[0].damType)
        setDeets(items[itemNum[1]].stats)
    }

    return (
    <main className='flex-center'>
        <div className='inventory-grid'>
            <section className='small-text item-list'>
                <ul>
                {items.map((item, i) => (
                    <li
                    onMouseEnter={showItemDeets}
                        key={`item ${i}`}
                        id={`item ${i}`}
                        >{`${item.name} ${item.quantity > 1 ? `(${item.quantity})` : ""}`}</li>
                    ))}
                </ul>
            </section>
            <section className='item-details-container'>
                <div></div>
                
                    <ul className='small-text'>
                        {deets.map((stat, i) => (
                            

                                stat.statName === 'Damage'
                                ? <li>
                                    <div>{stat.statName}</div>
                                    <div>
                                    {stat.damType.map((damType) => (
                                        <div>
                                            {damType.icon === 'physical'
                                            ? <svg className='stat-img' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" version="1.1">
                                                <g id="surface1">
                                                <path d="M 89.8125 37.761719 C 83.699219 31.644531 76.300781 28.160156 67.625 27.308594 L 67.625 36.691406 L 66.558594 39.464844 L 64 40.320312 L 61.226562 39.464844 L 60.160156 36.691406 L 60.160156 27.308594 C 51.484375 28.160156 44.019531 31.644531 37.761719 37.761719 C 31.644531 44.019531 28.160156 51.484375 27.308594 60.160156 L 35.839844 60.160156 L 38.613281 61.226562 L 39.679688 64 L 38.613281 66.558594 L 35.839844 67.625 L 27.308594 67.625 C 28.160156 76.300781 31.644531 83.769531 37.761719 90.027344 C 44.019531 96.140625 51.484375 99.625 60.160156 100.480469 L 60.160156 91.09375 L 61.226562 88.535156 C 61.9375 87.679688 62.863281 87.253906 64 87.253906 C 64.996094 87.253906 65.847656 87.679688 66.558594 88.535156 L 67.625 91.09375 L 67.625 100.480469 C 76.300781 99.625 83.699219 96.140625 89.8125 90.027344 C 96.070312 83.769531 99.625 76.300781 100.480469 67.625 L 91.09375 67.625 L 88.535156 66.558594 C 87.679688 65.847656 87.253906 64.996094 87.253906 64 C 87.253906 62.863281 87.679688 61.9375 88.535156 61.226562 L 91.09375 60.160156 L 100.480469 60.160156 C 99.625 51.484375 96.070312 44.019531 89.8125 37.761719 M 66.558594 1.066406 L 67.625 3.625 L 67.625 19.625 C 78.4375 20.621094 87.609375 24.960938 95.148438 32.640625 C 102.828125 40.179688 107.09375 49.351562 107.945312 60.160156 L 124.160156 60.160156 L 126.71875 61.226562 L 128 64 L 126.71875 66.558594 L 124.160156 67.625 L 107.945312 67.625 C 107.09375 78.4375 102.828125 87.609375 95.148438 95.148438 C 87.609375 102.828125 78.4375 107.09375 67.625 107.945312 L 67.625 124.160156 L 66.558594 126.71875 L 64 128 C 62.863281 128 61.9375 127.574219 61.226562 126.71875 L 60.160156 124.160156 L 60.160156 107.945312 C 49.351562 107.09375 40.105469 102.828125 32.425781 95.148438 C 24.890625 87.609375 20.621094 78.4375 19.625 67.625 L 3.625 67.625 L 1.066406 66.558594 L 0 64 L 1.066406 61.226562 L 3.625 60.160156 L 19.625 60.160156 C 20.621094 49.351562 24.890625 40.179688 32.425781 32.640625 C 40.105469 24.960938 49.351562 20.621094 60.160156 19.625 L 60.160156 3.625 L 61.226562 1.066406 L 64 0 L 66.558594 1.066406 "/>
                                                </g>
                                            </svg>
                                            : damType.icon === 'energy'
                                            ? <svg className='stat-img' viewBox="0 0 128 223" version="1.1">
                                                <g id="surface1">
                                                <path d="M 110.914062 4.722656 L 63.527344 85.042969 L 126.078125 85.042969 L 127.972656 85.988281 L 127.972656 88.820312 L 37.9375 222.054688 L 36.039062 223 L 35.09375 222.054688 L 32.25 220.164062 L 51.207031 127.5625 L 2.871094 127.5625 L 0.0273438 125.671875 L 0.0273438 123.785156 L 30.355469 2.835938 L 34.144531 0 L 109.019531 0 L 110.914062 0.945312 L 110.914062 4.722656 "/>
                                                </g>
                                            </svg> 
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
                    </ul>
            </section>
        </div>
    </main>
)}

export default Weapons;