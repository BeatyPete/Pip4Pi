import MainTabs from "../../components/Main-tabs";

function RADIO({mainTab, setMainTab}) {

    return (
        <>
      <header>
        <MainTabs mainTab={mainTab} setMainTab={setMainTab}></MainTabs>
      </header>

      <main>
        <button>Play music</button>
      </main>

      <footer className='large-text backing'>
        <div style={{'opacity': 0}}>temp</div>
      </footer>
      </>
)}

export default RADIO;