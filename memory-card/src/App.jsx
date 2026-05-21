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

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardCount, setCardCount] = useState('');
  const [catsArr, setCatsArr] = useState([
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
  ]);

  useEffect(() => {
    console.log('this is getting hit', catsArr);
    setCatsArr(shuffleArray(catsArr));
    // call shuffleArray(catsArr) when a cat is clicked
  }, []);



  function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }


  const handleCardClick = (cardId) => {
    setCatsArr(cats => shuffleArray(cats.map(cat => {
      if (cat.id === cardId) {
        if (cat.clicked === true) {
          if (score > bestScore) {
            setBestScore(score);
          }

          // record total true 

          // GG YA LOST SON
          // popup showing score that round and highest score of session
          // popup will have button to continue (reset score / shuffle cards)
        }

        console.log('score before:', score);
        setScore(score + 1);
        return { ...cat, clicked: true };
      }
      return cat;
    })));
  }

  console.log('score after:', score);

  return (
    <>
      <AppHeader />
      {/* <img src={catsArr[14].url} alt='A wild wild boyo' id='wild-cat' /> */}
      <AppCardContainer catsArr={catsArr} setCatsArr={setCatsArr} handleCardClick={handleCardClick} />
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