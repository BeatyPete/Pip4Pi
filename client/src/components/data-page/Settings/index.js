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
    const hovered = useRef();

    useEffect(() => {
        socket.on('itemChange', function (data) { //get button status from client
          changeItemHover(data)
        });
        socket.on('select', function (data) { //get button status from client
            click()
        });
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
            title: 'Max Health:',
            value: charSettings.maxHealth
        },
        {
            title: 'Current Health:',
            value: charSettings.currentHealth
        },
        {
            title: 'Max AP:',
            value: charSettings.maxAP
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
            title: 'Max Weight:',
            value: charSettings.maxWeight
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
        }
    ]

    useEffect(() => {
        document.documentElement.style.setProperty('--color', `${displaySettings.r}, ${displaySettings.g}, ${displaySettings.b}`);
        dispatch({
            type: CHANGE_SETTINGS,
            settings: displaySettings
        });
    }, [displaySettings.r, displaySettings.g, displaySettings.b, displaySettings.width, displaySettings.height, displaySettings.positionX, displaySettings.positionY]);

    useEffect(() => {
        /* sets name from entering text */
        let newCharSettings = charSettings
        newCharSettings.name = name
        setCharacterSettings(newCharSettings)
    }, [name]);

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
        dispatchOptions(value)
    }

    const click = () => {
        console.log('heck')
        if (hovered.current.textContent === 'Save Changes') {
            saveChanges()
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
        const valueSplit = optionValue.split(/([0-9]+)/)
        const negative = valueSplit[0]
        const value = parseInt(negative.concat(valueSplit[1]))
        const valueType = valueSplit[2]
        let newValue
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

        setOptionValue(newValue)
        dispatchOptions(newValue)
    }

    const dispatchOptions = value => {
        let newCharSettings = charSettings
        let newDisplaySettings = displaySettings
        let newLimbSettings = limbSettings
        switch (optionTitle) {
            case 'Set Level:':
                newCharSettings.currentLevel = value
                break;
            case 'Set Level Percentage:':
                newCharSettings.levelFillPercent = value
                break;
            case 'Max Health:':
                newCharSettings.maxHealth = value
                break;
            case 'Current Health:':
                newCharSettings.currentHealth = value
                break;
            case 'Max AP:':
                newCharSettings.maxAP = value
                break;
            case 'Current AP:':
                newCharSettings.currentAP = value
                break;
            case 'Set Caps:':
                newCharSettings.caps = value
                break;
            case 'Max Weight:':
                newCharSettings.maxWeight = value
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
            default:
                break;
        }
        setCharacterSettings(newCharSettings)
        setDisplaySettings(newDisplaySettings)
        setLimbSettings(newLimbSettings)
    }

    const saveChanges = () => {
        localStorage.setItem(CHANGE_STATS, JSON.stringify(charSettings));
        localStorage.setItem(CHANGE_LIMBS, JSON.stringify(limbSettings));
        localStorage.setItem(CHANGE_SETTINGS, JSON.stringify(displaySettings));
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
                    //conditional to render the li of hovered item with ref
                    i === hoveredItem 
                    ? <li
                        ref={hovered}
                        className='hovered'
                        onMouseEnter={changeDisplayedOption}
                        key={`option ${i}`}
                    >
                        <div>{option.title}</div>
                        <div>{option.value}</div>
                    </li>
                    : <li
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
                    //conditional to render the li of hovered item with ref
                    (i + characterList.length) === hoveredItem 
                    ? <li
                        ref={hovered}
                        className='hovered'
                        onMouseEnter={changeDisplayedOption}
                        key={`option ${i}`}
                    >
                        <div>{option.title}</div>
                        <div>{option.value}</div>
                    </li>
                    : <li
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
                    //conditional to render the li of hovered item with ref
                    (i + characterList.length + limbList.length) === hoveredItem 
                    ? <li
                        ref={hovered}
                        className='hovered'
                        onMouseEnter={changeDisplayedOption}
                        key={`option ${i}`}
                    >
                        <div>{option.title}</div>
                        <div>{option.value}</div>
                    </li>
                    : <li
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
                <div className='flex-center'>
                    <button onClick={increaseOption} className='small-text'>-</button>
                    {!isInput && <div onClick={handleInputDisplay}>{optionValue}</div>}
                    {isInput && <input type="number" onChange={handleInputValue}></input>}
                    <button onClick={increaseOption} className='small-text'>+</button>
                </div>
            }
        </section>

    </main>
)}

export default Settings;