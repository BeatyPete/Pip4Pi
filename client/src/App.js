import socketIOClient from "socket.io-client";

import headAnim from "./assets/images/icon_condition_head_1.svg";
import bodyAnim from "./assets/images/icon_condition_body_0.svg";
import gun from "./assets/images/gun.svg";
import crosshair from "./assets/images/crosshair.svg";
import helmet from "./assets/images/helmet.svg";
import zap from "./assets/images/zap.svg";
import rads from "./assets/images/rads.svg";

const ENDPOINT = "http://localhost:3001";



function App() {

  /* var socket = socketIOClient(ENDPOINT); //load socket.io-client and connect to the host that serves the page
  var counter = document.getElementById("counter");

  

  socket.on('count', function (data) { //get button status from client
    counter.innerHTML = data
  }); */

  return (
    <div>
      <header>
        <nav className="main-tabs">
          <ul>
            <li>STAT</li>
            <li>SPECIAL</li>
            <li>DATA</li>
            <li>MAP</li>
            <li>RADIO</li>
          </ul>
        </nav>

        <nav className='sub-tabs'>
          <ul>
            <li>STATUS</li>
            <li>SPECIAL</li>
            <li>PERKS</li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <div>
            <div className='limb-bar'></div>
          </div>

          <div>
            <div>
              <div className='limb-bar'></div>
              <div className='limb-bar'></div>
            </div>

            <div>
              <img src={headAnim}></img>
              <img src={bodyAnim}></img>
            </div>

            <div>
              <div className='limb-bar'></div>
              <div className='limb-bar'></div>
            </div>
          </div>

          <div>
            <div className='limb-bar'></div>
          </div>
        </section>
          
        <section>
          <div>
            <img src={gun}></img>
            <div>
              <img src={crosshair}></img>
              <div>18</div>
            </div>
          </div>

          <div>
            <img src={helmet}></img>
            <div>
              <img src={zap}></img>
              <div>5</div>
            </div>
            <div>
              <img src={rads}></img>
              <div>10</div>
            </div>
          </div>
        </section>

        <section>Howard</section>
      </main>

      <footer>
        <div>HP 90/90</div>

        <div>
          LEVEL 1
          <div id='xp-bar'>
            <div id='xp-fill'></div>
          </div>
        </div>

        <div>AP 70/70</div>
      </footer>
    </div>
  );
}

export default App;
