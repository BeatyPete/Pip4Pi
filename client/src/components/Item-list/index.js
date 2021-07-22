import { useState, useEffect, useRef } from 'react'
import {socket} from '../../context/socket';
import './item-list.css'

import ZapSvg from '../images/zap'
import CrosshairSvg from '../images/crosshair'
import ShieldSvg from '../images/shield'
import RadsSvg from '../images/rads'

function ItemList({items}) {
/* character stats like damage and armor value could be stored in global store */
    const [deets, setDeets] = useState(items[0])
    const [hoveredItem, setHoveredItem] = useState(0)

    const hovered = useRef();

    useEffect(() => {
        socket.on('itemChange', function (data) { //get button status from client
          changeItemHover(data)
        });
        socket.on('select', function (data) { //get button status from client
            equipItem()
        });
    }, [socket]);

    useEffect(() => {        
        return () => {
          socket.removeAllListeners("itemChange");
        }
    }, [])

    useEffect(() => {
        if (items = []) {
            return
        }
        hovered.current.scrollIntoViewIfNeeded(false)
        setDeets(items[hoveredItem])       
    }, [hoveredItem]);

    const changeItemHover = rotation => {
        const getNewTab = hoveredItem => {
          let nextItem = hoveredItem + rotation
          if (nextItem < 0) {
            nextItem = 0
          } else if (nextItem > items.length - 1) {
            nextItem = items.length - 1
          }
          return nextItem
        }
        setHoveredItem(getNewTab)
    }

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

    const equipItem = () => {
        let eqippedItemArr = []
        let itemToEquip = items[hoveredItem]
        
    }

    const isHovered = i => {
        if (i === hoveredItem) {
            return 'hovered'
        } else {
            return ''
        }
    }

    return (
    <main className='flex-center'>
        <div className='inventory-grid'>
            <section className='small-text item-list'>
                <ul>
                    {items.map((item, i) => (
                        //conditional to render the li of hovered item with ref
                        i === hoveredItem 
                        ? <li
                            ref={hovered}
                            className={`equipped ${isHovered(i)}`}
                            onMouseEnter={showItemDeets}
                            onClick={equip}
                            key={`item ${i}`}
                            id={`item ${i}`}
                        >
                            {`${item.name} ${item.quantity > 1 ? `(${item.quantity})` : ""}`}
                        </li>
                        : <li
                            className={`equipped ${isHovered(i)}`}
                            onMouseEnter={showItemDeets}
                            onClick={equip}
                            key={`item ${i}`}
                            id={`item ${i}`}
                        >
                            {`${item.name} ${item.quantity > 1 ? `(${item.quantity})` : ""}`}
                        </li>
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
                                : stat.statName === 'DMG Resist'
                                ? <li>
                                    <div>{stat.statName}</div>
                                    <div>
                                    {stat.damType.map((damType) => (
                                        <div>
                                            {/* conditional rendering for the damage icon */}
                                            {damType.icon === 'physical'
                                            ? <ShieldSvg classes='stat-img'></ShieldSvg>
                                            : damType.icon === 'energy'
                                            ? <ZapSvg classes='stat-img'></ZapSvg>
                                            : damType.icon === 'radiation'
                                            ? <RadsSvg classes='stat-img'></RadsSvg>
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