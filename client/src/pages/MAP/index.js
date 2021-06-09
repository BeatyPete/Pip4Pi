import {useState} from 'react'
import MainTabs from "../../components/Main-tabs";
import SubTabs from "../../components/Sub-tabs";
/* import './stat.css' */

function MAP({mainTab, setMainTab}) {
  

  

    return (
        <>
      <header>
        <MainTabs mainTab={mainTab} setMainTab={setMainTab}></MainTabs>
      </header>

      <main>MAP</main>

      <footer className='large-text'>
        <div className='backing'>11.13.2287</div>

        <div className='backing'>11:37 AM</div>

        <div className='backing right-footer large-footer'>Commonwealth</div>
      </footer>
      </>
)}

export default MAP;