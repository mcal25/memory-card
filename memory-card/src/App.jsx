import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import wildCat from './assets/wildcatdude.jpg'
import freyja from './assets/special-cats/freyja.jpg'
import boo from './assets/special-cats/boo.png'
import cinnamon from './assets/special-cats/cinnamon.png'
import disco from './assets/special-cats/disco.jpg'
import endeavor from './assets/special-cats/endeavor.jpg'
import entei from './assets/special-cats/entei.jpg'
import fade from './assets/special-cats/fade.jpg'
import halo from './assets/special-cats/halo.jpg'
import mew from './assets/special-cats/mew.jpg'
import migi from './assets/special-cats/migi.jpg'
import moo from './assets/special-cats/moo.jpg'
import kristen from './assets/special-cats/placeholderkristen.jpg'
import popcorn from './assets/special-cats/popcorn.png'
import schrodinger from './assets/special-cats/schrodinger.jpg'
import umbreon from './assets/special-cats/umbreon.jpg'
import yuumi from './assets/special-cats/yuumi.png'
import { AppCardContainer } from './components/AppCardContainer.jsx'
import { AppHeader } from './components/AppHeader.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');
  const [score, setScore] = useState('');
  const [bestScore, setBestScore] = useState('');
  const [cardCount, setCardCount] = useState('');
  const [catsArr, setCatsArr] = useState([
    {id:crypto.randomUUID(), name: 'Freyja', url: freyja},
    {id:crypto.randomUUID(), name: 'Mew', url: mew},
    {id:crypto.randomUUID(), name: 'Yuumi', url: yuumi},
    {id:crypto.randomUUID(), name: 'Halo', url: halo},
    {id:crypto.randomUUID(), name: 'Kristen', url: kristen},
    {id:crypto.randomUUID(), name: 'Endeavor', url: endeavor},
    {id:crypto.randomUUID(), name: 'Entei', url: entei},
    {id:crypto.randomUUID(), name: 'Boo', url: boo},
    {id:crypto.randomUUID(), name: 'Disco', url: disco},
    {id:crypto.randomUUID(), name: 'Fade', url: fade},
    {id:crypto.randomUUID(), name: 'Schrodinger', url: schrodinger},
    {id:crypto.randomUUID(), name: 'Cinnamon', url: cinnamon},
    {id:crypto.randomUUID(), name: 'Umbreon', url: umbreon},
    {id:crypto.randomUUID(), name: 'Moo', url: moo},
    {id:crypto.randomUUID(), name: 'Migi', url: migi},
    {id:crypto.randomUUID(), name: 'Popcorn', url: popcorn},
  ]);

  // const catsArr = [..];

  

  


  return (
    <>
      <AppHeader />
      {/* <img src={catsArr[14].url} alt='A wild wild boyo' id='wild-cat' /> */}
      <AppCardContainer catsArr={catsArr}/>
    </>
  )
}

export default App

// My cat api key:
// live_vRI68oYBqS7rcFFbZJoraZyrDdKr0e9AKCOrz4ug0xZzSUityVQ6a6YXzXid2zU9
// This is for "https://thecatapi.com/"

/* <section id="top-section">
  <div className="hero">
    <img src={heroImg} className="base" width="170" height="179" alt="" />
    <img src={reactLogo} className="framework" alt="React logo" />
    <img src={viteLogo} className="vite" alt="Vite logo" />
  </div>
  <div>
    <h1>Meowmory Card</h1>
    <Card></Card>
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

</section> */