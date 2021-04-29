import { Link } from "react-router-dom";
import './main-tabs.css'

function mainTabs({mainTab, setMainTab}) {

    const changeTab = e =>{
        const newTab = e.target.innerText
        setMainTab(newTab)
    }
    return (
        <nav className="main-tabs">
            <ul className="large-text">
            <li className={`${mainTab === 'STAT' ? "selected" : ""}`}>
                <div onClick={changeTab}>STAT</div>
            </li>
            <li className={`${mainTab === 'INV' ? "selected" : ""}`}>
                <div onClick={changeTab}>INV</div>
            </li>
            <li className={`${mainTab === 'DATA' ? "selected" : ""}`}>
                <div onClick={changeTab}>DATA</div>
            </li>
            <li className={`${mainTab === 'MAP' ? "selected" : ""}`}>
                <div onClick={changeTab}>MAP</div>
            </li>
            <li className={`${mainTab === 'RADIO' ? "selected" : ""}`}>
                <div onClick={changeTab}>RADIO</div>
            </li>
            </ul>
        </nav>
)}

export default mainTabs;