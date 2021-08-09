import {useState, useEffect} from 'react'
import './settings.css'
import { useStoreContext } from "../../../utils/GlobalState";
import { CHANGE_SETTINGS, CHANGE_STATS, CHANGE_LIMBS } from "../../../utils/actions";

function Settings() {
    const [state, dispatch] = useStoreContext();
    const { charStats, settings, limbs } = state;


    const [optionValue, setOptionValue] = useState('')
    const [optionTitle, setOptionTitle] = useState('')

    const [charSettings, setCharacterSettings] = useState(charStats)
    const [displaySettings, setDisplaySettings] = useState(settings)
    const [limbSettings, setLimbSettings] = useState(limbs)

    useEffect(() => {
        document.documentElement.style.setProperty('--color', `${displaySettings.r}, ${displaySettings.g}, ${displaySettings.b}`);
        dispatch({
            type: CHANGE_SETTINGS,
            settings: displaySettings
        });
    }, [displaySettings.r, displaySettings.g, displaySettings.b, displaySettings.width, displaySettings.height, displaySettings.positionX, displaySettings.positionY]);

    const changeDisplayedOption = e => {
        let stugg = e.target
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
            case 'Set Chest:':
                newLimbSettings.chest = value
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
                    <input maxlength='20' minLength='1' placeholder={charStats.name}></input>
                </li>
                <li onMouseEnter={changeDisplayedOption}>
                    <div>Set Level:</div>
                    <div>{charSettings.currentLevel}</div>
                </li>
                <li onMouseEnter={changeDisplayedOption}>
                    <div>Set Level Percentage:</div>
                    <div>{charSettings.levelFillPercent}</div>
                </li>
                <li onMouseEnter={changeDisplayedOption}>
                    <div>Max Health:</div>
                    <div>{charSettings.maxHealth}</div>
                </li>
                <li onMouseEnter={changeDisplayedOption}>
                    <div>Current Health:</div>
                    <div>{charSettings.currentHealth}</div>
                </li>
                <li onMouseEnter={changeDisplayedOption}>
                    <div>Max AP:</div>
                    <div>{charSettings.maxAP}</div>
                </li>
                <li onMouseEnter={changeDisplayedOption}>
                    <div>Current AP:</div>
                    <div>{charSettings.currentAP}</div>
                </li>
                <li onMouseEnter={changeDisplayedOption}>
                    <div>Set Caps:</div>
                    <div>{charSettings.caps}</div>
                </li>
                <li onMouseEnter={changeDisplayedOption}>
                    <div>Max Weight:</div>
                    <div>{charSettings.maxWeight}</div>
                </li>
            </ul>
            <h1 className='large-text'>Limbs</h1>
            <ul className='small-text'>
                <li onMouseEnter={changeDisplayedOption}>
                    <div>Set Head:</div>
                    <div>{limbs.head}</div>
                </li>
                <li onMouseEnter={changeDisplayedOption}>
                    <div>Set Left Arm:</div>
                    <div>{limbs.lArm}</div>
                </li>
                <li onMouseEnter={changeDisplayedOption}>
                    <div>Set Right Arm:</div>
                    <div>{limbs.rArm}</div>
                </li>
                <li onMouseEnter={changeDisplayedOption}>
                    <div>Set Chest:</div>
                    <div>{limbs.chest}</div>
                </li>
                <li onMouseEnter={changeDisplayedOption}>
                    <div>Set Left Leg:</div>
                    <div>{limbs.lLeg}</div>
                </li>
                <li onMouseEnter={changeDisplayedOption}>
                    <div>Set Right Leg:</div>
                    <div>{limbs.rLeg}</div>
                </li>
            </ul>
            <h1 className='large-text'>Display Settings</h1>
            <ul className='small-text'>
                <li onMouseEnter={changeDisplayedOption}>
                    <div>Red Value:</div>
                    <div>{displaySettings.r}</div>
                </li>
                <li onMouseEnter={changeDisplayedOption}>
                    <div>Green Value:</div>
                    <div>{displaySettings.g}</div>
                </li>
                <li onMouseEnter={changeDisplayedOption}>
                    <div>Blue Value:</div>
                    <div>{displaySettings.b}</div>
                </li>
                <li onMouseEnter={changeDisplayedOption}>
                    <div>Set Width:</div>
                    <div>{displaySettings.width}</div>
                </li>
                <li onMouseEnter={changeDisplayedOption}>
                    <div>Set Height:</div>
                    <div>{displaySettings.height}</div>
                </li>
                <li onMouseEnter={changeDisplayedOption}>
                    <div>Set Horizontal Position:</div>
                    <div>{displaySettings.positionX}</div>
                </li>
                <li onMouseEnter={changeDisplayedOption}>
                    <div>Set Vertical Position:</div>
                    <div>{displaySettings.positionY}</div>
                </li>
            </ul>
            <button onClick={saveChanges}>Save Changes</button>
        </section>
        
        <section className='option-display small-text'>
            {optionValue &&
                <div className='flex-center'>
                    <button onClick={increaseOption} className='small-text'>-</button>
                    <div>{optionValue}</div>
                    <button onClick={increaseOption} className='small-text'>+</button>
                </div>
            }
        </section>

    </main>
)}

export default Settings;