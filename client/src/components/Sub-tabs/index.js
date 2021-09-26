import './sub-tabs.css'
import {useState, useEffect} from 'react'
/* import {socket} from '../../context/socket'; */
/* import sound from '../../assets/audio/subtab-switch.mp3' */

function SubTabs({tabs, sub, setSub}) {   
    const [pos, setPos] = useState(tabs[0].position)
    /* const audio = new Audio(sound); */


    /* useEffect(() => {
      socket.on('subChange', function (data) { //get button status from client
        changeSubTab(data)
        
      });
    }, [socket]); */

    useEffect(() => {
      let tabNum = tabs.findIndex(stuff => stuff.name === sub)
      setPos(tabs[tabNum].position)
    }, [sub]);

    // removes socket on unmount otherwise it will stack every change of main tab
   /*  useEffect(() => {        
        return () => {
          socket.removeAllListeners("subChange");
        }
    }, []) */

    /* const changeSubTab = rotation => {     
      const getNewTab = sub => {
        let tabNum = tabs.findIndex(stuff => stuff.name === sub)
        let newTabNum = tabNum + rotation
        if (newTabNum < 0) {
          newTabNum = 0
        } else if (newTabNum > tabs.length -1) {
          newTabNum = tabs.length -1
        }
        return tabs[newTabNum].name
      }
      setSub(getNewTab)
    } */

    const findSub = e => {
      
      //changeSubTab(e)
      /* audio.play(); */
        let selected = e.target.innerText
        setSub(selected)
        //const tabNum = tabs.findIndex(stuff => stuff.name === selected)
        //setPos(tabs[tabNum].position)
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
            className={setClass(i)}
            onClick={findSub}
            key={tab.name}
            >{tab.name}</li>
        ))}
          </ul>
        </nav>
)}

export default SubTabs;