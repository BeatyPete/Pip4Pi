import { useState, useEffect, useRef } from 'react'
import {socket} from '../../context/socket';
import { useStoreContext } from "../../utils/GlobalState";
import { CHANGE_WEAPONS, CHANGE_ARMOR, CHANGE_WEAPON } from "../../utils/actions";
import './item-list.css'

import ZapSvg from '../images/zap'
import CrosshairSvg from '../images/crosshair'
import ShieldSvg from '../images/shield'
import RadsSvg from '../images/rads'

function ItemList({items, sub}) {
    const [state, dispatch] = useStoreContext();

    const [deets, setDeets] = useState(items[0])
    const [hoveredItem, setHoveredItem] = useState(0)

    const { weaponSlots, armorSlots } = state;

    const hovered = useRef();

    useEffect(() => {
        socket.on('itemChange', function (data) { //get button status from client
          changeItemHover(data)
        });
        socket.on('select', function (data) { //get button status from client
            /* equipItem() */
        });
    }, [socket]);

    /* cleanup for sockets otherwise they stack when changing subtabs */
    useEffect(() => {        
        return () => {
          socket.removeAllListeners("itemChange");
        }
    }, [])

    /* scrolls hovered item into view and changes displayed details to current hover */
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
        const itemNum = parseInt(eventId.split(' ')[1])
        const itemToEquip = items[itemNum]
        if (sub === 'WEAPONS' || 'APPAREL') {
            let currentlyEquipped
            let dispatchType
            switch (sub) {
                case 'WEAPONS':
                    currentlyEquipped = weaponSlots
                    dispatchType = CHANGE_WEAPON
                    break;
                case 'APPAREL':
                    currentlyEquipped = armorSlots
                    dispatchType = CHANGE_ARMOR
                    break;
                default:
                    break;
            }
            if (isEquipped(itemNum)) {
                console.log('yup')
            } else {
                for (let i = 0; i < currentlyEquipped.length; i++) {
                    const isSlotMatching = itemToEquip.type.some(v => currentlyEquipped[i].slotType.includes(v))
                    if (isSlotMatching) {
                        console.log(i)
                        currentlyEquipped.splice(i, 1)
                        i--
                    }
                }
                
            }
            
            console.log(currentlyEquipped)
        }
        /* dispatch({
            type: EQUIP_WEAPON,
            weaponSlots: currTab
        }); */
    }

    const addEquippedClass = i => {
        if(sub === 'WEAPONS' || 'APPAREL') {
            if (isEquipped(i)) {
                return 'equipped'
            }
            else {
                return ''
            }
        } else return ''
    }

    const isEquipped = (i) => {
        const equipped = (element) => element.numInList === i;
        let equipArr
        if (sub === 'WEAPONS') {
            equipArr = weaponSlots
        } else if (sub === 'APPAREL') {
            equipArr = armorSlots
        }
        return equipArr.some(equipped)
    }

    const addHoveredClass = i => {
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
                            className={`${addEquippedClass(i)} ${addHoveredClass(i)}`}
                            onMouseEnter={showItemDeets}
                            onClick={equip}
                            key={`item ${i}`}
                            id={`item ${i}`}
                        >
                            {`${item.name} ${item.quantity > 1 ? `(${item.quantity})` : ""}`}
                        </li>
                        : <li
                            className={`${addEquippedClass(i)} ${addHoveredClass(i)}`}
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