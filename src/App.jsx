import { useState } from 'react'
import './App.css'
import MainKeyboard from './keyboard/MainKeyboard.jsx'
import MainGet100 from './get-to-100/MainGet100.jsx'

function App() {
  const [game, setGame] = useState("WYSIWYG")

  return (<>
  <div className='game-buttons'>
    <button className="game-button" onClick={() => { setGame("WYSIWYG") }}>WYSIWYG</button>
    <button className="game-button" onClick={() => { setGame("GET TO 100") }}>GETTO100</button>
    </div>
    <h1 className='TITLE'>Game {game}</h1>
    {game==="WYSIWYG"&&<h5 className='subtitle'>What You See Is What You Get</h5>}
    {game === "WYSIWYG" && <MainKeyboard />}
    {game==="GET TO 100"&&<h5 className='subtitle'>Each player starts with a random number and tries to reach 100 using math operations,<br /> aiming to hit the target in as few steps as possible.   </h5>}
    {game === "GET TO 100" && <MainGet100 />}
  </>
  )
}

export default App
