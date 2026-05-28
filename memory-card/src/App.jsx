import { useEffect, useState } from 'react'
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


function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}


function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardCount, setCardCount] = useState('');
  const [hasLost, setHasLost] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [randomCatsArr, setRandomCatsArr] = useState([]);
  const [catsArr, setCatsArr] = useState(shuffleArray([
    { id: crypto.randomUUID(), name: 'Freyja', url: freyja, clicked: false },
    { id: crypto.randomUUID(), name: 'Mew', url: mew, clicked: false },
    { id: crypto.randomUUID(), name: 'Yuumi', url: yuumi, clicked: false },
    { id: crypto.randomUUID(), name: 'Halo', url: halo, clicked: false },
    { id: crypto.randomUUID(), name: 'Kristen', url: kristen, clicked: false },
    { id: crypto.randomUUID(), name: 'Endeavor', url: endeavor, clicked: false },
    { id: crypto.randomUUID(), name: 'Entei', url: entei, clicked: false },
    { id: crypto.randomUUID(), name: 'Boo', url: boo, clicked: false },
    { id: crypto.randomUUID(), name: 'Disco', url: disco, clicked: false },
    { id: crypto.randomUUID(), name: 'Fade', url: fade, clicked: false },
    { id: crypto.randomUUID(), name: 'Schrodinger', url: schrodinger, clicked: false },
    { id: crypto.randomUUID(), name: 'Cinnamon', url: cinnamon, clicked: false },
    { id: crypto.randomUUID(), name: 'Umbreon', url: umbreon, clicked: false },
    { id: crypto.randomUUID(), name: 'Moo', url: moo, clicked: false },
    { id: crypto.randomUUID(), name: 'Migi', url: migi, clicked: false },
    { id: crypto.randomUUID(), name: 'Popcorn', url: popcorn, clicked: false },
  ]));


  const handleCardClick = (clickedCat) => {
    setCatsArr(shuffleArray(catsArr));
    if (clickedCat.clicked === true) {
      setHasLost(true);
    } else if (score + 1 === catsArr.length) {
      setScore(score + 1);
      setHasWon(true);
      if (score + 1 > bestScore) {
        setBestScore(score + 1);
      }
    } else {
      setScore(score + 1);
      clickedCat.clicked = true;
      if (score + 1 > bestScore) {
        setBestScore(score + 1);
      }
    }
  }


  function resetAfterGame() {
    setScore(0);
    setHasWon(false);
    setHasLost(false);
    setCatsArr(cats => cats.map((cat) => {
      return { ...cat, clicked: false };
    }));
  }


  async function generateArrOfRandomCats() {
    try {
      const resp = await fetch(`https://api.thecatapi.com/v1/images/search?limit=16&api_key=live_vRI68oYBqS7rcFFbZJoraZyrDdKr0e9AKCOrz4ug0xZzSUityVQ6a6YXzXid2zU9`);
      const randomCats = await resp.json();
      setRandomCatsArr(randomCats);
      setCatsArr(randomCats)
    } catch (err) {
      alert(err);
    }
  }


  return (
    <>
      <AppHeader score={score} setScore={setScore} bestScore={bestScore} generateArrOfRandomCats={generateArrOfRandomCats} />
      <dialog id="my-dialog" popover='auto' open={hasLost}>
        <p>GG, you already booped that cat :3</p>
        <p>Here's how you did:</p>
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
        <button onClick={() => resetAfterGame()}>Close</button>
      </dialog>
      <dialog id="my-dialog-2" popover='auto' open={hasWon}>
        <p>YOU WON. MEMORY GOOD? EINSTEIN INDEED!!!!!!</p>
        <button onClick={() => resetAfterGame()}>Close</button>
      </dialog>
      <AppCardContainer catsArr={catsArr} setCatsArr={setCatsArr} handleCardClick={handleCardClick} />
    </>
  )
}

export default App

// My cat key:
// live_vRI68oYBqS7rcFFbZJoraZyrDdKr0e9AKCOrz4ug0xZzSUityVQ6a6YXzXid2zU9
// This is for "https://thecatapi.com/"