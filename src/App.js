import React, { useState } from "react"
import fatihMosque from "./assets/images/12copy.jpeg"
import stadium from "./assets/images/15copy.jpeg"
import cityCenter from "./assets/images/14copy.jpeg"
import cover from "./assets/images/16.jpeg"
import guide from "./assets/images/11.jpg"
const sectionStyle = {
  
  backgroundPosition:'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: "400px",
  backgroundImage: `url(${ cover })`
};
function App() {
  

  return (
    <>
    <div className="header-section" style={sectionStyle}>
      <h1>Visit Qalqilya</h1>
      <h4>Enjoy shopping and people's kindness in this greenful city in the north-west of West Bank - Palestine.</h4>
      </div>
      <div className="middle-section">
      <h3>Top three attractions at Qalqilya</h3>
      <div className="places-to-visit">
        <div className="fatih-mosque">
        <img src={fatihMosque}/>
        <h4>Mohammed Al - Fatih Mosque</h4>
        <p>An iconic Islamic building stands out at the entrance of Qalqilya city.</p>
        </div>
        <div className="stadium">
        <img src={stadium}/>
        <h4>Qalqilya City Stadium</h4>
        <p>The main soccer stadium of Qalqilya city hosts the two clubs "Ahli of Qalqilya" and "Islami of Qalqilya".</p>
        </div>
        <div className="zoo">
        <img src={cityCenter}/>
        <h4>Qalqilya National Zoo</h4>
        <p>It was built in 1986 on 10k sqm now it takes more than 45k sqm, perfect for families.</p>
        </div>
            </div>
        </div>
        <div className="guide-section">
          <div>
        <img src={guide}/>
        </div>
        <div className="guide-text">
            <h3>Your guide</h3>
            <p>"I have lived at Qalqilya for over 25 years, so I can show you all of its best parts and hidden secrets."</p>
            <h4>Hassan Hourani</h4>
            </div>
        </div>
    </>

  )
}
export default App;
