
import MainTabs from "../../components/Main-tabs";
import './inv.css'

function STAT() {
    return (
        <>
      <header>
        <MainTabs></MainTabs>

        <nav className='sub-tabs'>
          <ul className='small-text'>
            <li>STATUS</li>
            <li id='second'>SPECIAL</li>
            <li id='third'>PERKS</li>
          </ul>
        </nav>
      </header>

      <main>
        
      </main>

      <footer className='large-text'>
        <div className='backing'>HP 90/90</div>

        <div className='backing xp-container'>
          LEVEL 1
          <div id='xp-bar'>
            <div id='xp-fill'></div>
          </div>
        </div>

        <div className='backing' id="ap">AP 70/70</div>
      </footer>
      </>
)}

export default STAT;