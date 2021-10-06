import { useState, useEffect, useRef } from 'react'
import {socket} from '../../context/socket';
import { useStoreContext } from "../../utils/GlobalState";
import { CHANGE_ARMOR, CHANGE_WEAPON, CHANGE_DAMAGE, CHANGE_RESISTANCE } from "../../utils/actions";
import './item-list.css'

import DamageList from '../damageList';

import AmmoSvg from '../images/ammo';

import Paperdoll from '../images/paper-doll/paper-doll';
import ChestSvg from '../images/paper-doll/chest';
import RArmArmorSvg from '../images/paper-doll/r-arm-piece';
import LPauldronSvg from '../images/paper-doll/l-pauldron';
import RShinSvg from '../images/paper-doll/r-shin';
import LShinSvg from '../images/paper-doll/l-shin';
import GogglesSvg from '../images/paper-doll/goggles';
import DomeSvg from '../images/paper-doll/dome';
import MaskSvg from '../images/paper-doll/mask';

function ItemList({items, sub}) {
    const [state, dispatch] = useStoreContext();

    const [deets, setDeets] = useState()
    const [hoveredItem, setHoveredItem] = useState(-1)

    const { weaponSlots, armorSlots } = state;

    const hovered = useRef();

    useEffect(() => {
        socket.on('itemChange', function (data) { //get button status from client
          changeItemHover(data)
        });
        socket.on('select', function (data) { //get button status from client
            equip()
        });
    }, [socket]);

    /* cleanup for sockets otherwise they stack when changing subtabs */
    useEffect(() => {        
        return () => {
          socket.removeAllListeners("itemChange");
          socket.removeAllListeners("select");
        }
    }, [])

    /* scrolls hovered item into view and changes displayed details to current hover */
    useEffect(() => {
        if (hovered.current) {                
            hovered.current.scrollIntoViewIfNeeded(false)
            setDeets(items[hoveredItem])
        }   
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
        let eventId
        if (e) {
            eventId = e.target.id
        } else if (hovered.current){
            eventId = hovered.current.id
        } else {
            return
        }
        const itemNum = parseInt(eventId.split(' ')[1])
        const itemToEquip = items[itemNum]
        if (sub === 'WEAPONS' || sub === 'APPAREL') {
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
                    currentlyEquipped = []
                    break;
            }
            if (isEquipped(itemNum)) {
                const itemToUnequip = currentlyEquipped.findIndex((element) => element.numInList === itemNum);
                currentlyEquipped.splice(itemToUnequip, 1)
            } else {           
                for (let i = 0; i < currentlyEquipped.length; i++) {
                    const isSlotMatching = itemToEquip.type.some(v => currentlyEquipped[i].slotType.includes(v))
                    if (isSlotMatching) {
                        currentlyEquipped.splice(i, 1)
                        i--
                    }
                }
                const itemToEquipFormatting = {
                    slotType: itemToEquip.type,
                    numInList: itemNum,
                    stat: itemToEquip.stats[0].damType
                }
                currentlyEquipped.push(itemToEquipFormatting)
            }
            setDamageValues(currentlyEquipped)
            localStorage.setItem(dispatchType, JSON.stringify(currentlyEquipped));
            dispatch({
                type: dispatchType,
                slots: currentlyEquipped
            });
        } else {
            /* where functions for slecting non apparel/weapons goes */
            console.log('no')
        }
    }

    const setDamageValues = currentlyEquipped => {
        let damageValues
        switch (sub) {
            case 'WEAPONS':
                const equippedWeapon = currentlyEquipped.find(weapon => weapon.slotType[0] === 'weapon')                
                if (equippedWeapon){
                    damageValues = equippedWeapon.stat                 
                } else {
                    damageValues = {
                        physical: 18,
                        energy: 0,
                        radiation: 0
                    }
                }
                localStorage.setItem(CHANGE_DAMAGE, JSON.stringify( damageValues));     
                dispatch({
                    type: CHANGE_DAMAGE,
                    damage: damageValues 
                });    
                
                break;
            case 'APPAREL':
                let physical = 0
                let energy = 0
                let radiation = 0
                for (let i = 0; i < currentlyEquipped.length; i++) {
                    if (currentlyEquipped[i].stat) {
                        physical = physical + currentlyEquipped[i].stat.physical
                        energy = energy + currentlyEquipped[i].stat.energy
                        radiation = radiation + currentlyEquipped[i].stat.radiation
                    }                   
                }
                damageValues = {
                    physical: physical,
                    energy: energy,
                    radiation: radiation
                }
                localStorage.setItem(CHANGE_RESISTANCE, JSON.stringify(damageValues));
                dispatch({
                    type: CHANGE_RESISTANCE,
                    damResist: damageValues 
                });  
                break;
            default:
                break;
        }
    }

    const addEquippedClass = i => {
        if(sub === 'WEAPONS' || sub === 'APPAREL') {
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
        switch (sub) {
            case 'WEAPONS':
                equipArr = weaponSlots
                break;
            case 'APPAREL':
                equipArr = armorSlots
                break;
            default:
                equipArr = []
                break;
        }
        return equipArr.some(equipped)
    }

    return (
    <main className='flex-center'>
        <div className='inventory-grid'>
            <section className='small-text item-list list-container'>
                <ul>
                    {items.map((item, i) => (
                        //conditional to render the li of hovered item with ref
                        i === hoveredItem 
                        ? <li
                            ref={hovered}
                            className={`${addEquippedClass(i)} hovered`}
                            onMouseEnter={showItemDeets}
                            onClick={equip}
                            key={`item ${i}`}
                            id={`item ${i}`}
                        >
                            {`${item.name} ${item.quantity > 1 ? `(${item.quantity})` : ""}`}
                        </li>
                        : <li
                            className={`${addEquippedClass(i)}`}
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
                <div className='doll-container'>
                    
                    <Paperdoll></Paperdoll>
                    <ChestSvg></ChestSvg>
                    <RArmArmorSvg></RArmArmorSvg>
                    <LPauldronSvg></LPauldronSvg>
                    <RShinSvg></RShinSvg>
                    <LShinSvg></LShinSvg>
                    <GogglesSvg></GogglesSvg>
                    <DomeSvg></DomeSvg>
                    <MaskSvg></MaskSvg>
                    
                </div>
                    {/* do not render stats if item array is empty */}
                    {deets &&
                    <ul className='small-text'>
                        {deets.blurb &&
                            <li className='blurb'>
                                {deets.blurb}
                            </li>
                        }
                        {deets.stats.map((stat, i) => (
                            /* damage and damRes can hjave multiple values so it needs to be rendered differently */
                                stat.statName === 'Damage'
                                ? <li key={`${stat.statName} ${i}`}>
                                    <div>{stat.statName}</div>
                                    <div>
                                        <DamageList damageValues={stat.damType} isInline='true'></DamageList>
                                    </div>
                                </li>
                                : stat.statName === 'DMG Resist'
                                ? <li key={`${stat.statName} ${i}`}>
                                    <div>{stat.statName}</div>
                                    <div>
                                        <DamageList damageValues={stat.damType} isInline='true' isDamResist='true'></DamageList>
                                    </div>
                                </li>
                                : stat.statName === 'Ammo'
                                ? <li key={`${stat.statName} ${i}`}>
                                    <div>
                                        <AmmoSvg classes='stat-img'></AmmoSvg>
                                        {stat.value}
                                    </div>
                                </li>
                                : <li key={`${stat.statName} ${i}`}>
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