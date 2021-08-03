import {useState} from 'react'
/* import './status.css' */
import { useStoreContext } from "../../../utils/GlobalState";
import { CHANGE_ARMOR, CHANGE_WEAPON, CHANGE_DAMAGE, CHANGE_RESISTANCE } from "../../../utils/actions";

function Settings() {
    const [state, dispatch] = useStoreContext();

    const { charStats, settings, limbs } = state;

    return (
    <main>
        <section>
            <h1>Character</h1>
            <ul>
                <li>
                    <div>Name:</div>
                    <input maxlength='20' minLength='1' placeholder={charStats.name}></input>
                </li>
                <li>
                    <div>Set Level:</div>
                    <div>{charStats.currentLevel}</div>
                </li>
                <li>
                    <div>Set Level Percentage:</div>
                    <div>{charStats.levelFillPercent}</div>
                </li>
                <li>
                    <div>Max Health:</div>
                    <div>{charStats.maxHealth}</div>
                </li>
                <li>
                    <div>Current Health:</div>
                    <div>{charStats.currentHealth}</div>
                </li>
                <li>
                    <div>Max AP:</div>
                    <div>{charStats.maxAP}</div>
                </li>
                <li>
                    <div>Current AP:</div>
                    <div>{charStats.currentAP}</div>
                </li>
                <li>
                    <div>Set Caps:</div>
                    <div>{charStats.caps}</div>
                </li>
                <li>
                    <div>Max Weight:</div>
                    <div>{charStats.maxWeight}</div>
                </li>
            </ul>
        </section>
    </main>
)}

export default Settings;