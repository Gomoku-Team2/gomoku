import './App.css'
import HeroImg from './components/heroImg'
import BoardModal from './components/BoardModal'
import gameData from "../../backend/src/routes/game.json"
import { useEffect } from 'react'


function App() {
  useEffect(() => {
  console.log(gameData)
  }, []);
return (
<section id='landing__page'>
<div className='landing__page--content'>
<HeroImg/>
<BoardModal/>
</div>
</section>



  )
}

export default App
