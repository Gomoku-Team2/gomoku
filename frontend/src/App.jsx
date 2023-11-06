import './App.css'
import HeroImg from './components/heroImg'
import BoardModal from './components/BoardModal'
import ScoreBoardModal from './components/ScoreBoardModal'
import { useState } from 'react'

function App() {
const [currentPlayer, setCurrentPlayer]= useState(1)
  const [scores, setScores] = useState({ player1: 0, player2: 0 });

  const updateScores = (winner) => {
    if (winner === 1) {
      setScores({ ...scores, player1: scores.player1 + 1 });
    } else if (winner === 2) {
      setScores({ ...scores, player2: scores.player2 + 1 });
    }
  };

return (
<section id="landing__page">
<div className="landing__page__content">

<HeroImg/>
<BoardModal updateScores={updateScores} currentPlayer={currentPlayer} handleCurrentPlayer={setCurrentPlayer}/>
<ScoreBoardModal scores={scores} currentPlayer={currentPlayer}/>
</div>
</section>

  )
}

export default App
