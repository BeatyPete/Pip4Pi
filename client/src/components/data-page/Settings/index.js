import {useState, useEffect, useRef} from 'react'
import './settings.css'
import { useStoreContext } from "../../../utils/GlobalState";
import { CHANGE_SETTINGS, CHANGE_STATS, CHANGE_LIMBS } from "../../../utils/actions";
import {socket} from '../../../context/socket';

function Settings() {
    const [state, dispatch] = useStoreContext();
    const { charStats, settings, limbs } = state;

    const [hoveredItem, setHoveredItem] = useState(-1)
    const [name, setName] = useState(charStats.name)
    const [isInput, setIsInput] = useState(false)
    const [clickState, setClickState] = useState(false)
    const hovered = useRef();
    const option = useRef();

    useEffect(() => {
        socket.on('itemChange', function (data) { //get button status from client
          if (!option.current) {
            changeItemHover(data)
          } else if (option.current) {
            increaseOption(data)
          }
        });
        socket.on('select', function (data) { //get button status from client
            click()
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [socket]);

    /* cleanup for sockets otherwise they stack when changing subtabs */
    useEffect(() => {        
        return () => {
          socket.removeAllListeners("itemChange");
          socket.removeAllListeners("select");
        }
    }, [])

    useEffect(() => {
        if (hovered.current) {                
            hovered.current.scrollIntoViewIfNeeded(false)
        }
    }, [hoveredItem]);

    const [optionValue, setOptionValue] = useState('')
    const [optionTitle, setOptionTitle] = useState('')

    const [charSettings, setCharacterSettings] = useState(charStats)
    const [displaySettings, setDisplaySettings] = useState(settings)
    const [limbSettings, setLimbSettings] = useState(limbs)

    const characterList = [
        {
            title: 'Set Level:',
            value: charSettings.currentLevel
        },
        {
            title: 'Set Level Percentage:',
            value: charSettings.levelFillPercent
        },
        {
            title: 'Current Health:',
            value: charSettings.currentHealth
        },
        {
            title: 'Current AP:',
            value: charSettings.currentAP
        },
        {
            title: 'Set Caps:',
            value: charSettings.caps
        },
        {
            title: 'Strength:',
            value: charSettings.special.Strength
        },
        {
            title: 'Perception:',
            value: charSettings.special.Perception
        },
        {
            title: 'Endurance:',
            value: charSettings.special.Endurance
        },
        {
            title: 'Charisma:',
            value: charSettings.special.Charisma
        },
        {
            title: 'Intelligence:',
            value: charSettings.special.Intelligence
        },
        {
            title: 'Agility:',
            value: charSettings.special.Agility
        },
        {
            title: 'Luck:',
            value: charSettings.special.Luck
        }
    ]
    const limbList = [
        {
            title: 'Set Head:',
            value: limbSettings.head
        },
        {
            title: 'Set Left Arm:',
            value: limbSettings.lArm
        },
        {
            title: 'Set Right Arm:',
            value: limbSettings.rArm
        },
        {
            title: 'Set Left Leg:',
            value: limbSettings.lLeg
        },
        {
            title: 'Set Right Leg:',
            value: limbSettings.rLeg
        }
    ]
    const displayList = [
        {
            title: 'Red Value:',
            value: displaySettings.r
        },
        {
            title: 'Green Value:',
            value: displaySettings.g
        },
        {
            title: 'Blue Value:',
            value: displaySettings.b
        },
        {
            title: 'Set Width:',
            value: displaySettings.width
        },
        {
            title: 'Set Height:',
            value: displaySettings.height
        },
        {
            title: 'Set Horizontal Position:',
            value: displaySettings.positionX
        },
        {
            title: 'Set Vertical Position:',
            value: displaySettings.positionY
        },
        {
            title: 'Screen Flicker:',
            value: `${displaySettings.flicker}`
        },
        {
            title: 'Scanlines:',
            value: `${displaySettings.scanlines}`
        }
    ]

    useEffect(() => {
        /* sets name from entering text */
        let newCharSettings = charSettings
        newCharSettings.name = name
        setCharacterSettings(newCharSettings)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);

    useEffect(() => {
        if(option.current) {
            let optionTitleLocation = option.current.id
            dispatchOptions(optionValue, optionTitleLocation)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [optionValue]);

    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handleInputDisplay = e => {
        setIsInput(true)
    }
    const handleInputValue = e => {
        let value
        const valueSplit = optionValue.split(/([0-9]+)/)
        const valueType = valueSplit[2]
        value = (e.target.value).toString().concat(valueType)
        if (!e.target.value) {
            value = optionValue
        }
        dispatchOptions(value, optionTitle)
    }

    const click = () => {
        if (hovered.current.textContent === 'Save Changes') {
            saveChanges()
            return
        }
        if (!option.current) {
            setClickState(true)
        } else if (option.current) {
            setClickState(false)
        }
        
    }

    const changeItemHover = rotation => {
        const getNewTab = hoveredItem => {
            let nextItem = hoveredItem + rotation
            if (nextItem < 0) {
                nextItem = 0
              } else if (nextItem > (characterList.length + limbList.length + displayList.length)) {
                nextItem = (characterList.length + limbList.length + displayList.length)
              }
            return nextItem
          }
          setHoveredItem(getNewTab)
          changeDisplayedOption()
    }

    const changeDisplayedOption = e => {
        setIsInput(false)
        let stugg
        if (e) {
            stugg = e.target
        } else if (hovered.current){
            stugg = hovered.current
        } else {
            return
        }
        if (stugg.textContent === 'Save Changes') {
            return
        }
        if (stugg.children.length < 1) {
            stugg = e.target.parentNode
        }     
        const title = stugg.children[0].textContent
        const value = stugg.children[1].textContent
        setOptionValue(value)
        setOptionTitle(title)
    }
    const increaseOption = e => {
        
        const findValue = optionValue => {
            const isBoolean = (optionValue === 'true' || optionValue === 'false');
            if (isBoolean) {
                let bool
                if (optionValue === 'true') {
                    bool = true
                } else { 
                    bool = false 
                }
                bool = !bool;
                return `${bool}`
            }

            const valueSplit = optionValue.split(/([0-9]+)/)
            const negative = valueSplit[0]
            const value = parseInt(negative.concat(valueSplit[1]))
            const valueType = valueSplit[2]
            let newValue
            if (e.target) {
                switch (e.target.textContent) {
                    case '+':
                        newValue = (value + 1).toString().concat(valueType)
                        break;
                    case '-':
                        newValue = (value - 1).toString().concat(valueType)
                        break;
                
                    default:
                        break;
                }
            } else {
                newValue = (value + e).toString().concat(valueType)
            }
            return newValue
        }
        setOptionValue(findValue)
        if (!option.current) {
            
            dispatchOptions(findValue(optionValue), optionTitle)
        }
        
    }

    const dispatchOptions = (value, optionTitleLocation) => {
        let newCharSettings = charSettings
        let newDisplaySettings = displaySettings
        let newLimbSettings = limbSettings
        switch (optionTitleLocation) {
            case 'Set Level:':
                newCharSettings.currentLevel = value
                break;
            case 'Set Level Percentage:':
                newCharSettings.levelFillPercent = value
                break;
            case 'Current Health:':
                newCharSettings.currentHealth = value
                break;
            case 'Current AP:':
                newCharSettings.currentAP = value
                break;
            case 'Set Caps:':
                newCharSettings.caps = value
                break;
            case 'Strength:':
                newCharSettings.special.Strength = value
                break;
            case 'Perception:':
                newCharSettings.special.Perception = value
                break;
            case 'Endurance:':
                newCharSettings.special.Endurance = value
                break;
            case 'Charisma:':
                newCharSettings.special.Charisma = value
                break;
            case 'Intelligence:':
                newCharSettings.special.Intelligence = value
                break;
            case 'Agility:':
                newCharSettings.special.Agility = value
                break;
            case 'Luck:':
                newCharSettings.special.Luck = value
                break;

            case 'Set Head:':
                newLimbSettings.head = value
                break;
            case 'Set Left Arm:':
                newLimbSettings.lArm = value
                break;
            case 'Set Right Arm:':
                newLimbSettings.rArm = value
                break;
            case 'Set Left Leg:':
                newLimbSettings.lLeg = value
                break;
            case 'Set Right Leg:':
                newLimbSettings.rLeg = value
                break;

            case 'Red Value:':
                newDisplaySettings.r = value
                break;
            case 'Green Value:':
                newDisplaySettings.g = value
                break;
            case 'Blue Value:':
                newDisplaySettings.b = value
                break;
            case 'Set Width:':
                newDisplaySettings.width = value
                break;
            case 'Set Height:':
                newDisplaySettings.height = value
                break;
            case 'Set Horizontal Position:':
                newDisplaySettings.positionX = value
                break;
            case 'Set Vertical Position:':
                newDisplaySettings.positionY = value
                break;
            case 'Screen Flicker:':
                if(value === 'true') { value = true } else { value = false }
                if(typeof value != 'boolean') { value = false }
                newDisplaySettings.flicker = value
                break;
            case 'Scanlines:':
                if(value === 'true') { value = true } else { value = false }
                if(typeof value != 'boolean') { value = false }
                newDisplaySettings.scanlines = value
                break;
            default:
                break;
        }
        setCharacterSettings(newCharSettings)
        setDisplaySettings(newDisplaySettings)
        setLimbSettings(newLimbSettings)

        document.documentElement.style.setProperty('--color', `${newDisplaySettings.r}, ${newDisplaySettings.g}, ${newDisplaySettings.b}`);
        dispatch({
            type: CHANGE_SETTINGS,
            settings: newDisplaySettings
        });
        
    }

    const saveChanges = () => {
        localStorage.setItem(CHANGE_STATS, JSON.stringify(charSettings));
        localStorage.setItem(CHANGE_LIMBS, JSON.stringify(limbSettings));
        localStorage.setItem(CHANGE_SETTINGS, JSON.stringify(displaySettings));
    }

    const isHovered = (i, offset) => {
        if (i + offset === hoveredItem) {
          return 'hovered'
        } else {return ''}
      }

    return (
        <main className='flex-center'>
        <section className='list-container setting-list'>
            <h1 className='large-text'>Character</h1>
            <ul className='small-text'>
                <li>
                    <div>Name:</div>
                    <input maxLength='20' minLength='1' placeholder={charStats.name} onChange={handleNameChange}></input>
                </li>
                {characterList.map((option, i) => (
                    <li
                        ref={isHovered(i, 0) ? hovered: null}
                        className={isHovered(i, 0)}
                        onMouseEnter={changeDisplayedOption}
                        key={`option ${i}`}
                    >
                        <div>{option.title}</div>
                        <div>{option.value}</div>
                    </li>             
                ))}
            </ul>
            <h1 className='large-text'>Limbs</h1>
            <ul className='small-text'>
                {limbList.map((option, i) => (
                    <li
                        ref={isHovered(i, characterList.length) ? hovered: null}
                        className={isHovered(i, characterList.length)}
                        onMouseEnter={changeDisplayedOption}
                        key={`option ${i}`}
                    >
                        <div>{option.title}</div>
                        <div>{option.value}</div>
                    </li>   
                ))}
            </ul>
            <h1 className='large-text'>Display Settings</h1>
            <ul className='small-text'>
                {displayList.map((option, i) => (
                    <li
                        ref={isHovered(i, (characterList.length + limbList.length)) ? hovered: null}
                        className={isHovered(i, (characterList.length + limbList.length))}
                        onMouseEnter={changeDisplayedOption}
                        key={`option ${i}`}
                    >
                        <div>{option.title}</div>
                        <div>{option.value}</div>
                    </li>  
                ))}
            </ul>
            {(characterList.length + limbList.length + displayList.length) === hoveredItem? <button ref={hovered} className='hovered' onClick={saveChanges}>Save Changes</button>
            : <button onClick={saveChanges}>Save Changes</button>
            }
        </section>
        
        <section className='option-display small-text'>
            {optionValue &&
                clickState ? <div className='flex-center' ref={option} id={optionTitle}>
                    <button onClick={increaseOption} className='small-text hovered'>-</button>
                        {!isInput && <div className='hovered' onClick={handleInputDisplay}>{optionValue}</div>}
                        {isInput && <input type="number" onChange={handleInputValue}></input>}
                    <button onClick={increaseOption} className='small-text hovered'>+</button>
                </div> 
                : optionValue ? <div className='flex-center'>
                    <button onClick={increaseOption} className='small-text'>-</button>
                        {!isInput && <div onClick={handleInputDisplay}>{optionValue}</div>}
                        {isInput && <input type="number" onChange={handleInputValue}></input>}
                    <button onClick={increaseOption} className='small-text'>+</button>
                </div>
                : <div></div>
            }
        </section>

    </main>
)}

export default Settings;