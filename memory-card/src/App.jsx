import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="top-section">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Meowmory Card</h1>
          <p>
            Test your memory! Click each unique image a single time until you have clicked them all. If you click a given image more than once, you lose!
          </p>
        </div>
      </section>

      <section id='score-section'>
        <p>Score:</p>
        <p>Best Score:</p>
      </section>

      <section id='card-section'>

      </section>
    </>
  )
}

export default App

// My cat api key:
// live_vRI68oYBqS7rcFFbZJoraZyrDdKr0e9AKCOrz4ug0xZzSUityVQ6a6YXzXid2zU9