import {useState} from 'react'
import MainTabs from "../../components/Main-tabs";
import SubTabs from "../../components/Sub-tabs";
/* import './stat.css' */

function RADIO({mainTab, setMainTab}) {

    return (
        <>
      <header>
        <MainTabs mainTab={mainTab} setMainTab={setMainTab}></MainTabs>
      </header>

      <main>RADIO</main>

      <footer className='large-text backing'>
        <div style={{'opacity': 0}}>temp</div>
      </footer>
      </>
)}

export default RADIO;