import './main-tabs.css'
import { useStoreContext } from "../../utils/GlobalState";
import { CHANGE_MAIN_TAB } from "../../utils/actions";
import sound from '../../assets/audio/maintab-switch.mp3'

function MainTabs() {
    const [state, dispatch] = useStoreContext();
    const { mainTab } = state;
    const audio = new Audio(sound);
    

    const changeTab = e =>{
        audio.play();
        const newTab = e.target.innerText
        dispatch({
            type: CHANGE_MAIN_TAB,
            mainTab: newTab
         });
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

export default MainTabs;