import './sub-tabs.css'
import {useState} from 'react'
import sound from '../../assets/audio/subtab-switch.mp3'

function SubTabs({tabs, sub, setSub}) {
    /* console.log(tabs) */
    
    const [pos, setPos] = useState(tabs[0].position)
    const audio = new Audio(sound);

    const findSub = e => {
      /* audio.play(); */
        let selected = e.target.innerText
        setSub(e.target.innerText)
        const tabNum = tabs.findIndex(stuff => stuff.name === selected)
        setPos(tabs[tabNum].position)
        /* console.log(tabNum) */
      }

    const setClass = (i) => {
        const tabNum = tabs.findIndex(stuff => stuff.name === sub)
        if (i === tabNum) {
            return "selected-sub"
        } else if(i - 1 === tabNum || i + 1 === tabNum) {
            return "second-tabs"
        } else if (i + 2 === tabNum || i - 2 === tabNum) {
            return 'third-tabs'
        } else {
            return 'hidden-tabs'
        }
    }

    return (
        <nav className='sub-tabs'>
          <ul style={{"right":pos}} className='small-text'>
            {tabs.map((tab, i) => (
          <li
            class={setClass(i)}
            onClick={findSub}
            key={tab.name}
            >{tab.name}</li>
        ))}
          </ul>
        </nav>
)}

export default SubTabs;